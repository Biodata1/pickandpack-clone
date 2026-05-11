'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  {
    image: 'https://www.printwork.id/images/custom-hero-bg.webp',
    headline: 'Premium Packaging Solutions',
    headlineSub: 'Elevate Your Brand Identity',
  },
  {
    image: 'https://www.printwork.id/images/product-img1.webp',
    headline: 'Custom Food Grade Packaging',
    headlineSub: 'Safe, Sustainable, and Stylish',
  },
  {
    image: 'https://www.printwork.id/images/product-img2.webp',
    headline: 'Exquisite Hard Box & Premium Cases',
    headlineSub: 'First Impression That Lasts',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.hero}>
      {slides.map((slide, i) => (
        <div key={i} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={i === 0}
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.slideIndicator}>
          <span className={styles.currentNum}>{current + 1}</span>
          <span className={styles.divider}>/</span>
          <span className={styles.totalNum}>{slides.length}</span>
        </div>

        <div className={styles.textArea}>
          <h1 className={styles.headline}>
            {slides[current].headline}
            <br />
            <span className={styles.headlineAccent}>{slides[current].headlineSub}</span>
          </h1>
          <a
            href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            KONSULTASIKAN SEKARANG
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className={styles.arrows}>
        <button onClick={prev} aria-label="Previous slide" className={styles.arrow}>
          <i className="fas fa-chevron-left" />
        </button>
        <button onClick={next} aria-label="Next slide" className={styles.arrow}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
