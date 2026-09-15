import { createElement, setStatus } from "./ui.js?gsi2";
import { formatRemainingTime } from "./exam-engine.js?gsi2";
import { parseSafeTopicFragment } from "./topic-content-service.js?gsi2";

export const WRITTEN_KEY = "gsi.OPP-GSI.SYL-GSI-2025.written.v1";
export const RUBRIC = Object.freeze({ technical: 30, analysis: 10, systematic: 5, expression: 5 });
const labels = { technical: "Aplicación de conocimientos técnicos", analysis: "Capacidad de análisis", systematic: "Sistemática", expression: "Expresión escrita" };
export function createWrittenState(caseId, now = Date.now()) {
  return { version: 1, oppositionId: "OPP-GSI", syllabusId: "SYL-GSI-2025", caseId,
    startedAt: new Date(now).toISOString(), deadlineAt: new Date(now + 10800000).toISOString(),
    finishedAt: null, outline: "", answers: Object.fromEntries([1, 2, 3, 4, 5].map((n) => [n, ""])), scores: { technical: 0, analysis: 0, systematic: 0, expression: 0 } };
}
export function validateWrittenState(state, cases) {
  if (!state || state.version !== 1 || state.oppositionId !== "OPP-GSI" || state.syllabusId !== "SYL-GSI-2025" || !cases.some((c) => c.id === state.caseId)) return false;
  if (!Number.isFinite(Date.parse(state.startedAt)) || Date.parse(state.deadlineAt) - Date.parse(state.startedAt) !== 10800000 || (state.finishedAt !== null && (!Number.isFinite(Date.parse(state.finishedAt)) || Date.parse(state.finishedAt) < Date.parse(state.startedAt)))) return false;
  if (typeof state.outline !== "string" || !state.answers || Object.keys(state.answers).length !== 5 || ![1, 2, 3, 4, 5].every((n) => typeof state.answers[n] === "string")) return false;
  return state.scores !== null && typeof state.scores === "object" && !Array.isArray(state.scores) && Object.keys(state.scores).length === 4 && Object.entries(RUBRIC).every(([key, max]) => Number.isFinite(state.scores?.[key]) && state.scores[key] >= 0 && state.scores[key] <= max);
}
export function writtenRemaining(state, now = Date.now()) { return Math.max(0, (Date.parse(state.deadlineAt) - now) / 1000); }

export async function initWrittenPractice(data) {
  const response = await fetch("./data/gsi-practice.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`No se pudo cargar la práctica escrita (HTTP ${response.status}).`);
  const practice = await response.json();
  if (practice.oppositionId !== "OPP-GSI" || !Array.isArray(practice.cases) || practice.cases.length !== 8 || practice.cases.some((c) => c.questions?.length !== 5)) throw new Error("El catálogo de práctica escrita GSI no es válido.");
  data.practice = practice;
  const root = document.querySelector("#practice-app");
  let state = null;
  let interval = null;
  try {
    const raw = localStorage.getItem(WRITTEN_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      if (validateWrittenState(stored, practice.cases)) state = stored;
      else setStatus("La sesión escrita guardada no es compatible. Puedes iniciar una nueva; el archivo anterior sigue en el navegador hasta que guardes.", "warning");
    }
  } catch { setStatus("No se pudo recuperar la práctica escrita guardada.", "warning"); }
  function persist() {
    try { localStorage.setItem(WRITTEN_KEY, JSON.stringify(state)); }
    catch { setStatus("No se pudo guardar la respuesta escrita. Exporta el progreso antes de cerrar.", "error"); }
  }
  function button(text, callback, secondary = false) {
    const node = createElement("button", secondary ? "button button--secondary" : "button", text);
    node.type = "button"; node.addEventListener("click", callback); return node;
  }
  function library() {
    const details = createElement("details", "local-progress");
    details.append(createElement("summary", "", "Biblioteca de práctica · cuadernos y solucionarios"));
    const list = createElement("ul");
    for (const item of practice.library) {
      const li = createElement("li"); const link = createElement("a", "", item.title);
      link.href = item.localPath || item.url; link.target = "_blank"; link.rel = "noopener noreferrer";
      li.append(link, createElement("p", "muted", item.description)); list.append(li);
    }
    details.append(list); return details;
  }
  function renderChoice() {
    root.replaceChildren();
    const label = createElement("label", "", "Simulacro escrito"); label.htmlFor = "written-simulation";
    const select = createElement("select"); select.id = "written-simulation";
    for (let n = 1; n <= practice.simulations; n += 1) { const option = createElement("option", "", `Simulacro ${n}`); option.value = n; select.append(option); }
    const choices = createElement("div", "written-choices");
    function show() {
      choices.replaceChildren();
      for (const item of practice.cases.filter((c) => c.simulation === Number(select.value))) {
        const card = createElement("article", "local-progress");
        card.append(createElement("h2", "", item.title), createElement("p", "written-statement", item.statement));
        card.append(button(`Elegir opción ${item.option} · iniciar 180 minutos`, () => { state = createWrittenState(item.id); persist(); renderSession(); }));
        choices.append(card);
      }
    }
    select.addEventListener("change", show); root.append(label, select, choices, library()); show();
  }
  function finish(expired = false) {
    if (!expired && !window.confirm("¿Terminar la práctica y abrir la guía de corrección?")) return;
    state.finishedAt = new Date().toISOString(); persist(); renderSession();
  }
  function renderSession() {
    if (interval) clearInterval(interval);
    root.replaceChildren();
    const item = practice.cases.find((c) => c.id === state.caseId);
    const completed = Boolean(state.finishedAt);
    root.append(createElement("h2", "", `Simulacro ${item.simulation} · ${item.title}`));
    const timer = createElement("p", "exam-timer"); timer.id = "written-timer"; timer.setAttribute("role", "timer"); root.append(timer);
    const source = createElement("a", "", "Fuente del supuesto · material curado GSI"); source.href = item.source.url; source.target = "_blank"; source.rel = "noopener noreferrer"; root.append(source);
    root.append(createElement("p", "written-statement", item.statement));
    function field(id, title, value, change) {
      const label = createElement("label", "", title); label.htmlFor = id;
      const area = createElement("textarea"); area.id = id; area.rows = id === "written-outline" ? 5 : 12; area.value = value; area.readOnly = completed;
      area.addEventListener("input", () => { change(area.value); persist(); }); root.append(label, area);
    }
    field("written-outline", "Esquema común de respuesta", state.outline, (v) => { state.outline = v; });
    for (const q of item.questions) field(`written-answer-${q.id}`, `Pregunta ${q.id}. ${q.prompt}`, state.answers[q.id], (v) => { state.answers[q.id] = v; });
    const checklist = createElement("details", "local-progress"); checklist.append(createElement("summary", "", "Lista de revisión de la respuesta"));
    for (const text of item.checklist) { const label = createElement("label", "written-check"); const checkbox = createElement("input"); checkbox.type = "checkbox"; label.append(checkbox, document.createTextNode(text)); checklist.append(label); }
    root.append(checklist);
    if (!completed) root.append(button("Terminar y autocorregir", () => finish()));
    else {
      root.append(createElement("h2", "", "Autoevaluación · la nota no sustituye la corrección del tribunal"));
      const total = createElement("p", "summary-card__value"); total.id = "written-score";
      const refresh = () => { total.textContent = `${Object.values(state.scores).reduce((a, b) => a + b, 0)} / 50 puntos`; };
      for (const [key, max] of Object.entries(RUBRIC)) {
        const label = createElement("label", "", `${labels[key]} (0–${max})`); label.htmlFor = `score-${key}`;
        const input = createElement("input"); input.id = `score-${key}`; input.type = "number"; input.min = 0; input.max = max; input.step = 0.5; input.value = state.scores[key];
        input.addEventListener("change", () => { state.scores[key] = Math.max(0, Math.min(max, Number(input.value) || 0)); input.value = state.scores[key]; persist(); refresh(); }); root.append(label, input);
      }
      root.append(total); refresh();
      const guide = createElement("details", "local-progress"); guide.append(createElement("summary", "", "Solucionario y rúbrica comentada del corpus"), parseSafeTopicFragment(item.solutionHtml)); root.append(guide);
      root.append(button("Elegir otro simulacro", () => { if (window.confirm("La nueva práctica reemplazará esta sesión escrita. Exporta una copia si quieres conservarla. ¿Continuar?")) { localStorage.removeItem(WRITTEN_KEY); state = null; clearInterval(interval); renderChoice(); } }, true));
    }
    function tick() {
      if (state.finishedAt) { timer.textContent = "Práctica terminada · respuestas guardadas"; return; }
      const remaining = writtenRemaining(state); timer.textContent = `Tiempo restante: ${formatRemainingTime(remaining)}`;
      if (remaining <= 0) finish(true);
    }
    tick(); if (!state.finishedAt) interval = setInterval(tick, 1000);
    root.append(library());
  }
  if (state) renderSession(); else renderChoice();
}
