import { Link } from 'react-router-dom'
import { NEWS } from '../data/news'
import { ArrowRightIcon } from './Icons'
import NewsCard from './NewsCard'

const NewsSection = () => {
  const [featured, ...rest] = NEWS

  return (
    <section className="news-section" aria-labelledby="news-title">
      <div className="site-container">
        <header className="section-head">
          <div className="section-head__text">
            <span className="section-eyebrow">News &amp; Updates</span>
            <h2 id="news-title" className="section-title">
              What's New at <span className="section-title__highlight">Treeland</span>
            </h2>
            <p className="section-lead">
              New launches, festive offers, site visits and construction progress from across our projects.
            </p>
          </div>

          <div className="section-head__actions">
            <Link to="/news" className="btn-hero btn-hero--outline-dark">
              View All News
              <ArrowRightIcon />
            </Link>
          </div>
        </header>

        <div className="news-layout">
          <NewsCard item={featured} variant="featured" />

          <ul className="news-list">
            {rest.map((item) => (
              <li key={item.slug}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
