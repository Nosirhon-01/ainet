export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ainet-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0d0f17" stroke="rgba(255,255,255,.1)" />
      <path d="M32 11 L52 51 H43 L32 28 L21 51 H12 Z" fill="url(#ainet-g)" />
      <path d="M29 38 L37 43 L29 48 Z" fill="#fff" />
    </svg>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-none">
        <span className="block font-display text-[17px] font-semibold tracking-[0.08em]">AINET</span>
        {!compact && (
          <span className="mt-1 block text-[8.5px] font-semibold tracking-[0.32em] text-white/45">AI VIDEO CREATION</span>
        )}
      </span>
    </span>
  )
}
