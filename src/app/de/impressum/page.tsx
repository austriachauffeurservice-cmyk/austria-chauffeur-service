import { redirect } from 'next/navigation'

// Impressum is a single German-language legal notice shared by both site
// languages (see /impressum) — this just makes the /de/-prefixed URL that
// pattern-matches the rest of the site resolve instead of 404ing.
export default function ImpressumRedirect() {
  redirect('/impressum')
}
