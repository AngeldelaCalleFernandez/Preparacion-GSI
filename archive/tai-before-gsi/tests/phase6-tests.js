import {
  LIMITS,
  applyAnalyticsEvents,
  calculateStatistics,
  calculateWeakness,
  compactAnalyticsStore,
  createAnalyticsStore,
  getPeriodRange,
  selectComparable,
} from "../assets/js/analytics-engine.js";
import {
  createAnalyticsAnnotationEvent,
  createAnalyticsAttemptEvent,
  createAnalyticsSession,
  createAnalyticsSessionEvent,
} from "../assets/js/analytics-events.js";
import {
  ANALYTICS_DEMO_KEY,
  ANALYTICS_REAL_KEY,
  applyStoredAnalyticsEvents,
  clearAllAnalyticsStores,
  clearAnalyticsStore,
  getAnalyticsSummary,
  loadActiveTrainingSession,
  loadAnalyticsStore,
  saveActiveTrainingSession,
} from "../assets/js/analytics-storage.js";
import { migrateAnalytics, rebuildAnalytics } from "../assets/js/analytics-migration.js";
import { EXAM_MODES, selectExamQuestions } from "../assets/js/exam-engine.js?phase6runner=1";
import {
  applyStoredReinforcementEvents,
  createReinforcementEvent,
  loadReinforcementStore,
  REINFORCEMENT_REAL_KEY,
} from "../assets/js/reinforcement-storage.js";
import { renderRoute, resolveRoute } from "../assets/js/router.js";
import { isLearningEligible } from "../assets/js/statistics.js";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
const NOW = "2026-08-03T12:00:00.000Z";
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

function attempt(id, item = question(), overrides = {}) {
  return createAnalyticsAttemptEvent(id, item, {
    sessionId: Object.hasOwn(overrides, "sessionId") ? overrides.sessionId : "SESSION-1",
    sessionType: overrides.sessionType ?? "training",
    selectedOption: overrides.blank ? null : (overrides.selectedOption ?? "A"),
    correct: overrides.correct ?? true,
    blank: overrides.blank ?? false,
    doubted: overrides.doubted ?? false,
    addedToReinforcement: overrides.addedToReinforcement ?? false,
    answeredAt: overrides.answeredAt ?? NOW,
    durationSeconds: overrides.durationSeconds ?? 12,
    penaltyApplied: overrides.penaltyApplied,
    netContribution: overrides.netContribution,
  });
}

function session(id, records, overrides = {}) {
  const summaryRecord = createAnalyticsSession({
    sessionId: id,
    sessionType: overrides.sessionType ?? "exam",
    isDemo: overrides.isDemo ?? false,
    startedAt: overrides.startedAt ?? "2026-08-03T11:00:00.000Z",
    finishedAt: overrides.finishedAt ?? NOW,
    configuredQuestions: overrides.configuredQuestions ?? records.length,
    attempts: records.map((event) => event.attempt),
    penalty: overrides.penalty ?? 0.33,
  });
  return createAnalyticsSessionEvent(`${id}:summary`, summaryRecord);
}

function applied(events, isDemo = false, limits) {
  return applyAnalyticsEvents(createAnalyticsStore(isDemo, NOW), events, NOW, limits).store;
}

function routeFixture() {
  const root = document.createElement("div");
  for (const route of ["inicio", "temario", "entrenamiento", "examen", "refuerzo", "estadisticas"]) {
    const link = document.createElement("a");
    link.dataset.route = route;
    link.href = `#${route}`;
    const view = document.createElement("section");
    view.dataset.view = route;
    root.append(link, view);
  }
  document.body.append(root);
  return root;
}

function demoQuestions() {
  const origins = ["official", "ai", "manual", "adapted"];
  return ["B1", "B2", "B3", "B4"].flatMap((blockId) => Array.from({ length: 8 }, (_, index) => question(`DEMO-${blockId}-${index + 1}`, {
    collection: "demo",
    isDemo: true,
    origin: origins[index % origins.length],
    official_status: "not_official",
    block_id: blockId,
    topic_id: `${blockId}-T01`,
  })));
}

test("un intento de entrenamiento se registra una sola vez", () => {
  const event = attempt("training:R-1:analytics");
  const store = applied([event, event]);
  assert(store.attempts.length === 1, "Se duplicó el intento de entrenamiento.");
});

test("un examen terminado genera una sola sesión", () => {
  const record = attempt("exam:E-1:official:Q-1:analytics", question(), { sessionType: "exam", netContribution: 1 });
  const store = applied([record, session("exam:E-1", [record]), session("exam:E-1", [record])]);
  assert(store.sessions.length === 1, "El examen generó más de un resumen.");
});

test("reabrir resultados no duplica la sesión", () => {
  const record = attempt("exam:E-2:official:Q-1:analytics", question(), { sessionType: "exam" });
  let store = applied([record, session("exam:E-2", [record])]);
  store = applyAnalyticsEvents(store, [session("exam:E-2", [record])], NOW).store;
  assert(store.sessions.length === 1, "La reapertura duplicó el examen.");
});

test("una pregunta en blanco cuenta como blanco y no como error", () => {
  const store = applied([attempt("exam:E-3:official:Q-1:analytics", question(), { sessionType: "exam", blank: true, correct: false, netContribution: 0 })]);
  const metric = calculateStatistics(store).metric;
  assert(metric.blank === 1 && metric.incorrect === 0 && metric.answered === 0, "El blanco se contabilizó como error.");
});

test("datos reales y demo permanecen separados", () => {
  const storage = memoryStorage();
  const demo = question("D-1", { collection: "demo", origin: "ai", isDemo: true });
  applyStoredAnalyticsEvents(false, [attempt("real-1")], new Date(NOW), storage);
  applyStoredAnalyticsEvents(true, [attempt("demo-1", demo)], new Date(NOW), storage);
  assert(loadAnalyticsStore(false, storage).store.attempts.length === 1 && loadAnalyticsStore(true, storage).store.attempts.length === 1, "Los almacenes se mezclaron.");
});

test("una sesión de refuerzo se registra una sola vez", () => {
  const record = attempt("reinforcement:R-1:official:Q-1:analytics", question(), { sessionType: "reinforcement" });
  const store = applied([record, session("reinforcement:R-1", [record], { sessionType: "reinforcement" }), session("reinforcement:R-1", [record], { sessionType: "reinforcement" })]);
  assert(store.sessions.length === 1, "El refuerzo duplicó su resumen.");
});

test("los porcentajes se calculan correctamente", () => {
  const correct = attempt("P-1", question("Q-1"));
  const wrong = attempt("P-2", question("Q-2"), { correct: false, selectedOption: "B" });
  const blank = attempt("P-3", question("Q-3"), { blank: true, correct: false });
  const metric = calculateStatistics(applied([correct, wrong, blank])).metric;
  assert(metric.responseAccuracy === 50 && Math.abs(metric.grossPercentage - 33.33333333333333) < 0.01, "Los denominadores de porcentaje no son correctos.");
});

test("la puntuación neta utiliza la penalización real", () => {
  const correct = attempt("N-1", question("Q-1"), { sessionType: "exam", netContribution: 1 });
  const wrong = attempt("N-2", question("Q-2"), { sessionType: "exam", correct: false, selectedOption: "B", netContribution: -0.25, penaltyApplied: 0.25 });
  const result = calculateStatistics(applied([correct, wrong])).metric;
  assert(result.netScore === 0.75, "La contribución neta no aplicó la penalización.");
});

test("los totales por bloque coinciden con el total", () => {
  const store = applied([attempt("B-1", question("Q-1", { block_id: "B1" })), attempt("B-2", question("Q-2", { block_id: "B2" }))]);
  const stats = calculateStatistics(store);
  assert(stats.byBlock.reduce((sum, row) => sum + row.total, 0) === stats.metric.total, "Los bloques no suman el total.");
});

test("los totales por tema coinciden con su bloque", () => {
  const store = applied([attempt("T-1", question("Q-1", { topic_id: "B1-T01" })), attempt("T-2", question("Q-2", { topic_id: "B1-T02" }))]);
  const stats = calculateStatistics(store);
  assert(stats.byTopic.reduce((sum, row) => sum + row.total, 0) === stats.byBlock[0].total, "Los temas no suman su bloque.");
});

test("los totales por origen son correctos", () => {
  const store = applied([attempt("O-1", question("Q-1")), attempt("O-2", question("Q-2", { collection: "manual", origin: "manual" }))]);
  const stats = calculateStatistics(store);
  assert(stats.byOrigin.length === 2 && stats.byOrigin.reduce((sum, row) => sum + row.total, 0) === 2, "Los orígenes no se agruparon correctamente.");
});

test("los filtros temporales incluyen y excluyen fechas correctamente", () => {
  const old = attempt("D-1", question("Q-1"), { answeredAt: "2026-07-20T12:00:00.000Z" });
  const recent = attempt("D-2", question("Q-2"), { answeredAt: "2026-08-03T10:00:00.000Z" });
  const metric = calculateStatistics(applied([old, recent]), { from: "2026-08-01T00:00:00.000Z", to: "2026-08-03T23:59:59.999Z" }).metric;
  assert(metric.total === 1, "El filtro temporal no excluyó el intento antiguo.");
});

test("las fechas inválidas se ignoran", () => {
  const store = createAnalyticsStore(false, NOW);
  store.attempts.push({ ...attempt("bad").attempt, answeredAt: "invalida" });
  const stats = calculateStatistics(store);
  assert(stats.metric.total === 0, "Una fecha inválida se usó como actividad.");
});

test("las fechas futuras no cuentan como actividad", () => {
  const future = attempt("FUT-1", question("FUT"), { answeredAt: "2030-01-01T12:00:00.000Z" });
  const metric = calculateStatistics(applied([future])).metric;
  assert(metric.total === 0, "Una fecha futura se incluyó como actividad.");
});

test("un bloque archivado futuro no cuenta como actividad", () => {
  const first = attempt("FUT-ARCH-1", question("FA-1"), { answeredAt: "2030-01-01T12:00:00.000Z" });
  const second = attempt("FUT-ARCH-2", question("FA-2"), { answeredAt: "2030-01-02T12:00:00.000Z" });
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), [first, second], NOW, { ...LIMITS, attempts: 1 }).store;
  assert(store.archive.attemptBuckets.length === 1 && calculateStatistics(store).metric.total === 0, "Un archivo futuro se incluyó en las métricas.");
});

test("un tema con menos de cinco intentos muestra insuficiencia", () => {
  const result = calculateWeakness({ answered: 4, incorrect: 3, doubts: 1 }, null, [], 0);
  assert(result.status === "muestra insuficiente", "Se clasificó una muestra insuficiente.");
});

test("un tema débil recibe explicación verificable", () => {
  const rows = Array.from({ length: 10 }, (_, index) => ({ attempts: 2, incorrect: index < 8 ? 2 : 0 }));
  const result = calculateWeakness({ answered: 20, incorrect: 18, doubts: 9 }, { answered: 10, incorrect: 9 }, rows, 8);
  assert(["reforzar", "prioritario"].includes(result.status) && result.explanation.includes("20 intentos"), "La debilidad no es explicable.");
});

test("una pregunta inexistente no rompe las estadísticas", () => {
  const stats = calculateStatistics(applied([attempt("M-1", question("NO-DISPONIBLE"), { correct: false, selectedOption: "B" })]));
  assert(stats.questions[0].questionId === "NO-DISPONIBLE", "No se conservó la referencia histórica.");
});

test("las sesiones duplicadas quedan excluidas", () => {
  const event = session("S-DUP", []);
  const store = applied([event, event]);
  assert(store.sessions.length === 1, "La sesión duplicada se conservó.");
});

test("la migración es idempotente", () => {
  const item = question("MIG-1");
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify({ version: 1, responses: [{ responseId: "legacy-1", questionId: item.id, selectedOption: "B", correct: false, answeredAt: NOW, origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] }) });
  const data = { questions: [item] };
  const first = migrateAnalytics(data, false, storage);
  const second = migrateAnalytics(data, false, storage);
  assert(first.saved && second.saved && loadAnalyticsStore(false, storage).store.attempts.length === 1, "La migración volvió a insertar el mismo historial.");
});

test("los datos demo no contaminan los reales", () => {
  const storage = memoryStorage();
  const demo = question("D-CONT", { collection: "demo", origin: "ai", isDemo: true });
  applyStoredAnalyticsEvents(true, [attempt("demo-only", demo)], new Date(NOW), storage);
  assert(loadAnalyticsStore(false, storage).store.attempts.length === 0, "Un dato demo contaminó el almacén real.");
});

test("borrar demo no borra datos reales", () => {
  const storage = memoryStorage();
  const demo = question("D-CLEAR", { collection: "demo", origin: "ai", isDemo: true });
  applyStoredAnalyticsEvents(false, [attempt("real-clear")], new Date(NOW), storage);
  applyStoredAnalyticsEvents(true, [attempt("demo-clear", demo)], new Date(NOW), storage);
  clearAnalyticsStore(true, storage);
  assert(loadAnalyticsStore(false, storage).store.attempts.length === 1 && !storage.has(ANALYTICS_DEMO_KEY), "El borrado demo afectó a datos reales.");
});

test("borrar estadísticas no borra refuerzo", () => {
  const storage = memoryStorage({ [REINFORCEMENT_REAL_KEY]: "persistir" });
  applyStoredAnalyticsEvents(false, [attempt("clear-all")], new Date(NOW), storage);
  clearAllAnalyticsStores(storage);
  assert(storage.getItem(REINFORCEMENT_REAL_KEY) === "persistir", "El borrado analítico tocó el refuerzo.");
});

test("la compactación conserva los totales", () => {
  const events = [attempt("C-1", question("Q-1"), { answeredAt: "2026-07-01T12:00:00.000Z" }), attempt("C-2", question("Q-2"), { answeredAt: "2026-07-02T12:00:00.000Z" }), attempt("C-3", question("Q-3"), { answeredAt: "2026-07-03T12:00:00.000Z" })];
  const initial = applied(events);
  const compacted = compactAnalyticsStore(initial, { ...LIMITS, attempts: 1, sessions: 1 });
  assert(calculateStatistics(compacted.store, { to: "2026-08-03T23:59:59.999Z" }).metric.total === 3, "La compactación perdió totales.");
});

test("el límite de sesiones recientes se respeta", () => {
  const events = Array.from({ length: 4 }, (_, index) => session(`LS-${index}`, [], { finishedAt: `2026-07-0${index + 1}T12:00:00.000Z` }));
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), events, NOW, { ...LIMITS, sessions: 2, attempts: 100 }).store;
  assert(store.sessions.length === 2 && store.archive.sessionBuckets.length > 0, "No se limitó la sesión reciente.");
});

test("el límite de intentos recientes se respeta", () => {
  const events = Array.from({ length: 4 }, (_, index) => attempt(`LA-${index}`, question(`Q-${index}`), { answeredAt: `2026-07-0${index + 1}T12:00:00.000Z` }));
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), events, NOW, { ...LIMITS, attempts: 2, sessions: 100 }).store;
  assert(store.attempts.length === 2 && store.archive.attemptBuckets.length > 0, "No se limitó el intento reciente.");
});

test("un fallo de cuota no bloquea la aplicación", () => {
  const result = applyStoredAnalyticsEvents(false, [attempt("quota")], new Date(NOW), quotaStorage());
  assert(!result.saved && result.error.includes("espacio"), "La cuota no se informó de manera segura.");
});

test("una sesión sin datos no genera NaN", () => {
  const stats = calculateStatistics(applied([session("EMPTY", [], { configuredQuestions: 0 })]));
  assert(stats.metric.responseAccuracy === null && stats.sessions.averageNetPercentage === null, "Una sesión vacía produjo un valor inválido.");
});

test("las divisiones entre cero muestran estado sin datos", () => {
  const metric = calculateStatistics(createAnalyticsStore(false, NOW)).metric;
  assert(metric.responseAccuracy === null && metric.grossPercentage === null, "La división entre cero no se controló.");
});

test("el ranking de debilidad respeta el mínimo de muestra", () => {
  const result = calculateWeakness({ answered: 3, incorrect: 3, doubts: 3 }, { answered: 3, incorrect: 3 }, [], 3);
  assert(result.score === null && result.status === "muestra insuficiente", "La muestra pequeña entró en ranking.");
});

test("las preguntas defectuosas se identifican sin perder histórico", () => {
  const historic = attempt("DEF-1", question("DEFECTUOSA"), { correct: false, selectedOption: "B" });
  const stats = calculateStatistics(applied([historic]));
  assert(stats.questions[0].incorrect === 1 && stats.questions[0].questionId === "DEFECTUOSA", "No se mantuvo la incidencia histórica.");
});

test("la reconstrucción no duplica eventos", () => {
  const item = question("REBUILD");
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify({ version: 1, responses: [{ responseId: "rebuild-1", questionId: item.id, selectedOption: "A", correct: true, answeredAt: NOW, origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] }) });
  const first = rebuildAnalytics({ questions: [item] }, false, storage);
  const second = rebuildAnalytics({ questions: [item] }, false, storage);
  assert(first.saved && second.saved && loadAnalyticsStore(false, storage).store.attempts.length === 1, "La reconstrucción duplicó un evento.");
});

test("la compactación no produce doble conteo", () => {
  const events = [attempt("DC-1", question("Q-1"), { answeredAt: "2026-07-01T12:00:00.000Z" }), attempt("DC-2", question("Q-2"), { answeredAt: "2026-07-02T12:00:00.000Z" })];
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), events, NOW, { ...LIMITS, attempts: 1 }).store;
  assert(calculateStatistics(store, { to: "2026-08-03T23:59:59.999Z" }).metric.total === 2, "Se sumó dos veces un intento archivado.");
});

test("un evento tardío dentro de un día archivado no solapa datos recientes", () => {
  const first = attempt("SOL-1", question("Q-1"), { answeredAt: "2026-07-01T10:00:00.000Z" });
  const next = attempt("SOL-2", question("Q-2"), { answeredAt: "2026-07-02T10:00:00.000Z" });
  let store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), [first, next], NOW, { ...LIMITS, attempts: 1 }).store;
  const late = attempt("SOL-3", question("Q-3"), { answeredAt: "2026-07-01T20:00:00.000Z" });
  store = applyAnalyticsEvents(store, [late], NOW, { ...LIMITS, attempts: 1 }).store;
  const archivedDay = store.archive.attemptBuckets.find((bucket) => bucket.id === "attempt:2026-07-01");
  assert(!store.attempts.some((item) => item.answeredAt.startsWith("2026-07-01")) && archivedDay.count === 2, "El día archivado se solapó con datos recientes.");
});

test("el límite mensual conserva totales mediante histórico consolidado", () => {
  const events = Array.from({ length: 10 }, (_, index) => attempt(`MONTH-${index}`, question(`M-${index}`), { answeredAt: `2025-${String(index + 1).padStart(2, "0")}-01T12:00:00.000Z` }));
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), events, NOW, { ...LIMITS, attempts: 1, dailyBuckets: 1, monthlyBuckets: 2 }).store;
  const months = store.archive.attemptBuckets.filter((bucket) => bucket.granularity === "month");
  assert(months.length <= 2 && store.archive.attemptBuckets.some((bucket) => bucket.granularity === "historical") && calculateStatistics(store, { to: "2026-08-03T23:59:59.999Z" }).metric.total === 10, "El límite mensual perdió datos o quedó sin consolidar.");
});

test("una segunda compactación es idempotente", () => {
  const store = applied([attempt("ID-1", question("Q-1"), { answeredAt: "2026-07-01T12:00:00.000Z" }), attempt("ID-2", question("Q-2"), { answeredAt: "2026-07-02T12:00:00.000Z" })]);
  const first = compactAnalyticsStore(store, { ...LIMITS, attempts: 1 });
  const second = compactAnalyticsStore(first.store, { ...LIMITS, attempts: 1 });
  assert(JSON.stringify(first.store) === JSON.stringify(second.store), "La segunda compactación alteró los datos.");
});

test("una consulta combina periodo reciente y archivado", () => {
  const store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), [attempt("QRY-1", question("Q-1"), { answeredAt: "2026-07-01T12:00:00.000Z" }), attempt("QRY-2", question("Q-2"), { answeredAt: "2026-08-02T12:00:00.000Z" })], NOW, { ...LIMITS, attempts: 1 }).store;
  const stats = calculateStatistics(store, { from: "2026-07-01T00:00:00.000Z", to: "2026-08-03T23:59:59.999Z" });
  assert(stats.metric.total === 2, "La consulta mixta no incluyó ambos periodos.");
});

test("un evento archivado no se reinserta tras expulsar IDs procesados", () => {
  const old = attempt("ARCH-1", question("Q-1"), { answeredAt: "2026-07-01T12:00:00.000Z" });
  let store = applyAnalyticsEvents(createAnalyticsStore(false, NOW), [old, attempt("ARCH-2", question("Q-2"), { answeredAt: "2026-07-02T12:00:00.000Z" })], NOW, { ...LIMITS, attempts: 1, processedEvents: 1 }).store;
  store.processedEventIds = [];
  store = applyAnalyticsEvents(store, [old], NOW, { ...LIMITS, attempts: 1, processedEvents: 1 }).store;
  assert(calculateStatistics(store, { to: "2026-08-03T23:59:59.999Z" }).metric.total === 2, "Un evento archivado se reinsertó.");
});

test("netPercentage está normalizado", () => {
  const correct = attempt("NET-1", question("Q-1"), { sessionType: "exam", netContribution: 1 });
  const wrong = attempt("NET-2", question("Q-2"), { sessionType: "exam", correct: false, selectedOption: "B", netContribution: -0.5 });
  const event = session("NET-S", [correct, wrong], { penalty: 0.5, configuredQuestions: 2 });
  const stats = calculateStatistics(applied([correct, wrong, event]));
  assert(stats.sessions.averageNetPercentage === 25, "No se normalizó la puntuación neta.");
});

test("un examen con cero configuradas no divide por cero", () => {
  const event = session("ZERO-S", [], { configuredQuestions: 0 });
  const store = applied([event]);
  assert(store.sessions[0].netPercentage === null, "El examen vacío calculó un porcentaje neto inválido.");
});

test("un bloque con poca muestra no permite conclusión", () => {
  const stats = calculateStatistics(applied([attempt("SM-1"), attempt("SM-2", question("Q-2"), { correct: false, selectedOption: "B" })]));
  assert(calculateWeakness(stats.byBlock[0], null, stats.questions, 0).status === "muestra insuficiente", "El bloque pequeño tuvo conclusión.");
});

test("sin actividad reciente no hay bonificación artificial", () => {
  const result = calculateWeakness({ answered: 5, incorrect: 0, doubts: 0 }, { answered: 0, incorrect: 0 }, [{ attempts: 1, incorrect: 0 }], 0);
  assert(result.status === "bien" && result.hasRecent === false, "La falta de actividad se trató como una mejora.");
});

test("precisión sobre respondidas difiere de porcentaje evaluado", () => {
  const store = applied([attempt("DEN-1"), attempt("DEN-2", question("Q-2"), { blank: true, correct: false })]);
  const metric = calculateStatistics(store).metric;
  assert(metric.responseAccuracy === 100 && metric.grossPercentage === 50, "Se mezclaron los dos denominadores.");
});

test("la reconstrucción tras borrar analytics recupera datos compatibles", () => {
  const item = question("AGAIN");
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify({ version: 1, responses: [{ responseId: "again-1", questionId: item.id, selectedOption: "A", correct: true, answeredAt: NOW, origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] }) });
  migrateAnalytics({ questions: [item] }, false, storage);
  clearAnalyticsStore(false, storage);
  rebuildAnalytics({ questions: [item] }, false, storage);
  assert(loadAnalyticsStore(false, storage).store.attempts.length === 1, "No se recuperó el historial compatible.");
});

test("una reconstrucción que falla por cuota conserva las estadísticas anteriores", () => {
  const existing = JSON.stringify(createAnalyticsStore(false, NOW));
  const storage = quotaStorage();
  storage.getItem = (key) => key === ANALYTICS_REAL_KEY ? existing : null;
  const result = rebuildAnalytics({ questions: [] }, false, storage);
  assert(!result.saved && storage.getItem(ANALYTICS_REAL_KEY) === existing, "La reconstrucción borró estadísticas al fallar la cuota.");
});

test("la migración conserva el aviso de historial parcial", () => {
  const item = question("PARTIAL");
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify({ version: 1, responses: [{ responseId: "partial-1", questionId: item.id, selectedOption: "A", correct: true, answeredAt: NOW, origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] }) });
  migrateAnalytics({ questions: [item] }, false, storage);
  assert(loadAnalyticsStore(false, storage).store.diagnostics.migration.temporalPrecision.includes("truncado"), "No se conservó la limitación del historial de refuerzo.");
});

test("mejor bloque y mejor tema exigen cinco respuestas", () => {
  const groups = [{ id: "B1", answered: 4, grossPercentage: 100 }, { id: "B2", answered: 5, grossPercentage: 60 }];
  assert(selectComparable(groups, "best")?.id === "B2", "Una muestra insuficiente entró como mejor resultado.");
});

test("la migración ignora entrenamientos no verificables", () => {
  const item = question("INVALID-TRAIN");
  const storage = memoryStorage({ "tai.phase3.training.v1": JSON.stringify({ version: 1, responses: [{ responseId: "bad-1", questionId: item.id, selectedOption: "Z", correct: "sí", answeredAt: NOW, origin: item.origin, blockId: item.block_id, topicId: item.topic_id, isDemo: false }] }) });
  const result = migrateAnalytics({ questions: [item] }, false, storage);
  assert(result.saved && result.report.ignored === 1 && loadAnalyticsStore(false, storage).store.attempts.length === 0, "La migración fabricó un resultado no verificable.");
});

test("la migración ignora referencias de refuerzo corruptas", () => {
  const storage = memoryStorage({ [REINFORCEMENT_REAL_KEY]: JSON.stringify({ version: 1, isDemo: false, records: { bad: { questionId: "BAD-REF", isDemo: false, history: [{ eventId: "reinforcement:S:official:BAD-REF:response", type: "response", result: "incorrect", occurredAt: NOW }] } } }) });
  const result = migrateAnalytics({ questions: [] }, false, storage);
  assert(result.saved && result.report.corrupt === 1 && loadAnalyticsStore(false, storage).store.attempts.length === 0, "La migración aceptó una referencia de refuerzo corrupta.");
});

test("un almacén corrupto no se sobrescribe al registrar un evento", () => {
  const storage = memoryStorage({ [ANALYTICS_REAL_KEY]: "{corrupto" });
  const result = applyStoredAnalyticsEvents(false, [attempt("CORRUPT-STORE")], new Date(NOW), storage);
  assert(!result.saved && storage.getItem(ANALYTICS_REAL_KEY) === "{corrupto", "Un almacén corrupto fue sobrescrito.");
});

test("incidencias y preguntas retiradas no entran en recomendaciones", () => {
  const active = question("ACTIVE");
  const aggregate = { questionId: "ACTIVE", collection: "official" };
  const defective = { questionId: "ACTIVE", collection: "official" };
  const missing = { questionId: "MISSING", collection: "official" };
  assert(isLearningEligible(aggregate, [active], {}) && !isLearningEligible(defective, [active], { "official:ACTIVE": { status: "defective" } }) && !isLearningEligible(missing, [active], {}), "Una incidencia o retirada entró en recomendaciones.");
});

test("un intento de pregunta defectuosa se conserva", () => {
  const store = applied([attempt("HIST-DEF", question("DEF"), { correct: false, selectedOption: "B" })]);
  assert(calculateStatistics(store).questions[0].incorrect === 1, "Se descartó el intento defectuoso histórico.");
});

test("un intento histórico sin sessionId se conserva sin sesión ficticia", () => {
  const event = attempt("HIST-NO-SESSION", question("HIST"), { sessionId: null });
  const store = applied([event]);
  assert(store.attempts[0].sessionId === null && store.sessions.length === 0, "Se inventó una sesión histórica.");
});

test("el rango relativo calcula límites ISO válidos", () => {
  const range = getPeriodRange("7", new Date(NOW));
  assert(Number.isFinite(Date.parse(range.from)) && Number.isFinite(Date.parse(range.to)), "El rango no es ISO válido.");
});

test("#estadisticas se resuelve en la carga inicial y activa su enlace", () => {
  const root = routeFixture();
  renderRoute(resolveRoute("#estadisticas"), false, root);
  const visible = root.querySelector('[data-view="estadisticas"]');
  const active = root.querySelector('[data-route="estadisticas"]');
  assert(!visible.hidden && active.getAttribute("aria-current") === "page", "La ruta inicial no mostró estadísticas activas.");
  root.remove();
});

test("la URL demo conserva la resolución de #estadisticas", () => {
  const params = new URLSearchParams("demo=1");
  assert(params.get("demo") === "1" && resolveRoute("#estadisticas") === "estadisticas", "La URL demo no resolvió estadísticas.");
});

test("la recarga simulada conserva la ruta de estadísticas", () => {
  const beforeReload = resolveRoute("#estadisticas");
  const afterReload = resolveRoute("#estadisticas");
  assert(beforeReload === "estadisticas" && afterReload === "estadisticas", "La ruta cambió al recargar.");
});

test("el cambio de hash y la navegación atrás/adelante simulada mantienen vista y enlace", () => {
  const root = routeFixture();
  for (const hash of ["#inicio", "#estadisticas", "#inicio", "#estadisticas"]) {
    const route = renderRoute(resolveRoute(hash), false, root);
    const active = root.querySelector(`[data-route="${route}"]`);
    const visible = root.querySelector(`[data-view="${route}"]`);
    assert(active.getAttribute("aria-current") === "page" && !visible.hidden, `No se sincronizó ${hash}.`);
  }
  root.remove();
});

test("un intento de entrenamiento queda guardado antes de finalizar", () => {
  const storage = memoryStorage();
  const event = attempt("training:stable-response:analytics");
  const first = applyStoredAnalyticsEvents(false, [event], new Date(NOW), storage);
  const second = applyStoredAnalyticsEvents(false, [event], new Date(NOW), storage);
  assert(first.saved && second.saved && loadAnalyticsStore(false, storage).store.attempts.length === 1, "El intento no fue inmediato o se duplicó.");
});

test("duda y alta manual se guardan inmediatamente y solo una vez", () => {
  const storage = memoryStorage();
  const item = question("TRAIN-ACTION");
  const response = createReinforcementEvent("training:answer:response", "response", item, { result: "correct", occurredAt: NOW });
  const doubt = createReinforcementEvent("training:answer:assessment:doubt", "assessment", item, { assessment: "doubt", occurredAt: NOW });
  const manual = createReinforcementEvent("training:answer:manual", "manual", item, { occurredAt: NOW });
  applyStoredReinforcementEvents(false, [response, doubt, manual, doubt, manual], new Date(NOW), storage);
  const record = Object.values(loadReinforcementStore(false, storage).store.records)[0];
  assert(record.attempts === 1 && record.doubtCount === 1 && record.processedEventIds.length === 3 && Boolean(record.nextReviewAt), "La duda o el alta manual no fue inmediata e idempotente.");
});

test("un error de entrenamiento entra automáticamente en refuerzo una sola vez", () => {
  const storage = memoryStorage();
  const item = question("TRAIN-ERROR");
  const error = createReinforcementEvent("training:error:response", "response", item, { result: "incorrect", occurredAt: NOW });
  applyStoredReinforcementEvents(false, [error, error], new Date(NOW), storage);
  const record = Object.values(loadReinforcementStore(false, storage).store.records)[0];
  assert(record.attempts === 1 && record.incorrectAnswers === 1 && Boolean(record.nextReviewAt), "El error automático no quedó programado una sola vez.");
});

test("el contexto de entrenamiento conserva respuesta y botones procesados tras recargar", () => {
  const storage = memoryStorage();
  const context = {
    sessionId: "TRAIN-RELOAD",
    isDemo: false,
    startedAt: NOW,
    questionRefs: [{ id: "Q-1", collection: "official" }],
    currentIndex: 0,
    responsesByQuestionKey: { "official:Q-1": { responseId: "stable", selectedOption: "A", correct: true, doubted: true, addedToReinforcement: true } },
  };
  saveActiveTrainingSession(false, context, storage);
  const restored = loadActiveTrainingSession(false, storage);
  assert(restored?.responsesByQuestionKey["official:Q-1"].doubted === true && restored?.responsesByQuestionKey["official:Q-1"].addedToReinforcement === true, "La recarga perdió el estado procesado.");
});

test("las estadísticas leen inmediatamente intento y duda ya guardados", () => {
  const storage = memoryStorage();
  const item = question("STAT-NOW");
  const event = attempt("training:STAT-NOW:analytics", item);
  applyStoredAnalyticsEvents(false, [event, createAnalyticsAnnotationEvent("training:STAT-NOW:annotation:doubt", false, event.id, { doubted: true })], new Date(NOW), storage);
  const summaryNow = getAnalyticsSummary(false, {}, storage);
  assert(summaryNow.metric.total === 1 && summaryNow.metric.doubts === 1 && summaryNow.sessions.count === 0, "La entrada en estadísticas conservó una caché obsoleta.");
});

test("el examen demo selecciona 20 preguntas equilibradas y aisladas", () => {
  const selection = selectExamQuestions(demoQuestions(), {
    mode: EXAM_MODES.DEMO,
    questionCount: 20,
    durationSeconds: 600,
    penaltyPerError: 0.33,
    blockIds: ["B1", "B2", "B3", "B4"],
    demoEnabled: true,
    shuffleQuestions: false,
    shuffleOptions: true,
  }, () => 0.5);
  const byBlock = selection.questions.reduce((counts, item) => ({ ...counts, [item.block_id]: (counts[item.block_id] || 0) + 1 }), {});
  const origins = new Set(selection.questions.map((item) => item.origin));
  assert(!selection.errors && selection.questions.length === 20 && Object.values(byBlock).every((count) => count === 5) && origins.size === 4 && selection.questions.every((item) => item.isDemo && item.collection === "demo"), "El examen demo no quedó equilibrado o aislado.");
});

assert(ANALYTICS_REAL_KEY !== ANALYTICS_DEMO_KEY, "Las claves analíticas deben ser distintas.");
summary.textContent = `${passed} pruebas aprobadas; ${failed} fallidas.`;
summary.className = failed === 0 ? "pass" : "fail";
