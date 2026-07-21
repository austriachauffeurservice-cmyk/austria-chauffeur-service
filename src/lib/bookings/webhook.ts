import { CreateBookingInput } from '@/lib/bookings/schema'
import { createServiceRoleClient } from '@/lib/supabase/server'

export interface BookingWebhookPayload extends CreateBookingInput {
  id: string
  created_at: string
}

export interface WebhookDispatchResult {
  /** false when TENANT_LEAD_WEBHOOK_URL isn't configured — nothing was sent */
  attempted: boolean
  success: boolean
  statusCode?: number
  error?: string
}

export async function dispatchTenantWebhook(payload: BookingWebhookPayload): Promise<WebhookDispatchResult> {
  const webhookUrl = process.env.TENANT_LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    return { attempted: false, success: false }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'AustriaChauffeurService-Webhook/1.0',
      },
      body: JSON.stringify({
        event: 'booking.created',
        data: payload,
      }),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error(`Tenant webhook failed with status ${response.status}:`, text)
      return { attempted: true, success: false, statusCode: response.status, error: text.slice(0, 500) }
    }

    return { attempted: true, success: true, statusCode: response.status }
  } catch (err) {
    console.error('Failed to dispatch tenant webhook:', err)
    return { attempted: true, success: false, error: err instanceof Error ? err.message : String(err) }
  }
}

// Fire-and-forget wrapper: dispatches the webhook and persists the delivery
// outcome onto the booking row without blocking the caller's response.
export function dispatchTenantWebhookAndRecord(payload: BookingWebhookPayload): void {
  dispatchTenantWebhook(payload)
    .then((result) => {
      const supabase = createServiceRoleClient()
      return supabase
        .from('bookings')
        .update({
          webhook_sent: result.attempted,
          webhook_status: !result.attempted ? 'not_configured' : result.success ? 'delivered' : 'failed',
          webhook_status_code: result.statusCode ?? null,
        })
        .eq('id', payload.id)
    })
    .catch((err) => console.error('Failed tenant webhook dispatch:', err))
}
