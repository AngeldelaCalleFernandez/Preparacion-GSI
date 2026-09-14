import { selectRuntimeContext, validateLegacySyllabusCompatibility } from "./catalog-service.js?gsi2";

const CATALOG_FILES = Object.freeze({
  oppositions: "./data/oppositions.json",
  syllabiCatalog: "./data/syllabi-catalog.json",
});

const DATA_FILES = Object.freeze({
  sources: "./data/sources.json",
  official: "./data/questions-official.json",
  ai: "./data/questions-ai.json",
  manual: "./data/questions-manual.json",
  updates: "./data/updates.json",
});

const DEMO_FILE = "./data/demo/questions-ai-demo.json";
// Referencia conservada para los validadores históricos; la ruta efectiva se
// obtiene del catálogo mediante runtimeContext.legacySourcePath.
const LEGACY_SYLLABUS_PATH_FOR_LEGACY_VALIDATORS = "./data/syllabus.json";

async function fetchJson(path) {
  // Los bancos siguen siendo estáticos; evitar una respuesta cacheada permite
  // que el modo demo cargue siempre su colección aislada al recargar.
  const response = await fetch(path, { cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) {
    throw new Error(`No se pudo cargar ${path} (HTTP ${response.status}).`);
  }
  try {
    return await response.json();
  } catch {
    throw new Error(`El archivo ${path} no contiene JSON válido.`);
  }
}

function assertCollection(collection, expectedType, filename) {
  if (!collection || !collection.metadata || !Array.isArray(collection.questions)) {
    throw new Error(`${filename} no tiene la estructura de colección de preguntas esperada.`);
  }
  if (collection.metadata.dataset_type !== expectedType) {
    throw new Error(`${filename} declara dataset_type=${collection.metadata.dataset_type ?? "ausente"}.`);
  }
}

function assertGsiQuestions(data) {
  const topics = new Map(data.syllabus.blocks.flatMap((block) => block.topics.map((topic) => [topic.id, block.id])));
  const ids = new Set();
  for (const name of ["official", "ai", "manual"]) for (const q of data[name].questions) {
    if (ids.has(q.id) || q.opposition_id !== "OPP-GSI" || topics.get(q.topic_id) !== q.block_id || q.options?.length !== 4 || new Set(q.options.map((o) => o.id)).size !== 4 || !q.options.some((o) => o.id === q.correct_option) || !q.provenance?.locator || !q.feedback?.correct) throw new Error(`Pregunta GSI inválida: ${q.id || "sin identificador"}.`);
    if (q.origin === "ai" && q.validation_status !== "validated" && q.is_active) throw new Error(`La pregunta generada ${q.id} requiere revisión antes de activarse.`);
    ids.add(q.id);
  }
}

function assertDataShape(data) {
  if (!Array.isArray(data.syllabus?.blocks) || !Array.isArray(data.sources?.sources) || !Array.isArray(data.updates?.updates)) {
    throw new Error("Los datos de temario, fuentes o actualizaciones no tienen la estructura esperada.");
  }
  const structure = data.runtimeContext?.syllabus?.declared_structure;
  const distribution = data.syllabus.blocks.map((block) => Array.isArray(block.topics) ? block.topics.length : -1);
  const topicCount = distribution.reduce((total, count) => total + count, 0);
  if (!structure || data.syllabus.blocks.length !== structure.block_count || topicCount !== structure.topic_count || JSON.stringify(distribution) !== JSON.stringify(structure.distribution)) {
    throw new Error("El temario cargado no coincide con la estructura declarada por el catálogo runtime.");
  }
  assertCollection(data.official, "official", "questions-official.json");
  assertCollection(data.ai, "ai", "questions-ai.json");
  assertCollection(data.manual, "manual", "questions-manual.json");
  if (data.demo) {
    assertCollection(data.demo, "ai", "questions-ai-demo.json");
  }
}

function safeUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

export function getSourceDisplayData(source) {
  if (!source || typeof source !== "object") {
    return { title: "Fuente no disponible", publisher: "", url: null, documents: [], warning: "Fuente no válida." };
  }
  if (source.sourceKind === "technical-primary-source") {
    return {
      ...source,
      title: source.title || "Fuente técnica no disponible",
      publisher: source.publisher || "",
      url: safeUrl(source.canonicalUrl),
      documents: [],
      warning: safeUrl(source.canonicalUrl) ? null : "La fuente técnica no tiene una URL canónica válida.",
    };
  }
  return { ...source, url: safeUrl(source.url), documents: Array.isArray(source.documents) ? source.documents : [], warning: null };
}

export function buildIndexes(syllabus, sources) {
  const blocksById = new Map();
  const topicsById = new Map();
  const sourcesById = new Map();
  const documentsById = new Map();

  for (const block of syllabus.blocks) {
    blocksById.set(block.id, block);
    for (const topic of block.topics) {
      topicsById.set(topic.id, { ...topic, blockId: block.id, blockTitle: block.title });
    }
  }
  for (const rawSource of sources.sources) {
    const displaySource = getSourceDisplayData(rawSource);
    sourcesById.set(displaySource.id, displaySource);
    for (const document of displaySource.documents) {
      documentsById.set(document.id, { ...document, sourceId: displaySource.id });
    }
  }
  return { blocksById, topicsById, sourcesById, documentsById };
}

function combineQuestions(data, demoEnabled) {
  const collections = [
    ["official", data.official.questions, false],
    ["ai", data.ai.questions, false],
    ["manual", data.manual.questions, false],
  ];
  if (demoEnabled && data.demo) {
    collections.push(["demo", data.demo.questions, true]);
  }
  return collections.flatMap(([collection, questions, isDemo]) =>
    questions.map((question) => ({ ...question, collection, isDemo }))
  );
}

export function isDemoMode() {
  return false;
}

export async function loadAppData() {
  const demoEnabled = isDemoMode();
  const catalogEntries = Object.entries(CATALOG_FILES);
  const catalogData = Object.fromEntries(await Promise.all(
    catalogEntries.map(async ([name, path]) => [name, await fetchJson(path)])
  ));
  const runtimeContext = selectRuntimeContext(catalogData.oppositions, catalogData.syllabiCatalog);
  const entries = Object.entries(DATA_FILES);
  const loaded = await Promise.all(entries.map(async ([name, path]) => [name, await fetchJson(path)]));
  const data = {
    ...Object.fromEntries(loaded),
    syllabus: await fetchJson(`./${runtimeContext.legacySourcePath}`),
    runtimeContext,
    catalogs: catalogData,
  };
  if (demoEnabled) {
    data.demo = await fetchJson(DEMO_FILE);
  }
  validateLegacySyllabusCompatibility(runtimeContext, data.syllabus);
  assertDataShape(data);
  assertGsiQuestions(data);
  return {
    ...data,
    demoEnabled,
    indexes: buildIndexes(data.syllabus, data.sources),
    questions: combineQuestions(data, demoEnabled),
  };
}

export function describeQuestionSource(question, indexes) {
  const sourceInfo = question.source ?? {};
  const cataloguedSource = sourceInfo.source_id ? indexes.sourcesById.get(sourceInfo.source_id) : undefined;
  if (cataloguedSource) {
    return {
      title: cataloguedSource.title,
      publisher: cataloguedSource.publisher,
      officialStatus: cataloguedSource.official_status,
      url: sourceInfo.url || cataloguedSource.url,
      locator: sourceInfo.locator || "Sin localizador especificado",
    };
  }
  return {
    title: sourceInfo.title || "Procedencia no especificada",
    publisher: question.isDemo ? "Contenido de demostración" : "Sin editor especificado",
    officialStatus: question.official_status,
    url: sourceInfo.url || null,
    locator: sourceInfo.locator || "Sin localizador especificado",
  };
}
