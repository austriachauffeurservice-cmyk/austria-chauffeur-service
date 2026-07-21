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

const SOURCE_LABELS: Record<string, string> = {
  website: 'Website',
  phone: '📞 Phone',
  whatsapp: '💬 WhatsApp',
  email: '📧 Email',
  other: 'Other',
}

export default async function BookingDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = createServiceRoleClient()
  const { data: booking } = await supabase.from('bookings').select('*').eq('id', id).single()

  if (!booking) notFound()

  const { data: pastBookings } = await supabase
    .from('bookings')
    .select('id, created_at, pickup_date, status')
    .eq('email', booking.email)
    .neq('id', id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <main style={{ minHeight: '100vh', background: '#0d0d0d', color: '#e5e5e5', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .detail-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 24px; }
        @media (max-width: 720px) {
          .detail-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
        <Link href="/admin/bookings" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
          ← Back to Admin Bookings
        </Link>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{booking.full_name}</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 24px' }}>
          Booking Ref: {booking.id} · Received {new Date(booking.created_at).toLocaleString('en-GB')}
          {booking.source && booking.source !== 'website' && (
            <> · Source: {SOURCE_LABELS[booking.source] || booking.source}</>
          )}
        </p>

        <div className="detail-grid">
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
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              <span>Customer email: {booking.customer_email_sent ? '✅ sent' : '⏳ not sent'}</span>
              <span>Admin notification: {booking.admin_email_sent ? '✅ sent' : '⏳ not sent'}</span>
              <span>
                Partner webhook:{' '}
                {booking.webhook_status === 'delivered'
                  ? '✅ delivered'
                  : booking.webhook_status === 'failed'
                    ? `❌ failed${booking.webhook_status_code ? ` (HTTP ${booking.webhook_status_code})` : ''}`
                    : booking.webhook_status === 'not_configured'
                      ? '— not configured'
                      : '⏳ pending'}
              </span>
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
              initialFullName={booking.full_name}
              initialEmail={booking.email}
              initialPhone={booking.phone}
              initialPickupLocation={booking.pickup_location}
              initialDropoffLocation={booking.dropoff_location}
              initialPickupDate={booking.pickup_date}
              initialPickupTime={booking.pickup_time}
              initialPassengers={booking.passengers}
              initialVehicleType={booking.vehicle_type}
              initialFlightNumber={booking.flight_number || ''}
            />
          </div>
        </div>

        {pastBookings && pastBookings.length > 0 && (
          <div style={{ ...cardStyle, marginTop: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#D4AF37', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Repeat Customer · {pastBookings.length} other booking{pastBookings.length !== 1 ? 's' : ''} from {booking.email}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {pastBookings.map((b) => (
                <Link
                  key={b.id}
                  href={`/admin/bookings/${b.id}`}
                  style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span>{new Date(b.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} · Pickup {b.pickup_date}</span>
                  <span style={{ color: '#D4AF37' }}>{b.status || 'pending'}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
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
