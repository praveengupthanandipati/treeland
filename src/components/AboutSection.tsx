import { Link } from 'react-router-dom'
import aboutImage from '../assets/img/homebanner.jpg'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/site'
import { ArrowRightIcon, AwardIcon, PhoneIcon, QuoteIcon, ShieldCheckIcon } from './Icons'

// TODO: replace with the real founder details, figures and photo
const FOUNDER = {
  name: 'Ravi Kumar Reddy',
  role: 'Founder & Managing Director',
  message:
    'I started Treeland with one belief: every family deserves land they can trust. Clear titles, honest prices and layouts we would be proud to live in ourselves.',
}

const STATS = [
  { value: '10+', label: 'Years of Trust' },
  { value: '350+', label: 'Acres Developed' },
  { value: '2,500+', label: 'Happy Families' },
]

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

const AboutSection = () => (
  <section className="about-section" aria-labelledby="about-title">
    <div className="site-container about-section__inner">
      <div className="about-media">
        <div className="about-media__frame">
          <img className="about-media__img" src={aboutImage} alt="Tree-lined roads at a Treeland layout" loading="lazy" />
        </div>

        <div className="about-media__badge about-media__badge--years">
          <span className="about-media__badge-icon">
            <AwardIcon />
          </span>
          <span>
            <strong>10+ Years</strong>
            Building trust
          </span>
        </div>

        <div className="about-media__badge about-media__badge--approved">
          <span className="about-media__badge-icon">
            <ShieldCheckIcon />
          </span>
          <span>
            <strong>100% Approved</strong>
            DTCP &amp; RERA layouts
          </span>
        </div>
      </div>

      <div className="about-content">
        <span className="section-eyebrow">About Treeland</span>
        <h2 id="about-title" className="section-title">
          Building Communities <span className="section-title__highlight">Rooted</span> in Trust
        </h2>
        <p className="about-content__lead">
          Treeland is a Hyderabad-based real estate developer creating premium, gated open plot communities in the
          city's fastest-growing corridors.
        </p>
        <p className="about-content__text">
          From land selection and approvals to roads, drainage and green avenues, we handle every detail so you can
          invest with complete peace of mind, whether you are building your dream home or growing your wealth.
        </p>

        <dl className="about-stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="about-stats__item">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <figure className="founder-card">
          <QuoteIcon className="founder-card__quote" />
          <blockquote className="founder-card__message">
            <p>{FOUNDER.message}</p>
          </blockquote>
          <figcaption className="founder-card__person">
            <span className="founder-card__avatar" aria-hidden="true">
              {initials(FOUNDER.name)}
            </span>
            <span>
              <strong>{FOUNDER.name}</strong>
              {FOUNDER.role}
            </span>
          </figcaption>
        </figure>

        <div className="about-content__actions">
          <Link to="/about" className="btn-hero btn-hero--primary">
            Read More About Us
            <ArrowRightIcon />
          </Link>
          <a href={PHONE_HREF} className="about-call">
            <span className="about-call__icon">
              <PhoneIcon />
            </span>
            <span>
              Talk to our team
              <strong>{PHONE_DISPLAY}</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
