'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#chef' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Reservations', href: '#reservations' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            className="flex flex-col items-start"
          >
            <span className="font-serif text-gold text-xl tracking-widest-2 leading-none">No. 9</span>
            <span className={`font-sans text-xs tracking-widest-3 uppercase transition-colors duration-500 ${scrolled ? 'text-noir-600' : 'text-noir-600'}`}>
              Market Square
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="font-sans text-noir-600 hover:text-gold text-sm tracking-widest uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:0749204756"
              className="font-sans text-noir-500 text-xs tracking-widest hover:text-gold transition-colors duration-300"
            >
              (074) 920 4756
            </a>
            <a
              href="#reservations"
              onClick={(e) => { e.preventDefault(); scrollTo('#reservations') }}
              className="px-6 py-2.5 bg-noir-900 text-white font-sans text-xs tracking-widest uppercase hover:bg-gold transition-all duration-400"
            >
              Reserve
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-noir-800 origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-noir-800" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-noir-800 origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="font-serif text-4xl text-noir-800 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 text-center">
              <p className="font-sans text-noir-400 text-sm tracking-widest">(074) 920 4756</p>
              <p className="font-sans text-gold/70 text-xs tracking-widest mt-1">info@no9marketsquare.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
