'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin()

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
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      '.hero-award',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power3.inOut' },
        '-=0.4'
      )
      .fromTo(
        '.hero-sub',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.2'
      )
  }, { scope: containerRef })

  const title1 = 'No. 9'
  const title2 = 'Market'
  const title3 = 'Square'

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir-950"
    >
      {/* Background layers */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-noir-950/40 via-noir-950/60 to-noir-950 z-10" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201, 169, 110, 0.06) 0%, transparent 70%),
              linear-gradient(180deg, #0a0a0a 0%, #050505 100%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,169,110,0.3) 80px, rgba(201,169,110,0.3) 81px)',
          }}
        />
      </motion.div>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Award badge */}
        <div className="hero-award opacity-0 inline-flex items-center gap-3 mb-12">
          <span className="block w-8 h-px bg-gold/60" />
          <span className="font-sans text-gold/80 text-xs tracking-widest-3 uppercase">
            Yes Chef Award · Best Food Destination 2026
          </span>
          <span className="block w-8 h-px bg-gold/60" />
        </div>

        {/* Main title */}
        <div ref={titleRef} className="overflow-hidden mb-2">
          <div className="flex justify-center gap-3 sm:gap-5">
            {title1.split('').map((char, i) => (
              <motion.span
                key={`t1-${i}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-7xl sm:text-9xl lg:text-[11rem] leading-none tracking-tight text-cream font-light inline-block"
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="hero-line w-px h-16 bg-gold/40 mx-auto my-4 origin-top" />

        <div className="overflow-hidden mb-2">
          <div className="flex justify-center gap-2 sm:gap-4">
            {title2.split('').map((char, i) => (
              <motion.span
                key={`t2-${i}`}
                custom={i + 4}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-5xl sm:text-7xl lg:text-9xl leading-none tracking-widest text-cream/90 font-light inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mb-10">
          <div className="flex justify-center gap-2 sm:gap-4">
            {title3.split('').map((char, i) => (
              <motion.span
                key={`t3-${i}`}
                custom={i + 10}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="font-serif text-5xl sm:text-7xl lg:text-9xl leading-none tracking-widest text-cream/90 font-light inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-sub opacity-0 font-sans text-cream/50 text-lg sm:text-xl italic tracking-wide mb-12 max-w-lg mx-auto">
          Fine Dining · Letterkenny, Co. Donegal
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservations"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hero-cta opacity-0 px-10 py-4 bg-gold text-noir-950 font-sans text-xs tracking-widest-2 uppercase hover:bg-gold-light transition-colors duration-400 min-w-[180px] text-center"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hero-cta opacity-0 px-10 py-4 border border-gold/30 text-cream/80 font-sans text-xs tracking-widest-2 uppercase hover:border-gold hover:text-gold transition-all duration-400 min-w-[180px] text-center"
          >
            View Menu
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="hero-scroll opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-sans text-cream/30 text-xs tracking-widest-3 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/20 pointer-events-none" />
    </section>
  )
}
