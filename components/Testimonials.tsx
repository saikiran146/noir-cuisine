'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    text: "An extraordinary dining experience that I will never forget. Brian McMonagle is a true artist — every plate that arrived at our table was a masterpiece. The Bluestack Dexter beef was unlike anything I have tasted before.",
    author: "Siobhán O'Brien",
    location: 'Dublin',
    rating: 5,
  },
  {
    text: "No. 9 Market Square is the jewel of Donegal's culinary scene. The attention to detail, the warmth of service, and the sheer quality of the produce made this one of the finest meals we've had anywhere in Ireland.",
    author: 'Conor & Áine Murphy',
    location: 'Galway',
    rating: 5,
  },
  {
    text: "We celebrated our anniversary here and it was absolutely perfect. The tasting menu was a voyage through Donegal — intimate, creative, and deeply satisfying. Worth every euro and every mile of the drive.",
    author: 'James Thornton',
    location: 'Belfast',
    rating: 5,
  },
  {
    text: "If there's one restaurant you visit in Ireland this year, make it No. 9. Chef Brian's scallops are the finest I've ever had — simple, perfectly cooked, and elevated by extraordinary local ingredients.",
    author: 'Marie-Claire Dubois',
    location: 'Paris',
    rating: 5,
  },
  {
    text: "The Yes Chef Award for Best Food Destination is richly deserved. This restaurant represents everything good about modern Irish cuisine — respectful of tradition, fearless in execution, and utterly delicious.",
    author: 'Fergal Kelly',
    location: 'Cork',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setCurrent((p) => (p + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const navigate = (dir: number) => {
    setDirection(dir)
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">Testimonials</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-noir-800 leading-none font-light"
          >
            Voices of
            <br />
            <em className="gold-gradient-text">Our Guests</em>
          </motion.h2>
        </div>

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
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-4 sm:px-10"
            >
              <div className="flex justify-center gap-1 mb-7">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-noir-700 leading-relaxed italic mb-8 font-light">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-gold-dark text-sm tracking-widest">{testimonials[current].author}</span>
                <span className="font-sans text-noir-400 text-xs tracking-widest">{testimonials[current].location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={() => navigate(-1)}
              className="text-noir-400 hover:text-gold transition-colors duration-300 text-2xl w-10 h-10 flex items-center justify-center border border-stone-200 hover:border-gold/30"
              aria-label="Previous"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-px transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'w-2 bg-stone-300'}`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="text-noir-400 hover:text-gold transition-colors duration-300 text-2xl w-10 h-10 flex items-center justify-center border border-stone-200 hover:border-gold/30"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
