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
  { day: 'Tuesday – Wednesday', time: 'Closed' },
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

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer ref={ref} className="bg-noir-900 pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-gold/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="mb-5">
              <div className="font-serif text-gold text-3xl tracking-widest-2 leading-none mb-1">No. 9</div>
              <div className="font-sans text-cream/40 text-xs tracking-widest-3 uppercase">Market Square</div>
            </div>
            <p className="font-sans text-cream/45 text-sm leading-relaxed mb-5">
              Award-winning fine dining in the heart of Letterkenny, Co. Donegal. Celebrating the
              extraordinary produce of Ireland&apos;s northwest.
            </p>
            <div className="inline-flex items-center gap-2 border border-gold/20 px-4 py-2">
              <span className="text-gold text-xs">★</span>
              <span className="font-sans text-cream/50 text-xs tracking-widest">Yes Chef Award 2026</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h4 className="font-sans text-cream/60 text-xs tracking-widest-3 uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="font-sans text-cream/45 text-sm hover:text-gold transition-colors duration-300 tracking-widest"
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
            <h4 className="font-sans text-cream/60 text-xs tracking-widest-3 uppercase mb-5">Opening Hours</h4>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li key={item.day} className="flex flex-col gap-0.5">
                  <span className="font-sans text-cream/45 text-xs">{item.day}</span>
                  <span className={`font-sans text-sm ${item.time === 'Closed' ? 'text-cream/25' : 'text-gold/70'}`}>
                    {item.time}
                  </span>
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
            <h4 className="font-sans text-cream/60 text-xs tracking-widest-3 uppercase mb-5">Contact</h4>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-sans text-cream/45 text-xs mb-1">Address</p>
                <address className="font-sans text-cream/60 text-sm not-italic leading-relaxed">
                  9 Market Square<br />
                  Letterkenny<br />
                  Co. Donegal, F92 D593
                </address>
              </div>
              <div>
                <p className="font-sans text-cream/45 text-xs mb-1">Phone</p>
                <a href="tel:0749204756" className="font-sans text-cream/60 text-sm hover:text-gold transition-colors duration-300">
                  (074) 920 4756
                </a>
              </div>
              <div>
                <p className="font-sans text-cream/45 text-xs mb-1">Email</p>
                <a href="mailto:info@no9marketsquare.com" className="font-sans text-cream/60 text-sm hover:text-gold transition-colors duration-300">
                  info@no9marketsquare.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-cream/60 text-xs tracking-widest-3 uppercase mb-3">Follow Us</h4>
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <span className="font-sans text-cream/30 text-xs tracking-widest">{social.label}</span>
                    <span className="font-sans text-cream/50 text-xs group-hover:text-gold transition-colors duration-300">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 h-36 bg-noir-800 border border-gold/10 flex items-center justify-center relative overflow-hidden"
        >
          <div className="text-center">
            <p className="font-sans text-cream/30 text-xs tracking-widest-2 uppercase mb-2">9 Market Square · Letterkenny · Co. Donegal</p>
            <p className="font-sans text-cream/20 text-xs">F92 D593</p>
          </div>
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(201,169,110,0.3) 30px, rgba(201,169,110,0.3) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(201,169,110,0.3) 30px, rgba(201,169,110,0.3) 31px)',
            }}
          />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gold/10"
        >
          <p className="font-sans text-cream/25 text-xs tracking-widest">
            © {new Date().getFullYear()} No. 9 Market Square. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="block w-4 h-px bg-gold/20" />
            <span className="font-sans text-cream/20 text-xs tracking-widest italic">Bia le hanam</span>
            <span className="block w-4 h-px bg-gold/20" />
          </div>
          <p className="font-sans text-cream/20 text-xs tracking-widest">
            Letterkenny · Co. Donegal · Ireland
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
