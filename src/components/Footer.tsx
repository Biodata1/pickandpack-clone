import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <i className="fas fa-box-open" />
              <div>
                <span className={styles.logoTitle}>PRINTWORK</span>
                <span className={styles.logoSub}>INDONESIA</span>
              </div>
            </div>
            <p>
              PT Printwork Indonesia adalah perusahaan spesialis kemasan makanan custom yang telah melayani ribuan pelaku usaha F&B di seluruh Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/produk">Produk</Link></li>
              <li><Link href="/portfolio">Portofolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/kontak">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkGroup}>
            <h4>Hubungi Kami</h4>
            <ul className={styles.contactList}>
              <li>
                <i className="fab fa-whatsapp" />
                <a href="https://wa.me/6281113000966" target="_blank" rel="noopener noreferrer">
                  0811-1300-0966
                </a>
              </li>
              <li>
                <i className="fab fa-instagram" />
                <a href="https://instagram.com/printwork.id" target="_blank" rel="noopener noreferrer">
                  @printwork.id
                </a>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <a href="mailto:info@printwork.id">info@printwork.id</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Download Katalog */}
          <div className={styles.linkGroup}>
            <h4>Download</h4>
            <a href="#" className={styles.katalogBtn}>
              <i className="fas fa-download" /> Download Katalog
            </a>
            <div className={styles.socialIcons}>
              <a href="https://wa.me/6281113000966" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="https://instagram.com/printwork.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PT Printwork Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
