'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const dishes = [
  {
    number: '01',
    name: 'Bluestack Dexter',
    subtitle: 'Dry-aged Beef Tenderloin',
    description: 'Slow-roasted Dexter beef from Bluestack Farm, served with truffle jus, root vegetable terrine, and wild herb oil.',
    tags: ['Bluestack Farm', 'Donegal'],
    bg: 'bg-stone',
    accent: 'rgba(201,169,110,0.15)',
  },
  {
    number: '02',
    name: 'Donegal Bay Scallops',
    subtitle: 'Pan-seared Hand-dived',
    description: 'Hand-dived scallops from Donegal Bay, caramelised with cultured butter, cauliflower purée, and caviar.',
    tags: ['Donegal Bay', 'Seasonal'],
    bg: 'bg-cream',
    accent: 'rgba(201,169,110,0.1)',
  },
  {
    number: '03',
    name: 'Wild Atlantic Halibut',
    subtitle: 'Herb-crusted Fillet',
    description: 'Atlantic halibut in a delicate saffron broth, with sea vegetables, samphire, and a citrus beurre blanc.',
    tags: ['Wild Caught', 'Atlantic'],
    bg: 'bg-stone',
    accent: 'rgba(201,169,110,0.12)',
  },
  {
    number: '04',
    name: 'Donegal Lamb Rack',
    subtitle: 'Herb & Pistachio Crusted',
    description: 'Rack of Donegal mountain lamb with a pistachio and herb crust, rosemary jus, and seasonal root vegetables.',
    tags: ['Donegal Highland', 'Heritage'],
    bg: 'bg-cream',
    accent: 'rgba(201,169,110,0.08)',
  },
]

function DishCard({ dish, index }: { dish: typeof dishes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white luxury-border card-shadow overflow-hidden"
    >
      {/* Dish visual */}
      <div className={`aspect-[4/3] relative overflow-hidden ${dish.bg}`}>
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, #F5F0E8 0%, #EBE4D9 50%, #F2EDE5 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 50% 50%, ${dish.accent} 0%, transparent 70%)` }}
        />
        {/* Number watermark */}
        <div className="absolute top-3 left-4 font-serif text-7xl font-light text-noir-800/5 leading-none select-none">
          {dish.number}
        </div>
        {/* Plate ornament */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity duration-500">
          <div className="w-20 h-20 rounded-full border border-gold/50 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/60" />
            </div>
          </div>
        </div>
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        {/* Gold hover shimmer */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-2xl text-noir-800 mb-1 group-hover:text-gold transition-colors duration-300">
              {dish.name}
            </h3>
            <p className="font-sans text-gold-dark text-sm italic">{dish.subtitle}</p>
          </div>
          <span className="font-sans text-noir-300 text-xs tracking-widest mt-1">{dish.number}</span>
        </div>

        <p className="font-sans text-noir-500 text-sm leading-relaxed mb-5">{dish.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {dish.tags.map((tag) => (
              <span key={tag} className="font-sans text-noir-400 text-xs tracking-widest border border-stone-200 px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="w-6 h-px bg-gold/30 group-hover:w-10 group-hover:bg-gold/60 transition-all duration-400" />
        </div>
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export default function SignatureDishes() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">Signature Creations</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-noir-800 leading-none font-light mb-5"
          >
            Crafted with
            <br />
            <em className="gold-gradient-text">Intent</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-noir-500 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Each dish is a celebration of Donegal&apos;s finest ingredients, transformed through
            classical technique and creative vision.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <DishCard key={dish.number} dish={dish} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-3 font-sans text-noir-500 text-xs tracking-widest-2 uppercase hover:text-gold transition-colors duration-300 group"
          >
            <span>Explore Full Menu</span>
            <span className="block w-8 h-px bg-noir-300 group-hover:w-12 group-hover:bg-gold transition-all duration-400" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
