import { Outlet } from 'react-router-dom'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
const Layout = () => {
  return (
    <>
      <Header />
        <Aside />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
