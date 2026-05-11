'use client';

import { useState, useEffect } from 'react';
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
  { label: 'Sertifikat', href: '/sertifikat' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
            src="/printwork/new_logo.png"
            alt="Printwork Indonesia"
            width={160}
            height={44}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.submenu ? styles.hasDropdown : ''}
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.label}
                {link.submenu && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={styles.chevron}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              {link.submenu && activeDropdown === link.label && (
                <div className={styles.dropdown}>
                  {link.submenu.map((sub) => (
                    <Link key={sub.label} href={sub.href} className={styles.dropdownItem}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.768-6.178-2.064l-.346-.28-3.583 1.2 1.2-3.583-.28-.346A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Konsultasi
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayVisible : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <Image
            src="/printwork/new_logo.png"
            alt="Printwork Indonesia"
            width={120}
            height={33}
          />
          <button onClick={() => setMobileOpen(false)} className={styles.drawerClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
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
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setMobileOpen(false)} className={styles.mobileLink}>
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
            </li>
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
      </div>
    </header>
  );
}
