import { getConfiguredPersistenceAdapter } from "./persistence-v2.js?gsi2";
import { createDefaultTopicProgress, createEmptyStudyProgress, validateStudyProgressStore } from "./study-progress-engine.js?gsi2";

export const STUDY_PROGRESS_KEY = "gsi.study-progress.v1";

function browserStorage() {
  return getConfiguredPersistenceAdapter();
}

export function loadStudyProgress(allowedCodes, storage = browserStorage()) {
  const raw = storage.getItem(STUDY_PROGRESS_KEY);
  if (!raw) return { store: createEmptyStudyProgress(), error: null };
  try {
    const store = JSON.parse(raw);
    const checked = validateStudyProgressStore(store, allowedCodes);
    return checked.valid ? { store, error: null } : { store: null, error: `El seguimiento guardado está dañado: ${checked.error}.` };
  } catch {
    return { store: null, error: "El seguimiento guardado no contiene JSON válido." };
  }
}

export function saveTopicProgress(code, changes, allowedCodes, storage = browserStorage(), now = new Date()) {
  const loaded = loadStudyProgress(allowedCodes, storage);
  if (loaded.error) return { saved: false, store: null, error: loaded.error };
  const prior = loaded.store.topics[code] || createDefaultTopicProgress();
  const record = {
    ...prior,
    ...changes,
    checks: { ...prior.checks, ...(changes.checks || {}) },
    updatedAt: now.toISOString(),
  };
  const next = { version: 1, topics: { ...loaded.store.topics, [code]: record } };
  const checked = validateStudyProgressStore(next, allowedCodes);
  if (!checked.valid) return { saved: false, store: loaded.store, error: `No se guardó ${code}: ${checked.error}.` };
  try {
    storage.setItem(STUDY_PROGRESS_KEY, JSON.stringify(next));
    return { saved: true, store: next, error: null };
  } catch {
    return { saved: false, store: loaded.store, error: "El navegador no pudo guardar el seguimiento. Exporta una copia y revisa el espacio disponible." };
  }
}
