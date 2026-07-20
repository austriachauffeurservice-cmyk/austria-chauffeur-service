-- Austria Chauffeur Service — initial schema
-- Run this in Supabase SQL Editor (Project -> SQL Editor -> New query)

-- Bookings / leads table
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- customer
  full_name text not null,
  email text not null,
  phone text not null,

  -- trip details
  pickup_location text not null,
  dropoff_location text not null,
  pickup_date date not null,
  pickup_time time not null,
  passengers int not null default 1,
  vehicle_type text not null default 'sedan', -- sedan | van | luxury | minibus
  flight_number text,
  notes text,

  -- status tracking
  status text not null default 'new', -- new | confirmed | completed | cancelled

  -- email delivery tracking (Resend)
  customer_email_sent boolean not null default false,
  admin_email_sent boolean not null default false
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);

-- Row Level Security
alter table public.bookings enable row level security;

-- No public read/write policies are created here on purpose:
-- all access goes through the Next.js API routes using the
-- Supabase service_role key (server-side only, never exposed to the browser).
-- This keeps customer PII (email/phone) out of reach of the anon/public key.
