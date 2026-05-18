import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = ({ hideNavbar = false }: { hideNavbar?: boolean }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isHidden={hideNavbar} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-black py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl mb-2">Casa Calavera</h2>
            <p className="text-white/60">Arte, Café y Cultura.</p>
          </div>
          <div className="flex gap-8 uppercase tracking-widest text-xs font-bold">
            <a href="#" className="hover:text-brand-yellow transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">TikTok</a>
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
