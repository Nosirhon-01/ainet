import { Cpu, Palette, Gem, Wallet, UserCheck } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import { SITE, formatPrice } from '../../config/site.js'

const REASONS = [
  { icon: Cpu, title: 'Zamonaviy AI texnologiyalar', text: 'Eng so‘nggi video generatsiya vositalari bilan ishlaymiz.' },
  { icon: Palette, title: 'Kreativ yondashuv', text: 'Har bir video — shablon emas, alohida g‘oya va hikoya.' },
  { icon: Gem, title: 'Professional video sifati', text: 'Yorug‘lik, kompozitsiya va montajga e’tibor bilan.' },
  { icon: Wallet, title: 'Hamyonbop narxlar', text: `AI videolar atigi ${formatPrice(SITE.price)} so‘mdan boshlanadi.` },
  { icon: UserCheck, title: 'Individual yondashuv', text: 'Har bir loyiha sizning biznesingiz va maqsadingizga moslanadi.' },
]

export default function Why() {
  return (
    <section id="nega" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
              Afzalliklar
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4.25rem)] font-semibold leading-[1] tracking-[-0.035em]">
              Nega aynan <span className="text-gradient">AINET?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              Biz texnologiya va kreativlikni birlashtirib, biznesingizni ajratib turadigan videolar yaratamiz.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative mt-10 hidden h-56 lg:block">
            <div className="absolute left-10 top-4 h-40 w-40 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue opacity-60 blur-2xl" />
            <div className="animate-spin-slow absolute left-4 top-0 h-52 w-52 rounded-full border border-dashed border-white/15" />
            <div className="absolute left-[4.5rem] top-[3.5rem] grid h-24 w-24 place-items-center rounded-3xl border border-white/15 bg-ink/60 backdrop-blur-xl">
              <span className="font-display text-xl font-semibold tracking-wider">AI</span>
            </div>
          </Reveal>
        </div>

        <ul className="border-t border-white/[0.08]">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.06}>
              <div className="group relative isolate flex items-center gap-5 overflow-hidden border-b border-white/[0.08] py-7 sm:gap-8 sm:py-9">
                <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-brand-purple/15 via-brand-blue/5 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />
                <span className="w-8 shrink-0 font-display text-sm text-white/30 transition-colors group-hover:text-brand-blue sm:w-10">
                  0{i + 1}
                </span>
                <div className="min-w-0 flex-1 transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50 sm:text-[15px]">{r.text}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-purple group-hover:to-brand-blue sm:h-14 sm:w-14">
                  <r.icon className="h-5 w-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
