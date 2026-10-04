import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import HeroBanner from '../components/HeroBanner'
import NewsSection from '../components/NewsSection'
import ProjectsSection from '../components/ProjectsSection'
import SubscribeSection from '../components/SubscribeSection'
import WhyInvest from '../components/WhyInvest'

const Home = () => (
  <>
    <HeroBanner />   
    <ProjectsSection />
     <AboutSection />
    <WhyInvest />
    <GallerySection />
    <NewsSection />
    <SubscribeSection />
  </>
)

export default Home
