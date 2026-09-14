import { normaliseAnalyticsStore } from "./analytics-engine.js?gsi2";
import { validateActiveExamState } from "./exam-storage.js?gsi2";
import { buildPhysicalPersistenceKey, createPersistenceEnvelope, LOGICAL_PERSISTENCE_KEYS, parsePersistenceEnvelope } from "./persistence-v2.js?gsi2";
import { validateReinforcementStore } from "./reinforcement-storage.js?gsi2";

function validationError(message) {
  throw new Error(`Migración v1→v2: ${message}`);
}

function parseLegacyPayload(rawValue, logicalKey) {
  try {
    return JSON.parse(rawValue);
  } catch {
    validationError(`${logicalKey} contiene JSON malformado.`);
  }
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function validateTrainingV1(payload) {
  if (!isPlainObject(payload) || payload.version !== 1 || !Array.isArray(payload.responses)) return false;
  return payload.responses.every((record) => isPlainObject(record)
    && typeof record.questionId === "string"
    && typeof record.selectedOption === "string"
    && typeof record.correct === "boolean"
    && typeof record.answeredAt === "string"
    && Number.isFinite(Date.parse(record.answeredAt))
    && typeof record.blockId === "string"
    && typeof record.topicId === "string"
    && (record.responseId === undefined || (typeof record.responseId === "string" && record.responseId))
    && (record.isDemo === undefined || typeof record.isDemo === "boolean"));
}

function expectedMode(logicalKey) {
  return logicalKey.includes(".demo.");
}

function validatePayload(logicalKey, payload) {
  if (logicalKey === "gsi.phase3.training.v1") return validateTrainingV1(payload);
  if (logicalKey.includes("exam.active")) {
    const checked = validateActiveExamState(payload);
    return checked.valid && checked.state.isDemo === expectedMode(logicalKey);
  }
  if (logicalKey.includes("reinforcement")) {
    return validateReinforcementStore(payload, expectedMode(logicalKey)).valid;
  }
  if (logicalKey.includes("analytics")) {
    return normaliseAnalyticsStore(payload, expectedMode(logicalKey)).valid;
  }
  return false;
}

function assertRawStorage(rawStorage) {
  if (!rawStorage || ["getItem", "setItem", "removeItem"].some((method) => typeof rawStorage[method] !== "function")) {
    validationError("rawStorage no implementa getItem, setItem y removeItem.");
  }
  return rawStorage;
}

export function planV1ToV2Migration(runtimeContext, rawStorage) {
  const storage = assertRawStorage(rawStorage);
  const entries = [];
  // GSI nunca importa historial sin identidad certificada.
  const allowUnscopedImport = runtimeContext.oppositionId !== "OPP-GSI";
  for (const logicalKey of LOGICAL_PERSISTENCE_KEYS) {
    const physicalKey = buildPhysicalPersistenceKey(runtimeContext, logicalKey);
    const existingV2 = storage.getItem(physicalKey);
    if (existingV2 !== null) {
      const envelope = parsePersistenceEnvelope(existingV2, runtimeContext);
      if (envelope.payload !== null && !validatePayload(logicalKey, envelope.payload)) {
        validationError(`${physicalKey} contiene un payload v2 incompatible.`);
      }
      entries.push({ logicalKey, physicalKey, action: "existing" });
      continue;
    }
    const rawV1 = allowUnscopedImport ? storage.getItem(logicalKey) : null;
    if (rawV1 === null) {
      entries.push({ logicalKey, physicalKey, action: "absent" });
      continue;
    }
    const payload = parseLegacyPayload(rawV1, logicalKey);
    if (!validatePayload(logicalKey, payload)) validationError(`${logicalKey} no cumple su contrato v1.`);
    entries.push({ logicalKey, physicalKey, action: "copy", payload });
  }
  return Object.freeze({ entries: Object.freeze(entries), copies: Object.freeze(entries.filter((entry) => entry.action === "copy")) });
}

export function migrateV1ToV2(runtimeContext, rawStorage) {
  let plan;
  try {
    plan = planV1ToV2Migration(runtimeContext, rawStorage);
  } catch (error) {
    return { ok: false, phase: "planning", created: [], error: error instanceof Error ? error.message : "No se pudo planificar la migración v1→v2." };
  }
  const created = [];
  try {
    for (const entry of plan.copies) {
      rawStorage.setItem(entry.physicalKey, JSON.stringify(createPersistenceEnvelope(runtimeContext, entry.payload)));
      created.push(entry.physicalKey);
    }
    return { ok: true, phase: "written", created, copied: created.length, plan };
  } catch (error) {
    const rollbackErrors = [];
    for (const physicalKey of [...created].reverse()) {
      try {
        rawStorage.removeItem(physicalKey);
      } catch (rollbackError) {
        rollbackErrors.push(`${physicalKey}: ${rollbackError instanceof Error ? rollbackError.message : String(rollbackError)}`);
      }
    }
    return {
      ok: false,
      phase: "writing",
      created,
      error: error instanceof Error ? error.message : "No se pudo escribir la migración v1→v2.",
      rollbackError: rollbackErrors.length ? `Rollback incompleto: ${rollbackErrors.join(" | ")}` : null,
    };
  }
}
