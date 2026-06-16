import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
}

export default function FadeUp({ children, delay = 0, className, style, direction = 'up', duration = 0.75 }: Props) {
  const initial =
    direction === 'left'  ? { opacity: 0, x: -32, y: 0 } :
    direction === 'right' ? { opacity: 0, x:  32, y: 0 } :
    direction === 'none'  ? { opacity: 0, x: 0, y: 0 } :
                            { opacity: 0, x: 0, y: 28 }

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
