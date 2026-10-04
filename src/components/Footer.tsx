import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  OFFICE_HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SOCIAL_LINKS,
  WHATSAPP_HREF,
} from '../data/site'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WhatsappIcon,
} from './Icons'
import Logo from './Logo'

const QUICK_LINKS = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Open Plots', path: '/open-plots' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Updates', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
]

const YEAR = new Date().getFullYear()

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      {/* ─── Call to action ─── */}
      <div className="footer-cta">
        <div>
          <h2 className="footer-cta__title">
            Ready to Own Your <span>Dream Plot?</span>
          </h2>
          <p className="footer-cta__text">Book a free site visit. We'll pick you up and show you around.</p>
        </div>
        <div className="footer-cta__actions">
          <Link to="/contact" className="btn-hero btn-hero--primary">
            Book a Site Visit
            <ArrowRightIcon />
          </Link>
          <a href={WHATSAPP_HREF} className="footer-cta__whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ─── Link columns ─── */}
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-brand__text">
            Premium, gated open plot communities in Hyderabad's fastest-growing corridors, with clear titles and honest
            prices.
          </p>
          <ul className="footer-brand__badges" aria-label="Approvals">
            <li>
              <ShieldCheckIcon />
              DTCP Approved
            </li>
            <li>
              <ShieldCheckIcon />
              RERA Registered
            </li>
          </ul>
          <ul className="footer-social" aria-label="Follow us">
            {SOCIAL_LINKS.map(({ name, label, url, Icon }) => (
              <li key={name}>
                <a
                  href={url}
                  className={`footer-social__link footer-social__link--${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-col" aria-labelledby="footer-links-title">
          <h3 id="footer-links-title" className="footer-col__title">
            Quick Links
          </h3>
          <ul className="footer-links">
            {QUICK_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link to={path}>
                  <ChevronRightIcon />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-labelledby="footer-projects-title">
          <h3 id="footer-projects-title" className="footer-col__title">
            Our Projects
          </h3>
          <ul className="footer-links footer-links--projects">
            {PROJECTS.map(({ slug, name, location }) => (
              <li key={slug}>
                <Link to={`/projects#${slug}`}>
                  <ChevronRightIcon />
                  <span>
                    {name}
                    <small>{location}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h3 className="footer-col__title">Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <span className="footer-contact__icon">
                <MapPinIcon />
              </span>
              <address>{ADDRESS}</address>
            </li>
            <li>
              <span className="footer-contact__icon">
                <PhoneIcon />
              </span>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <span className="footer-contact__icon">
                <MailIcon />
              </span>
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </li>
            <li>
              <span className="footer-contact__icon">
                <ClockIcon />
              </span>
              <span>{OFFICE_HOURS}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="footer-bottom">
        <p>
          © {YEAR} <strong>Treeland</strong>. All rights reserved.
        </p>
        <p className="footer-bottom__made">Rooted in Hyderabad</p>
        <button type="button" className="footer-bottom__top" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUpIcon />
        </button>
      </div>
    </div>

    <span className="site-footer__watermark" aria-hidden="true">
      TREELAND
    </span>
  </footer>
)

export default Footer
