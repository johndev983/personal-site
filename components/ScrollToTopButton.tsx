'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IoArrowUp } from 'react-icons/io5'

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-secondary text-text shadow-lg
        hover:bg-secondary/80
        transition-all duration-300
      "
    >
      <IoArrowUp className="w-6 h-6" />
    </motion.button>
  )
}
