import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { MdOutlineEmail } from 'react-icons/md'
import '../styles/hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, particles, nodes, codeStreams, animId
    const mouse = { x: -1000, y: -1000 }

    function resize() {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
    }

    function createParticle() {
      const chars = ['0','1','{','}','(',')',';','/','<','>','=','→','λ','∫','π','Δ','∑','⟨','⟩','::','fn','if','let','var','API','GET','POST','SQL','AI','ML']
      return {
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.5 - 0.1,
        char: chars[Math.floor(Math.random() * chars.length)],
       alpha: Math.random() * 0.6 + 0.15, size: Math.random() * 10 + 8,
        life: Math.random() * 400 + 200, maxLife: 0
      }
    }

    function createNode() {
      return {
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 1.5, alpha: Math.random() * 0.4 + 0.1
      }
    }

    function createStream() {
      const snippets = [
        'const app = express();', 'await db.connect();', 'return res.json(data);',
        'model.fit(X_train, y_train)', 'docker build -t app .', 'git push origin main',
        'npm run deploy', 'SELECT * FROM users', 'import tensorflow as tf',
        'chain.invoke(prompt)', 'fetch("/api/v1/data")', 'export default App;',
        'pipeline.run()', 'llm.generate(tokens)', 'kubectl apply -f deploy.yaml'
      ]
      return {
        x: Math.random() * w * 0.8 + w * 0.1, y: h + 20,
        vy: -Math.random() * 0.6 - 0.3,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        alpha: 0,maxAlpha: Math.random() * 0.9 + 0.15,
        size: Math.random() * 4 + 9
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: 60 }, createParticle)
      particles.forEach(p => p.maxLife = p.life)
      nodes = Array.from({ length: 30 }, createNode)
      codeStreams = Array.from({ length: 8 }, createStream)
    }

    function drawNetwork() {
      ctx.lineWidth = 0.5
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            ctx.strokeStyle = `rgba(122,162,255,${(1 - dist / 180) * 0.12})`
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        const dx = mouse.x - n.x, dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) { n.vx -= dx * 0.00005; n.vy -= dy * 0.00005 }
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,201,139,${n.alpha})`; ctx.fill()
      })
    }

    function drawParticles() {
      ctx.font = '500 11px "JetBrains Mono", monospace'
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life--
        if (p.life <= 0 || p.y < -20) { Object.assign(p, createParticle()); p.y = h + 20; p.maxLife = p.life }
        const fadeIn = Math.min(1, (p.maxLife - p.life) / 60), fadeOut = Math.min(1, p.life / 60)
        ctx.fillStyle = `rgba(180,135,255,${p.alpha * fadeIn * fadeOut})`; ctx.fillText(p.char, p.x, p.y)
      })
    }

    function drawStreams() {
      codeStreams.forEach(s => {
        s.y += s.vy
        if (s.y < -30) Object.assign(s, createStream())
        s.alpha = s.maxAlpha * Math.sin((1 - s.y / h) * Math.PI)
        ctx.font = `400 ${s.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = `rgba(95,184,255,${s.alpha})`; ctx.fillText(s.text, s.x, s.y)
      })
    }

    function animate() {
      ctx.clearRect(0, 0, w, h); drawNetwork(); drawParticles(); drawStreams()
      animId = requestAnimationFrame(animate)
    }

    const onMouseMove = e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000 }
    const onResize = () => { resize(); nodes.forEach(n => { n.x = Math.random() * w; n.y = Math.random() * h }) }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)

    init(); animate()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  /* Parallax on scroll */
  useEffect(() => {
    const canvas = canvasRef.current
    const content = contentRef.current
    const onScroll = () => {
      const y = window.scrollY
      if (y < window.innerHeight) {
        if (canvas) canvas.style.transform = `translateY(${y * 0.25}px)`
        if (content) { content.style.transform = `translateY(${y * 0.18}px)`; content.style.opacity = Math.max(0, 1 - y / 600) }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
  <section className="hero" id="top">
    <canvas className="hero-canvas" ref={canvasRef}></canvas>

    <div className="hero-veil"></div>
    <div className="hero-grain"></div>

    <div className="container hero-content" ref={contentRef}>
     <div className="hero-grid">

  <div className="hero-left">

    <div className="hero-eyebrow">
      <span className="pulse"></span>
      Open to Internships & Software Engineering Opportunities · 2026
    </div>
    <div className="hero-role">
  FULL STACK DEVELOPER • AI ENGINEER
</div>

<h1>
  Turning
  <br />
  <span className="accent">Ideas</span>
  <span className="hero-small"> into</span>
  <br />
  production-ready
  <br />
  Software
</h1>

    <p className="hero-sub">
  Building modern software products with
AI, cloud and full-stack technologies.
</p>

    <motion.div
      className="hero-actions"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#work" className="hero-btn hero-btn-primary">
        View Projects →
      </a>
      <a
        href="/certificates/resume.pdf"
        download
        className="hero-btn hero-btn-ghost"
      >
        <FiDownload className="hero-btn-icon" />
        Download Resume
      </a>
    </motion.div>

    {/* Social Links */}
    <motion.div
      className="hero-socials"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {[
        { href: 'https://github.com/sambhavshah0425',   Icon: FaGithub,     label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/sambhav2504/', Icon: FaLinkedinIn, label: 'LinkedIn' },
        { href: 'mailto:mamtashah5154@gmail.com',                  Icon: MdOutlineEmail, label: 'Email' },
        
      ].map(({ href, Icon, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="hero-social-link"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon className="hero-social-icon" />
          <span>{label}</span>
        </motion.a>
      ))}
    </motion.div>

  </div>

</div>
    </div>

    <div className="hero-meta">
      <div className="hero-meta-item">
       
      </div>

      

      <div className="hero-meta-item" style={{ textAlign: 'center' }}>
       
      </div>
    </div>

    <div className="scroll-indicator">
      <span>Scroll</span>
      <div className="scroll-line"></div>
    </div>
  </section>
)
}
