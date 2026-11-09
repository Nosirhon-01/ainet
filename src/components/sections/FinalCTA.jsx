import { ArrowRight, Phone } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import ParticleField from '../ui/ParticleField.jsx'
import { SITE } from '../../config/site.js'

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="border-orbit relative isolate overflow-hidden rounded-[36px] bg-[#0c0d15] px-6 py-16 text-center sm:px-12 sm:py-24 lg:py-28">
            {/* background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-full h-[42rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,.55),rgba(56,189,248,.18)_55%,transparent)]" />
              <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
              <ParticleField density={0.00008} />
            </div>

            <span className="eyebrow">Keling, boshlaymiz</span>
            <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(1.85rem,5.6vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.035em]">
              Keyingi <span className="text-gradient">viral</span> videongizni birgalikda yaratamiz!
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Bizga g‘oyangizni yuboring. Uni ajoyib AI videoga aylantiramiz.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#aloqa" className="btn-primary group !px-8 !py-4 !text-base">
                Hoziroq buyurtma berish
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={SITE.phone.href} className="group flex items-center gap-3 rounded-full px-4 py-3 text-lg font-bold tracking-wide transition-colors hover:text-brand-blue">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:border-brand-blue/50">
                  <Phone className="h-4 w-4" />
                </span>
                {SITE.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
