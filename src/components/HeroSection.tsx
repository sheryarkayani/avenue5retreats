"use client"

import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const FloatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t) * 0.1;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial color="#D4AF37" attach="material" distort={0.3} speed={1.5} />
    </Sphere>
  );
}

const HeroSection = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const titleControls = useAnimation();
  const contentControls = useAnimation();

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as EventListener);
    return () => window.removeEventListener('mousemove', handleMouseMove as EventListener);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      await contentControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };
    sequence();
  }, [titleControls, contentControls]);

  return (
    <Parallax bgImage="/hero-bg.jpg" strength={500}>
      <motion.section 
        ref={ref}
        style={{ opacity, scale }}
        className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-[#001F3F] relative overflow-hidden flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundPositionX: useTransform(mouseXSpring, [0, 1], ['45%', '55%']),
            backgroundPositionY: useTransform(mouseYSpring, [0, 1], ['45%', '55%']),
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-[url('/luxury-pattern.svg')] bg-repeat opacity-5"
          style={{
            x: useTransform(mouseXSpring, [0, 1], ['-2%', '2%']),
            y: useTransform(mouseYSpring, [0, 1], ['-2%', '2%']),
          }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={titleControls}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFF700] inline-block"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  Experience Luxury Living
                </motion.span>
                <br />
                with Avenue5 Hospitality
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 text-sm md:text-base lg:text-xl">
                Discover premium residential experiences in our high-rise apartments and hotel suites.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={contentControls}
              className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center"
            >
              <Button 
                className="w-full sm:w-auto bg-[#D4AF37] text-[#001F3F] hover:bg-[#C4A137] transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 py-2 md:px-8 md:py-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Properties</span>
                <motion.span 
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-[#001F3F] transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 py-2 md:px-8 md:py-3 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <motion.span 
                  className="absolute inset-0 bg-[#D4AF37]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#002F5F] to-transparent"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#001F3F] to-transparent"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.1) 0%, rgba(0, 31, 63, 0) 50%)`,
          }}
        />
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-32 h-32 hidden lg:block">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingSphere />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 left-4 text-white text-xs md:text-sm"
        >
      
        </motion.div>
      </motion.section>
    </Parallax>
  );
}

export default HeroSection;
