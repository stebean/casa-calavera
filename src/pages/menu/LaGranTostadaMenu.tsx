import { motion } from 'framer-motion'
import { SkullIcon } from '../../components/Skulls'

// ─── Paleta: oscuro cálido + dorado ──────────────────────────
const BG = '#0d0b07'   // negro cálido
const GOLD = '#eab308'   // brand-yellow
const CREAM = '#f5f0e8'   // crema para texto secundario
// ─────────────────────────────────────────────────────────────

interface MenuItem {
  name: string
  desc?: string
  price?: string
  S?: string   // chico / 7pz
  L?: string   // grande / 10pz
  sLabel?: string
  lLabel?: string
}

// ── Sub-components ────────────────────────────────────────────

const GoldDivider = () => (
  <div className="flex items-center gap-3 my-5">
    <div className="flex-1 h-px" style={{ backgroundColor: `${GOLD}50` }} />
    <SkullIcon index={4} className="w-4 h-4" color={GOLD} />
    <div className="flex-1 h-px" style={{ backgroundColor: `${GOLD}50` }} />
  </div>
)

const Item = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-start gap-4 py-2.5 border-b" style={{ borderColor: `${GOLD}15` }}>
    <div className="flex gap-2 flex-1">
      {/* Bullet dorado */}
      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
      <div>
        <p className="text-base font-black uppercase tracking-tight leading-snug" style={{ color: CREAM }}>
          {item.name}
        </p>
        {item.desc && (
          <p className="text-xs mt-0.5 leading-snug font-medium" style={{ color: `${CREAM}60` }}>
            {item.desc}
          </p>
        )}
      </div>
    </div>
    {/* Precio */}
    {item.price && (
      <span className="font-black text-lg shrink-0 tabular-nums" style={{ color: GOLD }}>
        {item.price}
      </span>
    )}
    {(item.S || item.L) && (
      <div className="flex gap-3 shrink-0">
        {item.S && <span className="font-black text-lg tabular-nums" style={{ color: GOLD }}>{item.S}</span>}
        {item.L && <span className="font-black text-lg tabular-nums" style={{ color: GOLD }}>{item.L}</span>}
      </div>
    )}
  </div>
)

const SectionHeader = ({
  title,
  sLabel,
  lLabel,
}: {
  title: string
  sLabel?: string
  lLabel?: string
}) => (
  <div className="mb-3">
    <div className="flex items-end justify-between">
      <h2
        className="text-2xl font-black uppercase tracking-widest"
        style={{ color: GOLD, textShadow: `0 0 20px ${GOLD}40` }}
      >
        {title}
      </h2>
      {(sLabel || lLabel) && (
        <div className="flex gap-3 text-[10px] font-black uppercase pb-1" style={{ color: `${GOLD}70` }}>
          {sLabel && <span>{sLabel}</span>}
          {lLabel && <span>{lLabel}</span>}
        </div>
      )}
    </div>
    <div className="h-0.5 mt-1" style={{ backgroundColor: GOLD, boxShadow: `0 0 8px ${GOLD}60` }} />
  </div>
)

// ── Tarjeta especial para alitas/boneless ──────────────────────
const WingCard = ({
  name,
  desc,
  s,
  l,
}: {
  name: string
  desc: string
  s: string
  l: string
}) => (
  <div
    className="border-2 p-4 mb-4"
    style={{ borderColor: `${GOLD}40`, backgroundColor: `${GOLD}08` }}
  >
    <div className="flex gap-2 mb-1">
      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
      <p className="font-black uppercase text-base" style={{ color: CREAM }}>{name}</p>
    </div>
    <p className="text-xs ml-3.5 mb-3" style={{ color: `${CREAM}55` }}>{desc}</p>
    <div className="flex gap-6 ml-3.5">
      <div className="text-center">
        <p className="text-xs font-black uppercase" style={{ color: `${GOLD}70` }}>7 piezas</p>
        <p className="text-2xl font-black" style={{ color: GOLD }}>{s}</p>
      </div>
      <div className="text-center">
        <p className="text-xs font-black uppercase" style={{ color: `${GOLD}70` }}>10 piezas</p>
        <p className="text-2xl font-black" style={{ color: GOLD }}>{l}</p>
      </div>
    </div>
  </div>
)

// ════════════════════════════════════════════════════════════
// DATOS
// ════════════════════════════════════════════════════════════

const tostadas: MenuItem[] = [
  { name: 'Carne Desmenusada', price: '$70', desc: 'Tortilla frita, res, frijoles, lechuga, tomate + complementos.' },
  { name: 'Carne Asada', price: '$90', desc: 'Tortilla frita, lechuga, frijoles, guacamole, cebolla asada, salchicha para asar + complementos.' },
  { name: 'Pollo', price: '$80', desc: 'Fajitas de pollo asado, tortilla frita, frijoles, lechuga, tomate + complementos.' },
  { name: 'Carne Arrachera', price: '$125', desc: 'Tortilla frita, lechuga, frijoles, guacamole, cebolla asada, salchicha para asar + complementos.' },
]

const tacos: MenuItem[] = [
  { name: 'Camarón Capeado', price: '$110', desc: 'Acompañados de lechuga, tomate + complementos.' },
  { name: 'Camarón Ranchero', price: '$115', desc: 'Chile, tomate, cebolla, queso y complementos.' },
  { name: 'Asada', price: '$85', desc: 'Carne asada, cebolla asada + complementos.' },
  { name: 'Arrachera', price: '$120', desc: 'Cebolla asada, guacamole + complementos.' },
  { name: 'Adobada', price: '$80', desc: 'Cebolla asada + complementos.' },
]

const tostadasJerez: MenuItem[] = [
  { name: 'Cuerito Curtido', price: '$40' },
  { name: 'Trompa', price: '$45' },
  { name: 'Tosticarnes', price: '$60', desc: 'Tortilla frita, carnitas de puerco + complementos.' },
  { name: 'Combinada', price: '$45', desc: 'Cuero curtido + trompa.' },
  { name: 'Doricueros', price: '$65' },
  { name: 'Tosticueros', price: '$65' },
]

const tortas: MenuItem[] = [
  { name: 'Asada', price: '$70', desc: 'Carne asada, lechuga, guacamole, cebollita asada, salchicha asada + complementos.' },
  { name: 'Adobada', price: '$65', desc: 'Lechuga, cebolla asada + complementos.' },
  { name: 'Arrachera', price: '$85', desc: 'Lechuga, guacamole, cebolla asada, salchicha asada + complementos.' },
]

const hamburguesas: MenuItem[] = [
  { name: 'Sencilla', price: '$70', desc: 'Carne, lechuga, tomate, cebolla, jamón, queso + complementos.' },
  { name: 'Especial', price: '$75', desc: 'Carne, lechuga, tomate, cebolla, jamón, queso blanco, queso amarillo, salchicha + complementos.' },
  { name: 'Doble', price: '$95', desc: 'Doble carne, doble jamón, queso blanco y amarillo, tomate, lechuga y cebolla.' },
  { name: 'Hawaiana', price: '$85', desc: 'Piña, carne, lechuga, tomate, cebolla, jamón, queso blanco, queso amarillo + complementos.' },
  { name: 'Parrillera', price: '$110', desc: 'Carne, lechuga, tomate, cebolla, para asar, jamón, queso blanco y amarillo, cebolla asada, guacamole + complementos.' },
]

const mariscos: MenuItem[] = [
  { name: 'Cóctel de Camarón', S: '$70', L: '$110' },
  { name: 'Cóctel Mixto', S: '$85', L: '$120', desc: 'Pulpo, camarón, pescado.' },
  { name: 'Tostada de Camarón', price: '$55' },
  { name: 'Tostada Ceviche Camarón', price: '$60' },
  { name: 'Tostada Ceviche Pescado', price: '$45' },
  { name: 'Tostada Mixta', price: '$60', desc: 'Camarón, pulpo, pescado.' },
  { name: 'Doricamarones', price: '$75', desc: 'Ceviche de camarón + Doritos.' },
  { name: 'Tosticamarones', price: '$75' },
  { name: 'Aguachile', price: '$120' },
]

const bebidas: MenuItem[] = [
  { name: 'Jugo del Valle 600ml', price: '$35' },
  { name: 'Refresco 600ml', price: '$35' },
  { name: 'Agua Mineral 600ml', price: '$35' },
  { name: 'Agua Natural 1L', price: '$30' },
  { name: 'Agua de Limón / Horchata / Chabela', price: '$45' },
  { name: 'Limonada Mineral', price: '$45' },
  { name: 'Limonada Sprite', price: '$45' },
  { name: 'Naranjada', price: '$45' },
]

// ════════════════════════════════════════════════════════════
// PÁGINA
// ════════════════════════════════════════════════════════════

const LaGranTostadaMenu = () => {
  return (
    <div
      className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Glow ambiental ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${GOLD}18 0%, transparent 70%)`,
          filter: 'blur(50px)',
        }}
      />

      {/* ── Skull watermarks ── */}
      <div className="absolute top-24 right-2 opacity-[0.04] pointer-events-none rotate-12">
        <SkullIcon index={0} className="w-64 h-64" color={GOLD} />
      </div>
      <div className="absolute bottom-20 left-0 opacity-[0.03] pointer-events-none -rotate-6">
        <SkullIcon index={6} className="w-56 h-56" color={GOLD} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: -60, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="mb-12"
        >
          {/* Cuadro negro con dorado — identidad del proyecto */}
          <div
            className="inline-block relative overflow-hidden transform -rotate-1 border-b-4 border-r-4 mb-6"
            style={{ borderColor: GOLD, backgroundColor: '#000' }}
          >
            {/* Skull dentro del cuadro */}
            <div className="absolute bottom-2 right-2 opacity-15 pointer-events-none">
              <SkullIcon index={2} className="w-32 h-32" color={GOLD} />
            </div>
            <div className="px-8 py-6 relative z-10">
              <h1
                className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
                style={{ color: GOLD, textShadow: `0 0 40px ${GOLD}50` }}
              >
                La Gran<br />Tostada
              </h1>
              <p className="italic font-serif text-xl mt-2" style={{ color: `${GOLD}90` }}>
                Come, bebe y disfruta.
              </p>
            </div>
          </div>
        </motion.header>

        {/* ── Grid 2 columnas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">

          {/* COLUMNA IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 100, damping: 14 }}
          >
            <SectionHeader title="Tostadas" />
            {tostadas.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            <SectionHeader title="Tacos" />
            {tacos.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            <SectionHeader title="Hamburguesas" />
            {hamburguesas.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            {/* Órdenes — tarjetas especiales */}
            <SectionHeader title="Órdenes" />
            <WingCard
              name="Alitas"
              desc="BBQ · Habanero (se puede conjunto). Con o sin papas a la francesa."
              s="$70"
              l="$125"
            />
            <WingCard
              name="Boneless"
              desc="BBQ · Habanero (sin hueso, se puede conjunto). Con o sin papas a la francesa."
              s="$70"
              l="$130"
            />
          </motion.div>

          {/* COLUMNA DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <SectionHeader title="Tostadas Estilo Jerez" />
            {tostadasJerez.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            <SectionHeader title="Tortas" />
            {tortas.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            <SectionHeader title="Mariscos" sLabel="Chico" lLabel="Grande" />
            {mariscos.map((i) => <Item key={i.name} item={i} />)}

            <GoldDivider />

            <SectionHeader title="Bebidas" />
            {bebidas.map((i) => <Item key={i.name} item={i} />)}
          </motion.div>
        </div>

        {/* ── Footer decorativo ── */}
        <div className="mt-16 flex justify-center gap-4 opacity-20">
          {Array(5).fill(0).map((_, i) => (
            <SkullIcon
              key={i}
              index={i % 9}
              className="w-8 h-8"
              color={GOLD}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LaGranTostadaMenu
