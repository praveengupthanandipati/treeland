import placeholderImage from '../assets/img/homebanner.jpg'

export type NewsCategory = 'Launch' | 'Offer' | 'Event' | 'Update' | 'Infrastructure'

export type NewsItem = {
  slug: string
  title: string
  excerpt: string
  category: NewsCategory
  date: string // ISO yyyy-mm-dd
  readTime: string
  image: string
}

// The first item is shown as the featured story; keep the rest newest first
// TODO: swap placeholderImage for each story's own photo
export const NEWS: NewsItem[] = [
  {
    slug: 'greenvista-meadows-launch',
    title: 'GreenVista Meadows Launches at Maheshwaram',
    excerpt:
      'Our newest gated community brings DTCP and RERA approved plots from 180 to 450 sq.yds to south Hyderabad, with special pre-launch prices from ₹9,499 / sq.yd for early buyers.',
    category: 'Launch',
    date: '2026-09-28',
    readTime: '3 min read',
    image: placeholderImage,
  },
  {
    slug: 'festive-offer-2026',
    title: 'Festive Offer: Zero Registration Charges This Dasara & Diwali',
    excerpt:
      'Book any plot before 15 November and we cover the registration charges, plus get a free gold coin on every booking.',
    category: 'Offer',
    date: '2026-10-01',
    readTime: '2 min read',
    image: placeholderImage,
  },
  {
    slug: 'site-visit-weekend-shadnagar',
    title: 'Free Site Visit Weekend at GreenVista City, Shadnagar',
    excerpt:
      'Join our guided tour on 11–12 October with free pick-up and drop from Hyderabad and on-the-spot booking benefits.',
    category: 'Event',
    date: '2026-09-20',
    readTime: '2 min read',
    image: placeholderImage,
  },
  {
    slug: 'greenvista-residency-registration',
    title: 'GreenVista Residency Is Now Ready for Registration',
    excerpt:
      'All approvals are in place at Kadthal. Plot owners can now complete registration and take possession right away.',
    category: 'Update',
    date: '2026-09-12',
    readTime: '3 min read',
    image: placeholderImage,
  },
  {
    slug: 'greenvista-county-roads-complete',
    title: 'Black-Top Roads & Drainage Complete at GreenVista County',
    excerpt:
      'Internal roads, underground drainage and avenue plantation are finished at our Yadadri layout, ahead of schedule.',
    category: 'Infrastructure',
    date: '2026-08-30',
    readTime: '2 min read',
    image: placeholderImage,
  },
]

export const formatNewsDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
