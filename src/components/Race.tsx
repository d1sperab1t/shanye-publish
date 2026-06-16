import FadeUp from './FadeUp'
import Counter from './Counter'

const races = [
  { img: '/assets/race/race1.jpg', brand: 'HOKA', collab: '× 莫干山山野运动', name: '莫干山越野邀请赛', dist: '30 / 50 km', diff: '★★★★★', date: '2026 · 莫干山 · 浙江德清', status: '报名中', statusClass: 'open', grainId: 'rg1' },
  { img: '/assets/race/race2.jpg', brand: 'KAILAS 凯乐石', collab: '× 莫干山山野运动', name: '莫干山山脊纵走赛', dist: '22 km', diff: '★★★★', date: '2026 · 莫干山 · 浙江德清', status: '报名中', statusClass: 'open', grainId: 'rg2' },
  { img: '/assets/race/race3.jpg', brand: 'Salomon 萨洛蒙', collab: '× 莫干山山野运动', name: '莫干山冬季挑战赛', dist: '42 km', diff: '★★★★★', date: '2026 · 莫干山 · 浙江德清', status: '名额已满', statusClass: 'full', grainId: 'rg3' },
  { img: '/assets/race/race4.jpg', brand: '官方主办', collab: '山野运动 · 莫干山', name: '元旦山野越野赛', dist: '15 km', diff: '★★★', date: '2026 · 元旦 · 莫干山', status: '即将开放', statusClass: 'soon', grainId: 'rg4' },
]

const statusStyle: Record<string, React.CSSProperties> = {
  open: { color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.30)', background: 'rgba(201,168,76,0.08)' },
  full: { color: 'var(--muted)', border: '1px solid rgba(245,240,232,0.10)', background: 'rgba(245,240,232,0.04)' },
  soon: { color: 'rgba(245,240,232,0.50)', border: '1px solid var(--line)', background: 'rgba(28,74,46,0.25)' },
}

export default function Race() {
  return (
    <section id="race">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(60px,6vw,120px)', alignItems: 'end', marginBottom: 64 }}>
        <div>
          <FadeUp><div className="sec-label">莫干山赛事</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(60px,7.2vw,100px)', fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.06, color: 'var(--text)', marginTop: 24 }}>
              莫干山<br/>山野赛事
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontSize: 'clamp(13px,1.3vw,16px)', color: 'rgba(201,168,76,0.55)', letterSpacing: '0.18em', marginTop: 20, fontWeight: 300 }}>联名品牌，扎根山野</p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div>
            <p style={{ fontSize: 'clamp(15px,1.55vw,18px)', color: 'var(--muted)', lineHeight: 2.05, marginBottom: 40 }}>
              以莫干山为永久赛场，汇聚国际顶尖运动品牌与本土山野文化。每场赛事不只是竞速，更是一次身体与自然的深度对话。
            </p>
            <div style={{ display: 'flex', gap: 48, borderTop: '1px solid var(--line)', paddingTop: 28 }}>
              {[{ n: '50+', l: '品牌联名' }, { n: '5–150km', l: '公里跨度' }, { n: '2010', l: '首届举办' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'block', width: 20, height: 1, background: 'var(--gold)' }}/>
                累计参赛人员
              </div>
              <Counter
                value={156879}
                places={[100000, 10000, 1000, 100, 10, 1]}
                fontSize={52}
                padding={4}
                gap={4}
                textColor="var(--gold)"
                fontWeight={300}
                gradientFrom="var(--bg)"
                counterStyle={{ fontFamily: 'var(--serif)', letterSpacing: '0.06em' }}
              />
              <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--muted)', marginTop: 10, textTransform: 'uppercase' }}>人次 · 历届赛事总计</div>
            </div>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 0 }}>
          {races.map(r => (
            <div key={r.grainId} style={{
              overflow: 'hidden', background: `#0a0e0a url(${r.img}) center/cover`,
              position: 'relative', height: 'clamp(320px,36vw,500px)', display: 'flex', flexDirection: 'column',
              transition: 'transform 0.4s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.005)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(4,8,4,0.22) 0%, rgba(4,8,4,0.08) 25%, rgba(4,8,4,0.55) 65%, rgba(4,8,4,0.88) 100%)', zIndex: 0 }}/>
              {/* grain */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.32, mixBlendMode: 'overlay' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <filter id={r.grainId}><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves={4} stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
                  <rect width="100%" height="100%" filter={`url(#${r.grainId})`}/>
                </svg>
              </div>
              <div style={{ background: 'transparent', padding: '20px 28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.20em', color: 'rgba(255,255,255,0.95)', textTransform: 'uppercase' }}>{r.brand}</span>
                <span style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.65)' }}>{r.collab}</span>
              </div>
              <div style={{ padding: '24px 28px 36px', flex: 1, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,3vw,42px)', fontWeight: 300, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 18, lineHeight: 1.2 }}>{r.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.28)', padding: '3px 12px', borderRadius: 2 }}>{r.dist}</span>
                  <span style={{ fontSize: 11, color: 'rgba(201,168,76,0.85)', letterSpacing: '0.08em' }}>{r.diff}</span>
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', color: 'rgba(245,240,232,0.60)', textTransform: 'uppercase', marginBottom: 24 }}>{r.date}</div>
                <span style={{ display: 'inline-block', fontSize: 10, letterSpacing: '0.18em', padding: '4px 14px', textTransform: 'uppercase', ...statusStyle[r.statusClass] }}>{r.status}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
