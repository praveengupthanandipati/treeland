import { useEffect, useRef, type KeyboardEvent, type MouseEvent, type TouchEvent } from 'react'
import type { GalleryImage } from '../data/gallery'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'

type LightboxProps = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

// Native <dialog> gives us focus trapping, Esc to close and the top layer for free
const Lightbox = ({ images, index, onClose, onChange }: LightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const thumbsRef = useRef<HTMLUListElement>(null)
  const open = index !== null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
    document.body.classList.toggle('lightbox-open', open)
    return () => document.body.classList.remove('lightbox-open')
  }, [open])

  // keep the active thumbnail visible in the scrollable strip
  useEffect(() => {
    if (index === null) return
    thumbsRef.current
      ?.querySelector('[aria-current="true"]')
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [index])

  if (index === null) return <dialog ref={dialogRef} className="lightbox" aria-label="Image viewer" />

  const total = images.length
  const current = images[index]
  const go = (step: 1 | -1) => onChange((index + step + total) % total)

  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  // click on the dimmed area (not the photo or controls) closes
  const handleBackdrop = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={`${current.title}, image ${index + 1} of ${total}`}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdrop}
    >
      <div className="lightbox__top">
        <span className="lightbox__counter">
          <strong>{String(index + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
        </span>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close gallery">
          <CloseIcon />
        </button>
      </div>

      <div
        className="lightbox__stage"
        onClick={handleBackdrop}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
          <ChevronLeftIcon />
        </button>

        <figure key={index} className="lightbox__figure">
          <img className="lightbox__img" src={current.src} alt={current.title} />
          <figcaption className="lightbox__caption">
            <span className="lightbox__category">{current.category}</span>
            <strong>{current.title}</strong>
            <small>Photo: {current.credit} / Unsplash</small>
          </figcaption>
        </figure>

        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Next image">
          <ChevronRightIcon />
        </button>
      </div>

      <ul ref={thumbsRef} className="lightbox__thumbs" aria-label="All images">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              className="lightbox__thumb"
              onClick={() => onChange(i)}
              aria-label={`Show ${image.title}`}
              aria-current={i === index ? 'true' : undefined}
            >
              <img src={image.src} alt="" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </dialog>
  )
}

export default Lightbox
