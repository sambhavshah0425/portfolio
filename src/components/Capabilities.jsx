import { capabilities } from '../data/skills'
import useReveal from '../hooks/useReveal'

export default function Capabilities() {
  useReveal()
  const delays = [0, 1, 2, 0, 1, 2]

  return (
    <section id="capabilities" style={{ background: '#06070a' }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 04 / Capabilities</div>
            <h2>What I <span className="it">build.</span></h2>
          </div>
          <p>End-to-end software engineering — from frontend interfaces to backend systems, AI pipelines, and cloud infrastructure.</p>
        </div>
        <div className="cap-grid">
          {capabilities.map((c, i) => (
            <div key={i} className={`cap reveal${delays[i] ? ` reveal-delay-${delays[i]}` : ''}`}>
              <div>
                <div className="ic">{c.icon}</div>
                <div className="num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
