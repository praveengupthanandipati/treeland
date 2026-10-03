import { Outlet } from 'react-router-dom'
import Header from './Header'
import FloatingContact from './FloatingContact'

const Layout = () => (
  <>
    <Header />
    <main className="site-main">
      <Outlet />
    </main>
    <FloatingContact />
  </>
)

export default Layout
