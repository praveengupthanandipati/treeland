import placeholderImage from '../assets/img/homebanner.jpg'

export type ProjectStatus = 'Featured' | 'Ongoing' | 'Ready to Register' | 'Sold Out'

export type Project = {
  slug: string
  name: string
  location: string
  plotSize: string
  pricePerSqYd: number
  status: ProjectStatus
  approvals: string[]
  image: string
  // object-position for the cover photo, so the shared placeholder varies per card
  imagePosition?: string
}

// TODO: swap placeholderImage for each project's own photo
export const PROJECTS: Project[] = [
  {
    slug: 'greenvista-city',
    name: 'GreenVista City',
    location: 'Shadnagar, Hyderabad',
    plotSize: '150 – 500',
    pricePerSqYd: 8999,
    status: 'Featured',
    approvals: ['DTCP', 'RERA'],
    image: placeholderImage,
    imagePosition: '20% 60%',
  },
  {
    slug: 'greenvista-county',
    name: 'GreenVista County',
    location: 'Yadadri, Hyderabad',
    plotSize: '167 – 400',
    pricePerSqYd: 7499,
    status: 'Ongoing',
    approvals: ['DTCP', 'RERA'],
    image: placeholderImage,
    imagePosition: '45% 70%',
  },
  {
    slug: 'greenvista-residency',
    name: 'GreenVista Residency',
    location: 'Kadthal, Hyderabad',
    plotSize: '200 – 600',
    pricePerSqYd: 6999,
    status: 'Ready to Register',
    approvals: ['DTCP'],
    image: placeholderImage,
    imagePosition: '70% 55%',
  },
  {
    slug: 'greenvista-enclave',
    name: 'GreenVista Enclave',
    location: 'Bhongir, Hyderabad',
    plotSize: '150 – 300',
    pricePerSqYd: 5999,
    status: 'Featured',
    approvals: ['DTCP', 'RERA'],
    image: placeholderImage,
    imagePosition: '95% 65%',
  },
  {
    slug: 'greenvista-meadows',
    name: 'GreenVista Meadows',
    location: 'Maheshwaram, Hyderabad',
    plotSize: '180 – 450',
    pricePerSqYd: 9499,
    status: 'Ongoing',
    approvals: ['DTCP', 'RERA'],
    image: placeholderImage,
    imagePosition: '35% 45%',
  },
]

export const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`
