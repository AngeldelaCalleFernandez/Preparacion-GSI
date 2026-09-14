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
    assert.match(await page.title(), /GSI A2/);
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
  await check("no console errors or broken HTTP routes", () => { assert.deepEqual(consoleErrors, []); assert.deepEqual(broken, []); });
} finally {
  await fs.mkdir(path.join(root, "logs"), { recursive: true });
  await fs.writeFile(path.join(root, "logs/gsi-browser-smoke.json"), JSON.stringify({ date: new Date().toISOString(), basePath: "/gsi-test/", checks, failures, consoleErrors, broken }, null, 2));
  await browser.close(); await new Promise((resolve) => server.close(resolve));
}
if (failures.length) process.exitCode = 1;
