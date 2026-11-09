import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { ArrowRight, Clock, Layers, SlidersHorizontal, Phone } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import { SITE, formatPrice } from '../../config/site.js'

const FACTORS = [
  { icon: Clock, title: 'Video davomiyligi', text: 'Qisqa Reels yoki uzunroq reklama rolik — vaqt narxga ta’sir qiladi.' },
  { icon: Layers, title: 'Murakkablik', text: 'Sahnalar soni, qahramonlar, 3D elementlar va effektlar.' },
  { icon: SlidersHorizontal, title: 'Sizning talablaringiz', text: 'Format, uslub, matn, ovoz va qo‘shimcha istaklar.' },
]

function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      ref.current.textContent = formatPrice(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = formatPrice(Math.round(v / 1000) * 1000)
      },
    })
    return () => controls.stop()
  }, [inView, value])
  return (
    <span ref={ref} className="tabular-nums">
      {formatPrice(value)}
    </span>
  )
}

export default function Pricing() {
  return (
    <section id="narx" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-panel">
            {/* bg */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-purple/30 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-[110px]" />
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

            <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-16">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
                  Narxlar
                </span>
                <h2 className="mt-5 font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                  Professional AI videolar — <span className="text-gradient">hamyonbop narxda</span>
                </h2>

                <div className="mt-10">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Boshlang‘ich narx</span>
                  <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-1">
                    <span className="font-display text-[clamp(3.4rem,11vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
                      <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                        <CountUp value={SITE.price} />
                      </span>
                    </span>
                    <span className="pb-2 font-display text-xl font-semibold sm:pb-3 sm:text-3xl">
                      <span className="text-gradient">SO‘MDAN</span>
                    </span>
                  </div>
                </div>

                <p className="mt-8 max-w-md text-base leading-relaxed text-white/60">
                  Har bir loyiha narxi video davomiyligi, murakkabligi va talablaringizga qarab belgilanadi.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#aloqa" className="btn-primary group">
                    Narxni bilish va buyurtma berish
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href={SITE.phone.href} className="btn-ghost">
                    <Phone className="h-4 w-4 text-brand-blue" /> Qo‘ng‘iroq qilish
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-white/50">Narxga nimalar ta’sir qiladi?</p>
                <ul className="mt-5 space-y-3">
                  {FACTORS.map((f, i) => (
                    <Reveal as="li" key={f.title} delay={0.1 + i * 0.08}>
                      <div className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-brand-purple/40 hover:bg-white/[0.05]">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-purple/30 to-brand-blue/15 transition-colors group-hover:from-brand-purple group-hover:to-brand-blue">
                          <f.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold">{f.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/50">{f.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
