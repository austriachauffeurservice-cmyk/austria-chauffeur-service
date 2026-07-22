'use client'

export function DispatchPrintButton({ fileName }: { fileName: string }) {
  function handlePrint() {
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
    <button type="button" onClick={handlePrint} className="btn-print">
      Print / Save PDF
    </button>
  )
}
