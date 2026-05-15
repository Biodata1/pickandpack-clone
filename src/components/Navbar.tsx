'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Produk',
    href: '/produk',
    submenu: [
      { label: 'Semua Produk', href: '/produk' },
      { label: 'FnB Packaging', href: '/produk?cat=fnb' },
      { label: 'Skincare Packaging', href: '/produk?cat=skincare' },
      { label: 'Premium Packaging', href: '/produk?cat=premium' },
    ],
  },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Profile', href: '/company-profile' },
  { label: 'Sertifikat', href: '/sertifikat' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_p_black.png"
            alt="Printwork Indonesia"
            width={40}
            height={40}
            className={styles.logoImg}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.submenu ? styles.hasDropdown : ''}
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={link.href} className={styles.navLink}>
                <span className={styles.navLinkText}>{link.label}</span>
                {link.submenu && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={styles.chevron}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.submenu && activeDropdown === link.label && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.submenu.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItem}>
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Konsultasi
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.drawerHeader}>
              <Image
                src="/logo_p_black.png"
                alt="Printwork Indonesia"
                width={40}
                height={40}
                style={{ objectFit: 'contain' }}
              />
              <button onClick={() => setMobileOpen(false)} className={styles.drawerClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className={styles.drawerContact}>
              <div>
                <span className={styles.contactLabel}>Telepon</span>
                <a href="tel:+6281113000966" className={styles.contactValue}>0811-1300-0966</a>
              </div>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:info@printwork.id" className={styles.contactValue}>info@printwork.id</a>
              </div>
            </div>

            <ul className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={styles.mobileLink}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <ul className={styles.mobileSubmenu}>
                      {link.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link href={sub.href} onClick={() => setMobileOpen(false)}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className={styles.drawerCta}>
              <a
                href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
