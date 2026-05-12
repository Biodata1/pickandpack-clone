'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  stagger?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

const getVariants = (direction: string): Variants => {
  const distance = 60;
  const hidden: Record<string, number> = { opacity: 0 };
  const visible: Record<string, number> = { opacity: 1 };

  switch (direction) {
    case 'up':
      hidden.y = distance;
      visible.y = 0;
      break;
    case 'down':
      hidden.y = -distance;
      visible.y = 0;
      break;
    case 'left':
      hidden.x = -distance;
      visible.x = 0;
      break;
    case 'right':
      hidden.x = distance;
      visible.x = 0;
      break;
    case 'scale':
      hidden.scale = 0.9;
      visible.scale = 1;
      break;
    case 'none':
      break;
  }

  return { hidden, visible };
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  once = true,
  className = '',
  stagger = 0,
  as = 'div',
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: '0px 0px -60px 0px',
  });

  const variants = getVariants(direction);
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: stagger,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

/* Stagger child wrapper */
export function RevealChild({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
