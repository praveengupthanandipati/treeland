import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingContact from './FloatingContact'

const Layout = () => (
  <>
    <Header />
    <main className="site-main">
      <Outlet />
    </main>
    <Footer />
    <FloatingContact />
  </>
)

export default Layout
