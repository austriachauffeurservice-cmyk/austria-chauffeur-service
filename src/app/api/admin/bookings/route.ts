import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const dateFrom = searchParams.get('dateFrom')
    const dateTo = searchParams.get('dateTo')
    const page = parseInt(searchParams.get('page') || '1', 10)
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 100)
    const offset = (page - 1) * limit

    const supabase = createServiceRoleClient()

    let query = supabase.from('bookings').select('*', { count: 'exact' })

    // Default view: newest leads first. Once a date filter narrows this to
    // a dispatch-style view (e.g. "today"), chronological pickup order is
    // more useful than lead-received order.
    if (dateFrom || dateTo) {
      query = query.order('pickup_date', { ascending: true }).order('pickup_time', { ascending: true })
    } else {
      query = query.order('created_at', { ascending: false })
    }

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    if (dateFrom) {
      query = query.gte('pickup_date', dateFrom)
    }
    if (dateTo) {
      query = query.lte('pickup_date', dateTo)
    }

    if (search) {
      query = query.or(
        `full_name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,pickup_location.ilike.%${search}%,dropoff_location.ilike.%${search}%`
      )
    }

    query = query.range(offset, offset + limit - 1)

    const { data: bookings, count, error } = await query

    if (error) {
      console.error('Failed to fetch bookings:', error)
      return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
    }

    const total = count || 0
    const totalPages = Math.ceil(total / limit)

    return NextResponse.json({
      bookings: bookings || [],
      pagination: {
        total,
        page,
        limit,
        totalPages,
      },
    })
  } catch (err) {
    console.error('Unexpected error in GET /api/admin/bookings:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
