import 'server-only'
import type { NextRequest } from 'next/server'

// Vercel Cron sends `Authorization: Bearer $CRON_SECRET` on every invocation
// once CRON_SECRET is set as an env var — this stops these endpoints being
// triggered by anyone who finds the URL. Fails closed: no secret configured
// means no request is ever treated as authorized.
export function isAuthorizedCronRequest(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  return request.headers.get('authorization') === `Bearer ${secret}`
}
