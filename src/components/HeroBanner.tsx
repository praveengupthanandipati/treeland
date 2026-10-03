import type { ComponentType, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/img/homebanner.jpg'
import EnquiryForm from './EnquiryForm'
import { ArrowRightIcon, BankIcon, DocumentCheckIcon, MapPinIcon, ShieldCheckIcon } from './Icons'

type Feature = {
  title: string
  text: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const FEATURES: Feature[] = [
  { title: 'DTCP & RERA', text: 'Approved', Icon: ShieldCheckIcon },
  { title: 'Clear Titles', text: '100% Legal', Icon: DocumentCheckIcon },
  { title: 'Bank Loan', text: 'Available', Icon: BankIcon },
  { title: 'Prime', text: 'Locations', Icon: MapPinIcon },
]

const HeroBanner = () => (
  <section className="hero" aria-labelledby="hero-title">
    <img className="hero__bg" src={bannerImage} alt="" fetchPriority="high" />
    <div className="hero__overlay" aria-hidden="true" />

    <div className="site-container hero__inner">
      <div className="hero__content">
        <span className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          Premium Gated Layouts
        </span>

        <h1 id="hero-title" className="hero__title">
          Find Your Dream <span className="hero__highlight">Open Plot</span> Today!
        </h1>

        <p className="hero__lead">
          Premium Open Plots for a Better Tomorrow.
          <br />
          Invest in the future you deserve.
        </p>

        <div className="hero__actions">
          <Link to="/projects" className="btn-hero btn-hero--primary">
            Explore Projects
            <ArrowRightIcon />
          </Link>
          <Link to="/contact" className="btn-hero btn-hero--dark">
            Contact Us
          </Link>
        </div>

        <ul className="hero__features">
          {FEATURES.map(({ title, text, Icon }) => (
            <li key={title} className="hero-feature">
              <span className="hero-feature__icon">
                <Icon />
              </span>
              <span className="hero-feature__text">
                <strong>{title}</strong>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__form">
        <EnquiryForm />
      </div>
    </div>

    <svg className="hero__curve" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 80V48C240 16 480 0 720 0s480 16 720 48v32H0z" />
    </svg>
  </section>
)

export default HeroBanner
