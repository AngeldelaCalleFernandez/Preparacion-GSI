import { parseRoute, resolveRoute } from "../assets/js/router.js?phase7runner=1";
import { parseSafeTopicFragment } from "../assets/js/topic-content-service.js?phase7runner=1";

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
  fetchText("../assets/js/topic-content-service.js"),
  fetchText("../scripts/build_topic_content.py"),
]);
const officialTopics = syllabus.blocks.flatMap((block) => block.topics.map((topic) => ({ ...topic, blockId: block.id })));
const sourceIds = new Set(sources.sources.map((source) => source.id));

await test("el índice editorial carga", () => assert(index.version === 1, "La versión del índice no es 1."));
await test("existen exactamente 33 registros de contenido", () => assert(index.topics.length === 33, "El índice no tiene 33 temas."));
await test("cada tema oficial aparece exactamente una vez", () => assert(new Set(index.topics.map((topic) => topic.topicId)).size === officialTopics.length, "Hay IDs duplicados o ausentes."));
await test("cada contentPath es relativo", () => assert(index.topics.every((topic) => /^content\/generated\/B[1-4]-T\d{2}\.html$/.test(topic.contentPath)), "Hay una ruta no relativa."));
await test("cada checksum tiene formato SHA-256", () => assert(index.topics.every((topic) => /^[a-f0-9]{64}$/.test(topic.checksum)), "Hay un checksum inválido."));
await test("cada sourceId citado existe", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => sourceIds.has(ref.sourceId)))), "Hay una fuente inexistente."));
await test("cada referencia tiene localizador", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => ref.locator.trim()))), "Falta un localizador."));
await test("cada sectionId es único dentro del tema", () => assert(index.topics.every((topic) => new Set(topic.sections.map((section) => section.sectionId)).size === topic.sections.length), "Hay secciones duplicadas."));
await test("no se fabrican fragmentos externos", () => assert(index.topics.every((topic) => topic.sections.every((section) => section.sourceRefs.every((ref) => ref.officialFragmentUrl === null))), "Hay un fragmento externo no verificado."));
await test("el constructor es determinista", () => assert(builderSource.includes("build_artifacts") && !builderSource.includes("datetime.now"), "El constructor depende de la hora actual."));
await test("B1-T01 contiene referencias verificables", () => {
  const pilot = index.topics.find((topic) => topic.topicId === "B1-T01");
  assert(pilot.status === "partial" && pilot.reviewStatus === "needs-review" && pilot.sections.some((section) => section.sourceRefs.length), "El piloto no es trazable.");
});
await test("solo los cuatro pilotos autorizados tienen cobertura parcial", () => {
  const partialIds = index.topics.filter((topic) => topic.status === "partial").map((topic) => topic.topicId).sort();
  assert(JSON.stringify(partialIds) === JSON.stringify(["B1-T01", "B2-T04", "B3-T07", "B4-T08"]), "Hay cobertura no autorizada.");
});
await test("ningún tema se marca automáticamente como reviewed", () => assert(index.topics.every((topic) => topic.reviewStatus !== "reviewed"), "Hay una revisión automática."));
await test("el modo demo no duplica el índice editorial", () => assert(!serviceSource.includes("demo/questions") && !serviceSource.includes("isDemo"), "El servicio editorial depende del banco demo."));
await test("la ruta #temario muestra el listado", () => assert(parseRoute("#temario").route === "temario" && !parseRoute("#temario").topicId, "No se resolvió el listado."));
await test("la ruta de detalle muestra el tema correcto", () => assert(parseRoute("#temario/B1-T01").topicId === "B1-T01", "No se resolvió el tema."));
await test("la ruta de sección selecciona el fragmento correcto", () => assert(parseRoute("#temario/B1-T01/la-corona").sectionId === "la-corona", "No se resolvió la sección."));
await test("la apertura directa conserva tema y sección", () => assert(parseRoute("#temario/B1-T01/la-corona").topicId === "B1-T01", "La apertura directa no conserva el tema."));
await test("la recarga conserva el estado de ruta", () => assert(JSON.stringify(parseRoute("#temario/B1-T01/la-corona")) === JSON.stringify(parseRoute("#temario/B1-T01/la-corona")), "La ruta no es estable."));
await test("atrás y adelante conservan rutas editoriales", () => assert(parseRoute("#temario/B1-T01").route === "temario" && parseRoute("#temario").route === "temario", "Las rutas no son reversibles."));
await test("una ruta de tema malformada produce error controlado", () => assert(parseRoute("#temario/X1").error, "No se informó el error."));
await test("una ruta de sección malformada produce error controlado", () => assert(parseRoute("#temario/B1-T01/Seccion").error, "No se informó el error."));
await test("las rutas anteriores se conservan", () => assert(resolveRoute("#estadisticas") === "estadisticas" && resolveRoute("#examen") === "examen", "Se perdió una ruta previa."));
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
  const section = appHtml.match(/<section data-view="temario"[\s\S]*?<section data-view="entrenamiento"/);
  assert(section && (section[0].match(/<h1\b/gi) || []).length === 1, "La vista Temario tiene más de un H1.");
});
await test("H1 del Markdown coincide con syllabus.json", async () => {
  const topic = officialTopics.find((item) => item.id === "B1-T01");
  const markdown = await fetchText("../content/topics/B1-T01.md");
  assert(sourceFrontMatter(markdown).title === topic.title, "El H1 no coincide con el temario oficial.");
});
await test("la jerarquía H2/H3 es válida", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(html.indexOf("<h2 id=\"derechos-deberes-garantias\"") < html.indexOf("<h3 id=\"garantia-suspension\""), "Un H3 no sigue a un H2.");
});
await test("un tema pending muestra aviso útil", async () => {
  const html = await fetchText("../content/generated/B2-T01.html");
  assert(html.includes("Contenido pendiente de una fuente verificable."), "No se muestra la carencia documental.");
});
await test("el piloto partial muestra aviso de cobertura", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(html.includes("Cobertura parcial"), "No se muestra el aviso parcial.");
});
await test("la tabla de contenidos enlaza las secciones locales", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(html.includes("#temario/B1-T01/la-corona"), "Falta el enlace local de sección.");
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
await test("los archivos protegidos no cambian", async () => {
  const validator = await fetchText("../scripts/validate_phase7.py");
  assert(validator.includes("fase-6-completada") && validator.includes("sha256"), "El validador no protege el estado previo.");
});
await test("el informe de cobertura contiene el piloto y los pendientes", async () => {
  const report = await fetchText("../docs/COBERTURA_TEMARIO_FASE_7.md");
  assert(report.includes("B1-T01") && report.includes("B4-T10") && report.includes("Fase 7B"), "El informe no refleja la cobertura real.");
});

summary.textContent = `${passed} pruebas aprobadas y ${failed} fallidas.`;
summary.dataset.state = failed ? "error" : "success";
