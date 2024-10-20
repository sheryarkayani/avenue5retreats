"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CommunitySection = () => {
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#001F3F] text-white overflow-hidden">
      <motion.div
        className="container px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 relative">
              Join Our Community
              <span className="absolute -top-2 -left-2 w-12 h-12 bg-[#D4AF37] rounded-full opacity-20 animate-ping"></span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Experience luxury living and exclusive events as part of the Avenue5 Hospitality family.
            </p>
            <Button 
              className="bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137] transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Become a Resident
              {isHovering && (
                <motion.span
                  className="ml-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  →
                </motion.span>
              )}
            </Button>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
            <Card className="bg-[#002F5F] overflow-hidden group">
              <CardContent className="p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#50C878] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Badge className="mb-2 bg-[#50C878]">Upcoming</Badge>
                <h3 className="font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">Rooftop Yoga</h3>
                <p className="text-sm text-gray-300">Join us for a relaxing session with city views.</p>
                <motion.div 
                  className="absolute bottom-2 right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#001F3F]">+</span>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="bg-[#002F5F] overflow-hidden group">
              <CardContent className="p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#800020] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Badge className="mb-2 bg-[#800020]">Exclusive</Badge>
                <h3 className="font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">Wine Tasting</h3>
                <p className="text-sm text-gray-300">Savor premium wines from around the world.</p>
                <motion.div 
                  className="absolute bottom-2 right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#001F3F]">+</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CommunitySection