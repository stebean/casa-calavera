import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import CafeteriaMenu from './pages/menu/CafeteriaMenu'
import LaCasonaMenu from './pages/menu/LaCasonaMenu'
import LaGranTostadaMenu from './pages/menu/LaGranTostadaMenu'
import { InkFilters } from './components/Skulls'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white overflow-x-hidden">
      <div className="grain-overlay" />
      <InkFilters />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="menu">
            <Route path="cafeteria" element={<CafeteriaMenu />} />
            <Route path="la-casona" element={<LaCasonaMenu />} />
            <Route path="la-gran-tostada" element={<LaGranTostadaMenu />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
