'use client';

import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <div className={styles.floatingBtns}>
      {/* Instagram */}
      <a
        href="https://instagram.com/pickandpack.id"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.igBtn}
        aria-label="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/6285169577447?text=Halo,%20Saya%20tertarik%20untuk%20custom%20packaging.%20bisa%20tolong%20dibantu%20?"
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
