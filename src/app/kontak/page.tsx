import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hubungi Kami — Printwork Indonesia',
  description: 'Hubungi Printwork Indonesia untuk konsultasi kebutuhan custom packaging Anda. Kami siap membantu!',
};

export default function KontakPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.headerBadge}>Hubungi Kami</span>
            <h1>Get In <em>Touch</em></h1>
            <p>Konsultasikan kebutuhan custom packaging Anda. Tim kami siap membantu!</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Side */}
            <ScrollReveal direction="left">
              <div className={styles.infoSide}>
                <h2>Informasi <em>Kontak</em></h2>
                <p className={styles.subtitle}>Jangan ragu untuk menghubungi kami untuk konsultasi gratis mengenai kebutuhan kemasan Anda.</p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h3>Alamat Kami</h3>
                      <p>Grand Puri Laras, Jl. Pisangan Raya, Cireundeu, Ciputat Timur, Tangerang Selatan</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    </div>
                    <div>
                      <h3>Telepon</h3>
                      <a href="tel:+6281113000966">0811-1300-0966</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                    </div>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:info@printwork.id">info@printwork.id</a>
                    </div>
                  </div>
                </div>

                <div className={styles.mapWrapper}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Printwork Indonesia"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Form Side */}
            <ScrollReveal direction="right">
              <div className={styles.formCard}>
                <h2>Kirim <em>Pesan</em></h2>
                <p className={styles.formSubtitle}>Isi formulir berikut dan tim kami akan menghubungi Anda dalam 1x24 jam.</p>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Nama Anda" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Alamat email Anda" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Nomor Telepon / WhatsApp</label>
                    <input type="tel" placeholder="08xx-xxxx-xxxx" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Pesan</label>
                    <textarea rows={5} placeholder="Ceritakan kebutuhan kemasan Anda..." required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
