// Real-browser checks against a static HTTP server mounted below a project path.
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : "playwright");
const mime = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".md": "text/plain" };
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (!pathname.startsWith("/gsi-test/")) { response.writeHead(404).end(); return; }
    const local = path.resolve(root, pathname.slice(10) || "index.html");
    if (!local.startsWith(root + path.sep) || local.includes(`${path.sep}.git${path.sep}`)) { response.writeHead(403).end(); return; }
    response.setHeader("Content-Type", `${mime[path.extname(local)] || "application/octet-stream"}; charset=utf-8`);
    response.end(await fs.readFile(local));
  } catch { response.writeHead(404).end(); }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}/gsi-test/index.html`;
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({ viewport: { width: 1365, height: 900 } });
const page = await context.newPage();
const failures = [], checks = [], consoleErrors = [], broken = [];
page.on("pageerror", (error) => consoleErrors.push(error.message));
page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
page.on("response", (response) => { if (response.status() >= 400) broken.push(`${response.status()} ${response.url()}`); });
async function check(name, fn) {
  try { await fn(); checks.push(name); console.log(`PASS ${name}`); }
  catch (error) { failures.push({ name, error: error.message }); console.log(`FAIL ${name}: ${error.message}`); }
}
try {
  await page.goto(base);
  await check("startup", async () => {
    await page.waitForFunction(() => document.querySelector("#home-topic-count").textContent === "57", null, { timeout: 15000 });
    assert.equal(await page.locator("#app-status").innerText(), "");
    assert.match(await page.title(), /Preparación GSI/);
  });
  await fs.mkdir(path.join(root, "tmp/gsi"), { recursive: true });
  await page.screenshot({ path: path.join(root, "tmp/gsi/home-desktop.png"), fullPage: true });
  const syllabus = JSON.parse(await fs.readFile(path.join(root, "data/syllabus.json"), "utf8"));
  for (const block of syllabus.blocks) for (const topic of block.topics) {
    await check(`topic ${topic.id}`, async () => {
      await page.goto(`${base}#temario/${topic.id}`);
      await page.locator(`.topic-content[data-topic-id="${topic.id}"]`).waitFor({ state: "visible", timeout: 5000 });
      assert.ok((await page.locator(".topic-content").innerText()).length > 1500);
    });
  }
  await check("mobile layout", async () => {
    await page.setViewportSize({ width: 390, height: 844 }); await page.goto(`${base}#temario/B2-T05`);
    await page.locator('.topic-content[data-topic-id="B2-T05"]').waitFor();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2), true);
    await page.screenshot({ path: path.join(root, "tmp/gsi/topic-mobile.png"), fullPage: true });
    await page.setViewportSize({ width: 1365, height: 900 });
  });
  await check("training and persistent response", async () => {
    await page.goto(`${base}#entrenamiento`);
    await page.locator("#training-block").selectOption("B1");
    await page.locator("#training-topic").selectOption("B1-T01");
    await page.locator("#training-quantity").fill("1");
    await page.locator('#training-form button[type="submit"]').click();
    await page.locator("#training-session .option-button").first().click();
    await page.locator(".answer-panel").waitFor();
    const count = await page.evaluate(() => Object.entries(localStorage).filter(([key]) => key.includes("OPP-GSI") && key.includes("training.v2")).map(([, raw]) => JSON.parse(raw).payload.responses.length)[0]);
    assert.equal(count, 1); await page.reload();
    assert.equal(await page.evaluate(() => Object.entries(localStorage).filter(([key]) => key.includes("OPP-GSI") && key.includes("training.v2")).map(([, raw]) => JSON.parse(raw).payload.responses.length)[0]), 1);
  });
  await check("complete GSI exam / correction", async () => {
    await page.goto(`${base}#examen`); await page.locator("#exam-mode").selectOption("gsi");
    await page.locator('#exam-config-form button[type="submit"]').click();
    await page.locator("#exam-active").waitFor({ state: "visible" });
    assert.match(await page.locator("#exam-progress").innerText(), /de 100/);
    assert.match(await page.locator("#exam-timer").innerText(), /90:00|89:5\d/);
    await page.locator("#exam-question .exam-option-button").first().click();
    await page.getByRole("button", { name: "Finalizar examen", exact: true }).click();
    await page.locator("#exam-confirm-finish").click();
    await page.locator("#exam-results").waitFor({ state: "visible" });
    assert.match(await page.locator("#exam-result-summary").innerText(), /99/);
  });
  await check("written selection / five answers / persistence", async () => {
    await page.goto(`${base}#practica`);
    await page.getByRole("button", { name: "Elegir opción A · iniciar 180 minutos", exact: true }).click();
    assert.equal(await page.locator('[id^="written-answer-"]').count(), 5);
    await page.locator("#written-answer-1").fill("Respuesta de comprobación del guardado.");
    await page.reload(); await page.locator("#written-answer-1").waitFor();
    assert.equal(await page.locator("#written-answer-1").inputValue(), "Respuesta de comprobación del guardado.");
  });
  await check("statistics / reinforcement views", async () => {
    for (const route of ["estadisticas", "refuerzo"]) { await page.goto(`${base}#${route}`); await page.locator(`[data-view="${route}"]`).waitFor({ state: "visible" }); }
    assert.equal(await page.locator("#app-status").innerText(), "");
  });
  const bank = (await Promise.all(["official", "manual", "ai"].map(async (origin) => JSON.parse(await fs.readFile(path.join(root, `data/questions-${origin}.json`), "utf8")).questions))).flat();
  const pendingTopics = [];
  await check("training through every topic filter", async () => {
    await page.goto(`${base}#entrenamiento`);
    await page.locator("#training-quantity").fill("1");
    for (const block of syllabus.blocks) for (const topic of block.topics) {
      await page.locator("#training-block").selectOption(block.id);
      await page.locator("#training-topic").selectOption(topic.id);
      const active = bank.filter((q) => q.topic_id === topic.id && q.is_active && q.validation_status === "validated");
      if (!active.length) {
        pendingTopics.push(topic.id);
        assert.match(await page.locator("#training-availability").innerText(), /No hay preguntas activas/);
        continue;
      }
      await page.locator('#training-form button[type="submit"]').click();
      const statement = await page.locator("#training-session .question-statement").innerText();
      const q = active.find((q) => q.statement === statement); assert.ok(q, `Wrong topic: ${topic.id}`);
      const wrong = q.options.find((o) => o.id !== q.correct_option).id;
      await page.locator(`#training-session .option-button[data-option-id="${wrong}"]`).click();
      assert.match(await page.locator(".answer-panel").innerText(), /Respuesta incorrecta/);
      await page.getByRole("button", { name: "Finalizar entrenamiento", exact: true }).click();
    }
    console.log(`Topic training: ${57 - pendingTopics.length} answered, ${pendingTopics.length} safely unavailable pending review.`);
  });
  await check("training each block, mixed, failed and unseen", async () => {
    for (const blockId of ["B1", "B2", "B3", "B4", ""]) {
      await page.locator("#training-block").selectOption(blockId);
      await page.locator("#training-history").selectOption("all");
      await page.locator('#training-form button[type="submit"]').click();
      const statement = await page.locator("#training-session .question-statement").innerText();
      const q = bank.find((q) => q.statement === statement); assert.ok(q && (!blockId || q.block_id === blockId));
      await page.locator(`#training-session .option-button[data-option-id="${q.correct_option}"]`).click();
      await page.getByRole("button",{name:"Finalizar entrenamiento",exact:true}).click();
    }
    for(const history of ["failed","unseen"]) {
      await page.locator("#training-history").selectOption(history); await page.locator('#training-form button[type="submit"]').click();
      await page.locator("#training-session .option-button").first().click(); await page.getByRole("button",{name:"Finalizar entrenamiento",exact:true}).click();
    }
  });
  await check("exam deadline survives reload and expires", async () => {
    await page.goto(`${base}#examen`); await page.locator("#exam-mode").selectOption("gsi");
    await page.locator('#exam-config-form button[type="submit"]').click();
    await page.locator("#exam-active").waitFor({state:"visible"});
    const previous = await page.evaluate(() => {
      const key = Object.keys(localStorage).find((k) => k.endsWith("exam.active.real.v2"));
      return JSON.parse(localStorage.getItem(key)).payload;
    });
    await page.reload(); await page.getByRole("button",{name:"Reanudar",exact:true}).click();
    assert.match(await page.locator("#exam-progress").innerText(),/de 100/);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem(Object.keys(localStorage).find((k)=>k.endsWith("exam.active.real.v2")))).payload.deadlineAt),previous.deadlineAt);
    await page.evaluate(() => {
      const key=Object.keys(localStorage).find((k)=>k.endsWith("exam.active.real.v2")); const value=JSON.parse(localStorage.getItem(key));
      value.payload.deadlineAt=new Date(Date.now()-1000).toISOString(); value.payload.startedAt=new Date(Date.parse(value.payload.deadlineAt)-5400000).toISOString(); localStorage.setItem(key,JSON.stringify(value));
    });
    await page.reload(); await page.getByRole("button",{name:"Reanudar",exact:true}).click();
    await page.locator("#exam-results").waitFor({state:"visible"}); assert.match(await page.locator("#app-status").innerText(),/Tiempo agotado/);
  });
  await check("written marking, rubric and saved score", async () => {
    page.on("dialog", (dialog) => dialog.accept());
    await page.goto(`${base}#practica`); await page.getByRole("button",{name:"Terminar y autocorregir",exact:true}).click();
    for(const [key,value] of [["technical","30"],["analysis","10"],["systematic","5"],["expression","5"]]) {await page.locator(`#score-${key}`).fill(value); await page.locator(`#score-${key}`).dispatchEvent("change");}
    assert.equal(await page.locator("#written-score").innerText(),"50 / 50 puntos"); await page.reload(); await page.locator("#written-score").waitFor(); assert.equal(await page.locator("#written-score").innerText(),"50 / 50 puntos");
  });
  await check("export reset import restores all GSI progress and preserves old data", async () => {
    await page.goto(`${base}#estadisticas`);
    await page.evaluate(()=>localStorage.setItem("tai.phase3.training.v1","historical untouched"));
    const downloadPromise=page.waitForEvent("download"); await page.locator("#progress-export").click(); const download=await downloadPromise;
    const backupPath=path.join(root,"tmp/gsi/smoke-progress.json");await download.saveAs(backupPath);
    const backup=JSON.parse(await fs.readFile(backupPath,"utf8"));assert.equal(backup.oppositionId,"OPP-GSI");
    await Promise.all([page.waitForNavigation(),page.locator("#progress-reset").click()]);await page.waitForFunction(()=>document.querySelector("#home-topic-count")?.textContent==="57");
    assert.equal(await page.evaluate(()=>localStorage.getItem("tai.phase3.training.v1")),"historical untouched");
    await Promise.all([page.waitForNavigation(),page.locator("#progress-import").setInputFiles(backupPath)]);
    await page.waitForFunction(()=>Boolean(localStorage.getItem("gsi.OPP-GSI.SYL-GSI-2025.written.v1")),null,{timeout:10000});
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem("gsi.OPP-GSI.SYL-GSI-2025.written.v1")).scores.technical),30);
    await page.goto(`${base}#practica`);await page.locator("#written-score").waitFor();assert.equal(await page.locator("#written-score").innerText(),"50 / 50 puntos");
  });
  await check("written timeout persists and makes answers read only", async () => {
    await page.getByRole("button",{name:"Elegir otro simulacro",exact:true}).click();await page.getByRole("button",{name:"Elegir opción B · iniciar 180 minutos",exact:true}).click();
    await page.evaluate(()=>{const k="gsi.OPP-GSI.SYL-GSI-2025.written.v1";const v=JSON.parse(localStorage.getItem(k));v.deadlineAt=new Date(Date.now()-1000).toISOString();v.startedAt=new Date(Date.parse(v.deadlineAt)-10800000).toISOString();localStorage.setItem(k,JSON.stringify(v));});
    await page.reload();await page.locator("#written-score").waitFor();assert.equal(await page.locator("#written-answer-1").evaluate(e=>e.readOnly),true);
  });
  await check("mobile main views and keyboard navigation", async () => {
    await page.setViewportSize({width:390,height:844});
    for(const route of ["inicio","entrenamiento","examen","practica","refuerzo","estadisticas"]) {
      await page.goto(`${base}#${route}`);await page.locator(`[data-view="${route}"]`).waitFor({state:"visible"});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),true,route);
      const text=await page.locator(`[data-view="${route}"]`).innerText();assert.doesNotMatch(text,/\bTAI\b|33 temas/);
    }
    await page.goto(`${base}#temario/B2-T07`);await page.locator('.topic-content[data-topic-id="B2-T07"]').waitFor();assert.match(await page.locator("#topic-detail").innerText(),/1.37 ya publicado/);
    await page.screenshot({path:path.join(root,"tmp/gsi/topic-mobile-viewport.png")});
    await page.locator('a[data-route="inicio"]').focus();await page.keyboard.press("Enter");assert.match(page.url(),/#inicio$/);
    await page.setViewportSize({width:1365,height:900});
  });

  await check("official library: three convocations, twelve PDFs and provisional excluded", async () => {
    await page.goto(`${base}#examen`);
    await page.locator('#official-exam-library details').first().waitFor({state:'attached'});
    assert.equal(await page.locator('#official-exam-library details').count(),3);
    assert.equal(await page.locator('#official-exam-library a[href^="https://sede.inap.gob.es/"]').count(),12);
    assert.equal(await page.locator('[data-exam-id="GSI-INAP-2025"] button').count(),0);
    await page.locator('[data-exam-id="GSI-INAP-2025"] summary').click();
    assert.match(await page.locator('[data-exam-id="GSI-INAP-2025"]').innerText(),/provisional/);
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),true);
    await page.screenshot({path:path.join(root,'tmp/gsi/official-mobile.png'),fullPage:true});
    await page.setViewportSize({width:1365,height:900});
  });
  for(const year of [2024,2022]) await check(`official ${year}: prepare, answer, resume and correct`, async () => {
    await page.goto(`${base}#examen`);
    const card=page.locator(`[data-exam-id="GSI-INAP-${year}"]`);
    await card.locator('summary').click();await card.getByRole('button').click();
    assert.equal(await page.locator('#official-exam-select').inputValue(),`GSI-INAP-${year}`);
    assert.equal(await page.locator('#exam-shuffle-options').isDisabled(),true);
    assert.equal(await page.locator('#exam-shuffle-options').isChecked(),false);
    await page.locator('#exam-config-form button[type="submit"]').click();
    await page.locator('#exam-active').waitFor({state:'visible'});
    assert.match(await page.locator('#exam-question').innerText(),new RegExp(`convocatoria ${year}`));
    const q=bank.find(q=>q.exam?.year===year&&q.exam.paper_order===1);
    await page.locator('#exam-question .exam-option-button').nth('ABCD'.indexOf(q.correct_option)).click();
    const deadline=await page.evaluate(()=>JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k=>k.endsWith('exam.active.real.v2')))).payload.deadlineAt);
    await page.reload();await page.getByRole('button',{name:'Reanudar',exact:true}).click();
    const state=await page.evaluate(()=>JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k=>k.endsWith('exam.active.real.v2')))).payload);
    assert.equal(state.deadlineAt,deadline);assert.equal(state.answersByQuestionId[q.id],q.correct_option);
    await page.getByRole('button',{name:'Finalizar examen',exact:true}).click();await page.locator('#exam-confirm-finish').click();
    await page.locator('#exam-results').waitFor({state:'visible'});assert.match(await page.locator('#exam-result-summary').innerText(),/99/);
    await page.locator('#exam-new').click();
  });
  await check("editorial review exposes confirmed status without writing progress", async () => {
    const before=await page.evaluate(()=>JSON.stringify(Object.entries(localStorage)));
    await page.goto(base.replace('index.html','review.html'));
    await page.waitForFunction(()=>document.querySelector('#review-question').options.length===803);
    await page.locator('#review-topic').selectOption('B4-T13');
    assert.equal(await page.locator('#review-question option').count(),20);
    const first=await page.locator('#review-content').innerText();
    assert.match(first,/Texto de la sección/);assert.match(first,/Generada · validada · activa/);assert.match(first,/confirmada por el propietario/);
    assert.ok((await page.locator('#review-content pre').innerText()).length>100);
    await page.locator('#review-next').click();assert.notEqual(await page.locator('#review-content').innerText(),first);
    await page.locator('#review-topic').selectOption('');await page.locator('#review-search').fill('AI-GSI-B1-T03-001');
    assert.equal(await page.locator('#review-question option').count(),1);
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),true);
    assert.equal(await page.evaluate(()=>JSON.stringify(Object.entries(localStorage))),before);
  });
  await check("no console errors or broken HTTP routes", () => { assert.deepEqual(consoleErrors, []); assert.deepEqual(broken, []); });
} finally {
  await fs.mkdir(path.join(root, "logs"), { recursive: true });
  await fs.writeFile(path.join(root, "logs/gsi-browser-smoke.json"), JSON.stringify({ date: new Date().toISOString(), basePath: "/gsi-test/", checks, failures, consoleErrors, broken }, null, 2));
  await browser.close(); await new Promise((resolve) => server.close(resolve));
}
if (failures.length) process.exitCode = 1;
