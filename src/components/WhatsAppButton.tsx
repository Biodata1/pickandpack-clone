'use client';

import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <div className={styles.floatingBtns}>
      {/* Instagram */}
      <a
        href="https://instagram.com/printwork.id"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.igBtn}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waBtn}
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}
