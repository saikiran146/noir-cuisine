'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    text: 'An extraordinary dining experience that I will never forget. Brian McMonagle is a true artist — every plate that arrived at our table was a masterpiece. The Bluestack Dexter beef was unlike anything I have tasted before.',
    author: 'Siobhán O\'Brien',
    location: 'Dublin',
    rating: 5,
  },
  {
    text: 'No. 9 Market Square is the jewel of Donegal\'s culinary scene. The attention to detail, the warmth of service, and the sheer quality of the produce made this one of the finest meals we\'ve had anywhere in Ireland.',
    author: 'Conor & Áine Murphy',
    location: 'Galway',
    rating: 5,
  },
  {
    text: 'We celebrated our anniversary here and it was absolutely perfect. The tasting menu was a voyage through Donegal — intimate, creative, and deeply satisfying. Worth every euro and every mile of the drive.',
    author: 'James Thornton',
    location: 'Belfast',
    rating: 5,
  },
  {
    text: 'If there\'s one restaurant you visit in Ireland this year, make it No. 9. Chef Brian\'s scallops are the finest I\'ve ever had — simple, perfectly cooked, and elevated by extraordinary local ingredients.',
    author: 'Marie-Claire Dubois',
    location: 'Paris',
    rating: 5,
  },
  {
    text: 'The Yes Chef Award for Best Food Destination is richly deserved. This restaurant represents everything good about modern Irish cuisine — respectful of tradition, fearless in execution, and utterly delicious.',
    author: 'Fergal Kelly',
    location: 'Cork',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-noir-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">Testimonials</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-cream leading-none font-light"
          >
            Voices of
            <br />
            <em className="gold-gradient-text">Our Guests</em>
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative min-h-[280px]"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-4 sm:px-12"
            >
              <div className="flex justify-center mb-6">
                <Stars count={testimonials[current].rating} />
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-cream/85 leading-relaxed italic mb-8 font-light">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-gold/80 text-sm tracking-widest">
                  {testimonials[current].author}
                </span>
                <span className="font-sans text-cream/40 text-xs tracking-widest">
                  {testimonials[current].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={() => navigate(-1)}
              className="font-sans text-cream/30 hover:text-gold transition-colors duration-300 text-2xl"
              aria-label="Previous"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 ${
                    i === current ? 'w-8 h-px bg-gold' : 'w-2 h-px bg-cream/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="font-sans text-cream/30 hover:text-gold transition-colors duration-300 text-2xl"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
