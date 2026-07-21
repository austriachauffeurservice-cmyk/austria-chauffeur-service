import { NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return '""'
  const str = String(value).replace(/"/g, '""')
  return `"${str}"`
}

export async function GET() {
  try {
    const supabase = createServiceRoleClient()

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })

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
