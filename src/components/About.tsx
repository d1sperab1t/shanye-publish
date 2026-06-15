import FadeUp from './FadeUp'

export default function About() {
  return (
    <section id="about">
      <FadeUp><div className="sec-label">关于莫干山</div></FadeUp>

      <div style={{
        display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
        gap: 'clamp(60px,6vw,120px)', alignItems: 'end', marginBottom: 72,
      }} className="about-hero-row">
        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(52px,6.5vw,92px)',
            fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.10,
            color: 'var(--text)', marginTop: 24,
          }}>自然、山野<br/>有人文厚度</h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p style={{
            fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--muted)',
            lineHeight: 2.05, letterSpacing: '0.02em', paddingBottom: 4,
          }}>
            莫干山不只是一个地名，它是一种生活坐标。竹林、晨雾、石径、苔绿，在这里，每一次出行都带着叩问身体与自然关系的意图。
          </p>
        </FadeUp>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px,5vw,96px)',
        borderTop: '1px solid var(--line)', paddingTop: 48,
      }}>
        {[
          '山野运动平台诞生于一群对身体认真的人的相遇。他们相信，真正的健康不只是数据，而是与自然对话的能力。莫干山以它的山径、溪流和传承人，成为了这场对话最好的场域。',
          '我们建立的不是一个工具，而是一个生态——有运动足迹的积累，有知识体系的深度，有峰会对话的广度，有传承人故事的温度。每一个参与者都在书写属于自己的山野篇章。',
        ].map((text, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <p style={{
              fontSize: 'clamp(14px,1.4vw,16px)', color: 'rgba(245,240,232,0.62)',
              lineHeight: 2.0, letterSpacing: '0.02em',
            }}>{text}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
