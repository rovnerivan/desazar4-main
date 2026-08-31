"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import trebolImage from '../../trebol.png';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Particles/Grid Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
      </div >

      <div className="relative z-10 text-center">
        {/* Subtítulo superior */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-500 mb-6"
        >
          Agencia de Desarrollo de Software
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <motion.img
              src={trebolImage}
              alt="Trébol"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85]">
              Des<span className="text-[#007AFF] italic">Azar</span>
            </h1>
          </div>
          
          {/* Bloque de narrativa de éxito con efecto Hover */}
          <div className="max-w-2xl mx-auto mb-12 space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-sm md:text-base font-light tracking-wide text-zinc-400"
            >
              Crea tecnología para tu negocio, para que cuando te vaya bien puedas decir...
            </motion.p>

            <div 
              className="relative inline-block overflow-hidden border border-[#D4AF37]/30 px-6 py-2 md:px-10 md:py-4 cursor-default min-w-[200px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Fondo que cambia de dorado a azul */}
              <motion.div 
                animate={{ backgroundColor: isHovered ? "rgba(0, 122, 255, 0.2)" : "rgba(212, 175, 55, 0.1)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              />
              
              <div className="relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    <motion.span
                      key="no-suerte"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-bold text-sm md:text-xl uppercase tracking-[0.2em] text-[#D4AF37]"
                    >
                      No fue suerte
                    </motion.span>
                  ) : (
                    <motion.span
                      key="fue-inteligencia"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="font-bold text-sm md:text-xl uppercase tracking-[0.2em] text-white"
                    >
                      Fue inteligencia
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#007AFF] to-transparent"
      />
    </section>
  );
};