import { Link } from 'react-router-dom'
import { formatPrice, type Project } from '../data/projects'
import { AreaIcon, ArrowUpRightIcon, MapPinIcon, ShieldCheckIcon, TagIcon } from './Icons'

type ProjectCardProps = {
  project: Project
}

const statusModifier = (status: Project['status']) => status.toLowerCase().replace(/\s+/g, '-')

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { slug, name, location, plotSize, pricePerSqYd, status, approvals, image, imagePosition } = project
  const titleId = `project-${slug}-title`

  return (
    <article id={slug} className="project-card" aria-labelledby={titleId}>
      <div className="project-card__media">
        <img
          className="project-card__img"
          src={image}
          alt={`${name} layout at ${location}`}
          loading="lazy"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <span className={`project-card__status project-card__status--${statusModifier(status)}`}>
          {status}
        </span>
        <span className="project-card__location">
          <MapPinIcon />
          {location}
        </span>
      </div>

      <div className="project-card__body">
        <h3 id={titleId} className="project-card__title">
          {name}
        </h3>

        <ul className="project-card__approvals" aria-label="Approvals">
          {approvals.map((approval) => (
            <li key={approval}>
              <ShieldCheckIcon />
              {approval} Approved
            </li>
          ))}
        </ul>

        <dl className="project-card__stats">
          <div className="project-card__stat">
            <span className="project-card__stat-icon">
              <AreaIcon />
            </span>
            <div>
              <dt>Plot Size</dt>
              <dd>
                {plotSize} <small>sq.yds</small>
              </dd>
            </div>
          </div>
          <div className="project-card__stat">
            <span className="project-card__stat-icon">
              <TagIcon />
            </span>
            <div>
              <dt>Starting at</dt>
              <dd className="project-card__price">
                {formatPrice(pricePerSqYd)} <small>/ sq.yd</small>
              </dd>
            </div>
          </div>
        </dl>

        <Link to={`/projects#${slug}`} className="project-card__cta" aria-label={`View details of ${name}`}>
          View Details
          <span className="project-card__cta-icon">
            <ArrowUpRightIcon />
          </span>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
