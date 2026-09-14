/** Pure selection shared by training and regression tests. */
export function filterTrainingQuestions(questions, responses = [], filters = {}) {
  const latest = new Map();
  for (const record of [...responses].sort((a, b) => String(a.answeredAt).localeCompare(String(b.answeredAt)))) {
    if (!record.isDemo) latest.set(record.questionId, record);
  }
  return questions.filter((q) => {
    if (!q.is_active || q.isDemo || q.opposition_id !== "OPP-GSI" || q.validation_status !== "validated") return false;
    if (filters.blockId && q.block_id !== filters.blockId) return false;
    if (filters.topicId && q.topic_id !== filters.topicId) return false;
    if (filters.origin === "manual" && !["manual", "adapted"].includes(q.origin)) return false;
    if (filters.origin && filters.origin !== "manual" && q.origin !== filters.origin) return false;
    if (filters.history === "unseen" && latest.has(q.id)) return false;
    if (filters.history === "failed" && latest.get(q.id)?.correct !== false) return false;
    return true;
  });
}
