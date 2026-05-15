import Image from 'next/image';
import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Company Profile | Printwork Indonesia',
  description: 'Lihat profil lengkap PT Printwork Multigraph Indonesia, produsen kemasan premium terpercaya sejak 2012.',
};

const profilePages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  image: `/printwork/company-profile/page_${i + 1}.png`,
  alt: `Printwork Company Profile Page ${i + 1}`
}));

export default function CompanyProfilePage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Profil Perusahaan</span>
            <h1>Company <em>Profile</em></h1>
            <p>Telusuri detail kapabilitas, mesin, dan portofolio kami melalui profil resmi perusahaan.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.pagesGrid}>
            {profilePages.map((page, i) => (
              <Reveal key={page.id} delay={i * 0.05}>
                <div className={styles.pageCard}>
                  <div className={styles.pageImage}>
                    <Image 
                      src={page.image} 
                      alt={page.alt} 
                      width={800} 
                      height={1131} 
                      className={styles.img}
                      loading={i < 4 ? "eager" : "lazy"}
                    />
                    <div className={styles.pageNumber}>Page {page.id}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.5}>
            <div className={styles.downloadCta}>
              <div className={styles.downloadCard}>
                <h2>Butuh Salinan Digital?</h2>
                <p>Unduh profil perusahaan kami dalam format PDF untuk referensi offline Anda.</p>
                <a href="/printwork/logo printwork (1).pdf" download className={styles.downloadBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Unduh PDF (Profile)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
