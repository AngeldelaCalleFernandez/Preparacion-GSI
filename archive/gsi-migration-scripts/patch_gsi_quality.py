"""One-time, asserted runtime corrections found in the final QA review."""
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
def edit(file, old, new):
    p=ROOT/file; s=p.read_text('utf-8')
    if old not in s:
        if new in s: return
        raise ValueError(f'Expected text absent in {file}: {old[:70]}')
    p.write_text(s.replace(old,new),'utf-8')

edit('scripts/validate_questions.py','preguntas validadas; no se ha importado ni generado ninguna pregunta.','preguntas con estructura válida; no se modifica su estado de revisión editorial.')
edit('assets/js/exam-engine.js',
     'if (!question || !hasConfiguredBlock(question, config.blockIds)) return false;',
     'if (!question || (question.opposition_id && question.opposition_id !== "OPP-GSI") || !hasConfiguredBlock(question, config.blockIds)) return false;')
edit('assets/js/exam-engine.js',
     'return isProductionActive(question) && question.collection === "official" && question.origin === "official";',
     'return isProductionActive(question) && question.collection === "official" && question.origin === "official" && question.validation_status === "validated";')
edit('assets/js/written-practice.js',
     '(state.finishedAt !== null && !Number.isFinite(Date.parse(state.finishedAt)))',
     '(state.finishedAt !== null && (!Number.isFinite(Date.parse(state.finishedAt)) || Date.parse(state.finishedAt) < Date.parse(state.startedAt)))')
edit('assets/js/progress-backup.js',
     'import { validateActiveExamState } from "./exam-storage.js?gsi2";',
     'import { validateActiveExamState } from "./exam-storage.js?gsi2";\nimport { validateExamConfig, isQuestionEligible } from "./exam-engine.js?gsi2";')
edit('assets/js/progress-backup.js',
     'const questionIds = new Set(data.questions.map((q) => q.id));',
     'const questionsById = new Map(data.questions.map((q) => [q.id, q]));\n  const questionIds = new Set(questionsById.keys());\n  const blockIds = new Set(data.syllabus.blocks.map((b) => b.id));')
edit('assets/js/progress-backup.js',
     'if (!value || typeof value !== "object") return;',
     '''if (!value || typeof value !== "object") return;
    if (value.questionId && questionsById.has(value.questionId)) {
      const q = questionsById.get(value.questionId);
      if ((value.blockId && value.blockId !== q.block_id) || (value.topicId && value.topicId !== q.topic_id)) throw new Error("La respuesta está asignada a un tema o bloque incorrecto.");
      if (value.selectedOption !== undefined && value.selectedOption !== null && !q.options.some((o) => o.id === value.selectedOption)) throw new Error("La respuesta contiene una opción desconocida.");
    }''')
edit('assets/js/progress-backup.js',
     'if (key === "topicId" && !topicIds.has(item))',
     'if (key === "blockId" && !blockIds.has(item)) throw new Error(`Bloque ajeno al programa GSI: ${item}.`);\n      if (key === "topicId" && !topicIds.has(item))')
edit('assets/js/progress-backup.js',
     'const payload = parsePersistenceEnvelope(JSON.stringify(value), context).payload;\n    let valid = false;',
     'const payload = parsePersistenceEnvelope(JSON.stringify(value), context).payload;\n    if (payload === null) continue; // Tombstone left by the domain storage adapter.\n    let valid = false;')
edit('assets/js/progress-backup.js',
     'else if (logical.includes("exam.active")) valid = validateActiveExamState(payload).valid;',
     '''else if (logical.includes("exam.active")) {
      valid = validateActiveExamState(payload).valid && validateExamConfig(payload.config).length === 0;
      if (valid) {
        const ids = new Set(payload.questionRefs.map((ref) => ref.id));
        valid = payload.questionRefs.length === payload.config.questionCount
          && Date.parse(payload.deadlineAt) - Date.parse(payload.startedAt) === payload.config.durationSeconds * 1000
          && payload.questionRefs.every((ref) => {
            const q = questionsById.get(ref.id);
            const order = payload.optionOrderByQuestionId[ref.id];
            return q && isQuestionEligible(q, payload.config) && ref.blockId === q.block_id && ref.topicId === q.topic_id
              && Array.isArray(order) && order.length === 4 && new Set(order).size === 4 && order.every((id) => q.options.some((o) => o.id === id));
          })
          && Object.entries(payload.answersByQuestionId).every(([id, answer]) => ids.has(id) && (answer === null || questionsById.get(id).options.some((o) => o.id === answer)))
          && payload.flaggedQuestionIds.every((id) => ids.has(id));
      }
    }''')
edit('assets/js/progress-backup.js',
     'else if (logical.includes("analytics")) valid = normaliseAnalyticsStore(payload, false).valid;',
     '''else if (logical.includes("analytics")) {
      const result = normaliseAnalyticsStore(payload, false);
      valid = result.valid && Array.isArray(payload.attempts) && Array.isArray(payload.sessions)
        && result.store.attempts.length === payload.attempts.length && result.store.sessions.length === payload.sessions.length;
    }''')
edit('assets/js/progress-backup.js',
     'for (const [key, raw] of previous) { if (raw === null) storage.removeItem(key); else storage.setItem(key, raw); }\n    throw error;',
     '''const rollbackErrors = [];
    for (const [key, raw] of previous) {
      try { if (raw === null) storage.removeItem(key); else storage.setItem(key, raw); }
      catch { rollbackErrors.push(key); }
    }
    if (rollbackErrors.length) throw new Error("El navegador rechazó la escritura y parte de la restauración. Conserva la copia exportada y revisa el espacio disponible.");
    throw error;''')
# Retain the original manual unchanged; currency notices live alongside it.
edit('assets/js/syllabus-view.js',
     'content.replaceChildren(fragment);',
     '''content.replaceChildren(fragment);
    for (const update of viewState.data.updates.updates.filter((u) => u.topic_ids.includes(operationalTopicId))) {
      const notice = element("aside", "notice");
      notice.append(element("strong", "", `${update.title} · control ${update.reviewed_at}`), element("p", "", update.summary));
      const link = sourceLink(viewState.data.indexes.sourcesById.get(update.source_id), "Comprobación de vigencia en la fuente oficial");
      if (link) notice.append(link);
      content.prepend(notice);
    }''')
edit('assets/js/analytics-migration.js', 'Los exámenes finalizados antes de Fase 6 no se conservaban.', 'Las versiones antiguas no conservaban todos los exámenes finalizados.')
print('Runtime corrections applied.')
