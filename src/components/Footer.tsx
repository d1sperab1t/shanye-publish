export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '40px max(3vw,48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 13, letterSpacing: '0.2em', color: 'var(--muted)' }}>山野运动 · 莫干山</div>
      <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.25)', letterSpacing: '0.08em' }}>© 2026 山野运动 · 莫沃斯峰会 · 山野梦想家</div>
    </footer>
  )
}
