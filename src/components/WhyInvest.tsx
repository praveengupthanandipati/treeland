import type { ComponentType, SVGProps } from 'react'
import { AmenitiesIcon, CheckCircleIcon, LockKeyIcon, MapPinIcon, TagIcon } from './Icons'

type Reason = {
  title: string
  text: string
  points: string[]
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const REASONS: Reason[] = [
  {
    title: 'Prime Locations',
    text: 'Our layouts sit close to the ORR, national highways and upcoming IT and industrial hubs, so your plot grows in value as the city grows.',
    points: ['Near ORR & highways', 'Schools & hospitals close by'],
    Icon: MapPinIcon,
  },
  {
    title: 'Secure Investment',
    text: 'Every plot is DTCP / RERA approved with verified, litigation-free title documents and a fully transparent registration process.',
    points: ['Clear, verified titles', 'Hassle-free registration'],
    Icon: LockKeyIcon,
  },
  {
    title: 'Best Price Guarantee',
    text: 'Buy directly from the developer at honest prices with no hidden charges, plus flexible payment plans that suit your budget.',
    points: ['No hidden charges', 'Easy EMI & bank loans'],
    Icon: TagIcon,
  },
  {
    title: 'Modern Amenities',
    text: 'Black-top roads, underground drainage, water and power lines, parks and avenue plantation, ready from day one.',
    points: ['Gated with 24/7 security', 'Parks & avenue plantation'],
    Icon: AmenitiesIcon,
  },
]

const WhyInvest = () => (
  <section className="why-invest" aria-labelledby="why-invest-title">
    <div className="site-container">
      <header className="section-head section-head--center section-head--light">
        <div className="section-head__text">
          <span className="section-eyebrow">Why Treeland</span>
          <h2 id="why-invest-title" className="section-title">
            Why <span className="section-title__highlight">Invest</span> With Us?
          </h2>
          <p className="section-lead">
            Land is the one asset that only grows. We make owning it simple, safe and rewarding.
          </p>
        </div>
      </header>

      <ul className="why-invest__grid">
        {REASONS.map(({ title, text, points, Icon }, index) => (
          <li key={title} className="reason-card">
            <div className="reason-card__top">
              <span className="reason-card__icon">
                <Icon />
              </span>
              <span className="reason-card__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="reason-card__title">{title}</h3>
            <p className="reason-card__text">{text}</p>

            <ul className="reason-card__points">
              {points.map((point) => (
                <li key={point}>
                  <CheckCircleIcon />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default WhyInvest
