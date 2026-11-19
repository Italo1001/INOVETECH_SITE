/** Validation for public build-time settings. Never place secrets in NEXT_PUBLIC_*. */
export function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function safeHttpsUrl(value, originOnly = false) {
  const raw = clean(value);
  if (!raw || /[\u0000-\u0020\u007f]/u.test(raw)) return "";
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" || url.username || url.password) return "";
    if (originOnly && (url.pathname !== "/" || url.search || url.hash)) return "";
    return originOnly ? url.origin : url.toString();
  } catch {
    return "";
  }
}

export function safeEmail(value) {
  const email = clean(value);
  // Excludes mailto parameters, control characters and malformed addresses.
  if (/%0[ad]/iu.test(email)) return "";
  return /^[A-Za-z0-9.!#$%&'*+/=_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/u.test(email)
    ? email
    : "";
}

export function safePhone(value) {
  const raw = clean(value);
  if (!/^[+\d\s().-]+$/u.test(raw)) return "";
  const number = raw.replace(/\D/gu, "");
  return /^[1-9]\d{9,14}$/u.test(number) ? number : "";
}
