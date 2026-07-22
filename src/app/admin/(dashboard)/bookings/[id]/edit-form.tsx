'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

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
  initialTags: string[]
}

type Partner = { id: string; name: string }

const SUGGESTED_TAGS = ['VIP', 'Corporate', 'Airport', 'Wedding', 'Urgent']

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

const sectionHeading: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: c.gold,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  margin: '20px 0 12px',
}

const OTHER_DRIVER = '__other__'

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
  initialTags,
}: Props) {
  const router = useRouter()
  const [status, setStatus] = useState(initialStatus)
  const [priceQuote, setPriceQuote] = useState(initialPriceQuote)
  const [partners, setPartners] = useState<Partner[]>([])
  const [assignedDriver, setAssignedDriver] = useState(initialAssignedDriver)
  const [customDriver, setCustomDriver] = useState(initialAssignedDriver)
  const [useCustomDriver, setUseCustomDriver] = useState(true)
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
  const [tags, setTags] = useState<string[]>(initialTags)
  const [customTag, setCustomTag] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  useEffect(() => {
    fetch('/api/admin/partners')
      .then((res) => (res.ok ? res.json() : { partners: [] }))
      .then((data) => {
        const list: Partner[] = data.partners || []
        setPartners(list)
        const match = list.find((p) => p.name === initialAssignedDriver)
        if (match) {
          setAssignedDriver(match.name)
          setUseCustomDriver(false)
        }
      })
      .catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount only
  }, [])

  function toggleTag(tag: string) {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  function addCustomTag() {
    const t = customTag.trim()
    if (t && !tags.includes(t)) setTags((prev) => [...prev, t])
    setCustomTag('')
  }

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
          assigned_driver: useCustomDriver ? customDriver : assignedDriver,
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
          tags,
        }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setMessage({ ok: false, text: data.error || 'Failed to save' })
        return
      }
      setMessage({ ok: true, text: 'Saved' })
      router.refresh()
    } catch (err) {
      setMessage({ ok: false, text: String(err) })
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
        <select
          id="driver"
          value={useCustomDriver ? OTHER_DRIVER : assignedDriver}
          onChange={(e) => {
            if (e.target.value === OTHER_DRIVER) {
              setUseCustomDriver(true)
            } else {
              setUseCustomDriver(false)
              setAssignedDriver(e.target.value)
            }
          }}
          style={{ ...inputStyle, cursor: 'pointer', marginBottom: useCustomDriver ? 8 : 0 }}
        >
          <option value="">— Unassigned —</option>
          {partners.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
          <option value={OTHER_DRIVER}>Other (type manually)…</option>
        </select>
        {useCustomDriver && (
          <input
            value={customDriver}
            onChange={(e) => setCustomDriver(e.target.value)}
            style={inputStyle}
            placeholder="e.g. Partner company or driver name"
          />
        )}
      </div>

      <div>
        <label style={labelStyle}>Tags</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {SUGGESTED_TAGS.map((tag) => {
            const active = tags.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 14,
                  fontSize: 11,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  background: active ? c.goldTint : c.panel,
                  border: `1px solid ${active ? c.goldBorder : c.border}`,
                  color: active ? c.gold : c.textMuted,
                }}
              >
                {tag}
              </button>
            )
          })}
        </div>
        {tags.filter((t) => !SUGGESTED_TAGS.includes(t)).length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {tags.filter((t) => !SUGGESTED_TAGS.includes(t)).map((tag) => (
              <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 14, fontSize: 11, background: c.blueTint, border: '1px solid rgba(143,179,217,0.3)', color: c.blue }}>
                {tag}
                <FontAwesomeIcon icon={faXmark} style={{ cursor: 'pointer' }} onClick={() => toggleTag(tag)} />
              </span>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={customTag}
            onChange={(e) => setCustomTag(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustomTag() } }}
            style={{ ...inputStyle, fontSize: 12, padding: '7px 12px' }}
            placeholder="Custom tag, press Enter"
          />
        </div>
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

      {message && (
        <p style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: message.ok ? c.green : c.red, margin: 0 }}>
          <FontAwesomeIcon icon={message.ok ? faCircleCheck : faCircleXmark} /> {message.text}
        </p>
      )}
      <button
        type="submit"
        disabled={saving}
        style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: c.gold, border: 'none', borderRadius: 8, color: c.bg, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', width: 'fit-content' }}
      >
        <FontAwesomeIcon icon={faFloppyDisk} /> {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  )
}
