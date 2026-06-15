import FadeUp from './FadeUp'

const courses = [
  {
    series: '初识系列 · 深林绿',
    name: '野外急救\n初识定向越野\n山野饮食营养学',
    desc: '建立山野运动的基础认知，每次不超过 20 人小班，完成后足迹积分 +20。',
    borderLeft: false,
  },
  {
    series: '教学系列 · 琥珀',
    name: '运动训练计划设计\n路线规划与风险\n急救实操认证',
    desc: '从学习者走向教授者，需持有初识系列证书。理论与莫干山实地实操双认证。',
    borderLeft: true,
  },
  {
    series: '高阶系列 · 海蓝',
    name: '越野赛事组织\n运动心理学\n山野领队认证',
    desc: '需足迹山岭行者（Lv.3）解锁。完成后可申请担任助理领队，开放裁判认证通道。',
    borderLeft: true,
  },
]

const levels = [
  { ico: '📖', lv: 'Lv.1', name: '山野学徒', pts: '0 学分起' },
  { ico: '🎓', lv: 'Lv.2', name: '山野修者', pts: '80 学分' },
  { ico: '🏅', lv: 'Lv.3', name: '山野向导', pts: '200 学分' },
  { ico: '⭐', lv: 'Lv.4', name: '山野导师', pts: '400 学分' },
]

export default function Academy() {
  return (
    <section id="academy">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(60px,6vw,120px)', alignItems: 'end', marginBottom: 80 }}>
        <div>
          <FadeUp><div className="sec-label">山野梦想家</div></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(60px,7.2vw,100px)', fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.06, color: 'var(--text)', marginTop: 24 }}>
              山野<br/>梦想家
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontSize: 'clamp(13px,1.3vw,16px)', color: 'rgba(201,168,76,0.55)', letterSpacing: '0.18em', marginTop: 20, fontWeight: 300 }}>知识体系，在山里生根</p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div>
            <p style={{ fontSize: 'clamp(15px,1.55vw,18px)', color: 'var(--muted)', lineHeight: 2.05, marginBottom: 40 }}>
              山野梦想家是平台的知识主轴，线下小班制课程以莫干山为永久教学场地，课堂讲授与户外实操并行，每门课程都对应一枚可收藏的山野印记。
            </p>
            <div style={{ display: 'flex', gap: 48, borderTop: '1px solid var(--line)', paddingTop: 28 }}>
              {[{ n: '3', l: '课程系列' }, { n: '4', l: '知学等级' }, { n: '20', l: '人小班制' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <div className="academy-courses" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginBottom: 60 }}>
          {courses.map(c => (
            <div key={c.series} style={{ background: 'var(--bg)', padding: '36px 28px', borderLeft: c.borderLeft ? '1px solid var(--line)' : undefined }}>
              <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, opacity: 0.7 }}>{c.series}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--text)', letterSpacing: '0.04em', marginBottom: 12, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{c.name}</div>
              <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.85 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <div style={{ marginTop: 60 }}>
        <FadeUp><div className="sec-label">山野知学等级</div></FadeUp>
        <FadeUp delay={0.1}>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.85, maxWidth: 480, marginBottom: 0 }}>
            通过学分积累逐级晋升。山野导师可被推荐为莫沃斯峰会讲者，是知识体系的最高荣誉。
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="levels-track" style={{ display: 'flex', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', marginTop: 48 }}>
            {levels.map(l => (
              <div key={l.lv} style={{ flex: 1, padding: '32px 20px', background: 'var(--bg)', textAlign: 'center', transition: 'background 0.3s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(28,74,46,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
              >
                <div style={{ fontSize: 24, marginBottom: 12 }}>{l.ico}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--gold)', opacity: 0.6, marginBottom: 6 }}>{l.lv}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontWeight: 400, color: 'var(--text)', letterSpacing: '0.06em', marginBottom: 6 }}>{l.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{l.pts}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
