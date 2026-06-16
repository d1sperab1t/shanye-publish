import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeUp from './FadeUp'

const lines = ['唤醒身体', '重返自然', '寻找正确的生活方式']

export default function Join() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <section
      id="join"
      ref={sectionRef}
      style={{ padding: 0, maxWidth: 'none', position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
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
        background: `
          linear-gradient(to bottom,
            var(--bg) 0%,
            rgba(13,20,15,0.30) 12%,
            rgba(13,20,15,0.18) 40%,
            rgba(13,20,15,0.55) 72%,
            rgba(13,20,15,0.92) 100%
          ),
          radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(4,10,6,0.50) 100%)
        `,
      }} />

      {/* 内容 */}
      <div style={{
        position: 'relative', zIndex: 2,
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(80px,10vw,140px) clamp(28px,6vw,96px)',
      }}>

        {/* 顶部标签 */}
        <FadeUp>
          <div className="sec-label" style={{ justifyContent: 'center', marginBottom: 40 }}>来到莫干山</div>
        </FadeUp>

        {/* 主标题 */}
        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(56px,8.5vw,128px)',
            fontWeight: 300, letterSpacing: '0.06em', lineHeight: 1.05,
            color: 'var(--text)', marginBottom: 0,
          }}>
            认真对待<br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>这具身体</em>
          </h2>
        </FadeUp>

        {/* 三句话 */}
        <FadeUp delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.5vw,36px)', marginTop: 48, marginBottom: 52 }}>
            {lines.map((line, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.5vw,36px)' }}>
                <span style={{ fontSize: 'clamp(13px,1.4vw,17px)', color: 'rgba(245,240,232,0.70)', letterSpacing: '0.10em', lineHeight: 1.6 }}>
                  {line}
                </span>
                {i < lines.length - 1 && (
                  <span style={{ width: 1, height: 14, background: 'rgba(201,168,76,0.35)', display: 'inline-block', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* 正文 */}
        <FadeUp delay={0.25}>
          <p style={{
            fontSize: 'clamp(14px,1.45vw,17px)', color: 'var(--muted)',
            lineHeight: 2.1, maxWidth: 580, marginBottom: 64, letterSpacing: '0.03em',
          }}>
            莫干山不是一个目的地，是一种选择。选择离开舒适地带，走进竹林与山径，用身体重新丈量自己与自然的距离。山野运动平台已开放——落跑计划、知识体系、峰会对话，从任何一扇门进来，都通往同一片山野。
          </p>
        </FadeUp>

        {/* 分割线 */}
        <FadeUp delay={0.3}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 56 }}>
            <span style={{ display: 'block', width: 'clamp(40px,6vw,80px)', height: 1, background: 'rgba(201,168,76,0.30)' }} />
            <span style={{ fontSize: 9, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.55)' }}>山野运动 · 莫干山 · 浙江德清</span>
            <span style={{ display: 'block', width: 'clamp(40px,6vw,80px)', height: 1, background: 'rgba(201,168,76,0.30)' }} />
          </div>
        </FadeUp>

        {/* 落款大字 */}
        <FadeUp delay={0.35}>
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(11px,1.1vw,13px)',
            letterSpacing: '0.30em', textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.22)',
          }}>
            2026 · Begin Here
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
