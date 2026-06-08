import '../styles/about.css'
import useReveal from '../hooks/useReveal'
import profileImg from '../assets/profile.jpg'

export default function About() {
useReveal()

const focus = [
'Generative AI',
'Full Stack Dev',
'Cloud Infrastructure',
'Data Engineering',
'System Design'
]

const stats = [
{ num: '5+', lbl: 'Projects Built' },
{ num: '15+', lbl: 'Explored Different AI Platforms' },
{ num: '10+', lbl: 'Tech Stack Tools' },
{ num: '2027', lbl: 'Btech- Information Technology' }
]

return (
<section
id="about"
style={{
background:
'linear-gradient(180deg,#07080b 0%,#0a0c12 100%)'
}}
> <div className="container about">


    <div className="about-text reveal">

      <div
        className="mono"
        style={{ marginBottom: 18 }}
      >
        — 02 / About
      </div>

      <h2>
        Building Websites that scales,
        <span className="it"> learns </span>
        and creates impact.
      </h2>

      <p>
        Myself Sambhav Shah, a Information Technology
        student at Shah & Anchor Kutchhi Engineering College, focused on Full Stack Development,
        Artificial Intelligence and Cloud Systems.
      </p>

      <p>
       From intelligent systems to scalable web platforms, I enjoy building software that delivers both technical excellence and real-world impact.
      </p>

      <div className="about-focus">
        <h4>Current Focus</h4>

        <div className="focus-tags">
          {focus.map((f) => (
            <span
              key={f}
              className="focus-tag"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="num">
              {s.num}
            </div>

            <div className="lbl">
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

    </div>

    <div className="about-visual reveal reveal-delay-1">

      <div className="about-photo-wrapper">

        <img
          src={profileImg}
          alt="Sambhav Shah"
          className="about-photo"
        />

        <div className="photo-overlay">

          <div className="photo-name">
            Sambhav Shah
          </div>

          <div className="photo-role">
            Full Stack • AI • Cloud
          </div>

        </div>

      </div>

    </div>

  </div>
</section>


)
}
