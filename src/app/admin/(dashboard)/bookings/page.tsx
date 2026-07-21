'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faCircleXmark,
  faEnvelope,
  faEuroSign,
  faFileInvoice,
  faFileLines,
  faGlobe,
  faLocationDot,
  faMagnifyingGlass,
  faPaperPlane,
  faPen,
  faPenToSquare,
  faPhone,
  faReceipt,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

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
  source?: string
}

const SOURCE_LABELS: Record<string, { icon: IconDefinition; label: string }> = {
  website: { icon: faGlobe, label: 'Web' },
  phone: { icon: faPhone, label: 'Phone' },
  whatsapp: { icon: faWhatsapp, label: 'WhatsApp' },
  email: { icon: faEnvelope, label: 'Email' },
  other: { icon: faPen, label: 'Other' },
}

type Analytics = {
  summary: {
    totalBookings: number
    pendingBookings: number
    confirmedBookings: number
    completedBookings: number
    cancelledBookings: number
    leadsThisMonth: number
    confirmedRevenue: number
    totalQuotedValue: number
    avgBookingValue: number
  }
  vehicleBreakdown: Record<string, number>
}

const eur = (n: number) => `€${n.toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending: { bg: c.yellowTint, color: c.yellow },
  confirmed: { bg: c.greenTint, color: c.green },
  completed: { bg: c.blueTint, color: c.blue },
  cancelled: { bg: c.redTint, color: c.red },
}

export default function AdminDashboard() {
  const router = useRouter()
  const [bookings, setBookings] = useState<BookingRow[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'tomorrow' | 'week'>('all')
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
  const [emailStatus, setEmailStatus] = useState<{ ok: boolean; text: string } | null>(null)

  const dateRange = useCallback((): { dateFrom?: string; dateTo?: string } => {
    const toYmd = (d: Date) => d.toISOString().slice(0, 10)
    const today = new Date()
    if (dateFilter === 'today') {
      const ymd = toYmd(today)
      return { dateFrom: ymd, dateTo: ymd }
    }
    if (dateFilter === 'tomorrow') {
      const t = new Date(today)
      t.setDate(t.getDate() + 1)
      const ymd = toYmd(t)
      return { dateFrom: ymd, dateTo: ymd }
    }
    if (dateFilter === 'week') {
      const end = new Date(today)
      end.setDate(end.getDate() + 7)
      return { dateFrom: toYmd(today), dateTo: toYmd(end) }
    }
    return {}
  }, [dateFilter])

  const fetchBookings = useCallback(async () => {
    setLoading(true)
    const { dateFrom, dateTo } = dateRange()
    const params = new URLSearchParams({
      page: String(page),
      limit: '15',
      status: statusFilter,
      ...(search ? { search } : {}),
      ...(dateFrom ? { dateFrom } : {}),
      ...(dateTo ? { dateTo } : {}),
    })
    const res = await fetch(`/api/admin/bookings?${params}`)
    if (res.status === 401) { router.push('/admin/login'); return }
    const data = await res.json()
    setBookings(data.bookings || [])
    setTotal(data.pagination?.total || 0)
    setTotalPages(data.pagination?.totalPages || 1)
    setLoading(false)
  }, [page, statusFilter, search, dateRange, router])

  const fetchAnalytics = useCallback(async () => {
    const res = await fetch('/api/admin/analytics')
    if (res.ok) setAnalytics(await res.json())
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard load-on-mount data fetch
  useEffect(() => { fetchBookings(); fetchAnalytics() }, [fetchBookings, fetchAnalytics])

  async function updateStatus(id: string, status: string) {
    setUpdatingId(id)
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        alert(`Failed to update status: ${data.error || res.statusText}`)
        return
      }
      await fetchBookings()
      await fetchAnalytics()
    } catch (err) {
      alert(`Failed to update status: ${String(err)}`)
    } finally {
      setUpdatingId(null)
    }
  }

  async function deleteBooking(id: string) {
    if (!confirm('Delete this booking permanently?')) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, { method: 'DELETE' })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        alert(`Failed to delete booking: ${data.error || res.statusText}`)
        return
      }
      await fetchBookings()
      await fetchAnalytics()
    } catch (err) {
      alert(`Failed to delete booking: ${String(err)}`)
    } finally {
      setDeletingId(null)
    }
  }

  // Open Email Modal with Pre-filled Template
  function openEmailModal(b: BookingRow, templateType: 'quote' | 'confirm' | 'custom' = 'quote') {
    setEmailModalBooking(b)
    setEmailPriceQuote(b.price_quote || '180')
    setEmailStatus(null)

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
    setEmailStatus(null)

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
        setEmailStatus({ ok: true, text: `Email sent successfully to ${emailModalBooking.email}` })
        setTimeout(() => {
          setEmailModalBooking(null)
          fetchBookings()
        }, 1500)
      } else {
        setEmailStatus({ ok: false, text: `Failed: ${data.error || 'Unknown error'}` })
      }
    } catch (err) {
      setEmailStatus({ ok: false, text: `Error sending email: ${String(err)}` })
    } finally {
      setSendingEmail(false)
    }
  }

  const s = analytics?.summary

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif", padding: '0' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 4px; }
        .doc-btn {
          padding: 4px 8px;
          background: ${c.goldTint};
          border: 1px solid ${c.goldBorder};
          border-radius: 6px;
          color: ${c.gold};
          font-size: 11px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .doc-btn:hover { background: rgba(184,147,74,0.22); }
        .search-input::placeholder { color: ${c.textFaint}; }
      `}</style>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px' }}>

        {/* Analytics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 16 }}>
          {[
            { label: 'Total Leads', value: s?.totalBookings ?? '—', accent: c.gold },
            { label: 'This Month', value: s?.leadsThisMonth ?? '—', accent: c.blue },
            { label: 'Pending', value: s?.pendingBookings ?? '—', accent: c.yellow },
            { label: 'Confirmed', value: s?.confirmedBookings ?? '—', accent: c.green },
            { label: 'Completed', value: s?.completedBookings ?? '—', accent: c.blue },
            { label: 'Cancelled', value: s?.cancelledBookings ?? '—', accent: c.red },
          ].map((card) => (
            <div key={card.label} style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, padding: '20px 24px' }}>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: c.textFaint, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.label}</p>
              <p style={{ margin: 0, fontSize: 32, fontWeight: 700, color: card.accent }}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Revenue Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Confirmed Revenue', value: s ? eur(s.confirmedRevenue) : '—', hint: 'Confirmed + completed bookings' },
            { label: 'Total Quoted Value', value: s ? eur(s.totalQuotedValue) : '—', hint: 'All bookings, any status' },
            { label: 'Avg. Booking Value', value: s ? eur(s.avgBookingValue) : '—', hint: 'Per confirmed/completed booking' },
          ].map((card) => (
            <div key={card.label} style={{ background: c.goldTint, border: `1px solid ${c.goldBorder}`, borderRadius: 12, padding: '20px 24px' }}>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: c.textFaint, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.label}</p>
              <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: c.gold }}>{card.value}</p>
              <p style={{ margin: '6px 0 0', fontSize: 11, color: c.textFaint }}>{card.hint}</p>
            </div>
          ))}
        </div>

        {/* Vehicle Breakdown */}
        {analytics && Object.keys(analytics.vehicleBreakdown).length > 0 && (
          <div style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, padding: '20px 24px', marginBottom: 32 }}>
            <p style={{ margin: '0 0 14px', fontSize: 12, color: c.textFaint, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Bookings by Vehicle Type</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              {Object.entries(analytics.vehicleBreakdown)
                .sort((a, b) => b[1] - a[1])
                .map(([type, count]) => {
                  const pct = s && s.totalBookings > 0 ? Math.round((count / s.totalBookings) * 100) : 0
                  return (
                    <div key={type} style={{ minWidth: 140 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                        <span style={{ color: c.text, textTransform: 'capitalize' }}>{type}</span>
                        <span style={{ color: c.textFaint }}>{count} ({pct}%)</span>
                      </div>
                      <div style={{ width: 140, height: 6, background: c.border, borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: c.gold }} />
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        )}

        {/* Search & Filter Bar */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 280 }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: c.textFaint, fontSize: 13 }} />
            <input
              type="search"
              placeholder="Search by name, email, phone, location..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              className="search-input"
              style={{ width: '100%', padding: '10px 16px 10px 38px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, fontSize: 14, fontFamily: 'inherit', outline: 'none' }}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
            style={{ padding: '10px 16px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, fontSize: 14, fontFamily: 'inherit', outline: 'none', cursor: 'pointer' }}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', background: c.panel, border: `1px solid ${c.border}`, borderRadius: 8, fontSize: 13, color: c.textFaint }}>
            {total} lead{total !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Date Quick Filters (filters by pickup date) */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {([
            { key: 'all', label: 'All Pickups' },
            { key: 'today', label: 'Today' },
            { key: 'tomorrow', label: 'Tomorrow' },
            { key: 'week', label: 'Next 7 Days' },
          ] as const).map((opt) => (
            <button
              key={opt.key}
              onClick={() => { setDateFilter(opt.key); setPage(1) }}
              style={{
                padding: '6px 14px',
                background: dateFilter === opt.key ? c.goldTint : c.panel,
                border: `1px solid ${dateFilter === opt.key ? c.goldBorder : c.border}`,
                borderRadius: 20,
                color: dateFilter === opt.key ? c.gold : c.textMuted,
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        <div style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 64, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>Loading leads...</div>
          ) : bookings.length === 0 ? (
            <div style={{ padding: 64, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>No bookings found</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${c.border}` }}>
                    {['Received', 'Name', 'Email / Phone', 'Route', 'Date / Time', 'Pax', 'Vehicle', 'PDF Documents', 'Status', 'Client Email', 'Actions'].map((h) => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.textFaint, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => {
                    const sc = STATUS_COLORS[b.status] || STATUS_COLORS.pending
                    const source = b.source ? SOURCE_LABELS[b.source] : undefined
                    return (
                      <tr key={b.id} style={{ borderBottom: `1px solid ${c.border}`, background: i % 2 === 0 ? 'transparent' : 'rgba(246,243,238,0.015)', opacity: deletingId === b.id ? 0.4 : 1, transition: 'opacity 0.2s' }}>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', color: c.textFaint, fontSize: 12 }}>
                          {new Date(b.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}<br />
                          <span style={{ fontSize: 11 }}>{new Date(b.created_at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                        </td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', fontWeight: 500 }}>
                          <Link href={`/admin/bookings/${b.id}`} style={{ color: c.text, textDecoration: 'none' }} title="View full details">
                            {b.full_name}
                          </Link>
                          {source && b.source !== 'website' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: c.textFaint, fontWeight: 400, marginTop: 2 }}>
                              <FontAwesomeIcon icon={source.icon} style={{ width: 10 }} /> {source.label}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: '12px 14px' }}>
                          <div style={{ color: c.gold, fontSize: 12 }}>{b.email}</div>
                          <div style={{ color: c.textMuted, fontSize: 11 }}>{b.phone}</div>
                        </td>
                        <td style={{ padding: '12px 14px', maxWidth: 180 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: c.text, fontSize: 12 }} title={b.pickup_location}>
                            <FontAwesomeIcon icon={faLocationDot} style={{ width: 10, color: c.gold }} />
                            {b.pickup_location.slice(0, 24)}{b.pickup_location.length > 24 ? '…' : ''}
                          </div>
                          <div style={{ color: c.textFaint, fontSize: 11 }} title={b.dropoff_location}>→ {b.dropoff_location.slice(0, 24)}{b.dropoff_location.length > 24 ? '…' : ''}</div>
                        </td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', fontSize: 12 }}>
                          <div>{b.pickup_date}</div>
                          <div style={{ color: c.textFaint }}>{b.pickup_time}</div>
                        </td>
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>{b.passengers}</td>
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap', color: c.textMuted, fontSize: 12 }}>{b.vehicle_type}</td>

                        {/* PDF Printable Generators */}
                        <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <a href={`/admin/bookings/${b.id}/document?type=quote`} target="_blank" className="doc-btn" title="View/Print Quotation PDF">
                              <FontAwesomeIcon icon={faFileLines} /> Quote PDF
                            </a>
                            <a href={`/admin/bookings/${b.id}/document?type=invoice`} target="_blank" className="doc-btn" title="View/Print Tax Invoice PDF">
                              <FontAwesomeIcon icon={faFileInvoice} /> Invoice PDF
                            </a>
                            <a href={`/admin/bookings/${b.id}/document?type=receipt`} target="_blank" className="doc-btn" title="View/Print Payment Receipt PDF">
                              <FontAwesomeIcon icon={faReceipt} /> Receipt PDF
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
                            style={{ padding: '6px 12px', background: c.blueTint, border: `1px solid rgba(143,179,217,0.3)`, borderRadius: 6, color: c.blue, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 5 }}
                          >
                            <FontAwesomeIcon icon={faPaperPlane} /> Email Client
                          </button>
                        </td>

                        {/* Actions */}
                        <td style={{ padding: '12px 14px' }}>
                          <button
                            onClick={() => deleteBooking(b.id)}
                            disabled={deletingId === b.id}
                            title="Delete booking"
                            style={{ padding: '5px 10px', background: c.redTint, border: `1px solid ${c.redBorder}`, borderRadius: 6, color: c.red, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 24 }}>
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: page === 1 ? c.textFaint : c.text, cursor: page === 1 ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontSize: 13 }}>
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 11 }} /> Prev
            </button>
            <span style={{ padding: '8px 16px', color: c.textFaint, fontSize: 13 }}>Page {page} of {totalPages}</span>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: page === totalPages ? c.textFaint : c.text, cursor: page === totalPages ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontSize: 13 }}>
              Next <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 11 }} />
            </button>
          </div>
        )}

        {/* Custom Email Modal */}
        {emailModalBooking && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 }}>
            <div style={{ width: '100%', maxWidth: 580, background: c.bgPanel, border: `1px solid ${c.borderStrong}`, borderRadius: 16, padding: 28, boxShadow: '0 20px 40px rgba(0,0,0,0.6)', margin: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, color: c.text }}>Send Email to Client</h3>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: c.gold }}>{emailModalBooking.full_name} ({emailModalBooking.email})</p>
                </div>
                <button onClick={() => setEmailModalBooking(null)} style={{ background: 'none', border: 'none', color: c.textMuted, fontSize: 18, cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              {/* Quick Template Switcher */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'quote')} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: c.goldTint, border: `1px solid ${c.goldBorder}`, borderRadius: 6, color: c.gold, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  <FontAwesomeIcon icon={faEuroSign} /> Send Price Quote
                </button>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'confirm')} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: c.greenTint, border: '1px solid rgba(123,191,143,0.3)', borderRadius: 6, color: c.green, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  <FontAwesomeIcon icon={faCircleCheck} /> Send Confirmation
                </button>
                <button type="button" onClick={() => openEmailModal(emailModalBooking, 'custom')} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 6, color: c.text, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
                  <FontAwesomeIcon icon={faPenToSquare} /> Custom Message
                </button>
              </div>

              <form onSubmit={handleSendEmail}>
                {/* Price Quote Field */}
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Quoted Price (EUR €):</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 180"
                    value={emailPriceQuote}
                    onChange={(e) => setEmailPriceQuote(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.gold, fontSize: 15, fontWeight: 700, fontFamily: 'inherit', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Subject:</label>
                  <input
                    type="text"
                    required
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, fontSize: 13, fontFamily: 'inherit', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Message Body:</label>
                  <textarea
                    required
                    rows={7}
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, fontSize: 13, fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                {emailStatus && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: emailStatus.ok ? c.greenTint : c.redTint, border: `1px solid ${emailStatus.ok ? 'rgba(123,191,143,0.3)' : c.redBorder}`, borderRadius: 8, fontSize: 13, color: emailStatus.ok ? c.green : c.red, marginBottom: 16 }}>
                    <FontAwesomeIcon icon={emailStatus.ok ? faCircleCheck : faCircleXmark} />
                    {emailStatus.text}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                  <button type="button" onClick={() => setEmailModalBooking(null)} style={{ padding: '10px 18px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.textMuted, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Cancel
                  </button>
                  <button type="submit" disabled={sendingEmail} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: c.gold, border: 'none', borderRadius: 8, color: c.bg, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    <FontAwesomeIcon icon={faPaperPlane} /> {sendingEmail ? 'Sending Email...' : 'Send Email Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p style={{ marginTop: 32, textAlign: 'center', fontSize: 11, color: c.textFaint }}>
          Austria Chauffeur Service · Admin Portal · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  )
}
