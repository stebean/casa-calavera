import { motion } from 'framer-motion'
import { SkullIcon } from '../../components/Skulls'

const LaGranTostadaMenu = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-brand-yellow relative overflow-hidden text-black">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12">
          <div className="bg-black text-brand-yellow p-12 transform -rotate-2 border-b-8 border-r-8 border-brand-red">
            <h1 className="text-7xl md:text-[12rem] mb-4 leading-none linocut-text">La Gran<br/>Tostada</h1>
            <p className="font-hand text-4xl text-brand-red">Come, bebe y disfruta.</p>
          </div>
          <div className="relative">
             <SkullIcon className="w-32 h-32 md:w-64 md:h-64 mt-8 opacity-20" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stamp border-black text-2xl font-black">XTRM</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-16">
            {[
              { name: 'Aguacate Brutal', price: '$95', desc: 'Pan de masa madre, aguacate, rábano y semillas.' },
              { name: 'Tostada de Salmón', price: '$140', desc: 'Queso crema, eneldo y alcaparras.' },
            ].map((item, i) => (
              <div key={item.name} className={`bg-white p-12 border-4 border-black shadow-[15px_15px_0px_rgba(0,0,0,1)] transform ${i === 0 ? 'rotate-1' : '-rotate-1'}`}>
                <h3 className="text-5xl font-black mb-4 uppercase">{item.name}</h3>
                <p className="text-xl mb-8 font-bold text-zinc-600 border-l-4 border-brand-red pl-4">{item.desc}</p>
                <div className="flex justify-end">
                   <span className="text-5xl font-black bg-black text-brand-yellow px-4 py-2">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12">
            {[
              { name: 'Aguacate Brutal', price: '$95', desc: 'Pan de masa madre, aguacate, rábano y semillas.' },
              { name: 'Tostada de Salmón', price: '$140', desc: 'Queso crema, eneldo y alcaparras.' },
            ].map((item, i) => (
              <div key={item.name} className={`bg-white p-12 border-4 border-black shadow-[15px_15px_0px_rgba(0,0,0,1)] transform ${i === 0 ? 'rotate-1' : '-rotate-1'}`}>
                <h3 className="text-5xl font-black mb-4 uppercase">{item.name}</h3>
                <p className="text-xl mb-8 font-bold text-zinc-600 border-l-4 border-brand-red pl-4">{item.desc}</p>
                <div className="flex justify-end">
                   <span className="text-5xl font-black bg-black text-brand-yellow px-4 py-2">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 flex flex-wrap gap-8 justify-center opacity-40">
           {Array(8).fill(0).map((_, i) => (
             <SkullIcon key={i} className={`w-12 h-12 transform ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
           ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LaGranTostadaMenu
