'use client';

import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';
import { trackGAEvent } from '../lib/gtag';
import { trackLead } from '../lib/tracking';

export default function WhatsAppButton() {
  const handleClick = () => {
    // 1. Google Analytics (existing)
    trackGAEvent('wa_cta_click', { source: 'floating_button' });

    // 2. Track Lead ke Make.com via API Route (fire & forget)
    trackLead({
      nama: 'Pengunjung Anonim',
      nomor_wa: '-',
      produk: 'Konsultasi Umum',
      tipe_lead: 'wa_click',
      path: typeof window !== 'undefined' ? window.location.href : '',
    });

    // Browser akan otomatis membuka WA karena tag <a> memiliki href + target="_blank"
  };

  return (
    <motion.a
      href="https://wa.me/6285777237523?text=Halo%20Printwork,%20saya%20ingin%20bertanya%20tentang%20kemasan%20custom."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waBtn}
      aria-label="Chat via WhatsApp"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.015a9.803 9.803 0 01-4.98-1.366l-.357-.213-3.707.974.99-3.62-.232-.37A9.77 9.77 0 012.255 12.1a9.81 9.81 0 019.8-9.8 9.747 9.747 0 016.94 2.876A9.748 9.748 0 0121.855 12.1a9.81 9.81 0 01-9.805 9.685zM12.05.46C5.653.46.456 5.654.456 12.046A11.55 11.55 0 001.995 18.4L.045 25.54l7.34-1.925A11.58 11.58 0 0012.05 24.6c6.397 0 11.6-5.195 11.6-11.6S18.447.46 12.05.46z"/>
      </svg>
      <span className={styles.pulse} />
    </motion.a>
  );
}
