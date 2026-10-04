import { Link } from 'react-router-dom'
import { formatNewsDate, type NewsItem } from '../data/news'
import { ArrowRightIcon, ArrowUpRightIcon, CalendarIcon, ClockIcon } from './Icons'

type NewsCardProps = {
  item: NewsItem
  variant?: 'featured' | 'compact'
}

const NewsCard = ({ item, variant = 'compact' }: NewsCardProps) => {
  const { slug, title, excerpt, category, date, readTime, image } = item
  const href = `/news#${slug}`
  const categoryClass = `news-tag news-tag--${category.toLowerCase()}`

  if (variant === 'featured') {
    return (
      <article id={slug} className="news-featured">
        <img className="news-featured__img" src={image} alt="" loading="lazy" />
        <div className="news-featured__overlay" aria-hidden="true" />

        <span className="news-featured__badge">Latest</span>

        <div className="news-featured__content">
          <span className={categoryClass}>{category}</span>
          <h3 className="news-featured__title">
            <Link to={href} className="news-featured__link">
              {title}
            </Link>
          </h3>
          <p className="news-featured__excerpt">{excerpt}</p>

          <div className="news-featured__footer">
            <ul className="news-meta">
              <li>
                <CalendarIcon />
                <time dateTime={date}>{formatNewsDate(date)}</time>
              </li>
              <li>
                <ClockIcon />
                {readTime}
              </li>
            </ul>
            <span className="news-featured__cta" aria-hidden="true">
              <ArrowUpRightIcon />
            </span>
          </div>
        </div>
      </article>
    )
  }

  const day = new Date(`${date}T00:00:00`)

  return (
    <article id={slug} className="news-card">
      <time className="news-card__date" dateTime={date}>
        <strong>{day.getDate()}</strong>
        {day.toLocaleDateString('en-IN', { month: 'short' })}
      </time>

      <div className="news-card__body">
        <div className="news-card__meta">
          <span className={categoryClass}>{category}</span>
          <span className="news-card__read">
            <ClockIcon />
            {readTime}
          </span>
        </div>
        <h3 className="news-card__title">
          <Link to={href} className="news-card__link">
            {title}
          </Link>
        </h3>
        <p className="news-card__excerpt">{excerpt}</p>
        <span className="news-card__more" aria-hidden="true">
          Read more
          <ArrowRightIcon />
        </span>
      </div>
    </article>
  )
}

export default NewsCard
