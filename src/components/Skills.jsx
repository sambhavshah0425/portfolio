import { skillCategories } from '../data/skills'
import '../styles/skills.css'
import useReveal from '../hooks/useReveal'

export default function Skills() {
  useReveal()

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 03 / Skills</div>
            <h2>Tech <span className="it">stack.</span></h2>
          </div>
          <p>End-to-end engineering capabilities across frontend, backend, AI/ML, cloud and DevOps.</p>
        </div>
        <div className="skills-grid reveal">
          {skillCategories.map((cat, i) => (
            <div key={i} className={`skill-cat${i > 0 ? ` reveal reveal-delay-${i}` : ''}`}>
              <div className="skill-cat-label">{cat.label}</div>
              <h4>{cat.title}</h4>
              <div className="skill-tags">
                {cat.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
