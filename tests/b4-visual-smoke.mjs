import assert from "node:assert/strict";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : "playwright");
const mime = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".svg": "image/svg+xml" };
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (!pathname.startsWith("/gsi-b4/")) { response.writeHead(404).end(); return; }
    const local = path.resolve(root, pathname.slice(8) || "index.html");
    if (!local.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    response.setHeader("Content-Type", `${mime[path.extname(local)] || "application/octet-stream"}; charset=utf-8`);
    response.end(await fs.readFile(local));
  } catch { response.writeHead(404).end(); }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}/gsi-b4/index.html`;
const manifest = JSON.parse(await fs.readFile(path.join(root, "content/enhancements/b4-visuals.json"), "utf8"));
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [], failures = [], consoleErrors = [], broken = [];
const output = path.join(root, "tmp/gsi-b4");
await fs.mkdir(output, { recursive: true });
try {
  for (const mode of [{ name: "desktop", width: 1365, height: 900 }, { name: "mobile", width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport: { width: mode.width, height: mode.height } });
    const page = await context.newPage();
    page.on("pageerror", (error) => consoleErrors.push(`${mode.name}: ${error.message}`));
    page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(`${mode.name}: ${message.text()}`); });
    page.on("response", (response) => { if (response.status() >= 400) broken.push(`${response.status()} ${response.url()}`); });
    for (let number = 1; number <= 16; number += 1) {
      const topicId = `B4-T${String(number).padStart(2, "0")}`;
      try {
        await page.goto(`${base}#temario/${topicId}`);
        await page.locator(`.topic-content[data-topic-id="${topicId}"]`).waitFor({ state: "visible", timeout: 10000 });
        const expected = manifest.topics[topicId].visuals.length;
        await page.waitForFunction((count) => document.querySelectorAll(".topic-visual img").length === count, expected, { timeout: 10000 });
        assert.equal(await page.locator(".topic-visual img").count(), expected, `${topicId}: visual count`);
        for (let index = 0; index < expected; index += 1) {
          const image = page.locator(".topic-visual img").nth(index);
          await image.scrollIntoViewIfNeeded();
          await image.evaluate((element) => element.complete && element.naturalWidth > 0 ? true : new Promise((resolve, reject) => {
            element.addEventListener("load", () => resolve(true), { once: true });
            element.addEventListener("error", () => reject(new Error(`Could not load ${element.src}`)), { once: true });
          }));
        }
        const metrics = await page.evaluate(() => ({ viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, visuals: [...document.querySelectorAll(".topic-visual img")].map((image) => ({ naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, renderedWidth: Math.round(image.getBoundingClientRect().width), containerWidth: Math.round(image.closest(".topic-visual-block").getBoundingClientRect().width), altLength: image.alt.length })) }));
        assert.ok(metrics.scrollWidth <= metrics.viewport + 2, `${topicId}: horizontal overflow ${metrics.scrollWidth}/${metrics.viewport}`);
        if (mode.name === "desktop") assert.ok(metrics.visuals.every((item) => item.renderedWidth <= item.containerWidth + 1), `${topicId}: cropped visual`);
        else assert.ok(metrics.visuals.every((item) => item.renderedWidth > item.containerWidth), `${topicId}: mobile diagram did not preserve legible width`);
        assert.ok(metrics.visuals.every((item) => item.altLength >= 60), `${topicId}: insufficient alt text`);
        for (let index = 0; index < expected; index += 1) await page.locator(".topic-visual-block").nth(index).screenshot({ path: path.join(output, `${topicId}-${mode.name}-visual-${index + 1}.png`) });
        results.push({ topicId, mode: mode.name, status: "pass", ...metrics });
        console.log(`PASS ${topicId} ${mode.name}: ${expected} visual(es), width ${metrics.scrollWidth}/${metrics.viewport}`);
      } catch (error) {
        failures.push({ topicId, mode: mode.name, error: error.message });
        console.log(`FAIL ${topicId} ${mode.name}: ${error.message}`);
      }
    }
    await context.close();
  }
  assert.deepEqual(consoleErrors, []); assert.deepEqual(broken, []);
} catch (error) { failures.push({ topicId: "global", mode: "all", error: error.message }); }
finally {
  await fs.writeFile(path.join(root, "logs/b4-visual-smoke.json"), JSON.stringify({ date: new Date().toISOString(), results, failures, consoleErrors, broken }, null, 2) + "\n");
  await browser.close(); await new Promise((resolve) => server.close(resolve));
}
if (failures.length) process.exitCode = 1;
