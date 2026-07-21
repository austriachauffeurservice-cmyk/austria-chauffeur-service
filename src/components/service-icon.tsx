const paths: Record<string, string> = {
  plane: 'M2 16l20-7-20-7v6l14 1-14 1z',
  route: 'M4 19l6-14M14 5l6 14M9 12h6',
  border: 'M3 4v16M21 4v16M3 8h6M15 16h6M3 16h4M17 8h4',
  briefcase: 'M4 7h16v12H4zM9 7V5a2 2 0 012-2h2a2 2 0 012 2v2',
  star: 'M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6z',
  mountain: 'M2 20l7-12 4 6 3-4 6 10z',
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
}

export function ServiceIcon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const d = paths[name] ?? paths.star
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  )
}
