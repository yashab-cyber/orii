import { memo, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Simple inline SVG icons to avoid extra assets and keep things light.
const Icon = ({ type, color = '#1E90FF' }) => {
  switch (type) {
    case 'lightbulb':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M2 12a8 8 0 1 1 16 0c0 2.6-1.36 4.18-2.67 5.33-.49.43-.83 1.01-.99 1.65H6.66c-.16-.64-.5-1.22-.99-1.65C3.36 16.18 2 14.6 2 12Z" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20" />
          <path d="M20 22V6a2 2 0 0 0-2-2H6.5" />
        </svg>
      );
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      );
    case 'robot':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <rect x="4" y="8" width="16" height="10" rx="2" />
          <path d="M8 8V6a4 4 0 1 1 8 0v2" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M8 18v2M16 18v2" />
        </svg>
      );
    case 'microscope':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M6 18h8a4 4 0 0 0 4-4v0" />
          <path d="M12 3v6l-2 2" />
          <rect x="4" y="11" width="5" height="5" rx="1" />
          <path d="M2 21h20" />
        </svg>
      );
    case 'dna':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M7 3c0 5 10 5 10 10s-10 5-10 8" />
          <path d="M17 3c0 5-10 5-10 10s10 5 10 8" />
          <path d="M8 7h8M8 12h8M8 17h8" />
        </svg>
      );
    case 'energy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case 'satellite':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M13 7l-1 1 4 4 1-1a3 3 0 0 0-4-4z" />
          <path d="M8 12l-5 5 4 4 5-5z" />
          <path d="M16 12l5-5-4-4-5 5z" />
        </svg>
      );
  }
};

const neonColors = ['#1E90FF', '#00FF99'];

const random = (min, max) => Math.random() * (max - min) + min;

function createItems(count, isMobile) {
  const types = ['lightbulb', 'book', 'chip', 'robot', 'microscope', 'dna', 'energy', 'satellite'];
  return Array.from({ length: count }).map((_, i) => {
    const base = random(0.15, 0.25); // opacity
    const size = isMobile ? random(14, 36) : random(18, 56); // px
    const speed = random(10, 20); // seconds
    const delay = random(0, 20);
    const rotate = random(-8, 8);
    const x = random(0, 100); // vw
    const yStart = random(100, 140); // start below viewport
    const yEnd = random(-40, -10); // end above viewport
    const depth = Math.random(); // for parallax scaling/motion
    const color = neonColors[Math.floor(Math.random() * neonColors.length)];

    return {
      id: i,
      type: types[i % types.length],
      opacity: base,
      size,
      duration: speed * (0.6 + depth * 0.8), // vary by depth
      delay,
      rotate,
      x,
      yStart,
      yEnd,
      depth,
      color,
    };
  });
}

const FloatingItem = memo(function FloatingItem({ item, prefersReducedMotion }) {
  const glowColor = item.color;
  const filterShadow = `drop-shadow(0 0 6px ${glowColor}50)`; // subtle glow

  const animate = prefersReducedMotion
    ? {}
    : {
        y: [ `${item.yStart}vh`, `${item.yEnd}vh` ],
        rotate: [ item.rotate, -item.rotate ],
        scale: [ 1 - item.depth * 0.1, 1 + item.depth * 0.05 ],
      };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: item.duration,
        delay: item.delay,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      };

  return (
    <motion.div
      role="img"
      aria-hidden="true"
      initial={{ y: `${item.yStart}vh`, x: `${item.x}vw`, opacity: item.opacity }}
      animate={animate}
      transition={transition}
      whileHover={{ scale: 1.08, opacity: Math.min(item.opacity + 0.15, 0.6) }}
      className="absolute"
      style={{
        left: 0,
        width: item.size,
        height: item.size,
        filter: filterShadow,
        // Slight depth-based blur
        opacity: item.opacity,
        zIndex: Math.floor(item.depth * 2),
        pointerEvents: 'none',
      }}
    >
      <Icon type={item.type} color={item.color} />
    </motion.div>
  );
});

const AnimatedBackground = memo(function AnimatedBackground({ mobileCount = 14, desktopCount = 34 }) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  const count = isMobile ? mobileCount : desktopCount;

  const items = useMemo(() => createItems(count, isMobile), [count, isMobile]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      // Dark gradient background requested (#0A0A0A → #111827)
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111827 100%)',
      }}
    >
      {/* Parallax container: icons have pointer events for optional interactivity, but parent is none */}
      <div className="relative w-full h-full">
        {items.map((item) => (
          <FloatingItem key={item.id} item={item} prefersReducedMotion={prefersReducedMotion} />
        ))}
      </div>
    </div>
  );
});

export default AnimatedBackground;
