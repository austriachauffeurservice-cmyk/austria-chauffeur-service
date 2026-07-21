import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, createSessionToken, verifyPassword } from '@/lib/admin/auth'
import { createServiceRoleClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { email, password } = body

  if (typeof password !== 'string' || password.length === 0) {
    return NextResponse.json({ error: 'Password is required' }, { status: 400 })
  }

  let authenticated = false

  // 1. If email is provided, attempt Supabase Auth login
  if (email && email.trim().length > 0) {
    try {
      const supabase = createServiceRoleClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      })

      if (!error && data.user) {
        // Supabase Auth only confirms *a* valid account, not that this
        // account should have admin access. If an allowlist is configured,
        // require the signed-in email to be on it. Opt-in (unset = no
        // extra restriction) so this doesn't change behavior until set.
        const allowlist = process.env.ADMIN_ALLOWED_EMAILS
        if (allowlist) {
          const allowed = allowlist
            .split(',')
            .map((e) => e.trim().toLowerCase())
            .filter(Boolean)
          authenticated = allowed.includes(data.user.email?.toLowerCase() ?? '')
        } else {
          authenticated = true
        }
      }
    } catch (err) {
      console.warn('Supabase Auth attempt error:', err)
    }
  }

  // 2. Fallback to ADMIN_PASSWORD check if Supabase Auth wasn't used or failed
  if (!authenticated) {
    if (verifyPassword(password)) {
      authenticated = true
    }
  }

  if (!authenticated) {
    return NextResponse.json(
      { error: 'Invalid credentials. Check email & password.' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  })
  return response
}
