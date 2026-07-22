'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

type Note = { id: string; created_at: string; author: string; note: string }

export function NotesThread({ bookingId }: { bookingId: string }) {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)

  const fetchNotes = useCallback(async () => {
    const res = await fetch(`/api/admin/bookings/${bookingId}/notes`)
    if (res.status === 401) { router.push('/admin/login'); return }
    if (res.ok) {
      const data = await res.json()
      setNotes(data.notes || [])
    }
    setLoading(false)
  }, [bookingId, router])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard load-on-mount data fetch
  useEffect(() => { fetchNotes() }, [fetchNotes])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!draft.trim()) return
    setSending(true)
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: draft }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (res.ok) {
        setDraft('')
        await fetchNotes()
      }
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <p style={{ fontSize: 13, fontWeight: 600, color: c.gold, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 8 }}>
        <FontAwesomeIcon icon={faNoteSticky} /> Internal Notes
      </p>
      <p style={{ fontSize: 12, color: c.textFaint, margin: '-10px 0 14px' }}>Ops-only — never shown to the customer.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a note for the team..."
          style={{ flex: 1, padding: '10px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, fontSize: 13, fontFamily: 'inherit', outline: 'none' }}
        />
        <button
          type="submit"
          disabled={sending || !draft.trim()}
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: c.gold, border: 'none', borderRadius: 8, color: c.bg, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', opacity: sending || !draft.trim() ? 0.6 : 1 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>

      {loading ? (
        <p style={{ fontSize: 13, color: c.textFaint }}>Loading...</p>
      ) : notes.length === 0 ? (
        <p style={{ fontSize: 13, color: c.textFaint }}>No notes yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {notes.map((n) => (
            <div key={n.id} style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: c.textFaint, marginBottom: 4 }}>
                <span>{n.author}</span>
                <span>{new Date(n.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div style={{ fontSize: 13, color: c.text, whiteSpace: 'pre-wrap' }}>{n.note}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
