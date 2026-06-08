import '../styles/github.css'
import useReveal from '../hooks/useReveal'

const languages = [
  { name: 'JavaScript', color: '#f1e05a' },
  { name: 'Python', color: '#3572A5' },
  { name: 'Java', color: '#b07219' },
  { name: 'TypeScript', color: '#2b7489' }
]

const activity = [
  { label: 'Full Stack', value: 85 },
  { label: 'AI / ML', value: 70 },
  { label: 'Cloud', value: 55 },
  { label: 'DevOps', value: 60 }
]

export default function GithubSection() {
  useReveal()

  return (
    <section id="github" style={{ background: '#06070a' }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 06 / GitHub</div>
            <h2>Open source <span className="it">activity.</span></h2>
          </div>
          <p>Consistent contributions across full-stack, AI, and cloud engineering repositories.</p>
        </div>
        <div className="github-grid reveal">
          <div className="gh-card">
            <div className="gh-num">15+</div>
            <div className="gh-lbl">Repositories</div>
          </div>
          <div className="gh-card reveal reveal-delay-1">
            <div className="gh-num">100+</div>
            <div className="gh-lbl">Total Commits</div>
          </div>
          <div className="gh-card reveal reveal-delay-2">
            <div style={{ marginBottom: 16 }}>
              <div className="gh-lbl" style={{ marginBottom: 12 }}>Languages Used</div>
              <div className="gh-lang-grid">
                {languages.map(l => (
                  <div key={l.name} className="gh-lang">
                    <div className="gh-lang-dot" style={{ background: l.color }}></div>{l.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="gh-activity reveal reveal-delay-1">
          <h4 className="mono" style={{ marginBottom: 20 }}>Activity by Category</h4>
          {activity.map(a => (
            <div key={a.label} className="activity-bar-row">
              <div className="activity-label">{a.label}</div>
              <div className="activity-bar"><div className="activity-fill" style={{ width: `${a.value}%` }}></div></div>
              <div className="activity-val">{a.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
