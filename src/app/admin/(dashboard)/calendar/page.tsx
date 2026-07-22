import { createServiceRoleClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { adminColors as c } from '@/lib/admin/theme'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ month?: string }>
}

const STATUS_DOT: Record<string, string> = {
  pending: c.yellow,
  confirmed: c.green,
  completed: c.blue,
  cancelled: c.red,
}

export default async function CalendarPage({ searchParams }: Props) {
  const { month } = await searchParams
  const now = new Date()
  const [year, monthIdx] = (month || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`)
    .split('-')
    .map(Number)

  const firstOfMonth = new Date(year, monthIdx - 1, 1)
  const lastOfMonth = new Date(year, monthIdx, 0)
  const firstYmd = firstOfMonth.toISOString().slice(0, 10)
  const lastYmd = lastOfMonth.toISOString().slice(0, 10)

  const supabase = createServiceRoleClient()
  const { data: bookings } = await supabase
    .from('bookings')
    .select('id, full_name, pickup_date, pickup_time, status')
    .gte('pickup_date', firstYmd)
    .lte('pickup_date', lastYmd)
    .is('deleted_at', null)
    .order('pickup_time', { ascending: true })

  const byDay = new Map<string, typeof bookings>()
  for (const b of bookings || []) {
    const list = byDay.get(b.pickup_date) || []
    list.push(b)
    byDay.set(b.pickup_date, list)
  }

  // Monday-first grid, including leading/trailing days from adjacent months.
  const startWeekday = (firstOfMonth.getDay() + 6) % 7
  const daysInMonth = lastOfMonth.getDate()
  const cells: { date: Date; inMonth: boolean }[] = []
  for (let i = 0; i < startWeekday; i++) {
    cells.push({ date: new Date(year, monthIdx - 1, -startWeekday + i + 1), inMonth: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, monthIdx - 1, d), inMonth: true })
  }
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date
    cells.push({ date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1), inMonth: false })
  }

  const prevMonth = new Date(year, monthIdx - 2, 1)
  const nextMonth = new Date(year, monthIdx, 1)
  const monthLabel = firstOfMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
  const todayYmd = now.toISOString().slice(0, 10)

  return (
    <main style={{ minHeight: '100vh', background: c.bg, color: c.text, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
        .cal-cell { min-height: 100px; border-radius: 8px; padding: 8px; background: ${c.panel}; border: 1px solid ${c.border}; }
        .cal-cell.today { border-color: ${c.goldBorder}; background: ${c.goldTint}; }
        .cal-cell.out { opacity: 0.35; }
        @media (max-width: 720px) {
          .cal-grid { gap: 4px; }
          .cal-cell { min-height: 70px; padding: 5px; font-size: 11px; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: c.text, margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faCalendarDays} style={{ color: c.gold }} /> Pickup Calendar
        </h1>
        <p style={{ fontSize: 13, color: c.textFaint, margin: '0 0 20px' }}>Visual overview of scheduled pickups by day.</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <Link
            href={`/admin/calendar?month=${prevMonth.getFullYear()}-${String(prevMonth.getMonth() + 1).padStart(2, '0')}`}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, textDecoration: 'none', fontSize: 13 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 11 }} /> Prev
          </Link>
          <span style={{ fontSize: 16, fontWeight: 600 }}>{monthLabel}</span>
          <Link
            href={`/admin/calendar?month=${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, '0')}`}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: c.panel, border: `1px solid ${c.borderStrong}`, borderRadius: 8, color: c.text, textDecoration: 'none', fontSize: 13 }}
          >
            Next <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 11 }} />
          </Link>
        </div>

        <div className="cal-grid" style={{ marginBottom: 6 }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
            <div key={d} style={{ fontSize: 11, color: c.textFaint, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', padding: '4px 0' }}>{d}</div>
          ))}
        </div>

        <div className="cal-grid">
          {cells.map(({ date, inMonth }) => {
            const ymd = date.toISOString().slice(0, 10)
            const dayBookings = byDay.get(ymd) || []
            const isToday = ymd === todayYmd
            return (
              <div key={ymd} className={`cal-cell${!inMonth ? ' out' : ''}${isToday ? ' today' : ''}`}>
                <div style={{ fontSize: 12, fontWeight: 600, color: isToday ? c.gold : c.textMuted, marginBottom: 4 }}>{date.getDate()}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {dayBookings.slice(0, 3).map((b) => (
                    <Link
                      key={b.id}
                      href={`/admin/bookings/${b.id}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: c.text, textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      title={`${b.pickup_time} · ${b.full_name}`}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: STATUS_DOT[b.status] || c.textFaint, flexShrink: 0 }} />
                      {b.pickup_time?.slice(0, 5)} {b.full_name}
                    </Link>
                  ))}
                  {dayBookings.length > 3 && (
                    <span style={{ fontSize: 10, color: c.textFaint }}>+{dayBookings.length - 3} more</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
