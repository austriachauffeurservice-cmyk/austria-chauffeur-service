'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  bookingId: string
  initialStatus: string
  initialPriceQuote: string
  initialAssignedDriver: string
  initialFullName: string
  initialEmail: string
  initialPhone: string
  initialPickupLocation: string
  initialDropoffLocation: string
  initialPickupDate: string
  initialPickupTime: string
  initialPassengers: number
  initialVehicleType: string
  initialFlightNumber: string
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

const sectionHeading: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: '#D4AF37',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  margin: '20px 0 12px',
}

export function BookingEditForm({
  bookingId,
  initialStatus,
  initialPriceQuote,
  initialAssignedDriver,
  initialFullName,
  initialEmail,
  initialPhone,
  initialPickupLocation,
  initialDropoffLocation,
  initialPickupDate,
  initialPickupTime,
  initialPassengers,
  initialVehicleType,
  initialFlightNumber,
}: Props) {
  const router = useRouter()
  const [status, setStatus] = useState(initialStatus)
  const [priceQuote, setPriceQuote] = useState(initialPriceQuote)
  const [assignedDriver, setAssignedDriver] = useState(initialAssignedDriver)
  const [fullName, setFullName] = useState(initialFullName)
  const [email, setEmail] = useState(initialEmail)
  const [phone, setPhone] = useState(initialPhone)
  const [pickupLocation, setPickupLocation] = useState(initialPickupLocation)
  const [dropoffLocation, setDropoffLocation] = useState(initialDropoffLocation)
  const [pickupDate, setPickupDate] = useState(initialPickupDate)
  const [pickupTime, setPickupTime] = useState(initialPickupTime)
  const [passengers, setPassengers] = useState(String(initialPassengers))
  const [vehicleType, setVehicleType] = useState(initialVehicleType)
  const [flightNumber, setFlightNumber] = useState(initialFlightNumber)
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
        body: JSON.stringify({
          status,
          price_quote: priceQuote,
          assigned_driver: assignedDriver,
          full_name: fullName,
          email,
          phone,
          pickup_location: pickupLocation,
          dropoff_location: dropoffLocation,
          pickup_date: pickupDate,
          pickup_time: pickupTime,
          passengers: Number(passengers) || 1,
          vehicle_type: vehicleType,
          flight_number: flightNumber,
        }),
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

      <p style={sectionHeading}>Trip Details</p>

      <div>
        <label style={labelStyle} htmlFor="fullName">Customer Name</label>
        <input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="phone">Phone</label>
        <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="pickupLocation">Pickup Location</label>
        <input id="pickupLocation" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="dropoffLocation">Drop-off Location</label>
        <input id="dropoffLocation" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle} htmlFor="pickupDate">Date</label>
          <input id="pickupDate" type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="pickupTime">Time</label>
          <input id="pickupTime" type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} style={inputStyle} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle} htmlFor="passengers">Passengers</label>
          <input id="passengers" type="number" min={1} max={50} value={passengers} onChange={(e) => setPassengers(e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="vehicleType">Vehicle</label>
          <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="sedan">Sedan</option>
            <option value="luxury">Luxury</option>
            <option value="van">Van</option>
            <option value="minibus">Minibus</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="flightNumber">Flight Number</label>
        <input id="flightNumber" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} style={inputStyle} placeholder="e.g. OS 123" />
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
