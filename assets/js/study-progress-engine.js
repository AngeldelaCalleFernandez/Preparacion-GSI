export const STUDY_STATUSES = Object.freeze([
  { value: "pending", label: "Pendiente" },
  { value: "in-progress", label: "En curso" },
  { value: "seen", label: "Visto" },
  { value: "first-pass", label: "Primera vuelta" },
  { value: "needs-reinforcement", label: "Necesita refuerzo" },
  { value: "consolidated", label: "Consolidado" },
]);

export const STUDY_CHECKS = Object.freeze([
  { key: "firstPass", label: "Primera vuelta completada" },
  { key: "testCorrected", label: "Test realizado y corregido" },
  { key: "review7", label: "Repaso a los 7 días realizado" },
  { key: "review30", label: "Repaso a los 30 días realizado" },
  { key: "consolidated", label: "Tema consolidado" },
]);

const STATUS_VALUES = new Set(STUDY_STATUSES.map((item) => item.value));
const CHECK_KEYS = new Set(STUDY_CHECKS.map((item) => item.key));

function plainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validDate(value) {
  return value === null || (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(`${value}T00:00:00Z`)));
}

export function createEmptyStudyProgress() {
  return { version: 1, topics: {} };
}

export function createDefaultTopicProgress() {
  return {
    status: "pending",
    checks: Object.fromEntries(STUDY_CHECKS.map((item) => [item.key, false])),
    lastStudiedAt: null,
    nextReviewAt: null,
    notes: "",
    updatedAt: null,
  };
}

export function validateStudyProgressStore(value, allowedCodes = null) {
  if (!plainObject(value) || value.version !== 1 || !plainObject(value.topics) || Object.keys(value).some((key) => !["version", "topics"].includes(key))) return { valid: false, error: "estructura general no válida" };
  const allowed = allowedCodes ? new Set(allowedCodes) : null;
  for (const [code, record] of Object.entries(value.topics)) {
    if (allowed && !allowed.has(code)) return { valid: false, error: `tema desconocido: ${code}` };
    if (!plainObject(record) || Object.keys(record).some((key) => !["status", "checks", "lastStudiedAt", "nextReviewAt", "notes", "updatedAt"].includes(key))) return { valid: false, error: `registro no válido: ${code}` };
    if (!STATUS_VALUES.has(record.status) || !plainObject(record.checks)) return { valid: false, error: `estado o checklist no válido: ${code}` };
    if (Object.keys(record.checks).length !== CHECK_KEYS.size || Object.entries(record.checks).some(([key, checked]) => !CHECK_KEYS.has(key) || typeof checked !== "boolean")) return { valid: false, error: `casillas no válidas: ${code}` };
    if (!validDate(record.lastStudiedAt) || !validDate(record.nextReviewAt) || typeof record.notes !== "string" || record.notes.length > 5000) return { valid: false, error: `fechas o notas no válidas: ${code}` };
    if (typeof record.updatedAt !== "string" || !Number.isFinite(Date.parse(record.updatedAt))) return { valid: false, error: `fecha de actualización no válida: ${code}` };
  }
  return { valid: true, error: null };
}

export function topicProgress(store, code) {
  return store?.topics?.[code] ? structuredClone(store.topics[code]) : createDefaultTopicProgress();
}

export function isTopicConsolidated(record) {
  return record.status === "consolidated" || record.checks.consolidated === true;
}

export function isTopicWorked(record) {
  return record.status !== "pending" || Object.values(record.checks).some(Boolean) || Boolean(record.lastStudiedAt || record.nextReviewAt || record.notes.trim());
}

export function topicNeedsReview(record, today = new Date()) {
  if (isTopicConsolidated(record)) return false;
  const day = today.toISOString().slice(0, 10);
  return record.status === "needs-reinforcement" || Boolean(record.nextReviewAt && record.nextReviewAt <= day);
}

export function summarizeStudyProgress(plan, store) {
  const summary = { total: plan.topics.length, worked: 0, completed: 0, pending: 0, inProgress: 0, byBlock: {} };
  for (const block of plan.blocks) summary.byBlock[block.block_id] = { total: block.topic_count, worked: 0, completed: 0 };
  for (const topic of plan.topics) {
    const record = topicProgress(store, topic.code);
    const worked = isTopicWorked(record);
    const completed = isTopicConsolidated(record);
    if (worked) summary.worked += 1;
    if (completed) summary.completed += 1;
    if (!worked) summary.pending += 1;
    if (record.status === "in-progress") summary.inProgress += 1;
    if (worked) summary.byBlock[topic.block_id].worked += 1;
    if (completed) summary.byBlock[topic.block_id].completed += 1;
  }
  summary.percentage = summary.total ? Math.round((summary.completed / summary.total) * 100) : 0;
  return summary;
}

function planOrder(left, right) {
  const leftWeek = left.planned_weeks[0] ?? Number.POSITIVE_INFINITY;
  const rightWeek = right.planned_weeks[0] ?? Number.POSITIVE_INFINITY;
  return leftWeek - rightWeek || left.code.localeCompare(right.code, "es");
}

export function buildStudyRecommendations(plan, store, now = new Date()) {
  const candidates = plan.topics.filter((topic) => !isTopicConsolidated(topicProgress(store, topic.code)));
  const byUpdated = (left, right) => String(topicProgress(store, right.code).updatedAt || "").localeCompare(String(topicProgress(store, left.code).updatedAt || "")) || planOrder(left, right);
  const current = candidates.filter((topic) => topicProgress(store, topic.code).status === "in-progress").sort(byUpdated)[0]
    || candidates.filter((topic) => topicProgress(store, topic.code).status === "needs-reinforcement").sort(byUpdated)[0]
    || candidates.filter((topic) => isTopicWorked(topicProgress(store, topic.code))).sort(byUpdated)[0]
    || [...candidates].sort(planOrder)[0]
    || null;
  const next = candidates.filter((topic) => topic.code !== current?.code && !isTopicWorked(topicProgress(store, topic.code))).sort(planOrder).slice(0, 3);
  const reviews = candidates.filter((topic) => topicNeedsReview(topicProgress(store, topic.code), now)).sort((left, right) => {
    const a = topicProgress(store, left.code).nextReviewAt || "9999-12-31";
    const b = topicProgress(store, right.code).nextReviewAt || "9999-12-31";
    return a.localeCompare(b) || left.code.localeCompare(right.code, "es");
  });
  return { current, next, reviews };
}

export function filterStudyTopics(plan, store, filters = {}, now = new Date()) {
  const search = String(filters.search || "").trim().toLocaleLowerCase("es");
  return plan.topics.filter((topic) => {
    const record = topicProgress(store, topic.code);
    if (filters.blockId && topic.block_id !== filters.blockId) return false;
    if (filters.status && record.status !== filters.status) return false;
    if (filters.review === "due" && !topicNeedsReview(record, now)) return false;
    if (filters.review === "scheduled" && !record.nextReviewAt) return false;
    return !search || `${topic.code} ${topic.title}`.toLocaleLowerCase("es").includes(search);
  });
}
