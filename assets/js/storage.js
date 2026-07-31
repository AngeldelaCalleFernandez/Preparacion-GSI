const STORAGE_KEY = "tai.phase3.training.v1";

function getStoredRecords() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
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
  const records = getStoredRecords();
  records.push({
    questionId: question.id,
    selectedOption,
    correct,
    answeredAt: new Date().toISOString(),
    origin: question.origin,
    blockId: question.block_id,
    topicId: question.topic_id,
    isDemo: Boolean(question.isDemo),
  });
  return setStoredRecords(records);
}

export function getProgressSummary() {
  const records = getStoredRecords();
  return {
    total: records.length,
    demo: records.filter((record) => record.isDemo === true).length,
    real: records.filter((record) => record.isDemo !== true).length,
  };
}

export function clearDemoResponses() {
  return setStoredRecords(getStoredRecords().filter((record) => record.isDemo !== true));
}

export function clearAllResponses() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
