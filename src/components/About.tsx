import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import FadeUp from './FadeUp'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  // 视差：滚动时背景图缓慢上移
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  // 逐字浮现时间轴
  const charVariants: Variants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.65, delay: 0.15 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <section id="about" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 背景图（视差层） */}
      <motion.div
        ref={bgRef}
        style={{
          position: 'absolute', inset: '-12% 0',
          backgroundImage: 'url(/assets/p2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'saturate(0.55) brightness(0.45)',
          y: bgY,
          zIndex: 0,
        }}
      />
      {/* 渐变叠层 */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          linear-gradient(to bottom, var(--bg) 0%, rgba(13,20,15,0.72) 18%, rgba(13,20,15,0.55) 50%, rgba(13,20,15,0.78) 82%, var(--bg) 100%),
          radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(4,10,6,0.55) 100%)
        `,
      }} />

      {/* 内容层 */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <FadeUp><div className="sec-label">关于莫干山</div></FadeUp>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(60px,6vw,120px)', alignItems: 'end', marginBottom: 72,
        }} className="about-hero-row">

          {/* 逐字浮现标题 */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(52px,6.5vw,92px)',
              fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.10,
              color: 'var(--text)', marginTop: 24,
            }}
          >
            {[
              // [字, 颜色, 字重]
              [
                ['自', 'rgba(245,240,232,0.55)', 300],
                ['然', 'rgba(245,240,232,0.55)', 300],
                ['、', 'rgba(245,240,232,0.30)', 300],
                ['山', 'var(--gold)', 400],
                ['野', 'var(--gold)', 400],
              ],
              [
                ['有', 'var(--text)', 300],
                ['人', 'var(--text)', 300],
                ['文', 'var(--text)', 300],
                ['厚', 'var(--text)', 300],
                ['度', 'var(--text)', 300],
              ],
            ].map((line, li) => (
              <div key={li} style={{ display: 'flex' }}>
                {line.map(([ch, color, weight], ci) => {
                  const i = li * 10 + ci
                  return (
                    <motion.span
                      key={i} custom={i} variants={charVariants}
                      style={{ display: 'inline-block', color: color as string, fontWeight: weight as number }}
                    >
                      {ch}
                    </motion.span>
                  )
                })}
              </div>
            ))}
          </motion.h2>

          <FadeUp delay={0.2}>
            <p style={{
              fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--muted)',
              lineHeight: 2.05, letterSpacing: '0.02em', paddingBottom: 4,
            }}>
              莫干山不只是一个地名，它是一种生活坐标。竹林、晨雾、石径、苔绿，在这里，每一次出行都带着叩问身体与自然关系的意图。
            </p>
          </FadeUp>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px,5vw,96px)',
          borderTop: '1px solid var(--line)', paddingTop: 48,
        }}>
          {[
            '山野运动平台诞生于一群对身体认真的人的相遇。他们相信，真正的健康不只是数据，而是与自然对话的能力。莫干山以它的山径、溪流和传承人，成为了这场对话最好的场域。',
            '我们建立的不是一个工具，而是一个生态——有运动足迹的积累，有知识体系的深度，有峰会对话的广度，有传承人故事的温度。每一个参与者都在书写属于自己的山野篇章。',
          ].map((text, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p style={{
                fontSize: 'clamp(14px,1.4vw,16px)', color: 'rgba(245,240,232,0.62)',
                lineHeight: 2.0, letterSpacing: '0.02em',
              }}>{text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
