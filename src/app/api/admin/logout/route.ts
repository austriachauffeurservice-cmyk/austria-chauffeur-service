import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin/auth'
import { logActivity } from '@/lib/admin/activity-log'

export async function POST(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  const session = verifySessionToken(token)
  if (session.valid) {
    await logActivity({ actor: session.actor, action: 'logout', request })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.delete(ADMIN_SESSION_COOKIE)
  return response
}
