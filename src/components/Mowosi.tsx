import FadeUp from './FadeUp'

const summitStats = [
  { label: '地点', value: '莫干山' },
  { label: '规模', value: '约 200 人' },
  { label: '2025 首届', value: '敬请期待' },
  { label: '性质', value: '沉浸式' },
]

const formats = [
  { icon: '🎤', name: '主题演讲', desc: '顶尖运动科学家、传承人、实践者，共同解构「健康」这个词真正的含义。' },
  { icon: '⛺', name: '户外体验场', desc: '课堂知识在莫干山的山径上落地，身体是最诚实的验证者。' },
  { icon: '◯', name: '圆桌对话', desc: '小圈子、深议题。每张桌子是一个暂时脱离日常框架的思想实验场。' },
  { icon: '✦', name: '工作坊', desc: '动手实践、现场演练。急救、路线规划、饮食调节——技能在山里才真实。' },
  { icon: '📕', name: '莫沃斯年报', desc: '每年一本，记录峰会的观点、数据与争论。思想应该留下印记。' },
  { icon: '◆', name: '社群连接', desc: '峰会结束是连接的开始。落跑计划参与者享有峰会优先报名资格。' },
]

export default function Mowosi() {
  return (
    <section id="mowosi">
      <div className="mowosi-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <FadeUp><div className="sec-label">莫沃斯峰会</div></FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px,6vw,80px)', fontWeight: 300, letterSpacing: '0.12em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 8 }}>
              莫沃斯<br/><span style={{ fontSize: '0.55em', color: 'var(--gold)', letterSpacing: '0.18em' }}>MOWOSI</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 40, borderLeft: '1px solid var(--gold)', paddingLeft: 20 }}>
              为认真对待身体的人，打造一场有深度的对话。
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="summit-info" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
              {summitStats.map(s => (
                <div key={s.label} style={{ background: 'var(--bg)', padding: '28px 24px' }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', opacity: 0.6, marginBottom: 10 }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 300, letterSpacing: '0.04em', color: 'var(--text)' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {formats.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '24px 0', borderBottom: i < formats.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', color: 'var(--text)', marginBottom: 4 }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
