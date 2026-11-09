import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X, ArrowUpRight } from 'lucide-react'
import Logo from '../ui/Logo.jsx'
import { NAV_LINKS, SITE } from '../../config/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500 sm:pl-4 ${
            scrolled ? 'glass bg-ink/60 shadow-lg shadow-black/30' : 'border border-transparent'
          }`}
          aria-label="Asosiy menyu"
        >
          <a href="#top" aria-label="AINET — bosh sahifa" className="rounded-full">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative isolate rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {l.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phone.href}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/75 transition-colors hover:text-white md:flex"
            >
              <Phone className="h-4 w-4 text-brand-blue" />
              {SITE.phone.display}
            </a>
            <a href="#aloqa" className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
              Buyurtma berish
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
              aria-label="Menyuni ochish"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menyu"
          >
            <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl" />
            <div className="container-x flex items-center justify-between pt-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04]"
                aria-label="Menyuni yopish"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="container-x mt-12 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-medium"
                  >
                    {l.label}
                    <ArrowUpRight className="h-5 w-5 text-white/30" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-auto flex flex-col gap-3 pb-10">
              <a href={SITE.phone.href} className="btn-ghost w-full">
                <Phone className="h-4 w-4 text-brand-blue" /> {SITE.phone.display}
              </a>
              <a href="#aloqa" onClick={() => setOpen(false)} className="btn-primary w-full">
                Buyurtma berish
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
