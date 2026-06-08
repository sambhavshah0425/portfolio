import { useRef } from 'react'
import ProjectVisual from './ProjectVisuals'

export default function ProjectCard({ project, index, onOpen, delay }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const r = cardRef.current.getBoundingClientRect()

    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5

    cardRef.current.style.transform = `
      translateY(-4px)
      perspective(900px)
      rotateX(${y * -3}deg)
      rotateY(${x * 3}deg)
    `
  }

  function handleMouseLeave() {
    cardRef.current.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      className={`work-card reveal reveal-left ${
        delay ? `reveal-delay-${delay}` : ''
      }`}
      onClick={() => onOpen(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="work-visual">
        <ProjectVisual svgKey={project.svgKey} />
      </div>

      <div className="work-overlay">
        <span className="work-tag">{project.tag}</span>

        <div className="work-info">
          <h3>{project.title}</h3>

          {project.description && (
            <p className="work-description">
              {project.description}
            </p>
          )}

          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta"
              onClick={(e) => e.stopPropagation()}
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}