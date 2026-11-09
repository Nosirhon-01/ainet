import { useId } from 'react'

/**
 * Placeholder "kadr" vizuallari — real video qo'shilguncha ishlatiladi.
 * Faqat CSS — rasm yuklanmaydi, shuning uchun juda tez.
 */

function Commercial() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 80% at 50% 0%, #2a1660 0%, #120b2b 45%, #07080d 100%)' }} />
      {[18, 44, 70].map((l, i) => (
        <div
          key={l}
          className="animate-beam absolute -top-[20%] h-[140%] w-[16%] blur-md"
          style={{
            left: `${l}%`,
            transform: 'rotate(18deg)',
            background: 'linear-gradient(to bottom, rgba(167,139,250,.55), rgba(56,189,248,.12) 55%, transparent 80%)',
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
      <div
        className="animate-spin-slow absolute left-1/2 top-[44%] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #8B5CF6, #38BDF8, transparent 60%, #8B5CF6)',
          WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
        }}
      />
      <div className="animate-pulse-soft absolute left-1/2 top-[44%] aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
        style={{ background: 'radial-gradient(circle, #fff 0%, #a78bfa 35%, rgba(56,189,248,.4) 60%, transparent 72%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(139,92,246,.25), transparent)' }} />
    </>
  )
}

function Cinematic() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#05060f 0%,#140e36 34%,#4a2380 54%,#c0508f 66%,#f6a46b 72%)' }} />
      {[[12, 10], [30, 18], [64, 8], [82, 22], [48, 26], [74, 14]].map(([x, y]) => (
        <span key={`${x}-${y}`} className="absolute h-[2px] w-[2px] rounded-full bg-white/80" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}
      <div
        className="absolute left-1/2 top-[52%] aspect-square w-[38%] -translate-x-1/2 rounded-full"
        style={{ background: 'linear-gradient(180deg,#ffe2a8,#f472b6 75%)', boxShadow: '0 0 80px 20px rgba(244,114,182,.35)' }}
      />
      <div className="absolute inset-x-0 top-[56%] h-[18%]" style={{ background: '#2a1450', clipPath: 'polygon(0 60%,14% 25%,28% 55%,42% 10%,58% 50%,72% 20%,86% 45%,100% 15%,100% 100%,0 100%)' }} />
      <div className="absolute inset-x-0 top-[62%] h-[12.5%]" style={{ background: '#120a26', clipPath: 'polygon(0 40%,20% 70%,35% 30%,50% 65%,66% 25%,82% 60%,100% 35%,100% 100%,0 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 top-[74%] overflow-hidden bg-[#06050d]">
        <div
          className="absolute -inset-x-1/2 top-0 h-[180%] origin-top"
          style={{
            transform: 'perspective(240px) rotateX(62deg)',
            backgroundImage: 'linear-gradient(rgba(192,132,252,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.45) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(246,164,107,.25), transparent 40%)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-[7%] bg-black" />
      <div className="absolute inset-x-0 bottom-0 h-[7%] bg-black" />
    </>
  )
}

function Animation3D() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(110% 70% at 50% 30%, #1d2b5e 0%, #10132b 55%, #08090d 100%)' }} />
      <div className="absolute bottom-[14%] left-[14%] h-[4%] w-[42%] rounded-[50%] bg-black/60 blur-md" />
      <div className="absolute bottom-[30%] right-[10%] h-[4%] w-[30%] rounded-[50%] bg-black/60 blur-md" />
      <div
        className="animate-float absolute left-[12%] top-[20%] aspect-square w-[40%] rounded-full"
        style={{ background: 'radial-gradient(circle at 34% 28%, #fff 0%, #ddd6fe 10%, #8B5CF6 42%, #3b1a7a 76%, #160b33 100%)', boxShadow: '0 20px 60px -10px rgba(139,92,246,.7)' }}
      />
      <div
        className="animate-float-slow absolute right-[12%] top-[40%] aspect-square w-[28%] rounded-[24%]"
        style={{
          transform: 'rotate(18deg)',
          background: 'linear-gradient(140deg,#e0f2fe 0%,#7dd3fc 18%,#38BDF8 45%,#1d4ed8 100%)',
          boxShadow: 'inset -10px -14px 24px rgba(15,23,42,.45), inset 8px 8px 18px rgba(255,255,255,.4), 0 18px 50px -10px rgba(56,189,248,.6)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="animate-float absolute bottom-[16%] left-[46%] aspect-square w-[34%]"
        style={{ animationDelay: '-1.5s' }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            transform: 'rotateX(62deg) rotate(20deg)',
            background: 'radial-gradient(circle, transparent 36%, #f0abfc 39%, #c084fc 50%, #7c3aed 60%, transparent 63%)',
            filter: 'drop-shadow(0 10px 20px rgba(192,132,252,.5))',
          }}
        />
      </div>
      {[[70, 16, 9], [22, 66, 6], [84, 70, 5]].map(([x, y, s]) => (
        <span
          key={`${x}-${y}`}
          className="animate-float absolute aspect-square rounded-full"
          style={{ left: `${x}%`, top: `${y}%`, width: `${s}%`, background: 'radial-gradient(circle at 35% 30%, #fff, #a5f3fc 30%, #38BDF8 70%)', animationDelay: `-${x / 20}s` }}
        />
      ))}
    </>
  )
}

function Product() {
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(80% 60% at 50% 38%, #2b1a52 0%, #0d0b18 62%, #060609 100%)' }} />
      <div
        className="animate-beam absolute left-1/2 top-0 h-[74%] w-[92%] -translate-x-1/2 blur-[6px]"
        style={{ clipPath: 'polygon(43% 0,57% 0,100% 100%,0 100%)', background: 'linear-gradient(to bottom, rgba(221,214,254,.45), rgba(139,92,246,.08) 75%, transparent)' }}
      />
      <div className="animate-pulse-soft absolute left-1/2 top-[38%] aspect-square w-[46%] -translate-x-1/2 rounded-full bg-brand-purple/40 blur-2xl" />
      {/* pedestal */}
      <div className="absolute left-1/2 top-[72%] h-[16%] w-[60%] -translate-x-1/2" style={{ background: 'linear-gradient(90deg,#141026,#3a2f63 50%,#141026)' }} />
      <div className="absolute left-1/2 top-[68.5%] h-[7%] w-[60%] -translate-x-1/2 rounded-[50%]" style={{ background: 'radial-gradient(ellipse at 50% 40%, #6d5bb0, #2a2150 70%)', boxShadow: '0 0 30px rgba(139,92,246,.45)' }} />
      {/* bottle */}
      <div className="absolute left-1/2 top-[30%] h-[42%] w-[22%] -translate-x-1/2">
        <div className="absolute left-1/2 top-0 h-[16%] w-[52%] -translate-x-1/2 rounded-t-md" style={{ background: 'linear-gradient(90deg,#9ca3af,#f3f4f6 45%,#6b7280)' }} />
        <div
          className="absolute inset-x-0 bottom-0 top-[14%] overflow-hidden rounded-b-[18%] rounded-t-[30%] border border-white/30"
          style={{ background: 'linear-gradient(90deg, rgba(56,189,248,.25), rgba(255,255,255,.45) 28%, rgba(139,92,246,.3) 70%, rgba(56,189,248,.2))' }}
        >
          <div className="absolute inset-x-0 bottom-0 h-[62%]" style={{ background: 'linear-gradient(180deg, rgba(167,139,250,.75), rgba(91,33,182,.95))' }} />
          <div className="absolute bottom-[8%] left-[16%] top-[8%] w-[10%] rounded-full bg-white/50 blur-[1px]" />
        </div>
      </div>
      <div className="absolute left-1/2 top-[86%] h-[6%] w-[40%] -translate-x-1/2 rounded-[50%] bg-brand-purple/30 blur-lg" />
    </>
  )
}

function Business() {
  const uid = useId().replace(/:/g, '')
  const bars = [46, 72, 56, 92, 64, 80, 42, 60]
  return (
    <>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#060a1c 0%,#102055 42%,#3b2a85 72%,#7c3aed 100%)' }} />
      <div className="animate-pulse-soft absolute bottom-[20%] left-1/2 h-[40%] w-[90%] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl" />
      <svg className="absolute inset-x-[6%] top-[12%] h-[38%] w-[88%] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`l${uid}`} x1="0" x2="1">
            <stop offset="0" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id={`f${uid}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(56,189,248,.35)" />
            <stop offset="1" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>
        <polygon points="0,90 20,70 38,76 58,46 76,52 100,12 100,100 0,100" fill={`url(#f${uid})`} />
        <polyline points="0,90 20,70 38,76 58,46 76,52 100,12" fill="none" stroke={`url(#l${uid})`} strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex h-[55%] items-end gap-[2.5%] px-[4%]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[3px]"
            style={{
              height: `${h}%`,
              background: '#080b1a',
              backgroundImage: 'radial-gradient(rgba(253,224,71,.75) 1px, transparent 1.6px)',
              backgroundSize: '7px 9px',
              backgroundPosition: `${i * 2}px 4px`,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)',
            }}
          />
        ))}
      </div>
    </>
  )
}

const THEMES = {
  commercial: Commercial,
  cinematic: Cinematic,
  animation: Animation3D,
  product: Product,
  business: Business,
}

export default function PosterArt({ theme = 'commercial', hue = 0, className = '' }) {
  const Scene = THEMES[theme] ?? Commercial
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={hue ? { filter: `hue-rotate(${hue}deg)` } : undefined} aria-hidden="true">
      <Scene />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(0,0,0,.55) 100%)' }} />
    </div>
  )
}
