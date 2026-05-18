import { motion } from 'framer-motion'
import { SkullIcon } from '../components/Skulls'

const galleryItems = [
  { 
    id: 1, 
    author: 'Elena M.', 
    desc: 'Boceto rápido mientras esperaba mi cold brew. La luz de la tarde era perfecta.', 
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    size: 'large'
  },
  { 
    id: 2, 
    author: 'Javier Art', 
    desc: 'Inspiración urbana. Los muros de Casa Calavera hablan.', 
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  },
  { 
    id: 3, 
    author: 'Sofia G.', 
    desc: 'Estudio de calaveras. El café ayuda a concentrarse.', 
    img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
  { 
    id: 4, 
    author: 'Unknown', 
    desc: 'Abstracto y cafeína.', 
    img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  },
  { 
    id: 5, 
    author: 'Marcos R.', 
    desc: 'Lineas negras sobre papel crudo.', 
    img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop',
    size: 'large'
  },
  { 
    id: 6, 
    author: 'Carla V.', 
    desc: 'Pintura experimental con café derramado.', 
    img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop',
    size: 'small'
  },
]

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#d1d1bc] pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Newspaper Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/newspaper.png')]" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="mb-20 text-center">
          <div className="inline-block bg-black text-white p-6 transform -rotate-1 border-4 border-black mb-6">
             <h1 className="text-6xl md:text-8xl linocut-text">Galería de la Comunidad</h1>
          </div>
          <p className="font-serif text-2xl text-black/80 max-w-2xl mx-auto italic">
            "Arte creado por manos que sostienen tazas. El alma de Casa Calavera en cada trazo."
          </p>
        </div>

        {/* Masonry Grid - Pinterest Style */}
        <div className="columns-1 md:grid-cols-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid group"
            >
              <div className="bg-white p-4 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                <img 
                  src={item.img} 
                  alt={item.desc} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 mb-6"
                />
                
                <div className="border-t-2 border-dashed border-black/30 pt-4 font-mono">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-brand-red text-white px-2 py-0.5 text-xs font-bold uppercase tracking-tighter">Autor: {item.author}</span>
                    <SkullIcon index={i % 9} className="w-6 h-6 opacity-40" />
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed indent-4">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex justify-end opacity-20 text-[10px]">
                    #CASACALAVERA_ART_{item.id.toString().padStart(3, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
           <div className="paper-bg p-8 border-4 border-black max-w-xl text-center rotate-1">
              <h3 className="text-3xl font-black mb-4 uppercase">¿Quieres aparecer aquí?</h3>
              <p className="font-mono text-sm mb-6">Etiqueta tus dibujos en redes sociales o pídenos papel y plumón en la barra.</p>
              <div className="stamp border-brand-red text-brand-red">Próximamente</div>
           </div>
           <SkullIcon index={8} className="w-24 h-24 opacity-10 animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}

export default Gallery
