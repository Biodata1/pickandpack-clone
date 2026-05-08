import styles from './page.module.css';

const certifications = [
  {
    icon: 'fas fa-tree',
    title: 'FSC Certified',
    desc: 'Bahan baku kami bersertifikasi FSC (Forest Stewardship Council) yang menjamin pengelolaan hutan yang bertanggung jawab.',
    color: '#4CAF50',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'ISO 9001:2015',
    desc: 'Sistem manajemen mutu kami telah tersertifikasi ISO 9001:2015, menjamin kualitas produk yang konsisten.',
    color: '#2196F3',
  },
  {
    icon: 'fas fa-utensils',
    title: 'BPOM Food Grade',
    desc: 'Produk food packaging kami telah memenuhi standar BPOM untuk keamanan pangan dan bersertifikat food grade.',
    color: '#FF9800',
  },
  {
    icon: 'fas fa-leaf',
    title: 'Eco Friendly',
    desc: 'Komitmen kami terhadap lingkungan dengan menggunakan bahan baku yang ramah lingkungan dan recyclable.',
    color: '#849178',
  },
];

export default function SertifikatPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Sertifikat</h1>
          <p>Standar kualitas dan sertifikasi yang kami miliki</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.card}>
                <div className={styles.cardIcon} style={{ background: `${cert.color}12`, color: cert.color }}>
                  <i className={cert.icon} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.commitment}>
            <h2>Komitmen Kualitas Kami</h2>
            <p>
              Pick and Pack berkomitmen untuk selalu menjaga dan meningkatkan kualitas produk kami.
              Setiap kemasan yang kami produksi melalui proses Quality Control yang ketat untuk
              memastikan kepuasan pelanggan.
            </p>
            <div className={styles.commitPoints}>
              <div className={styles.commitItem}>
                <i className="fas fa-check-circle" />
                <span>Quality Control di setiap tahap produksi</span>
              </div>
              <div className={styles.commitItem}>
                <i className="fas fa-check-circle" />
                <span>Bahan baku berkualitas tinggi</span>
              </div>
              <div className={styles.commitItem}>
                <i className="fas fa-check-circle" />
                <span>Proses produksi terstandarisasi</span>
              </div>
              <div className={styles.commitItem}>
                <i className="fas fa-check-circle" />
                <span>Pengiriman tepat waktu</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
