'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

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

    const handleMouseEnterLink = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-150', 'opacity-50')
      }
    }

    const handleMouseLeaveLink = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-150', 'opacity-50')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterLink)
      el.addEventListener('mouseleave', handleMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterLink)
        el.removeEventListener('mouseleave', handleMouseLeaveLink)
      })
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-300"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
    </>
  )
}
