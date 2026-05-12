import Image from 'next/image';
import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka kepada Printwork Indonesia.',
};

const portfolioItems = [
  { brand: 'Coach', industry: 'Fashion & Luxury', type: 'Premium Box', image: '/printwork/pdf_image_316.jpeg' },
  { brand: 'SOCIOLLA', industry: 'Beauty & Cosmetic', type: 'Skincare Box', image: '/printwork/pdf_image_401.jpeg' },
  { brand: 'BCA Solitaire', industry: 'Banking', type: 'Gift Box', image: '/printwork/pdf_image_424.jpeg' },
  { brand: 'Kopi Kenangan', industry: 'Food & Beverage', type: 'Cup & Sleeve', image: '/printwork/lunchbox-ek-jumbo-1.webp' },
  { brand: 'Janji Jiwa', industry: 'Food & Beverage', type: 'Paper Cup', image: '/printwork/standing-pouch-paper-metalized-1.webp' },
  { brand: 'Fred Perry', industry: 'Fashion', type: 'Rigid Box', image: '/printwork/fc-box-l-1.webp' },
  { brand: 'Bakerman', industry: 'Bakery', type: 'Bread Box', image: '/printwork/food-pail-m-1.webp' },
  { brand: 'Eatlah', industry: 'Food & Beverage', type: 'Food Pail', image: '/printwork/paperbag-m-1.webp' },
];

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Klien Kami</span>
            <h1>Porto<em>folio</em></h1>
            <p>Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {portfolioItems.map((item, i) => (
              <Reveal key={item.brand} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={item.image} alt={item.brand} fill style={{ objectFit: 'cover' }} />
                    <div className={styles.cardOverlay}>
                      <div className={styles.overlayContent}>
                        <span className={styles.overlayType}>{item.type}</span>
                        <h3>{item.brand}</h3>
                        <p>{item.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
