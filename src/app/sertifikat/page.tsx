import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sertifikat & Standar Kualitas',
  description: 'Standar kualitas dan sertifikasi yang dimiliki Printwork Indonesia untuk menjamin produk terbaik.',
};

const certifications = [
  {
    emoji: '🌿',
    title: 'FSC Certified',
    desc: 'Bahan baku kami bersertifikasi FSC (Forest Stewardship Council) yang menjamin pengelolaan hutan yang bertanggung jawab.',
  },
  {
    emoji: '🛡️',
    title: 'ISO 9001:2015',
    desc: 'Sistem manajemen mutu kami telah tersertifikasi ISO 9001:2015, menjamin kualitas produk yang konsisten.',
  },
  {
    emoji: '🍽️',
    title: 'BPOM Food Grade',
    desc: 'Produk food packaging kami telah memenuhi standar BPOM untuk keamanan pangan dan bersertifikat food grade.',
  },
  {
    emoji: '♻️',
    title: 'Eco Friendly',
    desc: 'Komitmen kami terhadap lingkungan dengan menggunakan bahan baku yang ramah lingkungan dan recyclable.',
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
          <Reveal>
            <span className="eyebrow">Standar Kualitas</span>
            <h1>Serti<em>fikat</em></h1>
            <p>Standar kualitas dan sertifikasi yang kami miliki untuk menjamin produk terbaik</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.1}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <span>{cert.emoji}</span>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className={styles.commitment}>
              <div className={styles.commitContent}>
                <span className="eyebrow">Komitmen</span>
                <h2>Komitmen Kualitas <em>Kami</em></h2>
                <p>
                  Printwork Indonesia berkomitmen untuk selalu menjaga dan meningkatkan kualitas produk kami.
                  Setiap kemasan yang kami produksi melalui proses Quality Control yang ketat untuk
                  memastikan kepuasan pelanggan.
                </p>
                <div className={styles.commitPoints}>
                  {commitPoints.map((point) => (
                    <div key={point} className={styles.commitItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
