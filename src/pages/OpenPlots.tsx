import { useParams } from 'react-router-dom'

const TITLES: Record<string, string> = {
  residential: 'Residential Plots',
  commercial: 'Commercial Plots',
  villa: 'Villa Plots',
  'farm-lands': 'Farm Lands',
}

const OpenPlots = () => {
  const { type } = useParams()
  const title = (type && TITLES[type]) || 'Open Plots'

  return (
    <section className="page-placeholder">
      <div className="site-container">
        <h1>{title}</h1>
        <p>Browse available plots and land parcels for sale.</p>
      </div>
    </section>
  )
}

export default OpenPlots
