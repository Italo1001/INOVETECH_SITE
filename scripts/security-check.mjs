/** Low-volume, read-only smoke checks. Not a penetration test or security certification. */
import assert from "node:assert/strict";

const args = process.argv.slice(2);
const target = args.find((arg) => !arg.startsWith("--")) || "http://127.0.0.1:3000";
const baseline = args.includes("--baseline");
const base = new URL(target);
if (!["http:", "https:"].includes(base.protocol) || base.username || base.password || base.pathname !== "/" || base.search || base.hash) {
  throw new Error("Informe somente a origem do site (https://dominio ou http://127.0.0.1:3000).");
}
let failures = 0;
async function check(label, fn) {
  try { await fn(); console.log(`PASS ${label}`); }
  catch (error) { failures++; console.error(`FAIL ${label}: ${error.message}`); }
}
async function get(path) {
  const response = await fetch(new URL(path, base), { redirect: "manual", signal: AbortSignal.timeout(15000) });
  const body = await response.text();
  return { response, body };
}

await check("home, security headers and first-party resources", async () => {
  const { response, body } = await get("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") || "", /text\/html/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.match(response.headers.get("strict-transport-security") || "", /max-age=\d+/);
  const csp = response.headers.get("content-security-policy") || "";
  for (const directive of ["default-src 'self'", "object-src 'none'", "frame-ancestors 'none'", "base-uri 'self'"]) {
    assert.ok(csp.includes(directive), `Missing CSP directive: ${directive}`);
  }
  assert.ok(!csp.includes("'unsafe-eval'"), "unsafe-eval must not be enabled in production");
  if (!baseline) {
    assert.ok(csp.includes("script-src-attr 'none'"), "Inline event handlers must be blocked");
    assert.equal(response.headers.get("x-dns-prefetch-control"), "off");
    assert.match(body, /href="\/privacidade"/);
    assert.match(body, /href="\/termos"/);
  }
  for (const match of body.matchAll(/<(?:script|iframe|img|video|source)\b[^>]*\bsrc="([^"]+)"/gi)) {
    const url = new URL(match[1], base);
    assert.equal(url.origin, base.origin, `Unexpected external resource: ${url.origin}`);
  }
  assert.equal(response.headers.get("set-cookie"), null, "Review privacy text if cookies are added");
  assert.ok(!/<form\b/i.test(body), "Review privacy and server validation if forms are added");
});

for (const path of ["/.env", "/.env.local", "/.git/config", "/package.json", "/admin", "/downloads"]) {
  await check(`no public sensitive endpoint: ${path}`, async () => {
    const { response } = await get(path);
    assert.ok([403, 404].includes(response.status), `Expected 403/404; got ${response.status}`);
  });
}
if (!baseline) {
  for (const path of ["/privacidade", "/termos"]) {
    await check(`legal page: ${path}`, async () => {
      const { response, body } = await get(path);
      assert.equal(response.status, 200);
      assert.match(body, /id="conteudo"/);
      const canonical = body.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
      assert.ok(canonical, "Missing canonical link");
      const canonicalUrl = new URL(canonical);
      assert.equal(canonicalUrl.protocol, "https:");
      assert.equal(canonicalUrl.pathname, path);
    });
  }
  await check("sitemap includes legal pages", async () => {
    const { response, body } = await get("/sitemap.xml");
    assert.equal(response.status, 200);
    assert.match(body, /\/privacidade<\/loc>/);
    assert.match(body, /\/termos<\/loc>/);
  });
}
console.log(`\n${failures} failure(s). CSP still allows inline script elements; review docs/security-review.md.`);
process.exitCode = failures ? 1 : 0;
