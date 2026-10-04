import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GALLERY } from '../data/gallery'
import { ArrowRightIcon, ExpandIcon } from './Icons'
import Lightbox from './Lightbox'

type GallerySectionProps = {
  // On the Gallery page the heading is the page's h1 and the "view all" link is hidden
  isPage?: boolean
}

const GallerySection = ({ isPage = false }: GallerySectionProps) => {
  const [active, setActive] = useState<number | null>(null)
  const Heading = isPage ? 'h1' : 'h2'

  return (
    <section className={`gallery-section${isPage ? ' gallery-section--page' : ''}`} aria-labelledby="gallery-title">
      <div className="site-container">
        <header className="section-head">
          <div className="section-head__text">
            <span className="section-eyebrow">Properties Gallery</span>
            <Heading id="gallery-title" className="section-title">
              A Glimpse of <span className="section-title__highlight">Life</span> at Treeland
            </Heading>
            <p className="section-lead">
              Entrances, avenues, parks and plots. Tap any photo to explore our layouts up close.
            </p>
          </div>

          {!isPage && (
            <div className="section-head__actions">
              <Link to="/gallery" className="btn-hero btn-hero--outline-dark">
                View Full Gallery
                <ArrowRightIcon />
              </Link>
            </div>
          )}
        </header>

        <ul className="gallery-grid">
          {GALLERY.map((image, i) => (
            <li key={image.src} className="gallery-grid__item">
              <button
                type="button"
                className="gallery-tile"
                onClick={() => setActive(i)}
                aria-label={`Open ${image.title} in the image viewer`}
              >
                <img className="gallery-tile__img" src={image.src} alt="" loading="lazy" />
                <span className="gallery-tile__overlay" aria-hidden="true">
                  <span className="gallery-tile__expand">
                    <ExpandIcon />
                  </span>
                  <span className="gallery-tile__info">
                    <span className="gallery-tile__category">{image.category}</span>
                    <span className="gallery-tile__title">{image.title}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox images={GALLERY} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}

export default GallerySection
