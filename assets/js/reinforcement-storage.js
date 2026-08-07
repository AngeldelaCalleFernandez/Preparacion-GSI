import {
  applyReinforcementEvent,
  applyReinforcementEvents,
  createQuestionReference,
  getTemporalState,
} from "./reinforcement-engine.js";
import { getConfiguredPersistenceAdapter } from "./persistence-v2.js?m3";

export const REINFORCEMENT_REAL_KEY = "tai.reinforcement.real.v1";
export const REINFORCEMENT_DEMO_KEY = "tai.reinforcement.demo.v1";
const VERSION = 1;

function browserStorage() {
  return getConfiguredPersistenceAdapter();
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function defaultStore(isDemo) {
  return {
    version: VERSION,
    isDemo: Boolean(isDemo),
    migration: { phase3TrainingVersion: 0, completedAt: null, imported: 0, ignored: 0 },
    records: {},
    activeSession: null,
  };
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isQuotaError(error) {
  return error?.name === "QuotaExceededError" || error?.code === 22 || error?.code === 1014;
}

export function getReinforcementStorageKey(isDemo) {
  return isDemo ? REINFORCEMENT_DEMO_KEY : REINFORCEMENT_REAL_KEY;
}

export function validateReinforcementStore(value, isDemo) {
  if (!isPlainObject(value) || value.version !== VERSION || value.isDemo !== Boolean(isDemo) || !isPlainObject(value.records)) {
    return { valid: false, store: defaultStore(isDemo), error: "El almacén de refuerzo no tiene una estructura compatible." };
  }
  const store = { ...defaultStore(isDemo), ...value };
  store.records = Object.fromEntries(Object.entries(value.records).filter(([, record]) => isPlainObject(record)
    && typeof record.questionId === "string" && record.isDemo === Boolean(isDemo)));
  store.migration = { ...defaultStore(isDemo).migration, ...(isPlainObject(value.migration) ? value.migration : {}) };
  return { valid: true, store: clone(store) };
}

export function loadReinforcementStore(isDemo, storage = browserStorage()) {
  try {
    const raw = storage.getItem(getReinforcementStorageKey(isDemo));
    if (!raw) return { valid: true, store: defaultStore(isDemo), error: null };
    return validateReinforcementStore(JSON.parse(raw), isDemo);
  } catch {
    return { valid: false, store: defaultStore(isDemo), error: "No se pudo leer el almacenamiento de refuerzo." };
  }
}

export function saveReinforcementStore(isDemo, store, storage = browserStorage()) {
  const checked = validateReinforcementStore(store, isDemo);
  if (!checked.valid) return { saved: false, store: checked.store, error: checked.error };
  try {
    storage.setItem(getReinforcementStorageKey(isDemo), JSON.stringify(checked.store));
    return { saved: true, store: checked.store, error: null };
  } catch (error) {
    return {
      saved: false,
      store: checked.store,
      error: isQuotaError(error) ? "No hay espacio local suficiente para guardar el refuerzo." : "No se pudo guardar el refuerzo en este navegador.",
    };
  }
}

export function applyStoredReinforcementEvents(isDemo, events, now = new Date(), storage = browserStorage()) {
  if (!events.every((event) => event.reference?.isDemo === Boolean(isDemo))) {
    return { saved: false, error: "El evento no corresponde al almacén de refuerzo seleccionado." };
  }
  const loaded = loadReinforcementStore(isDemo, storage);
  const applied = applyReinforcementEvents(loaded.store.records, events, now);
  const next = { ...loaded.store, records: applied.records };
  const saved = saveReinforcementStore(isDemo, next, storage);
  return { ...saved, results: applied.results };
}

export function applyStoredReinforcementEvent(isDemo, event, now = new Date(), storage = browserStorage()) {
  return applyStoredReinforcementEvents(isDemo, [event], now, storage);
}

export function saveReinforcementSession(isDemo, session, storage = browserStorage()) {
  const loaded = loadReinforcementStore(isDemo, storage);
  return saveReinforcementStore(isDemo, { ...loaded.store, activeSession: clone(session) }, storage);
}

export function clearReinforcementSession(isDemo, storage = browserStorage()) {
  const loaded = loadReinforcementStore(isDemo, storage);
  return saveReinforcementStore(isDemo, { ...loaded.store, activeSession: null }, storage);
}

export function clearDemoReinforcement(storage = browserStorage()) {
  try {
    storage.removeItem(REINFORCEMENT_DEMO_KEY);
    return true;
  } catch {
    return false;
  }
}

export function clearAllReinforcement(storage = browserStorage()) {
  try {
    storage.removeItem(REINFORCEMENT_REAL_KEY);
    storage.removeItem(REINFORCEMENT_DEMO_KEY);
    return true;
  } catch {
    return false;
  }
}

export function createReinforcementEvent(id, type, question, extra = {}) {
  return {
    id,
    type,
    reference: createQuestionReference(question),
    occurredAt: new Date().toISOString(),
    ...extra,
  };
}

export function getReinforcementSummary(isDemo, now = new Date(), storage = browserStorage()) {
  const loaded = loadReinforcementStore(isDemo, storage);
  const summary = { total: 0, due: 0, overdue: 0, future: 0, completed: 0, defective: 0, paused: 0 };
  for (const record of Object.values(loaded.store.records)) {
    summary.total += 1;
    if (record.status === "completed") summary.completed += 1;
    if (record.status === "defective") summary.defective += 1;
    if (record.status === "paused") summary.paused += 1;
    const temporal = getTemporalState(record, now);
    if (temporal.timeState === "overdue") {
      summary.overdue += 1;
      summary.due += 1;
    } else if (temporal.timeState === "due") {
      summary.due += 1;
    } else if (temporal.timeState === "future") {
      summary.future += 1;
    }
  }
  return { ...summary, store: loaded.store, valid: loaded.valid, error: loaded.error };
}

export function createReinforcementSession(isDemo, entries, config) {
  const id = globalThis.crypto?.randomUUID?.() ?? `REF-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return {
    sessionId: id,
    isDemo: Boolean(isDemo),
    config: clone(config),
    questionRefs: entries.map(({ question }) => createQuestionReference(question)),
    currentIndex: 0,
    responsesByQuestionId: {},
    questionStartedAtByQuestionId: {},
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function getRecordForQuestion(isDemo, question, storage = browserStorage()) {
  const loaded = loadReinforcementStore(isDemo, storage);
  const reference = createQuestionReference(question);
  return loaded.store.records[`${reference.collection}:${reference.questionId}`] || null;
}

export function applyRecordEventInMemory(records, event, now) {
  return applyReinforcementEvent(records, event, now);
}
