import { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function smoothScroll(e, id) {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navLinks = [
    { href: '#work',           label: 'Projects' },
    { href: '#about',          label: 'About' },
    { href: '#skills',         label: 'Skills' },
    { href: '#certifications', label: 'Certificates' },
    { href: '#contact',        label: 'Contact' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="nav">
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="dot"></span>SAMBHAV SHAH
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} onClick={e => smoothScroll(e, href)}>{label}</a>
          ))}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="nav-right">
          <a href="#contact" className="nav-cta" onClick={e => smoothScroll(e, '#contact')}>
            Let's connect →
          </a>
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href} className="mobile-link" onClick={e => smoothScroll(e, href)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="mobile-cta" onClick={e => smoothScroll(e, '#contact')}>
            Let's Connect →
          </a>
        </div>
      </div>
    </nav>
  )
}
