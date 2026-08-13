// Shared, locale-agnostic matcher that turns hand-authored "popular route" text
// (e.g. "Vienna Airport → Salzburg", "Vienna → Bratislava, Slovakia (cross-border)")
// into a real href when a matching /routes or /airport-transfers page exists —
// falling back to `undefined` (render as plain text, current behavior) on any
// uncertain match. Never guesses: an exact match after normalization, or nothing.
//
// Works for both EN and DE content since the parsing logic is language-agnostic;
// callers pass in their own locale's `routes`/`airports` arrays.

type RouteLike = { slug: string; from: string; to: string }
type AirportLike = { slug: string; code: string; name: string; city: string }
type CityLike = { slug: string; city: string }

// Strips a trailing ", Country" / " (cross-border)" / " (VIE)" style suffix so
// "Bratislava, Slovakia (cross-border)" and "Bratislava" normalize the same way,
// and "Vienna Airport (VIE)" normalizes to "Vienna Airport".
function normalizeLabel(label: string): string {
  return label
    .split(',')[0]
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim()
}

function buildRouteIndex(routes: RouteLike[]): Map<string, string> {
  const index = new Map<string, string>()
  for (const r of routes) {
    const key = `${normalizeLabel(r.from)}|${normalizeLabel(r.to)}`
    // First writer wins — if two routes ever normalize to the same pair, that's
    // a content duplicate worth surfacing separately, not silently overwritten.
    if (!index.has(key)) index.set(key, r.slug)
  }
  return index
}

// Splits "Origin → Destination" or "Origin ↔ Destination" into its two sides.
// Returns null for anything without exactly one arrow (nothing to match).
function splitRouteText(text: string): { origin: string; destination: string; bidirectional: boolean } | null {
  const arrow = text.includes('↔') ? '↔' : text.includes('→') ? '→' : null
  if (!arrow) return null
  const parts = text.split(arrow)
  if (parts.length !== 2) return null
  return { origin: parts[0].trim(), destination: parts[1].trim(), bidirectional: arrow === '↔' }
}

function findAirportByText(text: string, airports: AirportLike[]): AirportLike | undefined {
  // Airport codes are the one unambiguous signal in this content — prefer them.
  const codeMatch = text.match(/\(([A-Z]{3,4})[,)]/)
  if (codeMatch) {
    const byCode = airports.find((a) => a.code === codeMatch[1])
    if (byCode) return byCode
  }
  const normalized = normalizeLabel(text)
  // The content consistently refers to airports as "{City} Airport" rather
  // than the official name ("Vienna International Airport") — derive the
  // short form from the airport's own city field instead of fuzzy-matching
  // the official name, which is far more reliable for this content's style.
  return airports.find(
    (a) => normalized === `${a.city} Airport` || normalizeLabel(a.name) === normalized
  )
}

export type PopularRouteMatch = { href: string; kind: 'route' | 'airport' }

// The main entry point: given one "popular route" text line, try to resolve it
// to a live page. `currentSlug` (an airport slug) suppresses a match that would
// just link a page to itself (e.g. "Vienna Airport ↔ City Center" shown ON the
// Vienna Airport page).
export function matchPopularRoute(
  text: string,
  routes: RouteLike[],
  airports: AirportLike[],
  currentAirportSlug?: string
): PopularRouteMatch | undefined {
  const split = splitRouteText(text)
  if (!split) return undefined

  if (split.bidirectional) {
    // "X Airport ↔ City Center" pattern — the only page worth linking to here
    // is the airport itself, and only from somewhere other than that airport's
    // own page.
    const airport = findAirportByText(split.origin, airports) ?? findAirportByText(split.destination, airports)
    if (airport && airport.slug !== currentAirportSlug) {
      return { href: `/airport-transfers/${airport.slug}`, kind: 'airport' }
    }
    return undefined
  }

  const routeIndex = buildRouteIndex(routes)
  const key = `${normalizeLabel(split.origin)}|${normalizeLabel(split.destination)}`
  const slug = routeIndex.get(key)
  if (slug) return { href: `/routes/${slug}`, kind: 'route' }

  // No dedicated route page for this exact pair — but if the destination is
  // simply an airport ("St. Pölten → Vienna Airport"), that airport's own
  // pillar page is still a genuinely useful link, as long as this text isn't
  // already sitting on that airport's own page.
  const destAirport = findAirportByText(split.destination, airports)
  if (destAirport && destAirport.slug !== currentAirportSlug) {
    return { href: `/airport-transfers/${destAirport.slug}`, kind: 'airport' }
  }

  return undefined
}

// Resolves a route's plain "from"/"to" label (e.g. "Vienna Airport (VIE)" or
// "Salzburg") to whichever pillar page it's actually about, for a "back to
// the airport/city this route starts from" link. Airport takes precedence
// over city since the two rarely overlap in this content's phrasing.
export function matchLocationText(
  text: string,
  airports: AirportLike[],
  cities: CityLike[]
): { href: string; label: string } | undefined {
  const airport = findAirportByText(text, airports)
  if (airport) return { href: `/airport-transfers/${airport.slug}`, label: `${airport.city} Airport` }

  const normalized = normalizeLabel(text)
  const city = cities.find((c) => normalizeLabel(c.city) === normalized)
  if (city) return { href: `/service-areas/${city.slug}`, label: city.city }

  return undefined
}

// For the "Nearest Airport" field, which is sometimes a single airport and
// sometimes "Airport A (CODE) / Airport B (CODE)". Returns one entry per
// segment that resolves to a real airport page; unresolved segments are
// dropped rather than guessed at by the caller.
export function matchAirportField(
  text: string,
  airports: AirportLike[]
): { label: string; href?: string }[] {
  return text.split('/').map((segment) => {
    const trimmed = segment.trim()
    const airport = findAirportByText(trimmed, airports)
    return airport ? { label: trimmed, href: `/airport-transfers/${airport.slug}` } : { label: trimmed }
  })
}
