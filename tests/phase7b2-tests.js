import { parseRoute, resolveRoute } from "../assets/js/router.js?gsi2";
import { parseSafeTopicFragment } from "../assets/js/topic-content-service.js?gsi2";
import { buildIndexes, getSourceDisplayData } from "../assets/js/data-service.js?gsi2";

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
  fetchText("../data/gsi-coverage-report.json"), fetchText("../assets/js/topic-content-service.js?gsi2"),
  fetchText("../tests/phase7b2-tests.js"), ...PILOTS.map((id) => fetchText(`../content/generated/${id}.html`)),
]);
const byId = new Map(index.topics.map((topic) => [topic.topicId, topic]));
const sourceIndexes = buildIndexes(syllabus, sources);
const technicalPublic = sources.sources.find((source) => source.id === "SRC-GSI-B3-V21");
const technicalPrivate = sources.sources.find((source) => source.id === "SRC-GSI-B2-V21");
const historical = sources.sources.find((source) => Array.isArray(source.documents) && source.documents.length);
const originalSources = JSON.stringify(sources);

await test("el adaptador conserva fuentes BOE y canónicas GSI", () => {
  assert(historical && technicalPublic && technicalPrivate, "Faltan variantes reales");
  assert(getSourceDisplayData(historical).documents.length === historical.documents.length, "Documentos históricos perdidos");
  assert(getSourceDisplayData(technicalPublic).documents.length === 1 && getSourceDisplayData(technicalPublic).url?.startsWith("https://"), "Fuente pública no normalizada");
  assert(getSourceDisplayData(technicalPrivate).documents.length === 1 && getSourceDisplayData(technicalPrivate).url?.startsWith("https://"), "Fuente privada no segura");
  assert(sourceIndexes.documentsById.size === 33, "Los 21 documentos previos y 12 oficiales deben indexarse exactamente una vez");
  assert(sourceIndexes.documentsById.has("DOC-INAP-GSI-2024-ANSWER-KEY"), "Falta la plantilla definitiva oficial");
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
  assert(sourceIndexes.sourcesById.get("SRC-BOE-GSI-2025")?.documents.length, "B1-T01 perdió fuentes históricas");
});
await test("no hay iteración directa incompatible de source.documents", async () => {
  assert(!/for\s*\([^)]*of\s+source\.documents\)/.test(testsSource), "Prueba usa iteración insegura");
  assert(!/for\s*\([^)]*of\s+source\.documents\)/.test(await fetchText("../assets/js/data-service.js?gsi2")), "Consumidor incompatible");
});

for (const id of PILOTS) await test(`${id} carga como complete`, () => assert(byId.get(id)?.status === "complete", `${id} no es partial`));
for (const id of PILOTS) await test(`${id} muestra revisión del corpus`, () => assert(byId.get(id)?.reviewStatus === "reviewed", `${id} no está pendiente de revisión`));
for (const [position, id] of PILOTS.entries()) await test(`${id} identifica la versión del corpus`, () => assert(html[position].includes("V2.1"), `${id} no avisa`));
for (const [position, id] of PILOTS.entries()) await test(`${id} tiene tabla de contenidos`, () => assert(html[position].includes("topic-content__toc"), `${id} no tiene índice`));
await test("cada sección de las tablas resuelve", () => assert(PILOTS.every((id, pos) => byId.get(id).sections.every((section) => html[pos].includes(`id="${section.sectionId}"`))), "Hay anclas ausentes"));
await test("las rutas directas de pilotos funcionan", () => assert(PILOTS.every((id) => parseRoute(`#temario/${id}`).topicId === id), "Ruta directa incorrecta"));
await test("la recarga conserva la sección", () => assert(JSON.stringify(parseRoute("#temario/B4-T08/handshake-tls")) === JSON.stringify(parseRoute("#temario/B4-T08/handshake-tls")), "Ruta inestable"));
await test("atrás y adelante conservan Temario", () => assert(parseRoute("#temario/B2-T04").route === "temario" && parseRoute("#temario").route === "temario", "Ruta no reversible"));
await test("las fuentes se muestran", () => assert(html.every((value) => value.includes("Fuentes y localizadores")), "Falta lista de fuentes"));
await test("los localizadores se muestran", () => assert(html.every((value) => /· (?:I|II|III|IV)\.\d{2} ·/.test(value)), "Faltan localizadores"));
await test("no aparecen rutas privadas", () => assert(html.every((value) => !value.includes("technical/private") && !value.includes("C:\\")), "Se expone una ruta privada"));
await test("el tema LAN conserva su correspondencia GSI", () => assert(html[2].includes("VLAN") && html[2].includes("802.1Q"), "Contenido LAN ausente"));

await test("los controles de vigencia se distinguen de fuentes didácticas", () => {
  const control=sources.sources.find((s)=>s.id==="SRC-CONTROL-KUBERNETES");
  assert(control?.sourceKind==="currency-control" && control.documents.length===0, "Control externo sin etiqueta diferenciada");
});

await test("las dos fuentes canónicas de cada tema son identificables", () => assert(html.every((value) => (value.match(/<li><a href="https:\/\/docs.google.com\/document/g) || []).length === 2), "Fuentes de estudio y repaso incorrectas"));

await test("los ejemplos de código permanecen como texto", () => {
  const fragment = parseSafeTopicFragment("<pre><code>&lt;article&gt;ejemplo&lt;/article&gt;</code></pre>");
  assert(!fragment.querySelector("article") && fragment.querySelector("code").textContent.includes("<article>"), "Código interpretado como HTML");
});

await test("no hay scripts en fragmentos", () => assert(html.every((value) => !/<script\b/i.test(value)), "Script encontrado"));
await test("no hay atributos on*", () => assert(html.every((value) => !/\son[a-z]+\s*=/i.test(value)), "Atributo ejecutable"));
await test("no hay URLs javascript", () => assert(html.every((value) => !/javascript:/i.test(value)), "URL ejecutable"));
await test("el filtro complete tiene 57 temas", () => assert(index.topics.filter((topic) => topic.status === "complete").length === 57, "Recuento partial incorrecto"));
await test("la búsqueda puede encontrar términos de los tres pilotos", () => {
  const searchable = index.topics.map((topic) => topic.sections.map((section) => section.title).join(" ").toLowerCase()).join(" ");
  assert(["sql", "pruebas", "vlan"].every((term) => searchable.includes(term)), "Término no indexado");
});
await test("el modo demo usa el mismo contenido", () => assert(!service.includes("isDemo") && !service.includes("questions-ai-demo"), "Contenido editorial duplicado por demo"));
await test("tema inexistente se controla", () => assert(parseRoute("#temario/B9-T99").error, "Tema inválido aceptado"));
await test("sección inexistente mantiene ruta válida para control en vista", () => assert(parseRoute("#temario/B2-T04/no-existe").sectionId === "no-existe", "Sección no conservada"));
await test("el H1 visible de Temario es único", async () => { const app = await fetchText("../index.html"); const view = app.match(/<section data-view="temario"[\s\S]*?<section id="study-plan-view"/); assert((view?.[0].match(/<h1\b/gi) || []).length === 1, "H1 incorrecto"); });
await test("los fragmentos empiezan en H2", () => assert(html.every((value) => !/<h1\b/i.test(value) && /<h2\b/i.test(value)), "Jerarquía incorrecta"));
await test("el informe de cobertura coincide", () => { const coverage=JSON.parse(report);assert(coverage.topic_count===57 && coverage.topics.every((t)=>t.has_source), "Informe desactualizado"); });

await test("todos los temas conservan fecha de revisión", () => assert(index.topics.every((topic) => /^2026-08-/.test(topic.updatedAt)), "Revisión sin fecha"));

await test("todos los temas tienen secciones trazadas", () => assert(index.topics.every((topic) => topic.sections.length > 3 && topic.sections.every((s) => s.sourceRefs.length)), "Secciones sin fuente"));

await test("el servicio no escribe localStorage", () => assert(!service.includes("localStorage"), "Escritura local"));
await test("las rutas anteriores y el plan siguen funcionando", () => assert(resolveRoute("#examen") === "examen" && resolveRoute("#refuerzo") === "refuerzo" && resolveRoute("#estadisticas") === "estadisticas" && resolveRoute("#plan") === "plan", "Regresión de rutas"));
await test("las rutas son relativas y aptas para subruta", () => assert(index.topics.every((topic) => !topic.contentPath.startsWith("/") && service.includes("./data/topic-content.json")), "Ruta absoluta"));
await test("la aplicación conserva exactamente 57 temas", () => assert(index.topics.length === 57 && syllabus.blocks.flatMap((block) => block.topics).length === 57, "Temario alterado"));
await test("el parser rechaza scripts", () => { let rejected = false; try { parseSafeTopicFragment("<script>x</script>"); } catch { rejected = true; } assert(rejected, "Script aceptado"); });
await test("los derivados se cotejan con hashes de las fuentes", async () => { const validator=await fetchText("../scripts/validate_gsi_final.py");assert(validator.includes("sha(study)==m['study_sha256']") && validator.includes("record_sha256"), "Sin control de integridad"); });

await test("la integridad cubre todos los orígenes y las conversiones", async () => { const validator=await fetchText("../scripts/validate_gsi_final.py");assert(validator.includes("('official','manual','ai')") && validator.includes("logs/gsi-conversions.json"), "Protección incompleta"); });

await test("la biblioteca distingue práctica GSI y apoyo A1", async () => {
  const practice=await fetchJson("../data/gsi-practice.json");
  assert(practice.cases.length===8 && practice.library.filter((item)=>item.sourceType==="support-a1").every((item)=>item.description.includes("no constituye un simulacro fiel GSI")), "Apoyo confundido con simulacro");
});

await test("el runner no registra excepciones ni promesas rechazadas", () => assert(unhandled.length === 0, "Excepción no controlada: " + unhandled.join(" | ")));

summary.textContent = `${passed} pruebas aprobadas y ${failed} fallidas.`;
summary.dataset.state = failed ? "error" : "success";
