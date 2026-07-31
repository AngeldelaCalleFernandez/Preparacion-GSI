export const EXAM_MODES = Object.freeze({
  BOE: "boe",
  AI_VALIDATED: "ai-validated",
  MIXED: "mixed",
  DEMO: "demo",
});

function uniqueById(questions) {
  const seen = new Set();
  const duplicates = [];
  const unique = [];
  for (const question of questions) {
    if (seen.has(question.id)) {
      duplicates.push(question.id);
    } else {
      seen.add(question.id);
      unique.push(question);
    }
  }
  return { unique, duplicates };
}

function shuffleCopy(items, random = Math.random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function hasConfiguredBlock(question, blockIds) {
  return blockIds.includes(question.block_id);
}

function isProductionActive(question) {
  return question.is_active === true && question.isDemo !== true;
}

export function isQuestionEligible(question, config) {
  if (!question || !hasConfiguredBlock(question, config.blockIds)) return false;
  if (config.mode === EXAM_MODES.BOE) {
    return isProductionActive(question) && question.collection === "official" && question.origin === "official";
  }
  if (config.mode === EXAM_MODES.AI_VALIDATED) {
    return isProductionActive(question)
      && question.collection === "ai"
      && question.origin === "ai"
      && question.validation_status === "validated";
  }
  if (config.mode === EXAM_MODES.MIXED) {
    return isQuestionEligible(question, { ...config, mode: EXAM_MODES.BOE })
      || isQuestionEligible(question, { ...config, mode: EXAM_MODES.AI_VALIDATED });
  }
  if (config.mode === EXAM_MODES.DEMO) {
    return config.demoEnabled === true
      && question.isDemo === true
      && question.collection === "demo"
      && question.is_active === true;
  }
  return false;
}

export function validateExamConfig(config) {
  const errors = [];
  if (!Object.values(EXAM_MODES).includes(config.mode)) errors.push("Selecciona una modalidad de examen válida.");
  if (!Array.isArray(config.blockIds) || config.blockIds.length === 0) errors.push("Selecciona al menos un bloque.");
  if (!Number.isInteger(config.questionCount) || config.questionCount < 1) errors.push("Indica un número entero positivo de preguntas.");
  if (!Number.isInteger(config.durationSeconds) || config.durationSeconds < 60) errors.push("La duración mínima es de un minuto.");
  if (!Number.isFinite(config.penaltyPerError) || config.penaltyPerError < 0 || config.penaltyPerError > 1) {
    errors.push("La penalización por error debe estar entre 0 y 1.");
  }
  if (config.mode === EXAM_MODES.MIXED) {
    if (!Number.isInteger(config.boePercentage) || config.boePercentage < 1 || config.boePercentage > 99) {
      errors.push("En modo mixto, el porcentaje BOE debe estar entre 1 y 99.");
    }
    if (config.questionCount < 2) errors.push("El modo mixto requiere al menos dos preguntas.");
  }
  if (config.mode === EXAM_MODES.DEMO && config.demoEnabled !== true) {
    errors.push("La sesión ficticia solo está disponible con ?demo=1.");
  }
  return errors;
}

export function getMixedQuota(questionCount, boePercentage) {
  const boeCount = Math.round(questionCount * boePercentage / 100);
  return { boeCount, aiCount: questionCount - boeCount };
}

export function getExamAvailability(questions, config) {
  const { unique } = uniqueById(questions);
  const boe = unique.filter((question) => isQuestionEligible(question, { ...config, mode: EXAM_MODES.BOE }));
  const ai = unique.filter((question) => isQuestionEligible(question, { ...config, mode: EXAM_MODES.AI_VALIDATED }));
  const demo = unique.filter((question) => isQuestionEligible(question, { ...config, mode: EXAM_MODES.DEMO }));
  return { boe, ai, demo };
}

function createOptionOrders(questions, shuffleOptions, random) {
  return Object.fromEntries(questions.map((question) => [
    question.id,
    shuffleOptions ? shuffleCopy(question.options.map((option) => option.id), random) : question.options.map((option) => option.id),
  ]));
}

export function selectExamQuestions(questions, config, random = Math.random) {
  const configErrors = validateExamConfig(config);
  if (configErrors.length > 0) return { errors: configErrors };
  const { unique, duplicates } = uniqueById(questions);
  if (duplicates.length > 0) return { errors: [`Hay preguntas duplicadas en los datos cargados: ${duplicates.join(", ")}.`] };
  const availability = getExamAvailability(unique, config);
  let selected;
  let quotas = null;

  if (config.mode === EXAM_MODES.BOE) {
    if (availability.boe.length < config.questionCount) {
      return { errors: [`Solo BOE necesita ${config.questionCount} preguntas activas oficiales y solo hay ${availability.boe.length}.`] };
    }
    selected = availability.boe.slice(0, config.questionCount);
  } else if (config.mode === EXAM_MODES.AI_VALIDATED) {
    if (availability.ai.length < config.questionCount) {
      return { errors: [`Solo IA validada necesita ${config.questionCount} preguntas y solo hay ${availability.ai.length}.`] };
    }
    selected = availability.ai.slice(0, config.questionCount);
  } else if (config.mode === EXAM_MODES.MIXED) {
    quotas = getMixedQuota(config.questionCount, config.boePercentage);
    if (quotas.boeCount === 0 || quotas.aiCount === 0) {
      return { errors: ["El porcentaje mixto debe generar al menos una pregunta BOE y una IA validada."] };
    }
    if (availability.boe.length < quotas.boeCount || availability.ai.length < quotas.aiCount) {
      return {
        errors: [
          `El modo mixto requiere ${quotas.boeCount} BOE y ${quotas.aiCount} IA validada; disponibles: ${availability.boe.length} BOE y ${availability.ai.length} IA validada.`,
        ],
      };
    }
    selected = [...availability.boe.slice(0, quotas.boeCount), ...availability.ai.slice(0, quotas.aiCount)];
  } else {
    if (availability.demo.length < config.questionCount) {
      return { errors: [`La sesión ficticia necesita ${config.questionCount} preguntas demo y solo hay ${availability.demo.length}.`] };
    }
    selected = availability.demo.slice(0, config.questionCount);
  }

  const ordered = config.shuffleQuestions ? shuffleCopy(selected, random) : selected;
  return {
    questions: ordered,
    optionOrderByQuestionId: createOptionOrders(ordered, config.shuffleOptions, random),
    quotas,
  };
}

function newStats() {
  return { total: 0, correct: 0, incorrect: 0, blank: 0, net: 0, grossPercentage: 0 };
}

function addResult(stats, outcome, penalty) {
  stats.total += 1;
  if (outcome === "correct") stats.correct += 1;
  if (outcome === "incorrect") stats.incorrect += 1;
  if (outcome === "blank") stats.blank += 1;
  stats.net = stats.correct - stats.incorrect * penalty;
  stats.grossPercentage = stats.total === 0 ? 0 : stats.correct / stats.total * 100;
}

function summarizeGroups(groups) {
  return [...groups.entries()].map(([id, stats]) => ({ id, ...stats }));
}

export function calculateExamResults(questions, answersByQuestionId, penaltyPerError) {
  const { unique, duplicates } = uniqueById(questions);
  if (duplicates.length > 0) throw new Error(`No se puede puntuar un examen con preguntas duplicadas: ${duplicates.join(", ")}.`);
  const overall = newStats();
  const byBlock = new Map();
  const byTopic = new Map();
  const review = [];

  for (const question of unique) {
    const selectedOption = answersByQuestionId[question.id] ?? null;
    const validOptionIds = new Set(question.options.map((option) => option.id));
    const outcome = selectedOption === null || !validOptionIds.has(selectedOption)
      ? "blank"
      : selectedOption === question.correct_option ? "correct" : "incorrect";
    addResult(overall, outcome, penaltyPerError);
    if (!byBlock.has(question.block_id)) byBlock.set(question.block_id, newStats());
    if (!byTopic.has(question.topic_id)) byTopic.set(question.topic_id, newStats());
    addResult(byBlock.get(question.block_id), outcome, penaltyPerError);
    addResult(byTopic.get(question.topic_id), outcome, penaltyPerError);
    review.push({ question, selectedOption, outcome });
  }
  return { overall, byBlock: summarizeGroups(byBlock), byTopic: summarizeGroups(byTopic), review };
}

export function formatRemainingTime(totalSeconds) {
  const safeSeconds = Math.max(0, Math.ceil(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function serializeQuestionRef(question) {
  return {
    id: question.id,
    collection: question.collection,
    blockId: question.block_id,
    topicId: question.topic_id,
    isDemo: Boolean(question.isDemo),
  };
}
