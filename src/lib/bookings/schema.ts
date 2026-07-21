import { z } from 'zod'

export const vehicleTypes = ['sedan', 'van', 'luxury', 'minibus'] as const

export const createBookingSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.email().trim().max(255),
  phone: z.string().trim().min(6).max(30),
  pickupLocation: z.string().trim().min(2).max(255),
  dropoffLocation: z.string().trim().min(2).max(255),
  pickupDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected YYYY-MM-DD'),
  pickupTime: z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, 'Expected HH:MM'),
  passengers: z.coerce.number().int().min(1).max(50).default(1),
  vehicleType: z.enum(vehicleTypes).default('sedan'),
  flightNumber: z.string().trim().max(50).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
})

export type CreateBookingInput = z.infer<typeof createBookingSchema>

export const manualLeadSources = ['phone', 'whatsapp', 'email', 'other'] as const
export const bookingStatuses = ['pending', 'confirmed', 'completed', 'cancelled'] as const

export const manualBookingSchema = createBookingSchema.extend({
  source: z.enum(manualLeadSources).default('phone'),
  status: z.enum(bookingStatuses).default('pending'),
  priceQuote: z.string().trim().max(30).optional().or(z.literal('')),
  sendConfirmationEmail: z.boolean().default(false),
})

export type ManualBookingInput = z.infer<typeof manualBookingSchema>
