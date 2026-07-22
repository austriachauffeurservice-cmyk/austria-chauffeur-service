import { createServiceRoleClient } from '@/lib/supabase/server'

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
