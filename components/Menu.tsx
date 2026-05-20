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
      {
        name: 'Donegal Bay Scallops',
        description: 'Hand-dived scallops, cauliflower purée, caviar, cultured butter, sea herbs',
        price: '€24',
        note: 'Seasonal',
      },
      {
        name: 'Beef Tartare',
        description: 'Bluestack Farm Dexter, smoked egg yolk, pickled shallot, toasted sourdough',
        price: '€18',
      },
      {
        name: 'Smoked Salmon Velouté',
        description: 'Atlantic smoked salmon, dill cream, potato foam, salmon roe',
        price: '€16',
      },
      {
        name: 'Heritage Beetroot',
        description: "Roasted heritage beets, goat’s cheese mousse, candied walnut, balsamic gel",
        price: '€14',
        note: 'Vegetarian',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      {
        name: 'Bluestack Dexter Tenderloin',
        description: 'Dry-aged beef, truffle jus, root vegetable terrine, bone marrow butter, wild herbs',
        price: '€42',
        note: "Chef's Special",
      },
      {
        name: 'Wild Atlantic Halibut',
        description: 'Herb-crusted fillet, saffron broth, sea vegetables, samphire, citrus beurre blanc',
        price: '€38',
      },
      {
        name: 'Donegal Mountain Lamb Rack',
        description: 'Pistachio & herb crust, rosemary jus, roasted root vegetables, lamb fat potatoes',
        price: '€40',
      },
      {
        name: 'Pan-roasted Pheasant Breast',
        description: 'Wild pheasant, black pudding farce, game jus, celeriac remoulade',
        price: '€36',
        note: 'Seasonal',
      },
      {
        name: 'Wild Mushroom Risotto',
        description: "Forager's selection, aged Parmesan, truffle oil, crispy sage",
        price: '€28',
        note: 'Vegetarian',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Dark Chocolate Délice',
        description: 'Valrhona 70%, salted caramel, hazelnut praline, vanilla ice cream',
        price: '€14',
      },
      {
        name: 'Lemon Verbena Parfait',
        description: 'Garden herb parfait, elderflower gel, summer berry compote, meringue',
        price: '€12',
      },
      {
        name: 'Irish Farmhouse Cheese',
        description: 'Selection of three cheeses, sourdough crackers, fruit chutney, honeycomb',
        price: '€16',
      },
      {
        name: 'Petit Fours',
        description: 'A selection of handmade chocolates, candied citrus, and mignardises',
        price: '€8',
      },
    ],
  },
  {
    id: 'tasting',
    label: 'Tasting Menu',
    items: [
      {
        name: '5-Course Tasting Menu',
        description: 'Chef Brian\'s curated seasonal journey through the finest Donegal produce. Wine pairing available.',
        price: '€85',
        note: "Per person · Full table",
      },
      {
        name: 'Wine Pairing',
        description: 'Sommelier selected wines to complement each course of the tasting menu',
        price: '€55',
        note: 'Per person',
      },
      {
        name: 'Vegetarian Tasting Menu',
        description: 'A five-course celebration of seasonal vegetables, fungi and heritage grains',
        price: '€72',
        note: 'Per person · 48hr notice',
      },
    ],
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  const activeMenu = menuData.find((c) => c.id === activeCategory)

  return (
    <section id="menu" className="section-padding bg-noir-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">À La Carte</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-cream leading-none font-light mb-4"
          >
            The Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-cream/50 text-base leading-relaxed"
          >
            Menu changes seasonally to reflect the finest local produce.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-1 mb-12 border border-gold/10 p-1 max-w-xl mx-auto"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 font-sans text-xs tracking-widest uppercase transition-all duration-300 flex-1 min-w-[100px] ${
                activeCategory === category.id
                  ? 'bg-gold text-noir-950'
                  : 'text-cream/50 hover:text-cream'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="divide-y divide-gold/10"
          >
            {activeMenu?.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex items-start justify-between gap-6 py-7 hover:bg-noir-800/40 -mx-4 px-4 transition-colors duration-300 rounded-sm"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.note && (
                      <span className="font-sans text-gold/60 text-xs tracking-widest border border-gold/20 px-2 py-0.5">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-cream/50 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
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
          className="mt-12 pt-8 border-t border-gold/10 text-center space-y-2"
        >
          <p className="font-sans text-cream/35 text-xs tracking-widest">
            Allergen information available on request · Service charge not included
          </p>
          <p className="font-sans text-cream/30 text-xs tracking-widest italic">
            Menu is subject to seasonal change · All prices include VAT
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
