import test from "node:test";
import assert from "node:assert/strict";
import { safeHttpsUrl, safeEmail, safePhone } from "../lib/public-config.mjs";

test("rejects executable URLs, credentials, control characters and insecure protocols", () => {
  for (const value of ["javascript:alert(1)", "data:text/html,test", "http://example.com", "//example.com", "https://user:pass@example.com", "https://example.com\n.attacker.test", undefined]) {
    assert.equal(safeHttpsUrl(value), "", String(value));
  }
  assert.equal(safeHttpsUrl("https://example.com/profile"), "https://example.com/profile");
});

test("site URL must be an origin without tracking parameters or a different base path", () => {
  for (const value of ["https://example.com/path", "https://example.com/?token=abc", "https://example.com/#x"]) {
    assert.equal(safeHttpsUrl(value, true), "");
  }
  assert.equal(safeHttpsUrl(" https://example.com/ ", true), "https://example.com");
});

test("email setting cannot inject mail headers or query parameters", () => {
  for (const value of ["hello@example.com?bcc=other@example.com", "a@example.com\r\nBcc:other@example.com", "a%0d%0a@example.com?body=x", "a%0d%0a@example.com", "invalid", undefined]) {
    assert.equal(safeEmail(value), "");
  }
  assert.equal(safeEmail(" contato+site@example.com.br "), "contato+site@example.com.br");
});

test("only plausible international phone numbers create WhatsApp links", () => {
  for (const value of ["123", "0".repeat(13), "55abc88999999999", "1".repeat(16), undefined]) {
    assert.equal(safePhone(value), "");
  }
  assert.equal(safePhone("+55 (88) 99999-9999"), "5588999999999");
});
