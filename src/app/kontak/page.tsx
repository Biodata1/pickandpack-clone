import { Metadata } from 'next';
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
          <h1>Hubungi Kami</h1>
          <p>Konsultasikan kebutuhan custom packaging Anda. Tim kami siap membantu!</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Side */}
            <div className={styles.infoSide}>
              <h2>Informasi Kontak</h2>
              <p className={styles.subtitle}>Jangan ragu untuk menghubungi kami untuk konsultasi gratis mengenai kebutuhan kemasan Anda.</p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <h3>Our Address</h3>
                    <p>Grand Puri Laras, Jl. Pisangan Raya, Cireundeu, Ciputat Timur, Tangerang Selatan</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div>
                    <h3>Our Number</h3>
                    <a href="tel:+6281113000966">0811-1300-0966</a>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}>
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <h3>Our Email</h3>
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

            {/* Form Side */}
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                <h2>Kirim Pesan</h2>
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
                    <textarea rows={5} placeholder="Pesan Anda..." required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    KIRIM PESAN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
