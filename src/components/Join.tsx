import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeUp from './FadeUp'

export default function Join() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section id="join" ref={sectionRef} style={{
      textAlign: 'center',
      paddingTop: 'clamp(72px,8vw,120px)', paddingBottom: 'clamp(72px,8vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* 背景图视差 */}
      <motion.div style={{
        position: 'absolute', inset: '-10% 0',
        backgroundImage: 'url(/assets/bg.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center 25%',
        filter: 'saturate(0.45) brightness(0.35)',
        y: bgY, zIndex: 0,
      }} />
      {/* 深色叠层 */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to bottom, var(--bg) 0%, rgba(13,20,15,0.30) 20%, rgba(13,20,15,0.30) 80%, var(--bg) 100%)`,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
      <FadeUp>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(48px,7vw,104px)',
          fontWeight: 300, letterSpacing: '0.06em', lineHeight: 1.08,
          color: 'var(--text)', marginBottom: 36,
        }}>
          认真对待<br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>这具身体</em>
        </h2>
      </FadeUp>

      <FadeUp delay={0.12}>
        <p style={{
          fontSize: 'clamp(14px,1.4vw,17px)', color: 'var(--muted)',
          lineHeight: 2.1, maxWidth: 540, margin: '0 auto 52px', letterSpacing: '0.03em',
        }}>
          莫干山不是一个目的地，是一种选择。选择离开舒适地带，走进竹林与山径，用身体重新丈量自己与自然的距离。山野运动平台已开放——落跑计划、知识体系、峰会对话，从任何一扇门进来，都通往同一片山野。
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <span style={{ display: 'block', width: 'clamp(32px,5vw,64px)', height: 1, background: 'rgba(201,168,76,0.28)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.50)' }}>山野运动 · 莫干山 · 浙江德清 · 2026</span>
          <span style={{ display: 'block', width: 'clamp(32px,5vw,64px)', height: 1, background: 'rgba(201,168,76,0.28)' }} />
        </div>
      </FadeUp>
      </div>
    </section>
  )
}
