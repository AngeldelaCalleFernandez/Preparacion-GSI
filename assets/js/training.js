import { describeQuestionSource } from "./data-service.js";
import { clearAllResponses, clearDemoResponses, getProgressSummary, saveResponse } from "./storage.js";
import { applyStoredReinforcementEvents, createReinforcementEvent } from "./reinforcement-storage.js";
import { createElement, setStatus } from "./ui.js";

function originLabel(question) {
  if (question.isDemo) return "IA ficticia (demostración)";
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
  return card;
}

function feedbackFor(question, selectedOption, correct) {
  if (correct) return question.feedback?.correct || "Respuesta correcta.";
  return question.feedback?.incorrect_options?.[selectedOption] || question.feedback?.correct || "Consulta la respuesta correcta y la fuente indicada.";
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
  const state = { questions: [], index: 0, answered: false };

  function updateProgressSummary() {
    const summary = getProgressSummary();
    if (summary.total === 0) {
      progressSummary.textContent = "Aún no hay respuestas guardadas.";
      return;
    }
    progressSummary.textContent = `${summary.total} respuestas guardadas: ${summary.real} reales y ${summary.demo} de demostración.`;
  }

  function renderTopics() {
    const blockId = blockSelect.value;
    topicSelect.replaceChildren(new Option("Todos los temas", ""));
    const block = data.indexes.blocksById.get(blockId);
    topicSelect.disabled = !block;
    if (!block) return;
    for (const topic of block.topics) {
      topicSelect.add(new Option(`Tema ${topic.number}. ${topic.title}`, topic.id));
    }
  }

  function availableQuestions() {
    return data.questions.filter((question) => {
      if (!question.is_active) return false;
      if (blockSelect.value && question.block_id !== blockSelect.value) return false;
      if (topicSelect.value && question.topic_id !== topicSelect.value) return false;
      if (originSelect.value === "manual" && question.origin !== "manual" && question.origin !== "adapted") return false;
      if (originSelect.value && originSelect.value !== "manual" && question.origin !== originSelect.value) return false;
      return true;
    });
  }

  function updateAvailability() {
    const count = availableQuestions().length;
    quantityInput.max = Math.max(count, 1);
    if (Number(quantityInput.value) > count && count > 0) quantityInput.value = String(count);
    availability.textContent = count === 0
      ? "No hay preguntas activas que coincidan con esta selección. Prueba el modo demostración con ?demo=1."
      : `${count} pregunta${count === 1 ? "" : "s"} disponible${count === 1 ? "" : "s"} para esta selección.`;
  }

  function renderCompleted() {
    session.replaceChildren();
    const heading = createElement("h2", "", "Entrenamiento finalizado");
    const text = createElement("p", "", `Has respondido ${state.questions.length} pregunta${state.questions.length === 1 ? "" : "s"}.`);
    const restart = createElement("button", "button", "Configurar otro entrenamiento");
    restart.type = "button";
    restart.addEventListener("click", () => {
      session.hidden = true;
      form.querySelector("button[type='submit']")?.focus();
    });
    session.append(heading, text, restart);
  }

  function renderQuestion() {
    const question = state.questions[state.index];
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
      button.addEventListener("click", () => answerQuestion(option.id, button));
      options.append(button);
    }
    session.append(options, createSourceCard(question, data.indexes));
  }

  function answerQuestion(selectedOption, selectedButton) {
    if (state.answered) return;
    state.answered = true;
    const question = state.questions[state.index];
    const correct = selectedOption === question.correct_option;
    for (const button of session.querySelectorAll(".option-button")) {
      button.disabled = true;
      if (button.dataset.optionId === question.correct_option) button.classList.add("option-button--correct");
      if (button === selectedButton && !correct) button.classList.add("option-button--incorrect");
    }
    const correctOption = question.options.find((option) => option.id === question.correct_option);
    const panel = createElement("section", `answer-panel${correct ? "" : " answer-panel--incorrect"}`);
    panel.append(createElement("h2", "", correct ? "Respuesta correcta" : "Respuesta incorrecta"));
    panel.append(createElement("p", "", `La opción correcta es ${correctOption.id}: ${correctOption.text}`));
    panel.append(createElement("p", "", feedbackFor(question, selectedOption, correct)));
    const savedResponse = saveResponse(question, selectedOption, correct);
    const responseRecord = savedResponse.record;
    const responseEvent = createReinforcementEvent(`training:${responseRecord.responseId}:response`, "response", question, {
      result: correct ? "correct" : "incorrect",
      occurredAt: responseRecord.answeredAt,
    });
    function saveReinforcement(events, button, message) {
      const result = applyStoredReinforcementEvents(question.isDemo, events);
      if (!result.saved) {
        setStatus(result.error || "No se pudo guardar el refuerzo en este navegador.", "error");
        return;
      }
      button.disabled = true;
      setStatus(message, "success");
    }
    if (!correct) {
      const reinforcement = applyStoredReinforcementEvents(question.isDemo, [responseEvent]);
      if (!reinforcement.saved) setStatus(reinforcement.error || "La respuesta se corrigió, pero no se pudo actualizar el refuerzo.", "error");
    }
    const reinforcementActions = createElement("div", "action-row");
    const doubt = createElement("button", "button button--secondary", "Dudé");
    doubt.type = "button";
    doubt.addEventListener("click", () => {
      const assessment = createReinforcementEvent(`training:${responseRecord.responseId}:assessment:doubt`, "assessment", question, { assessment: "doubt" });
      saveReinforcement([responseEvent, assessment], doubt, "La pregunta se ha programado para refuerzo por duda.");
    });
    const add = createElement("button", "button button--secondary", "Añadir a refuerzo");
    add.type = "button";
    add.addEventListener("click", () => {
      const manual = createReinforcementEvent(`training:${responseRecord.responseId}:manual`, "manual", question);
      saveReinforcement([manual], add, "La pregunta se ha añadido al refuerzo.");
    });
    reinforcementActions.append(doubt, add);
    panel.append(reinforcementActions);
    const next = createElement("button", "button", state.index + 1 === state.questions.length ? "Finalizar entrenamiento" : "Siguiente pregunta");
    next.type = "button";
    next.addEventListener("click", () => {
      if (state.index + 1 === state.questions.length) {
        renderCompleted();
        return;
      }
      state.index += 1;
      state.answered = false;
      renderQuestion();
    });
    panel.append(next);
    session.append(panel);
    if (!savedResponse.saved) {
      setStatus("La respuesta se corrigió, pero no se pudo guardar localmente en este navegador.", "error");
    }
    updateProgressSummary();
    next.focus();
  }

  for (const block of data.syllabus.blocks) {
    blockSelect.add(new Option(`${block.id} · ${block.title}`, block.id));
  }
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
    setStatus("Entrenamiento iniciado. Elige una opción para recibir corrección inmediata.", "success");
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
}
