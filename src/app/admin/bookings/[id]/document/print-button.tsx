'use client'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-action btn-print"
      style={{ cursor: 'pointer' }}
    >
      🖨️ Print / Save PDF
    </button>
  )
}
