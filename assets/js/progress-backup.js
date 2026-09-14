import { LOGICAL_PERSISTENCE_KEYS, buildPhysicalPersistenceKey, parsePersistenceEnvelope } from "./persistence-v2.js?gsi2";
import { validateTrainingV1 } from "./persistence-migration-v2.js?gsi2";
import { validateActiveExamState } from "./exam-storage.js?gsi2";
import { validateReinforcementStore } from "./reinforcement-storage.js?gsi2";
import { normaliseAnalyticsStore } from "./analytics-engine.js?gsi2";
import { WRITTEN_KEY, validateWrittenState } from "./written-practice.js?gsi2";

function keysFor(context) {
  return LOGICAL_PERSISTENCE_KEYS.filter((key) => !key.includes(".demo.")).map((logical) => ({ logical, physical: buildPhysicalPersistenceKey(context, logical) }));
}
export function exportProgress(context, storage) {
  const entries = {};
  for (const key of [...keysFor(context).map((k) => k.physical), WRITTEN_KEY]) {
    const value = storage.getItem(key);
    if (value !== null) entries[key] = JSON.parse(value);
  }
  return { format: "gsi-progress", version: 1, oppositionId: context.oppositionId, syllabusId: context.syllabusId, exportedAt: new Date().toISOString(), entries };
}
export function validateProgressBackup(backup, data) {
  const context = data.runtimeContext;
  if (!backup || backup.format !== "gsi-progress" || backup.version !== 1 || backup.oppositionId !== "OPP-GSI" || backup.oppositionId !== context.oppositionId || backup.syllabusId !== context.syllabusId || !backup.entries || Array.isArray(backup.entries)) throw new Error("La copia no pertenece a este programa GSI A2.");
  const keys = new Map(keysFor(context).map((k) => [k.physical, k.logical]));
  const questionIds = new Set(data.questions.map((q) => q.id));
  const topicIds = new Set(data.syllabus.blocks.flatMap((b) => b.topics.map((t) => t.id)));
  function checkReferences(value, depth = 0) {
    if (depth > 30) throw new Error("La copia tiene una estructura demasiado profunda.");
    if (!value || typeof value !== "object") return;
    for (const [key, item] of Object.entries(value)) {
      if (key === "questionId" && !questionIds.has(item)) throw new Error(`Pregunta ajena al banco GSI: ${item}.`);
      if (key === "topicId" && !topicIds.has(item)) throw new Error(`Tema ajeno al programa GSI: ${item}.`);
      if (key === "isDemo" && item === true) throw new Error("La copia contiene datos de demostración.");
      checkReferences(item, depth + 1);
    }
  }
  for (const [physical, value] of Object.entries(backup.entries)) {
    if (physical === WRITTEN_KEY) {
      if (!validateWrittenState(value, data.practice.cases)) throw new Error("La práctica escrita de la copia no es válida.");
      continue;
    }
    const logical = keys.get(physical);
    if (!logical) throw new Error("La copia contiene claves de otra aplicación o versión.");
    const payload = parsePersistenceEnvelope(JSON.stringify(value), context).payload;
    let valid = false;
    if (logical.includes("training")) valid = validateTrainingV1(payload);
    else if (logical.includes("exam.active")) valid = validateActiveExamState(payload).valid;
    else if (logical.includes("reinforcement")) valid = validateReinforcementStore(payload, false).valid;
    else if (logical.includes("analytics")) valid = normaliseAnalyticsStore(payload, false).valid;
    if (!valid) throw new Error(`Datos incompatibles en ${logical}.`);
    checkReferences(payload);
    if (Array.isArray(payload.questionRefs) && payload.questionRefs.some((q) => !questionIds.has(q.id))) throw new Error("El examen contiene preguntas ajenas a GSI.");
  }
  return backup;
}
export function importProgress(backup, data, storage) {
  validateProgressBackup(backup, data);
  const allowed = [...keysFor(data.runtimeContext).map((k) => k.physical), WRITTEN_KEY];
  const previous = new Map(allowed.map((key) => [key, storage.getItem(key)]));
  try {
    for (const key of allowed) {
      if (Object.hasOwn(backup.entries, key)) storage.setItem(key, JSON.stringify(backup.entries[key]));
      else storage.removeItem(key);
    }
  } catch (error) {
    for (const [key, raw] of previous) { if (raw === null) storage.removeItem(key); else storage.setItem(key, raw); }
    throw error;
  }
}
export function resetProgress(context, storage) {
  for (const key of [...keysFor(context).map((k) => k.physical), WRITTEN_KEY]) storage.removeItem(key);
}
export function initProgressBackup(data) {
  const status = document.querySelector("#backup-status");
  document.querySelector("#progress-export").addEventListener("click", () => {
    try {
      const backup = exportProgress(data.runtimeContext, localStorage);
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob); const link = document.createElement("a");
      link.href = url; link.download = `gsi-progreso-${new Date().toISOString().slice(0, 10)}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = "Copia GSI exportada.";
    } catch (error) { status.textContent = error.message; }
  });
  document.querySelector("#progress-import").addEventListener("change", async (event) => {
    const file = event.target.files[0]; if (!file) return;
    try {
      if (file.size > 20000000) throw new Error("La copia supera 20 MB; comprueba que sea una exportación de progreso GSI.");
      const backup = validateProgressBackup(JSON.parse(await file.text()), data);
      if (!window.confirm("La copia es compatible con GSI. ¿Reemplazar el progreso actual por esta copia?")) return;
      importProgress(backup, data, localStorage); window.location.reload();
    } catch (error) { status.textContent = `Importación cancelada: ${error.message}`; }
    finally { event.target.value = ""; }
  });
  document.querySelector("#progress-reset").addEventListener("click", () => {
    if (!window.confirm("¿Reiniciar todo el progreso GSI de este navegador? Exporta una copia antes si quieres conservarlo.")) return;
    try { resetProgress(data.runtimeContext, localStorage); window.location.reload(); }
    catch (error) { status.textContent = error.message; }
  });
}
