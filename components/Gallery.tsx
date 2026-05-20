'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  { id: 1, span: 'col-span-2 row-span-2', label: 'The Kitchen', gradient: 'from-noir-700 via-noir-800 to-noir-700', accent: 'rgba(201,169,110,0.12)' },
  { id: 2, span: 'col-span-1 row-span-1', label: 'Bluestack Beef', gradient: 'from-noir-800 to-noir-900', accent: 'rgba(201,169,110,0.08)' },
  { id: 3, span: 'col-span-1 row-span-1', label: 'Scallop Dish', gradient: 'from-noir-900 to-noir-800', accent: 'rgba(201,169,110,0.06)' },
  { id: 4, span: 'col-span-1 row-span-2', label: 'The Dining Room', gradient: 'from-noir-700 to-noir-900', accent: 'rgba(201,169,110,0.1)' },
  { id: 5, span: 'col-span-1 row-span-1', label: 'Market Square', gradient: 'from-noir-800 via-noir-700 to-noir-800', accent: 'rgba(201,169,110,0.09)' },
  { id: 6, span: 'col-span-1 row-span-1', label: 'Dessert Creation', gradient: 'from-noir-900 to-noir-800', accent: 'rgba(201,169,110,0.07)' },
]

function GalleryCell({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`${item.span} relative overflow-hidden group luxury-border`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${item.accent} 0%, transparent 70%)` }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-noir-950/90 to-transparent">
        <p className="font-sans text-cream/80 text-xs tracking-widest uppercase">{item.label}</p>
      </div>

      {/* Ornament */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="section-padding bg-noir-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">Gallery</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-cream leading-none font-light mb-4"
          >
            The World of
            <br />
            <em className="gold-gradient-text">No. 9</em>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] sm:h-[700px] lg:h-[800px]">
          {galleryItems.map((item, i) => (
            <GalleryCell key={item.id} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/no9marketsquare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-gold/70 text-xs tracking-widest-2 uppercase hover:text-gold transition-colors duration-300 group"
          >
            <span>Follow @no9marketsquare</span>
            <span className="block w-8 h-px bg-gold/40 group-hover:w-12 group-hover:bg-gold transition-all duration-400" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
