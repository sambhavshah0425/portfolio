import ProjectVisual from './ProjectVisuals'
import '../styles/modal.css'

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <div>
            <div className="modal-tag">{project.tag}</div>

            <h2 className="modal-title">
              {project.title}
            </h2>

            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-visual">
            <ProjectVisual svgKey={project.svgKey} />
          </div>

          <div className="modal-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn"
              >
                Live Demo ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn"
              >
                GitHub ↗
              </a>
            )}

            {project.caseStudy && (
              <a
                href={project.caseStudy}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn"
              >
                Case Study ↗
              </a>
            )}
          </div>

          {project.problem && (
            <div className="modal-section">
              <h4>Overview</h4>
              <p>{project.problem}</p>
            </div>
          )}

          <div className="modal-section">
            <h4>Key Features</h4>

            <ul className="modal-features">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}