'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPowerOff, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

type Partner = {
  id: string
  name: string
  phone: string | null
  email: string | null
  notes: string | null
  active: boolean
}

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

export default function PartnersPage() {
  const router = useRouter()
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [showInactive, setShowInactive] = useState(false)

  const fetchPartners = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`/api/admin/partners${showInactive ? '?includeInactive=true' : ''}`)
    if (res.status === 401) { router.push('/admin/login'); return }
    const data = await res.json()
    setPartners(data.partners || [])
    setLoading(false)
  }, [router, showInactive])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard load-on-mount data fetch
  useEffect(() => { fetchPartners() }, [fetchPartners])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/admin/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, notes }),
      })
      if (res.status === 401) { router.push('/admin/login'); return }
      if (res.ok) {
        setName(''); setPhone(''); setEmail(''); setNotes('')
        await fetchPartners()
      } else {
        const data = await res.json().catch(() => ({}))
        alert(data.error || 'Failed to add partner')
      }
    } finally {
      setSaving(false)
    }
  }

  async function toggleActive(partner: Partner) {
    const res = await fetch(`/api/admin/partners/${partner.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !partner.active }),
    })
    if (res.status === 401) { router.push('/admin/login'); return }
    await fetchPartners()
  }

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; }`}</style>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faUserGroup} style={{ color: c.gold }} /> Driver / Partner Directory
        </h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 24px' }}>
          Fulfillment partners and drivers you can assign to a booking from the dispatch panel.
        </p>

        <form onSubmit={handleAdd} style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, padding: 20, marginBottom: 24, display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Name *</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: c.textMuted, marginBottom: 6 }}>Notes</label>
            <input value={notes} onChange={(e) => setNotes(e.target.value)} style={inputStyle} placeholder="e.g. covers Salzburg region" />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: c.gold, border: 'none', borderRadius: 8, color: c.bg, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
              <FontAwesomeIcon icon={faPlus} /> {saving ? 'Adding...' : 'Add Partner'}
            </button>
          </div>
        </form>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: c.textMuted, marginBottom: 12, cursor: 'pointer' }}>
          <input type="checkbox" checked={showInactive} onChange={(e) => setShowInactive(e.target.checked)} />
          Show deactivated partners
        </label>

        <div style={{ background: c.panel, border: `1px solid ${c.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 48, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>Loading...</div>
          ) : partners.length === 0 ? (
            <div style={{ padding: 48, textAlign: 'center', color: c.textFaint, fontSize: 14 }}>No partners added yet.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${c.border}` }}>
                  {['Name', 'Phone', 'Email', 'Notes', ''].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.textFaint }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {partners.map((p) => (
                  <tr key={p.id} style={{ borderBottom: `1px solid ${c.border}`, opacity: p.active ? 1 : 0.5 }}>
                    <td style={{ padding: '10px 14px', fontWeight: 500 }}>{p.name}</td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{p.phone || '—'}</td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{p.email || '—'}</td>
                    <td style={{ padding: '10px 14px', color: c.textMuted }}>{p.notes || '—'}</td>
                    <td style={{ padding: '10px 14px' }}>
                      <button
                        onClick={() => toggleActive(p)}
                        title={p.active ? 'Deactivate' : 'Reactivate'}
                        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', background: p.active ? c.redTint : c.greenTint, border: `1px solid ${p.active ? c.redBorder : 'rgba(123,191,143,0.3)'}`, borderRadius: 6, color: p.active ? c.red : c.green, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                      >
                        <FontAwesomeIcon icon={faPowerOff} /> {p.active ? 'Deactivate' : 'Reactivate'}
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
