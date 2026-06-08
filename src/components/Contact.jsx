import '../styles/contact.css'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  useReveal()

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner reveal">
          <div className="mono" style={{ marginBottom: 20, color: 'var(--accent)' }}>— 06 / Let's connect</div>
          <h2>Let's build something <span className="it">meaningful.</span></h2>
          <p>Whether it's a startup idea, AI product, cloud solution or software engineering challenge, I'd love to connect.</p>
          <div className="contact-btns">
            <a href="mailto:mamtashah5154@gmail.com" className="contact-email">Email Me <span style={{ fontSize: '1.1rem' }}>→</span></a>
            <a href="https://www.linkedin.com/in/sambhav2504/" className="btn btn-ghost" style={{ borderRadius: 100 }}>LinkedIn</a>
            <a href="https://github.com/sambhavshah0425" className="btn btn-ghost" style={{ borderRadius: 100 }}>GitHub</a>
          </div>
          <div className="contact-social">
           
          </div>
        </div>
      </div>
    </section>
  )
}
