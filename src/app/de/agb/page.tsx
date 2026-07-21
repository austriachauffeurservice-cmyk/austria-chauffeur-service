import { permanentRedirect } from 'next/navigation'

// AGB is a single German-language legal notice shared by both site
// languages (see /agb) — this just makes the /de/-prefixed URL that
// pattern-matches the rest of the site resolve instead of 404ing.
export default function AgbRedirect() {
  permanentRedirect('/agb')
}
