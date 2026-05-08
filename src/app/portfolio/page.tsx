import styles from './page.module.css';

const portfolioItems = [
  { brand: 'Coach', industry: 'Fashion & Luxury', type: 'Premium Box' },
  { brand: 'SOCIOLLA', industry: 'Beauty & Cosmetic', type: 'Skincare Box' },
  { brand: 'BCA Solitaire', industry: 'Banking', type: 'Gift Box' },
  { brand: 'Kopi Kenangan', industry: 'Food & Beverage', type: 'Cup & Sleeve' },
  { brand: 'Janji Jiwa', industry: 'Food & Beverage', type: 'Paper Cup' },
  { brand: 'Fred Perry', industry: 'Fashion', type: 'Rigid Box' },
  { brand: 'Bakerman', industry: 'Bakery', type: 'Bread Box' },
  { brand: 'Dear Butter', industry: 'Bakery', type: 'Cookie Box' },
  { brand: 'Facetology', industry: 'Skincare', type: 'Serum Box' },
  { brand: 'Eatlah', industry: 'Food & Beverage', type: 'Food Pail' },
  { brand: 'HOWEL N CO', industry: 'Fashion', type: 'Shopping Bag' },
  { brand: 'Naked Papa', industry: 'Bakery', type: 'Pastry Box' },
  { brand: 'Ramen Yuk', industry: 'Food & Beverage', type: 'Paper Bowl' },
  { brand: 'Scarletts', industry: 'Skincare', type: 'Cosmetic Set Box' },
  { brand: 'Sec Bowl', industry: 'Food & Beverage', type: 'Bowl & Lid' },
  { brand: 'Social Affair', industry: 'Food & Beverage', type: 'Coffee Cup' },
  { brand: 'RUCAS', industry: 'Beauty', type: 'Premium Box' },
  { brand: 'BAUTY HAUL', industry: 'Beauty', type: 'Skincare Box' },
  { brand: 'TEMU', industry: 'E-commerce', type: 'Mailer Box' },
  { brand: 'EVOLENE', industry: 'Health & Fitness', type: 'Supplement Box' },
  { brand: 'GRILL BOX', industry: 'Food & Beverage', type: 'Lunch Box' },
  { brand: 'SAYAP SUCI', industry: 'Food & Beverage', type: 'Paper Bag' },
  { brand: 'LILLA BABY', industry: 'Baby Product', type: 'Gift Box' },
  { brand: 'YUMMY CHOICE', industry: 'Food & Beverage', type: 'Snack Box' },
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
                <div className={styles.cardImage} style={{ background: `${colors[i % colors.length]}15` }}>
                  <span style={{ color: colors[i % colors.length], fontSize: 36, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    {item.brand.charAt(0)}
                  </span>
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
