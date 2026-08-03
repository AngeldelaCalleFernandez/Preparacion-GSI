const DATA_FILES = Object.freeze({
  syllabus: "./data/syllabus.json",
  sources: "./data/sources.json",
  official: "./data/questions-official.json",
  ai: "./data/questions-ai.json",
  manual: "./data/questions-manual.json",
  updates: "./data/updates.json",
});

const DEMO_FILE = "./data/demo/questions-ai-demo.json";

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

function assertDataShape(data) {
  if (!Array.isArray(data.syllabus?.blocks) || !Array.isArray(data.sources?.sources) || !Array.isArray(data.updates?.updates)) {
    throw new Error("Los datos de temario, fuentes o actualizaciones no tienen la estructura esperada.");
  }
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + (block.topics?.length ?? 0), 0);
  if (data.syllabus.blocks.length !== 4 || topicCount !== 33) {
    throw new Error("El temario cargado no contiene los 4 bloques y 33 temas esperados.");
  }
  assertCollection(data.official, "official", "questions-official.json");
  assertCollection(data.ai, "ai", "questions-ai.json");
  assertCollection(data.manual, "manual", "questions-manual.json");
  if (data.demo) {
    assertCollection(data.demo, "ai", "questions-ai-demo.json");
  }
}

function buildIndexes(syllabus, sources) {
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
  for (const source of sources.sources) {
    sourcesById.set(source.id, source);
    for (const document of source.documents) {
      documentsById.set(document.id, { ...document, sourceId: source.id });
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
  return new URLSearchParams(window.location.search).get("demo") === "1";
}

export async function loadAppData() {
  const demoEnabled = isDemoMode();
  const entries = Object.entries(DATA_FILES);
  const loaded = await Promise.all(entries.map(async ([name, path]) => [name, await fetchJson(path)]));
  const data = Object.fromEntries(loaded);
  if (demoEnabled) {
    data.demo = await fetchJson(DEMO_FILE);
  }
  assertDataShape(data);
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
