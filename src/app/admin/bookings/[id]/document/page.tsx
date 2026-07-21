import { createServiceRoleClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PrintButton } from './print-button'
import { contactAddress, contactEmail, contactPhone, siteName } from '@/lib/content/site'

// These identifiers are not fabricated business data — set the real values
// via env vars once available. Until then the document shows an explicit
// "not yet issued" placeholder rather than printing something fake.
const businessUid = process.env.BUSINESS_UID_NUMBER || null
const businessBankDetails = process.env.BUSINESS_BANK_DETAILS || null

export const dynamic = 'force-dynamic'

interface DocumentPageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ type?: string; price?: string }>
}

export default async function BookingDocumentPage({ params, searchParams }: DocumentPageProps) {
  const { id } = await params
  const { type = 'invoice', price } = await searchParams

  const supabase = createServiceRoleClient()
  const { data: booking } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single()

  if (!booking) {
    notFound()
  }

  const docType = (['quote', 'invoice', 'receipt'].includes(type) ? type : 'invoice') as 'quote' | 'invoice' | 'receipt'
  const displayPrice = price || booking.price_quote || '180.00'
  const numericPrice = parseFloat(displayPrice.replace(/[^0-9.]/g, '')) || 180.00
  const vatRate = 0.20
  const netAmount = (numericPrice / (1 + vatRate)).toFixed(2)
  const vatAmount = (numericPrice - parseFloat(netAmount)).toFixed(2)

  const docTitles = {
    quote: 'OFFICIAL QUOTATION',
    invoice: 'TAX INVOICE',
    receipt: 'PAYMENT RECEIPT',
  }

  const docPrefix = {
    quote: 'QT',
    invoice: 'INV',
    receipt: 'REC',
  }

  const docNum = `${docPrefix[docType]}-${new Date().getFullYear()}-${booking.id.slice(0, 5).toUpperCase()}`
  const todayDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="doc-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; }
        body { margin: 0; background: #525659; font-family: 'Inter', sans-serif; color: #1a1a1a; }

        .top-action-bar {
          background: #1e1e1e;
          color: #fff;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          row-gap: 10px;
          column-gap: 12px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        @media (max-width: 640px) {
          .top-action-bar { padding: 12px 16px; justify-content: center; }
          .top-action-bar .back-link { width: 100%; text-align: center; }
        }

        .back-link {
          color: #D4AF37;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
        }

        .btn-group {
          display: flex;
          gap: 12px;
        }

        .btn-action {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
        }

        .btn-print {
          background: #D4AF37;
          color: #000;
        }

        .btn-print:hover { opacity: 0.9; }

        .type-selector {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          padding: 3px;
          border-radius: 8px;
        }

        .type-tab {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: #ccc;
          text-decoration: none;
        }

        .type-tab.active {
          background: #ffffff;
          color: #000;
          font-weight: 600;
        }

        /* Printable Document Canvas */
        .doc-page {
          width: 210mm;
          min-height: 297mm;
          margin: 30px auto;
          background: #ffffff;
          padding: 20mm 15mm;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .doc-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #D4AF37;
          padding-bottom: 20px;
          margin-bottom: 24px;
        }

        .brand-title {
          font-family: 'Cinzel', serif;
          font-size: 22px;
          font-weight: 700;
          color: #0d0d0d;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .brand-sub {
          font-size: 11px;
          color: #666;
          margin-top: 4px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .doc-title-block {
          text-align: right;
        }

        .doc-title {
          font-size: 20px;
          font-weight: 700;
          color: #D4AF37;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .doc-meta {
          font-size: 12px;
          color: #555;
          margin-top: 6px;
          line-height: 1.5;
        }

        .addresses-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 28px;
        }

        .address-card {
          background: #fafafa;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          padding: 16px;
        }

        .address-heading {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .address-name {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }

        .address-text {
          font-size: 12px;
          color: #444;
          line-height: 1.5;
        }

        /* Items Table */
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .items-table th {
          background: #0d0d0d;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 10px 14px;
          text-align: left;
        }

        .items-table td {
          padding: 12px 14px;
          font-size: 13px;
          border-bottom: 1px solid #eeeeee;
          color: #333;
        }

        .totals-section {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 30px;
        }

        .totals-box {
          width: 260px;
          background: #fafafa;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          padding: 14px 18px;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 13px;
          color: #555;
        }

        .total-row.grand {
          border-top: 2px solid #D4AF37;
          margin-top: 6px;
          padding-top: 10px;
          font-size: 16px;
          font-weight: 700;
          color: #0d0d0d;
        }

        .status-stamp {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .stamp-quote { background: #fffbebf7; color: #b45309; border: 1px solid #fde68a; }
        .stamp-invoice { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; }
        .stamp-receipt { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }

        .bank-details {
          background: #fdfbf7;
          border: 1px solid #f3e8c8;
          border-radius: 8px;
          padding: 14px 18px;
          font-size: 12px;
          color: #555;
          margin-bottom: 24px;
        }

        .doc-footer {
          border-top: 1px solid #eeeeee;
          padding-top: 16px;
          text-align: center;
          font-size: 11px;
          color: #888;
          line-height: 1.6;
        }

        @media print {
          .top-action-bar { display: none !important; }
          body { background: #ffffff !important; }
          .doc-page {
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            min-height: auto !important;
            padding: 10mm 10mm !important;
          }
        }
      `}</style>

      {/* Action Navigation Header */}
      <div className="top-action-bar">
        <Link href="/admin/bookings" className="back-link">
          ← Back to Admin Bookings
        </Link>

        <div className="type-selector">
          <Link
            href={`/admin/bookings/${booking.id}/document?type=quote&price=${displayPrice}`}
            className={`type-tab ${docType === 'quote' ? 'active' : ''}`}
          >
            Quotation
          </Link>
          <Link
            href={`/admin/bookings/${booking.id}/document?type=invoice&price=${displayPrice}`}
            className={`type-tab ${docType === 'invoice' ? 'active' : ''}`}
          >
            Tax Invoice
          </Link>
          <Link
            href={`/admin/bookings/${booking.id}/document?type=receipt&price=${displayPrice}`}
            className={`type-tab ${docType === 'receipt' ? 'active' : ''}`}
          >
            Receipt
          </Link>
        </div>

        <div className="btn-group">
          {/* Printable Trigger */}
          <PrintButton />
        </div>
      </div>

      {/* Printable A4 Canvas */}
      <div className="doc-page">
        <div>
          {/* Header */}
          <div className="doc-header">
            <div>
              <div className="brand-title">Austria Chauffeur Service</div>
              <div className="brand-sub">Premium Executive Transportation · Austria & Europe</div>
            </div>
            <div className="doc-title-block">
              <h1 className="doc-title">{docTitles[docType]}</h1>
              <div className="doc-meta">
                <strong>Doc #:</strong> {docNum}<br />
                <strong>Date:</strong> {todayDate}<br />
                <strong>Ref ID:</strong> {booking.id.slice(0, 8)}
              </div>
            </div>
          </div>

          {/* Addresses Grid */}
          <div className="addresses-grid">
            <div className="address-card">
              <div className="address-heading">Service Provider</div>
              <div className="address-name">{siteName}</div>
              <div className="address-text">
                {contactAddress}<br />
                UID/VAT ID: {businessUid || 'Not yet issued'}<br />
                Email: {contactEmail}<br />
                Phone: {contactPhone}
              </div>
            </div>

            <div className="address-card">
              <div className="address-heading">Bill To Client</div>
              <div className="address-name">{booking.full_name}</div>
              <div className="address-text">
                Email: {booking.email}<br />
                Phone: {booking.phone}<br />
                Passengers: {booking.passengers} Pax<br />
                Vehicle Class: {booking.vehicle_type.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div style={{ marginBottom: 20 }}>
            <span className={`status-stamp stamp-${docType}`}>
              {docType === 'quote' && '● QUOTATION VALID FOR 14 DAYS'}
              {docType === 'invoice' && `● PAYMENT STATUS: ${booking.status.toUpperCase()}`}
              {docType === 'receipt' && '● PAID IN FULL — THANK YOU'}
            </span>
          </div>

          {/* Route Details Table */}
          <table className="items-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Route Details</th>
                <th>Date & Time</th>
                <th style={{ textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Executive Private Transfer</strong><br />
                  <span style={{ fontSize: 11, color: '#666' }}>
                    Vehicle: {booking.vehicle_type.toUpperCase()} · Passengers: {booking.passengers}
                    {booking.flight_number ? ` · Flight: ${booking.flight_number}` : ''}
                  </span>
                </td>
                <td>
                  <strong>From:</strong> {booking.pickup_location}<br />
                  <strong>To:</strong> {booking.dropoff_location}
                </td>
                <td>
                  {booking.pickup_date}<br />
                  <span style={{ fontSize: 11, color: '#666' }}>{booking.pickup_time}</span>
                </td>
                <td style={{ textAlign: 'right', fontWeight: 600 }}>
                  €{numericPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Totals Section */}
          <div className="totals-section">
            <div className="totals-box">
              <div className="total-row">
                <span>Net Amount:</span>
                <span>€{netAmount}</span>
              </div>
              <div className="total-row">
                <span>VAT (20% Incl.):</span>
                <span>€{vatAmount}</span>
              </div>
              <div className="total-row grand">
                <span>Total EUR:</span>
                <span>€{numericPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Details / Notes */}
          <div className="bank-details">
            <strong style={{ color: '#000', display: 'block', marginBottom: 4 }}>
              {docType === 'receipt' ? 'Payment Information' : 'Bank Payment Details (IBAN/SWIFT)'}
            </strong>
            {docType === 'receipt' ? (
              <span>Payment processed via credit card / driver terminal. Balance remaining: €0.00 EUR.</span>
            ) : businessBankDetails ? (
              <span>
                {businessBankDetails}<br />
                Please include Document Number ({docNum}) as reference.
              </span>
            ) : (
              <span>
                Bank transfer details will be provided separately — contact {contactEmail}.<br />
                Please include Document Number ({docNum}) as reference.
              </span>
            )}
          </div>
        </div>

        {/* Document Footer */}
        <div className="doc-footer">
          {siteName} · Executive Chauffeur & Transfer Services · See /impressum for full legal details<br />
          Thank you for choosing {siteName}. Have a pleasant journey!
        </div>
      </div>
    </div>
  )
}


