import {
  EXAM_MODES,
  calculateExamResults,
  getMixedQuota,
  selectExamQuestions,
} from "../assets/js/exam-engine.js?gsi2";
import { createActiveExamState, validateActiveExamState } from "../assets/js/exam-storage.js?gsi2";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function test(name, callback) {
  const item = document.createElement("li");
  try {
    callback();
    item.className = "pass";
    item.textContent = `APROBADA: ${name}`;
    passed += 1;
  } catch (error) {
    item.className = "fail";
    item.textContent = `FALLIDA: ${name} — ${error.message}`;
    failed += 1;
  }
  results.append(item);
}

function fixture(id, collection, overrides = {}) {
  return {
    id,
    collection,
    origin: collection === "official" ? "official" : "ai",
    validation_status: "validated",
    official_status: collection === "official" ? "official" : "not_official",
    is_active: true,
    isDemo: collection === "demo",
    block_id: "B1",
    topic_id: "B1-T01",
    options: [
      { id: "A", text: "Opción técnica A" },
      { id: "B", text: "Opción técnica B" },
      { id: "C", text: "Opción técnica C" },
      { id: "D", text: "Opción técnica D" },
    ],
    correct_option: "A",
    ...overrides,
  };
}

function config(mode, overrides = {}) {
  return {
    mode,
    questionCount: 1,
    durationSeconds: 600,
    blockIds: ["B1"],
    boePercentage: 50,
    penaltyPerError: 0.25,
    shuffleQuestions: false,
    shuffleOptions: false,
    demoEnabled: false,
    ...overrides,
  };
}

const boeOne = fixture("FIX-BOE-1", "official");
const boeTwo = fixture("FIX-BOE-2", "official");
const aiOne = fixture("FIX-AI-1", "ai");
const aiTwo = fixture("FIX-AI-2", "ai");
const aiDraft = fixture("FIX-AI-DRAFT", "ai", { validation_status: "draft" });
const aiInactive = fixture("FIX-AI-INACTIVE", "ai", { is_active: false });
const manual = fixture("FIX-MAN-1", "manual", { origin: "manual" });
const demo = fixture("FIX-DEMO-1", "demo", { origin: "ai", validation_status: "draft", isDemo: true });

test("Solo BOE usa exclusivamente la colección oficial activa", () => {
  const selection = selectExamQuestions([boeOne, aiOne, manual], config(EXAM_MODES.BOE));
  assert(!selection.errors && selection.questions.length === 1, "No se seleccionó una pregunta BOE.");
  assert(selection.questions[0].id === boeOne.id, "Entró una pregunta de otro origen.");
});

test("Solo IA validada excluye borradores e inactivas", () => {
  const selection = selectExamQuestions([aiOne, aiDraft, aiInactive, boeOne], config(EXAM_MODES.AI_VALIDATED));
  assert(!selection.errors && selection.questions[0].id === aiOne.id, "La selección IA no filtró correctamente.");
});

test("Mixto calcula cuotas exactas sin sustituir orígenes", () => {
  const selection = selectExamQuestions([boeOne, boeTwo, aiOne, aiTwo], config(EXAM_MODES.MIXED, { questionCount: 4 }));
  assert(!selection.errors, "El mixto no pudo iniciar.");
  assert(selection.quotas.boeCount === 2 && selection.quotas.aiCount === 2, "Cuotas mixtas incorrectas.");
  assert(selection.questions.filter((question) => question.collection === "official").length === 2, "Cuota BOE incorrecta.");
  assert(selection.questions.filter((question) => question.collection === "ai").length === 2, "Cuota IA incorrecta.");
});

test("Mixto se bloquea si falta una cuota", () => {
  const selection = selectExamQuestions([boeOne, boeTwo, aiOne], config(EXAM_MODES.MIXED, { questionCount: 4 }));
  assert(Array.isArray(selection.errors) && selection.errors.length > 0, "El mixto completó silenciosamente una cuota insuficiente.");
});

test("Las demos requieren ?demo=1", () => {
  const blocked = selectExamQuestions([demo], config(EXAM_MODES.DEMO));
  const allowed = selectExamQuestions([demo], config(EXAM_MODES.DEMO, { demoEnabled: true }));
  assert(blocked.errors?.length > 0, "La demo se habilitó sin la puerta de URL.");
  assert(!allowed.errors && allowed.questions[0].isDemo, "La demo no se habilitó con la puerta de URL.");
});

test("El barajado conserva preguntas y opciones sin mutar sus datos", () => {
  const before = JSON.stringify([boeOne, boeTwo]);
  const selection = selectExamQuestions([boeOne, boeTwo], config(EXAM_MODES.BOE, { questionCount: 2, shuffleQuestions: true, shuffleOptions: true }), () => 0);
  assert(!selection.errors, "No se pudo barajar.");
  assert(JSON.stringify([boeOne, boeTwo]) === before, "El barajado mutó los datos fuente.");
  assert(new Set(selection.optionOrderByQuestionId[boeOne.id]).size === 4, "El orden de opciones no es una permutación válida.");
});

test("La puntuación cuenta una vez aciertos, errores y blancos", () => {
  const result = calculateExamResults([boeOne, aiOne, aiTwo], { [boeOne.id]: "A", [aiOne.id]: "B" }, 0.25);
  assert(result.overall.correct === 1 && result.overall.incorrect === 1 && result.overall.blank === 1, "Recuento de resultados incorrecto.");
  assert(result.overall.net === 0.75 && Math.abs(result.overall.grossPercentage - 100 / 3) < 0.000001, "Fórmula de puntuación incorrecta.");
});

test("El estado recuperable no almacena respuestas correctas ni feedback", () => {
  const state = createActiveExamState({
    config: config(EXAM_MODES.BOE),
    questions: [boeOne],
    optionOrderByQuestionId: { [boeOne.id]: ["A", "B", "C", "D"] },
    isDemo: false,
  });
  const serialized = JSON.stringify(state);
  assert(validateActiveExamState(state).valid, "El estado creado no es válido.");
  assert(!serialized.includes("correct_option") && !serialized.includes("feedback"), "El estado persiste información de corrección.");
});

test("La cuota usa redondeo y suma el total configurado", () => {
  const quota = getMixedQuota(7, 60);
  assert(quota.boeCount === 4 && quota.aiCount === 3, "La cuota 60/40 para siete preguntas es incorrecta.");
});

summary.textContent = `${passed} pruebas aprobadas; ${failed} fallidas.`;
summary.className = failed === 0 ? "pass" : "fail";
