import Link from 'next/link';
import styles from './page.module.css';

const categories = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'fnb', label: 'FnB Packaging' },
  { id: 'skincare', label: 'Skincare Packaging' },
  { id: 'premium', label: 'Premium Packaging' },
  { id: 'shipping', label: 'Shipping Packaging' },
];

const products = [
  { name: 'Food Pail', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan food pail custom untuk berbagai jenis makanan.' },
  { name: 'Lunch Box', tag: 'Food Grade', cat: 'fnb', desc: 'Kotak makan siang dengan desain custom sesuai brand Anda.' },
  { name: 'Kotak Burger', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan burger custom dengan berbagai ukuran.' },
  { name: 'Kantong Makanan', tag: 'Food Grade', cat: 'fnb', desc: 'Paper bag makanan food grade untuk take away.' },
  { name: 'Paper Bowl', tag: 'Food Grade', cat: 'fnb', desc: 'Mangkuk kertas untuk soup, rice bowl, dan lainnya.' },
  { name: 'Wrapper', tag: 'Food Grade', cat: 'fnb', desc: 'Pembungkus makanan custom dengan cetak full color.' },
  { name: 'Sleeve', tag: 'Food Grade', cat: 'fnb', desc: 'Sleeve custom untuk cup, botol, dan packaging lainnya.' },
  { name: 'Kotak Pizza', tag: 'Food Grade', cat: 'fnb', desc: 'Box pizza dengan berbagai ukuran dan desain.' },
  { name: 'Skincare Box', tag: 'Premium', cat: 'skincare', desc: 'Kemasan premium untuk produk skincare dan kecantikan.' },
  { name: 'Serum Box', tag: 'Premium', cat: 'skincare', desc: 'Box serum dengan finishing mewah dan elegan.' },
  { name: 'Cosmetic Set Box', tag: 'Premium', cat: 'skincare', desc: 'Kemasan set kosmetik dengan insert custom.' },
  { name: 'Gift Box', tag: 'Premium', cat: 'premium', desc: 'Kotak hadiah premium dengan desain eksklusif.' },
  { name: 'Hampers Box', tag: 'Premium', cat: 'premium', desc: 'Box hampers untuk berbagai occasion dan event.' },
  { name: 'Rigid Box', tag: 'Premium', cat: 'premium', desc: 'Hardbox premium dengan finishing hot stamp dan emboss.' },
  { name: 'Corrugated Box', tag: 'Shipping', cat: 'shipping', desc: 'Kardus corrugated custom untuk pengiriman.' },
  { name: 'Mailer Box', tag: 'Shipping', cat: 'shipping', desc: 'Box pengiriman e-commerce dengan cetak custom.' },
];

export default async function ProdukPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const params = await searchParams;
  const activeCat = params.cat || 'all';
  const filtered = activeCat === 'all' ? products : products.filter((p) => p.cat === activeCat);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Produk Kami</h1>
          <p>Berbagai jenis custom packaging untuk kebutuhan bisnis Anda</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.id === 'all' ? '/produk' : `/produk?cat=${cat.id}`}
                className={`${styles.filterBtn} ${activeCat === cat.id ? styles.filterActive : ''}`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Products Grid */}
          <div className={styles.grid}>
            {filtered.map((p) => (
              <div key={p.name} className={styles.card}>
                <div className={styles.cardImage}>
                  <i className="fas fa-box-open" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.tag}>{p.tag}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a
                    href={`https://wa.me/6285169577447?text=Halo, saya tertarik dengan produk ${p.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    Detail klik disini <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
