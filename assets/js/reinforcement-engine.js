export const INTERVAL_DAYS = Object.freeze([1, 3, 7, 14, 30, 60]);
export const STRUCTURAL_STATUSES = Object.freeze(["scheduled", "paused", "completed", "defective"]);
export const PRIORITIES = Object.freeze(["low", "medium", "high", "critical"]);
export const MAX_HISTORY = 25;
export const MAX_PROCESSED_EVENT_IDS = 250;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function asDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isFinite(date.getTime()) ? date : null;
}

function dayKey(value) {
  const date = asDate(value);
  if (!date) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(now, days) {
  return new Date(asDate(now).getTime() + days * 86_400_000).toISOString();
}

function priorityRank(priority) {
  return PRIORITIES.indexOf(priority);
}

function minPriority(current, minimum) {
  return priorityRank(current) < priorityRank(minimum) ? minimum : current;
}

function recordKey(reference) {
  return `${reference.collection || reference.origin}:${reference.questionId}`;
}

export function createQuestionReference(question) {
  return {
    questionId: question.id,
    collection: question.collection || question.origin,
    origin: question.origin,
    blockId: question.block_id,
    topicId: question.topic_id,
    isDemo: Boolean(question.isDemo),
  };
}

export function getTemporalState(record, now = new Date()) {
  if (!record?.nextReviewAt) return { timeState: null, isDue: false };
  const reviewDay = dayKey(record.nextReviewAt);
  const currentDay = dayKey(now);
  if (!reviewDay || !currentDay) return { timeState: null, isDue: false };
  if (reviewDay < currentDay) return { timeState: "overdue", isDue: true };
  if (reviewDay === currentDay) return { timeState: "due", isDue: true };
  return { timeState: "future", isDue: false };
}

function overdueDays(record, now) {
  const state = getTemporalState(record, now);
  if (state.timeState !== "overdue") return 0;
  const review = asDate(record.nextReviewAt);
  const current = asDate(now);
  return Math.max(0, Math.floor((current.getTime() - review.getTime()) / 86_400_000));
}

export function calculatePriority(record, now = new Date()) {
  const score = Math.max(0,
    Math.min(40, record.incorrectAnswers * 8)
    + Math.min(30, record.consecutiveErrors * 10)
    + Math.min(15, record.doubtCount * 3)
    + Math.min(24, record.unknownCount * 8)
    + Math.min(20, overdueDays(record, now))
    + (5 - record.intervalLevel) * 2
    - Math.min(20, record.knownStreak * 5)
  );
  let priority = score >= 50 ? "critical" : score >= 30 ? "high" : score >= 15 ? "medium" : "low";
  if (record.lastResult === "incorrect") priority = minPriority(priority, "high");
  if (record.unknownCount >= 2) priority = "critical";
  return { score, priority };
}

function emptyRecord(reference, now) {
  const timestamp = asDate(now).toISOString();
  return {
    ...reference,
    attempts: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    doubtCount: 0,
    knownCount: 0,
    unknownCount: 0,
    consecutiveErrors: 0,
    knownStreak: 0,
    lastResult: null,
    lastAttemptAt: null,
    nextReviewAt: null,
    intervalLevel: 0,
    priorityScore: 0,
    priority: "low",
    status: "scheduled",
    pauseReason: null,
    flaggedAsDefective: false,
    createdAt: timestamp,
    updatedAt: timestamp,
    completedAt: null,
    history: [],
    processedEventIds: [],
  };
}

function validateEvent(event) {
  if (!event || typeof event.id !== "string" || !event.id || !event.reference || typeof event.reference.questionId !== "string") {
    throw new Error("El evento de refuerzo no tiene un identificador o una pregunta válidos.");
  }
  if (typeof event.reference.isDemo !== "boolean") throw new Error("El evento de refuerzo no indica si es de demostración.");
  if (!["response", "assessment", "manual", "defective", "restore", "retire"].includes(event.type)) {
    throw new Error("El tipo de evento de refuerzo no es válido.");
  }
  if (event.type === "response" && !["correct", "incorrect"].includes(event.result)) {
    throw new Error("La respuesta de refuerzo debe ser correcta o incorrecta.");
  }
  if (event.type === "assessment" && !["known", "doubt", "unknown"].includes(event.assessment)) {
    throw new Error("La valoración de refuerzo no es válida.");
  }
}

function appendEvent(record, event, now) {
  const timestamp = asDate(event.occurredAt || now).toISOString();
  record.history = [...record.history, {
    eventId: event.id,
    type: event.type,
    result: event.result || null,
    assessment: event.assessment || null,
    occurredAt: timestamp,
    intervalLevel: record.intervalLevel,
    nextReviewAt: record.nextReviewAt,
  }].slice(-MAX_HISTORY);
  record.processedEventIds = [...record.processedEventIds, event.id].slice(-MAX_PROCESSED_EVENT_IDS);
  record.updatedAt = timestamp;
}

function activate(record) {
  if (record.flaggedAsDefective || record.status === "defective") {
    record.flaggedAsDefective = true;
    record.status = "defective";
    return;
  }
  record.status = "scheduled";
  record.pauseReason = null;
  record.completedAt = null;
}

function schedule(record, now, days) {
  record.nextReviewAt = addDays(now, days);
  activate(record);
}

function updatePriority(record, now, minimum = null) {
  const calculated = calculatePriority(record, now);
  record.priorityScore = calculated.score;
  record.priority = minimum ? minPriority(calculated.priority, minimum) : calculated.priority;
}

export function applyReinforcementEvent(records, event, now = new Date()) {
  validateEvent(event);
  const next = clone(records || {});
  const key = recordKey(event.reference);
  let record = next[key];
  if (record?.processedEventIds?.includes(event.id)) return { records: next, record, changed: false, duplicate: true };
  if (!record) record = emptyRecord(event.reference, now);
  const wasDefective = record.flaggedAsDefective || record.status === "defective";
  if (record.isDemo !== event.reference.isDemo) throw new Error("El evento no coincide con el almacén de demostración.");
  if (!Array.isArray(record.history)) record.history = [];
  if (!Array.isArray(record.processedEventIds)) record.processedEventIds = [];

  if (event.type === "response") {
    record.attempts += 1;
    record.lastResult = event.result;
    record.lastAttemptAt = asDate(event.occurredAt || now).toISOString();
    if (event.result === "correct") {
      record.correctAnswers += 1;
      record.consecutiveErrors = 0;
    } else {
      record.incorrectAnswers += 1;
      record.consecutiveErrors += 1;
      record.knownStreak = 0;
      record.intervalLevel = 0;
      schedule(record, now, INTERVAL_DAYS[0]);
    }
  } else if (event.type === "assessment") {
    if (event.assessment === "known") {
      record.knownCount += 1;
      if (record.lastResult === "correct") {
        record.consecutiveErrors = 0;
        record.knownStreak += 1;
        if (record.intervalLevel >= 5) {
          record.status = "completed";
          record.completedAt = asDate(now).toISOString();
          record.nextReviewAt = null;
        } else {
          record.intervalLevel += 1;
          schedule(record, now, INTERVAL_DAYS[record.intervalLevel]);
        }
      }
    } else if (event.assessment === "doubt") {
      record.doubtCount += 1;
      record.knownStreak = 0;
      if (record.intervalLevel > 1) record.intervalLevel -= 1;
      const days = Math.min(INTERVAL_DAYS[record.intervalLevel], 3);
      schedule(record, now, days);
    } else {
      record.unknownCount += 1;
      record.knownStreak = 0;
      record.intervalLevel = 0;
      schedule(record, now, INTERVAL_DAYS[0]);
    }
  } else if (event.type === "manual") {
    record.nextReviewAt = asDate(now).toISOString();
    activate(record);
  } else if (event.type === "defective") {
    record.flaggedAsDefective = true;
    record.status = "defective";
    record.completedAt = null;
  } else if (event.type === "restore") {
    record.flaggedAsDefective = false;
    record.status = "scheduled";
    record.pauseReason = null;
    record.completedAt = null;
    if (!record.nextReviewAt) record.nextReviewAt = asDate(now).toISOString();
  } else if (event.type === "retire") {
    record.status = "paused";
    record.pauseReason = "removed_by_user";
  }

  if (wasDefective && event.type !== "restore") {
    record.flaggedAsDefective = true;
    record.status = "defective";
    record.completedAt = null;
  }

  let minimum = null;
  if (event.type === "response" && event.result === "incorrect") minimum = "high";
  if (event.type === "assessment" && event.assessment === "doubt") minimum = "medium";
  if (event.type === "assessment" && event.assessment === "unknown") minimum = record.unknownCount >= 2 ? "critical" : "high";
  if (event.type === "manual") minimum = "medium";
  updatePriority(record, now, minimum);
  appendEvent(record, event, now);
  next[key] = record;
  return { records: next, record, changed: true, duplicate: false };
}

export function applyReinforcementEvents(records, events, now = new Date()) {
  let next = clone(records || {});
  const results = [];
  for (const event of events) {
    const result = applyReinforcementEvent(next, event, now);
    next = result.records;
    results.push(result);
  }
  return { records: next, results };
}

export function selectReinforcementQuestions(records, questions, config, now = new Date(), random = Math.random) {
  const byKey = new Map(questions.map((question) => [recordKey(createQuestionReference(question)), question]));
  const selected = [];
  const incidents = [];
  for (const record of Object.values(records || {})) {
    const question = byKey.get(recordKey(record));
    if (!question || !question.is_active) {
      incidents.push({ record, reason: !question ? "missing" : "inactive" });
      continue;
    }
    const temporal = getTemporalState(record, now);
    if (record.status !== "scheduled" || record.flaggedAsDefective) continue;
    if (config.blockId && record.blockId !== config.blockId) continue;
    if (config.topicId && record.topicId !== config.topicId) continue;
    if (config.origin && record.origin !== config.origin) continue;
    if (config.priority && record.priority !== config.priority) continue;
    if (config.onlyDue && !temporal.isDue) continue;
    if (!config.includeFuture && !temporal.isDue) continue;
    selected.push({ question, record, temporal });
  }
  if (config.order === "random") {
    for (let index = selected.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [selected[index], selected[swap]] = [selected[swap], selected[index]];
    }
  } else {
    selected.sort((left, right) => priorityRank(right.record.priority) - priorityRank(left.record.priority)
      || String(left.record.nextReviewAt || "").localeCompare(String(right.record.nextReviewAt || ""))
      || left.record.questionId.localeCompare(right.record.questionId));
  }
  return { selected, incidents };
}
