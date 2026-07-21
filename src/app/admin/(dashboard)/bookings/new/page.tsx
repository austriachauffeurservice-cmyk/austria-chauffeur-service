'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  background: c.panel,
  border: `1px solid ${c.borderStrong}`,
  borderRadius: 8,
  color: c.text,
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  color: c.textMuted,
  marginBottom: 6,
}

const fieldStyle: React.CSSProperties = { marginBottom: 16 }

export default function NewBookingPage() {
  const router = useRouter()
  const [source, setSource] = useState('phone')
  const [status, setStatus] = useState('pending')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [vehicleType, setVehicleType] = useState('sedan')
  const [flightNumber, setFlightNumber] = useState('')
  const [notes, setNotes] = useState('')
  const [priceQuote, setPriceQuote] = useState('')
  const [sendConfirmationEmail, setSendConfirmationEmail] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      const res = await fetch('/api/admin/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          status,
          fullName,
          email,
          phone,
          pickupLocation,
          dropoffLocation,
          pickupDate,
          pickupTime,
          passengers: Number(passengers) || 1,
          vehicleType,
          flightNumber,
          notes,
          priceQuote,
          sendConfirmationEmail,
        }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Failed to create booking')
        return
      }
      router.push(`/admin/bookings/${data.booking.id}`)
    } catch (err) {
      setError(String(err))
    } finally {
      setSaving(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .new-booking-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) {
          .new-booking-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ background: c.panel, borderBottom: `1px solid ${c.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
        <Link href="/admin/bookings" style={{ color: c.gold, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>
          ← Back to Admin Bookings
        </Link>
      </nav>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px' }}>New Booking (Manual Entry)</h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 28px' }}>
          Log a lead received by phone, WhatsApp, or email — it will appear in the dashboard, generate PDFs, and forward to the fulfillment partner exactly like a website booking.
        </p>

        <form onSubmit={handleSubmit} style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, padding: 24 }}>
          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Lead Source</label>
              <select value={source} onChange={(e) => setSource(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="phone">Phone Call</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Full Name</label>
              <input required value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Phone</label>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>

          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Pickup Location</label>
              <input required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Drop-off Location</label>
              <input required value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Pickup Date</label>
              <input required type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Pickup Time</label>
              <input required type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Passengers</label>
              <input required type="number" min={1} max={50} value={passengers} onChange={(e) => setPassengers(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Vehicle Type</label>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="sedan">Sedan</option>
                <option value="van">Van</option>
                <option value="luxury">Luxury</option>
                <option value="minibus">Minibus</option>
              </select>
            </div>
          </div>

          <div className="new-booking-grid">
            <div style={fieldStyle}>
              <label style={labelStyle}>Flight Number (optional)</label>
              <input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Price Quote € (optional)</label>
              <input value={priceQuote} onChange={(e) => setPriceQuote(e.target.value)} placeholder="e.g. 180.00" style={inputStyle} />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Notes (optional)</label>
            <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: c.textMuted, marginBottom: 20, cursor: 'pointer' }}>
            <input type="checkbox" checked={sendConfirmationEmail} onChange={(e) => setSendConfirmationEmail(e.target.checked)} />
            Send confirmation email to customer now
          </label>

          {error && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: c.redTint, border: `1px solid ${c.redBorder}`, borderRadius: 8, color: c.red, fontSize: 13, marginBottom: 16 }}>
              <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <Link href="/admin/bookings" style={{ padding: '10px 18px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.textMuted, fontSize: 13, textDecoration: 'none' }}>
              Cancel
            </Link>
            <button type="submit" disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: c.gold, border: 'none', borderRadius: 8, color: c.bg, fontWeight: 600, fontSize: 13, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: saving ? 0.6 : 1 }}>
              <FontAwesomeIcon icon={faPlus} /> {saving ? 'Saving...' : 'Create Booking'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
