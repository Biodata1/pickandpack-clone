import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const portfolioItems = [
  { brand: 'Coach', industry: 'Fashion & Luxury', type: 'Premium Box', image: '/printwork/pdf_image_12.jpeg' },
  { brand: 'SOCIOLLA', industry: 'Beauty & Cosmetic', type: 'Skincare Box', image: '/printwork/pdf_image_14.jpeg' },
  { brand: 'BCA Solitaire', industry: 'Banking', type: 'Gift Box', image: '/printwork/pdf_image_23.jpeg' },
  { brand: 'Kopi Kenangan', industry: 'Food & Beverage', type: 'Cup & Sleeve', image: '/printwork/pdf_image_26.jpeg' },
  { brand: 'Janji Jiwa', industry: 'Food & Beverage', type: 'Paper Cup', image: '/printwork/pdf_image_28.jpeg' },
  { brand: 'Fred Perry', industry: 'Fashion', type: 'Rigid Box', image: '/printwork/pdf_image_33.jpeg' },
  { brand: 'Bakerman', industry: 'Bakery', type: 'Bread Box', image: '/printwork/pdf_image_35.jpeg' },
  { brand: 'Eatlah', industry: 'Food & Beverage', type: 'Food Pail', image: '/printwork/pdf_image_41.jpeg' },
];

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.headerBadge}>Klien Kami</span>
            <h1>Porto<em>folio</em></h1>
            <p>Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal stagger>
            <div className={styles.grid}>
              {portfolioItems.map((item) => (
                <div key={item.brand} className={styles.card}>
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
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
