'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function ChefStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const quoteY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section id="chef" ref={sectionRef} className="section-padding bg-noir-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-3"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-12 h-px bg-gold/50" />
                <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">The Chef</span>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-none font-light mb-4">
                Brian
                <br />
                <em className="text-gold/80">McMonagle</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-5"
            >
              <p className="font-sans text-cream/70 text-lg leading-relaxed">
                A Letterkenny native with a deep passion for his homeland&apos;s produce, Brian
                McMonagle has built No. 9 Market Square into one of Ireland&apos;s most celebrated
                dining destinations.
              </p>
              <p className="font-sans text-cream/60 text-base leading-relaxed">
                After years working in acclaimed kitchens across Ireland and Europe, Brian returned
                home with a singular vision: to create a restaurant that honours the extraordinary
                quality of Donegal&apos;s ingredients while applying the finest classical techniques.
              </p>
              <p className="font-sans text-cream/60 text-base leading-relaxed">
                His relationship with local farmers, fishermen, and foragers forms the backbone of
                every menu — a living expression of this remarkable landscape. In 2026, his vision was
                recognised with the Yes Chef National Award for Best Food Destination Restaurant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {['Local Sourcing', 'Classical Technique', 'Seasonal Menu', 'Award-Winning'].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-cream/50 text-xs tracking-widest border border-gold/20 px-4 py-2 hover:border-gold/40 hover:text-gold/70 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Chef portrait placeholder */}
            <div className="aspect-[3/4] bg-noir-800 relative overflow-hidden luxury-border">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 50%, #111111 100%)',
                }}
              />
              {/* Silhouette / placeholder */}
              <div className="absolute inset-0 flex items-end justify-center pb-12">
                <div className="text-center space-y-3">
                  <div
                    className="w-28 h-28 rounded-full mx-auto"
                    style={{
                      background: 'linear-gradient(135deg, rgba(201,169,110,0.15), rgba(201,169,110,0.05))',
                      border: '1px solid rgba(201,169,110,0.2)',
                    }}
                  />
                  <div className="font-serif text-cream/40 text-lg">Brian McMonagle</div>
                  <div className="font-sans text-gold/40 text-xs tracking-widest uppercase">Head Chef & Owner</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating quote */}
            <motion.div
              style={{ y: quoteY }}
              className="absolute -left-8 bottom-16 max-w-xs bg-noir-900/95 border-l-2 border-gold p-6 shadow-gold-glow backdrop-blur-sm"
            >
              <p className="font-serif text-lg text-cream/80 italic leading-relaxed mb-4">
                &ldquo;No. 9 Market Square is not just a restaurant. It&apos;s my home — a place where
                I pour every ounce of passion and craft into each plate.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-gold/40" />
                <span className="font-sans text-gold/60 text-xs tracking-widest uppercase">Brian McMonagle</span>
              </div>
            </motion.div>

            {/* Corner accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gold/20" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
