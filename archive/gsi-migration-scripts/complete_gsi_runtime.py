"""One-time, auditable migration of the existing runtime; no framework or build."""
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
def edit(name, old, new):
    path = ROOT / name
    text = path.read_text('utf-8')
    if old not in text:
        if new in text: return
        raise ValueError(f'Missing expected edit: {name}: {old[:90]}')
    path.write_text(text.replace(old,new), 'utf-8', newline='\n')

edit('assets/js/exam-engine.js', '  BOE: "boe",', '  GSI: "gsi",\n  CUSTOM: "custom",\n  BOE: "boe",')
edit('assets/js/exam-engine.js', '  if (config.mode === EXAM_MODES.BOE) {', '''  if ([EXAM_MODES.GSI, EXAM_MODES.CUSTOM].includes(config.mode)) {
    return isProductionActive(question) && question.opposition_id === "OPP-GSI"
      && question.validation_status === "validated" && ["official", "manual", "ai"].includes(question.collection);
  }
  if (config.mode === EXAM_MODES.BOE) {'''.split('  if (config.mode === EXAM_MODES.BOE) {')[0] + '  if (config.mode === EXAM_MODES.BOE) {') if False else None
# Replace only the eligibility occurrence, not the selection branch.
p=ROOT/'assets/js/exam-engine.js'; t=p.read_text('utf-8')
anchor='  if (!question || !hasConfiguredBlock(question, config.blockIds)) return false;'
if 'question.opposition_id === "OPP-GSI"' not in t:
    t=t.replace(anchor, anchor+'''\n  if ([EXAM_MODES.GSI, EXAM_MODES.CUSTOM].includes(config.mode)) {
    return isProductionActive(question) && question.opposition_id === "OPP-GSI"
      && question.validation_status === "validated" && ["official", "manual", "ai"].includes(question.collection);
  }''')
    p.write_text(t,'utf-8')
edit('assets/js/exam-engine.js', '  const errors = [];', '''  const errors = [];
  if (config.mode === EXAM_MODES.GSI && (config.questionCount !== 100 || config.durationSeconds !== 5400 || config.penaltyPerError !== 1 / 3 || [...new Set(config.blockIds || [])].sort().join(",") !== "B1,B2,B3,B4")) {
    errors.push("El simulacro GSI requiere 100 preguntas, 90 minutos, los cuatro bloques y penalización exacta de 1/3.");
  }''')
edit('assets/js/exam-engine.js', '  return { boe, ai, demo };', '  const gsi = unique.filter((question) => isQuestionEligible(question, { ...config, mode: EXAM_MODES.CUSTOM }));\n  return { boe, ai, demo, gsi };')
edit('assets/js/exam-engine.js', '  const availability = getExamAvailability(unique, config);', '''  const availability = getExamAvailability(unique, config);
  // Shuffle the candidate pools before cutting; every eligible question can appear.
  if (config.shuffleQuestions) for (const key of Object.keys(availability)) availability[key] = shuffleCopy(availability[key], random);''')
edit('assets/js/exam-engine.js', '  let quotas = null;\n\n  if (config.mode === EXAM_MODES.BOE) {', '''  let quotas = null;

  if ([EXAM_MODES.GSI, EXAM_MODES.CUSTOM].includes(config.mode)) {
    if (availability.gsi.length < config.questionCount) return { errors: [`Se necesitan ${config.questionCount} preguntas revisadas y hay ${availability.gsi.length}.`] };
    if (config.mode === EXAM_MODES.GSI) {
      // Spread practice across topics, without claiming an official block quota.
      const groups = new Map();
      for (const question of availability.gsi) {
        if (!groups.has(question.topic_id)) groups.set(question.topic_id, []);
        groups.get(question.topic_id).push(question);
      }
      selected = [];
      while (selected.length < config.questionCount) {
        for (const pool of groups.values()) {
          if (pool.length && selected.length < config.questionCount) selected.push(pool.pop());
        }
      }
    } else selected = availability.gsi.slice(0, config.questionCount);
  } else if (config.mode === EXAM_MODES.BOE) {''')
edit('assets/js/exam.js', '    [EXAM_MODES.BOE]: "Solo BOE",', '    [EXAM_MODES.GSI]: "Simulacro GSI · primer ejercicio",\n    [EXAM_MODES.CUSTOM]: "Test configurable",\n    [EXAM_MODES.BOE]: "Solo oficiales",')
edit('assets/js/exam.js', '      penaltyPerError: Number(penalty.value),', '      penaltyPerError: 1 / 3,')
edit('assets/js/exam.js', '    if (mode === EXAM_MODES.MIXED) {', '''    if (mode === EXAM_MODES.GSI) Object.assign(config, { questionCount: 100, durationSeconds: 5400, blockIds: ["B1", "B2", "B3", "B4"], penaltyPerError: 1 / 3 });
    if (mode === EXAM_MODES.MIXED) {''')
edit('assets/js/exam.js', '    mixedSettings.hidden = config.mode !== EXAM_MODES.MIXED;', '''    mixedSettings.hidden = config.mode !== EXAM_MODES.MIXED;
    const fixed = config.mode === EXAM_MODES.GSI;
    questionCount.disabled = fixed; duration.disabled = fixed;
    if (fixed) { questionCount.value = 100; duration.value = 90; }
    for (const input of blockContainer.querySelectorAll("input")) { input.disabled = fixed; if (fixed) input.checked = true; }''')
edit('assets/js/exam.js', '    if (config.mode === EXAM_MODES.BOE) {\n      availabilityNode', '''    if ([EXAM_MODES.GSI, EXAM_MODES.CUSTOM].includes(config.mode)) {
      availabilityNode.textContent = `Disponibles: ${available.gsi.length} preguntas revisadas del corpus GSI. La procedencia aparece al corregir.`;
    } else if (config.mode === EXAM_MODES.BOE) {
      availabilityNode''')
edit('assets/js/data-service.js', 'function assertDataShape(data) {', '''function assertGsiQuestions(data) {
  const topics = new Map(data.syllabus.blocks.flatMap((block) => block.topics.map((topic) => [topic.id, block.id])));
  const ids = new Set();
  for (const name of ["official", "ai", "manual"]) for (const q of data[name].questions) {
    if (ids.has(q.id) || q.opposition_id !== "OPP-GSI" || topics.get(q.topic_id) !== q.block_id || q.options?.length !== 4 || new Set(q.options.map((o) => o.id)).size !== 4 || !q.options.some((o) => o.id === q.correct_option) || !q.provenance?.locator || !q.feedback?.correct) throw new Error(`Pregunta GSI inválida: ${q.id || "sin identificador"}.`);
    if (q.origin === "ai" && q.validation_status !== "validated" && q.is_active) throw new Error(`La pregunta generada ${q.id} requiere revisión antes de activarse.`);
    ids.add(q.id);
  }
}

function assertDataShape(data) {''')
edit('assets/js/app.js', 'import { initExam } from "./exam.js?m3";', 'import { initExam } from "./exam.js?m3";\nimport { initWrittenPractice } from "./written-practice.js";\nimport { initProgressBackup } from "./progress-backup.js";')
edit('assets/js/app.js', '    initExam(data);', '    initExam(data);\n    await initWrittenPractice(data);\n    initProgressBackup(data);')
edit('assets/js/statistics.js', '¿Borrar todas las estadísticas real y demo? No se borrará el refuerzo ni los historiales originales. Los exámenes anteriores a Fase 6 no podrán recuperarse.', '¿Borrar las estadísticas GSI? Puedes exportar una copia antes. El refuerzo y el historial de entrenamiento se conservan.')
# Remove selectable multi-origin quota modes from the final product UI.
p=ROOT/'index.html'; t=p.read_text('utf-8'); start=t.index('<select id="exam-mode"'); end=t.index('</select>',start)+len('</select>')
t=t[:start]+'''<select id="exam-mode" name="mode">
                  <option value="gsi">Simulacro GSI · 100 preguntas / 90 minutos</option>
                  <option value="custom">Test configurable · banco revisado</option>
                  <option value="boe">Solo preguntas oficiales</option>
                  <option value="ai-validated">Solo preguntas generadas revisadas</option>
                </select>'''+t[end:]
p.write_text(t,'utf-8',newline='\n')
print('GSI runtime migration applied.')
