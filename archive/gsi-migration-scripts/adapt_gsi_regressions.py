"""Retain regression coverage while replacing the superseded 33-topic pilot contract."""
import re
import shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
archive=ROOT/'archive/tai-before-gsi/tests'
archive.mkdir(parents=True,exist_ok=True)
for p in (ROOT/'tests').glob('*'):
    if p.is_file() and p.name.startswith(('phase','m2','m3')):
        target=archive/p.name
        if not target.exists(): shutil.copy2(p,target)
        s=p.read_text('utf-8')
        if p.suffix=='.js':
            s=re.sub(r'(\.\./assets/js/[\w-]+\.js)(?:\?[^"\s]*)?(?=")',r'\1?gsi2',s)
            s=s.replace('tai.phase3.training.v1','gsi.phase3.training.v1')
        if p.suffix=='.html': s=s.replace(' · TAI',' · GSI A2')
        p.write_text(s,'utf-8')
def replace(file,old,new):
    p=ROOT/file;s=p.read_text('utf-8')
    if old not in s: raise ValueError(file+': '+old[:90])
    p.write_text(s.replace(old,new),'utf-8')
def test(file,name,new):
    p=ROOT/file;s=p.read_text('utf-8'); start=s.index('await test("'+name+'"')
    end=s.find('\nawait test(',start+1)
    if end<0: end=s.index('\nsummary.',start)
    p.write_text(s[:start]+new+'\n'+s[end:],'utf-8')
replace('tests/phase4-tests.js','validation_status: collection === "ai" ? "validated" : "pending_review",','validation_status: "validated",')
replace('tests/m3-tests.js','58. GSI continúa no operativo','58. GSI es el único programa operativo')
replace('tests/m3-tests.js','planned?.runtime_available === false && planned?.status === "planned"','planned?.runtime_available === true && planned?.status === "active" && catalog.oppositions.length === 1')
p='tests/m2-tests.js'
replace(p,'"OPP-TAI" && runtimeContext.syllabusId === "SYL-TAI-2025"','"OPP-GSI" && runtimeContext.syllabusId === "SYL-GSI-2025"')
replace(p,'selección actual OPP-TAI / SYL-TAI-2025','selección actual OPP-GSI / SYL-GSI-2025')
test(p,'rechazo de SYL-GSI-2025 como contexto operativo','''await test("rechazo del programa histórico como contexto operativo", () => {
  expectThrow(() => selectRuntimeContext(oppositions, syllabiCatalog, { oppositionId: "OPP-TAI", syllabusId: "SYL-TAI-2025" }), "Se aceptó el programa histórico.");
});''')
test(p,'GSI no tiene temas ni mapa de identidades','''await test("GSI dispone de 57 identidades y no hay programa planificado", () => {
  assert(!plannedSyllabus && buildIdentityIndexes(selectedSyllabus).topicsByCanonicalId.size === 57, "El mapa GSI no está completo.");
});''')
replace(p,'se conservan los 33 temas TAI','se indexan los 57 temas GSI')
replace(p,'allCatalogTopics.length === 33','allCatalogTopics.length === 57')
replace(p,'ruta canónica TAI','ruta canónica GSI')
test(p,'no aparecen temas GSI en la UI','''await test("la interfaz identifica GSI A2 sin selector de otra oposición", () => {
  assert(indexHtml.includes("GSI A2") && !/\\bTAI\\b/.test(indexHtml) && !indexHtml.includes('id="opposition-select"'), "Identidad activa incorrecta.");
});''')
replace(p,'const collections = [official, ai, manual, demo];','const collections = [official, ai, manual];')
replace(p,'!Object.hasOwn(question, "opposition_id") && !Object.hasOwn(question, "syllabus_id")','question.opposition_id === "OPP-GSI"')
test(p,'el modo demo no cambia de semántica','''await test("el runtime excluye demo incluso con parámetros antiguos", () => {
  assert(/export function isDemoMode\\(\\)\\s*\\{\\s*return false;/.test(dataServiceSource), "Demo puede entrar en el banco.");
});''')
p='tests/phase7-tests.js'
replace(p,'../scripts/build_topic_content.py','../scripts/build_gsi_content.py')
replace(p,'builderSource.includes("build_artifacts")','builderSource.includes("render_topic")')
replace(p,'33 registros','57 registros');replace(p,'index.topics.length === 33','index.topics.length === 57');replace(p,'no tiene 33 temas','no tiene 57 temas')
replace(p,'pilot.status === "partial" && pilot.reviewStatus === "needs-review"','pilot.status === "complete" && pilot.reviewStatus === "reviewed"')
test(p,'solo los cuatro pilotos autorizados tienen cobertura parcial','''await test("los 57 temas tienen cobertura completa", () => {
  assert(index.topics.length === 57 && index.topics.every((t) => t.status === "complete"), "Queda cobertura parcial.");
});''')
test(p,'ningún tema se marca automáticamente como reviewed','''await test("cada tema revisado remite al corpus V2.1", () => assert(index.topics.every((t) => t.reviewStatus === "reviewed" && t.sections.some((s) => s.sourceRefs.some((r) => /SRC-GSI-B[1-4]-V21/.test(r.sourceId)))), "Revisión sin fuente canónica."));''')
replace(p,'sourceFrontMatter(markdown).title','markdown.split("\\n")[0].slice(2)')
test(p,'la jerarquía H2/H3 es válida','''await test("la jerarquía H2/H3 es válida", async () => {
  const fragment = parseSafeTopicFragment(await fetchText("../content/generated/B1-T01.html"));
  let previous = 1;
  for (const h of fragment.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
    const level = Number(h.tagName[1]); assert(level <= previous + 1, `Salto ${previous} a ${level}`); previous = level;
  }
});''')
test(p,'un tema pending muestra aviso útil','''await test("el antiguo tema pendiente tiene ahora apuntes sustanciales", async () => {
  const html = await fetchText("../content/generated/B2-T01.html");
  assert(html.length > 5000 && !html.includes("Contenido pendiente de una fuente verificable."), "Persiste un placeholder.");
});''')
test(p,'el piloto partial muestra aviso de cobertura','''await test("el contenido distingue corpus editorial de documento oficial", async () => {
  const html = await fetchText("../content/generated/B1-T01.html");
  assert(html.includes("no documento oficial") && html.includes("V2.1"), "Procedencia ambigua.");
});''')
replace(p,'html.includes("#temario/B1-T01/la-corona")','index.topics[0].sections.every((s) => html.includes(`#temario/B1-T01/${s.sectionId}`))')
# This suite keeps the source-adapter and HTML security cases, using actual GSI sources.
p='tests/phase7b2-tests.js'
replace(p,'source.id === "SRC-TECH-ECMA-262-2026"','source.id === "SRC-GSI-B3-V21"')
replace(p,'source.id === "SRC-TECH-MICROSOFT-WINDOWS-HAL-LIBRARY"','source.id === "SRC-GSI-B2-V21"')
replace(p,'getSourceDisplayData(technicalPublic).documents.length === 0','getSourceDisplayData(technicalPublic).documents.length === 1')
replace(p,'getSourceDisplayData(technicalPrivate).documents.length === 0','getSourceDisplayData(technicalPrivate).documents.length === 1')
replace(p,'sourceIndexes.documentsById.size === 31','sourceIndexes.documentsById.size === 21')
replace(p,'SRC-BOE-2026-CODIGO-TAI','SRC-BOE-GSI-2025')
replace(p,'carga como partial','carga como complete'); replace(p,'?.status === "partial"','?.status === "complete"')
replace(p,'muestra needs-review','muestra revisión del corpus');replace(p,'?.reviewStatus === "needs-review"','?.reviewStatus === "reviewed"')
replace(p,'muestra aviso de cobertura parcial','identifica la versión del corpus');replace(p,'html[position].includes("Cobertura parcial")','html[position].includes("V2.1")')
replace(p,'value.includes("Fuentes utilizadas")','value.includes("Fuentes y localizadores")');replace(p,'value.includes("Localizador:")','/· (?:I|II|III|IV)\\.\\d{2} ·/.test(value)')
test(p,'RFC 9846 aparece en B4-T08','''await test("el tema LAN conserva su correspondencia GSI", () => assert(html[2].includes("VLAN") && html[2].includes("802.1Q"), "Contenido LAN ausente"));''')
test(p,'ECMA-262 aparece una sola vez como fuente lógica','''await test("las dos fuentes canónicas de cada tema son identificables", () => assert(html.every((value) => (value.match(/<li><a href="https:\\/\\/docs.google.com\\/document/g) || []).length === 2), "Fuentes de estudio y repaso incorrectas"));''')
test(p,'los ejemplos de código no se ejecutan','''await test("los ejemplos de código permanecen como texto", () => {
  const fragment = parseSafeTopicFragment("<pre><code>&lt;article&gt;ejemplo&lt;/article&gt;</code></pre>");
  assert(!fragment.querySelector("article") && fragment.querySelector("code").textContent.includes("<article>"), "Código interpretado como HTML");
});''')
replace(p,'el filtro partial tiene cuatro temas','el filtro complete tiene 57 temas');replace(p,'index.topics.filter((topic) => topic.status === "partial").length === 4','index.topics.filter((topic) => topic.status === "complete").length === 57')
replace(p,'["linux", "ecmascript", "handshake"]','["sql", "pruebas", "vlan"]')
test(p,'ningún tema está reviewed','''await test("todos los temas conservan fecha de revisión", () => assert(index.topics.every((topic) => /^2026-08-/.test(topic.updatedAt)), "Revisión sin fecha"));''')
test(p,'ningún tema está complete','''await test("todos los temas tienen secciones trazadas", () => assert(index.topics.every((topic) => topic.sections.length > 3 && topic.sections.every((s) => s.sourceRefs.length)), "Secciones sin fuente"));''')
replace(p,'exactamente 33 temas','exactamente 57 temas');replace(p,'index.topics.length === 33','index.topics.length === 57');replace(p,'block.topics).length === 33','block.topics).length === 57')
print('All seven regression runners adapted; originals preserved under archive/.')
