import { createServiceRoleClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleCheck,
  faCircleXmark,
  faClock,
  faEnvelope,
  faFileInvoice,
  faFileLines,
  faPhone,
  faReceipt,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faClock as faClockRegular } from '@fortawesome/free-regular-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'
import { BookingEditForm } from './edit-form'
import { NotesThread } from './notes-thread'

const ACTION_LABELS: Record<string, string> = {
  login: 'Logged in',
  status_updated: 'Changed status',
  price_updated: 'Changed price',
  driver_assigned: 'Assigned partner',
  trip_details_updated: 'Edited trip details',
  tags_updated: 'Updated tags',
  booking_deleted: 'Moved to trash',
  booking_restored: 'Restored from trash',
  booking_created: 'Created booking',
  email_sent: 'Sent email',
  note_added: 'Added internal note',
}

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ id: string }>
}

const cardStyle: React.CSSProperties = {
  background: c.panel,
  border: `1px solid ${c.border}`,
  borderRadius: 12,
  padding: 24,
}

const fieldLabel: React.CSSProperties = {
  fontSize: 11,
  color: c.textFaint,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  marginBottom: 4,
}

const fieldValue: React.CSSProperties = {
  fontSize: 14,
  color: c.text,
  marginBottom: 16,
}

const sectionHeading: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: c.gold,
  margin: '0 0 16px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
}

const SOURCE_LABELS: Record<string, { icon: IconDefinition; label: string }> = {
  phone: { icon: faPhone, label: 'Phone' },
  whatsapp: { icon: faWhatsapp, label: 'WhatsApp' },
  email: { icon: faEnvelope, label: 'Email' },
}

function DeliveryStatus({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <FontAwesomeIcon icon={ok ? faCircleCheck : faClockRegular} style={{ color: ok ? c.green : c.textFaint }} />
      {label}: {ok ? 'sent' : 'not sent'}
    </span>
  )
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
    .is('deleted_at', null)
    .order('created_at', { ascending: false })
    .limit(10)

  const { data: history } = await supabase
    .from('admin_activity_log')
    .select('*')
    .eq('booking_id', id)
    .order('created_at', { ascending: false })
    .limit(50)

  const source = booking.source && booking.source !== 'website' ? SOURCE_LABELS[booking.source] : undefined
  const tags: string[] = booking.tags || []

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .detail-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 24px; }
        @media (max-width: 720px) {
          .detail-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ background: c.panel, borderBottom: `1px solid ${c.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
        <Link href="/admin/bookings" style={{ color: c.gold, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
          ← Back to Admin Bookings
        </Link>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px' }}>{booking.full_name}</h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span>Booking Ref: {booking.id} · Received {new Date(booking.created_at).toLocaleString('en-GB')}</span>
          {source && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              · <FontAwesomeIcon icon={source.icon} style={{ width: 10 }} /> {source.label}
            </span>
          )}
        </p>

        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {tags.map((tag) => (
              <span key={tag} style={{ padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 500, background: c.goldTint, border: `1px solid ${c.goldBorder}`, color: c.gold }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {booking.possible_duplicate && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: c.yellowTint, border: '1px solid rgba(224,192,125,0.3)', borderRadius: 8, padding: '10px 14px', color: c.yellow, fontSize: 13, marginBottom: 20 }}>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            Possible duplicate — this customer already has another booking for the same pickup date.
          </div>
        )}

        <div className="detail-grid">
          <div style={cardStyle}>
            <p style={sectionHeading}>Trip Details</p>

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

            <p style={{ ...sectionHeading, margin: '20px 0 16px' }}>Customer Contact</p>
            <div style={fieldLabel}>Email</div>
            <div style={fieldValue}>{booking.email}</div>
            <div style={fieldLabel}>Phone</div>
            <div style={fieldValue}>{booking.phone}</div>

            <p style={{ ...sectionHeading, margin: '20px 0 16px' }}>Delivery Status</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 13, color: c.textMuted }}>
              <DeliveryStatus ok={!!booking.customer_email_sent} label="Customer email" />
              <DeliveryStatus ok={!!booking.admin_email_sent} label="Admin notification" />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {booking.webhook_status === 'delivered' ? (
                  <><FontAwesomeIcon icon={faCircleCheck} style={{ color: c.green }} /> Partner webhook: delivered</>
                ) : booking.webhook_status === 'failed' ? (
                  <><FontAwesomeIcon icon={faCircleXmark} style={{ color: c.red }} /> Partner webhook: failed{booking.webhook_status_code ? ` (HTTP ${booking.webhook_status_code})` : ''}</>
                ) : booking.webhook_status === 'not_configured' ? (
                  <>Partner webhook: not configured</>
                ) : (
                  <><FontAwesomeIcon icon={faClock} style={{ color: c.textFaint }} /> Partner webhook: pending</>
                )}
              </span>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={sectionHeading}>Dispatch</p>
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
              initialTags={tags}
            />
          </div>
        </div>

        {pastBookings && pastBookings.length > 0 && (
          <div style={{ ...cardStyle, marginTop: 24 }}>
            <p style={sectionHeading}>
              Repeat Customer · {pastBookings.length} other booking{pastBookings.length !== 1 ? 's' : ''} from {booking.email}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {pastBookings.map((b) => (
                <Link
                  key={b.id}
                  href={`/admin/bookings/${b.id}`}
                  style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: c.textMuted, textDecoration: 'none', padding: '6px 0', borderBottom: `1px solid ${c.border}` }}
                >
                  <span>{new Date(b.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} · Pickup {b.pickup_date}</span>
                  <span style={{ color: c.gold }}>{b.status || 'pending'}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="detail-grid" style={{ marginTop: 24 }}>
          <div style={cardStyle}>
            <NotesThread bookingId={booking.id} />
          </div>

          <div style={cardStyle}>
            <p style={sectionHeading}>Edit History</p>
            {!history || history.length === 0 ? (
              <p style={{ fontSize: 13, color: c.textFaint }}>No activity recorded for this booking yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 400, overflowY: 'auto' }}>
                {history.map((h) => (
                  <div key={h.id} style={{ fontSize: 12, borderBottom: `1px solid ${c.border}`, paddingBottom: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: c.textFaint, marginBottom: 2 }}>
                      <span>{h.actor}</span>
                      <span>{new Date(h.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div style={{ color: c.text }}>{ACTION_LABELS[h.action] || h.action}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
          <a
            href={`/admin/bookings/${booking.id}/document?type=quote`}
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: c.goldTint, border: `1px solid ${c.goldBorder}`, borderRadius: 8, color: c.gold, fontSize: 13, textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faFileLines} /> Quote PDF
          </a>
          <a
            href={`/admin/bookings/${booking.id}/document?type=invoice`}
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: c.goldTint, border: `1px solid ${c.goldBorder}`, borderRadius: 8, color: c.gold, fontSize: 13, textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faFileInvoice} /> Invoice PDF
          </a>
          <a
            href={`/admin/bookings/${booking.id}/document?type=receipt`}
            target="_blank"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: c.goldTint, border: `1px solid ${c.goldBorder}`, borderRadius: 8, color: c.gold, fontSize: 13, textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faReceipt} /> Receipt PDF
          </a>
        </div>
      </div>
    </main>
  )
}
