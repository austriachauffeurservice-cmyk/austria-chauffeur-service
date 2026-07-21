'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/admin/bookings', label: 'Bookings', icon: '📋', match: (p: string) => p === '/admin/bookings' || (p.startsWith('/admin/bookings/') && !p.startsWith('/admin/bookings/new')) },
  { href: '/admin/bookings/new', label: 'New Booking', icon: '➕', match: (p: string) => p.startsWith('/admin/bookings/new') },
  { href: '/admin/activity', label: 'Activity Log', icon: '🕒', match: (p: string) => p.startsWith('/admin/activity') },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const navContent = (
    <>
      <div style={{ padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, flexShrink: 0, background: 'linear-gradient(135deg,#D4AF37,#f0d060)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#0d0d0d' }}>A</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', lineHeight: 1.2 }}>Austria Chauffeur</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Admin Portal</div>
        </div>
      </div>

      <nav style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {NAV_ITEMS.map((item) => {
          const active = item.match(pathname)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: 'none',
                color: active ? '#D4AF37' : 'rgba(255,255,255,0.6)',
                background: active ? 'rgba(212,175,55,0.12)' : 'transparent',
                borderLeft: active ? '2px solid #D4AF37' : '2px solid transparent',
              }}
            >
              <span aria-hidden style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: 12, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- file download endpoint, not a page */}
        <a
          href="/api/admin/bookings/export"
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500, color: '#D4AF37', textDecoration: 'none', fontFamily: 'inherit' }}
        >
          <span aria-hidden>⬇</span> Export CSV
        </a>
        <button
          onClick={handleLogout}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, fontSize: 13, background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
        >
          <span aria-hidden>↩</span> Sign Out
        </button>
      </div>
    </>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0d' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }

        .admin-shell { display: flex; min-height: 100vh; font-family: 'Inter', sans-serif; }
        .admin-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.02);
          border-right: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
        }
        .admin-mobile-bar { display: none; }
        .admin-main { flex: 1; min-width: 0; }
        .admin-backdrop { display: none; }

        @media (max-width: 860px) {
          .admin-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 200;
            background: #111318;
            box-shadow: 4px 0 24px rgba(0,0,0,0.4);
            transform: translateX(-100%);
            transition: transform 0.2s ease;
          }
          .admin-sidebar.open { transform: translateX(0); }
          .admin-mobile-bar {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: rgba(255,255,255,0.03);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .admin-backdrop.open {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 150;
          }
        }
      `}</style>

      <div className="admin-shell">
        <aside className={`admin-sidebar${mobileOpen ? ' open' : ''}`}>
          {navContent}
        </aside>

        <div className={`admin-backdrop${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />

        <div className="admin-main">
          <div className="admin-mobile-bar">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 4 }}
            >
              ☰
            </button>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Austria Chauffeur · Admin</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
