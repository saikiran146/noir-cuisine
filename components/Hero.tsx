'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.hero-badge', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .fromTo('.hero-line', { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power3.inOut' }, '-=0.3')
      .fromTo('.hero-sub', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')
  }, { scope: containerRef })

  const title1 = 'No. 9'
  const title2 = 'Market'
  const title3 = 'Square'

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, #C9A96E 60px, #C9A96E 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #C9A96E 60px, #C9A96E 61px)',
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Award badge */}
        <div className="hero-badge opacity-0 inline-flex items-center gap-3 mb-10 px-5 py-2 border border-gold/25 bg-gold/5">
          <span className="text-gold text-xs">★</span>
          <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">
            Yes Chef Award · Best Food Destination 2026
          </span>
          <span className="text-gold text-xs">★</span>
        </div>

        {/* Main title */}
        <motion.div style={{ y }} className="mb-2">
          <div className="flex justify-center gap-3 sm:gap-5">
            {title1.split('').map((char, i) => (
              <motion.span
                key={`t1-${i}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-7xl sm:text-9xl lg:text-[10rem] leading-none font-light text-noir-800 inline-block"
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-4 my-5">
          <div className="hero-line w-24 h-px bg-gold/40 origin-left" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="hero-line w-24 h-px bg-gold/40 origin-right" />
        </div>

        <div className="mb-2">
          <div className="flex justify-center gap-2 sm:gap-4">
            {title2.split('').map((char, i) => (
              <motion.span
                key={`t2-${i}`}
                custom={i + 4}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none tracking-widest text-noir-700 font-light inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex justify-center gap-2 sm:gap-4">
            {title3.split('').map((char, i) => (
              <motion.span
                key={`t3-${i}`}
                custom={i + 10}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none tracking-widest text-noir-700 font-light inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-sub opacity-0 font-sans text-noir-500 text-lg sm:text-xl italic tracking-wide mb-12 max-w-md mx-auto">
          Fine Dining · Letterkenny, Co. Donegal
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservations"
            onClick={(e) => { e.preventDefault(); document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hero-cta opacity-0 px-10 py-4 bg-noir-800 text-white font-sans text-xs tracking-widest-2 uppercase hover:bg-gold transition-colors duration-400 min-w-[190px] text-center"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="hero-cta opacity-0 px-10 py-4 border border-noir-200 text-noir-700 font-sans text-xs tracking-widest-2 uppercase hover:border-gold hover:text-gold transition-all duration-400 min-w-[190px] text-center"
          >
            View Menu
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="hero-scroll opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-sans text-noir-400 text-xs tracking-widest-3 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      {/* Corner marks */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-stone-200 pointer-events-none" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-stone-200 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-stone-200 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-stone-200 pointer-events-none" />
    </section>
  )
}
