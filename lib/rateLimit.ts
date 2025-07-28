type Entry = { count: number; expires: number };
const windowMs = 60_000; // 1 minute
const max = 10;
const map = new Map<string, Entry>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const e = map.get(ip);
  if (!e || e.expires < now) {
    map.set(ip, { count: 1, expires: now + windowMs });
    return { ok: true };
  }
  e.count += 1;
  if (e.count > max) return { ok: false };
  return { ok: true };
}
