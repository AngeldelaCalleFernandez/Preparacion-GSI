import { loadTopicFragment } from "./topic-content-service.js?gsi2";
import { resolveTopicReference } from "./catalog-service.js?gsi2";
import { parseRoute } from "./router.js?gsi2";

let viewState = null;
let requestVersion = 0;

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function sourceLink(source, label = "Fuente oficial") {
  if (!source?.url) return null;
  const link = element("a", "button button--secondary syllabus-source-link", label);
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${label}: ${source.title}. Se abre en una nueva pestaña.`);
  return link;
}

function statusLabel(status) {
  return ({ pending: "Cobertura pendiente", partial: "Cobertura parcial", complete: "Cobertura completa" })[status] || "Cobertura sin clasificar";
}

function reviewLabel(status) {
  return ({ "not-reviewed": "Sin revisión", "needs-review": "Pendiente de revisión", reviewed: "Revisado" })[status] || "Revisión sin clasificar";
}

function getEntry(topicId) {
  return viewState.index.byTopicId.get(topicId);
}

function getOfficialSource(topic) {
  return topic.source_ids
    .map((sourceId) => viewState.data.indexes.sourcesById.get(sourceId))
    .find((source) => source?.url && source.official_status === "official") || null;
}

function createPill(className, text) {
  return element("span", `pill ${className}`, text);
}

function matchesFilters(topic, entry) {
  const block = document.querySelector("#syllabus-filter-block")?.value || "";
  const coverage = document.querySelector("#syllabus-filter-coverage")?.value || "";
  const review = document.querySelector("#syllabus-filter-review")?.value || "";
  const search = (document.querySelector("#syllabus-search")?.value || "").trim().toLocaleLowerCase("es");
  if (block && topic.blockId !== block) return false;
  if (coverage && entry.status !== coverage) return false;
  if (review && entry.reviewStatus !== review) return false;
  if (!search) return true;
  const searchable = [topic.title, ...entry.sections.map((section) => section.title)].join(" ").toLocaleLowerCase("es");
  return searchable.includes(search);
}

function renderList() {
  const summary = document.querySelector("#syllabus-summary");
  const container = document.querySelector("#syllabus-blocks");
  if (!summary || !container || !viewState) return;
  const topics = [...viewState.data.indexes.topicsById.values()];
  const visible = topics.filter((topic) => matchesFilters(topic, getEntry(topic.id)));
  summary.textContent = `${visible.length} de ${topics.length} temas oficiales. El contenido editorial indica su cobertura y revisión.`;
  container.replaceChildren();

  for (const block of viewState.data.syllabus.blocks) {
    const blockTopics = block.topics
      .map((topic) => viewState.data.indexes.topicsById.get(topic.id))
      .filter((topic) => matchesFilters(topic, getEntry(topic.id)));
    if (!blockTopics.length) continue;
    const card = element("details", "block-card");
    card.open = Boolean(visible.length !== topics.length);
    const summaryNode = element("summary", "", `${block.id} · ${block.title} (${blockTopics.length} temas visibles)`);
    const list = element("ol", "topic-list");
    list.start = 1;
    for (const topic of blockTopics) {
      const entry = getEntry(topic.id);
      const item = element("li", "topic-list__item");
      const title = element("p", "topic-title", `Tema ${topic.number}. ${topic.title}`);
      const meta = element("div", "topic-meta");
      meta.append(
        createPill(`pill--coverage-${entry.status}`, statusLabel(entry.status)),
        createPill(`pill--review-${entry.reviewStatus}`, reviewLabel(entry.reviewStatus)),
        createPill("pill--count", `${entry.sections.length} secciones`),
        createPill("pill--count", `${new Set(entry.sections.flatMap((section) => section.sourceRefs.map((ref) => ref.sourceId))).size} fuentes`)
      );
      const actions = element("div", "action-row topic-actions");
      const study = element("a", "button", "Estudiar tema");
      study.href = `#temario/${topic.id}`;
      actions.append(study);
      const source = sourceLink(getOfficialSource(topic));
      if (source) actions.append(source);
      item.append(title, meta, actions);
      list.append(item);
    }
    card.append(summaryNode, list);
    container.append(card);
  }
  if (!container.childElementCount) {
    container.append(element("p", "notice", "No hay temas que coincidan con los filtros seleccionados."));
  }
}

function createBreadcrumbs(topic) {
  const nav = element("nav", "breadcrumbs");
  nav.setAttribute("aria-label", "Migas de navegación");
  const list = element("ol");
  const home = element("a", "", "Temario");
  home.href = "#temario";
  const homeItem = element("li");
  homeItem.append(home);
  const current = element("li", "", `${topic.blockId} · Tema ${topic.number}`);
  current.setAttribute("aria-current", "page");
  list.append(homeItem, current);
  nav.append(list);
  return nav;
}

function showList() {
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = "Programa catalogado";
  if (heading) heading.textContent = "Temario";
  document.querySelector("#syllabus-list")?.removeAttribute("hidden");
  document.querySelector("#topic-detail")?.setAttribute("hidden", "");
  renderList();
}

function showDetailError(message) {
  const list = document.querySelector("#syllabus-list");
  const detail = document.querySelector("#topic-detail");
  if (!list || !detail) return;
  list.setAttribute("hidden", "");
  detail.removeAttribute("hidden");
  detail.replaceChildren();
  const back = element("a", "button button--secondary", "Volver al listado");
  back.href = "#temario";
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = "Temario";
  if (heading) {
    heading.textContent = "Contenido de temario no disponible";
    heading.tabIndex = -1;
  }
  detail.append(back, element("p", "notice", message));
  heading?.focus({ preventScroll: true });
}

function focusTarget(detail, routeState, topic) {
  const message = detail.querySelector("#topic-detail-message");
  if (!routeState.sectionId) {
    const heading = document.querySelector("#syllabus-title");
    heading?.focus({ preventScroll: true });
    return;
  }
  const target = detail.querySelector(`#${routeState.sectionId}`);
  if (!target) {
    message.textContent = `La sección “${routeState.sectionId}” no existe en ${topic.id}.`;
    message.hidden = false;
    return;
  }
  target.setAttribute("tabindex", "-1");
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: "auto", block: "start" });
  target.focus({ preventScroll: true });
  for (const link of detail.querySelectorAll(".topic-content__toc a")) {
    link.toggleAttribute("aria-current", link.getAttribute("href") === `#temario/${topic.id}/${routeState.sectionId}`);
  }
}

async function renderDetail(routeState) {
  const operationalTopicId = resolveTopicReference(viewState.data.runtimeContext, routeState.topicId);
  const topic = operationalTopicId ? viewState.data.indexes.topicsById.get(operationalTopicId) : null;
  const entry = operationalTopicId ? getEntry(operationalTopicId) : null;
  if (!topic || !entry) {
    showDetailError("El tema solicitado no existe en el temario oficial catalogado.");
    return;
  }
  const list = document.querySelector("#syllabus-list");
  const detail = document.querySelector("#topic-detail");
  if (!list || !detail) return;
  const version = ++requestVersion;
  list.setAttribute("hidden", "");
  detail.removeAttribute("hidden");
  detail.replaceChildren();
  const back = element("a", "button button--secondary", "Volver al listado");
  back.href = "#temario";
  const eyebrow = document.querySelector("#syllabus-eyebrow");
  const heading = document.querySelector("#syllabus-title");
  if (eyebrow) eyebrow.textContent = `${topic.blockId} · Tema ${topic.number}`;
  if (heading) {
    heading.textContent = `Tema ${topic.number}. ${topic.title}`;
    heading.tabIndex = -1;
  }
  const official = element("p", "lead", `Texto oficial del programa: ${topic.title}`);
  const meta = element("div", "topic-meta");
  meta.append(
    createPill(`pill--coverage-${entry.status}`, statusLabel(entry.status)),
    createPill(`pill--review-${entry.reviewStatus}`, reviewLabel(entry.reviewStatus)),
    createPill("pill--count", `Actualizado: ${entry.updatedAt}`)
  );
  const message = element("p", "notice");
  message.id = "topic-detail-message";
  message.hidden = true;
  const content = element("div", "topic-detail__content");
  content.setAttribute("aria-live", "polite");
  content.append(element("p", "muted", "Cargando contenido editorial…"));
  const officialSource = sourceLink(getOfficialSource(topic), "Fuente oficial");
  const actions = element("div", "action-row topic-actions");
  actions.append(back);
  if (officialSource) actions.append(officialSource);
  detail.append(createBreadcrumbs(topic), actions, official, meta, message, content);
  document.title = `Tema ${topic.number} · Preparación GSI`;
  try {
    const fragment = await loadTopicFragment(viewState.index, operationalTopicId);
    if (version !== requestVersion) return;
    content.replaceChildren(fragment);
    for (const update of viewState.data.updates.updates.filter((u) => u.topic_ids.includes(operationalTopicId))) {
      const notice = element("aside", "notice");
      notice.append(element("strong", "", `${update.title} · control ${update.reviewed_at}`), element("p", "", update.summary));
      const link = sourceLink(viewState.data.indexes.sourcesById.get(update.source_id), "Comprobación de vigencia en la fuente oficial");
      if (link) notice.append(link);
      content.prepend(notice);
    }
    focusTarget(detail, routeState, topic);
  } catch (error) {
    if (version !== requestVersion) return;
    content.replaceChildren();
    message.textContent = error instanceof Error ? error.message : "No se pudo cargar el contenido editorial.";
    message.hidden = false;
    heading?.focus({ preventScroll: true });
  }
}

function renderRouteState(routeState) {
  if (!viewState || routeState.route !== "temario") return;
  if (routeState.error) {
    showDetailError(routeState.error);
  } else if (!routeState.topicId) {
    showList();
  } else {
    renderDetail(routeState);
  }
}

function setupFilters() {
  document.querySelector("#syllabus-filters")?.addEventListener("submit", (event) => event.preventDefault());
  for (const control of document.querySelectorAll("#syllabus-filters select, #syllabus-search")) {
    control.addEventListener(control.matches("input") ? "input" : "change", renderList);
  }
}

export function initSyllabusView(data, index) {
  viewState = { data, index };
  setupFilters();
  window.addEventListener("gsi:routechange", (event) => renderRouteState(event.detail));
  renderList();
  renderRouteState(parseRoute());
}
