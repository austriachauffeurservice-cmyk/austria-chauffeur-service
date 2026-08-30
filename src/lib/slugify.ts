// Turns heading text into a stable anchor id for in-page jump links (TOC).
// Deliberately simple/deterministic — same input always produces the same id.
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining diacritics after NFKD decomposition
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Assigns a unique anchor id to each heading, appending -2/-3/... on a
// text collision within the same page rather than producing duplicate ids.
export function uniqueSlugs<T>(items: T[], getText: (item: T) => string): string[] {
  const seen = new Map<string, number>()
  return items.map((item) => {
    const base = slugify(getText(item))
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    return count === 0 ? base : `${base}-${count + 1}`
  })
}
