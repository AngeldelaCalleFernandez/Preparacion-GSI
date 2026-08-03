const VALID_ROUTES = new Set(["inicio", "temario", "entrenamiento", "examen", "refuerzo"]);

function routeFromHash() {
  const route = window.location.hash.replace(/^#/, "").trim();
  return VALID_ROUTES.has(route) ? route : "inicio";
}

function renderRoute(route, shouldFocus) {
  for (const view of document.querySelectorAll("[data-view]")) {
    view.hidden = view.dataset.view !== route;
  }
  for (const link of document.querySelectorAll("[data-route]")) {
    const active = link.dataset.route === route;
    link.toggleAttribute("aria-current", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    }
  }
  document.title = `${route[0].toUpperCase()}${route.slice(1)} · TAI`;
  if (shouldFocus) {
    document.querySelector("#main-content")?.focus();
  }
}

export function initRouter() {
  const syncRoute = (shouldFocus = false) => renderRoute(routeFromHash(), shouldFocus);
  window.addEventListener("hashchange", () => syncRoute(true));
  syncRoute(false);
}
