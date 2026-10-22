// Read-only editorial workspace. It cannot approve questions or write progress.
const origin = document.querySelector("#review-origin");
const topic = document.querySelector("#review-topic");
const priority = document.querySelector("#review-priority");
const rule = document.querySelector("#review-rule");
const search = document.querySelector("#review-search");
const select = document.querySelector("#review-question");
const content = document.querySelector("#review-content");
const counter = document.querySelector("#review-count");
const previous = document.querySelector("#review-prev");
const next = document.querySelector("#review-next");

const ORIGIN_LABELS = Object.freeze({
  official: "Oficial INAP",
  manual: "Manual/curada",
  adapted: "Adaptada/curada",
  ai: "Generada por IA",
});
const DATASETS = Object.freeze([
  ["official", "./data/questions-official.json"],
  ["manual", "./data/questions-manual.json"],
  ["ai", "./data/questions-ai.json"],
]);

let bank = [];
let filtered = [];
let qualityById = new Map();
let manualQueueOrder = new Map();
let totalFlagged = 0;

function node(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`No se pudo cargar ${path} (HTTP ${response.status})`);
  return response.json();
}

function safeHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function describeValidation(question) {
  return ({ validated: "validada", pending_review: "pendiente de validación", draft: "borrador", rejected: "rechazada" })[question.validation_status]
    || question.validation_status
    || "sin estado";
}

function renderFindings(question) {
  const quality = qualityById.get(question.id);
  content.append(node("h3", "Indicios editoriales automáticos"));
  if (!quality) {
    content.append(node("p", "No se detectaron indicios con las reglas actuales. Esto no acredita por sí solo una revisión editorial L3."));
    return;
  }
  content.append(node("p", `${quality.priority} · puntuación heurística ${quality.score}. Requiere contraste humano; no es un error confirmado.`, "notice"));
  const list = node("ul", "");
  for (const finding of quality.findings) {
    const evidence = finding.evidence
      ? ` (${Object.entries(finding.evidence).map(([key, value]) => `${key}: ${value}`).join("; ")})`
      : "";
    list.append(node("li", `${finding.rule}: ${finding.message}${evidence}`));
  }
  content.append(list);
}

function render() {
  content.replaceChildren();
  const question = filtered.find((candidate) => candidate.id === select.value);
  const position = filtered.indexOf(question);
  previous.disabled = position <= 0;
  next.disabled = position < 0 || position === filtered.length - 1;
  counter.textContent = `${filtered.length} preguntas en esta selección · ${bank.length} en los bancos · ${totalFlagged} con indicios automáticos`;
  if (!question) {
    content.append(node("p", "No hay preguntas que coincidan con estos filtros."));
    return;
  }

  const label = ORIGIN_LABELS[question.origin] || question.origin;
  content.append(
    node("h2", `${question.id} · ${question.statement}`),
    node("p", `${label} · ${describeValidation(question)} · ${question.is_active ? "activa" : "inactiva"} · dificultad ${question.difficulty || "no declarada"}`),
  );
  if (question.source?.review_method) content.append(node("p", question.source.review_method));
  renderFindings(question);

  const options = node("ol", "");
  options.type = "A";
  for (const option of question.options) {
    options.append(node("li", option.text + (option.id === question.correct_option ? " — respuesta registrada" : "")));
  }
  content.append(options, node("h3", "Explicación registrada"), node("p", question.feedback.correct));
  if (question.feedback.incorrect && question.feedback.incorrect !== question.feedback.correct) {
    content.append(node("h3", "Feedback tras error"), node("p", question.feedback.incorrect));
  }

  content.append(node("h3", "Trazabilidad"), node("p", question.source?.locator || question.provenance?.locator || "Sin localizador."));
  if (question.source?.evidence) {
    content.append(node("h4", "Texto de respaldo registrado"));
    const evidence = node("pre", question.source.evidence);
    evidence.style.whiteSpace = "pre-wrap";
    evidence.style.overflowWrap = "anywhere";
    evidence.style.fontFamily = "inherit";
    content.append(evidence);
  }
  const sourceTitle = question.source?.title || question.source?.source_id || "Documento original";
  const sourceUrl = safeHttpsUrl(question.source?.url);
  if (sourceUrl) {
    const link = node("a", sourceTitle);
    link.href = sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    content.append(node("h3", "Fuente"), link);
  } else {
    content.append(node("h3", "Fuente"), node("p", sourceTitle));
  }
  const version = question.provenance?.version || question.source?.version || "sin versión declarada";
  const reviewedAt = question.provenance?.reviewed_at || question.source?.reviewed_at || "sin fecha declarada";
  content.append(node("p", `Versión ${version} · revisión de la fuente ${reviewedAt}`));
}

function matchesQuality(question) {
  const quality = qualityById.get(question.id);
  if (priority.value === "flagged" && !quality) return false;
  if (priority.value === "clean" && quality) return false;
  if (/^P[1-3]$/.test(priority.value) && quality?.priority !== priority.value) return false;
  if (rule.value && !quality?.findings.some((finding) => finding.rule === rule.value)) return false;
  return true;
}

function filter() {
  const selectedId = select.value;
  const term = search.value.trim().toLocaleLowerCase("es");
  filtered = bank.filter((question) =>
    (!origin.value || question.collection === origin.value)
    && (!topic.value || question.topic_id === topic.value)
    && (!term || `${question.id} ${question.statement}`.toLocaleLowerCase("es").includes(term))
    && matchesQuality(question)
  );
  if (origin.value === "manual" && rule.value === "correct-length-dominance") {
    filtered.sort((a, b) => (manualQueueOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (manualQueueOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER));
  }
  select.replaceChildren();
  for (const question of filtered) {
    const option = node("option", `${question.id} · ${question.topic_id}`);
    option.value = question.id;
    select.append(option);
  }
  if (filtered.some((question) => question.id === selectedId)) select.value = selectedId;
  render();
}

try {
  const [collections, quality] = await Promise.all([
    Promise.all(DATASETS.map(async ([collection, path]) => [collection, await fetchJson(path)])),
    fetchJson("./logs/gsi-question-quality.json"),
  ]);
  bank = collections.flatMap(([collection, data]) => {
    if (!Array.isArray(data?.questions)) throw new Error(`${collection} no contiene una colección válida`);
    return data.questions
      .filter((question) => question.opposition_id === "OPP-GSI")
      .map((question) => ({ ...question, collection }));
  });
  if (!Array.isArray(quality?.findings) || !Array.isArray(quality?.manual_primary_queue)) {
    throw new Error("el informe de calidad no tiene la estructura esperada");
  }
  qualityById = new Map(quality.findings.map((finding) => [finding.id, finding]));
  manualQueueOrder = new Map(quality.manual_primary_queue.map((item, index) => [item.id, index]));
  totalFlagged = qualityById.size;
  for (const id of [...new Set(bank.map((question) => question.topic_id))].sort()) {
    const option = node("option", id);
    option.value = id;
    topic.append(option);
  }
  for (const control of [origin, topic]) control.addEventListener("change", filter);
  priority.addEventListener("change", () => {
    if (priority.value === "clean") rule.value = "";
    filter();
  });
  rule.addEventListener("change", () => {
    if (rule.value && priority.value === "clean") priority.value = "";
    filter();
  });
  search.addEventListener("input", filter);
  select.addEventListener("change", render);
  previous.addEventListener("click", () => { select.selectedIndex -= 1; render(); });
  next.addEventListener("click", () => { select.selectedIndex += 1; render(); });
  filter();
} catch (error) {
  counter.textContent = `No se pudo cargar la revisión: ${error.message}. Abre esta vista mediante el servidor HTTP del proyecto.`;
}
