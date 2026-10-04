import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { ArrowLeftIcon, ArrowRightIcon } from './Icons'
import ProjectCard from './ProjectCard'

// Home page carousel: scroll-snap track with prev / next controls
const ProjectsSection = () => {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateControls = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateControls()
    track.addEventListener('scroll', updateControls, { passive: true })
    window.addEventListener('resize', updateControls)
    return () => {
      track.removeEventListener('scroll', updateControls)
      window.removeEventListener('resize', updateControls)
    }
  }, [updateControls])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="site-container">
        <header className="section-head">
          <div className="section-head__text">
            <span className="section-eyebrow">Our Projects</span>
            <h2 id="projects-title" className="section-title">
              Premium <span className="section-title__highlight">Open Plot</span> Communities
            </h2>
            <p className="section-lead">
              Approved, gated layouts in Hyderabad's fastest-growing corridors, ready for your future home.
            </p>
          </div>

          <div className="section-head__actions">
            <div className="carousel-nav">
              <button
                type="button"
                className="carousel-nav__btn"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous projects"
                aria-controls="projects-track"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                className="carousel-nav__btn"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Next projects"
                aria-controls="projects-track"
              >
                <ArrowRightIcon />
              </button>
            </div>
            <Link to="/projects" className="btn-hero btn-hero--outline-dark">
              View All Projects
              <ArrowRightIcon />
            </Link>
          </div>
        </header>

        <ul id="projects-track" ref={trackRef} className="projects-track" aria-label="Projects">
          {PROJECTS.map((project) => (
            <li key={project.slug} className="projects-track__item">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection
