import { motion } from 'framer-motion'
import TextType from './TextType'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100svh', display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden', maxWidth: 'none',
      background: 'var(--bg)', padding: 0,
    }}>
      {/* 背景图 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/assets/bg.jpg" alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: 'center 35%', display: 'block',
          filter: 'saturate(0.62) brightness(0.60)',
        }} />
      </div>

      {/* 渐变叠层 */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `
          radial-gradient(ellipse 70% 90% at 50% 50%, transparent 35%, rgba(4,12,8,0.30) 100%),
          linear-gradient(to bottom, rgba(4,10,7,0.68) 0%, rgba(4,10,7,0.12) 18%, rgba(4,10,7,0.06) 42%, rgba(10,22,14,0.22) 62%, rgba(13,31,21,0.82) 82%, rgba(13,31,21,1) 100%)
        `,
      }} />

      {/* 颗粒感 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ opacity: 0.28, mixBlendMode: 'overlay' }}>
          <filter id="grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves={4} stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)"/>
        </svg>
      </div>

      {/* 顶部角标 */}
      <div style={{
        position: 'relative', zIndex: 4,
        display: 'flex', justifyContent: 'space-between',
        padding: '80px 44px 0',
      }}>
        {['山野运动', 'Vol. 01 · 莫干山'].map((t, i) => (
          <motion.span key={i} {...fadeUp(i * 0.08)} style={{
            fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.40)',
          }}>{t}</motion.span>
        ))}
      </div>

      {/* 中心内容 */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        position: 'relative', zIndex: 4,
        padding: '0 max(4vw,48px)', marginTop: -40,
      }}>
        <motion.div {...fadeUp(0.1)} style={{
          fontSize: 10, letterSpacing: '0.30em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.75)', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span style={{ display: 'block', width: 32, height: 1, background: 'rgba(201,168,76,0.45)' }}/>
          莫干山山野运动平台
          <span style={{ display: 'block', width: 32, height: 1, background: 'rgba(201,168,76,0.45)' }}/>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(52px,7vw,112px)',
          fontWeight: 300, letterSpacing: '0.05em', lineHeight: 1.10,
          color: 'var(--text)', marginBottom: 24,
        }}>
          在竹林里<br/>找到
          <TextType
            as="em"
            text={['答案', '力量', '节奏', '自由', '边界', '山野', '梦想', '家']}
            typingSpeed={80}
            deletingSpeed={45}
            pauseDuration={1800}
            showCursor={true}
            cursorCharacter="|"
            className="hero-typewriter"
            style={{ fontStyle: 'normal', color: 'var(--gold)' }}
          />
        </motion.h1>

        <motion.p {...fadeUp(0.35)} style={{
          fontSize: 'clamp(13px,1.3vw,15px)', color: 'rgba(245,240,232,0.48)',
          fontWeight: 300, letterSpacing: '0.08em', lineHeight: 2.0, maxWidth: 380,
        }}>
          山野运动 · 山野梦想家 · 莫沃斯峰会<br/>
          三个维度，一个关于身体与自然的完整生态。
        </motion.p>
      </div>

      {/* 底部状态栏 */}
      <motion.div {...fadeUp(0.5)} style={{
        position: 'relative', zIndex: 4,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '0 44px 36px',
      }}>
        <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.32)' }}>2026</span>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.32)',
        }}>
          <div style={{
            width: 1, height: 36,
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.6))',
            animation: 'scrollPulse 2.4s ease-in-out infinite',
          }}/>
          <span>探索向下</span>
        </div>
        <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.32)' }}>浙江 · 德清</span>
      </motion.div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.45; transform: scaleY(1); }
          50%       { opacity: 1;    transform: scaleY(1.18); }
        }
      `}</style>
    </section>
  )
}
