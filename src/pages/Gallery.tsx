import { motion } from 'framer-motion'

// ─── Imágenes reales de la comunidad ─────────────────────────
const galleryItems = [
  { id: 1, src: '/source/galeria/image1.png', rotate: -2.5, size: 'tall' },
  { id: 2, src: '/source/galeria/image2.png', rotate: 1.8, size: 'wide' },
  { id: 3, src: '/source/galeria/image3.png', rotate: -1.2, size: 'tall' },
  { id: 4, src: '/source/galeria/image4.png', rotate: 2.5, size: 'square' },
  { id: 5, src: '/source/galeria/image5.png', rotate: -3.0, size: 'wide' },
]

// ─── Frame — obra colgada en la pared ────────────────────────
const Frame = ({ item, delay }: { item: typeof galleryItems[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate: item.id % 2 === 0 ? item.rotate + 24 : item.rotate - 24 }}
    whileInView={{ opacity: 1, rotate: item.rotate }}
    whileHover={{ y: -8, rotate: item.rotate * 0.4, transition: { type: 'spring', stiffness: 300 } }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ type: 'spring', stiffness: 65, damping: 9, delay, opacity: { duration: 0.2, delay } }}
    className="relative mx-auto"
    style={{ maxWidth: item.size === 'wide' ? 480 : 360, originX: '50%', originY: 0 }}
  >
    {/* ── Hilo / cuerda de colgar ── */}
    <div
      className="absolute left-1/2 -translate-x-1/2 -top-6 w-px h-6 origin-top"
      style={{
        background: 'linear-gradient(to bottom, #5a3e1b, #7a5c2e)',
        boxShadow: '0 0 2px rgba(0,0,0,0.3)',
      }}
    />
    {/* ── Clavo ── */}
    <div
      className="absolute left-1/2 -translate-x-1/2 -top-7 w-2.5 h-2.5 rounded-full z-10"
      style={{
        background: 'radial-gradient(circle at 35% 35%, #b8a080, #5a3e1b)',
        boxShadow: '1px 2px 4px rgba(0,0,0,0.5)',
      }}
    />

    {/* ── Marco ── */}
    <div
      className="relative"
      style={{
        padding: '14px',
        backgroundColor: '#f5ede0',   // mat crema
        border: '10px solid #1c0f06', // marco madera oscura
        boxShadow: `
          0 30px 70px rgba(0,0,0,0.45),
          0 10px 30px rgba(0,0,0,0.3),
          inset 0 0 0 2px rgba(255,255,255,0.08),
          inset 0 0 0 1px rgba(0,0,0,0.4)
        `,
      }}
    >
      {/* Sombra interna del mat */}
      <div
        className="absolute inset-[14px] pointer-events-none z-10"
        style={{ boxShadow: 'inset 0 0 12px rgba(0,0,0,0.15)' }}
      />

      {/* Imagen */}
      <img
        src={item.src}
        alt={`Obra #${item.id} — Galería Casa Calavera`}
        className="w-full h-auto block relative z-0"
        loading="lazy"
      />
    </div>

    {/* ── Sombra en la pared (proyección del marco) ── */}
    <div
      className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[90%] h-5 pointer-events-none -z-10 blur-xl"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
    />
  </motion.div>
)

// ════════════════════════════════════════════════════════════
// PÁGINA
// ════════════════════════════════════════════════════════════

const Gallery = () => {
  return (
    <div
      className="min-h-screen pt-28 pb-32 px-6 relative overflow-hidden"
      style={{
        // Pared de aplanado cálido
        backgroundColor: '#b8a48e',
        backgroundImage: `
          url("https://www.transparenttextures.com/patterns/concrete-wall.png")
        `,
      }}
    >
      {/* ── Viñeta en bordes (sensación de profundidad) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)
          `,
        }}
      />

      {/* ── Franja superior oscura — como el techo ── */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)',
        }}
      />

      {/* ── Franja inferior — zócalo ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
          borderTop: '4px solid rgba(0,0,0,0.15)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          {/* Letrero como cuadro en la pared */}
          <div
            className="inline-block px-10 py-5 transform -rotate-1 mb-4"
            style={{
              backgroundColor: '#0c1014',
              border: '6px solid #1c1c1c',
              boxShadow: '0 12px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            <h1
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white linocut-text"
            >
              Galería
            </h1>
            <p
              className="text-xs font-black uppercase tracking-[0.3em] mt-1"
              style={{ color: '#bdbd99' }}
            >
              Arte de la Comunidad
            </p>
          </div>
        </motion.div>

        {/* ── Cuadros en la pared ── */}

        {/* Primera fila: 2 cuadros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 px-4 md:px-12 items-end">
          <Frame item={galleryItems[0]} delay={0.1} />
          <Frame item={galleryItems[1]} delay={0.2} />
        </div>

        {/* Segunda fila: 1 cuadro centrado (destacado) */}
        <div className="flex justify-center mb-24">
          <div className="w-full max-w-sm md:max-w-lg">
            <Frame item={galleryItems[2]} delay={0.3} />
          </div>
        </div>

        {/* Tercera fila: 2 cuadros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-4 md:px-12 items-start">
          <Frame item={galleryItems[3]} delay={0.15} />
          <Frame item={galleryItems[4]} delay={0.25} />
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-32 text-center"
        >
        </motion.div>

      </div>
    </div>
  )
}

export default Gallery
