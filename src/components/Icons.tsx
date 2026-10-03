import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
} as const

export const FacebookIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
  </svg>
)

export const InstagramIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const YoutubeIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"
    />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M6.9 8.8H3.6V20h3.3V8.8zM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.6c0-3-1.6-5-4.3-5-1.3 0-2.3.7-2.8 1.5V8.8h-3.2V20h3.3v-5.6c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h3.3l-.2-6.4z" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
)

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const UserIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2c-4.4 0-8 2.2-8 5v1.5c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V19c0-2.8-3.6-5-8-5z" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v.4l-10 6.2L2 6.4V6c0-1.1.9-2 2-2zm-2 4.7 9.5 5.9c.3.2.7.2 1 0L22 8.7V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.7z" />
  </svg>
)

export const LayersIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
)

export const LockIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M17 9V7A5 5 0 0 0 7 7v2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-8-2a3 3 0 1 1 6 0v2H9V7zm4 9.7V18h-2v-1.3a2 2 0 1 1 2 0z" />
  </svg>
)

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2.8 4.5 5.6v6.1c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V5.6L12 2.8z" />
    <path d="m8.6 12 2.4 2.4 4.4-4.6" />
  </svg>
)

export const DocumentCheckIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
    <path d="M14 3v5h5M9 14.5l2 2 4-4" />
  </svg>
)

export const BankIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9.5 12 4l9 5.5H3zM5 10v8M9.7 10v8M14.3 10v8M19 10v8M3 20.5h18" />
  </svg>
)

export const MapPinIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 21.5s7-6.2 7-11.8a7 7 0 0 0-14 0c0 5.6 7 11.8 7 11.8z" />
    <circle cx="12" cy="9.7" r="2.6" />
  </svg>
)

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const CheckCircleIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="m8 12.3 2.7 2.7L16 9.7" />
  </svg>
)

export const WhatsappIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3.1 29l6.5-1.7c1.9 1 4.1 1.6 6.4 1.6 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.5c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C4.9 9.8 9.9 5 16 5s11.1 4.8 11.1 10.8S22.1 26.5 16 26.5zm6.1-8.1c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2l-1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2.1-.4 0-.6l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z" />
  </svg>
)
