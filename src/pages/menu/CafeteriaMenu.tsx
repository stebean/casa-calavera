import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { SkullIcon } from '../../components/Skulls'

// ─── Paleta ──────────────────────────────────────────────────
const BG  = '#edf1e8'
const INK = '#1a3d28'
// ─────────────────────────────────────────────────────────────

interface MenuItem {
  name: string
  desc?: string
  M?: string
  G?: string    // "Grande" / "L"
  price?: string
}

// ── Sub-components ────────────────────────────────────────────

const PriceBadge = ({ label }: { label: string }) => (
  <span
    className="inline-block px-3 py-1 text-sm font-black tracking-wide text-white shrink-0 ml-2"
    style={{ backgroundColor: INK }}
  >
    {label}
  </span>
)

const Item = ({ item }: { item: MenuItem }) => (
  <div
    className="flex justify-between items-start border-b pb-3 gap-4"
    style={{ borderColor: `${INK}22` }}
  >
    <div className="flex-1">
      <h3 className="text-xl font-black uppercase tracking-tight leading-tight" style={{ color: INK }}>
        {item.name}
      </h3>
      {item.desc && (
        <p className="text-xs mt-0.5 leading-snug font-medium" style={{ color: INK, opacity: 0.55 }}>
          {item.desc}
        </p>
      )}
    </div>
    <div className="flex gap-2 shrink-0 items-start pt-0.5">
      {item.M && <PriceBadge label={item.M} />}
      {item.G && <PriceBadge label={item.G} />}
      {item.price && !item.M && <PriceBadge label={item.price} />}
    </div>
  </div>
)

const Section = ({
  title,
  items,
  delay = 0,
  note,
}: {
  title: string
  items: MenuItem[]
  delay?: number
  note?: string
}) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.45 }}
    className="mb-10"
  >
    <h2
      className="text-sm font-black uppercase tracking-[0.25em] border-b-2 pb-1 mb-4"
      style={{ color: INK, borderColor: INK }}
    >
      {title}
    </h2>
    <div className="space-y-3">
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </div>
    {note && (
      <p className="text-xs mt-4 font-medium opacity-50" style={{ color: INK }}>
        {note}
      </p>
    )}
  </motion.section>
)

// ── Calaveritas de fondo ──────────────────────────────────────
const SkullBg = () => (
  <>
    {[
      { top: '5%',  right: '1%',  tw: 'w-48 h-48', rotate: 12,  opacity: 0.06 },
      { top: '28%', left: '-2%',  tw: 'w-40 h-40', rotate: -8,  opacity: 0.05 },
      { top: '55%', right: '0%',  tw: 'w-56 h-56', rotate: 20,  opacity: 0.05 },
      { top: '78%', left: '4%',   tw: 'w-36 h-36', rotate: -15, opacity: 0.06 },
      { top: '48%', right: '7%',  tw: 'w-24 h-24', rotate: 5,   opacity: 0.04 },
    ].map((s, i) => (
      <div
        key={i}
        className="absolute pointer-events-none select-none"
        style={{
          top: s.top,
          right: (s as any).right,
          left:  (s as any).left,
          opacity: s.opacity,
          transform: `rotate(${s.rotate}deg)`,
        }}
      >
        <SkullIcon index={i % 9} className={s.tw} color={INK} />
      </div>
    ))}
  </>
)

// ════════════════════════════════════════════════════════════
// DATOS — CAFETERÍA
// ════════════════════════════════════════════════════════════
const cafeFrioCaliente: MenuItem[] = [
  { name: 'Catrina',   M: '$60',          desc: 'Expresso, mazapán, leche cremosa, chocolate y crema batida.' },
  { name: 'Calavera',  M: '$45', G: '$55', desc: 'Tostado oscuro endulzado con rompope.' },
  { name: 'Maestro',   M: '$40', G: '$50', desc: 'Exclusivo de Casa Calavera. Mezcla de tres granos tostados a diferente intensidad.' },
  { name: 'Nocturno',  M: '$40', G: '$50', desc: 'Americano · tostado oscuro.' },
  { name: 'Calaquita', price: '$45',       desc: 'Chocolate, expresso y crema batida.' },
  { name: 'Soleil',    price: '$45',       desc: 'Café dulce con naranja y limón.' },
  { name: 'Halito',    price: '$45',       desc: 'Café dulce con menta y limón.' },
]

const vinoFrescos: MenuItem[] = [
  { name: 'Hueso Seco',    price: '$60', desc: 'Café dulce con esencia de mezcal.' },
  { name: 'Carnesí',       price: '$50', desc: 'Tinto dulce y expresso.' },
  { name: 'Sangrita Cero', price: '$55', desc: 'Frutos rojos, sodas y sangría.' },
  { name: 'Sangrita Vino', price: '$65' },
  { name: 'Tinto de Dalí', price: '$60' },
  { name: 'Alebrijes',     price: '$30', desc: 'Sodas caseras con fruta: Piña colada, Arándano, Mango y Naranja.' },
]

const waffles: MenuItem[] = [
  { name: 'Don Quijote', price: '$60', desc: 'Galleta con chispas, fresa, crema batida y chocolate líquido.' },
  { name: 'Posada',      price: '$60', desc: 'Brownie, galleta, crema batida, fresas y chocolate líquido.' },
  { name: 'Da Vinci',    price: '$60', desc: 'Nuez, cajeta, ralladura de naranja y canela.' },
  { name: 'Pachita',     price: '$60', desc: 'Fresas, azúcar glass y miel maple.' },
  { name: 'Mona Lisa',   price: '$65', desc: 'Dos quesos, pepperoni, salsa de tomate y champiñones.' },
  { name: 'Van Gogh',    price: '$60', desc: 'Dos quesos, doritos y tocino.' },
  { name: 'Picasso',     price: '$60', desc: 'Dos quesos, tocino y BBQ.' },
  { name: 'Grinberg',    price: '$65', desc: 'Jamón caramelizado, espinaca y miel maple.' },
]

// ════════════════════════════════════════════════════════════
// DATOS — CERVECERÍA
// ════════════════════════════════════════════════════════════
const bebidasCasa: MenuItem[] = [
  { name: 'Cubanito',            M: '$85',          desc: 'Cerveza, salsas, clamato (ingrediente de la casa) y fruta tropical.' },
  { name: 'Purpuchela',          M: '$65', G: '$85', desc: 'Cerveza, limón y vino tinto.' },
  { name: 'Vampiro en la Galería', M: '$65', G: '$85', desc: 'Receta agridulce de la casa.' },
  { name: 'Medias',              price: '$35' },
  { name: 'Megas',               price: '$75' },
  { name: 'Chavela',             M: '$45', G: '$75', desc: 'Cerveza, limón y sal.' },
  { name: 'Cráneo Rojo',         M: '$65', G: '$85', desc: 'Michelada + Clamato.' },
  { name: 'Volcán',              M: '$65', G: '$65', desc: 'Michelada.' },
  { name: 'Diablito',            M: '$65', G: '$85', desc: 'Clamato.' },
]

const botanas: MenuItem[] = [
  { name: 'Croqueliarte',        price: '$45', desc: 'Cuero botanero, cuero curtido, limón y salsa.' },
  { name: 'Salchipapas',         price: '$45' },
  { name: 'Papas a la Francesa', price: '$30' },
  { name: 'Pulpos',              price: '$50', desc: 'Salchicha frita acompañada de aderezo a elección.' },
  { name: 'Banderilla Flamin Hot', price: '$35' },
]

// ════════════════════════════════════════════════════════════
// PÁGINA
// ════════════════════════════════════════════════════════════
const CafeteriaMenu = () => {
  const [params, setParams] = useSearchParams()
  const seccion = params.get('seccion') ?? 'cafeteria'
  const isCafe  = seccion !== 'cerveceria'

  const switchTo = (s: 'cafeteria' | 'cerveceria') => {
    setParams({ seccion: s })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      <SkullBg />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.header
          key={seccion + '-header'}
          initial={{ opacity: 0, scale: 0.88, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-black tracking-[0.35em] uppercase mb-3"
            style={{ color: INK, opacity: 0.45 }}
          >
            Café · Cerveza · Arte & Corazón
          </p>

          <div className="flex items-center justify-center gap-6 mb-1">
            <div className="flex-1 h-px" style={{ backgroundColor: `${INK}35` }} />
            <SkullIcon index={0} className="w-10 h-10 opacity-50" color={INK} />
            <div className="flex-1 h-px" style={{ backgroundColor: `${INK}35` }} />
          </div>

          <h1
            className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-none mb-4"
            style={{ color: INK }}
          >
            {isCafe ? 'Cafetería' : 'Cervecería'}
          </h1>

          {/* ── Switch link ── */}
          <button
            onClick={() => switchTo(isCafe ? 'cerveceria' : 'cafeteria')}
            className="text-sm font-black uppercase tracking-widest underline underline-offset-4 transition-opacity hover:opacity-100"
            style={{ color: INK, opacity: 0.4 }}
          >
            {isCafe ? 'Ver menú de cervezas →' : '← Ver menú de cafetería'}
          </button>
        </motion.header>

        {/* ── Contenido ── */}
        <AnimatePresence mode="wait">
          {isCafe ? (
            <motion.div
              key="cafeteria"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16"
            >
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.22,1,0.36,1] }}>
                <Section title="Café Frío / Caliente" items={cafeFrioCaliente} delay={0.05} />
                <Section title="Vino y Frescos"       items={vinoFrescos}      delay={0.1} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: [0.22,1,0.36,1] }}>
                <Section title="Waffles Dulces / Salados" items={waffles} delay={0.08} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="cerveceria"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16"
            >
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.22,1,0.36,1] }}>
                <Section title="Bebidas de la Casa" items={bebidasCasa} delay={0.05} />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: [0.22,1,0.36,1] }}>
                <Section
                  title="Para Platicar · Botanas"
                  items={botanas}
                  delay={0.08}
                  note="Aderezos: Ketchup · Mayonesa · BBQ · Salsa picante"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default CafeteriaMenu
