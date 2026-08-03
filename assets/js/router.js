export const VALID_ROUTES = new Set(["inicio", "temario", "entrenamiento", "examen", "refuerzo", "estadisticas"]);

let routerInitialised = false;

export function resolveRoute(hash = window.location.hash) {
  const route = String(hash || "").replace(/^#/, "").trim();
  return VALID_ROUTES.has(route) ? route : "inicio";
}

export function renderRoute(route, shouldFocus = false, root = document) {
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
    document.title = `${resolvedRoute[0].toUpperCase()}${resolvedRoute.slice(1)} · TAI`;
    window.dispatchEvent(new CustomEvent("tai:routechange", { detail: { route: resolvedRoute } }));
  }
  if (shouldFocus) {
    root.querySelector("#main-content")?.focus();
  }
  return resolvedRoute;
}

export function syncRouter(shouldFocus = false) {
  return renderRoute(resolveRoute(), shouldFocus);
}

export function initRouter() {
  if (!routerInitialised) {
    window.addEventListener("hashchange", () => syncRouter(true));
    routerInitialised = true;
  }
  return syncRouter(false);
}
