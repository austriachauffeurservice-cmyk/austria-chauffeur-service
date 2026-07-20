# Austria Chauffeur Service — austriachauffeurservice.com

Next.js (App Router, TypeScript, Tailwind) + Supabase (database) + Resend (email).

## Backend setup

### 1. Supabase

1. Create a project at [supabase.com](https://supabase.com) (region: Central EU / Frankfurt recommended).
2. Open **SQL Editor** and run [`supabase/schema.sql`](./supabase/schema.sql) to create the `bookings` table.
3. Go to **Settings -> API** and copy:
   - Project URL -> `SUPABASE_URL`
   - `service_role` key -> `SUPABASE_SERVICE_ROLE_KEY` (server-only, never expose to the browser)

### 2. Resend

1. Create an account at [resend.com](https://resend.com).
2. **API Keys** -> create a key -> `RESEND_API_KEY`.
3. **Domains** -> add `austriachauffeurservice.com` and add the DNS records they give you at your domain registrar. Emails can only be sent from a verified domain.
4. Pick a from-address on that domain, e.g. `bookings@austriachauffeurservice.com` -> `RESEND_FROM_EMAIL`.

### 3. Environment variables

Copy `.env.example` to `.env.local` and fill in the values from the steps above, plus:

- `ADMIN_NOTIFICATION_EMAIL` — inbox that gets notified on every new booking.
- `ADMIN_PASSWORD` — password for the `/admin` dashboard.
- `ADMIN_SESSION_SECRET` — random secret used to sign the admin login cookie. Generate one with:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

### 4. Run

```bash
npm run dev
```

- Site: `/` (home), `/services`, `/service-areas`, `/about`, `/contact`, `/booking`
- Booking API: `POST /api/bookings` (see request shape in `src/lib/bookings/schema.ts`)
- Admin dashboard: `/admin` (redirects to login, protected by `ADMIN_PASSWORD`)

Test the booking API:

```bash
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+43000000000",
    "pickupLocation": "Vienna Airport",
    "dropoffLocation": "Vienna City Center",
    "pickupDate": "2026-08-01",
    "pickupTime": "14:30",
    "passengers": 2,
    "vehicleType": "sedan"
  }'
```

## What's next

Real content (photos, actual pricing, verified contact number) and connecting the real Supabase/Resend credentials in production. `NEXT_PUBLIC_CONTACT_PHONE` is optional — the phone card on `/contact` only renders once it's set.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)
