'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

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
  price_quote?: string | null
}

type Analytics = {
  summary: {
    totalBookings: number
    pendingBookings: number
    confirmedBookings: number
    completedBookings: number
    cancelledBookings: number
    leadsThisMonth: number
  }
  vehicleBreakdown: Record<string, number>
}

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending:   { bg: 'rgba(234,179,8,0.15)',   color: '#facc15' },
  confirmed: { bg: 'rgba(34,197,94,0.15)',   color: '#4ade80' },
  completed: { bg: 'rgba(99,102,241,0.15)',  color: '#818cf8' },
  cancelled: { bg: 'rgba(239,68,68,0.15)',   color: '#f87171' },
}

export default function AdminDashboard() {
  const router = useRouter()
  const [bookings, setBookings] = useState<BookingRow[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Email Modal State
  const [emailModalBooking, setEmailModalBooking] = useState<BookingRow | null>(null)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [emailPriceQuote, setEmailPriceQuote] = useState('')
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailStatusMsg, setEmailStatusMsg] = useState<string | null>(null)

  const fetchBookings = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams({
      page: String(page),
      limit: '15',
      status: statusFilter,
      ...(search ? { search } : {}),
    })
    const res = await fetch(`/api/admin/bookings?${params}`)
    if (res.status === 401) { router.push('/admin/login'); return }
    const data = await res.json()
    setBookings(data.bookings || [])
    setTotal(data.pagination?.total || 0)
    setTotalPages(data.pagination?.totalPages || 1)
    setLoading(false)
  }, [page, statusFilter, search, router])

  const fetchAnalytics = useCallback(async () => {
    const res = await fetch('/api/admin/analytics')
    if (res.ok) setAnalytics(await res.json())
  }, [])

  useEffect(() => { fetchBookings(); fetchAnalytics() }, [fetchBookings, fetchAnalytics])

  async function updateStatus(id: string, status: string) {
    setUpdatingId(id)
    await fetch(`/api/admin/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    await fetchBookings()
    await fetchAnalytics()
    setUpdatingId(null)
  }

  async function deleteBooking(id: string) {
    if (!confirm('Delete this booking permanently?')) return
    setDeletingId(id)
    await fetch(`/api/admin/bookings/${id}`, { method: 'DELETE' })
    await fetchBookings()
    await fetchAnalytics()
    setDeletingId(null)
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Open Email Modal with Pre-filled Template
  function openEmailModal(b: BookingRow, templateType: 'quote' | 'confirm' | 'custom' = 'quote') {
    setEmailModalBooking(b)
    setEmailPriceQuote(b.price_quote || '180')
    setEmailStatusMsg(null)

    if (templateType === 'quote') {
      setEmailSubject(`Official Price Quote for your Chauffeur Transfer — ${b.pickup_location} to ${b.dropoff_location}`)
      setEmailMessage(`Dear ${b.full_name},\n\nThank you for choosing Austria Chauffeur Service.\n\nWe are pleased to offer you an executive private transfer for your upcoming journey on ${b.pickup_date} at ${b.pickup_time}.\n\nVehicle: ${b.vehicle_type.toUpperCase()} (${b.passengers} Passengers)\nPickup: ${b.pickup_location}\nDrop-off: ${b.dropoff_location}\n\nPlease let us know if you wish to confirm this booking.`)
    } else if (templateType === 'confirm') {
      setEmailSubject(`Booking Confirmed — Austria Chauffeur Service (${b.pickup_date})`)
      setEmailMessage(`Dear ${b.full_name},\n\nYour chauffeur reservation has been CONFIRMED.\n\nDriver details and vehicle registration will be dispatched 2 hours prior to your scheduled pickup time on ${b.pickup_date} at ${b.pickup_time}.\n\nThank you for travelling with Austria Chauffeur Service.`)
    } else {
      setEmailSubject(`Update regarding your Chauffeur Reservation`)
      setEmailMessage(`Dear ${b.full_name},\n\n`)
    }
  }

  // Send Custom Email API call
  async function handleSendEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!emailModalBooking) return
    setSendingEmail(true)
    setEmailStatusMsg(null)

    try {
      const res = await fetch(`/api/admin/bookings/${emailModalBooking.id}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: emailSubject,
          message: emailMessage,
          priceQuote: emailPriceQuote,
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setEmailStatusMsg('✅ Email sent successfully to ' + emailModalBooking.email)
        setTimeout(() => {
          setEmailModalBooking(null)
          fetchBookings()
        }, 1500)
      } else {
        setEmailStatusMsg('❌ Failed: ' + (data.error || 'Unknown error'))
      }
    } catch (err) {
      setEmailStatusMsg('❌ Error sending email: ' + String(err))
    } finally {
      setSendingEmail(false)
    }
  }

  const s = analytics?.summary

  return (
    <main style={{ minHeight: '100vh', background: '#0d0d0d', color: '#e5e5e5', fontFamily: "'Inter', sans-serif", padding: '0' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
        .doc-btn {
          padding: 4px 8px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 6px;
          color: #D4AF37;
          font-size: 11px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .doc-btn:hover { background: rgba(212,175,55,0.2); }
      `}</style>

      {/* Top Nav */}
      <nav style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#D4AF37,#f0d060)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#0d0d0d' }}>A</div>
          <span style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>Austria Chauffeur</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 4 }}>/ Admin</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/api/admin/bookings/export" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 8, color: '#D4AF37', fontSize: 13, fontWeight: 500, textDecoration: 'none', fontFamily: 'inherit' }}>
            ⬇ Export CSV
          </a>
          <button onClick={handleLogout} style={{ padding: '7px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
            Sign Out
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px' }}>

        {/* Analytics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total Leads', value: s?.totalBookings ?? '—', accent: '#D4AF37' },
            { label: 'This Month', value: s?.leadsThisMonth ?? '—', accent: '#60a5fa' },
            { label: 'Pending', value: s?.pendingBookings ?? '—', accent: '#facc15' },
            { label: 'Confirmed', value: s?.confirmedBookings ?? '—', accent: '#4ade80' },
            { label: 'Completed', value: s?.completedBookings ?? '—', accent: '#818cf8' },
            { label: 'Cancelled', value: s?.cancelledBookings ?? '—', accent: '#f87171' },
          ].map((card) => (
            <div key={card.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 24px' }}>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.label}</p>
              <p style={{ margin: 0, fontSize: 32, fontWeight: 700, color: card.accent }}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <input
            type="search"
            placeholder="🔍  Search by name, email, phone, location..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            style={{ flex: 1, minWidth: 280, padding: '10px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#fff', fontSize: 14, fontFamily: 'inherit', outline: 'none' }}
          />
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
            style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#e5e5e5', fontSize: 14, fontFamily: 'inherit', outline: 'none', cursor: 'pointer' }}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            {total} lead{total !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Bookings Table */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 64, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>Loading leads...</div>
          ) : bookings.length === 0 ? (
            <div style={{ padding: 64, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>No bookings found</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {['Received', 'Name', 'Email / Phone', 'Route', 'Date / Time', 'Pax', 'Vehicle', 'PDF Documents', 'Status', 'Client Email', 'Actions'].map((h) => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => {
                    const sc = STATUS_COLORS[b.status] || STATUS_COLORS.pending
                    return (
                      <tr key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', opacity: deletingId === b.id ? 0.4 : 1, transition: 'opacity 0.2s' }}>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>
                          {new Date(b.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}<br />
                          <span style={{ fontSize: 11 }}>{new Date(b.created_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                        </td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', fontWeight: 500, color: '#fff' }}>{b.full_name}</td>
                        <td style={{ padding: '12px 14px' }}>
                          <div style={{ color: '#D4AF37', fontSize: 12 }}>{b.email}</div>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{b.phone}</div>
                        </td>
                        <td style={{ padding: '12px 14px', maxWidth: 180 }}>
                          <div style={{ color: '#e5e5e5', fontSize: 12 }} title={b.pickup_location}>📍 {b.pickup_location.slice(0, 24)}{b.pickup_location.length > 24 ? '…' : ''}</div>
                          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }} title={b.dropoff_location}>→ {b.dropoff_location.slice(0, 24)}{b.dropoff_location.length > 24 ? '…' : ''}</div>
                        </td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', fontSize: 12 }}>
                          <div>{b.pickup_date}</div>
                          <div style={{ color: 'rgba(255,255,255,0.4)' }}>{b.pickup_time}</div>
                        </td>
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>{b.passengers}</td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{b.vehicle_type}</td>

                        {/* PDF Printable Generators */}
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <a href={`/admin/bookings/${b.id}/document?type=quote`} target="_blank" className="doc-btn" title="View/Print Quotation PDF">
                              📄 Quote PDF
                            </a>
                            <a href={`/admin/bookings/${b.id}/document?type=invoice`} target="_blank" className="doc-btn" title="View/Print Tax Invoice PDF">
                              🧾 Invoice PDF
                            </a>
                            <a href={`/admin/bookings/${b.id}/document?type=receipt`} target="_blank" className="doc-btn" title="View/Print Payment Receipt PDF">
                              💳 Receipt PDF
                            </a>
                          </div>
                        </td>

                        {/* Status Select */}
                        <td style={{ padding: '12px 14px' }}>
                          <select
                            value={b.status || 'pending'}
                            disabled={updatingId === b.id}
                            onChange={(e) => updateStatus(b.id, e.target.value)}
                            style={{ padding: '5px 10px', background: sc.bg, border: `1px solid ${sc.color}40`, borderRadius: 6, color: sc.color, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer', outline: 'none', minWidth: 100 }}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>

                        {/* Send Custom Email */}
                        <td style={{ padding: '12px 14px' }}>
                          <button
                            onClick={() => openEmailModal(b, 'quote')}
                            style={{ padding: '6px 12px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 6, color: '#818cf8', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}
                          >
                            ✉️ Email Client
                          </button>
                        </td>

                        {/* Actions */}
                        <td style={{ padding: '12px 14px' }}>
                          <button
                            onClick={() => deleteBooking(b.id)}
                            disabled={deletingId === b.id}
                            title="Delete booking"
                            style={{ padding: '5px 10px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 6, color: '#f87171', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                          >
                            🗑
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: page === 1 ? 'rgba(255,255,255,0.2)' : '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontSize: 13 }}>← Prev</button>
            <span style={{ padding: '8px 16px', color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Page {page} of {totalPages}</span>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: page === totalPages ? 'rgba(255,255,255,0.2)' : '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontSize: 13 }}>Next →</button>
          </div>
        )}

        {/* Custom Email Modal */}
        {emailModalBooking && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 }}>
            <div style={{ width: '100%', maxWidth: 580, background: '#141414', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, padding: 28, boxShadow: '0 20px 40px rgba(0,0,0,0.6)', margin: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, color: '#fff' }}>Send Email to Client</h3>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: '#D4AF37' }}>{emailModalBooking.full_name} ({emailModalBooking.email})</p>
                </div>
                <button onClick={() => setEmailModalBooking(null)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 20, cursor: 'pointer' }}>✕</button>
              </div>

              {/* Quick Template Switcher */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'quote')} style={{ padding: '6px 12px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 6, color: '#D4AF37', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  💰 Send Price Quote
                </button>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'confirm')} style={{ padding: '6px 12px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 6, color: '#4ade80', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  ✅ Send Confirmation
                </button>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'custom')} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, color: '#fff', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  ✏️ Custom Message
                </button>
              </div>

              <form onSubmit={handleSendEmail}>
                {/* Price Quote Field */}
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Quoted Price (EUR €):</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 180"
                    value={emailPriceQuote}
                    onChange={(e) => setEmailPriceQuote(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#D4AF37', fontSize: 15, fontWeight: 700, fontFamily: 'inherit', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Subject:</label>
                  <input
                    type="text"
                    required
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#fff', fontSize: 13, fontFamily: 'inherit', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>Message Body:</label>
                  <textarea
                    required
                    rows={7}
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: '#fff', fontSize: 13, fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                {emailStatusMsg && (
                  <div style={{ padding: '10px 14px', background: emailStatusMsg.startsWith('✅') ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', border: `1px solid ${emailStatusMsg.startsWith('✅') ? '#4ade8040' : '#f8717140'}`, borderRadius: 8, fontSize: 13, color: emailStatusMsg.startsWith('✅') ? '#4ade80' : '#f87171', marginBottom: 16 }}>
                    {emailStatusMsg}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button type="button" onClick={() => setEmailModalBooking(null)} style={{ padding: '10px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(255,255,255,0.6)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sendingEmail} style={{ padding: '10px 20px', background: '#D4AF37', border: 'none', borderRadius: 8, color: '#0d0d0d', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    {sendingEmail ? 'Sending Email...' : '✉️ Send Email Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p style={{ marginTop: 32, textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.15)' }}>
          Austria Chauffeur Service · Admin Portal · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  )
}
