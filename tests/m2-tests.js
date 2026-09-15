import {
  buildIdentityIndexes,
  resolveTopicReference,
  selectRuntimeContext,
  validateCatalogs,
  validateLegacySyllabusCompatibility,
} from "../assets/js/catalog-service.js?gsi2";
import { buildIndexes } from "../assets/js/data-service.js?gsi2";
import { parseRoute, resolveRoute } from "../assets/js/router.js?gsi2";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
let passed = 0;
let failed = 0;
const unhandled = [];
window.addEventListener("error", (event) => unhandled.push(event.error || event.message));
window.addEventListener("unhandledrejection", (event) => unhandled.push(event.reason));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function expectThrow(callback, message) {
  let thrown = false;
  try {
    callback();
  } catch {
    thrown = true;
  }
  assert(thrown, message);
}

async function test(name, callback) {
  const item = document.createElement("li");
  try {
    await callback();
    item.className = "pass";
    item.textContent = `APROBADA: ${name}`;
    passed += 1;
  } catch (error) {
    item.className = "fail";
    item.textContent = `FALLIDA: ${name} — ${error instanceof Error ? error.message : String(error)}`;
    failed += 1;
  }
  results.append(item);
}

async function fetchText(path) {
  const response = await fetch(path, { cache: "no-store" });
  assert(response.ok, `No se pudo cargar ${path}.`);
  return response.text();
}

async function fetchJson(path) {
  return JSON.parse(await fetchText(path));
}

const [oppositions, syllabiCatalog, legacySyllabus, sources, topicContent, official, ai, manual, demo, catalogSource, dataServiceSource, syllabusViewSource, appSource, indexHtml, validatorSource] = await Promise.all([
  fetchJson("../data/oppositions.json"),
  fetchJson("../data/syllabi-catalog.json"),
  fetchJson("../data/syllabus.json"),
  fetchJson("../data/sources.json"),
  fetchJson("../data/topic-content.json"),
  fetchJson("../data/questions-official.json"),
  fetchJson("../data/questions-ai.json"),
  fetchJson("../data/questions-manual.json"),
  fetchJson("../data/demo/questions-ai-demo.json"),
  fetchText("../assets/js/catalog-service.js?gsi2"),
  fetchText("../assets/js/data-service.js?gsi2"),
  fetchText("../assets/js/syllabus-view.js?gsi2"),
  fetchText("../assets/js/app.js?gsi2"),
  fetchText("../index.html"),
  fetchText("../scripts/validate_gsi_final.py"),
]);

const runtimeContext = selectRuntimeContext(oppositions, syllabiCatalog);
const selectedSyllabus = runtimeContext.syllabus;
const plannedSyllabus = syllabiCatalog.syllabi.find((syllabus) => syllabus.runtime_available === false);
const allCatalogTopics = selectedSyllabus.blocks.flatMap((block) => block.topics);
const legacyTopics = legacySyllabus.blocks.flatMap((block) => block.topics);
const contentByTopic = new Map(topicContent.topics.map((topic) => [topic.topicId, topic]));
const indexes = buildIndexes(legacySyllabus, sources);
const originalCatalogs = JSON.stringify({ oppositions, syllabiCatalog });

await test("carga válida de ambos catálogos", () => {
  const result = validateCatalogs(oppositions, syllabiCatalog);
  assert(result.oppositionsById.size === oppositions.oppositions.length && result.syllabiById.size === syllabiCatalog.syllabi.length, "Los catálogos no se indexaron.");
});
await test("selección automática del único contexto runtime", () => {
  const reversedOppositions = JSON.parse(JSON.stringify(oppositions));
  const reversedSyllabi = JSON.parse(JSON.stringify(syllabiCatalog));
  reversedOppositions.oppositions.reverse();
  reversedSyllabi.syllabi.reverse();
  const reversedContext = selectRuntimeContext(reversedOppositions, reversedSyllabi);
  assert(reversedContext.syllabusId === runtimeContext.syllabusId, "La selección depende del orden del array.");
});
await test("selección actual OPP-GSI / SYL-GSI-2025", () => {
  assert(runtimeContext.oppositionId === "OPP-GSI" && runtimeContext.syllabusId === "SYL-GSI-2025", "El contexto disponible no es el esperado.");
});
await test("rechazo del programa histórico como contexto operativo", () => {
  expectThrow(() => selectRuntimeContext(oppositions, syllabiCatalog, { oppositionId: "OPP-TAI", syllabusId: "SYL-TAI-2025" }), "Se aceptó el programa histórico.");
});

await test("GSI dispone de 57 identidades y no hay programa planificado", () => {
  assert(!plannedSyllabus && buildIdentityIndexes(selectedSyllabus).topicsByCanonicalId.size === 57, "El mapa GSI no está completo.");
});

await test("se indexan los 57 temas GSI", () => assert(allCatalogTopics.length === legacyTopics.length && allCatalogTopics.length === 57, "El total de temas no se conserva."));
await test("cada legacy_id resuelve a sí mismo", () => {
  assert(allCatalogTopics.every((topic) => resolveTopicReference(runtimeContext, topic.legacy_id) === topic.legacy_id), "Un ID legacy no conserva su resolución.");
});
await test("cada canonical_id resuelve al legacy_id", () => {
  assert(allCatalogTopics.every((topic) => resolveTopicReference(runtimeContext, topic.canonical_id) === topic.legacy_id), "Una referencia canónica no se normaliza.");
});
await test("los aliases históricos resuelven de forma determinista", () => {
  assert(allCatalogTopics.every((topic) => topic.historical_aliases.every((alias) => resolveTopicReference(runtimeContext, alias) === topic.legacy_id)), "Un alias histórico no es determinista.");
});
await test("una referencia desconocida no resuelve", () => assert(resolveTopicReference(runtimeContext, "B8-T88") === null, "Una referencia desconocida fue aceptada."));
await test("una colisión artificial de alias se rechaza", () => {
  const duplicated = JSON.parse(JSON.stringify(selectedSyllabus));
  duplicated.blocks[0].topics[1].historical_aliases.push(duplicated.blocks[0].topics[0].canonical_id);
  expectThrow(() => buildIdentityIndexes(duplicated), "La colisión de aliases fue aceptada.");
});
await test("el servicio no modifica los objetos de catálogo recibidos", () => {
  selectRuntimeContext(oppositions, syllabiCatalog);
  validateCatalogs(oppositions, syllabiCatalog);
  assert(JSON.stringify({ oppositions, syllabiCatalog }) === originalCatalogs, "Los catálogos fueron modificados.");
});
await test("#temario/B1-T01 sigue siendo válida", () => assert(parseRoute("#temario/B1-T01").topicId === "B1-T01", "La ruta legacy no es válida."));
await test("#temario/B1-T01/<seccion> sigue siendo válida", () => assert(parseRoute("#temario/B1-T01/la-corona").sectionId === "la-corona", "La sección legacy no es válida."));
await test("una ruta canónica GSI equivalente se acepta", () => {
  const topic = allCatalogTopics[0];
  const route = parseRoute(`#temario/${topic.canonical_id}`);
  assert(!route.error && route.topicId === topic.canonical_id, "La forma canónica no se acepta.");
});
await test("una ruta canónica GSI con sección se acepta", () => {
  const topic = allCatalogTopics[0];
  const route = parseRoute(`#temario/${topic.canonical_id}/la-corona`);
  assert(!route.error && route.sectionId === "la-corona", "La sección canónica no se acepta.");
});
await test("#temario/B9-T99 sigue siendo inválida", () => assert(parseRoute("#temario/B9-T99").error, "La ruta inválida fue aceptada."));
await test("una sección malformada sigue siendo inválida", () => assert(parseRoute("#temario/B1-T01/Seccion").error, "La sección malformada fue aceptada."));
await test("#examen, #refuerzo y #estadisticas no regresan", () => {
  assert(["#examen", "#refuerzo", "#estadisticas"].every((route) => resolveRoute(route) === route.slice(1)), "Una ruta existente regresó.");
});
await test("ruta canónica y legacy resuelven el mismo tema operativo", () => {
  const topic = allCatalogTopics[0];
  assert(resolveTopicReference(runtimeContext, topic.canonical_id) === resolveTopicReference(runtimeContext, topic.legacy_id), "Las dos rutas no llegan al mismo ID operativo.");
});
await test("el contenido editorial se solicita con el ID legacy", () => {
  const topic = allCatalogTopics[0];
  const legacyId = resolveTopicReference(runtimeContext, topic.canonical_id);
  assert(contentByTopic.has(legacyId) && syllabusViewSource.includes("loadTopicFragment(viewState.index, operationalTopicId)"), "La vista no entrega el ID legacy al contenido editorial.");
});
await test("los enlaces internos existentes siguen siendo legacy", () => assert(syllabusViewSource.includes("study.href = `#temario/${topic.id}`"), "Los enlaces internos dejaron de usar topic.id legacy."));
await test("la interfaz identifica GSI A2 sin selector de otra oposición", () => {
  assert(indexHtml.includes("GSI A2") && !/\bTAI\b/.test(indexHtml) && !indexHtml.includes('id="opposition-select"'), "Identidad activa incorrecta.");
});

await test("no se introducen nuevas claves localStorage", () => {
  assert(!catalogSource.includes("localStorage") && !dataServiceSource.includes(".v2") && !appSource.includes(".v2"), "M2 introduce persistencia nueva.");
});
await test("las preguntas conservan block_id y topic_id legacy", () => {
  const topicIds = new Set(legacyTopics.map((topic) => topic.id));
  const collections = [official, ai, manual];
  assert(collections.every((collection) => collection.questions.every((question) => /^B[1-4]$/.test(question.block_id) && topicIds.has(question.topic_id) && question.opposition_id === "OPP-GSI")), "Las preguntas no conservan su forma legacy.");
});
await test("el runtime excluye demo incluso con parámetros antiguos", () => {
  assert(/export function isDemoMode\(\)\s*\{\s*return false;/.test(dataServiceSource), "Demo puede entrar en el banco.");
});

await test("las rutas continúan siendo relativas y aptas para GitHub Pages", () => {
  assert(runtimeContext.legacySourcePath === syllabiCatalog.runtime_source.path && !runtimeContext.legacySourcePath.startsWith("/") && dataServiceSource.includes("`./${runtimeContext.legacySourcePath}`"), "La materialización runtime no usa una ruta relativa.");
});
await test("no hay dependencias externas", () => {
  assert(!catalogSource.match(/https?:\/\//) && !appSource.match(/https?:\/\//), "Se detectó una dependencia externa.");
});
await test("no hay escritura de catálogo", () => assert(!catalogSource.includes("fetch(") && !catalogSource.includes("localStorage"), "El servicio de catálogo tiene efectos secundarios."));
await test("los datos protegidos permanecen cubiertos por el validador", () => {
  assert(["data/syllabus.json", "data/sources.json", "data/topic-content.json", "data/questions-{origin}.json"].every((path) => validatorSource.includes(path)), "El validador no protege todos los datos requeridos.");
});
await test("la materialización legacy coincide con el catálogo seleccionado", () => assert(validateLegacySyllabusCompatibility(runtimeContext, legacySyllabus), "La compatibilidad legacy no valida."));
await test("los índices de aplicación siguen usando IDs legacy", () => {
  assert(legacyTopics.every((topic) => indexes.topicsById.has(topic.id)) && !indexes.topicsById.has(allCatalogTopics[0].canonical_id), "Los índices operativos dejaron de ser legacy.");
});
await test("el contexto expone política e índices de identidad", () => {
  assert(runtimeContext.identityPolicy.operational_id_kind === "legacy" && runtimeContext.identity.topicsByCanonicalId.size === allCatalogTopics.length, "Faltan políticas o índices runtime.");
});
await test("la selección explícita válida produce el mismo contexto", () => {
  const explicit = selectRuntimeContext(oppositions, syllabiCatalog, { oppositionId: runtimeContext.oppositionId, syllabusId: runtimeContext.syllabusId });
  assert(explicit.legacySourcePath === runtimeContext.legacySourcePath, "La selección explícita cambió el runtime.");
});
await test("el runner no registra excepciones ni promesas rechazadas", () => assert(unhandled.length === 0, `Excepción no controlada: ${unhandled.join(" | ")}`));

summary.textContent = `${passed} pruebas aprobadas y ${failed} fallidas.`;
summary.dataset.state = failed ? "error" : "success";
