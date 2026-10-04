import aerialLayout from '../assets/img/gallery/aerial-layout.jpg'
import avenuePlantation from '../assets/img/gallery/avenue-plantation.jpg'
import entranceGate from '../assets/img/gallery/entrance-gate.jpg'
import greenSurroundings from '../assets/img/gallery/green-surroundings.jpg'
import internalRoads from '../assets/img/gallery/internal-roads.jpg'
import openPlots from '../assets/img/gallery/open-plots.jpg'
import park from '../assets/img/gallery/park.jpg'
import plottedDevelopment from '../assets/img/gallery/plotted-development.jpg'
import villaPlots from '../assets/img/gallery/villa-plots.jpg'
import walkingTrail from '../assets/img/gallery/walking-trail.jpg'

export type GalleryCategory = 'Layout' | 'Amenities' | 'Landscape'

export type GalleryImage = {
  src: string
  title: string
  category: GalleryCategory
  // Stock photos from Unsplash (free licence) — swap for real project photos
  credit: string
}

// Order matters: on desktop the grid fills two rows of five with varied widths
export const GALLERY: GalleryImage[] = [
  { src: plottedDevelopment, title: 'Plotted Development', category: 'Layout', credit: 'Iain' },
  { src: entranceGate, title: 'Grand Entrance & Security', category: 'Amenities', credit: 'Long Chung' },
  { src: avenuePlantation, title: 'Avenue Plantation', category: 'Landscape', credit: 'Van Williams' },
  { src: internalRoads, title: 'Wide Internal Roads', category: 'Layout', credit: 'SkiExpeditions.org' },
  { src: park, title: 'Landscaped Park', category: 'Amenities', credit: 'Mike Benna' },
  { src: greenSurroundings, title: 'Green Surroundings', category: 'Landscape', credit: 'Milin John' },
  { src: villaPlots, title: 'Villa Plots', category: 'Layout', credit: 'Frames For Your Heart' },
  { src: walkingTrail, title: 'Walking Trails', category: 'Amenities', credit: 'Dollar Gill' },
  { src: aerialLayout, title: 'Resort-Style Villas', category: 'Layout', credit: 'CHUTTERSNAP' },
  { src: openPlots, title: 'Open Green Lands', category: 'Landscape', credit: 'Bharath Bunny' },
]
