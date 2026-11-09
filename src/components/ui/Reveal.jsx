import { motion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div', ...rest }) {
  const M = motion[as] ?? motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}
