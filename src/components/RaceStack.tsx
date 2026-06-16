import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const races = [
  {
    img: '/assets/race/race1.jpg',
    brand: 'HOKA',
    collab: '× 莫干山山野运动',
    name: '莫干山越野邀请赛',
    dist: '30 / 50 km',
    diff: '★★★★★',
    date: '2026 · 莫干山 · 浙江德清',
    tag: '越野跑',
  },
  {
    img: '/assets/race/race2.jpg',
    brand: 'KAILAS 凯乐石',
    collab: '× 莫干山山野运动',
    name: '莫干山山脊纵走赛',
    dist: '22 km',
    diff: '★★★★',
    date: '2026 · 莫干山 · 浙江德清',
    tag: '纵走',
  },
  {
    img: '/assets/race/race3.jpg',
    brand: 'Salomon 萨洛蒙',
    collab: '× 莫干山山野运动',
    name: '莫干山冬季挑战赛',
    dist: '42 km',
    diff: '★★★★★',
    date: '2026 · 莫干山 · 浙江德清',
    tag: '冬季挑战',
  },
  {
    img: '/assets/race/race4.jpg',
    brand: '官方主办',
    collab: '山野运动 · 莫干山',
    name: '元旦山野越野赛',
    dist: '15 km',
    diff: '★★★',
    date: '2026 · 元旦 · 莫干山',
    tag: '亲子友好',
  },
]

export default function RaceStack() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((delta: number) => {
    setDir(delta)
    setActive(prev => (prev + delta + races.length) % races.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go(1), 5000)
  }, [go])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const handleNav = (delta: number) => {
    go(delta)
    resetTimer()
  }

  const r = races[active]

  return (
    <section id="race-stack" style={{ padding: 0, maxWidth: 'none', overflow: 'hidden' }}>

      {/* 全幅轮播 */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(480px,60vw,720px)' }}>

        {/* 图片层 */}
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${r.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
            }}
          >
            {/* 渐变叠层 */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(4,8,4,0.18) 0%, rgba(4,8,4,0.05) 35%, rgba(4,8,4,0.60) 65%, rgba(4,8,4,0.95) 100%)',
            }} />

            {/* 顶部品牌 */}
            <div style={{ position: 'absolute', top: 36, left: 'clamp(28px,5vw,80px)', right: 'clamp(28px,5vw,80px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span style={{ fontSize: 'clamp(18px,2.2vw,28px)', fontWeight: 600, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.95)', textTransform: 'uppercase' }}>{r.brand}</span>
                <span style={{ fontSize: 'clamp(12px,1.2vw,15px)', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.50)' }}>{r.collab}</span>
              </div>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 12, color: 'rgba(201,168,76,0.55)', letterSpacing: '0.10em' }}>
                {String(active + 1).padStart(2, '0')} / {String(races.length).padStart(2, '0')}
              </span>
            </div>

            {/* 底部信息 */}
            <div style={{ position: 'absolute', bottom: 0, left: 'clamp(28px,5vw,80px)', right: 'clamp(28px,5vw,80px)', paddingBottom: 44 }}>
              <div style={{ fontSize: 9, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.75, marginBottom: 12 }}>{r.tag}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,5vw,68px)', fontWeight: 300, color: 'var(--text)', letterSpacing: '0.04em', lineHeight: 1.12, marginBottom: 28 }}>
                {r.name}
              </div>
              <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(201,168,76,0.22)', paddingTop: 22 }}>
                {[
                  { label: '距离', value: r.dist },
                  { label: '难度', value: r.diff },
                  { label: '时间 / 地点', value: r.date },
                ].map((item, i) => (
                  <div key={i} style={{ flex: i === 2 ? 2 : 1, paddingRight: 32 }}>
                    <div style={{ fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.48)', marginBottom: 7 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: 'rgba(245,240,232,0.88)', letterSpacing: '0.05em' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 左箭头 */}
        <button
          onClick={() => handleNav(-1)}
          aria-label="上一张"
          style={{
            position: 'absolute', left: 'clamp(16px,3vw,48px)', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(13,20,15,0.55)', border: '1px solid rgba(201,168,76,0.28)',
            color: 'rgba(245,240,232,0.85)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            transition: 'background 0.25s, border-color 0.25s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.18)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.65)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(13,20,15,0.55)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.28)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 右箭头 */}
        <button
          onClick={() => handleNav(1)}
          aria-label="下一张"
          style={{
            position: 'absolute', right: 'clamp(16px,3vw,48px)', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(13,20,15,0.55)', border: '1px solid rgba(201,168,76,0.28)',
            color: 'rgba(245,240,232,0.85)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            transition: 'background 0.25s, border-color 0.25s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.18)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.65)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(13,20,15,0.55)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.28)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* 底部进度条 + 点导航 */}
      <div style={{ padding: '24px clamp(28px,5vw,80px) 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        {races.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > active ? 1 : -1); setActive(i); resetTimer() }}
            style={{
              height: 2, flex: i === active ? 3 : 1,
              border: 'none', padding: 0, cursor: 'pointer',
              background: i === active ? 'var(--gold)' : 'rgba(201,168,76,0.20)',
              transition: 'flex 0.5s ease, background 0.3s ease',
              position: 'relative', overflow: 'hidden', borderRadius: 2,
            }}
          />
        ))}
      </div>

    </section>
  )
}
