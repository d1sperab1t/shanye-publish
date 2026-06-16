import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeUp from './FadeUp'

const formats = [
  { mark: '01', name: '主题演讲', desc: '顶尖运动科学家、传承人、实践者，共同解构「健康」这个词真正的含义。' },
  { mark: '02', name: '户外体验场', desc: '课堂知识在莫干山的山径上落地，身体是最诚实的验证者。' },
  { mark: '03', name: '圆桌对话', desc: '小圈子、深议题。每张桌子是一个暂时脱离日常框架的思想实验场。' },
  { mark: '04', name: '工作坊', desc: '动手实践、现场演练。急救、路线规划、饮食调节——技能在山里才真实。' },
  { mark: '05', name: '莫沃斯年报', desc: '每年一本，记录峰会的观点、数据与争论。思想应该留下印记。' },
  { mark: '06', name: '社群连接', desc: '峰会结束是连接的开始。落跑计划参与者享有峰会优先报名资格。' },
]

export default function Mowosi() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-4%'])

  return (
    <section id="mowosi" ref={sectionRef} style={{ padding: 0, maxWidth: 'none', position: 'relative', overflow: 'hidden' }}>

      {/* ── 顶部：全幅视差英雄区 ── */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>

        {/* 背景图（视差） */}
        <motion.div style={{
          position: 'absolute', inset: '-10% 0',
          backgroundImage: 'url(/assets/p3.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          filter: 'saturate(0.50) brightness(0.40)',
          y: bgY, zIndex: 0,
        }} />

        {/* 渐变叠层 */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `
            linear-gradient(to bottom,
              rgba(13,20,15,0.55) 0%,
              rgba(13,20,15,0.20) 25%,
              rgba(13,20,15,0.15) 50%,
              rgba(13,20,15,0.70) 78%,
              var(--bg) 100%
            )
          `,
        }} />

        {/* 顶部角标 */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', top: 80, right: 'clamp(28px,5vw,80px)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}
        >
          <span style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.60)' }}>莫干山 · 2026</span>
          <span style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)' }}>Mowosi Summit</span>
        </motion.div>

        {/* 核心文字（视差） */}
        <motion.div style={{ position: 'relative', zIndex: 2, padding: 'clamp(60px,8vw,120px) clamp(28px,5vw,80px) clamp(56px,7vw,100px)', y: textY }}>

          {/* 标题 + slogan 横排 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(40px,5vw,80px)' }}>

            <FadeUp delay={0.1}>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(72px,10vw,148px)',
                fontWeight: 300, letterSpacing: '0.06em', lineHeight: 0.92,
                color: 'var(--text)', flexShrink: 0,
              }}>
                莫沃斯<br />
                <span style={{ fontSize: '0.42em', color: 'var(--gold)', letterSpacing: '0.14em', display: 'inline-block', marginTop: '0.22em' }}>
                  MOWOSI
                </span>
              </div>
            </FadeUp>

            {/* 竖线分隔 + slogan */}
            <FadeUp delay={0.25}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(20px,2.5vw,36px)', paddingBottom: 6 }}>
                <div style={{
                  width: 1, alignSelf: 'stretch', minHeight: 80,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.55) 25%, rgba(201,168,76,0.55) 100%)',
                }} />
                <div>
                  <div style={{
                    fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.50)', marginBottom: 16,
                  }}>峰会宣言</div>
                  <p style={{
                    fontSize: 'clamp(14px,1.4vw,18px)', color: 'rgba(245,240,232,0.70)',
                    fontWeight: 300, letterSpacing: '0.08em', lineHeight: 2.0,
                    maxWidth: 300, margin: 0,
                  }}>
                    为认真对待身体的人，<br />
                    打造一场有深度的对话。
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px,1.1vw,14px)', color: 'rgba(245,240,232,0.35)',
                    letterSpacing: '0.06em', lineHeight: 1.9, marginTop: 20,
                  }}>
                    每年一届，以莫干山为场域，<br />聚合运动者、科学家与思考者。
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 峰会概览数据 */}
          <FadeUp delay={0.3}>
            <div style={{ display: 'flex', gap: 'clamp(32px,5vw,72px)', marginTop: 52, paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.20)' }}>
              {[
                { n: '约 200', u: '位参与者' },
                { n: '6', u: '种对话形式' },
                { n: '2025', u: '首届举办' },
                { n: '沉浸式', u: '峰会体验' },
              ].map(s => (
                <div key={s.u}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.u}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </motion.div>
      </div>

      {/* ── 下部：六种对话形式 ── */}
      <div style={{ padding: 'clamp(64px,8vw,120px) clamp(28px,5vw,80px)' }}>

        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, paddingBottom: 28, borderBottom: '1px solid var(--line)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 300, color: 'var(--text)', letterSpacing: '0.06em', lineHeight: 1.1 }}>
              六种对话形式
            </h3>
            <span style={{ fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.45)' }}>Summit Formats</span>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 clamp(32px,4vw,64px)' }}>
          {formats.map((f, i) => (
            <FadeUp key={i} delay={i * 0.07} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
              <div style={{ paddingBottom: 44, borderBottom: i < 3 ? '1px solid var(--line)' : 'none', marginBottom: i < 3 ? 44 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 11, color: 'rgba(201,168,76,0.40)', letterSpacing: '0.10em' }}>{f.mark}</span>
                  <span style={{ width: 20, height: 1, background: 'rgba(201,168,76,0.30)', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', color: 'var(--text)' }}>{f.name}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, letterSpacing: '0.02em' }}>{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 结尾召唤语 */}
        <div style={{ marginTop: 'clamp(80px,10vw,120px)', textAlign: 'center', position: 'relative' }}>

          {/* 装饰性极淡大字背景 */}
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(160px,22vw,320px)',
            fontWeight: 700, color: 'rgba(201,168,76,0.03)',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
            letterSpacing: '-0.02em', whiteSpace: 'nowrap',
          }}>MOWOSI</div>

          {/* 逐字进场主标题 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {[
              [{ ch: '山', gold: false }, { ch: '野', gold: false }, { ch: '之', gold: false }, { ch: '上', gold: false }],
              [{ ch: '思', gold: true  }, { ch: '想', gold: true  }, { ch: '相', gold: true  }, { ch: '遇', gold: true  }],
            ].map((line, li) => (
              <div key={li} style={{ display: 'flex', justifyContent: 'center' }}>
                {line.map(({ ch, gold }, ci) => {
                  const i = li * 4 + ci
                  return (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
                        visible: (i: number) => ({
                          opacity: 1, y: 0, filter: 'blur(0px)',
                          transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
                        }),
                      }}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(52px,7vw,108px)',
                        fontWeight: 300, letterSpacing: '0.10em', lineHeight: 1.1,
                        color: gold ? 'var(--gold)' : 'var(--text)',
                      }}
                    >
                      {ch}
                    </motion.span>
                  )
                })}
              </div>
            ))}
          </motion.div>

          {/* 落款 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              marginTop: 36, fontSize: 12,
              color: 'rgba(201,168,76,0.45)',
              letterSpacing: '0.28em', lineHeight: 2.0,
              position: 'relative', zIndex: 1,
            }}
          >
            莫沃斯峰会 · 2026 · 莫干山 · 浙江德清
          </motion.p>
        </div>
      </div>

    </section>
  )
}
