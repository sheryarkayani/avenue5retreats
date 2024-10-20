"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#001F3F"/>
    <path d="M20 8L32 32H8L20 8Z" fill="#D4AF37"/>
    <path d="M20 16L26 32H14L20 16Z" fill="#001F3F"/>
    <circle cx="20" cy="20" r="4" fill="#D4AF37"/>
  </svg>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Properties', href: '#' },
    { name: 'Booking', href: '#' },
    { name: 'Residents', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-[#001F3F] text-white relative z-50">
      <Link className="flex items-center justify-center" href="#">
        <span className="sr-only">Avenue5 Hospitality</span>
        <Logo />
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-2 text-xl font-bold hidden sm:inline-block"
        >
          Avenue5 Hospitality
        </motion.span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-[#002F5F] transition-colors duration-200 relative group"
              href={item.href}
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </nav>
      <button 
        className="ml-auto md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-[#001F3F] shadow-lg z-50 flex flex-col"
          >
            <button 
              className="self-end p-4 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-2 p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    className="text-lg font-medium px-3 py-2 rounded-md hover:bg-[#002F5F] transition-colors duration-200 block"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header