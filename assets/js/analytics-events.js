function timestamp(value) {
  const date = value instanceof Date ? value : new Date(value || Date.now());
  return Number.isFinite(date.getTime()) ? date.toISOString() : new Date().toISOString();
}
function finiteOrNull(value) {
  return Number.isFinite(value) && value >= 0 ? value : null;
}

export function createAnalyticsAttemptEvent(id, question, fields = {}) {
  const blank = fields.blank === true;
  const correct = blank ? null : Boolean(fields.correct);
  return {
    id,
    type: "attempt.recorded",
    isDemo: Boolean(question.isDemo),
    attempt: {
      eventId: id,
      sessionId: fields.sessionId ?? null,
      sessionType: fields.sessionType || "training",
      questionId: question.id,
      collection: question.collection || question.origin,
      origin: question.origin,
      blockId: question.block_id,
      topicId: question.topic_id,
      isDemo: Boolean(question.isDemo),
      selectedOption: blank ? null : (fields.selectedOption ?? null),
      correct,
      blank,
      doubted: Boolean(fields.doubted),
      addedToReinforcement: Boolean(fields.addedToReinforcement),
      answeredAt: timestamp(fields.answeredAt),
      durationSeconds: finiteOrNull(fields.durationSeconds),
      penaltyApplied: Number.isFinite(fields.penaltyApplied) ? fields.penaltyApplied : null,
      netContribution: Number.isFinite(fields.netContribution) ? fields.netContribution : null,
    },
  };
}

export function createAnalyticsAnnotationEvent(id, isDemo, targetEventId, changes = {}) {
  return {
    id,
    type: "attempt.annotated",
    isDemo: Boolean(isDemo),
    targetEventId,
    changes: {
      doubted: changes.doubted === true,
      addedToReinforcement: changes.addedToReinforcement === true,
    },
  };
}

export function createAnalyticsSessionEvent(id, session) {
  return {
    id,
    sessionId: session.sessionId,
    type: "session.completed",
    isDemo: Boolean(session.isDemo),
    session,
  };
}

export function createAnalyticsSession({
  sessionId,
  sessionType,
  isDemo,
  startedAt,
  finishedAt,
  configuredQuestions,
  attempts,
  penalty = null,
  timedOut = false,
}) {
  const records = attempts || [];
  const correctAnswers = records.filter((attempt) => attempt.correct === true).length;
  const incorrectAnswers = records.filter((attempt) => attempt.correct === false && !attempt.blank).length;
  const blankAnswers = records.filter((attempt) => attempt.blank).length;
  const answeredQuestions = correctAnswers + incorrectAnswers;
  const configured = Number(configuredQuestions);
  const validConfigured = Number.isInteger(configured) && configured >= 0 ? configured : records.length;
  const grossPercentage = validConfigured > 0 ? correctAnswers / validConfigured * 100 : null;
  const responseAccuracy = answeredQuestions > 0 ? correctAnswers / answeredQuestions * 100 : null;
  const netScore = Number.isFinite(penalty) ? correctAnswers - incorrectAnswers * penalty : null;
  const netPercentage = netScore !== null && validConfigured > 0 ? netScore / validConfigured * 100 : null;
  const start = new Date(startedAt);
  const finish = new Date(finishedAt);
  const durationSeconds = Number.isFinite(start.getTime()) && Number.isFinite(finish.getTime())
    ? Math.max(0, (finish.getTime() - start.getTime()) / 1000)
    : null;
  return {
    sessionId,
    sessionType,
    isDemo: Boolean(isDemo),
    startedAt: timestamp(startedAt),
    finishedAt: timestamp(finishedAt),
    durationSeconds,
    configuredQuestions: validConfigured,
    answeredQuestions,
    correctAnswers,
    incorrectAnswers,
    blankAnswers,
    grossPercentage,
    responseAccuracy,
    penalty: Number.isFinite(penalty) ? penalty : null,
    netScore,
    netPercentage,
    blockIds: [...new Set(records.map((attempt) => attempt.blockId).filter(Boolean))],
    origins: [...new Set(records.map((attempt) => attempt.origin).filter(Boolean))],
    questionIds: records.map((attempt) => attempt.questionId),
    timedOut: Boolean(timedOut),
  };
}
