'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  {
    image: '/printwork/custom-hero-bg.webp',
    badge: 'Est. 2012 — PT Printwork Indonesia',
    headline: 'Kemasan',
    headlineAccent: 'Eksklusif',
    headlineEnd: 'Premium.',
    sub: 'Solusi kemasan custom berkualitas tinggi yang membangun identitas brand Anda di pasar modern.',
  },
  {
    image: '/printwork/dus_kentang.webp',
    badge: 'Food Grade & Eco-Kraft',
    headline: 'Custom Packaging',
    headlineAccent: 'Untuk Bisnis',
    headlineEnd: 'F&B Anda.',
    sub: 'Kemasan makanan food grade bersertifikasi ISO 9001:2015 & FSSC 22000 untuk skala UMKM hingga korporasi.',
  },
  {
    image: '/printwork/custom-hero-bg.webp',
    badge: 'Premium Packaging Solutions',
    headline: 'Deliver a Unique',
    headlineAccent: 'Experience',
    headlineEnd: 'Through Packaging.',
    sub: 'Tingkatkan first impression brand Anda dengan kemasan custom yang berkesan dan berkualitas tinggi.',
  },
];

const SLIDE_DURATION = 7000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  // Auto-play with progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next, current]);

  return (
    <section className={styles.hero}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          <div className={styles.imageWrap}>
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={i === 0}
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textArea} key={current}>
          <span className={styles.badge}>{slides[current].badge}</span>
          <h1 className={styles.headline}>
            {slides[current].headline}{' '}
            <br />
            <em className={styles.headlineAccent}>{slides[current].headlineAccent}</em>{' '}
            <span className={styles.headlineEnd}>{slides[current].headlineEnd}</span>
          </h1>
          <p className={styles.sub}>{slides[current].sub}</p>
          <div className={styles.heroCtas}>
            <a
              href="/produk"
              className={styles.ctaBtn}
            >
              Lihat Katalog
            </a>
            <a
              href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnOutline}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className={styles.controls}>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            >
              {i === current && (
                <span className={styles.dotProgress} style={{ width: `${progress}%` }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className={styles.arrows}>
        <button onClick={prev} aria-label="Previous slide" className={styles.arrow}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={next} aria-label="Next slide" className={styles.arrow}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
