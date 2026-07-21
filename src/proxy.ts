import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, verifySessionToken } from '@/lib/admin/auth'

// Must stay reachable without a session: the login page/API issues the
// session, and logout only needs to clear a cookie.
const PUBLIC_ADMIN_PATHS = ['/admin/login', '/api/admin/login', '/api/admin/logout']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC_ADMIN_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  const session = verifySessionToken(token)
  if (!session.valid) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Let API routes attribute actions to who's logged in, for the activity log.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-admin-actor', session.actor || 'admin')
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
