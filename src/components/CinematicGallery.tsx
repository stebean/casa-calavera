import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [
  "/source/fondo/1.jpg",
  "/source/fondo/2.jpg",
  "/source/fondo/3.jpg",
]

const CinematicGallery = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (index < images.length) {
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1)
      }, 2500)
      return () => clearTimeout(timer)
    } else {
      setIsExiting(true)
      const exitTimer = setTimeout(() => {
        onComplete()
      }, 1500) // Duration of exit animation
      return () => clearTimeout(exitTimer)
    }
  }, [index, onComplete])

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isExiting && index < images.length && (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={images[index]} 
              className="w-full h-full object-cover grayscale brightness-[0.4]"
              alt="Casa Calavera Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-20 left-12"
            >
              <div className="h-1 w-24 bg-brand-red mb-4" />
              <p className="font-serif italic text-xl tracking-[0.3em] uppercase text-brand-paper/60">
                Cargando...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative center logo during exit or transition */}
      {isExiting && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
           <h2 className="text-4xl font-black text-brand-paper opacity-20 tracking-tighter">CASA CALAVERA</h2>
        </motion.div>
      )}
    </motion.div>
  )
}

export default CinematicGallery
