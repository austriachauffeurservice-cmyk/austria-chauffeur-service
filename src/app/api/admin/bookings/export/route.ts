import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { requireAdminSession } from '@/lib/admin/auth'

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return '""'
  let str = String(value)
  // Booking fields come straight from the public booking form. Prefix any
  // value starting with a formula trigger character so Excel/Sheets treats
  // it as plain text instead of evaluating it (CSV/DDE injection defense).
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`
  }
  str = str.replace(/"/g, '""')
  return `"${str}"`
}

export async function GET(request: NextRequest) {
  if (!requireAdminSession(request).valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const dateFrom = searchParams.get('dateFrom')
    const dateTo = searchParams.get('dateTo')
    const vehicleType = searchParams.get('vehicleType')
    const priceMin = searchParams.get('priceMin')
    const priceMax = searchParams.get('priceMax')
    const tag = searchParams.get('tag')
    const trash = searchParams.get('trash') === 'true'

    const supabase = createServiceRoleClient()

    // Mirrors the same filters as GET /api/admin/bookings, so "Export CSV"
    // exports exactly what's currently on screen, not always everything.
    let query = supabase.from('bookings').select('*').order('created_at', { ascending: false })
    query = trash ? query.not('deleted_at', 'is', null) : query.is('deleted_at', null)
    if (status && status !== 'all') query = query.eq('status', status)
    if (dateFrom) query = query.gte('pickup_date', dateFrom)
    if (dateTo) query = query.lte('pickup_date', dateTo)
    if (vehicleType && vehicleType !== 'all') query = query.eq('vehicle_type', vehicleType)
    if (priceMin) query = query.gte('price_quote', priceMin)
    if (priceMax) query = query.lte('price_quote', priceMax)
    if (tag) query = query.contains('tags', [tag])
    if (search) {
      query = query.or(
        `full_name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,pickup_location.ilike.%${search}%,dropoff_location.ilike.%${search}%`
      )
    }

    const { data: bookings, error } = await query

    if (error) {
      console.error('Failed to export bookings CSV:', error)
      return NextResponse.json({ error: 'Failed to export bookings' }, { status: 500 })
    }

    const headers = [
      'ID',
      'Created At',
      'Full Name',
      'Email',
      'Phone',
      'Pickup Location',
      'Dropoff Location',
      'Pickup Date',
      'Pickup Time',
      'Passengers',
      'Vehicle Type',
      'Flight Number',
      'Status',
      'Source',
      'Tags',
      'Notes',
    ]

    const csvRows = [headers.map((h) => `"${h}"`).join(',')]

    for (const b of bookings || []) {
      const row = [
        escapeCsvField(b.id),
        escapeCsvField(b.created_at),
        escapeCsvField(b.full_name),
        escapeCsvField(b.email),
        escapeCsvField(b.phone),
        escapeCsvField(b.pickup_location),
        escapeCsvField(b.dropoff_location),
        escapeCsvField(b.pickup_date),
        escapeCsvField(b.pickup_time),
        escapeCsvField(b.passengers),
        escapeCsvField(b.vehicle_type),
        escapeCsvField(b.flight_number || ''),
        escapeCsvField(b.status || 'pending'),
        escapeCsvField(b.source || 'website'),
        escapeCsvField(Array.isArray(b.tags) ? b.tags.join('; ') : ''),
        escapeCsvField(b.notes || ''),
      ]
      csvRows.push(row.join(','))
    }

    const csvContent = csvRows.join('\n')
    const filename = `chauffeur-leads-${new Date().toISOString().split('T')[0]}.csv`

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (err) {
    console.error('Unexpected error in GET /api/admin/bookings/export:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
