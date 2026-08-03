const STORAGE_KEY = "tai.phase3.training.v1";

export function getStoredResponses(storage = window.localStorage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed?.responses) ? parsed.responses.filter((record) => record && typeof record.questionId === "string") : [];
  } catch {
    return [];
  }
}

function setStoredRecords(records) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, responses: records }));
    return true;
  } catch {
    return false;
  }
}

export function saveResponse(question, selectedOption, correct) {
  const records = getStoredResponses();
  const record = {
    responseId: globalThis.crypto?.randomUUID?.() ?? `TRAIN-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    questionId: question.id,
    selectedOption,
    correct,
    answeredAt: new Date().toISOString(),
    origin: question.origin,
    blockId: question.block_id,
    topicId: question.topic_id,
    isDemo: Boolean(question.isDemo),
  };
  records.push(record);
  return { saved: setStoredRecords(records), record };
}

export function getProgressSummary() {
  const records = getStoredResponses();
  return {
    total: records.length,
    demo: records.filter((record) => record.isDemo === true).length,
    real: records.filter((record) => record.isDemo !== true).length,
  };
}

export function clearDemoResponses() {
  return setStoredRecords(getStoredResponses().filter((record) => record.isDemo !== true));
}

export function clearAllResponses() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
