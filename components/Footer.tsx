'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socialLinks = [
  { label: 'Instagram', handle: '@no9marketsquare', href: 'https://instagram.com/no9marketsquare' },
  { label: 'Facebook', handle: 'No. 9 Market Square', href: 'https://facebook.com' },
  { label: 'Twitter / X', handle: '@marketlanelk', href: 'https://twitter.com/marketlanelk' },
]

const hours = [
  { day: 'Thursday – Saturday', time: '5:00 PM – 9:00 PM' },
  { day: 'Sunday', time: '5:00 PM – 8:00 PM' },
  { day: 'Monday', time: '5:00 PM – 9:00 PM' },
  { day: 'Tuesday – Wednesday', time: 'Closed', closed: true },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#chef' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Reservations', href: '#reservations' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer ref={ref} className="bg-noir-900 pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5">
              <div className="font-serif text-gold text-3xl tracking-widest-2 leading-none mb-1">No. 9</div>
              <div className="font-sans text-white/40 text-xs tracking-widest-3 uppercase">Market Square</div>
            </div>
            <p className="font-sans text-white/45 text-sm leading-relaxed mb-5">
              Award-winning fine dining in the heart of Letterkenny, Co. Donegal. Celebrating the extraordinary produce of Ireland&apos;s northwest.
            </p>
            <div className="inline-flex items-center gap-2 border border-gold/25 px-4 py-2">
              <span className="text-gold text-xs">★</span>
              <span className="font-sans text-white/50 text-xs tracking-widest">Yes Chef Award 2026</span>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h4 className="font-sans text-white/50 text-xs tracking-widest-3 uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="font-sans text-white/45 text-sm hover:text-gold transition-colors duration-300 tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h4 className="font-sans text-white/50 text-xs tracking-widest-3 uppercase mb-5">Opening Hours</h4>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li key={item.day}>
                  <span className="font-sans text-white/35 text-xs block">{item.day}</span>
                  <span className={`font-sans text-sm ${item.closed ? 'text-white/25' : 'text-gold/70'}`}>{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h4 className="font-sans text-white/50 text-xs tracking-widest-3 uppercase mb-5">Contact</h4>
            <div className="space-y-4 mb-7">
              <div>
                <p className="font-sans text-white/35 text-xs mb-1">Address</p>
                <address className="font-sans text-white/55 text-sm not-italic leading-relaxed">
                  9 Market Square<br />Letterkenny<br />Co. Donegal, F92 D593
                </address>
              </div>
              <div>
                <p className="font-sans text-white/35 text-xs mb-1">Phone</p>
                <a href="tel:0749204756" className="font-sans text-white/55 text-sm hover:text-gold transition-colors duration-300">(074) 920 4756</a>
              </div>
              <div>
                <p className="font-sans text-white/35 text-xs mb-1">Email</p>
                <a href="mailto:info@no9marketsquare.com" className="font-sans text-white/55 text-sm hover:text-gold transition-colors duration-300">info@no9marketsquare.com</a>
              </div>
            </div>
            <h4 className="font-sans text-white/50 text-xs tracking-widest-3 uppercase mb-3">Follow Us</h4>
            <div className="space-y-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <span className="font-sans text-white/30 text-xs">{s.label}</span>
                  <span className="font-sans text-white/50 text-xs group-hover:text-gold transition-colors duration-300">{s.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-white/25 text-xs tracking-widest">
            © {new Date().getFullYear()} No. 9 Market Square. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="block w-4 h-px bg-gold/20" />
            <span className="font-sans text-white/20 text-xs tracking-widest italic">Bia le hanam</span>
            <span className="block w-4 h-px bg-gold/20" />
          </div>
          <p className="font-sans text-white/20 text-xs tracking-widest">Letterkenny · Co. Donegal · Ireland</p>
        </motion.div>
      </div>
    </footer>
  )
}
