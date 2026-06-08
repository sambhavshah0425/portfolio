import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'
import useReveal from '../hooks/useReveal'

export default function ProjectGrid({ onOpen }) {
  useReveal()

  const delays = [0, 1, 0, 1, 2, 0]

  return (
    <section id="work">
      <div className="container">

        <div className="section-head reveal">
          <div>
            <div
              className="mono"
              style={{ marginBottom: 14 }}
            >
              — 01 / Featured Projects
            </div>

            <h2>
              Featured <span className="it">projects.</span>
            </h2>
          </div>

          <p>
            Software engineering, AI, cloud and full-stack
            projects focused on solving real-world problems.
          </p>
        </div>

        <div className="projects-timeline">

          {projects.map((p, i) => (

            <div
              key={i}
              className={`timeline-item ${
                i % 2 === 0
                  ? 'timeline-left'
                  : 'timeline-right'
              }`}
            >

              {i % 2 === 0 ? (
                <>
                  {/* LEFT CARD */}

                 <div className="timeline-side timeline-card reveal reveal-left">
                    <ProjectCard
                      project={p}
                      index={i}
                      onOpen={onOpen}
                      delay={delays[i]}
                    />
                  </div>

                  {/* RIGHT SUMMARY */}

                <div className="timeline-side timeline-summary reveal reveal-right">

                    <span className="timeline-year">
                      {p.tag}
                    </span>

                    <h3>{p.title}</h3>

                    <ul>
                      {(p.summary || p.features.slice(0, 3)).map(
                        (item, idx) => (
                          <li key={idx}>{item}</li>
                        )
                      )}
                    </ul>

                  </div>
                </>
              ) : (
                <>
                  {/* LEFT SUMMARY */}

                 <div className="timeline-side timeline-summary reveal reveal-right">

                    <span className="timeline-year">
                      {p.tag}
                    </span>

                    <h3>{p.title}</h3>

                    <ul>
                      {(p.summary || p.features.slice(0, 3)).map(
                        (item, idx) => (
                          <li key={idx}>{item}</li>
                        )
                      )}
                    </ul>

                  </div>

                  {/* RIGHT CARD */}

                 <div className="timeline-side timeline-card reveal reveal-left">
                    <ProjectCard
                      project={p}
                      index={i}
                      onOpen={onOpen}
                      delay={delays[i]}
                    />
                  </div>
                </>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}