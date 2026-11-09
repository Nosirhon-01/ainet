import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-[clamp(1.75rem,4.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base leading-relaxed text-white/60 sm:text-lg ${center ? 'mx-auto' : ''} max-w-2xl`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
