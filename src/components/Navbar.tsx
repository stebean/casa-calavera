import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedLogo from './Logo'

const Navbar = ({ isHidden = false }: { isHidden?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 py-6 mix-blend-difference transition-opacity duration-1000 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[110]">
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
          <AnimatedLogo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-paper transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-paper transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Animated Mobile Toggle */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-[100] md:hidden flex flex-col items-center justify-center p-6"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-10 w-full"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-red transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Background pattern for overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden -z-10">
               <div className="text-[30rem] font-black absolute -bottom-20 -right-20 leading-none">CASA</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
