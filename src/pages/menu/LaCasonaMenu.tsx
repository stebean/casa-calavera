import { motion } from 'framer-motion'
import { SkullIcon } from '../../components/Skulls'

// ─── Neon accent palette (uno por sección) ───────────────────
const N = {
  pink: '#ff2d78',
  cyan: '#00d4ff',
  purple: '#bf00ff',
  green: '#00ff88',
  yellow: '#ffe600',
  red: '#ff3b30',
  amber: '#ffaa00',
}

// ─── Sub-components ──────────────────────────────────────────

interface MenuItem {
  name: string
  star?: boolean
  sub?: string      // (marca/tipo) en paréntesis
  M?: string
  L?: string
  price?: string
}

const NeonDivider = ({ color }: { color: string }) => (
  <div
    className="w-full h-0.5 my-6 rounded-full"
    style={{
      backgroundColor: color,
      boxShadow: `0 0 8px ${color}, 0 0 20px ${color}60`,
    }}
  />
)

const Price = ({ label, color }: { label: string; color: string }) => (
  <span
    className="font-black text-sm tabular-nums"
    style={{ color, textShadow: `0 0 8px ${color}80` }}
  >
    {label}
  </span>
)

const Item = ({ item, color }: { item: MenuItem; color: string }) => (
  <div className="flex justify-between items-start gap-3 py-2 border-b border-white/5">
    <div className="flex-1">
      <p className="text-base font-black uppercase tracking-tight text-white leading-tight">
        {item.star && (
          <span className="mr-1" style={{ color: N.yellow }}>★</span>
        )}
        {item.name}
      </p>
      {item.sub && (
        <p className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: color, opacity: 0.65 }}>
          {item.sub}
        </p>
      )}
    </div>
    <div className="flex items-center gap-4 shrink-0 pt-0.5">
      {item.M && <Price label={item.M} color={color} />}
      {item.L && <Price label={item.L} color={color} />}
      {item.price && !item.M && <Price label={item.price} color={color} />}
    </div>
  </div>
)

const Section = ({
  tagline,
  title,
  items,
  color,
  delay = 0,
}: {
  tagline?: string
  title: string
  items: MenuItem[]
  color: string
  delay?: number
}) => {
  const hasSizes = items.some((i) => i.M && i.L)
  return (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="mb-2"
  >
    <NeonDivider color={color} />
    {tagline && (
      <p
        className="text-xs font-black uppercase tracking-[0.2em] mb-1 italic"
        style={{ color, textShadow: `0 0 10px ${color}60` }}
      >
        {tagline}
      </p>
    )}
    <h2
      className="text-lg font-black uppercase tracking-widest mb-3"
      style={{ color, textShadow: `0 0 12px ${color}70` }}
    >
      {title}
    </h2>

    {/* Encabezado de columnas M / L */}
    {hasSizes && (
      <div className="flex justify-end gap-4 mb-1 pr-0.5">
        <span className="text-[10px] font-black uppercase w-10 text-center" style={{ color, opacity: 0.7, textShadow: `0 0 8px ${color}, 0 0 16px ${color}80` }}>M</span>
        <span className="text-[10px] font-black uppercase w-10 text-center" style={{ color, opacity: 0.7, textShadow: `0 0 8px ${color}, 0 0 16px ${color}80` }}>L</span>
      </div>
    )}

    <div>
      {items.map((item) => (
        <Item key={item.name} item={item} color={color} />
      ))}
    </div>
  </motion.section>
  )
}

// ════════════════════════════════════════════════════════════
// DATOS
// ════════════════════════════════════════════════════════════

const chelas: MenuItem[] = [
  { name: 'Medias', price: '$35' },
  { name: 'Cubeta', price: '$200' },
  { name: 'Chavela', sub: 'Chelada', M: '$45', L: '$75' },
  { name: 'Cráneo Rojo', sub: 'Toro Rojo', M: '$65', L: '$85', star: true },
  { name: 'Volcán', sub: 'Michelada', M: '$65', L: '$85' },
  { name: 'Diablito', sub: 'Clamato', M: '$65', L: '$85' },
]

const bebidasCasa: MenuItem[] = [
  { name: 'Cubanito', M: '$85' },
  { name: 'Purpuchela', M: '$65', L: '$85' },
  { name: 'Vampiro en la Galería', M: '$65', L: '$85' },
  { name: 'Diablita', M: '$65', L: '$85' },
]

const pistea: MenuItem[] = [
  { name: 'Piña Colada', sub: 'Bacardi', M: '$70', L: '$140' },
  { name: 'Pantera Rosa', sub: 'Bacardi', M: '$70', L: '$140' },
  { name: 'Perla Negra', sub: 'Jäger', M: '$70', L: '$140' },
  { name: 'Mezcalina', sub: 'Mezcal', M: '$60', L: '$80' },
  { name: 'Cielo Rosa', sub: 'Mezcal', M: '$60', L: '$80' },
  { name: 'Coqueta', sub: 'Tequila', M: '$70', L: '$140', star: true },
]

const paraTuEx: MenuItem[] = [
  { name: 'Sombra Azteca', sub: 'Jäger', M: '$70', L: '$140', star: true },
  { name: 'Nave del Olvido', sub: 'Bacardi', M: '$70', L: '$130' },
  { name: 'La Santita', sub: 'Vodka', M: '$70', L: '$130' },
  { name: 'Jellyfish', sub: 'Vodka', M: '$70', L: '$130' },
  { name: 'Beso de Vampiro', sub: 'Tequila', M: '$70', L: '$140' },
  { name: 'Apple Whisky', sub: 'Jack Daniels', M: '$75', L: '$150', star: true },
]

const tequilas: MenuItem[] = [
  { name: 'Cuba Tradicional', M: '$70', L: '$130' },
  { name: 'Paloma', M: '$70', L: '$140' },
  { name: 'Vampiro', M: '$70', L: '$140' },
  { name: 'Tequila Sunrise', M: '$70', L: '$140' },
  { name: 'Mango Tequilero', M: '$70', L: '$140', star: true },
  { name: 'Coqueta', M: '$70', L: '$140' },
  { name: 'Charro Negro', M: '$70', L: '$130' },
]

const portarnosMal: MenuItem[] = [
  { name: 'Azulito', M: '$70', L: '$130' },
  { name: 'Moradito', M: '$70', L: '$130' },
  { name: 'Manguito', M: '$70', L: '$130', star: true },
  { name: 'Pitufina', M: '$70', L: '$130' },
  { name: 'Ultravioleta', M: '$70', L: '$130' },
  { name: 'Piña Eléctrica', M: '$70', L: '$130' },
  { name: 'Bloody Mary', M: '$70', L: '$130' },
]

const whisky: MenuItem[] = [
  { name: 'Jack en las Rocas', price: '$75' },
  { name: 'Jack Cola', M: '$75', L: '$150' },
  { name: 'Jack Té Negro', M: '$75', L: '$150' },
  { name: 'Jack Mineral', M: '$75', L: '$150' },
  { name: 'Jack Ginger', M: '$75', L: '$150' },
  { name: 'Red Label Mineral', M: '$70', L: '$140' },
  { name: 'Red Label Azul', M: '$70', L: '$140' },
  { name: 'Red Label Manzano', M: '$70', L: '$140', star: true },
]

const shots: MenuItem[] = [
  { name: 'Mezcal', sub: 'de la casa', M: '$50', L: '$60' },
  { name: 'Tequila', sub: 'José Cuervo', M: '$50', L: '$60' },
  { name: 'Vampiro', sub: 'Tequila y Sangrita', M: '$50', L: '$60' },
  { name: 'Mamadas', sub: 'Vodka, Crema Batida y Curaçao', M: '$50', L: '$60' },
  { name: 'Red Label', sub: 'Whisky', M: '$50', L: '$60' },
]

// ════════════════════════════════════════════════════════════
// PÁGINA
// ════════════════════════════════════════════════════════════

const LaCasonaMenu = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 bg-background relative overflow-hidden">

      {/* ── Glow ambiental de fondo ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${N.purple}18 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${N.pink}12 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* ── Skull decorativo fondo ── */}
      <div className="absolute top-16 right-4 opacity-[0.04] pointer-events-none">
        <SkullIcon index={2} className="w-72 h-72" color={N.cyan} />
      </div>
      <div className="absolute bottom-24 left-0 opacity-[0.03] pointer-events-none">
        <SkullIcon index={5} className="w-64 h-64" color={N.purple} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9, skewX: -4 }}
          animate={{ opacity: 1, scale: 1, skewX: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 16 }}
          className="text-center mb-4"
        >

          {/* Skull con glow multicolor */}
          <div className="flex justify-center mb-4">
            <div
              className="relative"
              style={{ filter: `drop-shadow(0 0 16px ${N.pink}) drop-shadow(0 0 32px ${N.purple}60)` }}
            >
              <SkullIcon index={3} className="w-20 h-20" color="#ffffff" />
            </div>
          </div>

          <h1
            className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-none"
            style={{
              color: '#ffffff',
              textShadow: `0 0 30px ${N.cyan}60, 0 0 60px ${N.purple}30`,
            }}
          >
            La Casona
          </h1>
        </motion.header>

        {/* ── Leyenda M / L ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs font-black uppercase tracking-[0.3em] mb-2"
          style={{ color: 'rgba(255,255,255,0.25)' }}
        >
          Precios: M = Mediano · L = Grande
        </motion.p>

        {/* ── Grid de dos columnas en desktop ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">

          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <Section
              title="Chelas"
              items={chelas}
              color={N.cyan}
              delay={0.1}
            />
            <Section
              title="Bebidas de la Casa con Chela"
              items={bebidasCasa}
              color={N.green}
              delay={0.15}
            />
            <Section
              tagline="No te estreses, mejor pistea!!"
              title="Cocteles"
              items={pistea}
              color={N.pink}
              delay={0.2}
            />
            <Section
              tagline="Para que le hables a tu ex...!!!"
              title="Especiales de la Casa"
              items={paraTuEx}
              color={N.purple}
              delay={0.25}
            />
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <Section
              tagline="Si la vida te da limones, pide sal y tequila!"
              title="Tequileros"
              items={tequilas}
              color={N.amber}
              delay={0.15}
            />
            <Section
              tagline="Vamos a portarnos mal!"
              title="Tragos de Colores"
              items={portarnosMal}
              color={N.purple}
              delay={0.2}
            />
            <Section
              tagline="A falta de amor, otro whisky por favor!!"
              title="Whiskies"
              items={whisky}
              color={N.yellow}
              delay={0.25}
            />
            <Section
              title="Shots"
              items={shots}
              color={N.red}
              delay={0.3}
            />

            {/* Nota: Solo preparados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <NeonDivider color={N.red} />
              <p
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: N.red, textShadow: `0 0 10px ${N.red}70` }}
              >
                Solo preparados
                <span className="ml-4 font-black text-white">$20 · $25</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Estrella leyenda ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-bold mt-12 tracking-widest uppercase"
          style={{ color: N.yellow, opacity: 0.5 }}
        >
          ★ Recomendados de la casa
        </motion.p>
      </div>
    </div>
  )
}

export default LaCasonaMenu
