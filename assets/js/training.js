import { describeQuestionSource } from "./data-service.js";
import { clearAllResponses, clearDemoResponses, getProgressSummary, saveResponse } from "./storage.js";
import {
  applyStoredReinforcementEvents,
  createReinforcementEvent,
  loadReinforcementStore,
} from "./reinforcement-storage.js";
import {
  createAnalyticsAnnotationEvent,
  createAnalyticsAttemptEvent,
  createAnalyticsSession,
  createAnalyticsSessionEvent,
} from "./analytics-events.js";
import {
  applyStoredAnalyticsEvents,
  loadActiveTrainingSession,
  saveActiveTrainingSession,
} from "./analytics-storage.js";
import { createElement, setStatus } from "./ui.js";

function originLabel(question) {
  if (question.isDemo) {
    const simulated = { official: "Oficial", ai: "IA", manual: "Manual", adapted: "Adaptada" }[question.origin] || question.origin;
    return `Demostración ficticia · origen simulado: ${simulated}`;
  }
  if (question.origin === "official") return "Oficial";
  if (question.origin === "ai") return "IA";
  return "Manual o adaptada";
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function sessionId() {
  return globalThis.crypto?.randomUUID?.() ?? `TRAIN-SESSION-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function questionKey(question) {
  return `${question.collection}:${question.id}`;
}

function createSourceCard(question, indexes) {
  const source = describeQuestionSource(question, indexes);
  const card = createElement("section", "source-card");
  card.setAttribute("aria-label", "Fuente de la pregunta");
  card.append(createElement("h3", "", "Fuente"));
  const title = source.url ? document.createElement("a") : createElement("span");
  title.textContent = source.title;
  if (source.url) {
    title.href = source.url;
    title.target = "_blank";
    title.rel = "noreferrer";
  }
  const details = createElement("p", "");
  details.append(title, document.createTextNode(` · ${source.publisher} · Estado: ${source.officialStatus} · ${source.locator}`));
  card.append(details);
  if (question.isDemo) card.append(createElement("p", "muted", "Fuente ficticia de demostración; no es una fuente oficial ni un banco real."));
  return card;
}

function feedbackFor(question, selectedOption, correct) {
  if (correct) return question.feedback?.correct || "Respuesta correcta.";
  return question.feedback?.incorrect_options?.[selectedOption] || question.feedback?.correct || "Consulta la respuesta correcta y la fuente indicada.";
}

function formatReviewDate(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "sin fecha disponible";
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(date);
}

export function initTraining(data) {
  const form = document.querySelector("#training-form");
  const blockSelect = document.querySelector("#training-block");
  const topicSelect = document.querySelector("#training-topic");
  const originSelect = document.querySelector("#training-origin");
  const quantityInput = document.querySelector("#training-quantity");
  const availability = document.querySelector("#training-availability");
  const session = document.querySelector("#training-session");
  const progressSummary = document.querySelector("#storage-summary");
  const clearDemoButton = document.querySelector("#clear-demo-progress");
  const clearAllButton = document.querySelector("#clear-all-progress");
  const state = {
    questions: [],
    index: 0,
    answered: false,
    trainingSessionId: null,
    startedAt: null,
    isDemo: false,
    responsesByQuestionKey: {},
    questionStartedAtByQuestionKey: {},
    finished: false,
  };

  function updateProgressSummary() {
    const summary = getProgressSummary();
    progressSummary.textContent = summary.total === 0
      ? "Aún no hay respuestas guardadas."
      : `${summary.total} respuestas guardadas: ${summary.real} reales y ${summary.demo} de demostración.`;
  }

  function renderTopics() {
    const block = data.indexes.blocksById.get(blockSelect.value);
    topicSelect.replaceChildren(new Option("Todos los temas", ""));
    topicSelect.disabled = !block;
    if (!block) return;
    for (const topic of block.topics) topicSelect.add(new Option(`Tema ${topic.number}. ${topic.title}`, topic.id));
  }

  function availableQuestions() {
    return data.questions.filter((question) => {
      if (!question.is_active || Boolean(question.isDemo) !== Boolean(data.demoEnabled)) return false;
      if (blockSelect.value && question.block_id !== blockSelect.value) return false;
      if (topicSelect.value && question.topic_id !== topicSelect.value) return false;
      if (originSelect.value === "manual" && !["manual", "adapted"].includes(question.origin)) return false;
      if (originSelect.value && originSelect.value !== "manual" && question.origin !== originSelect.value) return false;
      return true;
    });
  }

  function updateAvailability() {
    const count = availableQuestions().length;
    quantityInput.max = Math.max(count, 1);
    if (Number(quantityInput.value) > count && count > 0) quantityInput.value = String(count);
    availability.textContent = count === 0
      ? "No hay preguntas activas que coincidan con esta selección."
      : `${count} pregunta${count === 1 ? "" : "s"} disponible${count === 1 ? "" : "s"} para esta selección.`;
  }

  function persistActiveContext() {
    if (!state.trainingSessionId) return { saved: true };
    return saveActiveTrainingSession(state.isDemo, {
      sessionId: state.trainingSessionId,
      isDemo: state.isDemo,
      startedAt: state.startedAt,
      lastActivityAt: new Date().toISOString(),
      configuredQuestions: state.questions.length,
      questionRefs: state.questions.map((question) => ({ id: question.id, collection: question.collection })),
      currentIndex: state.index,
      responsesByQuestionKey: state.responsesByQuestionKey,
      questionStartedAtByQuestionKey: state.questionStartedAtByQuestionKey,
    });
  }

  function analyticsAttempt(question, response) {
    return createAnalyticsAttemptEvent(`training:${response.responseId}:analytics`, question, {
      sessionId: state.trainingSessionId,
      sessionType: "training",
      selectedOption: response.selectedOption,
      correct: response.correct,
      answeredAt: response.answeredAt,
      durationSeconds: response.durationSeconds,
    });
  }

  function responseFor(question) {
    return state.responsesByQuestionKey[questionKey(question)] || null;
  }

  function reinforcementRecord(question) {
    return loadReinforcementStore(question.isDemo).store.records[questionKey(question)] || null;
  }

  function nextReviewText(question) {
    const record = reinforcementRecord(question);
    return record?.nextReviewAt ? `Próxima revisión: ${formatReviewDate(record.nextReviewAt)}.` : "Próxima revisión: sin fecha disponible.";
  }

  function renderCompleted() {
    session.replaceChildren();
    session.hidden = false;
    const heading = createElement("h2", "", "Entrenamiento finalizado");
    const text = createElement("p", "", `Has respondido ${Object.keys(state.responsesByQuestionKey).length} pregunta${Object.keys(state.responsesByQuestionKey).length === 1 ? "" : "s"}.`);
    const restart = createElement("button", "button", "Configurar otro entrenamiento");
    restart.type = "button";
    restart.addEventListener("click", () => {
      session.hidden = true;
      form.querySelector("button[type='submit']")?.focus();
    });
    session.append(heading, text, restart);
  }

  function annotateAttempt(response, question, changes, suffix) {
    const event = createAnalyticsAnnotationEvent(
      `training:${response.responseId}:annotation:${suffix}`,
      question.isDemo,
      `training:${response.responseId}:analytics`,
      changes,
    );
    return applyStoredAnalyticsEvents(question.isDemo, [event]);
  }

  function saveReinforcement(question, response, kind) {
    if (kind === "doubt" && response.doubted) return { saved: true, duplicate: true };
    if (kind === "manual" && (response.addedToReinforcement || response.automaticReinforcement)) return { saved: true, duplicate: true };
    const responseEvent = createReinforcementEvent(`training:${response.responseId}:response`, "response", question, {
      result: response.correct ? "correct" : "incorrect",
      occurredAt: response.answeredAt,
    });
    const event = kind === "doubt"
      ? createReinforcementEvent(`training:${response.responseId}:assessment:doubt`, "assessment", question, { assessment: "doubt" })
      : createReinforcementEvent(`training:${response.responseId}:manual`, "manual", question);
    const saved = applyStoredReinforcementEvents(question.isDemo, kind === "doubt" ? [responseEvent, event] : [event]);
    if (!saved.saved) return saved;
    const analytics = annotateAttempt(response, question, kind === "doubt" ? { doubted: true } : { addedToReinforcement: true }, kind);
    if (!analytics.saved) return { ...analytics, saved: false };
    if (kind === "doubt") response.doubted = true;
    else response.addedToReinforcement = true;
    const context = persistActiveContext();
    return context.saved ? { saved: true, duplicate: false } : context;
  }

  function renderAnswerPanel(question, response) {
    const correctOption = question.options.find((option) => option.id === question.correct_option);
    const panel = createElement("section", `answer-panel${response.correct ? "" : " answer-panel--incorrect"}`);
    panel.append(createElement("h2", "", response.correct ? "Respuesta correcta" : "Respuesta incorrecta"));
    panel.append(createElement("p", "", `La opción correcta es ${correctOption.id}: ${correctOption.text}`));
    panel.append(createElement("p", "", feedbackFor(question, response.selectedOption, response.correct)));
    const actions = createElement("div", "action-row");
    const doubt = createElement("button", "button button--secondary", response.doubted ? "Duda registrada" : "Dudé");
    doubt.type = "button";
    doubt.disabled = Boolean(response.doubted);
    if (response.doubted) panel.append(createElement("p", "", nextReviewText(question)));
    doubt.addEventListener("click", () => {
      const saved = saveReinforcement(question, response, "doubt");
      if (!saved.saved) {
        setStatus(saved.error || "No se pudo registrar la duda en este navegador.", "error");
        return;
      }
      setStatus(saved.duplicate ? "La duda ya estaba procesada." : "Duda registrada.", "success");
      renderQuestion();
    });
    actions.append(doubt);

    if (response.automaticReinforcement) {
      const automatic = createElement("button", "button button--secondary", "Ya está en refuerzo");
      automatic.type = "button";
      automatic.disabled = true;
      actions.append(automatic);
      panel.append(createElement("p", "muted", "Los errores se incorporan automáticamente al refuerzo; no hace falta añadir esta pregunta de nuevo."));
      panel.append(createElement("p", "", nextReviewText(question)));
    } else {
      const add = createElement("button", "button button--secondary", response.addedToReinforcement ? "Añadida a refuerzo" : "Añadir a refuerzo");
      add.type = "button";
      add.disabled = Boolean(response.addedToReinforcement);
      if (response.addedToReinforcement) panel.append(createElement("p", "", nextReviewText(question)));
      add.addEventListener("click", () => {
        const saved = saveReinforcement(question, response, "manual");
        if (!saved.saved) {
          setStatus(saved.error || "No se pudo añadir la pregunta al refuerzo en este navegador.", "error");
          return;
        }
        setStatus(saved.duplicate ? "La pregunta ya estaba procesada para refuerzo." : "Añadida a refuerzo.", "success");
        renderQuestion();
      });
      actions.append(add);
    }
    panel.append(actions);
    const next = createElement("button", "button", state.index + 1 === state.questions.length ? "Finalizar entrenamiento" : "Siguiente pregunta");
    next.type = "button";
    next.addEventListener("click", () => {
      if (state.index + 1 === state.questions.length) {
        finishTraining();
        return;
      }
      state.index += 1;
      state.answered = false;
      persistActiveContext();
      renderQuestion();
    });
    panel.append(next);
    session.append(panel);
  }

  function renderQuestion() {
    const question = state.questions[state.index];
    if (!question) return;
    const key = questionKey(question);
    const response = responseFor(question);
    state.answered = Boolean(response);
    if (!response && !state.questionStartedAtByQuestionKey[key]) {
      state.questionStartedAtByQuestionKey[key] = new Date().toISOString();
      persistActiveContext();
    }
    session.hidden = false;
    session.replaceChildren();
    session.append(createElement("p", "question-progress", `Pregunta ${state.index + 1} de ${state.questions.length}`));
    session.append(createElement("p", "pill", `${originLabel(question)} · ${question.validation_status}`));
    session.append(createElement("p", "question-statement", question.statement));
    const options = createElement("div", "question-options");
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", "Opciones de respuesta");
    for (const option of question.options) {
      const button = createElement("button", "option-button");
      button.type = "button";
      button.dataset.optionId = option.id;
      button.append(createElement("span", "option-letter", option.id), createElement("span", "", option.text));
      if (response) {
        button.disabled = true;
        if (option.id === question.correct_option) button.classList.add("option-button--correct");
        if (option.id === response.selectedOption && !response.correct) button.classList.add("option-button--incorrect");
      } else {
        button.addEventListener("click", () => answerQuestion(option.id));
      }
      options.append(button);
    }
    session.append(options, createSourceCard(question, data.indexes));
    if (response) renderAnswerPanel(question, response);
  }

  function answerQuestion(selectedOption) {
    const question = state.questions[state.index];
    const key = questionKey(question);
    if (state.responsesByQuestionKey[key]) {
      setStatus("Esta respuesta ya estaba procesada.", "info");
      return;
    }
    const correct = selectedOption === question.correct_option;
    const savedResponse = saveResponse(question, selectedOption, correct);
    const answeredAt = savedResponse.record.answeredAt;
    const startedAt = state.questionStartedAtByQuestionKey[key];
    const response = {
      responseId: savedResponse.record.responseId,
      selectedOption,
      correct,
      answeredAt,
      durationSeconds: Number.isFinite(Date.parse(startedAt)) ? Math.max(0, (Date.now() - Date.parse(startedAt)) / 1000) : null,
      automaticReinforcement: false,
      doubted: false,
      addedToReinforcement: false,
    };
    state.responsesByQuestionKey[key] = response;
    state.answered = true;
    const context = persistActiveContext();
    const analyticsSaved = applyStoredAnalyticsEvents(question.isDemo, [analyticsAttempt(question, response)]);
    if (!correct) {
      const responseEvent = createReinforcementEvent(`training:${response.responseId}:response`, "response", question, { result: "incorrect", occurredAt: answeredAt });
      const reinforcement = applyStoredReinforcementEvents(question.isDemo, [responseEvent]);
      response.automaticReinforcement = reinforcement.saved;
      persistActiveContext();
      if (!reinforcement.saved) setStatus(reinforcement.error || "La respuesta se corrigió, pero no se pudo actualizar el refuerzo.", "error");
    }
    if (!savedResponse.saved) setStatus("La respuesta se corrigió, pero no se pudo guardar localmente en este navegador.", "error");
    else if (!context.saved) setStatus(context.error || "La respuesta se corrigió, pero no se pudo conservar la sesión temporal.", "error");
    else if (!analyticsSaved.saved) setStatus(analyticsSaved.error || "La respuesta se corrigió, pero no se pudo actualizar la estadística.", "error");
    else setStatus("Intento guardado inmediatamente.", "success");
    updateProgressSummary();
    renderQuestion();
    session.querySelector(".answer-panel button")?.focus();
  }

  function finishTraining() {
    if (state.finished || !state.trainingSessionId) return;
    const attempts = state.questions
      .map((question) => ({ question, response: responseFor(question) }))
      .filter((entry) => entry.response)
      .map((entry) => analyticsAttempt(entry.question, entry.response).attempt);
    const summary = createAnalyticsSession({
      sessionId: state.trainingSessionId,
      sessionType: "training",
      isDemo: state.isDemo,
      startedAt: state.startedAt,
      finishedAt: new Date().toISOString(),
      configuredQuestions: state.questions.length,
      attempts,
    });
    const saved = applyStoredAnalyticsEvents(state.isDemo, [createAnalyticsSessionEvent(`training:${state.trainingSessionId}:summary`, summary)]);
    if (!saved.saved) {
      setStatus(saved.error || "El entrenamiento terminó, pero no se pudo guardar su resumen estadístico.", "error");
      return;
    }
    const cleared = saveActiveTrainingSession(state.isDemo, null);
    if (!cleared.saved) setStatus(cleared.error || "El resumen se guardó, pero no se pudo limpiar su contexto temporal.", "error");
    state.finished = true;
    renderCompleted();
  }

  function recoverTrainingContext() {
    const candidates = data.demoEnabled ? [false, true] : [false];
    const byReference = new Map(data.questions.map((question) => [questionKey(question), question]));
    for (const isDemo of candidates) {
      const saved = loadActiveTrainingSession(isDemo);
      if (!saved || !Array.isArray(saved.questionRefs) || typeof saved.sessionId !== "string") continue;
      const questions = saved.questionRefs.map((reference) => byReference.get(`${reference.collection}:${reference.id}`));
      if (questions.length === 0 || questions.some((question) => !question || question.isDemo !== isDemo)) continue;
      state.questions = questions;
      state.index = Math.min(Math.max(Number(saved.currentIndex) || 0, 0), questions.length - 1);
      state.trainingSessionId = saved.sessionId;
      state.startedAt = saved.startedAt;
      state.isDemo = isDemo;
      state.responsesByQuestionKey = saved.responsesByQuestionKey && typeof saved.responsesByQuestionKey === "object" ? saved.responsesByQuestionKey : {};
      state.questionStartedAtByQuestionKey = saved.questionStartedAtByQuestionKey && typeof saved.questionStartedAtByQuestionKey === "object" ? saved.questionStartedAtByQuestionKey : {};
      state.answered = Boolean(responseFor(questions[state.index]));
      renderQuestion();
      setStatus("Entrenamiento recuperado. Los intentos y acciones ya procesados se conservan sin duplicarse.", "success");
      return true;
    }
    return false;
  }

  for (const block of data.syllabus.blocks) blockSelect.add(new Option(`${block.id} · ${block.title}`, block.id));
  blockSelect.addEventListener("change", () => {
    renderTopics();
    updateAvailability();
  });
  topicSelect.addEventListener("change", updateAvailability);
  originSelect.addEventListener("change", updateAvailability);
  quantityInput.addEventListener("input", updateAvailability);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const available = availableQuestions();
    const requested = Number(quantityInput.value);
    if (!Number.isInteger(requested) || requested < 1 || available.length === 0) {
      setStatus("Selecciona al menos una pregunta disponible antes de iniciar el entrenamiento.", "error");
      return;
    }
    const quantity = Math.min(requested, available.length);
    state.questions = shuffle(available).slice(0, quantity);
    state.index = 0;
    state.answered = false;
    state.isDemo = Boolean(state.questions[0]?.isDemo);
    state.trainingSessionId = sessionId();
    state.startedAt = new Date().toISOString();
    state.responsesByQuestionKey = {};
    state.questionStartedAtByQuestionKey = {};
    state.finished = false;
    const saved = persistActiveContext();
    if (!saved.saved) setStatus(saved.error || "No se pudo preparar el contexto temporal del entrenamiento.", "error");
    else setStatus("Entrenamiento iniciado. Elige una opción para recibir corrección inmediata.", "success");
    renderQuestion();
    session.querySelector(".option-button")?.focus();
  });
  clearDemoButton.addEventListener("click", () => {
    if (!window.confirm("¿Borrar solo las respuestas de demostración guardadas en este navegador?")) return;
    const removed = clearDemoResponses();
    setStatus(removed ? "Respuestas demo eliminadas." : "No se pudieron borrar las respuestas demo.", removed ? "success" : "error");
    updateProgressSummary();
  });
  clearAllButton.addEventListener("click", () => {
    if (!window.confirm("¿Borrar todas las respuestas locales guardadas en este navegador?")) return;
    const removed = clearAllResponses();
    setStatus(removed ? "Todas las respuestas locales se han eliminado." : "No se pudieron borrar las respuestas locales.", removed ? "success" : "error");
    updateProgressSummary();
  });
  updateProgressSummary();
  updateAvailability();
  recoverTrainingContext();
}
