import { Clapperboard, Package, Film, Box, Smartphone, Store } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

const SERVICES = [
  {
    icon: Clapperboard,
    title: 'AI Commercial Videos',
    text: 'Brendingiz uchun e’tiborni tortadigan va sotuvga yo‘naltirilgan AI reklama roliklari.',
    tags: ['Reklama', 'Brending', 'Storytelling'],
    span: 'lg:col-span-2',
    decor: 'timeline',
  },
  {
    icon: Package,
    title: 'Product Advertisement',
    text: 'Mahsulotingizni eng yaxshi rakursda ko‘rsatadigan kreativ va premium vizuallar.',
    tags: ['E-commerce', 'Mahsulot'],
  },
  {
    icon: Film,
    title: 'Cinematic AI Videos',
    text: 'Kino darajasidagi kadrlar, yorug‘lik va atmosfera — katta suratga olish jarayonisiz.',
    tags: ['Kino uslubi', 'Atmosfera'],
  },
  {
    icon: Box,
    title: '3D Animation',
    text: 'Qahramonlar, mahsulotlar va g‘oyalar uchun jonli, rang-barang 3D animatsion videolar.',
    tags: ['3D qahramonlar', 'Multfilm uslubi', 'Motion'],
    span: 'lg:col-span-2',
    decor: 'shapes',
  },
  {
    icon: Smartphone,
    title: 'Social Media Reels',
    text: 'Instagram Reels va TikTok uchun vertikal, dinamik va trendga mos qisqa videolar.',
    tags: ['Reels', 'TikTok', '9:16'],
  },
  {
    icon: Store,
    title: 'Business Promotion',
    text: 'Restoran, do‘kon, kafe va kompaniyalar uchun ishonch uyg‘otadigan reklama roliklari.',
    tags: ['Restoran', 'Do‘kon', 'Kompaniya'],
    span: 'lg:col-span-2',
    decor: 'bars',
  },
]

function Decor({ type }) {
  if (type === 'timeline') {
    return (
      <div className="pointer-events-none absolute right-8 top-1/2 hidden w-[40%] -translate-y-1/2 flex-col gap-2 opacity-70 sm:flex" aria-hidden="true">
        {[[0, 62, 'from-brand-purple to-fuchsia-400'], [18, 50, 'from-brand-blue to-cyan-300'], [8, 72, 'from-violet-400 to-brand-blue']].map(([l, w, g], i) => (
          <div key={i} className="relative h-6 rounded-md bg-white/[0.04]">
            <div className={`absolute inset-y-1 rounded bg-gradient-to-r ${g} opacity-80 transition-all duration-700 group-hover:opacity-100`} style={{ left: `${l}%`, width: `${w}%` }} />
          </div>
        ))}
        <div className="relative mt-1 h-px bg-white/10">
          <span className="absolute -top-2 left-[38%] h-5 w-px bg-brand-blue transition-all duration-1000 group-hover:left-[78%]" />
        </div>
      </div>
    )
  }
  if (type === 'shapes') {
    return (
      <div className="pointer-events-none absolute right-8 top-1/2 hidden h-28 w-44 -translate-y-1/2 sm:block" aria-hidden="true">
        <span className="animate-float absolute left-0 top-2 h-20 w-20 rounded-full" style={{ background: 'radial-gradient(circle at 34% 28%, #fff, #c4b5fd 15%, #8B5CF6 50%, #2e1065)' }} />
        <span className="animate-float-slow absolute right-2 top-6 h-14 w-14 rotate-12 rounded-2xl transition-transform duration-700 group-hover:rotate-45" style={{ background: 'linear-gradient(140deg,#e0f2fe,#38BDF8 45%,#1d4ed8)' }} />
      </div>
    )
  }
  if (type === 'bars') {
    return (
      <div className="pointer-events-none absolute bottom-6 right-6 hidden h-24 items-end gap-2 sm:flex" aria-hidden="true">
        {[34, 52, 44, 70, 60, 92].map((h, i) => (
          <span
            key={i}
            className="w-4 origin-bottom rounded-t bg-gradient-to-t from-brand-purple/40 to-brand-blue/80 transition-transform duration-700 group-hover:scale-y-110"
            style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    )
  }
  return null
}

function ServiceCard({ s, i }) {
  const Icon = s.icon
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <Reveal delay={(i % 3) * 0.08} className={s.span ?? ''}>
      <article
        onMouseMove={onMove}
        className="spotlight group relative h-full min-h-[15rem] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
      >
        <Decor type={s.decor} />
        <div className="relative flex h-full flex-col">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-purple/25 to-brand-blue/10 transition-all duration-500 group-hover:from-brand-purple group-hover:to-brand-blue group-hover:shadow-glow">
            <Icon className="h-5 w-5 text-white" />
          </span>
          <span className="absolute right-0 top-0 font-display text-sm text-white/20">0{i + 1}</span>
          <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
          <p className={`mt-3 text-[15px] leading-relaxed text-white/55 ${s.decor ? 'sm:max-w-[52%]' : ''}`}>{s.text}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {s.tags.map((t) => (
              <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/55">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="xizmatlar" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-96 w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-brand-purple/10 blur-[120px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Xizmatlar"
          align="center"
          title={<>Sizning biznesingiz uchun <span className="text-gradient">cheksiz imkoniyatlar</span></>}
          description="G‘oyadan tayyor videogacha — har bir format va har bir platforma uchun AI yechimlar."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
