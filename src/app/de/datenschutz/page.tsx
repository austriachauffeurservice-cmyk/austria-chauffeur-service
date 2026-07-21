import { permanentRedirect } from 'next/navigation'

// Datenschutzerklärung is a single German-language legal notice shared by
// both site languages (see /datenschutz) — this just makes the /de/-prefixed
// URL that pattern-matches the rest of the site resolve instead of 404ing.
export default function DatenschutzRedirect() {
  permanentRedirect('/datenschutz')
}
