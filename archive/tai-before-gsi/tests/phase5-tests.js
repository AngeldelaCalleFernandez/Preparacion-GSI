import {
  INTERVAL_DAYS,
  MAX_HISTORY,
  MAX_PROCESSED_EVENT_IDS,
  applyReinforcementEvent,
  applyReinforcementEvents,
  createQuestionReference,
  getTemporalState,
  selectReinforcementQuestions,
} from "../assets/js/reinforcement-engine.js";
import {
  REINFORCEMENT_DEMO_KEY,
  REINFORCEMENT_REAL_KEY,
  applyStoredReinforcementEvents,
  clearDemoReinforcement,
  loadReinforcementStore,
} from "../assets/js/reinforcement-storage.js";
import { migratePhase3Training } from "../assets/js/reinforcement-migration.js";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
let passed = 0;
let failed = 0;
const NOW = new Date("2026-07-31T12:00:00.000Z");

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

function memoryStorage(seed = {}) {
  const values = new Map(Object.entries(seed));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    has(key) { return values.has(key); },
  };
}

function quotaStorage() {
  const storage = memoryStorage();
  storage.setItem = () => { const error = new Error("Quota"); error.name = "QuotaExceededError"; throw error; };
  return storage;
}

function question(id = "Q-1", overrides = {}) {
  return {
    id,
    collection: "official",
    origin: "official",
    block_id: "B1",
    topic_id: "B1-T01",
    isDemo: false,
    is_active: true,
    options: ["A", "B", "C", "D"].map((option) => ({ id: option, text: option })),
    correct_option: "A",
    ...overrides,
  };
}

function event(id, type, item, extra = {}) {
  return { id, type, reference: createQuestionReference(item), occurredAt: NOW.toISOString(), ...extra };
}

function recordFor(records, item) {
  return records[`${item.collection}:${item.id}`];
}

function responseAndAssessment(item, responseId, result, assessment, records = {}) {
  return applyReinforcementEvents(records, [
    event(`${responseId}:response`, "response", item, { result }),
    event(`${responseId}:assessment:${assessment}`, "assessment", item, { assessment }),
  ], NOW).records;
}

test("un error crea un registro de refuerzo", () => {
  const item = question();
  const records = applyReinforcementEvent({}, event("E-1", "response", item, { result: "incorrect" }), NOW).records;
  const record = recordFor(records, item);
  assert(record.attempts === 1 && record.incorrectAnswers === 1, "No se registró el error.");
});

test("repetir un evento no duplica estadísticas", () => {
  const item = question();
  const first = applyReinforcementEvent({}, event("E-2", "response", item, { result: "incorrect" }), NOW).records;
  const second = applyReinforcementEvent(first, event("E-2", "response", item, { result: "incorrect" }), NOW).records;
  assert(recordFor(second, item).attempts === 1, "Se duplicó el intento.");
});

test("un error reinicia el intervalo a un día", () => {
  const item = question();
  const initial = responseAndAssessment(item, "E-3A", "correct", "known");
  const records = applyReinforcementEvent(initial, event("E-3B", "response", item, { result: "incorrect" }), NOW).records;
  const record = recordFor(records, item);
  assert(record.intervalLevel === 0 && Date.parse(record.nextReviewAt) - NOW.getTime() === INTERVAL_DAYS[0] * 86_400_000, "El intervalo no se reinició.");
});

test("respuesta y valoración no duplican attempts", () => {
  const item = question();
  const record = recordFor(responseAndAssessment(item, "E-4", "correct", "doubt"), item);
  assert(record.attempts === 1 && record.correctAnswers === 1 && record.doubtCount === 1, "La valoración alteró el intento o el resultado.");
});

test("La sabía avanza por los seis niveles", () => {
  const item = question();
  let records = {};
  for (let level = 1; level <= 5; level += 1) records = responseAndAssessment(item, `E-5-${level}`, "correct", "known", records);
  const record = recordFor(records, item);
  assert(record.intervalLevel === 5 && record.status === "scheduled" && Date.parse(record.nextReviewAt) - NOW.getTime() === 60 * 86_400_000, "El nivel 5 no quedó programado a 60 días.");
  records = responseAndAssessment(item, "E-5-complete", "correct", "known", records);
  assert(recordFor(records, item).status === "completed", "El ciclo no se completó tras confirmar nivel 5.");
});

test("Dudé no avanza y programa como máximo tres días", () => {
  const item = question();
  let records = {};
  for (let level = 1; level <= 3; level += 1) records = responseAndAssessment(item, `E-6-${level}`, "correct", "known", records);
  records = responseAndAssessment(item, "E-6-doubt", "correct", "doubt", records);
  const record = recordFor(records, item);
  assert(record.intervalLevel === 2 && Date.parse(record.nextReviewAt) - NOW.getTime() <= 3 * 86_400_000, "La duda avanzó o superó tres días.");
});

test("No la sabía reinicia nivel y solo suma su contador", () => {
  const item = question();
  const records = responseAndAssessment(item, "E-7", "incorrect", "unknown");
  const record = recordFor(records, item);
  assert(record.attempts === 1 && record.incorrectAnswers === 1 && record.unknownCount === 1 && record.intervalLevel === 0, "La valoración no se separó del error.");
});

test("un alta manual queda disponible inmediatamente", () => {
  const item = question();
  const record = recordFor(applyReinforcementEvent({}, event("E-8", "manual", item), NOW).records, item);
  assert(record.attempts === 0 && record.priority !== "low" && getTemporalState(record, NOW).isDue, "El alta manual no quedó disponible sin alterar contadores.");
});

test("una pregunta defectuosa se excluye de sesiones normales", () => {
  const item = question();
  let records = applyReinforcementEvent({}, event("E-9A", "manual", item), NOW).records;
  records = applyReinforcementEvent(records, event("E-9B", "defective", item), NOW).records;
  const selection = selectReinforcementQuestions(records, [item], { onlyDue: true, includeFuture: false, order: "priority" }, NOW);
  assert(selection.selected.length === 0, "Entró una incidencia en la sesión.");
});

test("una defectuosa no se reactiva sin restauración explícita", () => {
  const item = question();
  let records = applyReinforcementEvent({}, event("E-9C", "manual", item), NOW).records;
  records = applyReinforcementEvent(records, event("E-9D", "defective", item), NOW).records;
  records = applyReinforcementEvent(records, event("E-9E", "response", item, { result: "incorrect" }), NOW).records;
  const record = recordFor(records, item);
  assert(record.status === "defective" && record.flaggedAsDefective, "Una respuesta reactivó una pregunta defectuosa.");
});

test("restaurar una defectuosa la hace seleccionable", () => {
  const item = question();
  let records = applyReinforcementEvent({}, event("E-10A", "manual", item), NOW).records;
  records = applyReinforcementEvent(records, event("E-10B", "defective", item), NOW).records;
  records = applyReinforcementEvent(records, event("E-10C", "restore", item), NOW).records;
  const selection = selectReinforcementQuestions(records, [item], { onlyDue: true, includeFuture: false, order: "priority" }, NOW);
  assert(selection.selected.length === 1, "La restauración no devolvió la pregunta a la cola.");
});

test("una completada vuelve a scheduled si se falla", () => {
  const item = question();
  let records = {};
  for (let level = 1; level <= 6; level += 1) records = responseAndAssessment(item, `E-11-${level}`, "correct", "known", records);
  records = applyReinforcementEvent(records, event("E-11-fail", "response", item, { result: "incorrect" }), NOW).records;
  const record = recordFor(records, item);
  assert(record.status === "scheduled" && record.intervalLevel === 0, "El error no reactivó el ciclo.");
});

test("los datos demo no aparecen en el almacén real", () => {
  const storage = memoryStorage();
  const demo = question("DEMO-1", { collection: "demo", origin: "ai", isDemo: true });
  const saved = applyStoredReinforcementEvents(true, [event("E-12", "manual", demo)], NOW, storage);
  assert(saved.saved && Object.keys(loadReinforcementStore(false, storage).store.records).length === 0 && Object.keys(loadReinforcementStore(true, storage).store.records).length === 1, "Los almacenes real y demo se mezclaron.");
});

test("borrar demo no borra el refuerzo real", () => {
  const storage = memoryStorage();
  const real = question("REAL-1");
  const demo = question("DEMO-2", { collection: "demo", origin: "ai", isDemo: true });
  applyStoredReinforcementEvents(false, [event("E-13A", "manual", real)], NOW, storage);
  applyStoredReinforcementEvents(true, [event("E-13B", "manual", demo)], NOW, storage);
  clearDemoReinforcement(storage);
  assert(Object.keys(loadReinforcementStore(false, storage).store.records).length === 1 && !storage.has(REINFORCEMENT_DEMO_KEY), "El borrado demo afectó al almacén real.");
});

test("las preguntas en blanco no se incorporan automáticamente", () => {
  const records = applyReinforcementEvents({}, [], NOW).records;
  assert(Object.keys(records).length === 0, "Una respuesta en blanco creó un registro.");
});

test("los errores de examen se incorporan una sola vez", () => {
  const item = question("EXAM-1");
  const examEvent = event("exam:ID:official:EXAM-1:response", "response", item, { result: "incorrect" });
  const once = applyReinforcementEvent({}, examEvent, NOW).records;
  const twice = applyReinforcementEvent(once, examEvent, NOW).records;
  assert(recordFor(twice, item).incorrectAnswers === 1, "El examen se integró dos veces.");
});

test("los errores de entrenamiento se incorporan una sola vez", () => {
  const item = question("TRAIN-1");
  const trainingEvent = event("training:ID:response", "response", item, { result: "incorrect" });
  const records = applyReinforcementEvents({}, [trainingEvent, trainingEvent], NOW).records;
  assert(recordFor(records, item).attempts === 1, "El entrenamiento se integró dos veces.");
});

test("una pregunta inactiva no aparece en sesión", () => {
  const item = question("OFF-1", { is_active: false });
  const records = applyReinforcementEvent({}, event("E-17", "manual", item), NOW).records;
  const selection = selectReinforcementQuestions(records, [item], { onlyDue: true, includeFuture: false, order: "priority" }, NOW);
  assert(selection.selected.length === 0 && selection.incidents.length === 1, "La pregunta inactiva fue seleccionada.");
});

test("una pregunta inexistente se conserva como incidencia", () => {
  const item = question("MISSING-1");
  const records = applyReinforcementEvent({}, event("E-18", "manual", item), NOW).records;
  const selection = selectReinforcementQuestions(records, [], { onlyDue: true, includeFuture: false, order: "priority" }, NOW);
  assert(selection.selected.length === 0 && selection.incidents[0].reason === "missing", "La incidencia inexistente no se conservó.");
});

test("las fechas distinguen futuro, hoy y atraso sin escribir", () => {
  const item = question("DATE-1");
  let records = applyReinforcementEvent({}, event("E-19", "manual", item), NOW).records;
  const record = recordFor(records, item);
  record.nextReviewAt = new Date(NOW.getTime() + 86_400_000).toISOString();
  const writesBefore = JSON.stringify(records);
  assert(getTemporalState(record, NOW).timeState === "future", "No se detectó el futuro.");
  assert(getTemporalState(record, new Date(NOW.getTime() + 86_400_000)).timeState === "due", "No cambió automáticamente a pendiente.");
  assert(JSON.stringify(records) === writesBefore, "El estado temporal escribió el almacén.");
});

test("el historial y processedEventIds respetan sus límites", () => {
  const item = question("LIMIT-1");
  let records = {};
  for (let index = 0; index < MAX_PROCESSED_EVENT_IDS + 20; index += 1) {
    records = applyReinforcementEvent(records, event(`E-20-${index}`, "manual", item), NOW).records;
  }
  const record = recordFor(records, item);
  assert(record.history.length === MAX_HISTORY && record.processedEventIds.length === MAX_PROCESSED_EVENT_IDS && record.processedEventIds.at(-1) === `E-20-${MAX_PROCESSED_EVENT_IDS + 19}`, "No se aplicaron los límites de almacenamiento.");
});

test("una sesión vacía no puede aportar preguntas", () => {
  const selection = selectReinforcementQuestions({}, [], { onlyDue: true, includeFuture: false, order: "priority" }, NOW);
  assert(selection.selected.length === 0, "La selección vacía devolvió preguntas.");
});

test("la migración es idempotente", () => {
  const item = question("MIG-1");
  const legacy = { version: 1, responses: [{ questionId: item.id, selectedOption: "B", correct: false, answeredAt: NOW.toISOString(), origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] };
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify(legacy) });
  const data = { questions: [item] };
  const first = migratePhase3Training(data, false, storage);
  const second = migratePhase3Training(data, false, storage);
  assert(first.saved && !second.migrated && recordFor(loadReinforcementStore(false, storage).store.records, item).attempts === 1, "La migración no fue idempotente.");
});

test("un fallo de cuota se trata sin bloquear", () => {
  const item = question("QUOTA-1");
  const storage = quotaStorage();
  const saved = applyStoredReinforcementEvents(false, [event("E-22", "manual", item)], NOW, storage);
  assert(!saved.saved && saved.error.includes("espacio"), "El fallo de cuota no se comunicó de forma segura.");
});

assert(REINFORCEMENT_REAL_KEY !== REINFORCEMENT_DEMO_KEY, "Las claves de almacenamiento deben ser distintas.");
summary.textContent = `${passed} pruebas aprobadas; ${failed} fallidas.`;
summary.className = failed === 0 ? "pass" : "fail";
