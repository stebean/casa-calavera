import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isHidden={false} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-black py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl mb-2">Casa Calavera</h2>
          </div>
          <div className="flex gap-8 uppercase tracking-widest text-xs font-bold">
            <a href="https://www.instagram.com/casa_calavera/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Instagram</a>
            <a href="https://www.facebook.com/casa.calavera.2025/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Facebook</a>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-sm">© 2026 Casa Calavera</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
