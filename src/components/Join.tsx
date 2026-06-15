import FadeUp from './FadeUp'

export default function Join() {
  return (
    <section id="join" style={{ textAlign: 'center', padding: '120px max(3vw,48px)', maxWidth: 'none', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(28,74,46,0.25) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <FadeUp><div className="sec-label" style={{ justifyContent: 'center' }}>加入山野</div></FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, letterSpacing: '0.1em', color: 'var(--text)', lineHeight: 1.1, marginBottom: 24, position: 'relative' }}>
          认真对待<br/><em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>这具身体</em>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 420, margin: '0 auto 52px', lineHeight: 1.9, position: 'relative' }}>
          山野运动小程序现已开放。落跑计划、印记收藏、商学院课程、莫沃斯峰会——从任何一扇门进来，都会通往同一片山野。
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 13, letterSpacing: '0.14em', color: 'var(--gold)', opacity: 0.7, position: 'relative' }}>莫干山 · 2026</div>
      </FadeUp>
    </section>
  )
}
