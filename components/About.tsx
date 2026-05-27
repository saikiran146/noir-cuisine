'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '2026', label: 'Yes Chef Award' },
  { value: '9', label: 'Market Square' },
  { value: '5★', label: 'Dining Experience' },
  { value: '100%', label: 'Local Sourcing' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-stone relative overflow-hidden luxury-border card-shadow">
                <Image
                  src="/images/location.jpg"
                  alt="No. 9 Market Square, Letterkenny"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-800/40 via-transparent to-transparent" />
              </div>

              {/* Floating award card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -right-6 bg-white border border-gold/25 p-6 w-52 shadow-card"
              >
                <div className="font-serif text-gold text-3xl mb-1">2026</div>
                <div className="font-sans text-noir-500 text-xs tracking-widest uppercase leading-snug">
                  Best Food Destination<br />Yes Chef Award
                </div>
              </motion.div>

              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-stone-200" />
            </div>
          </motion.div>

          {/* Right content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-10 h-px bg-gold/50" />
                <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">Our Story</span>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-noir-800 leading-none font-light mb-6">
                A Home,<br />
                <em className="gold-gradient-text">Not Just</em><br />
                a Restaurant
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-5"
            >
              <p className="font-sans text-noir-600 text-lg leading-relaxed">
                No. 9 Market Square is not just a restaurant. It&apos;s my home — a place where I pour
                every ounce of passion and craft into each plate that leaves the kitchen. Situated in
                the heart of Letterkenny, we celebrate the extraordinary produce of Donegal.
              </p>
              <p className="font-sans text-noir-500 text-base leading-relaxed">
                From the rolling hills of Bluestack Farm comes our exceptional Dexter beef, raised
                with care and tradition. Every dish tells a story of the land, the sea, and the
                people who nurture this remarkable corner of Ireland.
              </p>
              <p className="font-sans text-noir-500 text-base leading-relaxed italic">
                <em>&ldquo;Bia le hanam — Food with soul.&rdquo;</em>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 pt-2"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="border-l-2 border-gold/30 pl-4"
                >
                  <div className="font-serif text-gold text-2xl mb-0.5">{stat.value}</div>
                  <div className="font-sans text-noir-500 text-xs tracking-widest uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-2"
            >
              <div className="ornament-divider">
                <span className="text-noir-400 text-xs tracking-widest font-sans uppercase whitespace-nowrap">
                  9 Market Square · Letterkenny · Co. Donegal
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
