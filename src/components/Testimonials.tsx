"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '../components/ui/card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Raja Akbar",
    since: "2022",
    text: "Living at Avenue5 has been an incredible experience. The amenities and service are unmatched!",
    rating: 5
  },
  {
    name: "Ahmed Ali",
    since: "2021",
    text: "I've never felt more at home. The community events are a great way to meet neighbors!",
    rating: 5
  },
  {
    name: "Asjad Mehmood",
    since: "2023",
    text: "The attention to detail in every aspect of Avenue5 is impressive. Truly luxury living!",
    rating: 4
  },
  {
    name: "Amjad Khan",
    since: "2022",
    text: "From the stunning views to the top-notch facilities, Avenue5 exceeds all expectations.",
    rating: 5
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#001F3F]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Residents Say
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length
                const testimonial = testimonials[index]
                return (
                  <Card key={index} className="bg-[#F5F5F5] overflow-hidden group shadow-lg">
                    <CardContent className="p-6 md:p-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <motion.div 
                        className="mb-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="font-bold text-xl text-[#001F3F]">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">Resident since {testimonial.since}</p>
                      </motion.div>
                      <motion.p 
                        className="text-gray-600 mb-6 text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        "{testimonial.text}"
                      </motion.p>
                      <motion.div 
                        className="flex"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-6 h-6 ${i < testimonial.rating ? 'text-[#D4AF37]' : 'text-gray-300'}`} 
                            fill={i < testimonial.rating ? '#D4AF37' : 'none'}
                          />
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                )
              })}
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-[#001F3F] text-white p-2 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-[#001F3F] text-white p-2 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
