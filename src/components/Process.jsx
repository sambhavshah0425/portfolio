import useReveal from '../hooks/useReveal'

export default function Process() {
  useReveal()
  const steps = [
    { title: 'Research', desc: 'Understand problem, users and technical constraints. Define requirements and success metrics.' },
    { title: 'Architecture', desc: 'Plan scalable system design, choose the right technology stack and map data flows.' },
    { title: 'Development', desc: 'Build, test and iterate with clean engineering practices. Write maintainable, well-documented code.' },
    { title: 'Deployment', desc: 'Launch, monitor and continuously improve. Set up CI/CD, logging and performance tracking.' }
  ]

  return (
    <section id="process" style={{ background: '#06070a' }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 08 / Process</div>
            <h2>How I <span className="it">build.</span></h2>
          </div>
          <p>A systematic, iterative approach — from understanding the problem to shipping production-ready solutions.</p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className={`step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
