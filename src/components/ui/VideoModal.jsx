import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Instagram, Clapperboard } from 'lucide-react'
import PosterArt from './PosterArt.jsx'
import { CATEGORY_THEME } from '../../data/portfolio.js'
import { SITE } from '../../config/site.js'

export default function VideoModal({ item, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            className="relative w-full max-w-[min(26rem,calc((100svh-6rem)*9/16))]"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Yopish"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-brand-purple/20">
              {item.video ? (
                <video
                  src={item.video}
                  poster={item.poster ?? undefined}
                  className="h-full w-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <>
                  <PosterArt theme={CATEGORY_THEME[item.category]} hue={item.hue} />
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                      <Clapperboard className="h-6 w-6 text-brand-blue" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      Bu joyga tez orada haqiqiy loyiha videosi joylanadi.
                      {SITE.socials.instagram && ' Hozircha ishlarimizni Instagram sahifamizda ko‘rishingiz mumkin.'}
                    </p>
                    {SITE.socials.instagram && (
                      <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 !py-3 !text-sm">
                        <Instagram className="h-4 w-4" /> Instagram’da ko‘rish
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
