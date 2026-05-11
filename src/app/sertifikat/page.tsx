import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const certifications = [
  {
    emoji: '🌿',
    title: 'FSC Certified',
    desc: 'Bahan baku kami bersertifikasi FSC (Forest Stewardship Council) yang menjamin pengelolaan hutan yang bertanggung jawab.',
    color: '#4CAF50',
  },
  {
    emoji: '🛡️',
    title: 'ISO 9001:2015',
    desc: 'Sistem manajemen mutu kami telah tersertifikasi ISO 9001:2015, menjamin kualitas produk yang konsisten.',
    color: '#2196F3',
  },
  {
    emoji: '🍽️',
    title: 'BPOM Food Grade',
    desc: 'Produk food packaging kami telah memenuhi standar BPOM untuk keamanan pangan dan bersertifikat food grade.',
    color: '#FF9800',
  },
  {
    emoji: '♻️',
    title: 'Eco Friendly',
    desc: 'Komitmen kami terhadap lingkungan dengan menggunakan bahan baku yang ramah lingkungan dan recyclable.',
    color: '#849178',
  },
];

const commitPoints = [
  'Quality Control di setiap tahap produksi',
  'Bahan baku berkualitas tinggi',
  'Proses produksi terstandarisasi',
  'Pengiriman tepat waktu',
];

export default function SertifikatPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.headerBadge}>Standar Kualitas</span>
            <h1>Serti<em>fikat</em></h1>
            <p>Standar kualitas dan sertifikasi yang kami miliki untuk menjamin produk terbaik</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal stagger>
            <div className={styles.grid}>
              {certifications.map((cert) => (
                <div key={cert.title} className={styles.card}>
                  <div className={styles.cardIcon} style={{ background: `${cert.color}12`, borderColor: `${cert.color}30` }}>
                    <span>{cert.emoji}</span>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.desc}</p>
                  <div className={styles.cardAccent} style={{ background: cert.color }} />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.commitment}>
              <div className={styles.commitContent}>
                <span className={styles.headerBadge} style={{ borderColor: 'rgba(var(--primary-rgb), 0.2)', color: 'var(--primary)', background: 'rgba(var(--primary-rgb), 0.05)' }}>Komitmen</span>
                <h2>Komitmen Kualitas <em>Kami</em></h2>
                <p>
                  Printwork Indonesia berkomitmen untuk selalu menjaga dan meningkatkan kualitas produk kami.
                  Setiap kemasan yang kami produksi melalui proses Quality Control yang ketat untuk
                  memastikan kepuasan pelanggan.
                </p>
                <div className={styles.commitPoints}>
                  {commitPoints.map((point) => (
                    <div key={point} className={styles.commitItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"/></svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
