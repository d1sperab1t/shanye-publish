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

      {/* 词语解释——无框错落排版 */}
      <div style={{ position: 'relative', marginBottom: 80, paddingTop: 16 }}>

        {/* 装饰性大字背景 */}
        <div aria-hidden style={{
          position: 'absolute', top: -20, right: '6%',
          fontFamily: 'var(--serif)', fontSize: 'clamp(140px,18vw,240px)',
          fontWeight: 700, color: 'rgba(201,168,76,0.04)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.02em',
        }}>山野</div>

        {/* 行 1：山 */}
        <FadeUp delay={0.05}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(24px,3vw,56px)', marginBottom: 'clamp(36px,5vw,64px)', paddingLeft: '2%' }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px,10vw,130px)', fontWeight: 300, color: 'var(--gold)', lineHeight: 0.9, flexShrink: 0 }}>山</span>
            <div style={{ paddingBottom: 12, maxWidth: 380 }}>
              <div style={{ fontSize: 9, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.50)', marginBottom: 10 }}>Mountain</div>
              <p style={{ fontSize: 'clamp(13px,1.4vw,16px)', color: 'var(--muted)', lineHeight: 2.0, letterSpacing: '0.03em' }}>
                莫干山是永久的教学场地与精神原点，所有知识从山的现场生发。
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 行 2：野 — 右偏 */}
        <FadeUp delay={0.12}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(24px,3vw,56px)', marginBottom: 'clamp(36px,5vw,64px)', paddingLeft: '22%', justifyContent: 'flex-start' }}>
            <div style={{ paddingBottom: 14, maxWidth: 360, textAlign: 'right' }}>
              <div style={{ fontSize: 9, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.50)', marginBottom: 10 }}>Wild</div>
              <p style={{ fontSize: 'clamp(13px,1.4vw,16px)', color: 'var(--muted)', lineHeight: 2.0, letterSpacing: '0.03em' }}>
                户外是唯一的课堂，实操优先，每一堂课都在真实自然中完成。
              </p>
            </div>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px,10vw,130px)', fontWeight: 300, color: 'rgba(201,168,76,0.80)', lineHeight: 0.9, flexShrink: 0 }}>野</span>
          </div>
        </FadeUp>

        {/* 行 3：梦想 — 左，字更大 */}
        <FadeUp delay={0.18}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(20px,2.5vw,44px)', marginBottom: 'clamp(36px,5vw,64px)', paddingLeft: '6%' }}>
            <div style={{ flexShrink: 0, lineHeight: 0.88 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px,10vw,130px)', fontWeight: 300, color: 'var(--gold)', display: 'block' }}>梦</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px,10vw,130px)', fontWeight: 300, color: 'var(--gold)', display: 'block', marginTop: '-0.12em' }}>想</div>
            </div>
            <div style={{ paddingTop: 'clamp(16px,2.5vw,36px)', maxWidth: 400 }}>
              <div style={{ fontSize: 9, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.50)', marginBottom: 12 }}>Dream</div>
              <p style={{ fontSize: 'clamp(13px,1.4vw,16px)', color: 'var(--muted)', lineHeight: 2.1, letterSpacing: '0.03em' }}>
                向往狂野、渴望自由生长——山野运动的核心是那个敢于离开舒适地带、奔赴自然的内心冲动。
              </p>
            </div>
          </div>
        </FadeUp>

        {/* 行 4：家 — 极右，结尾收束 */}
        <FadeUp delay={0.24}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(24px,3vw,56px)', paddingLeft: '40%' }}>
            <div style={{ paddingBottom: 10, maxWidth: 320 }}>
              <div style={{ fontSize: 9, letterSpacing: '0.30em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.50)', marginBottom: 10 }}>Home</div>
              <p style={{ fontSize: 'clamp(13px,1.4vw,16px)', color: 'var(--muted)', lineHeight: 2.0, letterSpacing: '0.03em' }}>
                以共同价值观聚合的社群，每一位学员都是这个生态的建造者。
              </p>
            </div>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px,10vw,130px)', fontWeight: 300, color: 'rgba(201,168,76,0.65)', lineHeight: 0.9, flexShrink: 0 }}>家</span>
          </div>
        </FadeUp>

        {/* 底部分隔线 */}
        <div style={{ marginTop: 'clamp(40px,5vw,72px)', height: 1, background: 'var(--line)' }} />
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
