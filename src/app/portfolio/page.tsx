import Image from 'next/image';
import styles from './page.module.css';

const portfolioItems = [
  { brand: 'Coach', industry: 'Fashion & Luxury', type: 'Premium Box', image: 'https://www.printwork.id/images/project-img1.webp' },
  { brand: 'SOCIOLLA', industry: 'Beauty & Cosmetic', type: 'Skincare Box', image: 'https://www.printwork.id/images/project-img2.webp' },
  { brand: 'BCA Solitaire', industry: 'Banking', type: 'Gift Box', image: 'https://www.printwork.id/images/project-img3.webp' },
  { brand: 'Kopi Kenangan', industry: 'Food & Beverage', type: 'Cup & Sleeve', image: 'https://www.printwork.id/images/project-img4.webp' },
  { brand: 'Janji Jiwa', industry: 'Food & Beverage', type: 'Paper Cup', image: 'https://www.printwork.id/images/project-img5.webp' },
  { brand: 'Fred Perry', industry: 'Fashion', type: 'Rigid Box', image: 'https://www.printwork.id/images/project-img6.webp' },
  { brand: 'Bakerman', industry: 'Bakery', type: 'Bread Box', image: 'https://www.printwork.id/images/project-img7.webp' },
  { brand: 'Eatlah', industry: 'Food & Beverage', type: 'Food Pail', image: 'https://www.printwork.id/images/project-img8.webp' },
];

const colors = ['#849178', '#5D4037', '#8B5CF6', '#2196F3', '#E91E63', '#FF9800', '#00BCD4', '#4CAF50'];

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Portofolio</h1>
          <p>Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka kepada kami</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {portfolioItems.map((item, i) => (
              <div key={item.brand} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={item.image}
                    alt={item.brand}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3>{item.brand}</h3>
                  <p className={styles.industry}>{item.industry}</p>
                  <span className={styles.type}>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
