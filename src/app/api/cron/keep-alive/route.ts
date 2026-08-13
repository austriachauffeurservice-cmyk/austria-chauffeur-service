import { NextRequest, NextResponse } from 'next/server'
import { isAuthorizedCronRequest } from '@/lib/admin/cron-auth'
import { createServiceRoleClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

// Supabase free-tier projects auto-pause after 7 days with no API activity.
// This just needs to touch the database daily to keep it counted as active —
// the query itself doesn't need to return anything useful.
export async function GET(request: NextRequest) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createServiceRoleClient()
  const { error } = await supabase.from('bookings').select('id').limit(1)

  if (error) {
    console.error('Supabase keep-alive query failed:', error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 502 })
  }

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() })
}
