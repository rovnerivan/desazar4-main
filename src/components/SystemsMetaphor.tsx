"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const SystemsMetaphor = () => {
  const cycleDuration = 8;

  // Generamos las líneas del plano (Sketch) de forma procedimental para tener muchas más
  const sketchLines = useMemo(() => {
    const lines = [];
    // Creamos una rejilla de conexiones
    for (let i = 0; i < 40; i++) {
      const x1 = Math.random() * 200;
      const y1 = Math.random() * 200;
      // Conectamos hacia el centro o en ángulos rectos para parecer circuitos
      const direction = Math.random() > 0.5 ? 'h' : 'v';
      let x2 = x1, y2 = y1;
      
      if (direction === 'h') {
        x2 = x1 + (Math.random() - 0.5) * 100;
      } else {
        y2 = y1 + (Math.random() - 0.5) * 100;
      }

      // Aseguramos que las líneas no se salgan demasiado del viewport relativo
      lines.push({ x1, y1, x2, y2 });
    }
    return lines;
  }, []);

  // Generamos los "Data Packets" (las líneas de energía que viajan al chip)
  const dataPackets = useMemo(() => {
    const packets = [];
    for (let i = 0; i < 35; i++) {
      // Parten desde posiciones aleatorias en los bordes o puntos lejanos
      const angle = Math.random() * Math.PI * 2;
      const distance = 120; // Distancia desde el centro (100, 100)
      const startX = 100 + Math.cos(angle) * distance;
      const startY = 100 + Math.sin(angle) * distance;
      
      // El destino es siempre el centro (el chip)
      packets.push({
        startX,
        startY,
        delay: Math.random() * 4,
        duration: 1 + Math.random() * 2
      });
    }
    return packets;
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#050505]/50">
      
      {/* 1. CAPA DE PLANO (Massive Circuit Sketch) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0, 0.4, 0.4, 0] }}
        transition={{ duration: cycleDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-full h-full opacity-20" viewBox="0 0 200 200">
          {sketchLines.map((line, i) => (
            <motion.path
              key={`sketch-${i}`}
              d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3, 
                delay: i * 0.1, 
                repeat: Infinity, 
                repeatDelay: cycleDuration - 3 
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* 2. CAPA DE FLUJO DE DATOS (High-Density Energy Traces) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: cycleDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {dataPackets.map((p, i) => (
            <motion.path
              key={`packet-${i}`}
              d={`M ${p.startX} ${p.startY} L 100 100`}
              fill="none"
              stroke="#007AFF"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1], 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: p.duration, 
                delay: p.delay, 
                repeat: Infinity, 
                repeatDelay: cycleDuration - (p.delay + p.duration)
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* 3. EL CHIP (The Core) */}
      <motion.div
        className="relative z-10"
        animate={{ 
          scale: [0.8, 1, 1, 1.2, 1],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{ duration: cycleDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow de fondo masivo que reacciona al flujo */}
        <motion.div 
          className="absolute inset-0 bg-[#007AFF]/40 blur-[35px] rounded-full"
          animate={{ 
            scale: [0, 1, 2.5, 0], 
            opacity: [0, 0.3, 0.8, 0] 
          }}
          transition={{ duration: cycleDuration, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* El cuerpo del chip */}
        <div className="relative w-16 h-16 md:w-24 md:h-24 bg-zinc-950 border border-[#007AFF]/60 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,122,255,0.4)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/20 to-transparent" />
          <Cpu size={32} className="text-white z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          
          {/* Pulso de luz interna ultra intenso */}
          <motion.div 
            className="absolute inset-0 bg-[#007AFF]"
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: cycleDuration, delay: 4.5, repeat: Infinity }}
          />
        </div >
      </motion.div>

      {/* Texto de guía sutil */}
      <div className="absolute bottom-2 w-full text-center">
        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Data Stream: Active</span>
      </div >
    </div >
  );
};

export default SystemsMetaphor;