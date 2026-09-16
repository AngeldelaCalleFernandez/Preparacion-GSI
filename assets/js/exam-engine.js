export const EXAM_MODES = Object.freeze({
  GSI: "gsi",
  CUSTOM: "custom",
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
  if (!question || (question.opposition_id && question.opposition_id !== "OPP-GSI") || !hasConfiguredBlock(question, config.blockIds)) return false;
  if ([EXAM_MODES.GSI, EXAM_MODES.CUSTOM].includes(config.mode)) {
    return isProductionActive(question) && question.opposition_id === "OPP-GSI"
      && question.validation_status === "validated" && ["official", "manual", "ai"].includes(question.collection);
  }
  if (config.mode === EXAM_MODES.BOE) {
    return isProductionActive(question) && question.collection === "official" && question.origin === "official" && question.validation_status === "validated"
      && (!config.officialExamId || (question.exam?.id === config.officialExamId && question.exam.key_status === "definitive" && Number.isInteger(question.exam.paper_order)));
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
  if (config.officialExamId && (config.mode !== EXAM_MODES.BOE || !/^GSI-INAP-\d{4}$/.test(config.officialExamId) || config.questionCount !== 100 || config.durationSeconds !== 5400 || config.penaltyPerError !== 1 / 3 || [...new Set(config.blockIds || [])].sort().join(",") !== "B1,B2,B3,B4" || config.shuffleQuestions || config.shuffleOptions)) {
    errors.push("El examen oficial requiere 100 preguntas, 90 minutos, los cuatro bloques, penalización de 1/3 y el orden original de preguntas y opciones.");
  }
  if (config.mode === EXAM_MODES.GSI && (config.questionCount !== 100 || config.durationSeconds !== 5400 || config.penaltyPerError !== 1 / 3 || [...new Set(config.blockIds || [])].sort().join(",") !== "B1,B2,B3,B4")) {
    errors.push("El simulacro GSI requiere 100 preguntas, 90 minutos, los cuatro bloques y penalización exacta de 1/3.");
  }
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
  const gsi = unique.filter((question) => isQuestionEligible(question, { ...config, mode: EXAM_MODES.CUSTOM }));
  return { boe, ai, demo, gsi };
}

function selectBalancedDemoQuestions(questions, config) {
  const configuredBlocks = [...new Set(config.blockIds)];
  const baseQuota = Math.floor(config.questionCount / configuredBlocks.length);
  const remainder = config.questionCount % configuredBlocks.length;
  const selected = [];
  for (const [index, blockId] of configuredBlocks.entries()) {
    const quota = baseQuota + (index < remainder ? 1 : 0);
    const candidates = questions.filter((question) => question.block_id === blockId);
    if (candidates.length < quota) {
      return { errors: [`La sesión ficticia necesita ${quota} preguntas del bloque ${blockId} y solo hay ${candidates.length}; no se completará con otro bloque.`] };
    }
    selected.push(...candidates.slice(0, quota));
  }
  return { questions: selected };
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
  // Shuffle the candidate pools before cutting; every eligible question can appear.
  if (config.shuffleQuestions) for (const key of Object.keys(availability)) availability[key] = shuffleCopy(availability[key], random);
  let selected;
  let quotas = null;

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
  } else if (config.mode === EXAM_MODES.BOE) {
    if (availability.boe.length < config.questionCount) {
      return { errors: [`Solo BOE necesita ${config.questionCount} preguntas activas oficiales y solo hay ${availability.boe.length}.`] };
    }
    if (config.officialExamId) {
      selected = [...availability.boe].sort((a, b) => a.exam.paper_order - b.exam.paper_order);
      if (selected.length !== 100 || selected.some((question, index) => question.exam.paper_order !== index + 1)) return { errors: ["El examen oficial no contiene las 100 posiciones evaluables únicas. Revisa el catálogo y las reservas."] };
    } else selected = availability.boe.slice(0, config.questionCount);
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
    const demoSelection = selectBalancedDemoQuestions(availability.demo, config);
    if (demoSelection.errors) return demoSelection;
    selected = demoSelection.questions;
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
