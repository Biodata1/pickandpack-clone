import Image from 'next/image';
import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka kepada Printwork Indonesia.',
};

const portfolioItems = [
  { brand: 'Coach', industry: 'Fashion & Luxury', type: 'Premium Box', image: '/printwork/editorial/pdf_image_316.jpeg' },
  { brand: 'SOCIOLLA', industry: 'Beauty & Cosmetic', type: 'Skincare Box', image: '/printwork/editorial/pdf_image_401.jpeg' },
  { brand: 'BCA Solitaire', industry: 'Banking', type: 'Gift Box', image: '/printwork/editorial/pdf_image_424.jpeg' },
  { brand: 'Kopi Kenangan', industry: 'Food & Beverage', type: 'Cup & Sleeve', image: '/printwork/products/lunchbox-ek-jumbo-1.webp' },
  { brand: 'Janji Jiwa', industry: 'Food & Beverage', type: 'Paper Cup', image: '/printwork/products/standing-pouch-paper-metalized-1.webp' },
  { brand: 'Fred Perry', industry: 'Fashion', type: 'Rigid Box', image: '/printwork/products/fc-box-l-1.webp' },
  { brand: 'Bakerman', industry: 'Bakery', type: 'Bread Box', image: '/printwork/products/food-pail-m-1.webp' },
  { brand: 'Eatlah', industry: 'Food & Beverage', type: 'Food Pail', image: '/printwork/products/paperbag-m-1.webp' },
  { brand: 'ShuShu', industry: 'Beverage', type: 'Custom Sleeve', image: '/printwork/editorial/pdf_image_207.png' },
  { brand: 'Union', industry: 'F&B', type: 'Luxury Pastry Box', image: '/printwork/editorial/pdf_image_272.png' },
  { brand: 'Fore Coffee', industry: 'Beverage', type: 'Eco Cup Sleeve', image: '/printwork/editorial/pdf_image_433.jpeg' },
  { brand: 'Common Grounds', industry: 'Coffee', type: 'Premium Pouch', image: '/printwork/editorial/pdf_image_528.jpeg' },
  { brand: 'Laneige', industry: 'Beauty', type: 'Holiday Box', image: '/printwork/editorial/pdf_image_302.jpeg' },
  { brand: 'Paris Baguette', industry: 'Bakery', type: 'Pastry Packaging', image: '/printwork/editorial/pdf_image_450.jpeg' },
  { brand: 'The Body Shop', industry: 'Personal Care', type: 'Gift Set', image: '/printwork/editorial/pdf_image_12.jpeg' },
  { brand: 'Kyochon', industry: 'F&B', type: 'Takeaway Box', image: '/printwork/editorial/pdf_image_48.jpeg' },
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
