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
    if (Array.isArray(filters.blockIds) && filters.blockIds.length > 0 && !filters.blockIds.includes(q.block_id)) return false;
    if (Array.isArray(filters.topicIds) && filters.topicIds.length > 0 && !filters.topicIds.includes(q.topic_id)) return false;
    if (filters.origin === "manual" && !["manual", "adapted"].includes(q.origin)) return false;
    if (filters.origin && filters.origin !== "manual" && q.origin !== filters.origin) return false;
    if (filters.history === "unseen" && latest.has(q.id)) return false;
    if (filters.history === "failed" && latest.get(q.id)?.correct !== false) return false;
    return true;
  });
}

function shuffleCopy(items, random = Math.random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

export function selectTrainingQuestions(questions, quantity, filters = {}, random = Math.random) {
  const limit = Math.min(Math.max(Number.isInteger(quantity) ? quantity : 0, 0), questions.length);
  if (limit === 0) return [];
  const topicGroups = Array.isArray(filters.topicIds) ? [...new Set(filters.topicIds)] : [];
  const blockGroups = Array.isArray(filters.blockIds) ? [...new Set(filters.blockIds)] : [];
  const groupField = topicGroups.length > 1 ? "topic_id" : blockGroups.length > 1 ? "block_id" : null;
  const groupIds = groupField === "topic_id" ? topicGroups : groupField === "block_id" ? blockGroups : [];
  if (!groupField) return shuffleCopy(questions, random).slice(0, limit);

  const pools = new Map(groupIds.map((id) => [id, shuffleCopy(questions.filter((question) => question[groupField] === id), random)]));
  const order = shuffleCopy(groupIds.filter((id) => pools.get(id).length > 0), random);
  const selected = [];
  while (selected.length < limit && order.some((id) => pools.get(id).length > 0)) {
    for (const id of order) {
      const question = pools.get(id).pop();
      if (question && selected.length < limit) selected.push(question);
    }
  }
  return selected;
}

export function summarizeTrainingResults(questions, responsesByQuestionKey = {}) {
  const byBlock = new Map();
  const byTopic = new Map();
  const failed = [];
  let answered = 0;
  let correct = 0;
  for (const question of questions) {
    const response = responsesByQuestionKey[`${question.collection}:${question.id}`] ?? responsesByQuestionKey[question.id];
    if (!response) continue;
    answered += 1;
    if (response.correct) correct += 1;
    else failed.push({ question, response });
    for (const [map, id] of [[byBlock, question.block_id], [byTopic, question.topic_id]]) {
      const row = map.get(id) ?? { id, answered: 0, correct: 0, incorrect: 0 };
      row.answered += 1;
      if (response.correct) row.correct += 1;
      else row.incorrect += 1;
      map.set(id, row);
    }
  }
  return {
    configured: questions.length,
    answered,
    correct,
    incorrect: answered - correct,
    accuracy: answered ? correct / answered * 100 : 0,
    failed,
    byBlock: [...byBlock.values()],
    byTopic: [...byTopic.values()],
  };
}
