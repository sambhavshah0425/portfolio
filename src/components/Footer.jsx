import { useState, useEffect } from 'react'

export default function Footer() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    function tick() {
      const d = new Date()
      const p = n => String(n).padStart(2, '0')
      setTime(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer>
      <div className="container foot">
        <div className="brand"><span className="dot"></span>PORTFOLIO<span style={{ color: 'var(--text-mute)', fontWeight: 400 }}></span></div>
        <div className="mono">© 2026 Sambhav Shah · Full Stack Developer &amp; AI Engineer</div>
        <div className="mono">{time} · MUMBAI</div>
      </div>
    </footer>
  )
}
