export const VALID_ROUTES = new Set(["inicio", "temario", "plan", "entrenamiento", "examen", "practica", "refuerzo", "estadisticas"]);

const TOPIC_ID_RE = /^B[1-4]-T\d{2}$/;
const QUALIFIED_TOPIC_ID_RE = /^[A-Z][A-Z0-9-]*-B[1-4]-T\d{2}$/;
const SECTION_ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

let routerInitialised = false;

export function parseRoute(hash = window.location.hash) {
  const raw = String(hash || "").replace(/^#/, "").trim();
  if (!raw) return { route: "inicio", topicId: null, sectionId: null, error: null };
  const parts = raw.split("/");
  if (parts[0] !== "temario") {
    return { route: VALID_ROUTES.has(raw) ? raw : "inicio", topicId: null, sectionId: null, error: null };
  }
  if (parts.length === 1) return { route: "temario", topicId: null, sectionId: null, error: null };
  if (parts.length > 3 || !(TOPIC_ID_RE.test(parts[1]) || QUALIFIED_TOPIC_ID_RE.test(parts[1]))) {
    return { route: "temario", topicId: null, sectionId: null, error: "La ruta de tema no es válida." };
  }
  if (parts.length === 3 && !SECTION_ID_RE.test(parts[2])) {
    return { route: "temario", topicId: parts[1], sectionId: null, error: "La ruta de sección no es válida." };
  }
  return { route: "temario", topicId: parts[1], sectionId: parts[2] || null, error: null };
}

export function resolveRoute(hash = window.location.hash) {
  return parseRoute(hash).route;
}

export function renderRoute(route, shouldFocus = false, root = document, routeState = null) {
  const resolvedRoute = VALID_ROUTES.has(route) ? route : "inicio";
  for (const view of root.querySelectorAll("[data-view]")) {
    view.hidden = view.dataset.view !== resolvedRoute;
  }
  for (const link of root.querySelectorAll("[data-route]")) {
    const active = link.dataset.route === resolvedRoute;
    link.toggleAttribute("aria-current", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    }
  }
  if (root === document) {
    document.title = `${resolvedRoute[0].toUpperCase()}${resolvedRoute.slice(1)} · Preparación GSI`;
    window.dispatchEvent(new CustomEvent("gsi:routechange", { detail: routeState || { route: resolvedRoute, topicId: null, sectionId: null, error: null } }));
  }
  if (shouldFocus) {
    root.querySelector("#main-content")?.focus();
  }
  return resolvedRoute;
}

export function syncRouter(shouldFocus = false) {
  const routeState = parseRoute();
  const focusMain = shouldFocus && !(routeState.route === "temario" && (routeState.topicId || routeState.error));
  return renderRoute(routeState.route, focusMain, document, routeState);
}

export function initRouter() {
  if (!routerInitialised) {
    window.addEventListener("hashchange", () => syncRouter(true));
    routerInitialised = true;
  }
  return syncRouter(false);
}
