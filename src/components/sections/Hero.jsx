import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react'
import ParticleField from '../ui/ParticleField.jsx'
import StudioMonitor from '../ui/StudioMonitor.jsx'
import { EASE } from '../ui/Reveal.jsx'
import { SITE, formatPrice } from '../../config/site.js'

const LINES = [
  { text: 'IDEYANGIZNI', gradient: false },
  { text: 'KINOGA', gradient: true },
  { text: 'AYLANTIRAMIZ.', gradient: false },
]

const CHIPS = ['Commercial', 'Cinematic', '3D Animation', 'Reels & TikTok']

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 xl:min-h-[100svh] lg:pb-24 lg:pt-36">
      {/* ===== background ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg mask-fade-b absolute inset-0" />
        <div className="animate-pulse-soft absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand-purple/30 blur-[120px]" />
        <div className="animate-pulse-soft absolute -right-40 top-48 h-[30rem] w-[30rem] rounded-full bg-brand-blue/20 blur-[120px]" style={{ animationDelay: '-2.5s' }} />
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-purple/70 to-transparent" />
        <div className="absolute inset-0">
          <ParticleField />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x grid items-center gap-16 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-10">
        {/* ===== copy ===== */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
            </span>
            AI Video Production Studio
          </motion.span>

          <h1 className="mt-7 font-display text-[clamp(2rem,7.6vw,4.6rem)] xl:text-[4.1rem] font-semibold leading-[1.02] tracking-[-0.035em]">
            {LINES.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className={`block ${l.gradient ? 'text-gradient' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            Sun’iy intellekt yordamida biznesingiz uchun hayratlanarli, realistik va kreativ videolar yaratamiz.
          </motion.p>

          {/* price */}
          <motion.div
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] py-2 pl-2 pr-5 backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">AI videolar</span>
              <span className="font-display text-lg font-semibold sm:text-xl">
                <span className="text-gradient">{formatPrice(SITE.price)} SO‘MDAN</span>
              </span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
          >
            <a href="#aloqa" className="btn-primary group">
              Buyurtma berish
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#ishlar" className="btn-ghost group">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                <Play className="h-3 w-3 fill-white" />
              </span>
              Ishlarimizni ko‘rish
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {CHIPS.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-purple" />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ===== visual ===== */}
        <motion.div
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-[28rem]"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
        >
          <StudioMonitor />
        </motion.div>
      </div>

      <a
        href="#ishlar"
        aria-label="Pastga o‘tish"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35 transition-colors hover:text-white/70 xl:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
