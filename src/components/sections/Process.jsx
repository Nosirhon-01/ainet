import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { PhoneCall, MessageSquare, Sparkles, Download } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

const STEPS = [
  { icon: PhoneCall, title: 'Murojaat qiling', text: 'Qo‘ng‘iroq qiling yoki Instagram orqali yozing — tezda javob beramiz.' },
  { icon: MessageSquare, title: 'G‘oyangizni tushuntiring', text: 'Biznesingiz, maqsadingiz va qanday video kerakligini aytib bering.' },
  { icon: Sparkles, title: 'Biz AI yordamida videoni yaratamiz', text: 'Ssenariy, vizual uslub va AI generatsiya — hammasini o‘zimiz bajaramiz.' },
  { icon: Download, title: 'Tayyor videoni qabul qiling', text: 'Natijani ko‘rib chiqasiz va ijtimoiy tarmoqlarga joylashga tayyor videoni olasiz.' },
]

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <section id="jarayon" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Jarayon"
          title={<>Buyurtma berish <span className="text-gradient">juda oson</span></>}
          description="To‘rt oddiy qadam — va g‘oyangiz tayyor videoga aylanadi."
        />

        <div ref={ref} className="relative mt-16">
          {/* horizontal line (desktop) */}
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-white/10 lg:block" aria-hidden="true">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_0_12px_rgba(139,92,246,.8)]" />
          </div>
          {/* vertical line (mobile) */}
          <div className="absolute bottom-6 left-[27px] top-0 w-px bg-white/10 lg:hidden" aria-hidden="true">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-gradient-to-b from-brand-purple to-brand-blue" />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.1} className="relative flex gap-6 lg:block">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-panel shadow-[0_0_0_6px_#08090D]">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-blue/20" />
                  <s.icon className="relative h-5 w-5" />
                </span>
                <div className="lg:mt-8">
                  <span className="font-display text-sm font-semibold text-gradient">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/55">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
