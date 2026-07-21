import 'server-only'
import { createHmac, timingSafeEqual } from 'crypto'

export const ADMIN_SESSION_COOKIE = 'admin_session'
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

// No hardcoded fallback here on purpose: a default secret/password baked
// into source that's pushed to a public repo is a known, forgeable
// credential, not a safety net. Missing config must fail closed (deny
// access), never fail open onto a guessable default.
function getSecret(): string | null {
  return process.env.ADMIN_SESSION_SECRET || null
}

function sign(value: string): string | null {
  const secret = getSecret()
  if (!secret) return null
  return createHmac('sha256', secret).update(value).digest('hex')
}

// The token carries who logged in (email for Supabase Auth, "admin" for
// the shared-password login) so later actions in that session can be
// attributed in the activity log, instead of every action just saying
// "admin did something."
export function createSessionToken(actor: string = 'admin'): string {
  const secret = getSecret()
  if (!secret) {
    throw new Error('Missing ADMIN_SESSION_SECRET environment variable')
  }
  const expiresAt = Date.now() + SESSION_TTL_MS
  const actorB64 = Buffer.from(actor, 'utf-8').toString('base64url')
  const payload = `${expiresAt}.${actorB64}`
  const signature = sign(payload)!
  return `${payload}.${signature}`
}

export type SessionCheck = { valid: boolean; actor?: string }

export function verifySessionToken(token: string | undefined | null): SessionCheck {
  if (!token) return { valid: false }
  const [expiresAtRaw, actorB64, signature] = token.split('.')
  if (!expiresAtRaw || !actorB64 || !signature) return { valid: false }

  const expiresAt = Number(expiresAtRaw)
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return { valid: false }

  const payload = `${expiresAtRaw}.${actorB64}`
  const expectedSignature = sign(payload)
  if (!expectedSignature) return { valid: false }

  const expectedBuffer = Buffer.from(expectedSignature)
  const actualBuffer = Buffer.from(signature)
  if (expectedBuffer.length !== actualBuffer.length) return { valid: false }
  if (!timingSafeEqual(expectedBuffer, actualBuffer)) return { valid: false }

  let actor = 'admin'
  try {
    actor = Buffer.from(actorB64, 'base64url').toString('utf-8') || 'admin'
  } catch {
    // malformed actor segment — token is still validly signed, just fall
    // back to the generic actor name rather than reject a good session
  }
  return { valid: true, actor }
}

export function verifyPassword(candidate: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const expectedBuffer = Buffer.from(adminPassword)
  const candidateBuffer = Buffer.from(candidate)
  if (expectedBuffer.length !== candidateBuffer.length) return false
  return timingSafeEqual(expectedBuffer, candidateBuffer)
}
