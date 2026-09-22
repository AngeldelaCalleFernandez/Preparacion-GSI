import { getAnalyticsSummary } from "./analytics-storage.js?gsi2";
import { getReinforcementSummary } from "./reinforcement-storage.js?gsi2";
import { WRITTEN_KEY } from "./written-practice.js?gsi2";
import { createElement } from "./ui.js?gsi2";

const DATE_FORMAT = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" });

function appendTextList(parent, items, ordered = false, className = "") {
  const list = createElement(ordered ? "ol" : "ul", className);
  for (const item of items || []) list.append(createElement("li", "", item));
  parent.append(list);
  return list;
}

function formatDate(value) {
  const timestamp = Date.parse(value || "");
  return Number.isFinite(timestamp) ? DATE_FORMAT.format(new Date(timestamp)) : "Sin datos";
}

function topicLabel(topic) {
  const locator = topic?.content?.raw?.find((entry) => entry.locator)?.locator || topic?.id || "Tema";
  return `${locator} · ${topic?.title || "Tema no disponible"}`;
}

function topicLink(topic) {
  const link = createElement("a", "", topicLabel(topic));
  link.href = `#temario/${topic.id}`;
  return link;
}

function topicList(topicIds, data) {
  const list = createElement("ul", "study-plan-topic-list");
  for (const topicId of topicIds || []) {
    const item = createElement("li");
    item.append(topicLink(data.indexes.topicsById.get(topicId)));
    list.append(item);
  }
  return list;
}

export function getAvailabilityAdvice(plan, availabilityId) {
  return plan.availability.find((item) => item.id === availabilityId) || plan.availability.find((item) => item.id === "8-12") || plan.availability[0];
}

export function findMissingTopicIds(plan, topicsById) {
  const known = topicsById instanceof Map ? topicsById : new Map((topicsById || []).map((topic) => [topic.id, topic]));
  const referenced = plan.phases.flatMap((phase) => [...(phase.topic_ids || []), ...(phase.review_topic_ids || [])]);
  return [...new Set(referenced.filter((topicId) => !known.has(topicId)))];
}

function renderAvailability(plan) {
  const select = document.querySelector("#study-plan-availability");
  const result = document.querySelector("#study-plan-availability-result");
  for (const item of plan.availability) {
    const option = createElement("option", "", item.label);
    option.value = item.id;
    option.selected = item.id === "8-12";
    select.append(option);
  }
  const update = () => { result.textContent = getAvailabilityAdvice(plan, select.value).advice; };
  select.addEventListener("change", update);
  update();
}

function renderMethod(plan) {
  const root = document.querySelector("#study-plan-method");
  plan.topic_method.forEach((step, index) => {
    const card = createElement("article", "study-plan-step");
    card.append(
      createElement("p", "study-plan-step__number", String(index + 1).padStart(2, "0")),
      createElement("h3", "", step.title),
      createElement("p", "", step.description),
    );
    root.append(card);
  });

  const law = plan.law_study;
  const lawRoot = document.querySelector("#study-plan-law");
  lawRoot.append(createElement("h2", "", law.title), createElement("p", "", law.answer), createElement("p", "", law.guidance));
  lawRoot.append(createElement("h3", "", "La normativa oficial sirve para"));
  appendTextList(lawRoot, law.official_uses);
  lawRoot.append(createElement("h3", "", "Jerarquía recomendada"));
  appendTextList(lawRoot, law.hierarchy, true, "study-plan-hierarchy");
  const example = createElement("p", "study-plan-example");
  example.append(createElement("strong", "", "Ejemplo: "), document.createTextNode(law.example));
  lawRoot.append(example);
}

function renderWeek(plan) {
  const root = document.querySelector("#study-plan-week");
  for (const entry of plan.week) {
    const card = createElement("article", "study-plan-day");
    card.append(createElement("h3", "", entry.day), createElement("p", "study-plan-day__focus", entry.focus));
    appendTextList(card, entry.tasks);
    root.append(card);
  }
}

function renderDiagram(items) {
  const list = createElement("ol", "study-plan-diagram");
  list.setAttribute("aria-label", items.join("; después "));
  for (const item of items) list.append(createElement("li", "", item));
  return list;
}

function renderPhases(plan, data) {
  const root = document.querySelector("#study-plan-phases");
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + block.topics.length, 0);
  for (const phase of plan.phases) {
    const details = createElement("details", "block-card study-plan-phase");
    if (phase.number === 1) details.open = true;
    const summary = createElement("summary");
    summary.append(
      createElement("span", "study-plan-phase__number", `Fase ${phase.number}`),
      createElement("span", "", `${phase.title} · ${phase.months}`),
    );
    const body = createElement("div", "study-plan-phase__body");
    body.append(createElement("p", "study-plan-phase__objective", phase.objective));
    if (phase.scope === "all-topics") {
      const scope = createElement("p", "study-plan-scope", `Alcance: completar los ${topicCount} temas del programa oficial.`);
      const link = createElement("a", "", "Revisar el temario completo");
      link.href = "#temario";
      body.append(scope, link);
    }
    if (phase.topic_ids?.length) {
      body.append(createElement("h3", "", "Temas oficiales prioritarios"), topicList(phase.topic_ids, data));
    }
    if (phase.review_topic_ids?.length) {
      body.append(createElement("h3", "", "Temas que se retoman y conectan"), topicList(phase.review_topic_ids, data));
    }
    if (phase.prerequisites?.length) {
      body.append(createElement("h3", "", "Conceptos previos recomendados"));
      const prereqs = createElement("div", "study-plan-prerequisites");
      for (const item of phase.prerequisites) prereqs.append(createElement("p", "", item));
      body.append(prereqs);
    }
    for (const diagram of phase.diagrams || []) body.append(renderDiagram(diagram));
    body.append(createElement("h3", "", "Objetivos para avanzar"));
    appendTextList(body, phase.goals);
    body.append(createElement("p", "study-plan-note", phase.note));
    details.append(summary, body);
    root.append(details);
  }
}

function renderProgression(selector, entries) {
  const root = document.querySelector(selector);
  for (const entry of entries) {
    const card = createElement("article", "study-plan-progress-card");
    card.append(createElement("p", "study-plan-progress-card__months", `Meses ${entry.months}`), createElement("p", "", entry.practice));
    if (entry.example) {
      const example = createElement("p", "study-plan-example");
      example.append(createElement("strong", "", "Ejemplo: "), document.createTextNode(entry.example));
      card.append(example);
    }
    root.append(card);
  }
}

function renderReadiness(plan) {
  const statuses = document.querySelector("#study-plan-statuses");
  for (const status of plan.readiness.statuses) statuses.append(createElement("span", "pill", status));
  const checklist = document.querySelector("#study-plan-readiness");
  const result = document.querySelector("#study-plan-readiness-result");
  const inputs = plan.readiness.checklist.map((text, index) => {
    const label = createElement("label");
    const input = createElement("input");
    input.type = "checkbox";
    input.id = `study-plan-check-${index + 1}`;
    label.htmlFor = input.id;
    label.append(input, document.createTextNode(text));
    checklist.append(label);
    return input;
  });
  const update = () => {
    const checked = inputs.filter((input) => input.checked).length;
    result.textContent = checked === inputs.length
      ? "Has cubierto los criterios orientativos para cerrar provisionalmente el tema. Programa ahora sus repasos."
      : `${checked} de ${inputs.length} criterios cubiertos. No hay un porcentaje fijo obligatorio.`;
  };
  inputs.forEach((input) => input.addEventListener("change", update));
  update();
}

function renderMinimumAndMistakes(plan) {
  const minimum = document.querySelector("#study-plan-minimum");
  minimum.append(createElement("p", "", plan.minimum_mode.sessions), createElement("h3", "", "Prioridades"));
  appendTextList(minimum, plan.minimum_mode.priorities, true);
  minimum.append(createElement("p", "study-plan-rule", plan.minimum_mode.message));

  const mistakes = document.querySelector("#study-plan-mistakes");
  for (const mistake of plan.mistakes) {
    const card = createElement("article", "study-plan-warning");
    card.append(createElement("span", "study-plan-warning__mark", "!"), createElement("p", "", mistake));
    mistakes.append(card);
  }
}

function mostRecent(items, field) {
  return [...items].sort((left, right) => String(right[field] || "").localeCompare(String(left[field] || "")))[0] || null;
}

function readWrittenPractice(data) {
  try {
    const state = JSON.parse(window.localStorage.getItem(WRITTEN_KEY) || "null");
    if (!state) return { value: "Sin práctica", detail: "Todavía no hay un supuesto guardado." };
    const item = data.practice?.cases?.find((entry) => entry.id === state.caseId);
    const date = state.finishedAt || state.startedAt;
    return {
      value: state.finishedAt ? formatDate(date) : "En curso",
      detail: `${item?.title || "Supuesto práctico"} · ${state.finishedAt ? "terminado" : `iniciado el ${formatDate(date)}`}.`,
    };
  } catch {
    return { value: "No disponible", detail: "No se pudo leer la práctica guardada." };
  }
}

function newQuestionsThisWeek(store, cutoff) {
  const firstSeen = new Map();
  for (const attempt of store.attempts || []) {
    const key = `${attempt.collection || attempt.origin || ""}:${attempt.questionId}`;
    const previous = firstSeen.get(key);
    if (!previous || attempt.answeredAt < previous) firstSeen.set(key, attempt.answeredAt);
  }
  return [...firstSeen.values()].filter((value) => value >= cutoff).length;
}

export function buildStudyDashboard(data, now = new Date()) {
  const from = new Date(now);
  from.setDate(from.getDate() - 7);
  const cutoff = from.toISOString();
  const weekly = getAnalyticsSummary(data.demoEnabled, { from: cutoff });
  const all = getAnalyticsSummary(data.demoEnabled);
  const reinforcement = getReinforcementSummary(data.demoEnabled, now);
  const weakest = [...all.byTopic]
    .filter((item) => item.answered >= 5 && Number.isFinite(item.responseAccuracy))
    .sort((left, right) => left.responseAccuracy - right.responseAccuracy || left.id.localeCompare(right.id))[0];
  const weakestTopic = weakest ? data.indexes.topicsById.get(weakest.id) : null;
  const lastExam = mostRecent((all.store.sessions || []).filter((session) => session.sessionType === "exam"), "finishedAt");
  const written = readWrittenPractice(data);
  return [
    { label: "Horas esta semana", value: "No registradas", detail: "La aplicación registra actividad, no tiempo total de estudio." },
    { label: "Temas estudiados", value: String(weekly.byTopic.filter((item) => item.answered > 0).length), detail: "Con preguntas respondidas en los últimos 7 días." },
    { label: "Preguntas nuevas", value: String(newQuestionsThisWeek(all.store, cutoff)), detail: "Vistas por primera vez en el historial detallado de los últimos 7 días." },
    { label: "Porcentaje de acierto", value: weekly.metric.responseAccuracy === null ? "Sin datos" : `${Math.round(weekly.metric.responseAccuracy)} %`, detail: "Sobre respuestas emitidas en los últimos 7 días." },
    { label: "Errores pendientes", value: String(reinforcement.due), detail: "Repasos de refuerzo vencidos o ya disponibles." },
    { label: "Tema más débil", value: weakestTopic ? (weakestTopic.content?.raw?.find((entry) => entry.locator)?.locator || weakest.id) : "Muestra insuficiente", detail: weakestTopic ? weakestTopic.title : "Se necesitan al menos 5 respuestas por tema." },
    { label: "Último práctico", value: written.value, detail: written.detail },
    { label: "Último test acumulativo", value: lastExam ? formatDate(lastExam.finishedAt) : "Sin simulacro", detail: lastExam ? "Última sesión de examen terminada." : "Aún no hay una sesión de examen terminada." },
  ];
}

function renderDashboard(data) {
  const root = document.querySelector("#study-plan-dashboard");
  root.replaceChildren();
  for (const item of buildStudyDashboard(data)) {
    const card = createElement("article", "analytics-card");
    card.append(createElement("h3", "", item.label), createElement("p", "analytics-card-value", item.value), createElement("p", "form-help", item.detail));
    root.append(card);
  }
}

function renderSources(data) {
  const root = document.querySelector("#study-plan-sources");
  const title = createElement("h2", "", "Fuentes, alcance y actualización");
  title.id = "study-plan-sources-title";
  root.append(title);
  appendTextList(root, [
    "El programa oficial determina el alcance de los 57 temas.",
    "La normativa y documentación oficial vigentes prevalecen ante cualquier discrepancia.",
    "Este plan organiza el estudio, pero no garantiza un resultado ni sustituye la convocatoria.",
    "El formato del examen puede cambiar en futuras convocatorias.",
  ]);
  const dates = createElement("p", "form-help", `Programa revisado: ${formatDate(data.syllabus.metadata.updated_at)} · Fuentes actualizadas: ${formatDate(data.sources.metadata.updated_at)} · Avisos revisados: ${formatDate(data.updates.metadata.updated_at)}.`);
  const actions = createElement("div", "action-row");
  const programSource = data.indexes.sourcesById.get(data.syllabus.metadata.official_program_source_id);
  if (programSource?.url) {
    const official = createElement("a", "button button--secondary", "Abrir programa oficial");
    official.href = programSource.url;
    official.target = "_blank";
    official.rel = "noopener noreferrer";
    actions.append(official);
  }
  const exam = createElement("a", "button button--secondary", "Consultar formato configurado");
  exam.href = "#examen";
  actions.append(exam);
  root.append(dates, actions);
}

export function initStudyPlan(data) {
  const plan = data.studyPlan;
  const missing = findMissingTopicIds(plan, data.indexes.topicsById);
  if (missing.length) throw new Error(`El plan de estudio referencia temas inexistentes: ${missing.join(", ")}.`);
  renderAvailability(plan);
  renderMethod(plan);
  renderWeek(plan);
  renderPhases(plan, data);
  renderProgression("#study-plan-tests", plan.test_progression);
  renderProgression("#study-plan-practice", plan.practical_progression);
  renderReadiness(plan);
  renderMinimumAndMistakes(plan);
  renderDashboard(data);
  renderSources(data);
  for (const link of document.querySelectorAll("[data-plan-target]")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`#${link.dataset.planTarget}`)?.scrollIntoView({ block: "start" });
    });
  }
  window.addEventListener("gsi:routechange", (event) => {
    if (event.detail?.route === "plan") renderDashboard(data);
  });
}
