import type { CSSProperties } from 'react'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { LogoutButton } from './logout-button'

export const dynamic = 'force-dynamic'

type BookingRow = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  pickup_location: string
  dropoff_location: string
  pickup_date: string
  pickup_time: string
  passengers: number
  vehicle_type: string
  flight_number: string | null
  notes: string | null
  status: string
}

export default async function AdminBookingsPage() {
  const supabase = createServiceRoleClient()
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(
      'id, created_at, full_name, email, phone, pickup_location, dropoff_location, pickup_date, pickup_time, passengers, vehicle_type, flight_number, notes, status'
    )
    .order('created_at', { ascending: false })
    .limit(200)
    .returns<BookingRow[]>()

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1 style={{ fontSize: 22 }}>Bookings</h1>
        <LogoutButton />
      </div>

      {error && <p style={{ color: 'crimson' }}>Failed to load bookings: {error.message}</p>}

      {!error && (!bookings || bookings.length === 0) && <p>No bookings yet.</p>}

      {!error && bookings && bookings.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 14 }}>
            <thead>
              <tr>
                {[
                  'Received',
                  'Name',
                  'Email',
                  'Phone',
                  'Pickup',
                  'Drop-off',
                  'Date',
                  'Time',
                  'Pax',
                  'Vehicle',
                  'Flight',
                  'Status',
                ].map((h) => (
                  <th
                    key={h}
                    style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px 12px' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td style={cellStyle}>{new Date(b.created_at).toLocaleString()}</td>
                  <td style={cellStyle}>{b.full_name}</td>
                  <td style={cellStyle}>{b.email}</td>
                  <td style={cellStyle}>{b.phone}</td>
                  <td style={cellStyle}>{b.pickup_location}</td>
                  <td style={cellStyle}>{b.dropoff_location}</td>
                  <td style={cellStyle}>{b.pickup_date}</td>
                  <td style={cellStyle}>{b.pickup_time}</td>
                  <td style={cellStyle}>{b.passengers}</td>
                  <td style={cellStyle}>{b.vehicle_type}</td>
                  <td style={cellStyle}>{b.flight_number || '-'}</td>
                  <td style={cellStyle}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

const cellStyle: CSSProperties = {
  borderBottom: '1px solid #eee',
  padding: '8px 12px',
  whiteSpace: 'nowrap',
}
