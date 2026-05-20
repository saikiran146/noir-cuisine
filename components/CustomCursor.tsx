'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 150 })
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 150 })
  const dotX = useSpring(mouseX, springConfig)
  const dotY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleEnter = () => cursorRef.current?.classList.add('scale-150')
    const handleLeave = () => cursorRef.current?.classList.remove('scale-150')

    window.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-noir-700 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 mix-blend-multiply"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
    </>
  )
}
