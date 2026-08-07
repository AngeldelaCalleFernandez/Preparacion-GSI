export const LOGICAL_PERSISTENCE_KEYS = Object.freeze([
  "tai.phase3.training.v1",
  "tai.phase4.exam.active.real.v1",
  "tai.phase4.exam.active.demo.v1",
  "tai.reinforcement.real.v1",
  "tai.reinforcement.demo.v1",
  "tai.analytics.real.v1",
  "tai.analytics.demo.v1",
]);

const SUFFIX_BY_LOGICAL_KEY = Object.freeze({
  "tai.phase3.training.v1": "training",
  "tai.phase4.exam.active.real.v1": "exam.active.real",
  "tai.phase4.exam.active.demo.v1": "exam.active.demo",
  "tai.reinforcement.real.v1": "reinforcement.real",
  "tai.reinforcement.demo.v1": "reinforcement.demo",
  "tai.analytics.real.v1": "analytics.real",
  "tai.analytics.demo.v1": "analytics.demo",
});

const OPPOSITION_ID_RE = /^OPP-[A-Z][A-Z0-9-]*$/;
const SYLLABUS_ID_RE = /^SYL-[A-Z0-9-]+$/;

let configuredAdapter = null;

function assertPersistence(condition, message) {
  if (!condition) throw new Error(`Persistencia v2 inválida: ${message}`);
}

function assertContext(context) {
  assertPersistence(context && typeof context === "object", "falta el contexto runtime.");
  assertPersistence(OPPOSITION_ID_RE.test(context.oppositionId || ""), "oppositionId no es válido.");
  assertPersistence(SYLLABUS_ID_RE.test(context.syllabusId || ""), "syllabusId no es válido.");
  return { oppositionId: context.oppositionId, syllabusId: context.syllabusId };
}

function assertLogicalKey(logicalKey) {
  assertPersistence(Object.hasOwn(SUFFIX_BY_LOGICAL_KEY, logicalKey), `contrato lógico desconocido: ${logicalKey}.`);
  return SUFFIX_BY_LOGICAL_KEY[logicalKey];
}

function assertRawStorage(rawStorage) {
  assertPersistence(rawStorage && ["getItem", "setItem", "removeItem"].every((method) => typeof rawStorage[method] === "function"), "rawStorage no implementa getItem, setItem y removeItem.");
  return rawStorage;
}

export function buildPhysicalPersistenceKey(context, logicalKey) {
  const runtime = assertContext(context);
  const suffix = assertLogicalKey(logicalKey);
  return `oposiciones.${runtime.oppositionId}.${runtime.syllabusId}.${suffix}.v2`;
}

export function createPersistenceEnvelope(context, payload) {
  const runtime = assertContext(context);
  return {
    persistenceVersion: 2,
    oppositionId: runtime.oppositionId,
    syllabusId: runtime.syllabusId,
    payload,
  };
}

export function validatePersistenceEnvelope(value, context) {
  const runtime = assertContext(context);
  assertPersistence(value && typeof value === "object" && !Array.isArray(value), "el envelope no es un objeto.");
  assertPersistence(value.persistenceVersion === 2, "persistenceVersion no es 2.");
  assertPersistence(value.oppositionId === runtime.oppositionId, "oppositionId no coincide con el contexto.");
  assertPersistence(value.syllabusId === runtime.syllabusId, "syllabusId no coincide con el contexto.");
  assertPersistence(Object.hasOwn(value, "payload"), "falta la propiedad payload.");
  return value;
}

export function parsePersistenceEnvelope(rawValue, context) {
  assertPersistence(typeof rawValue === "string", "el envelope físico no contiene JSON.");
  try {
    return validatePersistenceEnvelope(JSON.parse(rawValue), context);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Persistencia v2 inválida:")) throw error;
    throw new Error("Persistencia v2 inválida: el envelope físico contiene JSON malformado.");
  }
}

export function createPersistenceAdapter(context, rawStorage) {
  const runtime = assertContext(context);
  const storage = assertRawStorage(rawStorage);
  return Object.freeze({
    context: runtime,
    rawStorage: storage,
    getItem(logicalKey) {
      const rawValue = storage.getItem(buildPhysicalPersistenceKey(runtime, logicalKey));
      if (rawValue === null) return null;
      const envelope = parsePersistenceEnvelope(rawValue, runtime);
      return envelope.payload === null ? null : JSON.stringify(envelope.payload);
    },
    setItem(logicalKey, jsonString) {
      assertLogicalKey(logicalKey);
      assertPersistence(typeof jsonString === "string", "setItem requiere JSON en texto.");
      let payload;
      try {
        payload = JSON.parse(jsonString);
      } catch {
        throw new Error("Persistencia v2 inválida: setItem recibió JSON malformado.");
      }
      storage.setItem(buildPhysicalPersistenceKey(runtime, logicalKey), JSON.stringify(createPersistenceEnvelope(runtime, payload)));
    },
    removeItem(logicalKey) {
      storage.setItem(buildPhysicalPersistenceKey(runtime, logicalKey), JSON.stringify(createPersistenceEnvelope(runtime, null)));
    },
  });
}

export function configurePersistenceV2(runtimeContext, rawStorage = window.localStorage) {
  configuredAdapter = createPersistenceAdapter(runtimeContext, rawStorage);
  return configuredAdapter;
}

export function getConfiguredPersistenceAdapter() {
  assertPersistence(configuredAdapter, "el adaptador no está configurado.");
  return configuredAdapter;
}
