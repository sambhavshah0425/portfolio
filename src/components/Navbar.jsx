import { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function smoothScroll(e, id) {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="dot"></span>SAMBHAV SHAH<span style={{ color: 'var(--text-mute)', fontWeight: 400 }}></span>
        </a>
        <div className="nav-links">
          <a href="#work" onClick={e => smoothScroll(e, '#work')}>Projects</a>
          <a href="#about" onClick={e => smoothScroll(e, '#about')}>About</a>
          <a href="#skills" onClick={e => smoothScroll(e, '#skills')}>Skills</a>
          <a href="#certifications" onClick={e => smoothScroll(e, '#certifications')}>Certificates</a>
          <a href="#contact" onClick={e => smoothScroll(e, '#contact')}>Contact</a>
        </div>
        <a href="#contact" className="nav-cta" onClick={e => smoothScroll(e, '#contact')}>Let's connect →</a>
      </div>
    </nav>
  )
}
