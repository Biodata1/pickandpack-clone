'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './CinematicHero.module.css';
import MagneticButton from './MagneticButton';
import { trackGAEvent } from '../lib/gtag';

const slides = [
  {
    image: '/printwork/backgrounds/approach_vision.png',
    badge: 'Est. 2012 — PT Printwork Indonesia',
    line1: 'Kemasan',
    line2: 'Eksklusif',
    line3: 'Premium.',
    sub: 'Solusi kemasan custom berkualitas tinggi yang membangun identitas brand Anda di pasar modern.',
  },
  {
    image: '/printwork/products/burger box eco-kraft.webp',
    badge: 'Food Grade & Eco-Kraft',
    line1: 'Custom',
    line2: 'Packaging',
    line3: 'F&B Anda.',
    sub: 'Kemasan makanan bersertifikasi ISO 9001:2015 & FSSC 22000 untuk UMKM hingga korporasi.',
  },
  {
    image: '/printwork/products/standing pouch paper metalized.webp',
    badge: 'Premium Packaging Solutions',
    line1: 'Deliver a',
    line2: 'Unique',
    line3: 'Experience.',
    sub: 'Tingkatkan first impression brand Anda dengan kemasan custom yang berkesan dan berkualitas tinggi.',
  },
];

const DURATION = 8000;

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] },
  },
};

export default function CinematicHero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return p + 100 / (DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Cinematic Background Video */}
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBg}
          poster="/printwork/videos/hero_poster.png"
        >
          <source src="/printwork/videos/hero_bg_optimized.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Images with Ken Burns */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.bgSlide} ${i === current ? styles.bgActive : ''}`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.4 }}
            className={styles.bgImage}
          />
        </div>
      ))}

      {/* Gradient Overlays — Layered depth */}
      <div className={styles.overlayGradient} />
      <div className={styles.overlayVignette} />
      <div className={styles.overlayNoise} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={styles.textBlock}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Badge */}
              <motion.span
                className={styles.badge}
                custom={0}
                variants={textVariants}
              >
                {slide.badge}
              </motion.span>

              {/* Headline — 3 lines, cinematic */}
              <h1 className={styles.headline}>
                <motion.span
                  className={styles.headlineLine}
                  custom={1}
                  variants={textVariants}
                >
                  {slide.line1}
                </motion.span>
                <motion.span
                  className={`${styles.headlineLine} ${styles.headlineAccent}`}
                  custom={2}
                  variants={textVariants}
                >
                  {slide.line2}
                </motion.span>
                <motion.em
                  className={styles.headlineItalic}
                  custom={3}
                  variants={textVariants}
                >
                  {slide.line3}
                </motion.em>
              </h1>

              {/* Subtitle */}
              <motion.p
                className={styles.sub}
                custom={4}
                variants={textVariants}
              >
                {slide.sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className={styles.ctas}
                custom={5}
                variants={textVariants}
              >
                <MagneticButton>
                  <a
                    href="/produk"
                    className={`btn btn-white ${styles.ctaBtn}`}
                    onClick={() => {
                      trackGAEvent('hero_cta_click', { cta_name: 'lihat_katalog', destination: '/produk' });
                      trackGAEvent('catalog_open', { source: 'hero_cta' });
                    }}
                  >
                    Lihat Katalog
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="https://wa.me/6285777237523?text=Halo%20Printwork,%20saya%20ingin%20memesan%20kemasan%20custom."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-ghost ${styles.ctaBtn}`}
                    onClick={() => {
                      trackGAEvent('hero_cta_click', { cta_name: 'konsultasi_gratis', destination: 'whatsapp' });
                      trackGAEvent('wa_cta_click', { source: 'hero_consultation' });
                    }}
                  >
                    Konsultasi Gratis
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === current ? styles.indicatorActive : ''}`}
              onClick={() => {
                setCurrent(i);
                setProgress(0);
              }}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={styles.indicatorFill}
                style={{
                  transform: `scaleX(${i === current ? progress / 100 : i < current ? 1 : 0})`,
                }}
              />
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollCue}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollTrack}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </div>
    </section>
  );
}
