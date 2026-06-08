import { timeline } from '../data/experience'
import '../styles/experience.css'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  useReveal()

  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 05 / Journey</div>
            <h2>Engineering <span className="it">timeline.</span></h2>
          </div>
          <p>A fresher's journey — from learning fundamentals to building production-grade full-stack and AI systems.</p>
        </div>
        <div className="timeline reveal">
          {timeline.map((t, i) => (
            <div key={i} className="tl-item">
              <div className="tl-year">{t.year}</div>
              <div className="tl-title">{t.title}</div>
              <div className="tl-sub">{t.subtitle}</div>
              <ul className="tl-list">
                {t.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
