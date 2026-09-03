import { createServiceRoleClient } from '@/lib/supabase/server'

// Best-effort abuse guard on the public booking form: caps how many
// submissions from the same email address go through in a short window.
// Targets the concrete risk of the public form — a script repeatedly
// submitting someone else's email address, spamming them with this site's
// branded confirmation email — without adding a new column or an IP-based
// store. Fails open (allows the booking) if the check itself errors, since
// a Supabase hiccup must never block a genuine customer from booking.
const SUBMISSION_LIMIT = 3
const SUBMISSION_WINDOW_MS = 10 * 60 * 1000

export async function isSubmittingTooFast(email: string): Promise<boolean> {
  try {
    const supabase = createServiceRoleClient()
    const since = new Date(Date.now() - SUBMISSION_WINDOW_MS).toISOString()
    const { count, error } = await supabase
      .from('bookings')
      .select('id', { count: 'exact', head: true })
      .eq('email', email)
      .gte('created_at', since)
    if (error) {
      console.warn('Failed to check recent booking submissions (non-fatal, failing open):', error.message)
      return false
    }
    return (count || 0) >= SUBMISSION_LIMIT
  } catch (err) {
    console.warn('Failed to check recent booking submissions (non-fatal, failing open):', err)
    return false
  }
}

// Flags a new booking as a possible duplicate if the same customer already
// has another (non-deleted) booking for the same pickup date — catches
// accidental double-submits and the same phone lead logged twice. Returns
// whether it flagged, so callers can reflect it in their own response
// instead of returning a booking object that's now stale on this field.
export async function flagIfDuplicate(bookingId: string, email: string, pickupDate: string): Promise<boolean> {
  const supabase = createServiceRoleClient()
  const { data } = await supabase
    .from('bookings')
    .select('id')
    .eq('email', email)
    .eq('pickup_date', pickupDate)
    .is('deleted_at', null)
    .neq('id', bookingId)
    .limit(1)

  const isDuplicate = !!data && data.length > 0
  if (isDuplicate) {
    await supabase.from('bookings').update({ possible_duplicate: true }).eq('id', bookingId)
  }
  return isDuplicate
}
