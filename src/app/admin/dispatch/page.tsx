import { createServiceRoleClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { siteName } from '@/lib/content/site'
import { DispatchPrintButton } from './print-button'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ date?: string }>
}

export default async function DispatchSheetPage({ searchParams }: Props) {
  const { date } = await searchParams
  const targetDate = date || new Date().toISOString().slice(0, 10)

  const supabase = createServiceRoleClient()
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .eq('pickup_date', targetDate)
    .is('deleted_at', null)
    .neq('status', 'cancelled')
    .order('pickup_time', { ascending: true })

  const rows = bookings || []
  const displayDate = new Date(`${targetDate}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <div className="dispatch-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #525659; font-family: 'Inter', sans-serif; color: #1a1a1a; }

        .top-bar {
          background: #1e1e1e; color: #fff; padding: 12px 16px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; row-gap: 10px; column-gap: 12px;
          position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .back-link { color: #b8934a; text-decoration: none; font-size: 13px; font-weight: 500; }
        .date-picker-form { display: flex; align-items: center; gap: 8px; }
        .date-input { padding: 6px 10px; border-radius: 6px; border: 1px solid #444; background: #2a2a2a; color: #fff; font-family: inherit; font-size: 13px; }
        .btn-go { padding: 6px 14px; border-radius: 6px; background: #444; color: #fff; border: none; font-size: 13px; cursor: pointer; }
        .btn-print { padding: 8px 16px; border-radius: 6px; background: #b8934a; color: #000; border: none; font-weight: 600; font-size: 13px; cursor: pointer; }

        .sheet-page { width: 297mm; min-height: 210mm; margin: 30px auto; background: #fff; padding: 15mm; box-shadow: 0 8px 24px rgba(0,0,0,0.25); }
        .sheet-header { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid #b8934a; padding-bottom: 12px; margin-bottom: 16px; }
        .sheet-title { font-size: 20px; font-weight: 700; color: #0d0d0d; }
        .sheet-sub { font-size: 12px; color: #666; }
        table { width: 100%; border-collapse: collapse; font-size: 12px; }
        th { background: #0d0d0d; color: #fff; padding: 8px 10px; text-align: left; text-transform: uppercase; letter-spacing: 0.05em; font-size: 10px; }
        td { padding: 8px 10px; border-bottom: 1px solid #eee; vertical-align: top; }
        tr:nth-child(even) td { background: #fafafa; }
        .empty { padding: 60px; text-align: center; color: #999; }

        @media print {
          .top-bar { display: none !important; }
          body { background: #fff !important; }
          .sheet-page { box-shadow: none !important; margin: 0 !important; width: 100% !important; padding: 10mm !important; }
        }
      `}</style>

      <div className="top-bar">
        <Link href="/admin/bookings" className="back-link">← Back to Admin Bookings</Link>
        <form className="date-picker-form" action="/admin/dispatch" method="GET">
          <input type="date" name="date" defaultValue={targetDate} className="date-input" />
          <button type="submit" className="btn-go">Go</button>
        </form>
        <DispatchPrintButton fileName={`Dispatch Sheet - ${targetDate}`} />
      </div>

      <div className="sheet-page">
        <div className="sheet-header">
          <div>
            <div className="sheet-title">Daily Dispatch Sheet</div>
            <div className="sheet-sub">{siteName}</div>
          </div>
          <div className="sheet-sub">{displayDate} · {rows.length} pickup{rows.length !== 1 ? 's' : ''}</div>
        </div>

        {rows.length === 0 ? (
          <div className="empty">No pickups scheduled for this date.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Passenger</th>
                <th>Phone</th>
                <th>Pickup</th>
                <th>Drop-off</th>
                <th>Pax</th>
                <th>Vehicle</th>
                <th>Flight</th>
                <th>Driver / Partner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((b) => (
                <tr key={b.id}>
                  <td style={{ fontWeight: 700 }}>{b.pickup_time}</td>
                  <td>{b.full_name}</td>
                  <td>{b.phone}</td>
                  <td>{b.pickup_location}</td>
                  <td>{b.dropoff_location}</td>
                  <td>{b.passengers}</td>
                  <td>{b.vehicle_type}</td>
                  <td>{b.flight_number || '—'}</td>
                  <td>{b.assigned_driver || '—'}</td>
                  <td style={{ textTransform: 'capitalize' }}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
