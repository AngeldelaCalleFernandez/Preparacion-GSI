const STORAGE_VERSION = 1;
const REAL_SESSION_KEY = "tai.phase4.exam.active.real.v1";
const DEMO_SESSION_KEY = "tai.phase4.exam.active.demo.v1";

export function getExamStorageKey(isDemo) {
  return isDemo ? DEMO_SESSION_KEY : REAL_SESSION_KEY;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function safeRead(key) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function validateActiveExamState(state) {
  if (!isPlainObject(state)) return { valid: false, error: "El estado guardado no es un objeto válido." };
  if (state.version !== STORAGE_VERSION || state.status !== "in_progress") {
    return { valid: false, error: "La versión o estado del examen guardado no es compatible." };
  }
  if (typeof state.isDemo !== "boolean" || !isPlainObject(state.config) || !Array.isArray(state.questionRefs)) {
    return { valid: false, error: "El examen guardado no contiene la configuración requerida." };
  }
  if (!Number.isInteger(state.currentIndex) || state.currentIndex < 0 || state.currentIndex >= state.questionRefs.length) {
    return { valid: false, error: "La posición guardada del examen no es válida." };
  }
  if (!Number.isFinite(Date.parse(state.startedAt)) || !Number.isFinite(Date.parse(state.deadlineAt))) {
    return { valid: false, error: "Las fechas del examen guardado no son válidas." };
  }
  if (!isPlainObject(state.answersByQuestionId) || !isPlainObject(state.optionOrderByQuestionId) || !Array.isArray(state.flaggedQuestionIds)) {
    return { valid: false, error: "Las respuestas u opciones guardadas no son válidas." };
  }
  const ids = state.questionRefs.map((reference) => reference?.id);
  if (ids.some((id) => typeof id !== "string") || new Set(ids).size !== ids.length) {
    return { valid: false, error: "El examen guardado contiene referencias duplicadas o inválidas." };
  }
  return { valid: true, state: clone(state) };
}

export function createActiveExamState({ config, questions, optionOrderByQuestionId, isDemo }) {
  const now = new Date();
  const examId = globalThis.crypto?.randomUUID?.() ?? `EXAM-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return {
    version: STORAGE_VERSION,
    examId,
    status: "in_progress",
    isDemo: Boolean(isDemo),
    config: clone(config),
    startedAt: now.toISOString(),
    deadlineAt: new Date(now.getTime() + config.durationSeconds * 1000).toISOString(),
    savedAt: now.toISOString(),
    currentIndex: 0,
    questionRefs: questions.map((question) => ({
      id: question.id,
      collection: question.collection,
      blockId: question.block_id,
      topicId: question.topic_id,
      isDemo: Boolean(question.isDemo),
    })),
    optionOrderByQuestionId: clone(optionOrderByQuestionId),
    answersByQuestionId: {},
    flaggedQuestionIds: [],
  };
}

export function saveActiveExamState(state) {
  try {
    const next = { ...state, savedAt: new Date().toISOString() };
    window.localStorage.setItem(getExamStorageKey(next.isDemo), JSON.stringify(next));
    return { saved: true, state: next };
  } catch {
    return { saved: false, state };
  }
}

export function loadActiveExamState(isDemo) {
  const result = validateActiveExamState(safeRead(getExamStorageKey(isDemo)));
  return result.valid ? result : { valid: false, error: result.error };
}

export function clearActiveExamState(isDemo) {
  try {
    window.localStorage.removeItem(getExamStorageKey(isDemo));
    return true;
  } catch {
    return false;
  }
}
