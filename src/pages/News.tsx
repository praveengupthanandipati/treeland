import NewsCard from '../components/NewsCard'
import { NEWS } from '../data/news'

const News = () => {
  const [featured, ...rest] = NEWS

  return (
    <section className="news-section news-section--page" aria-labelledby="news-page-title">
      <div className="site-container">
        <header className="section-head">
          <div className="section-head__text">
            <span className="section-eyebrow">News &amp; Updates</span>
            <h1 id="news-page-title" className="section-title">
              Latest from <span className="section-title__highlight">Treeland</span>
            </h1>
            <p className="section-lead">Announcements, launches, offers and progress updates from our projects.</p>
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

export default News
