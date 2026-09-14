const INDEX_PATH = "./data/topic-content.json";
const CONTENT_PATH_RE = /^content\/generated\/B[1-4]-T\d{2}\.html$/;
const TOPIC_ID_RE = /^B[1-4]-T\d{2}$/;
const SECTION_ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FORBIDDEN_ELEMENTS = new Set(["script", "style", "iframe", "object", "embed", "form", "base", "link"]);
const URL_ATTRIBUTES = new Set(["href", "src", "xlink:href", "action", "formaction"]);
const RAW_FORBIDDEN_RE = /<\s*\/?\s*(?:script|style|iframe|object|embed|form|base|link)\b|\son[a-z]+\s*=|(?:javascript|data|vbscript):/i;

function isSafeUrl(value) {
  const trimmed = String(value || "").trim();
  if (trimmed.startsWith("#")) return true;
  try {
    const parsed = new URL(trimmed, window.location.href);
    if (parsed.protocol === "https:") return true;
    return parsed.origin === window.location.origin && parsed.protocol === window.location.protocol;
  } catch {
    return false;
  }
}

function assertIndex(index) {
  if (!index || index.version !== 1 || !Array.isArray(index.topics)) {
    throw new Error("topic-content.json no tiene la estructura esperada.");
  }
  const byTopicId = new Map();
  const allowedPaths = new Set();
  for (const entry of index.topics) {
    if (!entry || !TOPIC_ID_RE.test(entry.topicId) || !CONTENT_PATH_RE.test(entry.contentPath)) {
      throw new Error("topic-content.json contiene un identificador o ruta de contenido no válidos.");
    }
    if (entry.contentPath !== `content/generated/${entry.topicId}.html`) {
      throw new Error(`La ruta de contenido de ${entry.topicId} no coincide con su identificador.`);
    }
    if (byTopicId.has(entry.topicId) || allowedPaths.has(entry.contentPath)) {
      throw new Error("topic-content.json contiene temas o rutas de contenido duplicados.");
    }
    if (!Array.isArray(entry.sections) || new Set(entry.sections.map((section) => section.sectionId)).size !== entry.sections.length) {
      throw new Error(`Las secciones de ${entry.topicId} no son válidas o están duplicadas.`);
    }
    for (const section of entry.sections) {
      if (!section || !SECTION_ID_RE.test(section.sectionId)) {
        throw new Error(`Una sección de ${entry.topicId} no tiene un identificador válido.`);
      }
    }
    byTopicId.set(entry.topicId, entry);
    allowedPaths.add(entry.contentPath);
  }
  if (byTopicId.size !== 57) {
    throw new Error("topic-content.json debe indexar exactamente 57 temas GSI A2.");
  }
  return { ...index, byTopicId, allowedPaths };
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`No se pudo cargar ${path} (HTTP ${response.status}).`);
  try {
    return await response.json();
  } catch {
    throw new Error(`${path} no contiene JSON válido.`);
  }
}

export async function loadTopicContentIndex() {
  return assertIndex(await fetchJson(INDEX_PATH));
}

export function parseSafeTopicFragment(html) {
  const parser = new DOMParser();
  const rawHtml = String(html);
  const parsed = parser.parseFromString(rawHtml, "text/html");
  const blocked = parsed.querySelectorAll([...FORBIDDEN_ELEMENTS].join(","));
  if (blocked.length) throw new Error("El fragmento de contenido contiene elementos no permitidos.");
  for (const element of parsed.querySelectorAll("*")) {
    for (const attribute of [...element.attributes]) {
      const name = attribute.name.toLowerCase();
      if (name.startsWith("on") || name === "srcdoc") {
        throw new Error("El fragmento de contenido contiene atributos ejecutables no permitidos.");
      }
      if (URL_ATTRIBUTES.has(name) && !isSafeUrl(attribute.value)) {
        throw new Error("El fragmento de contenido contiene una URL no segura.");
      }
    }
  }
  const fragment = document.createDocumentFragment();
  for (const node of [...parsed.body.childNodes]) {
    fragment.append(document.importNode(node, true));
  }
  return fragment;
}

export async function loadTopicFragment(index, topicId) {
  const entry = index?.byTopicId?.get(topicId);
  if (!entry) throw new Error("El tema solicitado no está disponible en el índice editorial.");
  if (!index.allowedPaths.has(entry.contentPath) || !CONTENT_PATH_RE.test(entry.contentPath)) {
    throw new Error("La ruta solicitada no pertenece al índice editorial permitido.");
  }
  const response = await fetch(`./${entry.contentPath}`, { cache: "no-store", headers: { Accept: "text/html" } });
  if (!response.ok) throw new Error(`No se pudo cargar el contenido de ${topicId} (HTTP ${response.status}).`);
  return parseSafeTopicFragment(await response.text());
}
