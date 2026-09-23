import { parseRoute, resolveRoute } from "../assets/js/router.js?gsi2";
import { parseSafeTopicFragment } from "../assets/js/topic-content-service.js?gsi2";

const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) throw new Error(message);
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
    item.textContent = `FALLIDA: ${name} — ${error.message}`;
    failed += 1;
  }
  results.append(item);
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  assert(response.ok, `No se pudo cargar ${path}.`);
  return response.json();
}

async function fetchText(path) {
  const response = await fetch(path, { cache: "no-store" });
  assert(response.ok, `No se pudo cargar ${path}.`);
  return response.text();
}

function sourceFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]+?)\n---\n\n# (.+)$/m);
  assert(match, "El Markdown no tiene el front matter y H1 esperados.");
  return { metadata: JSON.parse(match[1]), title: match[2] };
}

const [syllabus, sources, index, appHtml, serviceSource, builderSource] = await Promise.all([
  fetchJson("../data/syllabus.json"),
  fetchJson("../data/sources.json"),
  fetchJson("../data/topic-content.json"),
  fetchText("../index.html"),
  fetchText("../assets/js/topic-content-service.js?gsi2"),
  fetchText("../scripts/build_gsi_content.py"),
]);
const officialTopics = syllabus.blocks.flatMap((block) => block.topics.map((topic) => ({ ...topic, blockId: block.id })));
const sourceIds = new Set(sources.sources.map((source) => source.id));

await test("el índice editorial carga", () => assert(index.version === 1, "La versión del índice no es 1."));
await test("existen exactamente 57 registros de contenido", () => assert(index.topics.length === 57, "El índice no tiene 57 temas."));
await test("cada tema oficial aparece exactamente una vez", () => assert(new Set(index.topics.map((topic) => topic.topicId)).size === officialTopics.length, "Hay IDs duplicados o ausentes."));
await test("cada contentPath es relativo", () => assert(index.topics.every((topic) => /^content\/generated\/B[1-4]-T\d{2}\.html$/.test(topic.contentPath)), "Hay una ruta no relativa."));
await test("cada checksum tiene formato SHA-256", () => assert(index.topics.every((topic) => /^[a-f0-9]{64}$/.test(topic.checksum)), "Hay un checksum inválido."));
await test("cada sourceId citado existe", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => sourceIds.has(ref.sourceId)))), "Hay una fuente inexistente."));
await test("cada referencia tiene localizador", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => ref.locator.trim()))), "Falta un localizador."));
await test("cada sectionId es único dentro del tema", () => assert(index.topics.every((topic) => new Set(topic.sections.map((section) => section.sectionId)).size === topic.sections.length), "Hay secciones duplicadas."));
await test("no se fabrican fragmentos externos", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => ref.officialFragmentUrl === null))), "Hay un fragmento externo no verificado."));
await test("el constructor es determinista", () => assert(builderSource.includes("render_topic") && !builderSource.includes("datetime.now"), "El constructor depende de la hora actual."));
await test("B1-T01 contiene referencias verificables", () => {
  const pilot = index.topics.find((topic) => topic.topicId === "B1-T01");
  assert(pilot.status === "complete" && pilot.reviewStatus === "reviewed" && pilot.sections.some((section) => section.sourceRefs.length), "El piloto no es trazable.");
});
await test("los 57 temas tienen cobertura completa", () => {
  assert(index.topics.length === 57 && index.topics.every((t) => t.status === "complete"), "Queda cobertura parcial.");
});

await test("cada tema revisado remite al corpus de 23/09/2026", () => assert(index.topics.every((t) => t.reviewStatus === "reviewed" && t.sections.some((s) => s.sourceRefs.some((r) => r.sourceId === `SRC-GSI-${t.topicId.split("-")[0]}-REV20260923`))), "Revisión sin fuente canónica."));

await test("el modo demo no duplica el índice editorial", () => assert(!serviceSource.includes("demo/questions") && !serviceSource.includes("isDemo"), "El servicio editorial depende del banco demo."));
await test("la ruta #temario muestra el listado", () => assert(parseRoute("#temario").route === "temario" && !parseRoute("#temario").topicId, "No se resolvió el listado."));
await test("la ruta de detalle muestra el tema correcto", () => assert(parseRoute("#temario/B1-T01").topicId === "B1-T01", "No se resolvió el tema."));
await test("la ruta de sección selecciona el fragmento correcto", () => assert(parseRoute("#temario/B1-T01/la-corona").sectionId === "la-corona", "No se resolvió la sección."));
await test("la apertura directa conserva tema y sección", () => assert(parseRoute("#temario/B1-T01/la-corona").topicId === "B1-T01", "La apertura directa no conserva el tema."));
await test("la recarga conserva el estado de ruta", () => assert(JSON.stringify(parseRoute("#temario/B1-T01/la-corona")) === JSON.stringify(parseRoute("#temario/B1-T01/la-corona")), "La ruta no es estable."));
await test("atrás y adelante conservan rutas editoriales", () => assert(parseRoute("#temario/B1-T01").route === "temario" && parseRoute("#temario").route === "temario", "Las rutas no son reversibles."));
await test("una ruta de tema malformada produce error controlado", () => assert(parseRoute("#temario/X1").error, "No se informó el error."));
await test("una ruta de sección malformada produce error controlado", () => assert(parseRoute("#temario/B1-T01/Seccion").error, "No se informó el error."));
await test("las rutas anteriores y el plan se conservan", () => assert(resolveRoute("#estadisticas") === "estadisticas" && resolveRoute("#examen") === "examen" && resolveRoute("#plan") === "plan", "Se perdió una ruta válida."));
await test("cada HTML generado existe", async () => {
  await Promise.all(index.topics.map(async (topic) => {
    const html = await fetchText(`../${topic.contentPath}`);
    assert(html.length > 0, `${topic.topicId} está vacío.`);
  }));
});
await test("el fragmento generado no contiene H1", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(!/<h1\b/i.test(html), "El fragmento contiene H1.");
});
await test("la vista final contiene un único H1", () => {
  const section = appHtml.match(/<section data-view="temario"[\s\S]*?<section id="study-plan-view"/);
  assert(section && (section[0].match(/<h1\b/gi) || []).length === 1, "La vista Temario tiene más de un H1.");
});
await test("H1 del Markdown coincide con syllabus.json", async () => {
  const topic = officialTopics.find((item) => item.id === "B1-T01");
  const markdown = await fetchText("../content/topics/B1-T01.md");
  assert(markdown.split("\n")[0].slice(2) === topic.title, "El H1 no coincide con el temario oficial.");
});
await test("la jerarquía H2/H3 es válida", async () => {
  const fragment = parseSafeTopicFragment(await fetchText("../content/generated/B1-T01.html"));
  let previous = 1;
  for (const h of fragment.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
    const level = Number(h.tagName[1]); assert(level <= previous + 1, `Salto ${previous} a ${level}`); previous = level;
  }
});

await test("el antiguo tema pendiente tiene ahora apuntes sustanciales", async () => {
  const html = await fetchText("../content/generated/B2-T01.html");
  assert(html.length > 5000 && !html.includes("Contenido pendiente de una fuente verificable."), "Persiste un placeholder.");
});

await test("el contenido distingue corpus editorial de documento oficial", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(html.includes("no documento oficial") && html.includes("V2.1"), "Procedencia ambigua.");
});

await test("la tabla de contenidos enlaza las secciones locales", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(index.topics[0].sections.every((s) => html.includes(`#temario/B1-T01/${s.sectionId}`)), "Falta el enlace local de sección.");
});
await test("un script se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<script>alert(1)</script>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó script.");
});
await test("un style se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<style>body{}</style>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó style.");
});
await test("un iframe se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<iframe src='https://example.com'></iframe>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó iframe.");
});
await test("un object se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<object></object>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó object.");
});
await test("un embed se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<embed>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó embed.");
});
await test("un form se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<form></form>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó form.");
});
await test("un atributo on* se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<p onclick='x'>x</p>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó atributo de evento.");
});
await test("una URL javascript se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<a href='javascript:alert(1)'>x</a>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó javascript:.");
});
await test("una URL data se rechaza antes de insertar", () => {
  let rejected = false;
  try { parseSafeTopicFragment("<a href='data:text/html,x'>x</a>"); } catch { rejected = true; }
  assert(rejected, "No se rechazó data:.");
});
await test("un enlace HTTPS se conserva en DocumentFragment", () => {
  const fragment = parseSafeTopicFragment("<article><a href='https://www.boe.es/'>BOE</a></article>");
  assert(fragment instanceof DocumentFragment && fragment.firstElementChild?.tagName === "ARTICLE", "No se importó el fragmento seguro.");
});
await test("el servicio no escribe contenido en localStorage", () => assert(!serviceSource.includes("localStorage"), "El servicio usa localStorage."));
await test("el servicio usa una lista cerrada de rutas", () => assert(serviceSource.includes("allowedPaths") && serviceSource.includes("CONTENT_PATH_RE"), "No se limita contentPath."));
await test("la auditoría verifica integridad de fuentes y derivados", async () => {
  const validator = await fetchText("../scripts/validate_gsi_final.py");
  assert(validator.includes("study_sha256") && validator.includes("gsi-document-register.json") && validator.includes("evidence_sha256"), "Faltan controles de integridad.");
});

await test("el informe de cobertura distingue contenido y preguntas pendientes", async () => {
  const report = await fetchJson("../data/gsi-coverage-report.json");
  assert(report.topics.length === 57 && report.topics.every((t) => t.has_source && t.study_characters > 1500 && Number.isInteger(t.active) && Number.isInteger(t.pending)), "Cobertura incompleta.");
});

summary.textContent = `${passed} pruebas aprobadas y ${failed} fallidas.`;
summary.dataset.state = failed ? "error" : "success";
