import { forwardRef, useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, Instagram, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import PosterArt from '../ui/PosterArt.jsx'
import VideoModal from '../ui/VideoModal.jsx'
import { PORTFOLIO, CATEGORIES, CATEGORY_THEME } from '../../data/portfolio.js'
import { SITE } from '../../config/site.js'

const ALL = 'Barchasi'

const PortfolioCard = forwardRef(function PortfolioCard({ item, onOpen }, ref) {
  const videoRef = useRef(null)

  const playPreview = () => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }
  const stopPreview = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <motion.button
      ref={ref}
      layout
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-[22px] border border-white/[0.08] bg-panel text-left"
      aria-label={`${item.title} — videoni ko‘rish`}
    >
      {/* media */}
      <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]">
        {item.poster ? (
          <img src={item.poster} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        ) : (
          <PosterArt theme={CATEGORY_THEME[item.category]} hue={item.hue} />
        )}
        {item.video && (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
      <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
        <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
          {item.category}
        </span>
        {item.placeholder && (
          <span className="hidden rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/60 backdrop-blur-md sm:inline">Namuna</span>
        )}
      </div>

      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-purple group-hover:to-brand-blue group-hover:shadow-glow sm:h-16 sm:w-16">
        <Play className="ml-0.5 h-5 w-5 fill-white sm:h-6 sm:w-6" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
        <h3 className="font-display text-[13px] font-semibold leading-snug sm:text-base">{item.title}</h3>
        <span className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-white/50 transition-colors group-hover:text-brand-blue sm:text-xs">
          Ko‘rish <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </motion.button>
  )
})

export default function Portfolio() {
  const [filter, setFilter] = useState(ALL)
  const [openItem, setOpenItem] = useState(null)
  const close = useCallback(() => setOpenItem(null), [])

  const items = useMemo(() => (filter === ALL ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)), [filter])

  return (
    <section id="ishlar" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Bizning <span className="text-gradient">kreativ</span> ishlarimiz</>}
            description="Har bir video — alohida hikoya. Reklama, kino uslubi, 3D va mahsulot videolaridan namunalar."
          />

          <Reveal delay={0.1}>
            <div className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0" role="tablist" aria-label="Kategoriyalar">
              <div className="flex w-max gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
                {[ALL, ...CATEGORIES].map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={filter === c}
                    onClick={() => setFilter(c)}
                    className={`relative isolate whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                      filter === c ? 'text-white' : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    {filter === c && (
                      <motion.span
                        layoutId="portfolio-filter"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <PortfolioCard key={item.id} item={item} onOpen={setOpenItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {SITE.socials.instagram && (
          <Reveal className="mt-12 flex justify-center">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <Instagram className="h-4 w-4" />
              Barcha ishlarimiz Instagram’da
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        )}
      </div>

      <VideoModal item={openItem} onClose={close} />
    </section>
  )
}
