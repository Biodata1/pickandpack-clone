'use client';

import { useState, FormEvent } from 'react';
import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const waMessage = [
      `Halo Printwork, saya ingin bertanya tentang kemasan custom.`,
      ``,
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      `Telepon: ${formData.phone}`,
      ``,
      `Pesan:`,
      formData.message,
    ].join('\n');

    const waUrl = `https://wa.me/6285777237523?text=${encodeURIComponent(waMessage)}`;

    setSubmitted(true);

    // Small delay so user sees confirmation before redirect
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Hubungi Kami</span>
            <h1>Get In <em>Touch</em></h1>
            <p>Diskusikan kebutuhan custom packaging Anda. Tim kami siap membantu!</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Side */}
            <Reveal direction="left">
              <div className={styles.infoSide}>
                <h2>Informasi <em>Kontak</em></h2>
                <p className={styles.subtitle}>Jangan ragu untuk menghubungi kami mengenai kebutuhan kemasan Anda.</p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <h3>Alamat Kami</h3>
                      <p>Jl. Kalibaru Timur Dalam No.1 no 30, RT.6/RW.6, Poncol, Bungur, Kec. Senen, DKI Jakarta, Daerah Khusus Ibukota Jakarta 10460</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    </div>
                    <div>
                      <h3>Telepon</h3>
                      <a href="tel:+6285777237523">+62 857-7723-7523</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                    </div>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:printworkmultigraph@gmail.com">printworkmultigraph@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className={styles.mapWrapper}>
                  <iframe
                    src="https://maps.google.com/maps?q=Jl.+Kalibaru+Timur+Dalam+No.1+no+30,+Bungur,+Senen,+Jakarta+Pusat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Printwork Indonesia — Jl. Kalibaru Timur Dalam, Senen, Jakarta Pusat"
                  />
                </div>
              </div>
            </Reveal>

            {/* Form Side */}
            <Reveal direction="right">
              <div className={styles.formCard}>
                <h2>Kirim <em>Pesan</em></h2>
                <p className={styles.formSubtitle}>
                  Isi formulir berikut dan pesan Anda akan dikirim langsung via WhatsApp ke tim kami.
                </p>

                {submitted ? (
                  <div className={styles.successMessage}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Pesan Siap Dikirim!</h3>
                    <p>WhatsApp akan terbuka di tab baru. Kirim pesan untuk menghubungi tim kami.</p>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: '16px', color: 'var(--dark-muted)', borderColor: 'var(--dark-border)' }}
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label>Nama Lengkap</label>
                      <input
                        type="text"
                        placeholder="Nama Anda"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Alamat email Anda"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Nomor Telepon / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="08xx-xxxx-xxxx"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Pesan</label>
                      <textarea
                        rows={5}
                        placeholder="Ceritakan kebutuhan kemasan Anda..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Kirim via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
