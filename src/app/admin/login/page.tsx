'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Invalid credentials. Try again.')
        return
      }
      router.push('/admin/bookings')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; }
        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 44px 36px;
          backdrop-filter: blur(20px);
        }
        .logo-mark {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #D4AF37, #f0d060);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 700;
          color: #0d0d0d;
        }
        .login-title {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 4px;
        }
        .login-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin: 0 0 28px;
        }
        .label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          margin-bottom: 16px;
        }
        .input:focus { border-color: #D4AF37; }
        .error-msg {
          margin-bottom: 16px;
          padding: 10px 14px;
          background: rgba(220,38,38,0.12);
          border: 1px solid rgba(220,38,38,0.3);
          border-radius: 8px;
          color: #f87171;
          font-size: 13px;
        }
        .submit-btn {
          margin-top: 8px;
          width: 100%;
          padding: 13px;
          background: #D4AF37;
          color: #0d0d0d;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          letter-spacing: 0.04em;
        }
        .submit-btn:hover { opacity: 0.9; }
        .submit-btn:active { transform: scale(0.99); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .footer-note {
          margin-top: 24px;
          text-align: center;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          line-height: 1.5;
        }
      `}</style>

      <div className="login-card">
        <div className="logo-mark">A</div>
        <h1 className="login-title">Admin Portal</h1>
        <p className="login-sub">Supabase Auth Protected Portal</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="admin@austriachauffeurservice.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>

          <div>
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-msg">⚠ {error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>

        <p className="footer-note">
          Supports Supabase Auth & Admin Credentials<br />
          Authorized personnel only · All access is logged
        </p>
      </div>
    </main>
  )
}
