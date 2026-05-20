'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.string().min(1, 'Please select number of guests'),
  occasion: z.string().optional(),
  requests: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const aiSuggestions = [
  'What are your opening hours?',
  'Do you cater for dietary requirements?',
  'Can I book for a special occasion?',
  'What is the tasting menu experience like?',
]

const aiResponses: Record<string, string> = {
  'What are your opening hours?':
    'We are open Thursday through Monday, 5:00 PM to 9:00 PM. On Sundays we close a little earlier at 8:00 PM. We are closed Tuesday and Wednesday.',
  'Do you cater for dietary requirements?':
    'Absolutely. Chef Brian personally accommodates dietary requirements including vegetarian, vegan, gluten-free, and all allergies. Please mention any requirements when booking and we will prepare accordingly.',
  'Can I book for a special occasion?':
    'We would be honoured to make your special occasion memorable. Please note the occasion in your booking — birthdays, anniversaries, proposals — and we will add thoughtful personal touches to your evening.',
  'What is the tasting menu experience like?':
    'Our 5-course tasting menu is Chef Brian\'s curated journey through Donegal\'s finest seasonal produce. It changes regularly and takes approximately 2.5 to 3 hours. Wine pairing is available and highly recommended.',
}

export default function Reservations() {
  const [aiInput, setAiInput] = useState('')
  const [aiMessages, setAiMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([
    { role: 'ai', text: 'Welcome to No. 9 Market Square. How can I assist with your reservation or answer any questions?' },
  ])
  const [submitted, setSubmitted] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Reservation submitted:', data)
    setSubmitted(true)
  }

  const handleAiSend = (question?: string) => {
    const query = question || aiInput.trim()
    if (!query) return

    setAiMessages((prev) => [...prev, { role: 'user', text: query }])
    setAiInput('')

    const response = aiResponses[query] ||
      'Thank you for your question. For specific enquiries, please call us at (074) 920 4756 or email info@no9marketsquare.com and we will be delighted to assist.'

    setTimeout(() => {
      setAiMessages((prev) => [...prev, { role: 'ai', text: response }])
    }, 800)
  }

  return (
    <section id="reservations" className="section-padding bg-noir-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold/70 text-xs tracking-widest-3 uppercase">Reservations</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-cream leading-none font-light mb-4"
          >
            Reserve Your
            <br />
            <em className="gold-gradient-text">Evening</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-cream/50 text-base"
          >
            Thursday – Monday · 5:00 PM – 9:00 PM · Sundays until 8:00 PM
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-serif text-2xl text-cream mb-6">Book a Table</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('name')}
                        placeholder="Full Name"
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      />
                      {errors.name && (
                        <p className="text-gold/70 text-xs mt-1 font-sans">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register('phone')}
                        placeholder="Phone Number"
                        type="tel"
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      />
                      {errors.phone && (
                        <p className="text-gold/70 text-xs mt-1 font-sans">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      {...register('email')}
                      placeholder="Email Address"
                      type="email"
                      className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    />
                    {errors.email && (
                      <p className="text-gold/70 text-xs mt-1 font-sans">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register('date')}
                        type="date"
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        style={{ colorScheme: 'dark' }}
                      />
                      {errors.date && (
                        <p className="text-gold/70 text-xs mt-1 font-sans">{errors.date.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register('time')}
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                      </select>
                      {errors.time && (
                        <p className="text-gold/70 text-xs mt-1 font-sans">{errors.time.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <select
                        {...register('guests')}
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                      >
                        <option value="">Guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p className="text-gold/70 text-xs mt-1 font-sans">{errors.guests.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register('occasion')}
                        className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                      >
                        <option value="">Occasion (Optional)</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business Dinner</option>
                        <option value="proposal">Proposal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      {...register('requests')}
                      placeholder="Special requests or dietary requirements..."
                      rows={3}
                      className="w-full bg-noir-800 border border-gold/15 px-4 py-3.5 font-sans text-cream/80 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold text-noir-950 font-sans text-xs tracking-widest-2 uppercase hover:bg-gold-light transition-colors duration-300 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Reservation'}
                  </button>

                  <p className="font-sans text-cream/30 text-xs text-center tracking-widest">
                    Or call us directly · (074) 920 4756
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-6 bg-noir-900 border border-gold/20 p-12"
                >
                  <div className="w-16 h-16 border border-gold/40 flex items-center justify-center">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-3xl text-cream">Reservation Received</h3>
                  <p className="font-sans text-cream/60 text-sm leading-relaxed max-w-sm">
                    Thank you for choosing No. 9 Market Square. We will confirm your reservation by
                    email within a few hours. We look forward to welcoming you.
                  </p>
                  <div className="w-16 h-px bg-gold/30" />
                  <p className="font-sans text-gold/60 text-xs tracking-widest">
                    info@no9marketsquare.com
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AI Assistant */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-gold animate-flicker" />
              <h3 className="font-serif text-2xl text-cream">Ask Us Anything</h3>
            </div>

            {/* Chat area */}
            <div className="flex-1 bg-noir-800 border border-gold/10 p-5 space-y-4 mb-4 min-h-[300px] max-h-[360px] overflow-y-auto">
              <AnimatePresence>
                {aiMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-gold/15 text-cream/90'
                          : 'bg-noir-700 border border-gold/10 text-cream/70'
                      }`}
                    >
                      <p className="font-sans text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Suggested questions */}
            <div className="flex flex-wrap gap-2 mb-4">
              {aiSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleAiSend(suggestion)}
                  className="font-sans text-cream/40 text-xs tracking-widest border border-cream/10 px-3 py-1.5 hover:border-gold/30 hover:text-gold/60 transition-all duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiSend()}
                placeholder="Ask a question..."
                className="flex-1 bg-noir-800 border border-gold/15 px-4 py-3 font-sans text-cream/80 text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
              <button
                onClick={() => handleAiSend()}
                className="px-5 py-3 bg-gold/15 border border-gold/30 text-gold font-sans text-xs tracking-widest hover:bg-gold hover:text-noir-950 transition-all duration-300"
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
