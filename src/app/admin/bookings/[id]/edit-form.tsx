'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  bookingId: string
  initialStatus: string
  initialPriceQuote: string
  initialAssignedDriver: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  color: '#fff',
  fontSize: 14,
  fontFamily: 'inherit',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: 6,
}

export function BookingEditForm({ bookingId, initialStatus, initialPriceQuote, initialAssignedDriver }: Props) {
  const router = useRouter()
  const [status, setStatus] = useState(initialStatus)
  const [priceQuote, setPriceQuote] = useState(initialPriceQuote)
  const [assignedDriver, setAssignedDriver] = useState(initialAssignedDriver)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setMessage(null)
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, price_quote: priceQuote, assigned_driver: assignedDriver }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setMessage(`❌ ${data.error || 'Failed to save'}`)
        return
      }
      setMessage('✅ Saved')
      router.refresh()
    } catch (err) {
      setMessage(`❌ ${String(err)}`)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSave} style={{ display: 'grid', gap: 14 }}>
      <div>
        <label style={labelStyle} htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
      <div>
        <label style={labelStyle} htmlFor="price">Price Quote (EUR)</label>
        <input id="price" value={priceQuote} onChange={(e) => setPriceQuote(e.target.value)} style={inputStyle} placeholder="e.g. 180.00" />
      </div>
      <div>
        <label style={labelStyle} htmlFor="driver">Assigned Transport Partner / Driver</label>
        <input
          id="driver"
          value={assignedDriver}
          onChange={(e) => setAssignedDriver(e.target.value)}
          style={inputStyle}
          placeholder="e.g. Partner company or driver name"
        />
      </div>
      {message && <p style={{ fontSize: 13, color: message.startsWith('✅') ? '#4ade80' : '#f87171', margin: 0 }}>{message}</p>}
      <button
        type="submit"
        disabled={saving}
        style={{ padding: '10px 20px', background: '#D4AF37', border: 'none', borderRadius: 8, color: '#0d0d0d', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: 'fit-content' }}
      >
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  )
}
