'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'BERANDA', href: '/' },
  {
    label: 'PRODUK',
    href: '/produk',
    submenu: [
      { label: 'General', href: '/produk' },
      { label: 'FnB Packaging', href: '/produk?cat=fnb' },
      { label: 'Skincare Packaging', href: '/produk?cat=skincare' },
      { label: 'Premium Packaging', href: '/produk?cat=premium' },
    ],
  },
  { label: 'PORTOFOLIO', href: '/portfolio' },
  { label: 'SERTIFIKAT', href: '/sertifikat' },
  { label: 'POSTING', href: '/blog' },
  { label: 'HUBUNGI KAMI', href: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
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
          <div className={styles.logoIcon}>
            <i className="fas fa-box-open" />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>PICK AND PACK</span>
            <span className={styles.logoSub}>PACKAGING COMPANY</span>
          </div>
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
                {link.submenu && <i className="fas fa-chevron-down" style={{ fontSize: 10, marginLeft: 4 }} />}
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
          href="https://wa.me/6285169577447?text=Halo,%20Saya%20tertarik%20untuk%20custom%20packaging.%20bisa%20tolong%20dibantu%20?"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn}`}
        >
          KONSULTASIKAN SEKARANG
        </a>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>Hubungi Kami</h3>
          <button onClick={() => setMobileOpen(false)}><i className="fas fa-times" /></button>
        </div>
        <div className={styles.drawerContact}>
          <div><strong>Our Number</strong><p>0851-6957-7447</p></div>
          <div><strong>Our Email</strong><p>indocartonbox@gmail.com</p></div>
        </div>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
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
      </div>
    </header>
  );
}
