import FadeUp from './FadeUp'

const pillars = [
  {
    num: '01', icon: '💪', name: '运动',
    desc: '以科学为底、以实践为径，探索身体潜能的边界。赛事训练、体能管理、运动损伤，每个议题都指向同一个问题：如何更好地使用这具身体。',
    kws: ['越野跑', '体能训练', '运动损伤', '表现优化'],
  },
  {
    num: '02', icon: '⛰️', name: '山野',
    desc: '山野是课堂，也是镜子。路线规划、定向越野、自然导读、莫干山传承人——在行走中读懂山，在山中读懂自己。',
    kws: ['路线探索', '落跑计划', '传承人', '自然叙事'],
  },
  {
    num: '03', icon: '🌿', name: '亚健康',
    desc: '真正的对话不从成绩开始，而从诚实开始。睡眠、压力、慢性疲劳、代谢失调——那些被忽视的信号，值得被认真讨论。',
    kws: ['睡眠管理', '压力与恢复', '慢性疲劳', '代谢健康'],
  },
]

export default function Pillars() {
  return (
    <>
      <section id="pillars" style={{ paddingBottom: 0 }}>
        <FadeUp><div className="sec-label">核心体系</div></FadeUp>
        <FadeUp delay={0.1}><h2 className="sec-title">三大支柱</h2></FadeUp>
        <FadeUp delay={0.2}>
          <p className="sec-sub">运动、山野、亚健康，三个议题交织成一张完整的认知网络，覆盖身体管理的全维度。</p>
        </FadeUp>
      </section>

      <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
        {pillars.map((p, i) => (
          <FadeUp key={p.num} delay={i * 0.1}>
            <div style={{
              padding: '52px 36px', position: 'relative',
              border: '1px solid var(--line)', transition: 'border-color 0.3s', height: '100%',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
            >
              <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: 36, opacity: 0.6 }}>{p.num}</div>
              <span style={{ fontSize: 32, marginBottom: 20, display: 'block' }}>{p.icon}</span>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 400, letterSpacing: '0.08em', color: 'var(--text)', marginBottom: 16 }}>{p.name}</div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 28 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.kws.map(k => (
                  <span key={k} style={{ fontSize: 10, letterSpacing: '0.1em', padding: '4px 12px', border: '1px solid var(--line)', color: 'var(--muted)' }}>{k}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </>
  )
}
