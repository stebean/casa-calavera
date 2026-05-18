import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SkullIcon, SkullDivider, SkullPattern } from '../components/Skulls'

const Home = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100])
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0])
  
  const scale2 = useTransform(scrollYProgress, [0.25, 0.5], [0.8, 1])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0])

  return (
    <>
      <div ref={containerRef} className="relative bg-background">
        <SkullPattern />
        
        {/* Section 1: Hero - Collage Style */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div 
            style={{ y: y1, opacity: opacity1 }}
            className="relative z-10 text-center px-6"
          >
            <div className="relative inline-block mb-12 transform -rotate-3">
              <div className="absolute inset-0 bg-brand-paper/40 -rotate-2 -translate-x-2 -translate-y-2 opacity-80" />
              <div className="relative paper-bg px-12 py-8 border-4 border-black">
                <SkullIcon index={4} className="w-24 h-24 mx-auto text-black mb-4" />
                <h1 className="text-6xl md:text-9xl leading-none font-black linocut-text">
                  Casa<br/>
                  <span className="text-brand-red">Calavera</span>
                </h1>
              </div>
            </div>
            
            <p className="font-serif italic font-bold text-3xl md:text-6xl text-brand-paper transform rotate-2 ink-text">
              Arte, Café y Cultura.
            </p>
          </motion.div>
          
          {/* Layered Collage Elements */}
          <div className="absolute top-1/4 left-10 w-48 h-64 bg-zinc-800/50 rotate-[-15deg] opacity-50 torn-edge-bottom" />
          <div className="absolute bottom-1/4 right-10 w-64 h-80 bg-brand-paper/20 rotate-[10deg] opacity-30 torn-edge-bottom" />
        </section>

        <SkullDivider className="paper-bg -mx-10 rotate-1 relative z-20" />

        {/* Section 2: About - Polaroid Style */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="paper-bg p-12 transform rotate-1 border-b-8 border-r-8 border-black">
              <h2 className="text-5xl md:text-7xl mb-8 leading-none linocut-text">Ustedes hacen<br/>Casa Calavera.</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-bold">
                Los <span className="text-brand-red underline decoration-4">jueves</span> son diferentes. Llega, pide algo rico y crea lo que se te antoje. 
                O trae tu obra lista y canjéala por un café o cerveza.
              </p>
            </div>

            <div className="relative">
              <div className="polaroid w-full max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop" alt="The Space" className="grayscale contrast-125" />
                <Link to="/gallery" className="block font-serif font-bold italic text-3xl mt-6 text-black text-center hover:text-brand-red transition-colors underline decoration-2 ink-text">Ver Galería →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Menu - Zine Layout */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
          
          <div className="relative z-10 w-full px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
               {['Cafetería', 'La Casona', 'La Gran Tostada'].map((space, i) => (
                <motion.div 
                  key={space}
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={`flex-1 p-12 border-4 border-black relative overflow-hidden ${i === 1 ? 'bg-brand-red' : 'paper-bg'}`}
                >
                  <div className="absolute top-0 right-0 p-4">
                    <SkullIcon index={i % 9} className="w-16 h-16 opacity-30" />
                  </div>
                  <h3 className="text-5xl font-black mb-8 linocut-text">{space}</h3>
                  <p className="mb-12 font-bold uppercase text-sm tracking-widest">Explora la selección de la casa</p>
                  <Link to={`/menu/${space.toLowerCase().replace(/ /g, '-')}`} className="block w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-brand-paper hover:text-black transition-colors text-center">
                    Ver Menú →
                  </Link>
                  <div className="absolute bottom-[-20px] left-[-20px] w-full h-10 bg-black/10 rotate-[-5deg]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Location - Stamp Style */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-32 relative">
          <div className="paper-bg p-16 max-w-4xl w-full mx-6 transform -rotate-1 border-l-8 border-t-8 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.5)]">
            <h2 className="text-8xl md:text-8xl mb-12 linocut-text">Encuéntranos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="stamp border-brand-red text-brand-red mb-4">Ubicación</div>
                <p className="text-4xl font-black uppercase">Santiago Subiría #425<br/>Col. La Soledad</p>
                <p className="text-2xl font-black uppercase">Sombrerete, Zacatecas</p>
              </div>
              <div className="relative">
                <div className="stamp border-brand-green text-brand-green mb-4">Horarios</div>
                <p className="text-2xl font-black uppercase">Lunes: Cerrado<br/><span className='text-3xl font-black'>Martes a Domingo: 4:00 pm a 11:00 pm</span></p>
              </div>
            </div>
            <div className="mt-16 flex justify-end">
              <SkullIcon index={0} className="w-32 h-32 opacity-20 -rotate-12" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
