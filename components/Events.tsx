'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    date: { day: '12', month: 'JUN', year: '2026' },
    title: 'Bluestack Farm Dinner',
    subtitle: 'Farm-to-Table Experience',
    description:
      'An exclusive evening celebrating the Dexter beef of Bluestack Farm. A six-course menu with producer insights and wine pairing.',
    details: '6 Courses · Wine Pairing · €120pp',
    availability: 'Limited — 8 seats remaining',
  },
  {
    date: { day: '25', month: 'JUN', year: '2026' },
    title: 'Midsummer Tasting Menu',
    subtitle: 'Seasonal Chef\'s Table',
    description:
      'Brian McMonagle presents a special midsummer menu celebrating the peak of Donegal\'s seasonal bounty. An unmissable evening.',
    details: '7 Courses · Champagne Reception · €145pp',
    availability: 'Limited — 12 seats remaining',
  },
  {
    date: { day: '14', month: 'JUL', year: '2026' },
    title: 'Bastille Day Dinner',
    subtitle: 'French-Irish Fusion Evening',
    description:
      'A celebration of the finest traditions of French and Irish cuisine, featuring local Donegal produce prepared through French classical technique.',
    details: '5 Courses · Wine Pairing · €95pp',
    availability: 'Booking open',
  },
  {
    date: { day: '09', month: 'AUG', year: '2026' },
    title: 'Donegal Harvest Festival',
    subtitle: 'Celebration Dinner',
    description:
      'The annual Harvest Festival dinner marking the transition from summer to autumn. A tribute to Donegal\'s farming and fishing community.',
    details: '6 Courses · Local Producers · €110pp',
    availability: 'Booking open',
  },
]

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group luxury-border bg-noir-900 p-8 hover:bg-noir-800/80 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex gap-8">
        {/* Date */}
        <div className="flex-shrink-0 text-center w-14 border-r border-gold/15 pr-6">
          <div className="font-serif text-4xl text-gold leading-none mb-1">{event.date.day}</div>
          <div className="font-sans text-cream/40 text-xs tracking-widest-2">{event.date.month}</div>
          <div className="font-sans text-cream/30 text-xs tracking-widest mt-1">{event.date.year}</div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-3">
            <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors duration-300 mb-1">
              {event.title}
            </h3>
            <p className="font-sans text-gold/60 text-sm italic">{event.subtitle}</p>
          </div>

          <p className="font-sans text-cream/55 text-sm leading-relaxed mb-4">{event.description}</p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-sans text-cream/50 text-xs tracking-widest border border-gold/20 px-3 py-1">
                {event.details}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-gold/50 text-xs">{event.availability}</span>
              <a
                href="#reservations"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-sans text-cream/50 text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300 border border-cream/10 hover:border-gold/30 px-3 py-1.5"
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export default function Events() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="events" className="section-padding bg-noir-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">Events</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-cream leading-none font-light mb-4"
          >
            Upcoming
            <br />
            <em className="gold-gradient-text">Evenings</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-cream/50 text-base max-w-xl mx-auto leading-relaxed"
          >
            Special evenings that celebrate the finest of Donegal&apos;s producers, seasons, and culinary traditions.
          </motion.p>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
