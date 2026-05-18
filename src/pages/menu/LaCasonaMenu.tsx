import { motion } from 'framer-motion'
import { SkullIcon } from '../../components/Skulls'

const LaCasonaMenu = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="bg-brand-red p-12 inline-block border-b-8 border-r-8 border-black transform rotate-1 mb-16">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <h1 className="text-7xl md:text-[12rem] linocut-text leading-none text-black">La Casona</h1>
            <SkullIcon className="w-24 h-24 text-black mb-4" />
          </div>
          <p className="font-hand text-3xl text-white mt-4 underline decoration-black">Cocina de Autor</p>
        </div>
        
        <p className="text-3xl mb-16 max-w-2xl font-black uppercase text-brand-paper leading-tight">
          Nuestra cocina de autor.<br/>
          <span className="bg-brand-yellow text-black px-2">Platillos robustos</span> con alma tradicional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Chilaquiles de la Muerte', price: '$120', desc: 'Salsa roja tatemada, habanero y huevo estrellado.' },
            { name: 'Omelette Arcane', price: '$110', desc: 'Relleno de hongos silvestres y queso de cabra.' },
            { name: 'Pan Francés Calavera', price: '$130', desc: 'Brioche artesanal con frutos rojos y miel de agave.' },
          ].map((item, i) => (
            <div 
              key={item.name} 
              className={`paper-bg p-8 flex flex-col justify-between hover:bg-brand-yellow transition-all group border-4 border-black shadow-[15px_15px_0px_rgba(0,0,0,0.5)] transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-4xl font-black leading-none uppercase">{item.name}</h3>
                   <div className="stamp border-black text-xs">TOP</div>
                </div>
                <p className="text-black font-bold uppercase text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-12 flex items-baseline justify-between border-t-4 border-black pt-4">
                <span className="font-hand text-2xl text-brand-red">Precio</span>
                <span className="text-5xl font-black">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <div className="bg-white p-6 rotate-[-5deg] border-2 border-black shadow-lg">
            <p className="font-hand text-4xl text-black">¡Buen Provecho!</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LaCasonaMenu
