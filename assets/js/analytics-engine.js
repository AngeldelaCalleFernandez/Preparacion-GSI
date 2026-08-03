export const ANALYTICS_VERSION = 1;
export const LIMITS = Object.freeze({
  sessions: 1000,
  attempts: 10000,
  processedEvents: 2000,
  dailyBuckets: 1825,
  monthlyBuckets: 240,
});

const DIM_SEPARATOR = "\u001f";
const DEFAULT_METRIC = Object.freeze({
  total: 0,
  answered: 0,
  correct: 0,
  incorrect: 0,
  blank: 0,
  doubts: 0,
  addedToReinforcement: 0,
  durationSeconds: 0,
  durationCount: 0,
  netSum: 0,
  netCount: 0,
  lastActivityAt: null,
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function isValidIso(value) {
  return typeof value === "string" && Number.isFinite(Date.parse(value));
}

function isoNow(now = new Date()) {
  const value = now instanceof Date ? now : new Date(now);
  return Number.isFinite(value.getTime()) ? value.toISOString() : new Date().toISOString();
}

function dateKey(value) {
  return isValidIso(value) ? new Date(value).toISOString().slice(0, 10) : null;
}

function monthKey(value) {
  return isValidIso(value) ? new Date(value).toISOString().slice(0, 7) : null;
}

function tuple(value, id) {
  return [String(value || ""), String(id || "")];
}

function compareTuple(left, right) {
  const first = left[0].localeCompare(right[0]);
  return first || left[1].localeCompare(right[1]);
}

function emptyMetric() {
  return { ...DEFAULT_METRIC };
}

function emptyBundle() {
  return { metric: emptyMetric(), dimensions: {}, questions: {} };
}

function addMetric(target, source) {
  for (const key of Object.keys(DEFAULT_METRIC)) {
    if (key === "lastActivityAt") continue;
    target[key] += Number(source?.[key] || 0);
  }
  if (source?.lastActivityAt && (!target.lastActivityAt || target.lastActivityAt < source.lastActivityAt)) target.lastActivityAt = source.lastActivityAt;
  return target;
}

function addAttemptMetric(target, attempt) {
  target.total += 1;
  if (attempt.blank) target.blank += 1;
  else if (attempt.correct === true) {
    target.correct += 1;
    target.answered += 1;
  } else if (attempt.correct === false) {
    target.incorrect += 1;
    target.answered += 1;
  }
  if (attempt.doubted) target.doubts += 1;
  if (attempt.addedToReinforcement) target.addedToReinforcement += 1;
  if (Number.isFinite(attempt.durationSeconds) && attempt.durationSeconds >= 0) {
    target.durationSeconds += attempt.durationSeconds;
    target.durationCount += 1;
  }
  if (Number.isFinite(attempt.netContribution)) {
    target.netSum += attempt.netContribution;
    target.netCount += 1;
  }
  if (isValidIso(attempt.answeredAt) && (!target.lastActivityAt || target.lastActivityAt < attempt.answeredAt)) target.lastActivityAt = attempt.answeredAt;
  return target;
}

function dimensionsKey(item) {
  return [item.blockId || "", item.topicId || "", item.origin || "", item.sessionType || ""].join(DIM_SEPARATOR);
}

function questionKey(item) {
  return [item.collection || item.origin || "", item.questionId || ""].join(DIM_SEPARATOR);
}

function addQuestionAggregate(target, attempt) {
  const key = questionKey(attempt);
  if (!target[key]) {
    target[key] = {
      questionId: attempt.questionId,
      collection: attempt.collection,
      origin: attempt.origin,
      blockId: attempt.blockId,
      topicId: attempt.topicId,
      isDemo: Boolean(attempt.isDemo),
      attempts: 0,
      correct: 0,
      incorrect: 0,
      blank: 0,
      doubts: 0,
      lastErrorAt: null,
      lastActivityAt: null,
    };
  }
  const question = target[key];
  question.attempts += 1;
  if (attempt.blank) question.blank += 1;
  if (attempt.correct === true) question.correct += 1;
  if (attempt.correct === false) {
    question.incorrect += 1;
    if (!question.lastErrorAt || question.lastErrorAt < attempt.answeredAt) question.lastErrorAt = attempt.answeredAt;
  }
  if (attempt.doubted) question.doubts += 1;
  if (!question.lastActivityAt || question.lastActivityAt < attempt.answeredAt) question.lastActivityAt = attempt.answeredAt;
}

function addAttemptToBundle(bundle, attempt) {
  addAttemptMetric(bundle.metric, attempt);
  const key = dimensionsKey(attempt);
  if (!bundle.dimensions[key]) {
    bundle.dimensions[key] = {
      blockId: attempt.blockId || "",
      topicId: attempt.topicId || "",
      origin: attempt.origin || "",
      sessionType: attempt.sessionType || "",
      metric: emptyMetric(),
    };
  }
  addAttemptMetric(bundle.dimensions[key].metric, attempt);
  addQuestionAggregate(bundle.questions, attempt);
}

function mergeQuestionAggregate(target, incoming) {
  const key = questionKey(incoming);
  if (!target[key]) target[key] = clone(incoming);
  else {
    const current = target[key];
    current.attempts += Number(incoming.attempts || 0);
    current.correct += Number(incoming.correct || 0);
    current.incorrect += Number(incoming.incorrect || 0);
    current.blank += Number(incoming.blank || 0);
    current.doubts += Number(incoming.doubts || 0);
    if (!current.lastErrorAt || current.lastErrorAt < incoming.lastErrorAt) current.lastErrorAt = incoming.lastErrorAt;
    if (!current.lastActivityAt || current.lastActivityAt < incoming.lastActivityAt) current.lastActivityAt = incoming.lastActivityAt;
  }
}

function mergeBundle(target, incoming) {
  addMetric(target.metric, incoming?.metric);
  for (const [key, dimension] of Object.entries(incoming?.dimensions || {})) {
    if (!target.dimensions[key]) target.dimensions[key] = {
      blockId: dimension.blockId,
      topicId: dimension.topicId,
      origin: dimension.origin,
      sessionType: dimension.sessionType,
      metric: emptyMetric(),
    };
    addMetric(target.dimensions[key].metric, dimension.metric);
  }
  for (const incomingQuestion of Object.values(incoming?.questions || {})) mergeQuestionAggregate(target.questions, incomingQuestion);
  return target;
}

export function finalizeMetric(metric) {
  const answered = Number(metric?.answered || 0);
  const total = Number(metric?.total || 0);
  return {
    ...emptyMetric(),
    ...metric,
    responseAccuracy: answered > 0 ? metric.correct / answered * 100 : null,
    grossPercentage: total > 0 ? metric.correct / total * 100 : null,
    averageDuration: metric.durationCount > 0 ? metric.durationSeconds / metric.durationCount : null,
    netScore: metric.netCount > 0 ? metric.netSum : null,
  };
}

function fnv64(value, offset) {
  let hash = BigInt(offset);
  const prime = BigInt("1099511628211");
  const mask = BigInt("0xffffffffffffffff");
  for (const character of String(value)) {
    hash ^= BigInt(character.codePointAt(0));
    hash = (hash * prime) & mask;
  }
  return hash.toString(16).padStart(16, "0");
}

export function archiveFingerprint(kind, id) {
  const canonical = `${kind}:${id}`;
  return `${fnv64(canonical, "14695981039346656037")}:${fnv64(canonical, "1099511628211")}`;
}

export function createAnalyticsStore(isDemo, now = new Date()) {
  const timestamp = isoNow(now);
  return {
    version: ANALYTICS_VERSION,
    isDemo: Boolean(isDemo),
    createdAt: timestamp,
    updatedAt: timestamp,
    migrations: {
      phase3Training: { version: 1, lastResponseId: null, scannedRecords: 0, imported: 0, ignored: 0, completedAt: null },
      phase5Reinforcement: { version: 1, cursorsByQuestion: {}, imported: 0, ignored: 0, gaps: 0, completedAt: null },
    },
    activeTrainingSession: null,
    sessions: [],
    attempts: [],
    processedEventIds: [],
    archive: {
      attemptBuckets: [],
      sessionBuckets: [],
      eventFingerprints: {},
      sessionFingerprints: {},
      temporalPrecisionLimitedBefore: null,
    },
    diagnostics: { corruptRecords: 0, ignoredRecords: 0, abandonedTrainingSessions: 0 },
    settings: {},
  };
}

export function normaliseAnalyticsStore(value, isDemo, now = new Date()) {
  const fallback = createAnalyticsStore(isDemo, now);
  if (!isPlainObject(value) || value.version !== ANALYTICS_VERSION || value.isDemo !== Boolean(isDemo)) {
    return { valid: false, store: fallback, error: "El almacén de estadísticas no tiene una estructura compatible." };
  }
  const store = { ...fallback, ...clone(value) };
  store.migrations = { ...fallback.migrations, ...(isPlainObject(value.migrations) ? value.migrations : {}) };
  store.migrations.phase3Training = { ...fallback.migrations.phase3Training, ...(isPlainObject(value.migrations?.phase3Training) ? value.migrations.phase3Training : {}) };
  store.migrations.phase5Reinforcement = { ...fallback.migrations.phase5Reinforcement, ...(isPlainObject(value.migrations?.phase5Reinforcement) ? value.migrations.phase5Reinforcement : {}) };
  store.sessions = Array.isArray(value.sessions) ? value.sessions.filter((item) => validSession(item, isDemo)) : [];
  store.attempts = Array.isArray(value.attempts) ? value.attempts.filter((item) => validAttempt(item, isDemo)) : [];
  store.processedEventIds = Array.isArray(value.processedEventIds) ? value.processedEventIds.filter((id) => typeof id === "string").slice(-LIMITS.processedEvents) : [];
  store.archive = {
    ...fallback.archive,
    ...(isPlainObject(value.archive) ? value.archive : {}),
    attemptBuckets: Array.isArray(value.archive?.attemptBuckets) ? value.archive.attemptBuckets.filter(validBucket) : [],
    sessionBuckets: Array.isArray(value.archive?.sessionBuckets) ? value.archive.sessionBuckets.filter(validBucket) : [],
    eventFingerprints: isPlainObject(value.archive?.eventFingerprints) ? value.archive.eventFingerprints : {},
    sessionFingerprints: isPlainObject(value.archive?.sessionFingerprints) ? value.archive.sessionFingerprints : {},
  };
  store.diagnostics = { ...fallback.diagnostics, ...(isPlainObject(value.diagnostics) ? value.diagnostics : {}) };
  store.settings = isPlainObject(value.settings) ? value.settings : {};
  if (!isPlainObject(store.activeTrainingSession) || store.activeTrainingSession?.isDemo !== Boolean(isDemo)) store.activeTrainingSession = null;
  return { valid: true, store };
}

function validAttempt(value, isDemo) {
  return isPlainObject(value)
    && typeof value.eventId === "string"
    && typeof value.questionId === "string"
    && typeof value.isDemo === "boolean"
    && value.isDemo === Boolean(isDemo)
    && isValidIso(value.answeredAt)
    && typeof value.blank === "boolean"
    && (value.blank || typeof value.correct === "boolean");
}

function validSession(value, isDemo) {
  return isPlainObject(value)
    && typeof value.sessionId === "string"
    && ["training", "exam", "reinforcement"].includes(value.sessionType)
    && value.isDemo === Boolean(isDemo)
    && isValidIso(value.startedAt)
    && isValidIso(value.finishedAt);
}

function validBucket(value) {
  return isPlainObject(value)
    && typeof value.id === "string"
    && ["attempt", "session"].includes(value.kind)
    && isValidIso(value.from)
    && isValidIso(value.to)
    && isPlainObject(value.aggregate);
}

function eventIsDuplicate(store, event) {
  if (store.processedEventIds.includes(event.id)) return true;
  if (event.type === "attempt.recorded") {
    if (store.attempts.some((attempt) => attempt.eventId === event.attempt.eventId)) return true;
    return Boolean(store.archive.eventFingerprints[archiveFingerprint("attempt", event.attempt.eventId)]);
  }
  if (event.type === "session.completed") {
    if (store.sessions.some((session) => session.sessionId === event.session.sessionId)) return true;
    return Boolean(store.archive.sessionFingerprints[archiveFingerprint("session", event.session.sessionId)]);
  }
  return false;
}

function recordProcessed(store, id) {
  if (!store.processedEventIds.includes(id)) store.processedEventIds = [...store.processedEventIds, id].slice(-LIMITS.processedEvents);
}

function validateEvent(event, isDemo) {
  if (!isPlainObject(event) || typeof event.id !== "string" || !event.id || event.isDemo !== Boolean(isDemo)) {
    throw new Error("El evento de estadísticas no es válido o pertenece a otro almacén.");
  }
  if (!["attempt.recorded", "attempt.annotated", "session.completed"].includes(event.type)) {
    throw new Error("El tipo de evento de estadísticas no es compatible.");
  }
  if (event.type === "attempt.recorded" && (!validAttempt(event.attempt, isDemo) || event.attempt.eventId !== event.id)) {
    throw new Error("El intento analítico no tiene una estructura válida.");
  }
  if (event.type === "session.completed" && (!validSession(event.session, isDemo) || event.session.sessionId !== event.sessionId)) {
    throw new Error("La sesión analítica no tiene una estructura válida.");
  }
  if (event.type === "attempt.annotated" && (typeof event.targetEventId !== "string" || !isPlainObject(event.changes))) {
    throw new Error("La anotación analítica no tiene un destino válido.");
  }
}

function makeBucket(kind, records) {
  const ordered = [...records].sort((left, right) => compareTuple(
    tuple(kind === "attempt" ? left.answeredAt : left.finishedAt, kind === "attempt" ? left.eventId : left.sessionId),
    tuple(kind === "attempt" ? right.answeredAt : right.finishedAt, kind === "attempt" ? right.eventId : right.sessionId),
  ));
  const first = ordered[0];
  const last = ordered.at(-1);
  const key = dateKey(kind === "attempt" ? first.answeredAt : first.finishedAt);
  const from = `${key}T00:00:00.000Z`;
  const to = `${key}T23:59:59.999Z`;
  const aggregate = kind === "attempt" ? bundleForAttempts(ordered) : sessionAggregate(ordered);
  return {
    id: `${kind}:${key}`,
    kind,
    from,
    to,
    count: ordered.length,
    cutoff: tuple(kind === "attempt" ? last.answeredAt : last.finishedAt, kind === "attempt" ? last.eventId : last.sessionId),
    aggregate,
    granularity: "day",
  };
}

function bundleForAttempts(attempts) {
  const bundle = emptyBundle();
  for (const attempt of attempts) addAttemptToBundle(bundle, attempt);
  return bundle;
}

function sessionAggregate(sessions) {
  const result = { count: 0, durationSeconds: 0, durationCount: 0, netPercentageSum: 0, netPercentageCount: 0, netScoreSum: 0, netScoreCount: 0, configuredQuestionCounts: {} };
  for (const session of sessions) {
    result.count += 1;
    if (Number.isFinite(session.durationSeconds) && session.durationSeconds >= 0) {
      result.durationSeconds += session.durationSeconds;
      result.durationCount += 1;
    }
    if (Number.isFinite(session.netPercentage)) {
      result.netPercentageSum += session.netPercentage;
      result.netPercentageCount += 1;
    }
    if (Number.isFinite(session.netScore)) {
      result.netScoreSum += session.netScore;
      result.netScoreCount += 1;
    }
    const count = String(session.configuredQuestions);
    result.configuredQuestionCounts[count] = (result.configuredQuestionCounts[count] || 0) + 1;
  }
  return result;
}

function mergeAttemptBuckets(existing, incoming) {
  const merged = clone(existing);
  merged.count += incoming.count;
  mergeBundle(merged.aggregate, incoming.aggregate);
  if (compareTuple(merged.cutoff, incoming.cutoff) < 0) merged.cutoff = incoming.cutoff;
  return merged;
}

function mergeSessionBuckets(existing, incoming) {
  const merged = clone(existing);
  merged.count += incoming.count;
  const keys = ["count", "durationSeconds", "durationCount", "netPercentageSum", "netPercentageCount", "netScoreSum", "netScoreCount"];
  for (const key of keys) merged.aggregate[key] = Number(merged.aggregate[key] || 0) + Number(incoming.aggregate[key] || 0);
  for (const [key, count] of Object.entries(incoming.aggregate.configuredQuestionCounts || {})) {
    merged.aggregate.configuredQuestionCounts[key] = Number(merged.aggregate.configuredQuestionCounts[key] || 0) + Number(count || 0);
  }
  if (compareTuple(merged.cutoff, incoming.cutoff) < 0) merged.cutoff = incoming.cutoff;
  return merged;
}

function compactCollection(store, kind, limit) {
  const property = kind === "attempt" ? "attempts" : "sessions";
  const dateProperty = kind === "attempt" ? "answeredAt" : "finishedAt";
  const idProperty = kind === "attempt" ? "eventId" : "sessionId";
  const ordered = [...store[property]].sort((left, right) => compareTuple(tuple(left[dateProperty], left[idProperty]), tuple(right[dateProperty], right[idProperty])));
  const buckets = kind === "attempt" ? store.archive.attemptBuckets : store.archive.sessionBuckets;
  const archiveBoundary = buckets.reduce((latest, bucket) => (!latest || latest < bucket.to ? bucket.to : latest), null);
  const forcedArchived = archiveBoundary
    ? ordered.filter((item) => item[dateProperty] <= archiveBoundary).length
    : 0;
  const moveCount = Math.max(0, ordered.length - limit, forcedArchived);
  if (moveCount === 0) return false;
  const moved = ordered.slice(0, moveCount);
  const keptIds = new Set(ordered.slice(moveCount).map((item) => item[idProperty]));
  store[property] = store[property].filter((item) => keptIds.has(item[idProperty]));
  const groups = new Map();
  for (const item of moved) {
    const key = dateKey(item[dateProperty]);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
    const fingerprint = archiveFingerprint(kind, item[idProperty]);
    const target = kind === "attempt" ? store.archive.eventFingerprints : store.archive.sessionFingerprints;
    target[fingerprint] = `${kind}:${key}`;
  }
  for (const entries of groups.values()) {
    const bucket = makeBucket(kind, entries);
    const index = buckets.findIndex((candidate) => candidate.id === bucket.id);
    if (index === -1) buckets.push(bucket);
    else buckets[index] = kind === "attempt" ? mergeAttemptBuckets(buckets[index], bucket) : mergeSessionBuckets(buckets[index], bucket);
  }
  buckets.sort((left, right) => left.from.localeCompare(right.from));
  return true;
}

function mergeBucketRange(kind, parts) {
  const replacement = clone(parts[0]);
  for (const part of parts.slice(1)) {
    const merged = kind === "attempt"
      ? mergeAttemptBuckets(replacement, part)
      : mergeSessionBuckets(replacement, part);
    replacement.count = merged.count;
    replacement.aggregate = merged.aggregate;
    replacement.cutoff = merged.cutoff;
    replacement.from = [replacement.from, part.from].sort()[0];
    replacement.to = [replacement.to, part.to].sort().at(-1);
  }
  return replacement;
}

function compressDailyBuckets(buckets, limit, monthlyLimit, store) {
  if (buckets.length <= limit) return;
  const overflow = buckets.length - limit;
  const moving = buckets.splice(0, overflow);
  const groups = new Map();
  for (const bucket of moving) {
    const key = bucket.from.slice(0, 7);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(bucket);
  }
  for (const [month, parts] of groups) {
    const replacement = mergeBucketRange(parts[0].kind, parts);
    replacement.id = `${replacement.kind}:month:${month}`;
    replacement.from = parts.map((item) => item.from).sort()[0];
    replacement.to = parts.map((item) => item.to).sort().at(-1);
    replacement.granularity = "month";
    const previousIndex = buckets.findIndex((candidate) => candidate.id === replacement.id);
    if (previousIndex === -1) buckets.push(replacement);
    else {
      const merged = replacement.kind === "attempt"
        ? mergeAttemptBuckets(buckets[previousIndex], replacement)
        : mergeSessionBuckets(buckets[previousIndex], replacement);
      merged.from = [buckets[previousIndex].from, replacement.from].sort()[0];
      merged.to = [buckets[previousIndex].to, replacement.to].sort().at(-1);
      merged.granularity = "month";
      buckets[previousIndex] = merged;
    }
  }
  buckets.sort((left, right) => left.from.localeCompare(right.from));
  const monthly = buckets.filter((bucket) => bucket.granularity === "month").sort((left, right) => left.from.localeCompare(right.from));
  if (monthly.length > monthlyLimit) {
    const moving = monthly.slice(0, monthly.length - monthlyLimit);
    const kind = moving[0].kind;
    const replacement = mergeBucketRange(kind, moving);
    replacement.id = `${kind}:historical`;
    replacement.granularity = "historical";
    for (const bucket of moving) buckets.splice(buckets.indexOf(bucket), 1);
    const historicalIndex = buckets.findIndex((bucket) => bucket.id === replacement.id);
    if (historicalIndex === -1) buckets.push(replacement);
    else {
      const merged = mergeBucketRange(kind, [buckets[historicalIndex], replacement]);
      merged.id = replacement.id;
      merged.granularity = "historical";
      buckets[historicalIndex] = merged;
    }
    buckets.sort((left, right) => left.from.localeCompare(right.from));
    store.archive.temporalPrecisionLimitedBefore = replacement.to;
  }
}

export function compactAnalyticsStore(value, limits = LIMITS) {
  const store = clone(value);
  const attemptsChanged = compactCollection(store, "attempt", limits.attempts);
  const sessionsChanged = compactCollection(store, "session", limits.sessions);
  if (attemptsChanged) compressDailyBuckets(store.archive.attemptBuckets, limits.dailyBuckets, limits.monthlyBuckets, store);
  if (sessionsChanged) compressDailyBuckets(store.archive.sessionBuckets, limits.dailyBuckets, limits.monthlyBuckets, store);
  store.processedEventIds = store.processedEventIds.slice(-limits.processedEvents);
  return { store, changed: attemptsChanged || sessionsChanged };
}

export function applyAnalyticsEvents(value, events, now = new Date(), limits = LIMITS) {
  const normalized = normaliseAnalyticsStore(value, value?.isDemo, now);
  const store = normalized.store;
  const results = [];
  for (const event of events) {
    validateEvent(event, store.isDemo);
    if (eventIsDuplicate(store, event)) {
      results.push({ id: event.id, duplicate: true, changed: false });
      continue;
    }
    if (event.type === "attempt.recorded") {
      store.attempts.push(clone(event.attempt));
      recordProcessed(store, event.id);
      results.push({ id: event.id, duplicate: false, changed: true });
    } else if (event.type === "session.completed") {
      store.sessions.push(clone(event.session));
      recordProcessed(store, event.id);
      results.push({ id: event.id, duplicate: false, changed: true });
    } else {
      const target = store.attempts.find((attempt) => attempt.eventId === event.targetEventId);
      if (!target) {
        store.diagnostics.ignoredRecords += 1;
        recordProcessed(store, event.id);
        results.push({ id: event.id, duplicate: false, changed: false, ignored: true });
      } else {
        const beforeDoubt = Boolean(target.doubted);
        const beforeAdded = Boolean(target.addedToReinforcement);
        target.doubted = beforeDoubt || event.changes.doubted === true;
        target.addedToReinforcement = beforeAdded || event.changes.addedToReinforcement === true;
        recordProcessed(store, event.id);
        results.push({ id: event.id, duplicate: false, changed: target.doubted !== beforeDoubt || target.addedToReinforcement !== beforeAdded });
      }
    }
  }
  const compacted = compactAnalyticsStore(store, limits);
  compacted.store.updatedAt = isoNow(now);
  return { store: compacted.store, results, compacted: compacted.changed };
}

function rangeFromFilter(filter = {}) {
  const from = filter.from && isValidIso(filter.from) ? filter.from : null;
  const to = filter.to && isValidIso(filter.to) ? filter.to : null;
  return { from, to };
}

function recordMatches(record, filter, dateField) {
  if (filter.blockId && record.blockId !== filter.blockId) return false;
  if (filter.topicId && record.topicId !== filter.topicId) return false;
  if (filter.origin && record.origin !== filter.origin) return false;
  if (filter.sessionType && record.sessionType !== filter.sessionType) return false;
  const { from, to } = rangeFromFilter(filter);
  const todayEnd = new Date();
  todayEnd.setUTCHours(23, 59, 59, 999);
  if (Date.parse(record[dateField]) > todayEnd.getTime()) return false;
  if (from && record[dateField] < from) return false;
  if (to && record[dateField] > to) return false;
  return true;
}

function sessionMatches(session, filter) {
  if (!recordMatches(session, filter, "finishedAt")) return false;
  if (filter.blockId && !(session.blockIds || []).includes(filter.blockId)) return false;
  if (filter.origin && !(session.origins || []).includes(filter.origin)) return false;
  return true;
}

function dimensionMatches(dimension, filter) {
  return (!filter.blockId || dimension.blockId === filter.blockId)
    && (!filter.topicId || dimension.topicId === filter.topicId)
    && (!filter.origin || dimension.origin === filter.origin)
    && (!filter.sessionType || dimension.sessionType === filter.sessionType);
}

function bucketInRange(bucket, filter) {
  const todayEnd = new Date();
  todayEnd.setUTCHours(23, 59, 59, 999);
  if (Date.parse(bucket.to) > todayEnd.getTime()) return { include: false, limited: true };
  const { from, to } = rangeFromFilter(filter);
  if (!from && !to) return { include: true, limited: false };
  if ((!from || bucket.from >= from) && (!to || bucket.to <= to)) return { include: true, limited: false };
  const overlaps = (!from || bucket.to >= from) && (!to || bucket.from <= to);
  return { include: false, limited: overlaps && bucket.granularity !== "day" };
}

function bundleForQuery(store, filter = {}) {
  const bundle = emptyBundle();
  let precisionLimited = false;
  for (const attempt of store.attempts.filter((item) => recordMatches(item, filter, "answeredAt"))) addAttemptToBundle(bundle, attempt);
  for (const bucket of store.archive.attemptBuckets) {
    const coverage = bucketInRange(bucket, filter);
    if (!coverage.include) {
      precisionLimited ||= coverage.limited;
      continue;
    }
    const partial = emptyBundle();
    for (const dimension of Object.values(bucket.aggregate.dimensions || {})) {
      if (!dimensionMatches(dimension, filter)) continue;
      const key = [dimension.blockId, dimension.topicId, dimension.origin, dimension.sessionType].join(DIM_SEPARATOR);
      partial.dimensions[key] = clone(dimension);
      addMetric(partial.metric, dimension.metric);
    }
    for (const question of Object.values(bucket.aggregate.questions || {})) {
      if (filter.blockId && question.blockId !== filter.blockId) continue;
      if (filter.topicId && question.topicId !== filter.topicId) continue;
      if (filter.origin && question.origin !== filter.origin) continue;
      mergeQuestionAggregate(partial.questions, question);
    }
    mergeBundle(bundle, partial);
  }
  return { bundle, precisionLimited };
}

function sessionsForQuery(store, filter = {}) {
  const result = { count: 0, durationSeconds: 0, durationCount: 0, netPercentageSum: 0, netPercentageCount: 0, netScoreSum: 0, netScoreCount: 0, configuredQuestionCounts: {} };
  let precisionLimited = false;
  for (const session of store.sessions.filter((item) => sessionMatches(item, filter))) {
    const aggregate = sessionAggregate([session]);
    for (const key of Object.keys(result)) {
      if (key === "configuredQuestionCounts") continue;
      result[key] += Number(aggregate[key] || 0);
    }
    for (const [key, value] of Object.entries(aggregate.configuredQuestionCounts)) result.configuredQuestionCounts[key] = (result.configuredQuestionCounts[key] || 0) + value;
  }
  for (const bucket of store.archive.sessionBuckets) {
    const coverage = bucketInRange(bucket, filter);
    if (!coverage.include) {
      precisionLimited ||= coverage.limited;
      continue;
    }
    if (filter.blockId || filter.topicId || filter.origin || filter.sessionType) {
      precisionLimited = true;
      continue;
    }
    for (const key of Object.keys(result)) {
      if (key === "configuredQuestionCounts") continue;
      result[key] += Number(bucket.aggregate[key] || 0);
    }
    for (const [key, value] of Object.entries(bucket.aggregate.configuredQuestionCounts || {})) result.configuredQuestionCounts[key] = (result.configuredQuestionCounts[key] || 0) + value;
  }
  return { aggregate: result, precisionLimited };
}

function groupsFromBundle(bundle, field) {
  const groups = new Map();
  for (const dimension of Object.values(bundle.dimensions)) {
    const id = dimension[field];
    if (!id) continue;
    if (!groups.has(id)) groups.set(id, emptyMetric());
    addMetric(groups.get(id), dimension.metric);
  }
  return [...groups.entries()].map(([id, metric]) => ({ id, ...finalizeMetric(metric) })).sort((left, right) => left.id.localeCompare(right.id));
}

export function getPeriodRange(period, now = new Date(), custom = {}) {
  const end = new Date(now);
  end.setUTCHours(23, 59, 59, 999);
  if (period === "all") return { from: null, to: end.toISOString() };
  if (period === "custom") {
    const from = custom.from ? `${custom.from}T00:00:00.000Z` : null;
    const to = custom.to ? `${custom.to}T23:59:59.999Z` : null;
    return { from: isValidIso(from) ? from : null, to: isValidIso(to) ? to : end.toISOString() };
  }
  const days = Number(period) || 30;
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - days + 1);
  start.setUTCHours(0, 0, 0, 0);
  return { from: start.toISOString(), to: end.toISOString() };
}

export function calculateStatistics(value, filter = {}) {
  const store = normaliseAnalyticsStore(value, value?.isDemo).store;
  const attempts = bundleForQuery(store, filter);
  const sessions = sessionsForQuery(store, filter);
  const metric = finalizeMetric(attempts.bundle.metric);
  const sessionAggregate = sessions.aggregate;
  const configuredSizes = Object.keys(sessionAggregate.configuredQuestionCounts);
  return {
    metric,
    sessions: {
      count: sessionAggregate.count,
      totalDurationSeconds: sessionAggregate.durationSeconds,
      averageNetPercentage: sessionAggregate.netPercentageCount > 0 ? sessionAggregate.netPercentageSum / sessionAggregate.netPercentageCount : null,
      averageNetScore: sessionAggregate.netScoreCount > 0 && configuredSizes.length === 1 ? sessionAggregate.netScoreSum / sessionAggregate.netScoreCount : null,
      comparableDirectNet: configuredSizes.length <= 1,
    },
    byBlock: groupsFromBundle(attempts.bundle, "blockId"),
    byTopic: groupsFromBundle(attempts.bundle, "topicId"),
    byOrigin: groupsFromBundle(attempts.bundle, "origin"),
    bySessionType: groupsFromBundle(attempts.bundle, "sessionType"),
    questions: Object.values(attempts.bundle.questions),
    precisionLimited: attempts.precisionLimited || sessions.precisionLimited,
    diagnostics: store.diagnostics,
  };
}

function weekKey(value) {
  const date = new Date(value);
  const day = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - day);
  return date.toISOString().slice(0, 10);
}

export function buildTimeline(value, filter = {}, grouping = "day") {
  const store = normaliseAnalyticsStore(value, value?.isDemo).store;
  const groups = new Map();
  const add = (key, metric) => {
    if (!groups.has(key)) groups.set(key, emptyMetric());
    addMetric(groups.get(key), metric);
  };
  for (const attempt of store.attempts) {
    if (!recordMatches(attempt, filter, "answeredAt")) continue;
    const key = grouping === "week" ? weekKey(attempt.answeredAt) : dateKey(attempt.answeredAt);
    const metric = emptyMetric();
    addAttemptMetric(metric, attempt);
    add(key, metric);
  }
  for (const bucket of store.archive.attemptBuckets) {
    const coverage = bucketInRange(bucket, filter);
    if (!coverage.include) continue;
    const key = grouping === "week" ? weekKey(bucket.from) : bucket.from.slice(0, 10);
    add(key, bucket.aggregate.metric);
  }
  return [...groups.entries()]
    .map(([period, metric]) => ({ period, ...finalizeMetric(metric) }))
    .sort((left, right) => left.period.localeCompare(right.period));
}

export function calculateWeakness(topicMetric, recentMetric, questions, overdueCount = 0) {
  const answered = Number(topicMetric?.answered || 0);
  if (answered === 0) return { status: "sin datos", score: null, explanation: "Sin intentos respondidos." };
  if (answered < 5) return { status: "muestra insuficiente", score: null, explanation: `${answered} intentos respondidos; se necesitan al menos 5.` };
  const errorRate = topicMetric.incorrect / answered;
  const doubtRate = topicMetric.doubts / answered;
  const relevantQuestions = questions.filter((item) => item.attempts > 0);
  const recurrentRate = relevantQuestions.length > 0
    ? relevantQuestions.filter((item) => item.incorrect >= 2).length / relevantQuestions.length
    : 0;
  const overdueRate = Math.min(1, overdueCount / Math.max(1, relevantQuestions.length));
  const hasRecent = Number(recentMetric?.answered || 0) > 0;
  const components = [
    [errorRate, 45],
    [doubtRate, 15],
    [recurrentRate, 15],
    [overdueRate, 10],
  ];
  if (hasRecent) components.push([recentMetric.incorrect / recentMetric.answered, 15]);
  const weightTotal = components.reduce((total, [, weight]) => total + weight, 0);
  const weighted = components.reduce((total, [value, weight]) => total + value * weight / weightTotal * 100, 0);
  const sampleFactor = Math.min(1, 0.5 + answered / 20);
  const score = Math.round(weighted * sampleFactor);
  const status = score >= 65 ? "prioritario" : score >= 45 ? "reforzar" : score >= 25 ? "vigilar" : "bien";
  return {
    status,
    score,
    errorRate,
    doubtRate,
    recurrentRate,
    overdueRate,
    hasRecent,
    explanation: `${answered} intentos, ${Math.round(errorRate * 100)} % de errores, ${topicMetric.doubts} dudas, ${relevantQuestions.filter((item) => item.incorrect >= 2).length} preguntas reincidentes y ${overdueCount} repasos vencidos.`,
  };
}

export function selectComparable(groups, direction = "best") {
  const eligible = groups.filter((group) => group.answered >= 5 && Number.isFinite(group.grossPercentage));
  if (eligible.length === 0) return null;
  return [...eligible].sort((left, right) => {
    const delta = direction === "best"
      ? right.grossPercentage - left.grossPercentage
      : left.grossPercentage - right.grossPercentage;
    return delta || left.id.localeCompare(right.id);
  })[0];
}
