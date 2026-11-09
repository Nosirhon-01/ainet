import { useMemo, useState } from 'react'
import { Phone, Instagram, Send, MessageSquare, Copy, Check, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { SITE } from '../../config/site.js'

const SERVICE_OPTS = ['Reklama video', 'Mahsulot reklamasi', 'Cinematic video', '3D animatsiya', 'Reels / TikTok', 'Biznes promo']
const FORMAT_OPTS = ['Vertikal 9:16', 'Gorizontal 16:9', 'Kvadrat 1:1']
const DURATION_OPTS = ['~15 soniya', '~30 soniya', '~60 soniya', 'Aniq emas']

function Chips({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-2 text-[13px] font-semibold transition-all duration-300 ${
                on
                  ? 'border-transparent bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-glow'
                  : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white'
              }`}
            >
              {o}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

function ChannelCard({ icon: Icon, label, value, href, external, note }) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-blue/15 transition-colors group-hover:from-brand-purple group-hover:to-brand-blue">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/40">{label}</span>
        <span className="mt-1 block truncate text-base font-semibold sm:text-lg">{value}</span>
        {note && <span className="mt-0.5 block text-xs text-white/40">{note}</span>}
      </span>
      {href && <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />}
    </>
  )
  const cls = 'group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 sm:p-5'
  if (!href) {
    return <div className={`${cls} opacity-60`}>{inner}</div>
  }
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${cls} hover:border-brand-purple/40 hover:bg-white/[0.05]`}
    >
      {inner}
    </a>
  )
}

export default function Contact() {
  const [service, setService] = useState(SERVICE_OPTS[0])
  const [format, setFormat] = useState(FORMAT_OPTS[0])
  const [duration, setDuration] = useState(DURATION_OPTS[1])
  const [idea, setIdea] = useState('')
  const [copied, setCopied] = useState(false)

  const message = useMemo(
    () =>
      [
        'Assalomu alaykum, AINET! AI video buyurtma qilmoqchiman.',
        `Xizmat: ${service}`,
        `Format: ${format}`,
        `Davomiylik: ${duration}`,
        idea.trim() && `G‘oya: ${idea.trim()}`,
      ]
        .filter(Boolean)
        .join('\n'),
    [service, format, duration, idea],
  )

  const smsHref = `sms:${SITE.phone.raw}?&body=${encodeURIComponent(message)}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = message
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="aloqa" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Aloqa"
            title={<>Buyurtma <span className="text-gradient">berish</span></>}
            description="Qo‘ng‘iroq qiling yoki yozing. G‘oyangizni eshitib, narx va muddatni aytamiz."
          />
          <Reveal delay={0.1} className="mt-10 space-y-3">
            <ChannelCard icon={Phone} label="Telefon" value={SITE.phone.display} href={SITE.phone.href} note="Bosing — qo‘ng‘iroq qilish" />
            <ChannelCard
              icon={Instagram}
              label="Instagram"
              value={SITE.socials.instagram ? 'Direct orqali yozing' : 'Tez orada'}
              href={SITE.socials.instagram}
              external
            />
            <ChannelCard
              icon={Send}
              label="Telegram"
              value={SITE.socials.telegram ? 'Telegram orqali yozing' : 'Tez orada'}
              href={SITE.socials.telegram}
              external
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-[28px] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-purple/25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">Tezkor buyurtma</h3>
                  <p className="text-sm text-white/50">Tanlang — xabar avtomatik tayyorlanadi.</p>
                </div>
              </div>

              <div className="mt-8 space-y-7">
                <Chips label="Xizmat turi" options={SERVICE_OPTS} value={service} onChange={setService} />
                <div className="grid gap-7 sm:grid-cols-2">
                  <Chips label="Format" options={FORMAT_OPTS} value={format} onChange={setFormat} />
                  <Chips label="Davomiylik" options={DURATION_OPTS} value={duration} onChange={setDuration} />
                </div>
                <div>
                  <label htmlFor="idea" className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    G‘oyangiz (ixtiyoriy)
                  </label>
                  <textarea
                    id="idea"
                    rows={3}
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Masalan: kafemiz uchun 30 soniyalik Reels reklama, kechki atmosfera..."
                    className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-[15px] text-white placeholder:text-white/30 focus:border-brand-purple/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/30"
                  />
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-dashed border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">Tayyor xabar</p>
                <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-white/70">{message}</pre>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href={smsHref} className="btn-primary">
                  <MessageSquare className="h-4 w-4" /> SMS orqali yuborish
                </a>
                <button type="button" onClick={copy} className="btn-ghost">
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Nusxa olindi!' : 'Matnni nusxalash'}
                </button>
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-white/40" aria-live="polite">
                {copied
                  ? 'Endi xabarni Instagram Direct’ga joylashtiring.'
                  : 'Nusxa olib, Instagram Direct’ga yuborishingiz yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qilishingiz mumkin.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
