import {
  ANALYTICS_VERSION,
  applyAnalyticsEvents,
  calculateStatistics,
  createAnalyticsStore,
  normaliseAnalyticsStore,
} from "./analytics-engine.js?gsi2";
import { getConfiguredPersistenceAdapter } from "./persistence-v2.js?gsi2";

export const ANALYTICS_REAL_KEY = "gsi.analytics.real.v1";
export const ANALYTICS_DEMO_KEY = "gsi.analytics.demo.v1";

function browserStorage() {
  return getConfiguredPersistenceAdapter();
}

function isQuotaError(error) {
  return error?.name === "QuotaExceededError" || error?.code === 22 || error?.code === 1014;
}

export function getAnalyticsStorageKey(isDemo) {
  return isDemo ? ANALYTICS_DEMO_KEY : ANALYTICS_REAL_KEY;
}

export function loadAnalyticsStore(isDemo, storage = browserStorage()) {
  try {
    const raw = storage.getItem(getAnalyticsStorageKey(isDemo));
    if (!raw) return { valid: true, store: createAnalyticsStore(isDemo), error: null };
    const result = normaliseAnalyticsStore(JSON.parse(raw), isDemo);
    return result.valid ? { valid: true, store: result.store, error: null } : result;
  } catch {
    return {
      valid: false,
      store: createAnalyticsStore(isDemo),
      error: "No se pudo leer el almacenamiento de estadísticas.",
    };
  }
}

export function saveAnalyticsStore(isDemo, value, storage = browserStorage()) {
  const result = normaliseAnalyticsStore(value, isDemo);
  if (!result.valid) return { saved: false, store: result.store, error: result.error };
  try {
    storage.setItem(getAnalyticsStorageKey(isDemo), JSON.stringify(result.store));
    return { saved: true, store: result.store, error: null };
  } catch (error) {
    return {
      saved: false,
      store: result.store,
      error: isQuotaError(error)
        ? "No hay espacio local suficiente para guardar las estadísticas."
        : "No se pudieron guardar las estadísticas en este navegador.",
    };
  }
}

export function applyStoredAnalyticsEvents(isDemo, events, now = new Date(), storage = browserStorage()) {
  if (!events.every((event) => event?.isDemo === Boolean(isDemo))) {
    return { saved: false, error: "El evento no corresponde al almacén de estadísticas seleccionado.", results: [] };
  }
  const loaded = loadAnalyticsStore(isDemo, storage);
  if (!loaded.valid) {
    return { saved: false, error: loaded.error || "No se pudo leer el almacenamiento de estadísticas.", results: [] };
  }
  const applied = applyAnalyticsEvents(loaded.store, events, now);
  const saved = saveAnalyticsStore(isDemo, applied.store, storage);
  return { ...saved, results: applied.results, compacted: applied.compacted, previousError: loaded.error };
}

export function saveActiveTrainingSession(isDemo, session, storage = browserStorage()) {
  const loaded = loadAnalyticsStore(isDemo, storage);
  if (!loaded.valid) return { saved: false, store: loaded.store, error: loaded.error };
  const store = { ...loaded.store, activeTrainingSession: session || null };
  return saveAnalyticsStore(isDemo, store, storage);
}

export function loadActiveTrainingSession(isDemo, storage = browserStorage()) {
  return loadAnalyticsStore(isDemo, storage).store.activeTrainingSession;
}

export function abandonActiveTrainingSession(isDemo, storage = browserStorage()) {
  const loaded = loadAnalyticsStore(isDemo, storage);
  if (!loaded.valid) return { saved: false, store: loaded.store, error: loaded.error, abandoned: false };
  if (!loaded.store.activeTrainingSession) return { saved: true, store: loaded.store, abandoned: false };
  const diagnostics = {
    ...loaded.store.diagnostics,
    abandonedTrainingSessions: Number(loaded.store.diagnostics?.abandonedTrainingSessions || 0) + 1,
  };
  return {
    ...saveAnalyticsStore(isDemo, { ...loaded.store, activeTrainingSession: null, diagnostics }, storage),
    abandoned: true,
  };
}

export function clearAnalyticsStore(isDemo, storage = browserStorage()) {
  try {
    storage.removeItem(getAnalyticsStorageKey(isDemo));
    return true;
  } catch {
    return false;
  }
}

export function clearAllAnalyticsStores(storage = browserStorage()) {
  try {
    storage.removeItem(ANALYTICS_REAL_KEY);
    storage.removeItem(ANALYTICS_DEMO_KEY);
    return true;
  } catch {
    return false;
  }
}

export function getAnalyticsSummary(isDemo, filter = {}, storage = browserStorage()) {
  const loaded = loadAnalyticsStore(isDemo, storage);
  return {
    ...calculateStatistics(loaded.store, filter),
    valid: loaded.valid,
    error: loaded.error,
    version: ANALYTICS_VERSION,
    store: loaded.store,
  };
}
