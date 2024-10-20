import React, { useState, useRef, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Home, Maximize2, DollarSign } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: "Victorian Studio",
    description: "Relive the Victorian era in our exquisite studio apartments",
    price: "Starting from 1,125,000",
    size: "Total SQFT 300",
    image: "/apartment.jpg"
  },
  {
    id: 2,
    name: "Luxurious 2-Bedroom",
    description: "Experience modern luxury with a Victorian touch",
    price: "Starting from 3,000,000",
    size: "Total SQFT 800",
    image: "/apartment2.jpg"
  }
]

const FeaturedProperties: React.FC = () => {
  const [, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % properties.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section 
      ref={ref} 
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#002F5F] to-[#001F3F] text-white overflow-hidden relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/victorian-pattern.png')] bg-repeat opacity-10"
      />
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Discover Our Victorian-Inspired Residences
        </motion.h2>
        
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {properties.map((property) => (
              <CarouselItem 
                key={property.id} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h-full perspective-1000"
                >
                  <Card className="bg-[#002F5F]/80 border-none shadow-2xl rounded-2xl overflow-hidden h-full backdrop-blur-sm transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <CardContent className="p-6 flex flex-col h-full">
                      <motion.div 
                        className="relative aspect-[16/9] mb-6 overflow-hidden rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        <motion.div 
                          initial={{ x: '-100%' }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="absolute top-0 left-0 bg-[#D4AF37] text-[#001F3F] px-3 py-1 rounded-br-lg font-semibold flex items-center space-x-1"
                        >
                          <Maximize2 size={16} />
                          <span>{property.size}</span>
                        </motion.div>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-[#D4AF37] mb-3 flex items-center">
                        <Home className="mr-2" />
                        {property.name}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 flex-grow">{property.description}</p>
                      <div className="flex justify-between items-center mb-6">
                        <motion.span 
                          className="text-2xl font-semibold text-[#50C878] flex items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <DollarSign className="mr-1" />
                          {property.price}
                        </motion.span>
                      </div>
                      <Button className="w-full bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137] transition-all duration-300 transform hover:scale-105 group">
                        Explore Property
                        <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="left-4 bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137] transition-all duration-300 hover:scale-110"
          />
          <CarouselNext 
            className="right-4 bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137] transition-all duration-300 hover:scale-110"
          />
        </Carousel>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Button className="bg-[#50C878] hover:bg-[#40B868] text-[#001F3F] transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3 group">
            View All Properties
            <motion.div
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronRight />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProperties
