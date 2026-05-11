'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          <Image
            src="https://www.printwork.id/images/new_logo.png"
            alt="Printwork Indonesia"
            width={180}
            height={50}
            className={styles.logoImage}
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
          href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
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
          <div><strong>Our Number</strong><p>0811-1300-0966</p></div>
          <div><strong>Our Email</strong><p>info@printwork.id</p></div>
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
