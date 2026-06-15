import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: '关于' },
    { href: '#pillars', label: '三大支柱' },
    { href: '#mowosi', label: '莫沃斯' },
    { href: '#academy', label: '商学院' },
    { href: '#ecosystem', label: '生态' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 max(3vw, 48px)', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(13,31,21,0.97)' : 'rgba(13,31,21,0.88)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--line)',
      transition: 'background 0.3s',
    }}>
      <a href="#hero" style={{
        fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 15,
        letterSpacing: '0.22em', color: 'var(--text)', textDecoration: 'none',
      }}>
        山野<span style={{ color: 'var(--gold)' }}>·</span>运动
      </a>

      <ul style={{
        display: open ? 'flex' : undefined,
        flexDirection: open ? 'column' as const : undefined,
        ...(open ? {
          position: 'fixed' as const, top: 64, left: 0, right: 0,
          background: 'rgba(13,31,21,0.97)',
          padding: '24px max(3vw,48px) 32px',
          borderBottom: '1px solid var(--line)', gap: 20,
        } : {
          display: 'flex', gap: 'clamp(24px,4vw,52px)',
        }),
        listStyle: 'none',
      }}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)} style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--muted)', textDecoration: 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{l.label}</a>
          </li>
        ))}
      </ul>

      <button onClick={() => setOpen(o => !o)} aria-label="菜单" style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4,
      }} className="nav-toggle">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: 22, height: 1, background: 'var(--text)', margin: '5px 0' }} />
        ))}
      </button>

      <style>{`
        @media (max-width: 600px) {
          nav ul { display: none !important; }
          nav ul.mobile-open { display: flex !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
