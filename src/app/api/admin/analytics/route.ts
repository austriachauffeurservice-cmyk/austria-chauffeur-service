import { NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createServiceRoleClient()

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('id, created_at, status, vehicle_type, pickup_location')

    if (error) {
      console.error('Failed to fetch analytics data:', error)
      return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
    }

    const all = bookings || []
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()

    const totalBookings = all.length
    const pendingBookings = all.filter((b) => b.status === 'pending' || !b.status).length
    const confirmedBookings = all.filter((b) => b.status === 'confirmed').length
    const completedBookings = all.filter((b) => b.status === 'completed').length
    const cancelledBookings = all.filter((b) => b.status === 'cancelled').length
    const leadsThisMonth = all.filter((b) => b.created_at >= startOfMonth).length

    const vehicleBreakdown: Record<string, number> = {}
    for (const b of all) {
      const type = b.vehicle_type || 'unspecified'
      vehicleBreakdown[type] = (vehicleBreakdown[type] || 0) + 1
    }

    return NextResponse.json({
      summary: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        completedBookings,
        cancelledBookings,
        leadsThisMonth,
      },
      vehicleBreakdown,
    })
  } catch (err) {
    console.error('Unexpected error in GET /api/admin/analytics:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
