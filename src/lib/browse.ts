export function matchesSearch(query: string, fields: string[]) {
  const normalize = (value: string) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const text = normalize(fields.join(" "));
  return normalize(query).trim().split(/\s+/).every((word) => text.includes(word));
}
