import { CreateBookingInput } from '@/lib/bookings/schema'

export interface BookingWebhookPayload extends CreateBookingInput {
  id: string
  created_at: string
}

export async function dispatchTenantWebhook(payload: BookingWebhookPayload): Promise<boolean> {
  const webhookUrl = process.env.TENANT_LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    return false
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
      console.error(`Tenant webhook failed with status ${response.status}:`, await response.text())
      return false
    }

    return true
  } catch (err) {
    console.error('Failed to dispatch tenant webhook:', err)
    return false
  }
}
