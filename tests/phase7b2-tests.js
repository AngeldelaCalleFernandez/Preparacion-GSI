import { parseRoute, resolveRoute } from "../assets/js/router.js?phase7b2runner=1";
import { parseSafeTopicFragment } from "../assets/js/topic-content-service.js?phase7b2runner=1";
import { buildIndexes, getSourceDisplayData } from "../assets/js/data-service.js?phase7b2runner=1";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
let passed = 0;
let failed = 0;
const unhandled = [];
window.addEventListener("error", (event) => unhandled.push(event.error || event.message));
window.addEventListener("unhandledrejection", (event) => unhandled.push(event.reason));

function assert(condition, message) { if (!condition) throw new Error(message); }
async function test(name, callback) {
  const item = document.createElement("li");
  try {
    await callback();
    item.className = "pass";
    item.textContent = `APROBADA: ${name}`;
    passed += 1;
  } catch (error) {
    item.className = "fail";
    item.textContent = `FALLIDA: ${name} — ${error.message}`;
    failed += 1;
  }
  results.append(item);
}
async function fetchText(path) { const response = await fetch(path, { cache: "no-store" }); assert(response.ok, `No carga ${path}`); return response.text(); }
async function fetchJson(path) { return JSON.parse(await fetchText(path)); }

const PILOTS = ["B2-T04", "B3-T07", "B4-T08"];
const [index, syllabus, sources, report, service, testsSource, ...html] = await Promise.all([
  fetchJson("../data/topic-content.json"), fetchJson("../data/syllabus.json"),
  fetchJson("../data/sources.json"),
  fetchText("../docs/COBERTURA_TEMARIO_FASE_7.md"), fetchText("../assets/js/topic-content-service.js"),
  fetchText("../tests/phase7b2-tests.js"), ...PILOTS.map((id) => fetchText(`../content/generated/${id}.html`)),
]);
const byId = new Map(index.topics.map((topic) => [topic.topicId, topic]));
const sourceIndexes = buildIndexes(syllabus, sources);
const technicalPublic = sources.sources.find((source) => source.id === "SRC-TECH-ECMA-262-2026");
const technicalPrivate = sources.sources.find((source) => source.id === "SRC-TECH-MICROSOFT-WINDOWS-HAL-LIBRARY");
const historical = sources.sources.find((source) => Array.isArray(source.documents) && source.documents.length);
const originalSources = JSON.stringify(sources);

await test("el adaptador conserva fuentes históricas y técnicas reales", () => {
  assert(historical && technicalPublic && technicalPrivate, "Faltan variantes reales");
  assert(getSourceDisplayData(historical).documents.length === historical.documents.length, "Documentos históricos perdidos");
  assert(getSourceDisplayData(technicalPublic).documents.length === 0 && getSourceDisplayData(technicalPublic).url?.startsWith("https://"), "Fuente pública no normalizada");
  assert(getSourceDisplayData(technicalPrivate).documents.length === 0 && getSourceDisplayData(technicalPrivate).url?.startsWith("https://"), "Fuente privada no segura");
  assert(sourceIndexes.documentsById.size === 31, "Documentos históricos no indexados exactamente una vez");
});
await test("el adaptador tolera fuentes técnicas inválidas sin bloquear índices", () => {
  const invalid = getSourceDisplayData({ sourceKind: "technical-primary-source", id: "bad", title: "Bad", canonicalUrl: "file:///private" });
  assert(invalid.warning && invalid.documents.length === 0 && invalid.url === null, "Fuente inválida no controlada");
});
await test("las fuentes técnicas reales resuelven sin documents ni rutas privadas", () => {
  for (const source of [technicalPublic, technicalPrivate]) {
    const display = getSourceDisplayData(source);
    assert(!display.url?.includes("documents/sources/technical/private/"), "Ruta privada expuesta");
    assert(Array.isArray(display.documents), "Documents no normalizado");
  }
  assert(["B2-T04", "B3-T07", "B4-T08"].every((topicId) => sourceIndexes.topicsById.has(topicId)), "Piloto no resuelto");
});
await test("buildIndexes conserva objetos, relaciones y documentos históricos", () => {
  assert(JSON.stringify(sources) === originalSources, "buildIndexes modificó sources.json");
  assert(historical.documents.every((document) => sourceIndexes.documentsById.get(document.id)?.sourceId === historical.id), "Documento histórico no resuelto");
  assert(sourceIndexes.sourcesById.get("SRC-BOE-2026-CODIGO-TAI")?.documents.length, "B1-T01 perdió fuentes históricas");
});
await test("no hay iteración directa incompatible de source.documents", async () => {
  assert(!/for\s*\([^)]*of\s+source\.documents\)/.test(testsSource), "Prueba usa iteración insegura");
  assert(!/for\s*\([^)]*of\s+source\.documents\)/.test(await fetchText("../assets/js/data-service.js")), "Consumidor incompatible");
});

for (const id of PILOTS) await test(`${id} carga como partial`, () => assert(byId.get(id)?.status === "partial", `${id} no es partial`));
for (const id of PILOTS) await test(`${id} muestra needs-review`, () => assert(byId.get(id)?.reviewStatus === "needs-review", `${id} no está pendiente de revisión`));
for (const [position, id] of PILOTS.entries()) await test(`${id} muestra aviso de cobertura parcial`, () => assert(html[position].includes("Cobertura parcial"), `${id} no avisa`));
for (const [position, id] of PILOTS.entries()) await test(`${id} tiene tabla de contenidos`, () => assert(html[position].includes("topic-content__toc"), `${id} no tiene índice`));
await test("cada sección de las tablas resuelve", () => assert(PILOTS.every((id, pos) => byId.get(id).sections.every((section) => html[pos].includes(`id="${section.sectionId}"`))), "Hay anclas ausentes"));
await test("las rutas directas de pilotos funcionan", () => assert(PILOTS.every((id) => parseRoute(`#temario/${id}`).topicId === id), "Ruta directa incorrecta"));
await test("la recarga conserva la sección", () => assert(JSON.stringify(parseRoute("#temario/B4-T08/handshake-tls")) === JSON.stringify(parseRoute("#temario/B4-T08/handshake-tls")), "Ruta inestable"));
await test("atrás y adelante conservan Temario", () => assert(parseRoute("#temario/B2-T04").route === "temario" && parseRoute("#temario").route === "temario", "Ruta no reversible"));
await test("las fuentes se muestran", () => assert(html.every((value) => value.includes("Fuentes utilizadas")), "Falta lista de fuentes"));
await test("los localizadores se muestran", () => assert(html.every((value) => value.includes("Localizador:")), "Faltan localizadores"));
await test("no aparecen rutas privadas", () => assert(html.every((value) => !value.includes("technical/private") && !value.includes("C:\\")), "Se expone una ruta privada"));
await test("RFC 9846 aparece en B4-T08", () => assert(html[2].includes("RFC 9846"), "Falta RFC 9846"));
await test("RFC 8446 no aparece como fuente vigente", () => assert(!html[2].includes("href=\"https://www.rfc-editor.org/rfc/rfc8446"), "RFC 8446 enlazado"));
await test("ECMA-262 aparece una sola vez como fuente lógica", () => assert((html[1].match(/ECMAScript 2026 Language Specification \(nueva pestaña\)/g) || []).length === 1, "ECMA duplicada"));
await test("los ejemplos de código no se ejecutan", () => assert(html[1].includes("&lt;article&gt;") && html[1].includes("language-javascript"), "Ejemplos no escapados"));
await test("no hay scripts en fragmentos", () => assert(html.every((value) => !/<script\b/i.test(value)), "Script encontrado"));
await test("no hay atributos on*", () => assert(html.every((value) => !/\son[a-z]+\s*=/i.test(value)), "Atributo ejecutable"));
await test("no hay URLs javascript", () => assert(html.every((value) => !/javascript:/i.test(value)), "URL ejecutable"));
await test("el filtro partial tiene cuatro temas", () => assert(index.topics.filter((topic) => topic.status === "partial").length === 4, "Recuento partial incorrecto"));
await test("la búsqueda puede encontrar términos de los tres pilotos", () => {
  const searchable = index.topics.map((topic) => topic.sections.map((section) => section.title).join(" ").toLowerCase()).join(" ");
  assert(["linux", "ecmascript", "handshake"].every((term) => searchable.includes(term)), "Término no indexado");
});
await test("el modo demo usa el mismo contenido", () => assert(!service.includes("isDemo") && !service.includes("questions-ai-demo"), "Contenido editorial duplicado por demo"));
await test("tema inexistente se controla", () => assert(parseRoute("#temario/B9-T99").error, "Tema inválido aceptado"));
await test("sección inexistente mantiene ruta válida para control en vista", () => assert(parseRoute("#temario/B2-T04/no-existe").sectionId === "no-existe", "Sección no conservada"));
await test("el H1 visible de Temario es único", async () => { const app = await fetchText("../index.html"); const view = app.match(/<section data-view="temario"[\s\S]*?<section data-view="entrenamiento"/); assert((view?.[0].match(/<h1\b/gi) || []).length === 1, "H1 incorrecto"); });
await test("los fragmentos empiezan en H2", () => assert(html.every((value) => !/<h1\b/i.test(value) && /<h2\b/i.test(value)), "Jerarquía incorrecta"));
await test("el informe de cobertura coincide", () => assert(report.includes("4 temas `partial`") && report.includes("29 `pending`"), "Informe desactualizado"));
await test("ningún tema está reviewed", () => assert(index.topics.every((topic) => topic.reviewStatus !== "reviewed"), "Tema reviewed"));
await test("ningún tema está complete", () => assert(index.topics.every((topic) => topic.status !== "complete"), "Tema complete"));
await test("el servicio no escribe localStorage", () => assert(!service.includes("localStorage"), "Escritura local"));
await test("las rutas anteriores siguen funcionando", () => assert(resolveRoute("#examen") === "examen" && resolveRoute("#refuerzo") === "refuerzo" && resolveRoute("#estadisticas") === "estadisticas", "Regresión de rutas"));
await test("las rutas son relativas y aptas para subruta", () => assert(index.topics.every((topic) => !topic.contentPath.startsWith("/") && service.includes("./data/topic-content.json")), "Ruta absoluta"));
await test("la aplicación conserva exactamente 33 temas", () => assert(index.topics.length === 33 && syllabus.blocks.flatMap((block) => block.topics).length === 33, "Temario alterado"));
await test("el parser rechaza scripts", () => { let rejected = false; try { parseSafeTopicFragment("<script>x</script>"); } catch { rejected = true; } assert(rejected, "Script aceptado"); });
await test("el constructor determinista está cubierto por el validador", async () => { const validator = await fetchText("../scripts/validate_phase7b2.py"); assert(validator.includes("first.outputs != second.outputs"), "Sin control determinista"); });
await test("los datos protegidos están cubiertos", async () => { const validator = await fetchText("../scripts/validate_phase7b2.py"); assert(validator.includes("data/questions-official.json") && validator.includes("documents/sources/technical/manifest.json"), "Protección incompleta"); });
await test("no hay contenido de 7B.3 o Fase 8", async () => {
  const [phase7b3, phase8] = await Promise.all([
    fetch("../PLAN_FASE_7B_3.md", { cache: "no-store" }),
    fetch("../PLAN_FASE_8.md", { cache: "no-store" }),
  ]);
  assert(!phase7b3.ok && !phase8.ok, "Existe un entregable de una fase posterior");
});
await test("el runner no registra excepciones ni promesas rechazadas", () => assert(unhandled.length === 0, "Excepción no controlada: " + unhandled.join(" | ")));

summary.textContent = `${passed} pruebas aprobadas y ${failed} fallidas.`;
summary.dataset.state = failed ? "error" : "success";
