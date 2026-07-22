'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

type BookingRow = {
  id: string
  full_name: string
  email: string
  pickup_date: string
  status: string
}

export default function TrashPage() {
  const router = useRouter()
  const [bookings, setBookings] = useState<BookingRow[]>([])
  const [loading, setLoading] = useState(true)
  const [restoringId, setRestoringId] = useState<string | null>(null)
  const [purgingId, setPurgingId] = useState<string | null>(null)

  const fetchTrash = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/bookings?trash=true&limit=100')
    if (res.status === 401) { router.push('/admin/login'); return }
    const data = await res.json()
    setBookings(data.bookings || [])
    setLoading(false)
  }, [router])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard load-on-mount data fetch
  useEffect(() => { fetchTrash() }, [fetchTrash])

  async function restore(id: string) {
    setRestoringId(id)
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restore: true }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      await fetchTrash()
    } finally {
      setRestoringId(null)
    }
  }

  async function purge(id: string) {
    if (!confirm('Permanently delete this booking? This cannot be undone.')) return
    setPurgingId(id)
    try {
      const res = await fetch(`/api/admin/bookings/${id}?permanent=true`, { method: 'DELETE' })
      if (res.status === 401) { router.push('/admin/login'); return }
      await fetchTrash()
    } finally {
      setPurgingId(null)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; }`}</style>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faTrashCan} style={{ color: c.red }} /> Trash
        </h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 24px' }}>
          Deleted bookings stay here until restored or permanently removed.
        </p>

        <div style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 48, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>Loading...</div>
          ) : bookings.length === 0 ? (
            <div style={{ padding: 48, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>Trash is empty.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${c.border}` }}>
                  {['Name', 'Email', 'Pickup Date', 'Status', ''].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.textFaint }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ padding: '10px 14px', fontWeight: 500 }}>
                      <Link href={`/admin/bookings/${b.id}`} style={{ color: c.text, textDecoration: 'none' }}>{b.full_name}</Link>
                    </td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{b.email}</td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{b.pickup_date}</td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{b.status}</td>
                    <td style={{ padding: '10px 14px', display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => restore(b.id)}
                        disabled={restoringId === b.id}
                        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', background: c.greenTint, border: '1px solid rgba(123,191,143,0.3)', borderRadius: 6, color: c.green, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                      >
                        <FontAwesomeIcon icon={faTrashRestore} /> Restore
                      </button>
                      <button
                        onClick={() => purge(b.id)}
                        disabled={purgingId === b.id}
                        style={{ padding: '5px 10px', background: c.redTint, border: `1px solid ${c.redBorder}`, borderRadius: 6, color: c.red, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                      >
                        Delete Forever
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  )
}
