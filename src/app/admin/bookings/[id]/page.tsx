import { createServiceRoleClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BookingEditForm } from './edit-form'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ id: string }>
}

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 12,
  padding: 24,
}

const fieldLabel: React.CSSProperties = {
  fontSize: 11,
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: 4,
}

const fieldValue: React.CSSProperties = {
  fontSize: 14,
  color: '#e5e5e5',
  marginBottom: 16,
}

export default async function BookingDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = createServiceRoleClient()
  const { data: booking } = await supabase.from('bookings').select('*').eq('id', id).single()

  if (!booking) notFound()

  return (
    <main style={{ minHeight: '100vh', background: '#0d0d0d', color: '#e5e5e5', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; }`}</style>

      <nav style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center' }}>
        <Link href="/admin/bookings" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
          ← Back to Admin Bookings
        </Link>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{booking.full_name}</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
          Booking Ref: {booking.id} · Received {new Date(booking.created_at).toLocaleString('en-GB')}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }}>
          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#D4AF37', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Trip Details
            </p>

            <div style={fieldLabel}>Pickup Location</div>
            <div style={fieldValue}>{booking.pickup_location}</div>

            <div style={fieldLabel}>Drop-off Location</div>
            <div style={fieldValue}>{booking.dropoff_location}</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={fieldLabel}>Date</div>
                <div style={fieldValue}>{booking.pickup_date}</div>
              </div>
              <div>
                <div style={fieldLabel}>Time</div>
                <div style={fieldValue}>{booking.pickup_time}</div>
              </div>
              <div>
                <div style={fieldLabel}>Passengers</div>
                <div style={fieldValue}>{booking.passengers}</div>
              </div>
              <div>
                <div style={fieldLabel}>Vehicle</div>
                <div style={fieldValue}>{booking.vehicle_type}</div>
              </div>
            </div>

            {booking.flight_number && (
              <>
                <div style={fieldLabel}>Flight Number</div>
                <div style={fieldValue}>{booking.flight_number}</div>
              </>
            )}

            <div style={fieldLabel}>Customer Notes</div>
            <div style={{ ...fieldValue, whiteSpace: 'pre-wrap' }}>{booking.notes || '—'}</div>

            <p style={{ fontSize: 13, fontWeight: 600, color: '#D4AF37', margin: '20px 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Customer Contact
            </p>
            <div style={fieldLabel}>Email</div>
            <div style={fieldValue}>{booking.email}</div>
            <div style={fieldLabel}>Phone</div>
            <div style={fieldValue}>{booking.phone}</div>

            <p style={{ fontSize: 13, fontWeight: 600, color: '#D4AF37', margin: '20px 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Delivery Status
            </p>
            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              <span>Customer email: {booking.customer_email_sent ? '✅ sent' : '⏳ not sent'}</span>
              <span>Admin notification: {booking.admin_email_sent ? '✅ sent' : '⏳ not sent'}</span>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#D4AF37', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Dispatch
            </p>
            <BookingEditForm
              bookingId={booking.id}
              initialStatus={booking.status || 'pending'}
              initialPriceQuote={booking.price_quote || ''}
              initialAssignedDriver={booking.assigned_driver || ''}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
          <a
            href={`/admin/bookings/${booking.id}/document?type=quote`}
            target="_blank"
            style={{ padding: '8px 16px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 8, color: '#D4AF37', fontSize: 13, textDecoration: 'none' }}
          >
            📄 Quote PDF
          </a>
          <a
            href={`/admin/bookings/${booking.id}/document?type=invoice`}
            target="_blank"
            style={{ padding: '8px 16px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 8, color: '#D4AF37', fontSize: 13, textDecoration: 'none' }}
          >
            🧾 Invoice PDF
          </a>
          <a
            href={`/admin/bookings/${booking.id}/document?type=receipt`}
            target="_blank"
            style={{ padding: '8px 16px', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 8, color: '#D4AF37', fontSize: 13, textDecoration: 'none' }}
          >
            💳 Receipt PDF
          </a>
        </div>
      </div>
    </main>
  )
}
