import { Outlet } from 'react-router'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className='bg-gray-700'>
        <div className='layout'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
