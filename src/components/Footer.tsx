import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Produk', href: '/produk' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
];

const productLinks = [
  { label: 'Lunch Box & Pail', href: '/produk?cat=fnb' },
  { label: 'Dus Fried Chicken', href: '/produk?cat=fnb' },
  { label: 'Kantong Kertas', href: '/produk?cat=fnb' },
  { label: 'Hard Box Premium', href: '/produk?cat=premium' },
  { label: 'Standing Pouch', href: '/produk?cat=premium' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top CTA Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div>
              <h3>Siap membuat kemasan impian Anda?</h3>
              <p>Konsultasikan kebutuhan packaging bisnis Anda dengan tim kami</p>
            </div>
            <a
              href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topBarCta}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Image
                src="/printwork/new_logo.png"
                alt="Printwork Indonesia"
                width={140}
                height={38}
                className={styles.logoImage}
              />
              <p>
                PT Printwork Indonesia adalah perusahaan spesialis kemasan makanan custom 
                yang telah melayani ribuan pelaku usaha F&B di seluruh Indonesia sejak 2012.
              </p>
              <div className={styles.socialIcons}>
                <a href="https://wa.me/6281113000966" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </a>
                <a href="https://instagram.com/printwork.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="mailto:info@printwork.id" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linkGroup}>
              <h4>Navigasi</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className={styles.linkGroup}>
              <h4>Produk</h4>
              <ul>
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.linkGroup}>
              <h4>Hubungi Kami</h4>
              <ul className={styles.contactList}>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Grand Puri Laras, Tangerang Selatan</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <a href="tel:+6281113000966">0811-1300-0966</a>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                  <a href="mailto:info@printwork.id">info@printwork.id</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>&copy; {new Date().getFullYear()} PT Printwork Indonesia. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
