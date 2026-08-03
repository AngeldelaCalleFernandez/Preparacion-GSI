import { describeQuestionSource } from "./data-service.js";
import {
  EXAM_MODES,
  calculateExamResults,
  formatRemainingTime,
  getExamAvailability,
  getMixedQuota,
  isQuestionEligible,
  selectExamQuestions,
} from "./exam-engine.js";
import {
  clearActiveExamState,
  createActiveExamState,
  loadActiveExamState,
  saveActiveExamState,
} from "./exam-storage.js";
import { applyStoredReinforcementEvents, createReinforcementEvent } from "./reinforcement-storage.js";
import { createElement, setStatus } from "./ui.js";

function formatNumber(value) {
  return new Intl.NumberFormat("es-ES", { maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(value);
}

function formatMinutes(seconds) {
  return `${formatNumber(seconds / 60)} min`;
}

function modeLabel(mode) {
  return {
    [EXAM_MODES.BOE]: "Solo BOE",
    [EXAM_MODES.AI_VALIDATED]: "Solo IA validada",
    [EXAM_MODES.MIXED]: "Mixto",
    [EXAM_MODES.DEMO]: "Sesión ficticia",
  }[mode] ?? "Examen";
}

function selectedText(question, optionId) {
  if (!optionId) return "En blanco";
  const option = question.options.find((candidate) => candidate.id === optionId);
  return option ? `${option.id}. ${option.text}` : "En blanco";
}

function createResultTable(rows, labelForId) {
  const table = createElement("table", "result-table");
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  for (const title of ["Grupo", "Total", "Aciertos", "Errores", "En blanco", "Neta", "% bruto"]) {
    headRow.append(createElement("th", "", title));
  }
  head.append(headRow);
  const body = document.createElement("tbody");
  for (const row of rows) {
    const rowNode = document.createElement("tr");
    for (const value of [
      labelForId(row.id),
      row.total,
      row.correct,
      row.incorrect,
      row.blank,
      formatNumber(row.net),
      `${formatNumber(row.grossPercentage)} %`,
    ]) {
      rowNode.append(createElement("td", "", String(value)));
    }
    body.append(rowNode);
  }
  table.append(head, body);
  return table;
}

export function initExam(data) {
  const form = document.querySelector("#exam-config-form");
  const modeSelect = document.querySelector("#exam-mode");
  const questionCount = document.querySelector("#exam-question-count");
  const duration = document.querySelector("#exam-duration");
  const penalty = document.querySelector("#exam-penalty");
  const blockContainer = document.querySelector("#exam-blocks");
  const mixedSettings = document.querySelector("#exam-mixed-settings");
  const boePercentage = document.querySelector("#exam-boe-percentage");
  const mixedSummary = document.querySelector("#exam-mixed-summary");
  const availabilityNode = document.querySelector("#exam-availability");
  const demoStart = document.querySelector("#exam-demo-start");
  const recovery = document.querySelector("#exam-recovery");
  const recoveryOptions = document.querySelector("#exam-recovery-options");
  const activeNode = document.querySelector("#exam-active");
  const progressNode = document.querySelector("#exam-progress");
  const timerNode = document.querySelector("#exam-timer");
  const questionNode = document.querySelector("#exam-question");
  const navigationNode = document.querySelector("#exam-navigation");
  const indexNode = document.querySelector("#exam-index");
  const resultsNode = document.querySelector("#exam-results");
  const resultSummary = document.querySelector("#exam-result-summary");
  const blockResults = document.querySelector("#exam-block-results");
  const topicResults = document.querySelector("#exam-topic-results");
  const reviewNode = document.querySelector("#exam-review");
  const newExamButton = document.querySelector("#exam-new");
  const finishDialog = document.querySelector("#exam-finish-dialog");
  const finishMessage = document.querySelector("#exam-finish-message");
  const cancelFinish = document.querySelector("#exam-cancel-finish");
  const confirmFinish = document.querySelector("#exam-confirm-finish");
  let active = null;
  let timerId = null;

  function getSelectedBlocks() {
    return [...blockContainer.querySelectorAll("input[type='checkbox']:checked")].map((input) => input.value);
  }

  function getConfig(modeOverride = null) {
    const mode = modeOverride ?? modeSelect.value;
    const config = {
      mode,
      questionCount: Number(questionCount.value),
      durationSeconds: Number(duration.value) * 60,
      blockIds: getSelectedBlocks(),
      boePercentage: Number(boePercentage.value),
      penaltyPerError: Number(penalty.value),
      shuffleQuestions: document.querySelector("#exam-shuffle-questions").checked,
      shuffleOptions: document.querySelector("#exam-shuffle-options").checked,
      demoEnabled: data.demoEnabled,
    };
    if (mode === EXAM_MODES.MIXED) {
      Object.assign(config, getMixedQuota(config.questionCount, config.boePercentage));
    }
    return config;
  }

  function renderAvailability() {
    const config = getConfig();
    mixedSettings.hidden = config.mode !== EXAM_MODES.MIXED;
    const available = getExamAvailability(data.questions, config);
    if (config.mode === EXAM_MODES.BOE) {
      availabilityNode.textContent = `Disponibles para Solo BOE: ${available.boe.length}.`;
    } else if (config.mode === EXAM_MODES.AI_VALIDATED) {
      availabilityNode.textContent = `Disponibles para Solo IA validada: ${available.ai.length}.`;
    } else {
      const quota = getMixedQuota(config.questionCount, config.boePercentage);
      mixedSummary.textContent = `Cuota prevista: ${quota.boeCount} BOE y ${quota.aiCount} IA validada.`;
      availabilityNode.textContent = `Disponibles para Mixto: ${available.boe.length} BOE y ${available.ai.length} IA validada.`;
    }
  }

  function persist() {
    const result = saveActiveExamState(active.state);
    active.state = result.state;
    if (!result.saved) setStatus("El examen sigue activo, pero no se pudo guardar localmente para recuperarlo tras una recarga.", "error");
  }

  function remainingSeconds() {
    return Math.max(0, (Date.parse(active.state.deadlineAt) - Date.now()) / 1000);
  }

  function stopTimer() {
    if (timerId !== null) window.clearInterval(timerId);
    timerId = null;
  }

  function updateTimer() {
    if (!active) return;
    const remaining = remainingSeconds();
    timerNode.textContent = `Tiempo restante: ${formatRemainingTime(remaining)}`;
    timerNode.classList.toggle("exam-timer--expired", remaining <= 0);
    if (remaining <= 0) finishExam(true);
  }

  function startTimer() {
    stopTimer();
    updateTimer();
    if (active) timerId = window.setInterval(updateTimer, 1000);
  }

  function isAnswered(questionId) {
    return Boolean(active.state.answersByQuestionId[questionId]);
  }

  function isFlagged(questionId) {
    return active.state.flaggedQuestionIds.includes(questionId);
  }

  function renderIndex() {
    indexNode.replaceChildren();
    active.questions.forEach((question, index) => {
      const button = createElement("button", "", String(index + 1));
      button.type = "button";
      button.dataset.answered = String(isAnswered(question.id));
      button.dataset.flagged = String(isFlagged(question.id));
      button.setAttribute("aria-label", `Ir a pregunta ${index + 1}${isAnswered(question.id) ? ", respondida" : ", en blanco"}${isFlagged(question.id) ? ", marcada" : ""}`);
      if (index === active.state.currentIndex) button.setAttribute("aria-current", "step");
      button.addEventListener("click", () => goToQuestion(index));
      indexNode.append(button);
    });
  }

  function renderQuestion() {
    const question = active.questions[active.state.currentIndex];
    const selected = active.state.answersByQuestionId[question.id] ?? null;
    const optionOrder = active.state.optionOrderByQuestionId[question.id];
    progressNode.textContent = `Pregunta ${active.state.currentIndex + 1} de ${active.questions.length}${isFlagged(question.id) ? " · marcada para revisión" : ""}`;
    questionNode.replaceChildren();
    const card = createElement("article", "exam-question-card");
    card.append(createElement("p", "question-statement", question.statement));
    const options = createElement("div", "question-options");
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", "Opciones de respuesta");
    for (const optionId of optionOrder) {
      const option = question.options.find((candidate) => candidate.id === optionId);
      const button = createElement("button", "option-button exam-option-button");
      button.type = "button";
      button.setAttribute("aria-pressed", String(selected === option.id));
      button.append(createElement("span", "option-letter", option.id), createElement("span", "", option.text));
      button.addEventListener("click", () => {
        active.state.answersByQuestionId[question.id] = option.id;
        persist();
        renderActiveExam();
      });
      options.append(button);
    }
    const blank = createElement("button", "button button--secondary", "Dejar en blanco");
    blank.type = "button";
    blank.addEventListener("click", () => {
      delete active.state.answersByQuestionId[question.id];
      persist();
      renderActiveExam();
    });
    const flag = createElement("button", "button button--secondary", isFlagged(question.id) ? "Quitar marca de revisión" : "Marcar para revisión");
    flag.type = "button";
    flag.addEventListener("click", () => {
      if (isFlagged(question.id)) {
        active.state.flaggedQuestionIds = active.state.flaggedQuestionIds.filter((id) => id !== question.id);
      } else {
        active.state.flaggedQuestionIds = [...active.state.flaggedQuestionIds, question.id];
      }
      persist();
      renderActiveExam();
    });
    card.append(options, createElement("div", "action-row"));
    card.lastElementChild.append(blank, flag);
    questionNode.append(card);
  }

  function renderNavigation() {
    navigationNode.replaceChildren();
    const previous = createElement("button", "button button--secondary", "Pregunta anterior");
    previous.type = "button";
    previous.disabled = active.state.currentIndex === 0;
    previous.addEventListener("click", () => goToQuestion(active.state.currentIndex - 1));
    const next = createElement("button", "button button--secondary", "Pregunta siguiente");
    next.type = "button";
    next.disabled = active.state.currentIndex === active.questions.length - 1;
    next.addEventListener("click", () => goToQuestion(active.state.currentIndex + 1));
    const finish = createElement("button", "button", "Finalizar examen");
    finish.type = "button";
    finish.addEventListener("click", requestFinish);
    navigationNode.append(previous, next, finish);
  }

  function renderActiveExam() {
    if (!active) return;
    activeNode.hidden = false;
    form.hidden = true;
    recovery.hidden = true;
    resultsNode.hidden = true;
    renderQuestion();
    renderNavigation();
    renderIndex();
    updateTimer();
  }

  function goToQuestion(index) {
    if (index < 0 || index >= active.questions.length) return;
    active.state.currentIndex = index;
    persist();
    renderActiveExam();
    questionNode.querySelector(".exam-option-button")?.focus();
  }

  function sourceDetails(question) {
    const source = describeQuestionSource(question, data.indexes);
    const details = createElement("p", "");
    const title = source.url ? document.createElement("a") : createElement("span");
    title.textContent = source.title;
    if (source.url) {
      title.href = source.url;
      title.target = "_blank";
      title.rel = "noreferrer";
    }
    details.append(title, document.createTextNode(` · ${source.publisher} · ${source.locator}`));
    return details;
  }

  function examResponseEvent(state, question, outcome) {
    return createReinforcementEvent(`exam:${state.examId}:${question.collection}:${question.id}:response`, "response", question, {
      result: outcome,
    });
  }

  function updateExamReinforcement(state, question, item, action, button) {
    const response = item.outcome === "blank" ? null : examResponseEvent(state, question, item.outcome === "correct" ? "correct" : "incorrect");
    const events = [];
    if (action === "doubt") {
      if (response) events.push(response);
      events.push(createReinforcementEvent(`exam:${state.examId}:${question.collection}:${question.id}:assessment:doubt`, "assessment", question, { assessment: "doubt" }));
    } else {
      events.push(createReinforcementEvent(`exam:${state.examId}:${question.collection}:${question.id}:manual`, "manual", question));
    }
    const saved = applyStoredReinforcementEvents(state.isDemo, events);
    if (!saved.saved) {
      setStatus(saved.error || "No se pudo actualizar el refuerzo en este navegador.", "error");
      return;
    }
    button.disabled = true;
    setStatus(action === "doubt" ? "La duda se ha añadido al refuerzo." : "La pregunta se ha añadido al refuerzo.", "success");
  }

  function integrateExamErrors(state, result) {
    const events = result.review
      .filter((item) => item.outcome === "incorrect")
      .map((item) => examResponseEvent(state, item.question, "incorrect"));
    if (events.length === 0) return { saved: true };
    return applyStoredReinforcementEvents(state.isDemo, events);
  }

  function renderResults(result, state, questions, finishedAt, timedOut, reinforcementError = null) {
    activeNode.hidden = true;
    form.hidden = false;
    resultsNode.hidden = false;
    resultSummary.replaceChildren();
    const usedSeconds = Math.min((finishedAt - Date.parse(state.startedAt)) / 1000, state.config.durationSeconds);
    const summaryCards = [
      ["Aciertos", result.overall.correct],
      ["Errores", result.overall.incorrect],
      ["En blanco", result.overall.blank],
      ["Puntuación neta", formatNumber(result.overall.net)],
      ["Porcentaje bruto", `${formatNumber(result.overall.grossPercentage)} %`],
      ["Tiempo empleado", formatMinutes(usedSeconds)],
    ];
    for (const [label, value] of summaryCards) {
      const card = createElement("article", "summary-card");
      card.append(createElement("p", "summary-card__value", String(value)), createElement("p", "summary-card__label", label));
      resultSummary.append(card);
    }
    blockResults.replaceChildren(createResultTable(result.byBlock, (id) => `${id} · ${data.indexes.blocksById.get(id)?.title ?? id}`));
    topicResults.replaceChildren(createResultTable(result.byTopic, (id) => `${id} · ${data.indexes.topicsById.get(id)?.title ?? id}`));
    reviewNode.replaceChildren();
    for (const item of result.review) {
      const card = createElement("article", "exam-review-card");
      card.append(createElement("h4", "", item.question.statement));
      card.append(createElement("p", "", `Tu respuesta: ${selectedText(item.question, item.selectedOption)}`));
      card.append(createElement("p", "", `Respuesta correcta: ${selectedText(item.question, item.question.correct_option)}`));
      card.append(createElement("p", "", item.question.feedback?.correct || "Sin feedback disponible."));
      const sourceTitle = createElement("h5", "", "Fuente");
      card.append(sourceTitle, sourceDetails(item.question));
      const actions = createElement("div", "action-row");
      const doubt = createElement("button", "button button--secondary", "Dudé");
      doubt.type = "button";
      doubt.addEventListener("click", () => updateExamReinforcement(state, item.question, item, "doubt", doubt));
      const add = createElement("button", "button button--secondary", "Añadir a refuerzo");
      add.type = "button";
      add.addEventListener("click", () => updateExamReinforcement(state, item.question, item, "manual", add));
      actions.append(doubt, add);
      card.append(actions);
      if (item.question.isDemo) card.append(createElement("p", "exam-flagged", "Contenido ficticio de demostración; no oficial."));
      reviewNode.append(card);
    }
    setStatus(reinforcementError || (timedOut ? "Tiempo agotado. El examen se ha finalizado y corregido." : "Examen finalizado y corregido."), reinforcementError ? "error" : "success");
    document.querySelector("#exam-results-title")?.focus();
  }

  function finishExam(timedOut = false) {
    if (!active) return;
    const finishedAt = Date.now();
    stopTimer();
    const completed = active;
    active = null;
    const result = calculateExamResults(completed.questions, completed.state.answersByQuestionId, completed.state.config.penaltyPerError);
    const reinforcement = integrateExamErrors(completed.state, result);
    clearActiveExamState(completed.state.isDemo);
    if (finishDialog.open) finishDialog.close();
    renderResults(result, completed.state, completed.questions, finishedAt, timedOut, reinforcement.saved ? null : reinforcement.error);
  }

  function requestFinish() {
    const blanks = active.questions.filter((question) => !isAnswered(question.id)).length;
    if (blanks === 0) {
      finishExam(false);
      return;
    }
    const flagged = active.state.flaggedQuestionIds.length;
    finishMessage.textContent = `Hay ${blanks} pregunta${blanks === 1 ? "" : "s"} en blanco${flagged ? ` y ${flagged} marcada${flagged === 1 ? "" : "s"} para revisión` : ""}.`;
    if (typeof finishDialog.showModal === "function") {
      finishDialog.showModal();
    } else if (window.confirm(`${finishMessage.textContent} ¿Deseas finalizar?`)) {
      finishExam(false);
    }
  }

  function resolveSavedQuestions(state) {
    const byReference = new Map(data.questions.map((question) => [`${question.collection}:${question.id}`, question]));
    const questions = [];
    for (const reference of state.questionRefs) {
      const question = byReference.get(`${reference.collection}:${reference.id}`);
      if (!question || question.isDemo !== reference.isDemo || question.block_id !== reference.blockId || question.topic_id !== reference.topicId) {
        return { error: `No se puede recuperar ${reference.id}: ya no coincide con los datos cargados.` };
      }
      if (!isQuestionEligible(question, state.config)) {
        return { error: `No se puede recuperar ${reference.id}: ya no cumple la modalidad guardada.` };
      }
      const optionIds = question.options.map((option) => option.id);
      const savedOrder = state.optionOrderByQuestionId[question.id];
      if (!Array.isArray(savedOrder) || savedOrder.length !== optionIds.length || new Set(savedOrder).size !== optionIds.length || savedOrder.some((id) => !optionIds.includes(id))) {
        return { error: `No se puede recuperar ${reference.id}: el orden de opciones no es válido.` };
      }
      questions.push(question);
    }
    return { questions };
  }

  function resumeExam(state) {
    const resolved = resolveSavedQuestions(state);
    if (resolved.error) {
      setStatus(resolved.error, "error");
      return;
    }
    active = { state, questions: resolved.questions };
    if (remainingSeconds() <= 0) {
      finishExam(true);
      return;
    }
    renderActiveExam();
    startTimer();
    setStatus("Examen recuperado. El tiempo restante se ha calculado con la hora real.", "success");
  }

  function renderRecoveryOptions() {
    recoveryOptions.replaceChildren();
    const candidates = [false];
    if (data.demoEnabled) candidates.push(true);
    let count = 0;
    for (const isDemo of candidates) {
      const loaded = loadActiveExamState(isDemo);
      if (!loaded.valid) continue;
      count += 1;
      const item = createElement("article", "summary-card");
      item.append(createElement("p", "", `${isDemo ? "Sesión ficticia" : "Examen real"} pendiente: ${modeLabel(loaded.state.config.mode)}.`));
      const resume = createElement("button", "button", "Reanudar");
      resume.type = "button";
      resume.addEventListener("click", () => resumeExam(loaded.state));
      const discard = createElement("button", "button button--secondary", "Descartar");
      discard.type = "button";
      discard.addEventListener("click", () => {
        if (!window.confirm("¿Descartar este examen pendiente?")) return;
        clearActiveExamState(isDemo);
        renderRecoveryOptions();
      });
      const actions = createElement("div", "action-row");
      actions.append(resume, discard);
      item.append(actions);
      recoveryOptions.append(item);
    }
    recovery.hidden = count === 0;
  }

  function startNewExam(modeOverride = null) {
    const config = getConfig(modeOverride);
    const selection = selectExamQuestions(data.questions, config);
    if (selection.errors) {
      setStatus(selection.errors.join(" "), "error");
      return;
    }
    const isDemo = config.mode === EXAM_MODES.DEMO;
    const pending = loadActiveExamState(isDemo);
    if (pending.valid && !window.confirm("Hay un examen pendiente de este tipo. ¿Deseas descartarlo e iniciar uno nuevo?")) return;
    if (pending.valid) clearActiveExamState(isDemo);
    if (selection.quotas) Object.assign(config, selection.quotas);
    active = {
      state: createActiveExamState({ config, questions: selection.questions, optionOrderByQuestionId: selection.optionOrderByQuestionId, isDemo }),
      questions: selection.questions,
    };
    persist();
    renderActiveExam();
    startTimer();
    setStatus(`${modeLabel(config.mode)} iniciado. La corrección se mostrará solo al finalizar.`, "success");
  }

  function startDemoSession() {
    const preview = getConfig(EXAM_MODES.DEMO);
    const available = getExamAvailability(data.questions, preview).demo.length;
    if (available === 0) {
      setStatus("No hay preguntas ficticias activas para iniciar la sesión de demostración.", "error");
      return;
    }
    if (preview.questionCount > available) {
      questionCount.value = String(available);
      setStatus(`La sesión ficticia se ajustará a sus ${available} preguntas disponibles.`, "info");
    }
    startNewExam(EXAM_MODES.DEMO);
  }

  for (const block of data.syllabus.blocks) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "exam-block";
    input.value = block.id;
    input.checked = true;
    input.addEventListener("change", renderAvailability);
    label.append(input, document.createTextNode(`${block.id} · ${block.title}`));
    blockContainer.append(label);
  }
  if (data.demoEnabled) demoStart.hidden = false;
  modeSelect.addEventListener("change", renderAvailability);
  questionCount.addEventListener("input", renderAvailability);
  boePercentage.addEventListener("input", renderAvailability);
  duration.addEventListener("input", renderAvailability);
  penalty.addEventListener("input", renderAvailability);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    startNewExam();
  });
  demoStart.addEventListener("click", startDemoSession);
  cancelFinish.addEventListener("click", () => finishDialog.close());
  confirmFinish.addEventListener("click", () => finishExam(false));
  newExamButton.addEventListener("click", () => {
    resultsNode.hidden = true;
    form.hidden = false;
    form.querySelector("select")?.focus();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && active) updateTimer();
  });
  renderAvailability();
  renderRecoveryOptions();
}
