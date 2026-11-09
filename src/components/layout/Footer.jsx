import { Phone, Instagram, Send, ArrowUp } from 'lucide-react'
import Logo from '../ui/Logo.jsx'
import { NAV_LINKS, SITE } from '../../config/site.js'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Sun’iy intellekt yordamida reklama, cinematic, 3D va Reels videolar yaratish studiyasi.
            </p>
            <p className="mt-5 font-display text-sm font-medium text-gradient">{SITE.slogan}</p>
          </div>

          <nav aria-label="Footer menyu">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Bo‘limlar</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">Aloqa</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={SITE.phone.href} className="flex items-center gap-2 font-semibold text-white/80 transition-colors hover:text-brand-blue">
                  <Phone className="h-4 w-4" /> {SITE.phone.display}
                </a>
              </li>
              <li>
                {SITE.socials.instagram ? (
                  <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-white/35"><Instagram className="h-4 w-4" /> Instagram — tez orada</span>
                )}
              </li>
              <li>
                {SITE.socials.telegram ? (
                  <a href={SITE.socials.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">
                    <Send className="h-4 w-4" /> Telegram
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-white/35"><Send className="h-4 w-4" /> Telegram — tez orada</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="pointer-events-none mt-16 select-none" aria-hidden="true">
          <p className="bg-gradient-to-b from-white/[0.12] to-transparent bg-clip-text text-center font-display text-[22vw] font-semibold leading-[0.8] tracking-[-0.04em] text-transparent lg:text-[17rem]">
            AINET
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-7 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} AINET — AI VIDEO CREATION</p>
          <a href="#top" className="flex items-center gap-1.5 transition-colors hover:text-white">
            Yuqoriga <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
