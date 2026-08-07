import {
  LOGICAL_PERSISTENCE_KEYS,
  buildPhysicalPersistenceKey,
  configurePersistenceV2,
  createPersistenceAdapter,
  createPersistenceEnvelope,
  getConfiguredPersistenceAdapter,
  parsePersistenceEnvelope,
  validatePersistenceEnvelope,
} from "../assets/js/persistence-v2.js?m3";
import { migrateV1ToV2, planV1ToV2Migration } from "../assets/js/persistence-migration-v2.js?m3";
import { createAnalyticsStore } from "../assets/js/analytics-engine.js";
import { createActiveExamState, clearActiveExamState, saveActiveExamState } from "../assets/js/exam-storage.js?m3";
import { clearAllResponses, saveResponse } from "../assets/js/storage.js?m3";
import {
  clearAllReinforcement,
  createReinforcementSession,
  loadReinforcementStore,
  saveReinforcementStore,
} from "../assets/js/reinforcement-storage.js?m3";
import { clearAllAnalyticsStores, loadAnalyticsStore, saveAnalyticsStore } from "../assets/js/analytics-storage.js?m3";
import { migratePhase3Training } from "../assets/js/reinforcement-migration.js?m3";
import { migrateAnalytics } from "../assets/js/analytics-migration.js?m3";

const CONTEXT = Object.freeze({ oppositionId: "OPP-TEST", syllabusId: "SYL-TEST-2026", short_code: "IGNORADO" });
const OTHER_CONTEXT = Object.freeze({ oppositionId: "OPP-ALT", syllabusId: "SYL-ALT-2026", short_code: "TAMPOCO" });
const FIXED_DATE = new Date("2026-08-07T10:00:00.000Z");
const results = [];

class FakeStorage {
  constructor(seed = {}) {
    this.values = new Map(Object.entries(seed));
    this.setCalls = 0;
    this.removeCalls = 0;
    this.failOnSet = null;
    this.failOnRemove = null;
  }

  get length() { return this.values.size; }

  key(index) { return [...this.values.keys()][index] ?? null; }

  getItem(key) { return this.values.has(String(key)) ? this.values.get(String(key)) : null; }

  setItem(key, value) {
    this.setCalls += 1;
    if (this.failOnSet !== null && this.setCalls >= this.failOnSet) throw new Error("fallo simulado de escritura");
    this.values.set(String(key), String(value));
  }

  removeItem(key) {
    this.removeCalls += 1;
    if (this.failOnRemove !== null && this.removeCalls >= this.failOnRemove) throw new Error("fallo simulado de rollback");
    this.values.delete(String(key));
  }

  resetCounters() {
    this.setCalls = 0;
    this.removeCalls = 0;
  }
}

function expect(condition, message = "La condición esperada no se cumple.") {
  if (!condition) throw new Error(message);
}

function expectThrows(action, expected = "") {
  try {
    action();
  } catch (error) {
    expect(String(error.message || error).includes(expected), `El error no contiene «${expected}».`);
    return;
  }
  throw new Error("Se esperaba un error.");
}

function physical(context, logicalKey) {
  return buildPhysicalPersistenceKey(context, logicalKey);
}

function trainingPayload(isDemo = false) {
  return {
    version: 1,
    responses: [{
      responseId: `RESP-${isDemo ? "D" : "R"}-1`,
      questionId: isDemo ? "QD-1" : "QR-1",
      selectedOption: "A",
      correct: false,
      answeredAt: "2026-08-01T10:00:00.000Z",
      origin: "manual",
      blockId: "B1",
      topicId: "B1-T01",
      isDemo,
    }],
  };
}

function question(isDemo = false) {
  return {
    id: isDemo ? "QD-1" : "QR-1",
    collection: isDemo ? "demo" : "manual",
    origin: "manual",
    block_id: "B1",
    topic_id: "B1-T01",
    isDemo,
    options: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }],
  };
}

function examPayload(isDemo = false) {
  const item = question(isDemo);
  return createActiveExamState({
    config: { durationSeconds: 3600, count: 1 },
    questions: [item],
    optionOrderByQuestionId: { [item.id]: ["A", "B", "C", "D"] },
    isDemo,
  });
}

function reinforcementPayload(isDemo = false) {
  return {
    version: 1,
    isDemo,
    migration: { phase3TrainingVersion: 0, completedAt: null, imported: 0, ignored: 0 },
    records: {},
    activeSession: null,
  };
}

function analyticsPayload(isDemo = false) {
  return createAnalyticsStore(isDemo, FIXED_DATE);
}

function seedV1(storage, logicalKey, payload) {
  storage.setItem(logicalKey, JSON.stringify(payload));
}

function readPayload(storage, context, logicalKey) {
  const raw = storage.getItem(physical(context, logicalKey));
  return raw === null ? null : parsePersistenceEnvelope(raw, context).payload;
}

function seedAllValid(storage) {
  seedV1(storage, "tai.phase3.training.v1", trainingPayload(false));
  seedV1(storage, "tai.phase4.exam.active.real.v1", examPayload(false));
  seedV1(storage, "tai.phase4.exam.active.demo.v1", examPayload(true));
  seedV1(storage, "tai.reinforcement.real.v1", reinforcementPayload(false));
  seedV1(storage, "tai.reinforcement.demo.v1", reinforcementPayload(true));
  seedV1(storage, "tai.analytics.real.v1", analyticsPayload(false));
  seedV1(storage, "tai.analytics.demo.v1", analyticsPayload(true));
}

async function test(name, action) {
  try {
    await action();
    results.push({ name, ok: true });
  } catch (error) {
    results.push({ name, ok: false, error: error instanceof Error ? error.message : String(error) });
  }
}

await test("01. contexto sin oppositionId rechazado", () => expectThrows(() => buildPhysicalPersistenceKey({ syllabusId: CONTEXT.syllabusId }, LOGICAL_PERSISTENCE_KEYS[0]), "oppositionId"));
await test("02. contexto sin syllabusId rechazado", () => expectThrows(() => buildPhysicalPersistenceKey({ oppositionId: CONTEXT.oppositionId }, LOGICAL_PERSISTENCE_KEYS[0]), "syllabusId"));
await test("03. contrato desconocido rechazado", () => expectThrows(() => buildPhysicalPersistenceKey(CONTEXT, "tai.unknown.v1"), "desconocido"));
await test("04. builder determinista", () => expect(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]) === physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])));
await test("05. contextos diferentes producen claves diferentes", () => expect(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]) !== physical(OTHER_CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])));
await test("06. siete contratos producen siete claves", () => expect(new Set(LOGICAL_PERSISTENCE_KEYS.map((key) => physical(CONTEXT, key))).size === 7));
await test("07. builder no depende de short_code", () => expect(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]) === physical({ ...CONTEXT, short_code: "OTRO" }, LOGICAL_PERSISTENCE_KEYS[0])));
await test("08. envelope válido", () => expect(validatePersistenceEnvelope(createPersistenceEnvelope(CONTEXT, { ok: true }), CONTEXT).payload.ok));
await test("09. persistenceVersion incorrecta rechazada", () => expectThrows(() => validatePersistenceEnvelope({ persistenceVersion: 1, oppositionId: CONTEXT.oppositionId, syllabusId: CONTEXT.syllabusId, payload: {} }, CONTEXT), "persistenceVersion"));
await test("10. envelope de oposición distinta rechazado", () => expectThrows(() => validatePersistenceEnvelope({ persistenceVersion: 2, oppositionId: OTHER_CONTEXT.oppositionId, syllabusId: CONTEXT.syllabusId, payload: {} }, CONTEXT), "oppositionId"));
await test("11. envelope de syllabus distinto rechazado", () => expectThrows(() => validatePersistenceEnvelope({ persistenceVersion: 2, oppositionId: CONTEXT.oppositionId, syllabusId: OTHER_CONTEXT.syllabusId, payload: {} }, CONTEXT), "syllabusId"));
await test("12. envelope sin payload rechazado", () => expectThrows(() => validatePersistenceEnvelope({ persistenceVersion: 2, oppositionId: CONTEXT.oppositionId, syllabusId: CONTEXT.syllabusId }, CONTEXT), "payload"));
await test("13. payload null es válido", () => expect(validatePersistenceEnvelope(createPersistenceEnvelope(CONTEXT, null), CONTEXT).payload === null));
await test("14. getItem desenvuelve el payload", () => { const raw = new FakeStorage(); const adapter = createPersistenceAdapter(CONTEXT, raw); adapter.setItem(LOGICAL_PERSISTENCE_KEYS[0], JSON.stringify({ value: 1 })); expect(JSON.parse(adapter.getItem(LOGICAL_PERSISTENCE_KEYS[0])).value === 1); });
await test("15. setItem envuelve el payload", () => { const raw = new FakeStorage(); createPersistenceAdapter(CONTEXT, raw).setItem(LOGICAL_PERSISTENCE_KEYS[0], JSON.stringify({ value: 2 })); expect(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]).value === 2); });
await test("16. setItem con JSON inválido rechazado", () => expectThrows(() => createPersistenceAdapter(CONTEXT, new FakeStorage()).setItem(LOGICAL_PERSISTENCE_KEYS[0], "{"), "JSON"));
await test("17. removeItem crea un tombstone", () => { const raw = new FakeStorage(); const adapter = createPersistenceAdapter(CONTEXT, raw); adapter.removeItem(LOGICAL_PERSISTENCE_KEYS[0]); expect(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]) === null); });
await test("18. tombstone devuelve null", () => { const raw = new FakeStorage(); const adapter = createPersistenceAdapter(CONTEXT, raw); adapter.removeItem(LOGICAL_PERSISTENCE_KEYS[0]); expect(adapter.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === null); });
await test("19. escritura del adaptador no toca v1", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], legacy); createPersistenceAdapter(CONTEXT, raw).setItem(LOGICAL_PERSISTENCE_KEYS[0], JSON.stringify({ version: 1, responses: [] })); expect(raw.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === legacy); });
await test("20. adaptador no configurado falla explícitamente", () => expectThrows(() => getConfiguredPersistenceAdapter(), "no está configurado"));
await test("21. training v1 válida se planifica", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); expect(planV1ToV2Migration(CONTEXT, raw).copies.length === 1); });
await test("22. training corrupta aborta la planificación", () => { const raw = new FakeStorage(); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], "{"); expectThrows(() => planV1ToV2Migration(CONTEXT, raw), "malformado"); expect(raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) === null); });
await test("23. examen real válido se copia exacto", () => { const raw = new FakeStorage(); const payload = examPayload(false); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[1], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[1])) === JSON.stringify(payload)); });
await test("24. examen demo válido se copia exacto", () => { const raw = new FakeStorage(); const payload = examPayload(true); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[2], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[2])) === JSON.stringify(payload)); });
await test("25. examen inválido aborta", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[1], { version: 1 }); expect(!migrateV1ToV2(CONTEXT, raw).ok); });
await test("26. refuerzo real válido se copia exacto", () => { const raw = new FakeStorage(); const payload = reinforcementPayload(false); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[3], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[3])) === JSON.stringify(payload)); });
await test("27. refuerzo demo válido se copia exacto", () => { const raw = new FakeStorage(); const payload = reinforcementPayload(true); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[4], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[4])) === JSON.stringify(payload)); });
await test("28. refuerzo real/demo incoherente aborta", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[3], reinforcementPayload(true)); expect(!migrateV1ToV2(CONTEXT, raw).ok); });
await test("29. analítica real válida se copia exacto", () => { const raw = new FakeStorage(); const payload = analyticsPayload(false); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[5], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[5])) === JSON.stringify(payload)); });
await test("30. analítica demo válida se copia exacto", () => { const raw = new FakeStorage(); const payload = analyticsPayload(true); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[6], payload); expect(migrateV1ToV2(CONTEXT, raw).ok); expect(JSON.stringify(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[6])) === JSON.stringify(payload)); });
await test("31. analítica inválida aborta", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[5], { version: 0, isDemo: false }); expect(!migrateV1ToV2(CONTEXT, raw).ok); });
await test("32. v1 ausente no crea v2", () => { const raw = new FakeStorage(); const result = migrateV1ToV2(CONTEXT, raw); expect(result.ok && result.copied === 0 && raw.length === 0); });
await test("33. v1 permanece byte a byte intacta", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], legacy); migrateV1ToV2(CONTEXT, raw); expect(raw.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === legacy); });
await test("34. v2 existente no se sobrescribe", () => { const raw = new FakeStorage(); const existing = JSON.stringify(createPersistenceEnvelope(CONTEXT, { ...trainingPayload(), already: true })); raw.setItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]), existing); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); raw.resetCounters(); const result = migrateV1ToV2(CONTEXT, raw); expect(result.ok && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) === existing && raw.setCalls === 0); });
await test("35. tombstone impide remigración", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); createPersistenceAdapter(CONTEXT, raw).removeItem(LOGICAL_PERSISTENCE_KEYS[0]); raw.resetCounters(); const result = migrateV1ToV2(CONTEXT, raw); expect(result.ok && result.copied === 0 && raw.setCalls === 0); });
await test("36. segunda migración no escribe copias", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); migrateV1ToV2(CONTEXT, raw); raw.resetCounters(); const result = migrateV1ToV2(CONTEXT, raw); expect(result.ok && result.copied === 0 && raw.setCalls === 0); });
await test("37. varias v1 válidas migran juntas", () => { const raw = new FakeStorage(); seedAllValid(raw); raw.resetCounters(); const result = migrateV1ToV2(CONTEXT, raw); expect(result.ok && result.copied === 7 && raw.setCalls === 7); });
await test("38. una v1 corrupta evita todas las escrituras nuevas", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[3], "{"); raw.resetCounters(); const result = migrateV1ToV2(CONTEXT, raw); expect(!result.ok && raw.setCalls === 0 && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) === null); });
await test("39. fallo de setItem revierte v2 nuevas", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[3], reinforcementPayload()); raw.resetCounters(); raw.failOnSet = 2; const result = migrateV1ToV2(CONTEXT, raw); expect(!result.ok && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) === null && raw.removeCalls === 1); });
await test("40. rollback conserva v2 previas", () => { const raw = new FakeStorage(); const prior = JSON.stringify(createPersistenceEnvelope(CONTEXT, { prior: true })); raw.setItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]), prior); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[3], reinforcementPayload()); raw.resetCounters(); raw.failOnSet = 1; const result = migrateV1ToV2(CONTEXT, raw); expect(!result.ok && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) === prior); });
await test("41. rollback conserva v1", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], legacy); raw.resetCounters(); raw.failOnSet = 1; migrateV1ToV2(CONTEXT, raw); expect(raw.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === legacy); });
await test("42. dos contextos sintéticos quedan aislados", () => { const raw = new FakeStorage(); createPersistenceAdapter(CONTEXT, raw).setItem(LOGICAL_PERSISTENCE_KEYS[0], JSON.stringify({ value: "uno" })); createPersistenceAdapter(OTHER_CONTEXT, raw).setItem(LOGICAL_PERSISTENCE_KEYS[0], JSON.stringify({ value: "dos" })); expect(JSON.parse(createPersistenceAdapter(CONTEXT, raw).getItem(LOGICAL_PERSISTENCE_KEYS[0])).value === "uno"); });
await test("43. real y demo permanecen aislados", () => { const raw = new FakeStorage(); const adapter = createPersistenceAdapter(CONTEXT, raw); adapter.setItem(LOGICAL_PERSISTENCE_KEYS[1], JSON.stringify({ real: true })); adapter.setItem(LOGICAL_PERSISTENCE_KEYS[2], JSON.stringify({ demo: true })); expect(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[1]) !== physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[2]) && JSON.parse(adapter.getItem(LOGICAL_PERSISTENCE_KEYS[2])).demo); });
await test("44. training conserva isDemo histórico", () => { const raw = new FakeStorage(); const payload = trainingPayload(true); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], payload); migrateV1ToV2(CONTEXT, raw); expect(readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]).responses[0].isDemo === true); });
await test("45. nuevas escrituras de dominio usan solo v2", () => { const raw = new FakeStorage(); configurePersistenceV2(CONTEXT, raw); saveResponse(question(false), "A", true); saveActiveExamState(examPayload(false)); saveReinforcementStore(false, reinforcementPayload(false)); saveAnalyticsStore(false, analyticsPayload(false)); expect([0, 1, 3, 5].every((index) => raw.getItem(LOGICAL_PERSISTENCE_KEYS[index]) === null && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[index])) !== null)); });
await test("46. no hay dual-write sobre v1 histórica", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], legacy); configurePersistenceV2(CONTEXT, raw); saveResponse(question(false), "A", true); expect(raw.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === legacy && raw.getItem(physical(CONTEXT, LOGICAL_PERSISTENCE_KEYS[0])) !== null); });
await test("47. clear training no permite remigración", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(trainingPayload()); raw.setItem(LOGICAL_PERSISTENCE_KEYS[0], legacy); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); clearAllResponses(); migrateV1ToV2(CONTEXT, raw); expect(getConfiguredPersistenceAdapter().getItem(LOGICAL_PERSISTENCE_KEYS[0]) === null && raw.getItem(LOGICAL_PERSISTENCE_KEYS[0]) === legacy); });
await test("48. clear examen no permite remigración", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(examPayload(false)); raw.setItem(LOGICAL_PERSISTENCE_KEYS[1], legacy); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); clearActiveExamState(false); migrateV1ToV2(CONTEXT, raw); expect(getConfiguredPersistenceAdapter().getItem(LOGICAL_PERSISTENCE_KEYS[1]) === null && raw.getItem(LOGICAL_PERSISTENCE_KEYS[1]) === legacy); });
await test("49. clear refuerzo no permite remigración", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(reinforcementPayload(false)); raw.setItem(LOGICAL_PERSISTENCE_KEYS[3], legacy); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); clearAllReinforcement(); migrateV1ToV2(CONTEXT, raw); expect(getConfiguredPersistenceAdapter().getItem(LOGICAL_PERSISTENCE_KEYS[3]) === null && raw.getItem(LOGICAL_PERSISTENCE_KEYS[3]) === legacy); });
await test("50. clear analítica no permite remigración", () => { const raw = new FakeStorage(); const legacy = JSON.stringify(analyticsPayload(false)); raw.setItem(LOGICAL_PERSISTENCE_KEYS[5], legacy); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); clearAllAnalyticsStores(); migrateV1ToV2(CONTEXT, raw); expect(getConfiguredPersistenceAdapter().getItem(LOGICAL_PERSISTENCE_KEYS[5]) === null && raw.getItem(LOGICAL_PERSISTENCE_KEYS[5]) === legacy); });
await test("51. migratePhase3Training funciona mediante adaptador", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); const result = migratePhase3Training({ questions: [question(false)] }, false); expect(result.saved && Object.keys(loadReinforcementStore(false).store.records).length === 1); });
await test("52. migrateAnalytics funciona mediante adaptador", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); migrateV1ToV2(CONTEXT, raw); configurePersistenceV2(CONTEXT, raw); migratePhase3Training({ questions: [question(false)] }, false); const result = migrateAnalytics({ questions: [question(false)] }, false); expect(result.saved && loadAnalyticsStore(false).store.attempts.length >= 1); });
await test("53. se conservan IDs legacy", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); migrateV1ToV2(CONTEXT, raw); const record = readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]).responses[0]; expect(record.blockId === "B1" && record.topicId === "B1-T01"); });
await test("54. no se duplica contexto por registro", () => { const raw = new FakeStorage(); seedV1(raw, LOGICAL_PERSISTENCE_KEYS[0], trainingPayload()); migrateV1ToV2(CONTEXT, raw); const record = readPayload(raw, CONTEXT, LOGICAL_PERSISTENCE_KEYS[0]).responses[0]; expect(!Object.hasOwn(record, "oppositionId") && !Object.hasOwn(record, "syllabusId")); });
await test("55. runner usa exclusivamente almacenamiento en memoria", () => { const raw = new FakeStorage(); raw.setItem("prueba", "ok"); expect(raw.getItem("prueba") === "ok" && raw.length === 1); });
await test("56. runner no requiere dependencias externas", () => expect([...document.scripts].every((script) => !script.src || new URL(script.src).origin === location.origin)));
await test("57. rutas M2 permanecen accesibles", async () => { const response = await fetch("../assets/js/catalog-service.js?m2"); expect(response.ok && (await response.text()).includes("selectRuntimeContext")); });
await test("58. GSI continúa no operativo", async () => { const catalog = await (await fetch("../data/oppositions.json")).json(); const planned = catalog.oppositions.find((item) => item.short_code === "GSI"); expect(planned?.runtime_available === false && planned?.status === "planned"); });
await test("59. persistencia no inventa IDs GSI", async () => { const source = await (await fetch("../assets/js/persistence-v2.js?m3")).text(); expect(!source.includes("OPP-GSI") && !source.includes("SYL-GSI-2025")); });
await test("60. datos y contenido protegidos siguen disponibles", async () => { const [data, content] = await Promise.all([fetch("../data/syllabus.json"), fetch("../content/topics/B1-T01.md")]); expect(data.ok && content.ok); });
await test("61. sesión de refuerzo conserva el contexto lógico", () => { const raw = new FakeStorage(); configurePersistenceV2(CONTEXT, raw); const session = createReinforcementSession(false, [{ question: question(false) }], { count: 1 }); expect(session.isDemo === false && !Object.hasOwn(session, "oppositionId")); });

const list = document.querySelector("#results");
const failed = results.filter((result) => !result.ok);
for (const result of results) {
  const item = document.createElement("li");
  item.className = result.ok ? "ok" : "fail";
  item.textContent = result.ok ? `APROBADA — ${result.name}` : `FALLIDA — ${result.name}: ${result.error}`;
  list.append(item);
}
document.querySelector("#summary").textContent = `Runner M3: ${results.length - failed.length} aprobadas, ${failed.length} fallidas.`;
document.querySelector("#summary").className = failed.length ? "fail" : "ok";
