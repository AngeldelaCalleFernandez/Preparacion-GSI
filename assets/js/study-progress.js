import {
  STUDY_CHECKS,
  STUDY_STATUSES,
  buildStudyRecommendations,
  filterStudyTopics,
  summarizeStudyProgress,
  topicProgress,
  topicNeedsReview,
} from "./study-progress-engine.js?gsi2";
import { loadStudyProgress, saveTopicProgress } from "./study-progress-storage.js?gsi2";
import { createElement } from "./ui.js?gsi2";

const DATE_FORMAT = new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" });

function planWithOfficialTitles(data) {
  const supportByBlock = new Map(data.studyTrackerPlan.blocks.map((block) => [block.block_id, block.support_url]));
  return {
    ...data.studyTrackerPlan,
    topics: data.studyTrackerPlan.topics.map((entry) => {
      const topic = data.indexes.topicsById.get(entry.topic_id);
      return {
        ...entry,
        title: topic.title,
        blockTitle: topic.blockTitle,
        supportUrl: supportByBlock.get(entry.block_id),
      };
    }),
  };
}

function statusLabel(value) {
  return STUDY_STATUSES.find((status) => status.value === value)?.label || "Pendiente";
}

function weeksLabel(weeks) {
  if (!weeks.length) return "Sin semana asignada";
  return `${weeks.length === 1 ? "Semana" : "Semanas"} ${weeks.join(", ")}`;
}

function formatDate(value) {
  return value ? DATE_FORMAT.format(new Date(`${value}T00:00:00`)) : "Sin fecha";
}

function topicLink(topic, label = `${topic.code} · ${topic.title}`) {
  const link = createElement("a", "", label);
  link.href = `#temario/${topic.topic_id}`;
  return link;
}

function metricCard(label, value, detail) {
  const card = createElement("article", "analytics-card");
  card.append(createElement("h2", "", label), createElement("p", "analytics-card-value", value), createElement("p", "form-help", detail));
  return card;
}

function renderSummary(plan, store) {
  const root = document.querySelector("#study-progress-summary");
  const blocksRoot = document.querySelector("#study-progress-blocks");
  const summary = summarizeStudyProgress(plan, store);
  root.replaceChildren(
    metricCard("Temas trabajados", String(summary.worked), "Con alguna actividad o dato registrado."),
    metricCard("Consolidados", String(summary.completed), "Estado o casilla de consolidación."),
    metricCard("Pendientes", String(summary.pending), "Sin progreso real registrado."),
    metricCard("En curso", String(summary.inProgress), "Marcados expresamente como En curso."),
    metricCard("Avance consolidado", `${summary.percentage} %`, `${summary.completed} de ${summary.total} temas consolidados.`),
  );
  blocksRoot.replaceChildren();
  for (const block of plan.blocks) {
    const item = summary.byBlock[block.block_id];
    const percentage = Math.round((item.completed / item.total) * 100);
    const card = createElement("article", "study-progress-block");
    const progress = createElement("progress");
    progress.max = item.total;
    progress.value = item.completed;
    progress.setAttribute("aria-label", `${block.code}: ${item.completed} de ${item.total} consolidados`);
    card.append(
      createElement("h3", "", `Bloque ${block.code} · ${block.name}`),
      progress,
      createElement("p", "form-help", `${percentage} % consolidado · ${item.worked} trabajados de ${item.total}.`),
    );
    blocksRoot.append(card);
  }
}

function progressBar(label, value, total, detail) {
  const item = createElement("article", "study-progress-quick-bar");
  const heading = createElement("div", "study-progress-quick-bar__heading");
  heading.append(createElement("strong", "", label), createElement("span", "", `${Math.round((value / total) * 100)} %`));
  const progress = createElement("progress");
  progress.max = total;
  progress.value = value;
  progress.setAttribute("aria-label", `${label}: ${value} de ${total}`);
  item.append(heading, progress, createElement("p", "form-help", detail));
  return item;
}

function renderRoadmap(plan, store, onSelect) {
  const barsRoot = document.querySelector("#study-progress-quick-bars");
  const legendRoot = document.querySelector("#study-progress-legend");
  const roadmapRoot = document.querySelector("#study-progress-roadmap");
  const summary = summarizeStudyProgress(plan, store);
  const recommendations = buildStudyRecommendations(plan, store);
  const nextCodes = new Set(recommendations.next.map((topic) => topic.code));
  const reviewCodes = new Set(recommendations.reviews.map((topic) => topic.code));

  barsRoot.replaceChildren(
    progressBar("Trabajo iniciado", summary.worked, summary.total, `${summary.worked} de ${summary.total} temas tienen progreso real.`),
    progressBar("Temario consolidado", summary.completed, summary.total, `${summary.completed} de ${summary.total} temas están consolidados.`),
  );

  legendRoot.replaceChildren();
  for (const item of STUDY_STATUSES) {
    const legend = createElement("span", `study-progress-legend__item is-${item.value}`, item.label);
    legendRoot.append(legend);
  }
  legendRoot.append(createElement("span", "study-progress-legend__item is-due", "Repaso pendiente"));

  roadmapRoot.replaceChildren();
  for (const block of plan.blocks) {
    const blockTopics = plan.topics.filter((topic) => topic.block_id === block.block_id);
    const blockSummary = summary.byBlock[block.block_id];
    const panel = createElement("section", "study-progress-roadmap-block");
    const heading = createElement("div", "study-progress-roadmap-block__heading");
    heading.append(
      createElement("h3", "", `Bloque ${block.code}`),
      createElement("span", "", `${blockSummary.worked} iniciados · ${blockSummary.completed} consolidados`),
    );
    const topics = createElement("div", "study-progress-roadmap-topics");
    for (const topic of blockTopics) {
      const record = topicProgress(store, topic.code);
      const button = createElement("button", `study-progress-map-topic is-${record.status}`, topic.code);
      button.type = "button";
      button.title = `${topic.code} · ${topic.title}\n${statusLabel(record.status)}`;
      button.dataset.studyMapCode = topic.code;
      const priority = recommendations.current?.code === topic.code ? "Tema actual"
        : reviewCodes.has(topic.code) ? "Repaso pendiente"
          : nextCodes.has(topic.code) ? "Siguiente tema" : "";
      if (recommendations.current?.code === topic.code) button.classList.add("is-current");
      if (nextCodes.has(topic.code)) button.classList.add("is-next");
      if (reviewCodes.has(topic.code)) button.classList.add("is-review");
      if (topicNeedsReview(record)) button.classList.add("is-due");
      button.setAttribute("aria-label", `${topic.code}. ${topic.title}. ${statusLabel(record.status)}${priority ? `. ${priority}` : ""}. Abrir seguimiento.`);
      button.addEventListener("click", () => onSelect(topic.code));
      topics.append(button);
    }
    panel.append(heading, topics);
    roadmapRoot.append(panel);
  }
}

function recommendationList(topics, emptyMessage, detail) {
  if (!topics.length) return createElement("p", "form-help", emptyMessage);
  const list = createElement("ul", "study-progress-recommendation-list");
  for (const topic of topics) {
    const item = createElement("li");
    item.append(topicLink(topic));
    const explanation = detail(topic);
    if (explanation) item.append(createElement("span", "form-help", explanation));
    list.append(item);
  }
  return list;
}

function renderRecommendations(plan, store) {
  const root = document.querySelector("#study-progress-recommendations");
  const result = buildStudyRecommendations(plan, store);
  const current = createElement("article", "study-progress-recommendation study-progress-recommendation--current");
  current.append(createElement("h3", "", "Tema actual"));
  if (result.current) {
    const record = topicProgress(store, result.current.code);
    current.append(topicLink(result.current), createElement("p", "form-help", record.status === "pending"
      ? `${weeksLabel(result.current.planned_weeks)} · sugerencia del plan; todavía no está marcado como realizado.`
      : `Prioridad por progreso real: ${statusLabel(record.status)}.`));
  } else current.append(createElement("p", "form-help", "Todos los temas están consolidados."));

  const next = createElement("article", "study-progress-recommendation study-progress-recommendation--next");
  next.append(createElement("h3", "", "Siguientes temas"), recommendationList(result.next, "No hay temas pendientes sin empezar.", (topic) => weeksLabel(topic.planned_weeks)));

  const reviews = createElement("article", "study-progress-recommendation study-progress-recommendation--reviews");
  reviews.append(createElement("h3", "", "Repasos pendientes"), recommendationList(result.reviews, "No hay repasos vencidos ni temas marcados para refuerzo.", (topic) => {
    const record = topicProgress(store, topic.code);
    return record.nextReviewAt ? `Repaso previsto: ${formatDate(record.nextReviewAt)}` : "Marcado como Necesita refuerzo";
  }));
  root.replaceChildren(current, next, reviews);
}

function createField(labelText, control) {
  const wrapper = createElement("div", "field");
  const label = createElement("label", "", labelText);
  label.htmlFor = control.id;
  wrapper.append(label, control);
  return wrapper;
}

function createTopicCard(topic, record, onSave) {
  const safe = topic.code.replace(".", "-").toLowerCase();
  const card = createElement("details", "study-progress-topic");
  card.dataset.studyCode = topic.code;
  const summary = createElement("summary", "study-progress-topic__summary");
  const summaryText = createElement("span", "study-progress-topic__summary-text");
  const heading = createElement("h2", "", `${topic.code} · ${topic.title}`);
  const meta = createElement("p", "study-progress-topic__meta", `${topic.blockTitle} · ${weeksLabel(topic.planned_weeks)}`);
  const state = createElement("span", "status-pill study-progress-topic__state", statusLabel(record.status));
  summaryText.append(heading, meta);
  summary.append(summaryText, state);
  const body = createElement("div", "study-progress-topic__body");
  const actions = createElement("div", "action-row");
  actions.append(topicLink(topic, "Abrir tema"));
  if (topic.supportUrl) {
    const support = createElement("a", "button button--secondary", "Material de apoyo del bloque");
    support.href = topic.supportUrl;
    support.target = "_blank";
    support.rel = "noopener noreferrer";
    actions.append(support);
  }

  const status = createElement("select");
  status.id = `study-status-${safe}`;
  status.dataset.studyField = "status";
  for (const item of STUDY_STATUSES) {
    const option = createElement("option", "", item.label);
    option.value = item.value;
    option.selected = item.value === record.status;
    status.append(option);
  }

  const checks = createElement("fieldset", "study-progress-checks");
  checks.append(createElement("legend", "", "Checklist independiente"));
  for (const item of STUDY_CHECKS) {
    const label = createElement("label");
    const input = createElement("input");
    input.type = "checkbox";
    input.checked = record.checks[item.key];
    input.dataset.studyCheck = item.key;
    input.id = `study-${item.key}-${safe}`;
    label.htmlFor = input.id;
    label.append(input, document.createTextNode(item.label));
    checks.append(label);
  }

  const last = createElement("input");
  last.type = "date";
  last.id = `study-last-${safe}`;
  last.dataset.studyField = "lastStudiedAt";
  last.value = record.lastStudiedAt || "";
  const next = createElement("input");
  next.type = "date";
  next.id = `study-next-${safe}`;
  next.dataset.studyField = "nextReviewAt";
  next.value = record.nextReviewAt || "";
  const notes = createElement("textarea");
  notes.id = `study-notes-${safe}`;
  notes.dataset.studyField = "notes";
  notes.maxLength = 5000;
  notes.rows = 3;
  notes.placeholder = "Dudas, fuentes pendientes o recordatorios personales";
  notes.value = record.notes;
  const details = createElement("div", "study-progress-details");
  details.append(createField("Estado", status), createField("Último estudio", last), createField("Próximo repaso", next), createField("Notas personales", notes));
  body.append(actions, checks, details);
  card.append(summary, body);

  let noteTimer = null;
  const save = () => {
    state.textContent = statusLabel(status.value);
    const changes = {
      status: status.value,
      checks: Object.fromEntries([...card.querySelectorAll("[data-study-check]")].map((input) => [input.dataset.studyCheck, input.checked])),
      lastStudiedAt: last.value || null,
      nextReviewAt: next.value || null,
      notes: notes.value,
    };
    onSave(topic.code, changes);
  };
  card.addEventListener("change", save);
  notes.addEventListener("input", () => {
    window.clearTimeout(noteTimer);
    noteTimer = window.setTimeout(save, 250);
  });
  return card;
}

export function initStudyProgress(data) {
  const plan = planWithOfficialTitles(data);
  const allowedCodes = plan.topics.map((topic) => topic.code);
  const loaded = loadStudyProgress(allowedCodes);
  const statusNode = document.querySelector("#study-progress-status");
  let store = loaded.store;
  if (loaded.error) {
    statusNode.textContent = loaded.error;
    statusNode.className = "analytics-storage-status error";
    return;
  }

  const blockFilter = document.querySelector("#study-progress-filter-block");
  const stateFilter = document.querySelector("#study-progress-filter-status");
  for (const block of plan.blocks) {
    const option = createElement("option", "", `Bloque ${block.code}`);
    option.value = block.block_id;
    blockFilter.append(option);
  }
  for (const item of STUDY_STATUSES) {
    const option = createElement("option", "", item.label);
    option.value = item.value;
    stateFilter.append(option);
  }

  const root = document.querySelector("#study-progress-topics");
  const cards = new Map();
  const openTopic = (code) => {
    const card = cards.get(code);
    if (!card) return;
    card.open = true;
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    card.querySelector("summary").focus({ preventScroll: true });
  };
  const refresh = () => {
    renderSummary(plan, store);
    renderRoadmap(plan, store, openTopic);
    renderRecommendations(plan, store);
    const filters = {
      blockId: blockFilter.value,
      status: stateFilter.value,
      review: document.querySelector("#study-progress-filter-review").value,
      search: document.querySelector("#study-progress-search").value,
    };
    const visible = new Set(filterStudyTopics(plan, store, filters).map((topic) => topic.code));
    for (const [code, card] of cards) {
      card.hidden = !visible.has(code);
      card.dataset.studyStatus = topicProgress(store, code).status;
      card.dataset.studyReview = topicNeedsReview(topicProgress(store, code)) ? "due" : "none";
    }
    document.querySelector("#study-progress-visible-count").textContent = `${visible.size} de ${plan.topics.length} temas visibles.`;
  };
  const onSave = (code, changes) => {
    const result = saveTopicProgress(code, changes, allowedCodes);
    if (!result.saved) {
      statusNode.textContent = result.error;
      statusNode.className = "analytics-storage-status error";
      return;
    }
    store = result.store;
    statusNode.textContent = `${code} guardado automáticamente.`;
    statusNode.className = "analytics-storage-status success";
    refresh();
  };
  for (const topic of plan.topics) {
    const card = createTopicCard(topic, topicProgress(store, topic.code), onSave);
    cards.set(topic.code, card);
    root.append(card);
  }
  document.querySelector("#study-progress-filters").addEventListener("submit", (event) => event.preventDefault());
  for (const selector of ["#study-progress-filter-block", "#study-progress-filter-status", "#study-progress-filter-review", "#study-progress-search"]) {
    document.querySelector(selector).addEventListener(selector.endsWith("search") ? "input" : "change", refresh);
  }
  refresh();
}
