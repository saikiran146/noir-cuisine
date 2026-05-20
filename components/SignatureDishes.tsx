'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const dishes = [
  {
    number: '01',
    name: 'Bluestack Dexter',
    subtitle: 'Dry-aged Beef Tenderloin',
    description:
      'Slow-roasted Dexter beef from Bluestack Farm, served with truffle jus, root vegetable terrine, and wild herb oil.',
    tags: ['Bluestack Farm', 'Donegal'],
    gradient: 'from-noir-800 via-noir-700 to-noir-800',
    accentColor: 'rgba(201, 169, 110, 0.15)',
  },
  {
    number: '02',
    name: 'Donegal Bay Scallops',
    subtitle: 'Pan-seared Hand-dived',
    description:
      'Hand-dived scallops from Donegal Bay, caramelised with cultured butter, cauliflower purée, and caviar.',
    tags: ['Donegal Bay', 'Seasonal'],
    gradient: 'from-noir-900 via-noir-800 to-noir-900',
    accentColor: 'rgba(201, 169, 110, 0.1)',
  },
  {
    number: '03',
    name: 'Wild Atlantic Halibut',
    subtitle: 'Herb-crusted Fillet',
    description:
      'Atlantic halibut in a delicate saffron broth, with sea vegetables, samphire, and a citrus beurre blanc.',
    tags: ['Wild Caught', 'Atlantic'],
    gradient: 'from-noir-800 via-noir-700 to-noir-800',
    accentColor: 'rgba(201, 169, 110, 0.12)',
  },
  {
    number: '04',
    name: 'Donegal Lamb Rack',
    subtitle: 'Herb & Pistachio Crusted',
    description:
      'Rack of Donegal mountain lamb with a pistachio and herb crust, rosemary jus, and seasonal root vegetables.',
    tags: ['Donegal Highland', 'Heritage'],
    gradient: 'from-noir-900 via-noir-800 to-noir-900',
    accentColor: 'rgba(201, 169, 110, 0.08)',
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
      transition={{
        delay: index * 0.15,
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative luxury-border bg-noir-900 overflow-hidden"
    >
      {/* Dish visual */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${dish.gradient} transition-transform duration-700 group-hover:scale-105`}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 50% 50%, ${dish.accentColor} 0%, transparent 70%)` }}
        />
        {/* Dish number */}
        <div className="absolute top-4 left-4 font-serif text-6xl font-light text-cream/5 leading-none select-none">
          {dish.number}
        </div>
        {/* Center ornament */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/60" />
            </div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-2xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
              {dish.name}
            </h3>
            <p className="font-sans text-gold/60 text-sm italic">{dish.subtitle}</p>
          </div>
          <span className="font-sans text-cream/20 text-xs tracking-widest mt-1">{dish.number}</span>
        </div>

        <p className="font-sans text-cream/60 text-sm leading-relaxed mb-5">{dish.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-cream/40 text-xs tracking-widest border border-cream/10 px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-6 h-px bg-gold/30 group-hover:w-10 group-hover:bg-gold/60 transition-all duration-400" />
        </div>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export default function SignatureDishes() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-noir-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">Signature Creations</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-none font-light mb-6"
          >
            Crafted with
            <br />
            <em className="gold-gradient-text">Intent</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-cream/50 text-lg max-w-xl mx-auto leading-relaxed"
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
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-3 font-sans text-gold/70 text-xs tracking-widest-2 uppercase hover:text-gold transition-colors duration-300 group"
          >
            <span>Explore Full Menu</span>
            <span className="block w-8 h-px bg-gold/40 group-hover:w-12 group-hover:bg-gold transition-all duration-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
