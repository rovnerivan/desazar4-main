import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.interactive')) {
        cursorRef.current?.classList.add('scale-150', 'bg-primary/20');
        dotRef.current?.classList.add('scale-50');
      } else {
        cursorRef.current?.classList.remove('scale-150', 'bg-primary/20');
        dotRef.current?.classList.remove('scale-50');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      />
    </>
  );
};
