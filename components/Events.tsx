'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    date: { day: '12', month: 'JUN', year: '2026' },
    title: 'Bluestack Farm Dinner',
    subtitle: 'Farm-to-Table Experience',
    description: 'An exclusive evening celebrating the Dexter beef of Bluestack Farm. A six-course menu with producer insights and wine pairing.',
    details: '6 Courses · Wine Pairing · €120pp',
    availability: 'Limited — 8 seats remaining',
    urgent: true,
  },
  {
    date: { day: '25', month: 'JUN', year: '2026' },
    title: 'Midsummer Tasting Menu',
    subtitle: "Seasonal Chef's Table",
    description: "Brian McMonagle presents a special midsummer menu celebrating the peak of Donegal's seasonal bounty.",
    details: '7 Courses · Champagne Reception · €145pp',
    availability: 'Limited — 12 seats remaining',
    urgent: true,
  },
  {
    date: { day: '14', month: 'JUL', year: '2026' },
    title: 'Bastille Day Dinner',
    subtitle: 'French-Irish Fusion Evening',
    description: 'A celebration of French and Irish culinary traditions, featuring local Donegal produce through French classical technique.',
    details: '5 Courses · Wine Pairing · €95pp',
    availability: 'Booking open',
    urgent: false,
  },
  {
    date: { day: '09', month: 'AUG', year: '2026' },
    title: 'Donegal Harvest Festival',
    subtitle: 'Celebration Dinner',
    description: "The annual Harvest Festival dinner marking the transition from summer to autumn. A tribute to Donegal's farming and fishing community.",
    details: '6 Courses · Local Producers · €110pp',
    availability: 'Booking open',
    urgent: false,
  },
]

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white luxury-border card-shadow overflow-hidden relative"
    >
      <div className="flex gap-0">
        {/* Date column */}
        <div className="flex-shrink-0 w-20 sm:w-24 bg-stone flex flex-col items-center justify-center py-6 border-r border-stone-100">
          <div className="font-serif text-3xl sm:text-4xl text-gold leading-none mb-1">{event.date.day}</div>
          <div className="font-sans text-noir-500 text-xs tracking-widest-2">{event.date.month}</div>
          <div className="font-sans text-noir-400 text-xs mt-1">{event.date.year}</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="mb-2">
            <div className="flex items-start justify-between gap-3 mb-0.5">
              <h3 className="font-serif text-xl sm:text-2xl text-noir-800 group-hover:text-gold transition-colors duration-300">
                {event.title}
              </h3>
              {event.urgent && (
                <span className="flex-shrink-0 font-sans text-white text-xs bg-gold px-2.5 py-1 tracking-widest">
                  Limited
                </span>
              )}
            </div>
            <p className="font-sans text-gold-dark text-sm italic">{event.subtitle}</p>
          </div>

          <p className="font-sans text-noir-500 text-sm leading-relaxed mb-4">{event.description}</p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-sans text-noir-400 text-xs tracking-widest border border-stone-200 px-3 py-1">
              {event.details}
            </span>
            <div className="flex items-center gap-4">
              <span className="font-sans text-noir-400 text-xs">{event.availability}</span>
              <a
                href="#reservations"
                onClick={(e) => { e.preventDefault(); document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="font-sans text-xs tracking-widest uppercase border border-noir-200 text-noir-600 px-4 py-2 hover:bg-noir-800 hover:text-white hover:border-noir-800 transition-all duration-300"
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export default function Events() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="events" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">Events</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-noir-800 leading-none font-light mb-4"
          >
            Upcoming<br />
            <em className="gold-gradient-text">Evenings</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-noir-500 text-base max-w-xl mx-auto leading-relaxed"
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
