import useReveal from '../hooks/useReveal'
import '../styles/certifications.css'

const certs = [
  {
    icon: '☁️',
    title: 'AWS Academy Graduate: Cloud Foundations',
    issuer: 'AWS Academy',
    image: '/certificates/aws.png'
  },
  {
    icon: '📊',
    title: 'GenAI Powered Data Analytics Virtual Internship',
    issuer: 'AICTE',
    image: '/certificates/GenAI.png'
  },
  {
    icon: '🤖',
    title: 'Frontend Development Virtual Internship',
    issuer: 'Qskill',
    image: '/certificates/FD.png'
  },
  {
    icon: '📱',
    title: 'Google Android Developer Virtual Internship',
    issuer: 'Google',
    image: '/certificates/image.png'
  },
  {
    icon: '💻',
    title: 'Full Stack Web Development Virtual Internship',
    issuer: 'Floydee',
    image: '/certificates/FSD.png'
  }
]

export default function Certifications() {
  useReveal()

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="mono" style={{ marginBottom: 14 }}>— 05 / Certifications</div>
            <h2>Learning <span className="it">milestones.</span></h2>
          </div>
          <p>Certifications demonstrating depth across cloud, AI, and software engineering domains.</p>
        </div>
        <div className="cert-grid reveal">
  {certs.map((c, i) => (
    <div
  key={i}
 className={`cert-card ${
  i === certs.length - 1 ? 'cert-center' : ''
}`}
>
      <div className="cert-icon">{c.icon}</div>

      <h4>{c.title}</h4>

      <p>{c.issuer}</p>

      <a
        href={c.image}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-btn"
      >
        View Certificate ↗
      </a>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
