import { Sparkle } from 'lucide-react'

const WORDS = [
  'AI reklama videolari',
  'Cinematic AI',
  '3D animatsiya',
  'Mahsulot reklamasi',
  'Instagram Reels',
  'TikTok videolar',
  'Biznes promo',
  'Realistik AI videolar',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center whitespace-nowrap px-6 font-display text-lg font-medium text-white/70 sm:px-8 sm:text-2xl">
          {w}
          <Sparkle className="ml-12 h-4 w-4 fill-brand-purple text-brand-purple sm:ml-16" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-6">
      <p className="sr-only">{WORDS.join(', ')}</p>
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  )
}
