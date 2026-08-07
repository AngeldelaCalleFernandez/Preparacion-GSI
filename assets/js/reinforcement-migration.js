import { getStoredResponses } from "./storage.js?m3";
import { applyReinforcementEvents, createQuestionReference } from "./reinforcement-engine.js";
import { loadReinforcementStore, saveReinforcementStore } from "./reinforcement-storage.js?m3";

function legacyId(record) {
  if (typeof record.responseId === "string" && record.responseId) return `training:${record.responseId}:response`;
  const canonical = [record.questionId, record.selectedOption, record.correct, record.answeredAt, record.origin, record.blockId, record.topicId, record.isDemo].join("|");
  let hash = 2_166_136_261;
  for (const character of canonical) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16_777_619);
  }
  return `legacy-training:${(hash >>> 0).toString(16)}:response`;
}

function findQuestion(data, record, isDemo) {
  return data.questions.find((question) => question.id === record.questionId
    && question.isDemo === isDemo
    && question.origin === record.origin
    && question.block_id === record.blockId
    && question.topic_id === record.topicId);
}

export function migratePhase3Training(data, isDemo, storage) {
  const loaded = loadReinforcementStore(isDemo, storage);
  if (loaded.store.migration.phase3TrainingVersion >= 1) return { migrated: false, saved: true, imported: 0, ignored: 0 };
  const candidates = getStoredResponses(storage).filter((record) => record?.isDemo === Boolean(isDemo));
  const events = [];
  let ignored = 0;
  for (const record of candidates) {
    const question = findQuestion(data, record, isDemo);
    if (!question || record.correct !== false || typeof record.selectedOption !== "string" || !Number.isFinite(Date.parse(record.answeredAt))) {
      ignored += 1;
      continue;
    }
    events.push({
      id: legacyId(record),
      type: "response",
      reference: createQuestionReference(question),
      result: "incorrect",
      occurredAt: record.answeredAt,
    });
  }
  try {
    const applied = applyReinforcementEvents(loaded.store.records, events, new Date());
    const next = {
      ...loaded.store,
      records: applied.records,
      migration: {
        phase3TrainingVersion: 1,
        completedAt: new Date().toISOString(),
        imported: events.filter((event, index) => !applied.results[index].duplicate).length,
        ignored,
      },
    };
    const saved = saveReinforcementStore(isDemo, next, storage);
    return { migrated: saved.saved, saved: saved.saved, imported: next.migration.imported, ignored, error: saved.error };
  } catch {
    return { migrated: false, saved: false, imported: 0, ignored, error: "No se pudo migrar el historial de entrenamiento." };
  }
}
