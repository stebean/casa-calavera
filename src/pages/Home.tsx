import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SkullIcon, SkullDivider, SkullPattern } from '../components/Skulls'

const Home = () => {
  return (
    <>
      <div className="relative bg-background">
        <SkullPattern />

        <section className="calavera-hero" aria-labelledby="hero-title">
          <div className="calavera-hero__skulls" aria-hidden="true">
            <SkullIcon index={2} className="calavera-hero__skull calavera-hero__skull--top" />
            <SkullIcon index={4} className="calavera-hero__skull calavera-hero__skull--bottom" />
            <SkullIcon index={6} className="calavera-hero__skull calavera-hero__skull--left" />
          </div>

          <div className="calavera-hero__composition">
            <div className="calavera-hero__copy">
              <h1 id="hero-title" className="calavera-hero__title">
                Casa <span>Calavera</span>
              </h1>
              <p className="calavera-hero__tagline">Café &amp; Arte.</p>
            </div>
            <div className="calavera-hero__seal">
              <img src="/source/logotipoCC/logo.svg" alt="" width="225" height="225" />
            </div>
          </div>
        </section>

        <SkullDivider className="paper-bg -mx-10 rotate-1 relative z-20" />

        {/* Section 2: About - Polaroid Style */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="paper-bg p-12 transform rotate-1 border-b-8 border-r-8 border-black">
              <h2 className="text-5xl md:text-7xl mb-8 leading-none linocut-text">Ustedes hacen<br />Casa Calavera.</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-bold">
                Los <span className="text-brand-red underline decoration-4">jueves</span> son diferentes. Llega, pide algo rico y crea lo que se te antoje.
                O trae tu obra lista y canjéala por un café o cerveza.
              </p>
            </div>

            <div className="relative">
              <div className="polaroid w-full max-w-md mx-auto">
                <img src="/source/galeria/principal/913c5e4933060513eaa7e7a6dd56b1dd.jpg" alt="Casa Calavera" className="contrast-110" />
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
              {[
                { name: 'Cafetería', path: 'cafeteria', desc: 'Café, waffles dulces y salados, botanas y más.' },
                { name: 'La Casona', path: 'la-casona', desc: 'Cocteles, chelas preparadas y shots de la casa.' },
                { name: 'La Gran Tostada', path: 'la-gran-tostada', desc: 'Tostadas, tacos, hamburguesas y más.' },
              ].map(({ name, path, desc }, i) => (
                <motion.div
                  key={path}
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={`flex-1 p-12 border-4 border-black relative overflow-hidden ${i === 1 ? 'bg-brand-red' : 'paper-bg'}`}
                >
                  <div className="absolute top-0 right-0 p-4">
                    <SkullIcon index={i % 9} className="w-16 h-16 opacity-30" />
                  </div>
                  <h3 className="text-5xl font-black mb-4 linocut-text">{name}</h3>
                  <p className="mb-12 font-bold uppercase text-sm tracking-widest opacity-70">{desc}</p>
                  <Link
                    to={`/menu/${path}`}
                    className="block w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-brand-paper hover:text-black transition-colors text-center"
                  >
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
            <h2 className="text-4xl sm:text-6xl md:text-8xl mb-12 linocut-text">Encuéntranos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="stamp border-brand-red text-brand-red mb-4">Ubicación</div>
                <p className="text-4xl font-black uppercase">Santiago Subiría #425<br />Col. La Soledad</p>
                <p className="text-2xl font-black uppercase">Sombrerete, Zacatecas</p>
              </div>
              <div className="relative">
                <div className="stamp border-brand-green text-brand-green mb-4">Horarios</div>
                <p className="text-2xl font-black uppercase">Lunes: Cerrado<br /><span className='text-3xl font-black'>Martes a Domingo: 6:00 pm a 12:00 pm</span></p>
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
