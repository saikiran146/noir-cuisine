'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

type MenuItem = {
  name: string
  description: string
  price: string
  note?: string
}

type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      { name: 'Donegal Bay Scallops', description: 'Hand-dived scallops, cauliflower purée, caviar, cultured butter, sea herbs', price: '€24', note: 'Seasonal' },
      { name: 'Beef Tartare', description: 'Bluestack Farm Dexter, smoked egg yolk, pickled shallot, toasted sourdough', price: '€18' },
      { name: 'Smoked Salmon Velouté', description: 'Atlantic smoked salmon, dill cream, potato foam, salmon roe', price: '€16' },
      { name: 'Heritage Beetroot', description: "Roasted heritage beets, goat's cheese mousse, candied walnut, balsamic gel", price: '€14', note: 'Vegetarian' },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      { name: 'Bluestack Dexter Tenderloin', description: 'Dry-aged beef, truffle jus, root vegetable terrine, bone marrow butter, wild herbs', price: '€42', note: "Chef's Special" },
      { name: 'Wild Atlantic Halibut', description: 'Herb-crusted fillet, saffron broth, sea vegetables, samphire, citrus beurre blanc', price: '€38' },
      { name: 'Donegal Mountain Lamb Rack', description: 'Pistachio & herb crust, rosemary jus, roasted root vegetables, lamb fat potatoes', price: '€40' },
      { name: 'Pan-roasted Pheasant Breast', description: 'Wild pheasant, black pudding farce, game jus, celeriac remoulade', price: '€36', note: 'Seasonal' },
      { name: 'Wild Mushroom Risotto', description: "Forager's selection, aged Parmesan, truffle oil, crispy sage", price: '€28', note: 'Vegetarian' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Dark Chocolate Délice', description: 'Valrhona 70%, salted caramel, hazelnut praline, vanilla ice cream', price: '€14' },
      { name: 'Lemon Verbena Parfait', description: 'Garden herb parfait, elderflower gel, summer berry compote, meringue', price: '€12' },
      { name: 'Irish Farmhouse Cheese', description: 'Selection of three cheeses, sourdough crackers, fruit chutney, honeycomb', price: '€16' },
      { name: 'Petit Fours', description: 'A selection of handmade chocolates, candied citrus, and mignardises', price: '€8' },
    ],
  },
  {
    id: 'tasting',
    label: 'Tasting',
    items: [
      { name: '5-Course Tasting Menu', description: "Chef Brian's curated seasonal journey through the finest Donegal produce. Wine pairing available.", price: '€85', note: 'Per person · Full table' },
      { name: 'Wine Pairing', description: 'Sommelier selected wines to complement each course of the tasting menu', price: '€55', note: 'Per person' },
      { name: 'Vegetarian Tasting Menu', description: 'A five-course celebration of seasonal vegetables, fungi and heritage grains', price: '€72', note: 'Per person · 48hr notice' },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })
  const activeMenu = menuData.find((c) => c.id === activeCategory)

  return (
    <section id="menu" className="section-padding bg-warm-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">À La Carte</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-noir-800 leading-none font-light mb-3"
          >
            The Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-noir-500 text-base"
          >
            Menu changes seasonally to reflect the finest local produce.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-px mb-10 bg-stone-100 p-px max-w-lg mx-auto border border-stone-200"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-7 py-3 font-sans text-xs tracking-widest uppercase transition-all duration-300 flex-1 min-w-[90px] ${
                activeCategory === cat.id
                  ? 'bg-noir-800 text-white'
                  : 'bg-white text-noir-500 hover:text-noir-800 hover:bg-stone/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="divide-y divide-stone-100"
          >
            {activeMenu?.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group flex items-start justify-between gap-6 py-7 px-4 -mx-4 hover:bg-white rounded-sm transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-serif text-xl text-noir-800 group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.note && (
                      <span className="font-sans text-gold-dark text-xs tracking-widest border border-gold/25 px-2 py-0.5">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-noir-500 text-sm leading-relaxed max-w-lg">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-serif text-gold text-xl">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-stone-200 text-center space-y-2"
        >
          <p className="font-sans text-noir-400 text-xs tracking-widest">
            Allergen information available on request · Service charge not included
          </p>
          <p className="font-sans text-noir-300 text-xs italic">
            Menu is subject to seasonal change · All prices include VAT
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
