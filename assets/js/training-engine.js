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
  const topicScope = Array.isArray(filters.topicIds) ? [...new Set(filters.topicIds)] : [];
  const blockScope = Array.isArray(filters.blockIds) ? [...new Set(filters.blockIds)] : [];
  const scoped = questions.filter((question) => {
    if (filters.topicId && question.topic_id !== filters.topicId) return false;
    if (filters.blockId && question.block_id !== filters.blockId) return false;
    if (topicScope.length && !topicScope.includes(question.topic_id)) return false;
    if (blockScope.length && !blockScope.includes(question.block_id)) return false;
    return true;
  });
  const limit = Math.min(Math.max(Number.isInteger(quantity) ? quantity : 0, 0), scoped.length);
  if (limit === 0) return [];
  const topicIds = [...new Set(scoped.map((question) => question.topic_id))];
  if (topicIds.length <= 1) return shuffleCopy(scoped, random).slice(0, limit);

  const pools = new Map(topicIds.map((id) => [id, shuffleCopy(scoped.filter((question) => question.topic_id === id), random)]));
  const topicsByBlock = new Map();
  for (const question of scoped) {
    const ids = topicsByBlock.get(question.block_id) ?? [];
    if (!ids.includes(question.topic_id)) ids.push(question.topic_id);
    topicsByBlock.set(question.block_id, ids);
  }
  const blockOrder = shuffleCopy([...topicsByBlock.keys()], random);
  const topicOrderByBlock = new Map(
    [...topicsByBlock].map(([blockId, ids]) => [blockId, shuffleCopy(ids, random)]),
  );
  const topicCursorByBlock = new Map(blockOrder.map((blockId) => [blockId, 0]));
  const selected = [];
  while (selected.length < limit) {
    let added = false;
    for (const blockId of blockOrder) {
      const order = topicOrderByBlock.get(blockId);
      const start = topicCursorByBlock.get(blockId);
      for (let offset = 0; offset < order.length; offset += 1) {
        const position = (start + offset) % order.length;
        const topicId = order[position];
        const question = pools.get(topicId).pop();
        if (!question) continue;
        selected.push(question);
        topicCursorByBlock.set(blockId, (position + 1) % order.length);
        added = true;
        break;
      }
      if (selected.length === limit) return selected;
    }
    if (!added) break;
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
