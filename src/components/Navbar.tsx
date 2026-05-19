import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedLogo from './Logo'

const Navbar = ({ isHidden = false }: { isHidden?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/gallery' },
    { name: 'Cafetería', path: '/menu/cafeteria' },
    { name: 'La Casona', path: '/menu/la-casona' },
    { name: 'La Gran Tostada', path: '/menu/la-gran-tostada' },
  ]

  const handleNavClick = (path: string) => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
    navigate(path)
  }

  return (
    <>
      {/* ─── Top bar: mix-blend-difference solo aquí ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-6 py-6 mix-blend-difference transition-opacity duration-1000 ${
          isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'instant' }); setIsOpen(false) }}
            className="hover:opacity-80 transition-opacity"
          >
            <AnimatedLogo />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-12 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="text-sm font-bold uppercase tracking-widest hover:text-brand-paper transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-paper transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Hamburger — solo en mobile */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-white block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-1 bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-white block"
            />
          </button>
        </div>
      </nav>

      {/* ─── Mobile overlay — FUERA del nav, sin mix-blend-difference ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] md:hidden flex flex-col items-center justify-center p-6"
            style={{
              backdropFilter: 'blur(24px) saturate(140%) brightness(0.6)',
              WebkitBackdropFilter: 'blur(24px) saturate(140%) brightness(0.6)',
              backgroundColor: 'rgba(12, 16, 20, 0.72)',
            }}
          >
            {/* Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="flex flex-col items-center gap-8 w-full"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.14 + i * 0.06 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-red transition-colors block w-full"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Watermark decorativo */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden -z-10 select-none">
              <div className="text-[28rem] font-black absolute -bottom-16 -right-16 leading-none text-white">
                CASA
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
