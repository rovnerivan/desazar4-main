import React from 'react';

export const BackgroundEffects = () => {
  return (
    <>
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`
        }}
      />

      {/* Engineering Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient for depth */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
    </>
  );
};