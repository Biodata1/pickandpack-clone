'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  stagger?: boolean;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  stagger = false,
  threshold = 0.15,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const baseClass = stagger
    ? 'reveal-stagger'
    : direction === 'left'
    ? 'reveal-left'
    : direction === 'right'
    ? 'reveal-right'
    : direction === 'scale'
    ? 'reveal-scale'
    : 'reveal';

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
