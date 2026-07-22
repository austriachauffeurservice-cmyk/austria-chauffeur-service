'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export function PrintButton({ fileName }: { fileName: string }) {
  function handlePrint() {
    // The browser's "Save as PDF" filename suggestion comes from
    // document.title at the moment print() is invoked — swap it to
    // something client/booking-specific just for the print, then put
    // the original tab title back once the print dialog closes.
    const previousTitle = document.title
    document.title = fileName
    const restore = () => {
      document.title = previousTitle
      window.removeEventListener('afterprint', restore)
    }
    window.addEventListener('afterprint', restore)
    window.print()
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="btn-action btn-print"
      style={{ cursor: 'pointer' }}
    >
      <FontAwesomeIcon icon={faPrint} /> Print / Save PDF
    </button>
  )
}
