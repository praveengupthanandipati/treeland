import type { ComponentType, SVGProps } from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/Icons'

export const PHONE_DISPLAY = '+91 98765 43210'
export const PHONE_HREF = 'tel:+919876543210'
// TODO: replace with the real office details
export const EMAIL = 'info@treeland.in'
export const EMAIL_HREF = `mailto:${EMAIL}`
export const ADDRESS = 'Plot 42, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033'
export const OFFICE_HOURS = 'Mon – Sun: 9:30 AM – 7:00 PM'
export const WHATSAPP_HREF =
  'https://wa.me/919876543210?text=' + encodeURIComponent('Hi, I am interested in your open plots.')

export const PLOT_TYPES = [
  { value: 'residential', label: 'Residential Plots' },
  { value: 'commercial', label: 'Commercial Plots' },
  { value: 'villa', label: 'Villa Plots' },
  { value: 'farm-lands', label: 'Farm Lands' },
]

export type SocialLink = {
  name: 'facebook' | 'instagram' | 'youtube' | 'linkedin'
  label: string
  url: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'facebook', label: 'Facebook', url: 'https://facebook.com', Icon: FacebookIcon },
  { name: 'instagram', label: 'Instagram', url: 'https://instagram.com', Icon: InstagramIcon },
  { name: 'youtube', label: 'YouTube', url: 'https://youtube.com', Icon: YoutubeIcon },
  { name: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com', Icon: LinkedinIcon },
]
