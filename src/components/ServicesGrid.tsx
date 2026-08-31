import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  badge?: string;
}

const BentoCard = ({ title, description, className = "", children, badge }: BentoCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 glass group ${className}`}
    >
      {badge && (
        <span className="absolute top-6 right-6 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full border border-primary/30 bg-primary/5 text-primary">
          {badge}
        </span>
      )}
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-2 tracking-tight">{title}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[250px]">{description}</p>
        </div>
        
        <div className="mt-8">
          {children}
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const ServicesGrid = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full min-h-[800px]">
        
        {/* DesAzar Web - Long Horizontal */}
        <BentoCard 
          title="DesAzar Web" 
          description="High-performance digital experiences built with precision."
          className="md:col-span-3 md:row-span-1"
        >
          <div className="w-full h-32 bg-zinc-900/50 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
             <div className="flex gap-2 animate-pulse">
                {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 bg-primary/20 rounded" />)}
             </div>
          </div>
        </BentoCard>

        {/* DesAzar Core - Square */}
        <BentoCard 
          title="DesAzar Core" 
          description="The engine behind the system."
          className="md:col-span-1 md:row-span-2"
          badge="Engineered"
        >
           <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="relative w-24 h-24">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-primary rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-b-2 border-zinc-500 rounded-full"
                />
              </div>
           </div>
        </BentoCard>

        {/* DesAzar Systems - Highlighted */}
        <BentoCard 
          title="DesAzar Systems" 
          description="Complex architectures made simple."
          className="md:col-span-2 md:row-span-1"
          badge="Vibecoding Powered"
        >
           <div className="h-full flex items-end">
              <div className="w-full h-1 bg-primary/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
           </div>
        </BentoCard>

        {/* DesAzar AI - Shimmer */}
        <BentoCard 
          title="DesAzar AI" 
          description="Intelligence in motion. Coming soon."
          className="md:col-span-2 md:row-span-1"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />
           <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Status: In Development</p>
        </BentoCard>

      </div>
    </section>
  );
};
