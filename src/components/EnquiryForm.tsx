import { useId, useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRightIcon, CheckCircleIcon, LayersIcon, LockIcon, MailIcon, PhoneIcon, UserIcon } from './Icons'
import { PLOT_TYPES } from '../data/site'

type FormValues = {
  name: string
  mobile: string
  email: string
  interest: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL: FormValues = { name: '', mobile: '', email: '', interest: '' }

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name'
  if (!/^[6-9]\d{9}$/.test(values.mobile)) errors.mobile = 'Enter a valid 10-digit mobile number'
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = 'Enter a valid email address'
  if (!values.interest) errors.interest = 'Please choose an option'
  return errors
}

const EnquiryForm = () => {
  const uid = useId()
  const [values, setValues] = useState<FormValues>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const fieldId = (name: keyof FormValues) => `${uid}-${name}`

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const next = name === 'mobile' ? value.replace(/\D/g, '').slice(0, 10) : value
    setValues((prev) => ({ ...prev, [name]: next }))
    if (errors[name as keyof FormValues]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    setSubmitting(true)
    // TODO: replace with the real enquiry API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitting(false)
    setSubmitted(true)
    setValues(INITIAL)
  }

  if (submitted) {
    return (
      <div className="enquiry-card enquiry-card--success" role="status">
        <CheckCircleIcon className="enquiry-card__success-icon" />
        <h2 className="enquiry-card__title">Thank you!</h2>
        <p className="enquiry-card__subtitle">
          We've received your details. Our property expert will call you shortly.
        </p>
        <button type="button" className="btn-hero btn-hero--outline-dark" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    )
  }

  const fieldClass = (name: keyof FormValues) => `form-field${errors[name] ? ' has-error' : ''}`

  const errorProps = (name: keyof FormValues) =>
    errors[name]
      ? { 'aria-invalid': true, 'aria-describedby': `${fieldId(name)}-error` }
      : {}

  const renderError = (name: keyof FormValues) =>
    errors[name] ? (
      <span id={`${fieldId(name)}-error`} className="form-field__error">
        {errors[name]}
      </span>
    ) : null

  return (
    <div className="enquiry-card">
      <h2 className="enquiry-card__title">Enquire Now</h2>
      <p className="enquiry-card__subtitle">Fill in your details and our expert will contact you shortly.</p>

      <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
        <div className={fieldClass('name')}>
          <label htmlFor={fieldId('name')} className="visually-hidden">Your Name</label>
          <UserIcon className="form-field__icon" />
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            placeholder="Your Name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            {...errorProps('name')}
          />
          {renderError('name')}
        </div>

        <div className={fieldClass('mobile')}>
          <label htmlFor={fieldId('mobile')} className="visually-hidden">Mobile Number</label>
          <PhoneIcon className="form-field__icon" />
          <input
            id={fieldId('mobile')}
            name="mobile"
            type="tel"
            inputMode="numeric"
            placeholder="Mobile Number"
            autoComplete="tel-national"
            value={values.mobile}
            onChange={handleChange}
            {...errorProps('mobile')}
          />
          {renderError('mobile')}
        </div>

        <div className={fieldClass('email')}>
          <label htmlFor={fieldId('email')} className="visually-hidden">Email Address (optional)</label>
          <MailIcon className="form-field__icon" />
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            {...errorProps('email')}
          />
          {renderError('email')}
        </div>

        <div className={`${fieldClass('interest')} form-field--select`}>
          <label htmlFor={fieldId('interest')} className="visually-hidden">Interested In</label>
          <LayersIcon className="form-field__icon" />
          <select
            id={fieldId('interest')}
            name="interest"
            value={values.interest}
            onChange={handleChange}
            className={values.interest ? '' : 'is-placeholder'}
            {...errorProps('interest')}
          >
            <option value="" disabled>Interested In</option>
            {PLOT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {renderError('interest')}
        </div>

        <button type="submit" className="btn-hero btn-hero--primary btn-hero--block" disabled={submitting}>
          {submitting ? 'Sending…' : 'Get Best Offer'}
          {!submitting && <ArrowRightIcon />}
        </button>

        <p className="enquiry-form__privacy">
          <LockIcon />
          We respect your privacy
        </p>
      </form>
    </div>
  )
}

export default EnquiryForm
