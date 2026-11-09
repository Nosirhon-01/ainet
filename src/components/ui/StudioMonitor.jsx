import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, Wand } from 'lucide-react'
import PosterArt from './PosterArt.jsx'

const SCENES = [
  { theme: 'cinematic', prompt: 'Quyosh botishi, tog‘lar, kinematik kadr, 24 fps…', file: 'cinematic_scene.mp4' },
  { theme: 'product', prompt: 'Atir flakoni, studiya yorug‘i, premium reklama…', file: 'product_ad.mp4' },
  { theme: 'animation', prompt: '3D shakllar, yumshoq yorug‘lik, multfilm uslubi…', file: '3d_animation.mp4' },
  { theme: 'business', prompt: 'Tungi shahar, o‘sish grafigi, biznes promo…', file: 'business_promo.mp4' },
]

const TYPE_MS = 38
const HOLD_MS = 2600

function Timecode() {
  const ref = useRef(null)
  useEffect(() => {
    let raf
    const t0 = performance.now()
    let last = -1
    const pad = (n) => String(n).padStart(2, '0')
    const tick = (now) => {
      const totalFrames = Math.floor(((now - t0) / 1000) * 24)
      if (totalFrames !== last && ref.current) {
        last = totalFrames
        const f = totalFrames % 24
        const s = Math.floor(totalFrames / 24)
        ref.current.textContent = `00:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return <span ref={ref} className="tabular-nums">00:00:00:00</span>
}

export default function StudioMonitor() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const scene = SCENES[index]

  useEffect(() => {
    let i = 0
    let timer
    setTyped('')
    const type = () => {
      i++
      setTyped(scene.prompt.slice(0, i))
      if (i < scene.prompt.length) timer = setTimeout(type, TYPE_MS)
      else timer = setTimeout(() => setIndex((v) => (v + 1) % SCENES.length), HOLD_MS)
    }
    timer = setTimeout(type, 300)
    return () => clearTimeout(timer)
  }, [index, scene.prompt])

  const progress = Math.round((typed.length / scene.prompt.length) * 100)

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-purple/30 via-transparent to-brand-blue/25 blur-3xl" />

      <div className="glass border-orbit overflow-hidden rounded-[28px] p-2.5 shadow-2xl shadow-black/50">
        {/* window bar */}
        <div className="flex items-center justify-between px-3 pb-2.5 pt-1">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="truncate px-2 font-mono text-[11px] text-white/45">ainet_studio / {scene.file}</span>
          <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
        </div>

        {/* viewport */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-black">
          <AnimatePresence mode="sync">
            <motion.div
              key={scene.theme}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <PosterArt theme={scene.theme} />
            </motion.div>
          </AnimatePresence>

          {/* HUD */}
          <div className="pointer-events-none absolute inset-0 p-4 font-mono text-[10.5px] uppercase tracking-wider text-white/85">
            <div className="flex items-start justify-between">
              <span className="flex items-center gap-1.5 rounded-md bg-black/40 px-2 py-1 backdrop-blur">
                <span className="animate-blink h-2 w-2 rounded-full bg-red-500" /> REC
              </span>
              <span className="rounded-md bg-black/40 px-2 py-1 backdrop-blur">
                <Timecode />
              </span>
            </div>
            {/* corner brackets */}
            {['left-3 top-12 border-l border-t', 'right-3 top-12 border-r border-t', 'left-3 bottom-3 border-b border-l', 'right-3 bottom-3 border-b border-r'].map((c) => (
              <span key={c} className={`absolute h-5 w-5 border-white/60 ${c}`} />
            ))}
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-0 h-full w-px bg-white/40" />
              <span className="absolute left-0 top-1/2 h-px w-full bg-white/40" />
            </span>
          </div>
        </div>

        {/* prompt bar */}
        <div className="mt-2.5 rounded-2xl border border-white/10 bg-black/40 p-3.5">
          <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/40">
            <Wand className="h-3.5 w-3.5 text-brand-purple" /> AI Prompt
          </div>
          <p className="mt-2 min-h-[2.75rem] text-[13.5px] leading-snug text-white/85">
            {typed}
            <span className="animate-blink ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-brand-blue" />
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-blue transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-24 text-right font-mono text-[10.5px] text-white/55">
              {progress < 100 ? `Generatsiya ${progress}%` : 'Tayyor ✓'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
