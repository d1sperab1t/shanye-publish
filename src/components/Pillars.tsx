import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeUp from './FadeUp'

const pillars = [
  {
    num: '01', name: '运动',
    en: 'Movement',
    gradient: 'linear-gradient(135deg, #4a9b6f 0%, #2d7a52 100%)',
    desc: '以科学为底、以实践为径，探索身体潜能的边界。赛事训练、体能管理、运动损伤，每个议题都指向同一个问题：如何更好地使用这具身体。',
    kws: ['越野跑', '体能训练', '运动损伤', '表现优化'],
  },
  {
    num: '02', name: '山野',
    en: 'Wilderness',
    gradient: 'linear-gradient(135deg, #2d7a52 0%, #1a5c3a 100%)',
    desc: '山野是课堂，也是镜子。路线规划、定向越野、自然导读、莫干山传承人——在行走中读懂山，在山中读懂自己。',
    kws: ['路线探索', '落跑计划', '传承人', '自然叙事'],
  },
  {
    num: '03', name: '亚健康',
    en: 'Sub-Health',
    gradient: 'linear-gradient(135deg, #1a5c3a 0%, #0e3d26 100%)',
    desc: '真正的对话不从成绩开始，而从诚实开始。睡眠、压力、慢性疲劳、代谢失调——那些被忽视的信号，值得被认真讨论。',
    kws: ['睡眠管理', '压力与恢复', '慢性疲劳', '代谢健康'],
  },
]

export default function Pillars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <div ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* 背景图（视差） */}
      <motion.div style={{
        position: 'absolute', inset: '-10% 0', zIndex: 0,
        backgroundImage: 'url(/assets/p3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        filter: 'saturate(0.35) brightness(0.28)',
        y: bgY,
      }} />

      {/* 磨砂质感：噪点叠层 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ opacity: 0.18, mixBlendMode: 'overlay' }}>
          <filter id="pillars-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves={4} stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#pillars-grain)"/>
        </svg>
      </div>

      {/* 渐变遮罩：上下压暗融合，中间透气 */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: `
          linear-gradient(to bottom,
            var(--bg) 0%,
            rgba(8,16,10,0.70) 12%,
            rgba(8,16,10,0.52) 40%,
            rgba(8,16,10,0.60) 70%,
            var(--bg) 100%
          ),
          radial-gradient(ellipse 90% 60% at 50% 48%, transparent 30%, rgba(4,10,6,0.62) 100%)
        `,
      }} />

      {/* 内容 */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <section id="pillars">
          <FadeUp><div className="sec-label">核心体系</div></FadeUp>
          <FadeUp delay={0.1}><h2 className="sec-title">三大支柱</h2></FadeUp>
          <FadeUp delay={0.2}>
            <p className="sec-sub">运动、山野、亚健康，三个议题交织成一张完整的认知网络，覆盖身体管理的全维度。</p>
          </FadeUp>
        </section>

        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {pillars.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.12} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
              <div style={{
                padding: '52px 40px 56px',
                minHeight: '520px',
                display: 'flex', flexDirection: 'column',
                boxSizing: 'border-box',
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.24em', color: 'rgba(201,168,76,0.5)', marginBottom: 48 }}>{p.num}</div>

                <div style={{ marginBottom: 'auto' }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: 'clamp(48px,4.5vw,72px)',
                    fontWeight: 300, letterSpacing: '0.06em', lineHeight: 1,
                    marginBottom: 8,
                    background: p.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {p.name}
                  </div>
                  <div style={{
                    fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.45)', marginBottom: 36,
                  }}>
                    {p.en}
                  </div>

                  <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.30)', marginBottom: 32 }} />

                  <p style={{
                    fontSize: 'clamp(14px,1.3vw,16px)', color: 'rgba(245,240,232,0.60)',
                    lineHeight: 2.0, letterSpacing: '0.02em',
                  }}>{p.desc}</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 40 }}>
                  {p.kws.map(k => (
                    <span key={k} style={{
                      fontSize: 11, letterSpacing: '0.14em',
                      padding: '5px 14px', border: '1px solid var(--line)',
                      color: 'rgba(245,240,232,0.38)',
                    }}>{k}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  )
}
