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

export function createSessionToken(): string {
  const secret = getSecret()
  if (!secret) {
    throw new Error('Missing ADMIN_SESSION_SECRET environment variable')
  }
  const expiresAt = Date.now() + SESSION_TTL_MS
  const signature = sign(String(expiresAt))!
  return `${expiresAt}.${signature}`
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false
  const [expiresAtRaw, signature] = token.split('.')
  if (!expiresAtRaw || !signature) return false

  const expiresAt = Number(expiresAtRaw)
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false

  const expectedSignature = sign(expiresAtRaw)
  if (!expectedSignature) return false

  const expectedBuffer = Buffer.from(expectedSignature)
  const actualBuffer = Buffer.from(signature)
  if (expectedBuffer.length !== actualBuffer.length) return false

  return timingSafeEqual(expectedBuffer, actualBuffer)
}

export function verifyPassword(candidate: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const expectedBuffer = Buffer.from(adminPassword)
  const candidateBuffer = Buffer.from(candidate)
  if (expectedBuffer.length !== candidateBuffer.length) return false
  return timingSafeEqual(expectedBuffer, candidateBuffer)
}
