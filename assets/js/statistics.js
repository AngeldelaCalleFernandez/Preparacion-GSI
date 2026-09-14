import {
  buildTimeline,
  calculateStatistics,
  calculateWeakness,
  getPeriodRange,
  selectComparable,
} from "./analytics-engine.js?gsi2";
import {
  clearAllAnalyticsStores,
  clearAnalyticsStore,
  getAnalyticsSummary,
  loadAnalyticsStore,
} from "./analytics-storage.js?gsi2";
import { rebuildAnalytics } from "./analytics-migration.js?gsi2";
import { loadReinforcementStore } from "./reinforcement-storage.js?gsi2";
import { getTemporalState } from "./reinforcement-engine.js?gsi2";

const PERIOD_LABELS = { "7": "Últimos 7 días", "30": "Últimos 30 días", "90": "Últimos 90 días", all: "Todo el historial", custom: "Rango personalizado" };

function element(id) {
  return document.getElementById(id);
}

function text(value, empty = "Sin datos suficientes") {
  return value === null || value === undefined || value === "" ? empty : String(value);
}

function percentage(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)} %` : "Sin datos suficientes";
}

function duration(value) {
  if (!Number.isFinite(value)) return "Sin datos suficientes";
  const total = Math.max(0, Math.round(value));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return hours > 0 ? `${hours} h ${minutes} min` : (minutes > 0 ? `${minutes} min ${seconds} s` : `${seconds} s`);
}

function dateTime(value) {
  if (!value || !Number.isFinite(Date.parse(value))) return "Sin datos suficientes";
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

function create(nodeName, attributes = {}, content = "") {
  const node = document.createElement(nodeName);
  for (const [name, value] of Object.entries(attributes)) {
    if (name === "className") node.className = value;
    else if (name === "textContent") node.textContent = value;
    else node.setAttribute(name, value);
  }
  if (content !== "") node.textContent = content;
  return node;
}

function replace(node, children) {
  if (!node) return;
  node.replaceChildren(...children);
}

function noData(message = "Sin datos suficientes") {
  return create("p", { className: "analytics-empty" }, message);
}

function filterState() {
  const period = element("analytics-period")?.value || "30";
  const custom = { from: element("analytics-from")?.value || "", to: element("analytics-to")?.value || "" };
  const range = getPeriodRange(period, new Date(), custom);
  return {
    period,
    ...range,
    blockId: element("analytics-block")?.value || "",
    topicId: element("analytics-topic")?.value || "",
    origin: element("analytics-origin")?.value || "",
    sessionType: element("analytics-session-type")?.value || "",
    includeIncidents: Boolean(element("analytics-include-incidents")?.checked),
  };
}

function topicMap(data) {
  const map = new Map();
  for (const block of data.syllabus?.blocks || []) {
    for (const topic of block.topics || []) map.set(topic.id, { ...topic, blockId: block.id, blockTitle: block.title });
  }
  return map;
}

function blockMap(data) {
  return new Map((data.syllabus?.blocks || []).map((block) => [block.id, block]));
}

function questionMap(data) {
  const map = new Map();
  for (const question of data.questions || []) map.set(`${question.collection || question.origin}\u001f${question.id}`, question);
  return map;
}

export function isLearningEligible(question, questions, reinforcementRecords = {}) {
  const current = questions.find((candidate) => candidate.id === question.questionId
    && (candidate.collection || candidate.origin) === (question.collection || question.origin));
  const record = reinforcementRecords[`${question.collection || question.origin}:${question.questionId}`];
  return Boolean(current?.is_active) && !["paused", "defective"].includes(record?.status);
}

function metricFromQuestions(questions) {
  return questions.reduce((metric, question) => ({
    answered: metric.answered + Number(question.correct || 0) + Number(question.incorrect || 0),
    incorrect: metric.incorrect + Number(question.incorrect || 0),
    doubts: metric.doubts + Number(question.doubts || 0),
  }), { answered: 0, incorrect: 0, doubts: 0 });
}

function labelFor(id, map) {
  return map.get(id)?.title || id || "Sin datos";
}

function writeTable(container, title, rows, columns, labelForId = (id) => id) {
  if (!container) return;
  const heading = create("h3", {}, title);
  if (!rows.length) {
    replace(container, [heading, noData()]);
    return;
  }
  const table = create("table", { className: "analytics-table" });
  const caption = create("caption", { className: "visually-hidden" }, title);
  const thead = create("thead");
  const headerRow = create("tr");
  for (const column of columns) headerRow.append(create("th", { scope: "col" }, column.label));
  thead.append(headerRow);
  const tbody = create("tbody");
  for (const row of rows) {
    const tr = create("tr");
    for (const column of columns) {
      const value = column.value(row, labelForId);
      tr.append(create("td", {}, text(value)));
    }
    tbody.append(tr);
  }
  table.append(caption, thead, tbody);
  replace(container, [heading, table]);
}

const PERFORMANCE_COLUMNS = [
  { label: "Elemento", value: (row, resolve) => resolve(row.id) },
  { label: "Respondidas", value: (row) => row.answered },
  { label: "Aciertos", value: (row) => row.correct },
  { label: "Errores", value: (row) => row.incorrect },
  { label: "Blancos", value: (row) => row.blank },
  { label: "Precisión", value: (row) => percentage(row.responseAccuracy) },
  { label: "Porcentaje evaluado", value: (row) => percentage(row.grossPercentage) },
  { label: "Puntuación neta", value: (row) => Number.isFinite(row.netScore) ? row.netScore.toFixed(2) : "No aplicable" },
  { label: "Dudas", value: (row) => row.doubts },
  { label: "Tiempo medio", value: (row) => duration(row.averageDuration) },
  { label: "Última actividad", value: (row) => dateTime(row.lastActivityAt) },
];

function metricCards(summary, reinforcement) {
  const metric = summary.metric;
  const cards = [
    ["Sesiones", summary.sessions.count],
    ["Preguntas respondidas", metric.answered],
    ["Aciertos", metric.correct],
    ["Errores", metric.incorrect],
    ["Preguntas en blanco", metric.blank],
    ["Precisión sobre respondidas", percentage(metric.responseAccuracy)],
    ["Porcentaje sobre evaluadas", percentage(metric.grossPercentage)],
    ["Porcentaje neto medio", percentage(summary.sessions.averageNetPercentage)],
    ["Tiempo registrado", duration(metric.durationSeconds)],
    ["Tiempo medio por pregunta", duration(metric.averageDuration)],
    ["Preguntas con duda", metric.doubts],
    ["Añadidas a refuerzo", metric.addedToReinforcement],
    ["Refuerzos vencidos", reinforcement.overdue],
  ];
  return cards.map(([title, value]) => {
    const article = create("article", { className: "analytics-card" });
    article.append(create("h3", {}, title), create("p", { className: "analytics-card-value" }, text(value)));
    return article;
  });
}

function reinforcementSummary(isDemo) {
  const store = loadReinforcementStore(isDemo).store;
  let overdue = 0;
  let pausedOrDefective = 0;
  for (const record of Object.values(store.records || {})) {
    if (record.status === "paused" || record.status === "defective") pausedOrDefective += 1;
    if (getTemporalState(record).timeState === "overdue") overdue += 1;
  }
  return { store, overdue, pausedOrDefective };
}

function recentMetric(store, filter, topicId, data, reinforcementRecords) {
  const range = getPeriodRange("30");
  return store.attempts.reduce((metric, attempt) => {
    if (attempt.topicId !== topicId || attempt.blank || !isLearningEligible({ questionId: attempt.questionId, collection: attempt.collection }, data.questions, reinforcementRecords)) return metric;
    if (attempt.answeredAt < range.from || attempt.answeredAt > range.to) return metric;
    return {
      answered: metric.answered + 1,
      incorrect: metric.incorrect + (attempt.correct === false ? 1 : 0),
      doubts: metric.doubts + (attempt.doubted ? 1 : 0),
    };
  }, { answered: 0, incorrect: 0, doubts: 0 });
}

function renderWeaknesses(container, summary, filter, data, reinforcement) {
  const map = topicMap(data);
  const list = summary.byTopic.map((row) => {
    const topicQuestions = summary.questions.filter((question) => question.topicId === row.id);
    const eligibleQuestions = topicQuestions.filter((question) => isLearningEligible(question, data.questions, reinforcement.store.records));
    const overdue = Object.values(reinforcement.store.records || {}).filter((record) => record.topicId === row.id && record.status === "scheduled" && getTemporalState(record).timeState === "overdue").length;
    const result = calculateWeakness(metricFromQuestions(eligibleQuestions), recentMetric(summary.store, filter, row.id, data, reinforcement.store.records), eligibleQuestions, overdue);
    return { ...row, ...result, overdue };
  }).sort((left, right) => {
    const score = Number(right.score ?? -1) - Number(left.score ?? -1);
    return score || left.id.localeCompare(right.id);
  });
  const heading = create("h3", {}, "Áreas que necesitan refuerzo");
  if (!list.length) {
    replace(container, [heading, noData()]);
    return null;
  }
  const table = create("table", { className: "analytics-table" });
  const headers = ["Tema", "Estado", "Necesidad", "Explicación"];
  const thead = create("thead");
  const head = create("tr");
  for (const header of headers) head.append(create("th", { scope: "col" }, header));
  thead.append(head);
  const body = create("tbody");
  for (const row of list) {
    const tr = create("tr");
    tr.append(
      create("td", {}, labelFor(row.id, map)),
      create("td", {}, row.status),
      create("td", {}, row.score === null ? "Sin datos suficientes" : `${row.score}/100`),
      create("td", {}, row.explanation),
    );
    body.append(tr);
  }
  table.append(create("caption", { className: "visually-hidden" }, "Necesidad de refuerzo por tema"), thead, body);
  replace(container, [heading, table]);
  return list.find((row) => Number.isFinite(row.score)) || null;
}

function renderTimeline(container, timeline) {
  const heading = create("h3", {}, "Evolución temporal");
  if (!timeline.length) {
    replace(container, [heading, noData()]);
    return;
  }
  const max = Math.max(...timeline.map((row) => row.total), 1);
  const list = create("ol", { className: "analytics-timeline", "aria-label": "Evolución temporal en tabla textual" });
  for (const row of timeline) {
    const item = create("li");
    const bar = create("span", { className: "analytics-bar", style: `--bar-size: ${Math.round(row.total / max * 100)}%`, "aria-hidden": "true" });
    item.append(bar, create("span", {}, `${row.period}: ${row.total} evaluadas, ${percentage(row.responseAccuracy)} de precisión, ${row.incorrect} errores, ${row.doubts} dudas, ${duration(row.durationSeconds)}.`));
    list.append(item);
  }
  replace(container, [heading, list]);
}

function renderInsights(container, summary, priority, data) {
  if (!container) return;
  const blocks = blockMap(data);
  const topics = topicMap(data);
  const bestBlock = selectComparable(summary.byBlock, "best");
  const bestTopic = selectComparable(summary.byTopic, "best");
  const weakestBlock = selectComparable(summary.byBlock, "worst");
  const cards = [
    ["Mejor bloque", bestBlock ? labelFor(bestBlock.id, blocks) : "Sin datos suficientes"],
    ["Mejor tema", bestTopic ? labelFor(bestTopic.id, topics) : "Sin datos suficientes"],
    ["Bloque con mayor necesidad de trabajo", weakestBlock ? labelFor(weakestBlock.id, blocks) : "Sin datos suficientes"],
    ["Tema con mayor necesidad de trabajo", priority ? labelFor(priority.id, topics) : "Sin datos suficientes"],
  ];
  replace(container, cards.map(([title, value]) => {
    const article = create("article", { className: "analytics-card" });
    article.append(create("h3", {}, title), create("p", { className: "analytics-card-value" }, value));
    return article;
  }));
}

function currentReinforcementRecord(reinforcement, question) {
  const key = Object.keys(reinforcement.store.records || {}).find((candidate) => {
    const record = reinforcement.store.records[candidate];
    return record.questionId === question.questionId && (record.collection || record.origin) === (question.collection || question.origin);
  });
  return key ? reinforcement.store.records[key] : null;
}

function renderRecurrent(container, summary, data, reinforcement, includeIncidents) {
  const map = questionMap(data);
  const recurrent = summary.questions
    .filter((question) => question.incorrect >= 2)
    .map((question) => ({ ...question, record: currentReinforcementRecord(reinforcement, question) }))
    .filter((question) => includeIncidents || !["defective", "paused"].includes(question.record?.status));
  const heading = create("h3", {}, "Errores recurrentes");
  if (!recurrent.length) {
    replace(container, [heading, noData("No hay errores recurrentes en el periodo seleccionado.")]);
    return;
  }
  const table = create("table", { className: "analytics-table" });
  const labels = ["Pregunta", "Errores", "Último error", "Bloque", "Tema", "Origen", "Refuerzo", "Próxima revisión"];
  const thead = create("thead");
  const header = create("tr");
  for (const label of labels) header.append(create("th", { scope: "col" }, label));
  thead.append(header);
  const body = create("tbody");
  for (const question of recurrent) {
    const source = map.get(`${question.collection || question.origin}\u001f${question.questionId}`);
    const record = question.record;
    const row = create("tr");
    row.append(
      create("td", {}, source ? question.questionId : "Pregunta no disponible"),
      create("td", {}, question.incorrect),
      create("td", {}, dateTime(question.lastErrorAt)),
      create("td", {}, question.blockId || "Sin datos"),
      create("td", {}, question.topicId || "Sin datos"),
      create("td", {}, question.origin || "Sin datos"),
      create("td", {}, record?.status || "Sin refuerzo"),
      create("td", {}, record?.nextReviewAt || "Sin datos"),
    );
    body.append(row);
  }
  table.append(create("caption", { className: "visually-hidden" }, "Preguntas con dos o más errores"), thead, body);
  replace(container, [heading, table]);
}

function renderSessions(container, summary) {
  const sessions = [...summary.store.sessions].sort((left, right) => right.finishedAt.localeCompare(left.finishedAt)).slice(0, 25);
  const heading = create("h3", {}, "Sesiones recientes");
  if (!sessions.length) {
    replace(container, [heading, noData()]);
    return;
  }
  const table = create("table", { className: "analytics-table" });
  const columns = ["Fecha", "Tipo", "Duración", "Preguntas", "Aciertos", "Errores", "Blancos", "Porcentaje", "Puntuación neta", "Datos"];
  const thead = create("thead");
  const head = create("tr");
  for (const label of columns) head.append(create("th", { scope: "col" }, label));
  thead.append(head);
  const body = create("tbody");
  const details = create("div", { className: "analytics-session-details" });
  for (const session of sessions) {
    const row = create("tr");
    row.append(
      create("td", {}, dateTime(session.finishedAt)), create("td", {}, session.sessionType), create("td", {}, duration(session.durationSeconds)),
      create("td", {}, session.configuredQuestions), create("td", {}, session.correctAnswers), create("td", {}, session.incorrectAnswers),
      create("td", {}, session.blankAnswers), create("td", {}, percentage(session.grossPercentage)),
      create("td", {}, Number.isFinite(session.netScore) ? session.netScore.toFixed(2) : "No aplicable"), create("td", {}, session.isDemo ? "Demo" : "Real"),
    );
    body.append(row);
    const detail = create("details");
    detail.append(create("summary", {}, `Detalle ${session.sessionId}`), create("p", {}, `Bloques: ${(session.blockIds || []).join(", ") || "Sin datos"}. Orígenes: ${(session.origins || []).join(", ") || "Sin datos"}. Preguntas registradas: ${(session.questionIds || []).length}.`));
    details.append(detail);
  }
  table.append(create("caption", { className: "visually-hidden" }, "Sesiones analíticas recientes"), thead, body);
  replace(container, [heading, table, details]);
}

function renderStorage(container, summary, reinforcement, migrationReport) {
  const archive = summary.store.archive || {};
  const lines = [
    `Almacén ${summary.store.isDemo ? "demo" : "real"}, versión ${summary.version}.`,
    `${summary.store.attempts.length} intentos y ${summary.store.sessions.length} sesiones recientes.`,
    `${archive.attemptBuckets.length} bloques archivados de intentos y ${archive.sessionBuckets.length} de sesiones.`,
    archive.temporalPrecisionLimitedBefore ? `La precisión temporal anterior a ${archive.temporalPrecisionLimitedBefore} es limitada.` : "La precisión temporal disponible no está limitada.",
    `${reinforcement.pausedOrDefective} preguntas de refuerzo pausadas o defectuosas se conservan como incidencia.`,
  ];
  const report = migrationReport?.report || migrationReport;
  if (report) lines.push(`Reconstrucción: ${report.imported} intentos importados, ${report.duplicates} duplicados y ${report.ignored} ignorados.`);
  const migration = summary.store.diagnostics?.migration;
  if (migration?.temporalPrecision) lines.push(`Historial parcial: ${migration.temporalPrecision}`);
  if (migration?.unavailable?.length) lines.push(`Limitaciones: ${migration.unavailable.join(" ")}`);
  replace(container, [create("h3", {}, "Estado de almacenamiento"), ...lines.map((line) => create("p", {}, line))]);
}

function setStorageMessage(message, type = "") {
  const node = element("analytics-storage-status");
  if (!node) return;
  node.textContent = message;
  node.className = `analytics-storage-status ${type}`;
}

function populateFilters(data) {
  const block = element("analytics-block");
  const topic = element("analytics-topic");
  if (!block || !topic || block.dataset.ready === "true") return;
  for (const item of data.syllabus?.blocks || []) {
    block.append(create("option", { value: item.id }, item.title));
    for (const entry of item.topics || []) topic.append(create("option", { value: entry.id }, entry.title));
  }
  block.dataset.ready = "true";
}

function updateCustomRangeVisibility() {
  const custom = element("analytics-period")?.value === "custom";
  element("analytics-custom-range")?.toggleAttribute("hidden", !custom);
}

function renderHome(data, summary, reinforcement, priority) {
  const responded = element("home-answered-count");
  const accuracy = element("home-recent-accuracy");
  const overdue = element("home-overdue-count");
  const priorityNode = element("home-priority-topic");
  if (responded) responded.textContent = String(summary.metric.answered);
  if (accuracy) accuracy.textContent = percentage(summary.metric.responseAccuracy);
  if (overdue) overdue.textContent = String(reinforcement.overdue);
  if (priorityNode) priorityNode.textContent = priority ? labelFor(priority.id, topicMap(data)) : "Sin datos suficientes";
}

export function renderAnalyticsHome(data) {
  const isDemo = Boolean(data.demoEnabled);
  const summary = getAnalyticsSummary(isDemo, getPeriodRange("30"));
  const reinforcement = reinforcementSummary(isDemo);
  const filter = { ...getPeriodRange("30") };
  const priority = summary.byTopic.map((row) => {
    const questions = summary.questions.filter((question) => isLearningEligible(question, data.questions, reinforcement.store.records) && question.topicId === row.id);
    return {
      ...row,
      ...calculateWeakness(metricFromQuestions(questions), recentMetric(summary.store, filter, row.id, data, reinforcement.store.records), questions, 0),
    };
  })
    .sort((left, right) => Number(right.score ?? -1) - Number(left.score ?? -1))
    .find((row) => Number.isFinite(row.score));
  renderHome(data, summary, reinforcement, priority);
}

export function initStatistics(data) {
  populateFilters(data);
  if (data.demoEnabled && element("analytics-store")?.value === "real") {
    element("analytics-store").value = "demo";
  }
  const view = element("statistics-view");
  if (!view || view.dataset.initialised === "true") {
    renderStatistics(data);
    return;
  }
  view.dataset.initialised = "true";
  for (const id of ["analytics-period", "analytics-from", "analytics-to", "analytics-block", "analytics-topic", "analytics-origin", "analytics-session-type", "analytics-include-incidents", "analytics-store"]) {
    element(id)?.addEventListener("change", () => {
      updateCustomRangeVisibility();
      renderStatistics(data);
    });
  }
  element("analytics-clear-demo")?.addEventListener("click", () => {
    if (window.confirm("¿Borrar únicamente las estadísticas demo? Esta acción no afecta a datos reales ni al refuerzo.")) {
      setStorageMessage(clearAnalyticsStore(true) ? "Estadísticas demo borradas." : "No se pudieron borrar las estadísticas demo.");
      renderStatistics(data);
    }
  });
  element("analytics-clear-all")?.addEventListener("click", () => {
    if (window.confirm("¿Borrar las estadísticas GSI? Puedes exportar una copia antes. El refuerzo y el historial de entrenamiento se conservan.")) {
      setStorageMessage(clearAllAnalyticsStores() ? "Todas las estadísticas han sido borradas." : "No se pudieron borrar todas las estadísticas.");
      renderStatistics(data);
    }
  });
  element("analytics-rebuild")?.addEventListener("click", () => {
    const isDemo = element("analytics-store")?.value === "demo";
    const report = rebuildAnalytics(data, isDemo);
    setStorageMessage(report.saved ? "Reconstrucción terminada con fuentes compatibles." : `Reconstrucción parcial: ${report.error || "no se pudo guardar"}.`, report.saved ? "success" : "error");
    renderStatistics(data, report);
  });
  window.addEventListener("gsi:routechange", (event) => {
    if (event.detail?.route === "estadisticas") renderStatistics(data);
  });
  updateCustomRangeVisibility();
  renderStatistics(data);
}

export function renderStatistics(data, migrationReport = null) {
  const view = element("statistics-view");
  if (!view) return;
  const selectedDemo = element("analytics-store")?.value === "demo";
  const isDemo = data.demoEnabled ? selectedDemo : false;
  if (element("analytics-store")) {
    element("analytics-store").disabled = !data.demoEnabled;
    if (!data.demoEnabled) element("analytics-store").value = "real";
  }
  const filter = filterState();
  const summary = getAnalyticsSummary(isDemo, filter);
  const reinforcement = reinforcementSummary(isDemo);
  if (!summary.valid || summary.error) setStorageMessage(summary.error || "Se detectaron datos analíticos incompatibles.", "error");
  replace(element("analytics-summary"), metricCards(summary, reinforcement));
  const blocks = blockMap(data);
  const topics = topicMap(data);
  writeTable(element("analytics-block-table"), "Rendimiento por bloque", summary.byBlock, PERFORMANCE_COLUMNS, (id) => labelFor(id, blocks));
  writeTable(element("analytics-topic-table"), "Rendimiento por tema", summary.byTopic, PERFORMANCE_COLUMNS, (id) => labelFor(id, topics));
  writeTable(element("analytics-origin-table"), "Rendimiento por origen", summary.byOrigin, PERFORMANCE_COLUMNS);
  writeTable(element("analytics-mode-table"), "Rendimiento por modalidad", summary.bySessionType, PERFORMANCE_COLUMNS);
  const priority = renderWeaknesses(element("analytics-weaknesses"), summary, filter, data, reinforcement);
  renderInsights(element("analytics-insights"), summary, priority, data);
  renderRecurrent(element("analytics-recurrent"), summary, data, reinforcement, filter.includeIncidents);
  renderSessions(element("analytics-sessions"), summary);
  renderTimeline(element("analytics-timeline"), buildTimeline(summary.store, filter, filter.period === "all" ? "week" : "day"));
  renderStorage(element("analytics-storage"), summary, reinforcement, migrationReport);
  renderHome(data, getAnalyticsSummary(isDemo, getPeriodRange("30")), reinforcement, priority);
  const label = element("analytics-active-period");
  if (label) label.textContent = PERIOD_LABELS[filter.period] || "Periodo seleccionado";
  if (summary.precisionLimited) setStorageMessage("El rango seleccionado toca datos mensuales consolidados: no se muestra una precisión parcial inventada.", "warning");
}
