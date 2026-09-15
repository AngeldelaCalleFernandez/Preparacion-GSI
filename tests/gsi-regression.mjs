// Execute the maintained browser regression runners against the actual static files.
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer(async (request, response) => {
  try {
    const local = path.resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (!local.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    response.setHeader('Content-Type', `${mime[path.extname(local)] || 'text/plain'}; charset=utf-8`);
    response.end(await fs.readFile(local));
  } catch { response.writeHead(404).end(); }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
try {
  for (const suite of ['phase4', 'phase5', 'phase6', 'phase7', 'phase7b2', 'm2', 'm3']) {
    const context = await browser.newContext(); const page = await context.newPage(); const errors=[];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${server.address().port}/tests/${suite}-runner.html`);
    try { await page.waitForFunction(() => /aprobadas|pruebas superadas|fallidas/i.test(document.querySelector('#summary')?.textContent || ''), null, {timeout:30000}); }
    catch { errors.push('Runner did not finish in 30 seconds'); }
    const result = await page.evaluate(() => ({ summary: document.querySelector('#summary')?.textContent, failures: [...document.querySelectorAll('#results .fail')].map((e) => e.textContent), total: document.querySelectorAll('#results li').length }));
    results.push({suite, ...result, errors}); console.log(JSON.stringify(results.at(-1))); await context.close();
  }
} finally {
  await fs.writeFile(path.join(root, 'logs/gsi-regression.json'), JSON.stringify({date:new Date().toISOString(),results},null,2)+'\n');
  await browser.close(); await new Promise((resolve) => server.close(resolve));
}
if (results.some((r) => r.failures.length || r.errors.length || !r.total)) process.exitCode=1;
