import FadeUp from './FadeUp'

const cards = [
  { arrow: '知学 → 足迹', title: '学习转化为运动积分', body: '完成「野外急救」课程获得足迹积分 +30；完成初识系列全部获得 +20。知识的投入被运动体系同步认可。' },
  { arrow: '足迹 → 知学', title: '经验成为学习入场券', body: '山岭行者（Lv.3）解锁高阶课程报名资格，荒野勇者（Lv.4）开放国家裁判认证绿色通道。' },
  { arrow: '落跑计划 → 峰会', title: '行动带来优先席位', body: '完成三次以上落跑计划的参与者，自动获得莫沃斯峰会优先报名资格。行动者应有优先话语权。' },
  { arrow: '课程 → 印记', title: '学习留下可收藏的痕迹', body: '完成每门课程获得专属山野印记，集满系列课程解锁系列纹章。学习过程有了有形的证明。' },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem">
      <FadeUp><div className="sec-label">生态联动</div></FadeUp>
      <FadeUp delay={0.1}><h2 className="sec-title">每一步<br/>都在积累</h2></FadeUp>
      <FadeUp delay={0.2}>
        <p className="sec-sub">
          足迹、知学、印记、峰会，四个体系不是孤立的模块，而是相互激活的网络。双系统最高成就者，将获得「山野领队」这一最高身份标识。
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="eco-connections" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {cards.map(c => (
            <div key={c.arrow} style={{ background: 'var(--bg)', padding: '40px 36px', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(28,74,46,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', opacity: 0.6, marginBottom: 14 }}>{c.arrow}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 12 }}>{c.title}</div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div style={{ marginTop: 2, background: 'rgba(201,168,76,0.06)', border: '1px solid var(--line)', padding: '40px 36px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ fontSize: 32 }}>🗺️</div>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: 8 }}>山野领队</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85 }}>足迹「荒野勇者 Lv.4」+ 知学「山野导师 Lv.4」双系统最高成就解锁。实战经验与教学能力的双重认证，是平台最高身份标识。</div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
