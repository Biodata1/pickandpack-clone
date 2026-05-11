import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

const categories = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'fnb', label: 'FnB Packaging' },
  { id: 'skincare', label: 'Skincare Packaging' },
  { id: 'premium', label: 'Premium Packaging' },
  { id: 'shipping', label: 'Shipping Packaging' },
];

const products = [
  { name: 'Lunch Box & Pail', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan makanan dengan bahan food grade berkualitas tinggi.', image: '/printwork/lunchbox-ek-jumbo-1.webp' },
  { name: 'Dus Nasi & Martabak', tag: 'Custom', cat: 'fnb', desc: 'Kemasan nasi dan martabak custom sesuai brand Anda.', image: '/printwork/lunchbox-fg-jumbo-1.webp' },
  { name: 'Dus Fried Chicken', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan khusus ayam goreng, tahan minyak dan food grade.', image: '/printwork/fc-box-l-1.webp' },
  { name: 'Kantong Kertas', tag: 'Eco Friendly', cat: 'fnb', desc: 'Paper bag ramah lingkungan untuk berbagai kebutuhan.', image: '/printwork/paperbag-m-1.webp' },
  { name: 'Packaging & Hard Box', tag: 'Premium', cat: 'premium', desc: 'Kotak kaku premium untuk produk high-end Anda.', image: '/printwork/standing-pouch-paper-metalized-1.webp' },
  { name: 'Sachet & Standing Pouch', tag: 'Custom', cat: 'premium', desc: 'Pouch fleksibel untuk kopi, bumbu, snack, dan lainnya.', image: '/printwork/sachet-paper-metalized-1.webp' },
  { name: 'Food Wrapping Paper', tag: 'Food Grade', cat: 'fnb', desc: 'Kertas bungkus makanan food grade bersertifikasi BPOM.', image: '/printwork/gusset-paper-metalized-1.webp' },
  { name: 'Kemasan Lainnya', tag: 'Custom', cat: 'premium', desc: 'Berbagai jenis packaging custom sesuai kebutuhan bisnis.', image: '/printwork/food-pail-m-1.webp' },
];

export default async function ProdukPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const params = await searchParams;
  const activeCat = params.cat || 'all';
  const filtered = activeCat === 'all' ? products : products.filter((p) => p.cat === activeCat);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <ScrollReveal>
            <span className={styles.headerBadge}>Katalog Produk</span>
            <h1>Produk <em>Kami</em></h1>
            <p>Berbagai jenis custom packaging berkualitas untuk kebutuhan bisnis Anda</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
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
          </ScrollReveal>

          <ScrollReveal delay={100} stagger>
            <div className={styles.grid}>
              {filtered.map((p) => (
                <div key={p.name} className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    <div className={styles.cardOverlay}>
                      <a
                        href={`https://wa.me/6281113000966?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayBtn}
                      >
                        Tanya Produk Ini
                      </a>
                    </div>
                    <span className={styles.tag}>{p.tag}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <a
                      href={`https://wa.me/6281113000966?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Detail klik disini
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
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
