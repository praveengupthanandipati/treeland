import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

const Projects = () => (
  <section className="projects-section projects-section--page" aria-labelledby="projects-page-title">
    <div className="site-container">
      <header className="section-head">
        <div className="section-head__text">
          <span className="section-eyebrow">Our Projects</span>
          <h1 id="projects-page-title" className="section-title">
            Explore Our <span className="section-title__highlight">Projects</span>
          </h1>
          <p className="section-lead">
            Every Treeland layout is DTCP approved with clear titles, wide roads and bank loan support.
          </p>
        </div>
      </header>

      <ul className="projects-grid" aria-label="Projects">
        {PROJECTS.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Projects
