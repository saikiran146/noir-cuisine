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

const suggestions = [
  'What are your opening hours?',
  'Do you cater for dietary requirements?',
  'Can I book for a special occasion?',
  'What is the tasting menu like?',
]

const aiResponses: Record<string, string> = {
  'What are your opening hours?': 'We are open Thursday through Monday, 5:00 PM – 9:00 PM. On Sundays we close at 8:00 PM. Closed Tuesday and Wednesday.',
  'Do you cater for dietary requirements?': 'Absolutely. Chef Brian personally accommodates all dietary requirements. Please mention any needs when booking.',
  'Can I book for a special occasion?': "We'd be honoured to make your occasion special. Note it in your booking and we'll add personal touches to your evening.",
  'What is the tasting menu like?': "Our 5-course tasting menu is Chef Brian's curated journey through Donegal's finest seasonal produce. Takes approximately 2.5–3 hours. Wine pairing is highly recommended.",
}

export default function Reservations() {
  const [aiInput, setAiInput] = useState('')
  const [aiMessages, setAiMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([
    { role: 'ai', text: 'Welcome to No. 9 Market Square. How can I assist with your reservation or answer any questions?' },
  ])
  const [submitted, setSubmitted] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-80px' })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Reservation:', data)
    setSubmitted(true)
  }

  const sendAi = (q?: string) => {
    const query = q || aiInput.trim()
    if (!query) return
    setAiMessages((p) => [...p, { role: 'user', text: query }])
    setAiInput('')
    const res = aiResponses[query] || 'Thank you for your question. Please call (074) 920 4756 or email info@no9marketsquare.com and we will be delighted to help.'
    setTimeout(() => setAiMessages((p) => [...p, { role: 'ai', text: res }]), 800)
  }

  const inputClass = 'w-full bg-white border border-stone-200 px-4 py-3.5 font-sans text-noir-700 text-sm placeholder:text-noir-400 focus:outline-none focus:border-gold/50 transition-colors duration-300'

  return (
    <section id="reservations" className="section-padding bg-stone relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-gold/40" />
            <span className="font-sans text-gold-dark text-xs tracking-widest-3 uppercase">Reservations</span>
            <span className="block w-12 h-px bg-gold/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl text-noir-800 leading-none font-light mb-4"
          >
            Reserve Your<br />
            <em className="gold-gradient-text">Evening</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-noir-500 text-base"
          >
            Thursday – Monday · 5:00 PM – 9:00 PM · Sundays until 8:00 PM
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="font-serif text-2xl text-noir-800 mb-6">Book a Table</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input {...register('name')} placeholder="Full Name" className={inputClass} />
                      {errors.name && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input {...register('phone')} placeholder="Phone Number" type="tel" className={inputClass} />
                      {errors.phone && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <input {...register('email')} placeholder="Email Address" type="email" className={inputClass} />
                    {errors.email && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input {...register('date')} type="date" className={inputClass} />
                      {errors.date && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.date.message}</p>}
                    </div>
                    <div>
                      <select {...register('time')} className={inputClass + ' appearance-none'}>
                        <option value="">Select Time</option>
                        {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map((t) => (
                          <option key={t} value={t}>{t.replace(':', ':').replace('17', '5').replace('18', '6').replace('19', '7').replace('20', '8')} PM</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.time.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <select {...register('guests')} className={inputClass + ' appearance-none'}>
                        <option value="">Guests</option>
                        {[1,2,3,4,5,6,7,8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                      {errors.guests && <p className="text-gold-dark text-xs mt-1 font-sans">{errors.guests.message}</p>}
                    </div>
                    <div>
                      <select {...register('occasion')} className={inputClass + ' appearance-none'}>
                        <option value="">Occasion (Optional)</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business Dinner</option>
                        <option value="proposal">Proposal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <textarea {...register('requests')} placeholder="Special requests or dietary requirements..." rows={3} className={inputClass + ' resize-none'} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-noir-800 text-white font-sans text-xs tracking-widest-2 uppercase hover:bg-gold transition-colors duration-400 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Reservation'}
                  </button>

                  <p className="font-sans text-noir-400 text-xs text-center tracking-widest">
                    Or call us directly · (074) 920 4756
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 bg-white border border-gold/20 p-12 shadow-card"
                >
                  <div className="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center">
                    <span className="text-gold text-xl">✓</span>
                  </div>
                  <h3 className="font-serif text-3xl text-noir-800">Reservation Received</h3>
                  <p className="font-sans text-noir-500 text-sm leading-relaxed max-w-sm">
                    Thank you for choosing No. 9 Market Square. We will confirm your reservation by email. We look forward to welcoming you.
                  </p>
                  <div className="w-16 h-px bg-gold/30" />
                  <p className="font-sans text-gold-dark text-xs tracking-widest">info@no9marketsquare.com</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-gold animate-flicker" />
              <h3 className="font-serif text-2xl text-noir-800">Ask Us Anything</h3>
            </div>

            {/* Chat */}
            <div className="flex-1 bg-white border border-stone-200 p-5 space-y-4 mb-4 min-h-[280px] max-h-[340px] overflow-y-auto shadow-card">
              <AnimatePresence>
                {aiMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-4 py-3 text-sm font-sans leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-noir-800 text-white'
                        : 'bg-stone border border-stone-200 text-noir-600'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendAi(s)}
                  className="font-sans text-noir-500 text-xs tracking-widest border border-stone-200 px-3 py-1.5 hover:border-gold/40 hover:text-gold-dark transition-all duration-300 bg-white"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendAi()}
                placeholder="Ask a question..."
                className="flex-1 bg-white border border-stone-200 px-4 py-3 font-sans text-noir-700 text-sm placeholder:text-noir-400 focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
              <button
                onClick={() => sendAi()}
                className="px-5 py-3 bg-noir-800 text-white font-sans text-xs tracking-widest hover:bg-gold transition-all duration-300"
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
