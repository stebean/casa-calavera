import { motion } from 'framer-motion'
import { SkullIcon } from '../../components/Skulls'

const CafeteriaMenu = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="inline-block paper-bg p-8 border-4 border-black transform -rotate-2 mb-20 shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-8">
            <h1 className="text-6xl md:text-[10rem] linocut-text leading-none">Cafetería</h1>
            <SkullIcon className="w-24 h-24 md:w-32 md:h-32 text-black/20" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="paper-bg p-12 transform rotate-1 border-4 border-black">
            <h2 className="text-4xl mb-8 font-hand text-brand-red border-b-4 border-black pb-2 inline-block">BEBIDAS DE LA CASA</h2>
            <div className="space-y-8">
              {[
                { name: 'CUBANITO', price: '$85', desc: 'Cerveza, salsas, clamato y fruta tropical.' },
                { name: 'PURPUCHELA', price: '$40', desc: 'Cerveza, limón y vino tinto.' },
                { name: 'VAMPIRO EN LA GALERIA', price: '$55', desc: 'Receta agridulce de la casa.' },
                { name: 'CHAVELA', price: '$55', desc: 'Cerveza, limón y sal.' },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start group border-b border-black/10 pb-4">
                  <div>
                    <h3 className="text-3xl font-black group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <p className="text-black/60 font-bold uppercase text-xs">{item.desc}</p>
                  </div>
                  <span className="text-3xl font-black stamp border-black">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-zinc-800 p-12 transform -rotate-1 border-4 border-brand-paper text-brand-paper">
            <h2 className="text-4xl mb-8 font-hand text-brand-yellow border-b-4 border-brand-paper pb-2 inline-block">BOTANAS</h2>
            <div className="space-y-8">
               {[
                { name: 'CROQUELIARTE', price: '$45', desc: 'Cuero botanero, cuero curtido, limón y salsa.' },
                { name: 'PULPOS', price: '$50', desc: 'Salchicha frita acompalada de aderezo a elección' },
                { name: 'SALCHIPAPAS', price: '$45'},
                { name: 'PAPAS A LA FRANCESA', price: '$30'},
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-start group border-b border-brand-paper/20 pb-4">
                  <div>
                    <h3 className="text-3xl font-black group-hover:bg-brand-paper group-hover:text-black px-2 -ml-2 transition-all">{item.name}</h3>
                    <p className="text-brand-paper/70 font-bold uppercase text-xs">{item.desc}</p>
                  </div>
                  <span className="text-3xl font-black">{item.price}</span>
                </div>
              ))}
            </div>
            <div className='inline-block mt-12 p-4 border-2 border-brand-paper text-sm font-bold uppercase tracking-widest'>
              <p className="text-brand-paper/70 font-bold uppercase text-xs">ADEREZOS: Ketchup, Mayonesa, BBQ, Salsa picante</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

export default CafeteriaMenu
