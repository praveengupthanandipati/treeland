import { useId, useState, type FormEvent } from 'react'
import { ArrowRightIcon, CheckCircleIcon, LockIcon, MailIcon } from './Icons'

const PERKS = ['Early access to new launches', 'Exclusive festive offers', 'Construction progress updates']

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

const SubscribeSection = () => {
  const uid = useId()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidEmail(email.trim())) {
      setError('Please enter a valid email address')
      return
    }

    setSubmitting(true)
    // TODO: replace with the real newsletter API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitting(false)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="subscribe-section" aria-labelledby="subscribe-title">
      <div className="site-container">
        <div className="subscribe-panel">
          <span className="subscribe-panel__ring subscribe-panel__ring--lg" aria-hidden="true" />
          <span className="subscribe-panel__ring subscribe-panel__ring--sm" aria-hidden="true" />

          <div className="subscribe-panel__text">
            <span className="section-eyebrow subscribe-panel__eyebrow">Stay Updated</span>
            <h2 id="subscribe-title" className="subscribe-panel__title">
              Subscribe <span>With Us</span>
            </h2>
            <p className="subscribe-panel__lead">
              Be the first to hear about new launches, price offers and site visit events, straight to your inbox.
            </p>

            <ul className="subscribe-panel__perks">
              {PERKS.map((perk) => (
                <li key={perk}>
                  <CheckCircleIcon />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="subscribe-panel__form-wrap">
            {subscribed ? (
              <div className="subscribe-success" role="status">
                <span className="subscribe-success__icon">
                  <CheckCircleIcon />
                </span>
                <div>
                  <strong>You're subscribed!</strong>
                  <p>Watch your inbox for the latest Treeland updates.</p>
                  <button type="button" className="subscribe-success__reset" onClick={() => setSubscribed(false)}>
                    Subscribe another email
                  </button>
                </div>
              </div>
            ) : (
              <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor={`${uid}-email`} className="subscribe-form__label">
                  Your email address
                </label>
                <div className={`subscribe-form__field${error ? ' has-error' : ''}`}>
                  <MailIcon className="subscribe-form__icon" />
                  <input
                    id={`${uid}-email`}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${uid}-error` : undefined}
                  />
                  <button type="submit" className="subscribe-form__btn" disabled={submitting}>
                    {submitting ? 'Subscribing…' : 'Subscribe'}
                    {!submitting && <ArrowRightIcon />}
                  </button>
                </div>
                {error && (
                  <span id={`${uid}-error`} className="subscribe-form__error">
                    {error}
                  </span>
                )}
                <p className="subscribe-form__note">
                  <LockIcon />
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
