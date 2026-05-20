'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';
import { trackLead } from '@/lib/tracking';

const categories = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'fnb', label: 'FnB Packaging' },
  { id: 'skincare', label: 'Skincare Packaging' },
  { id: 'premium', label: 'Premium Packaging' },
  { id: 'shipping', label: 'Shipping Packaging' },
];

const products = [
  { name: 'Lunch Box & Pail', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan makanan dengan bahan food grade berkualitas tinggi.', image: '/printwork/products/lunch box food grade.webp' },
  { name: 'Dus Nasi & Martabak', tag: 'Custom', cat: 'fnb', desc: 'Kemasan nasi dan martabak custom sesuai brand Anda.', image: '/printwork/products/dus nasi atasan 1.webp' },
  { name: 'Dus Fried Chicken', tag: 'Food Grade', cat: 'fnb', desc: 'Kemasan khusus ayam goreng, tahan minyak dan food grade.', image: '/printwork/products/dus fried chicken duplex 310 gr.webp' },
  { name: 'Kantong Kertas', tag: 'Eco Friendly', cat: 'fnb', desc: 'Paper bag ramah lingkungan untuk berbagai kebutuhan.', image: '/printwork/products/kantong ayam goreng s.webp' },
  { name: 'Packaging & Hard Box', tag: 'Premium', cat: 'premium', desc: 'Kotak kaku premium untuk produk high-end Anda.', image: '/printwork/products/standing pouch paper metalized.webp' },
  { name: 'Sachet & Standing Pouch', tag: 'Custom', cat: 'premium', desc: 'Pouch fleksibel untuk kopi, bumbu, snack, dan lainnya.', image: '/printwork/products/sachet paper metalized.webp' },
  { name: 'Food Wrapping Paper', tag: 'Food Grade', cat: 'fnb', desc: 'Kertas bungkus makanan food grade bersertifikasi BPOM.', image: '/printwork/products/food wrapping paper.jpeg' },
  { name: 'Burger Box', tag: 'Eco-Kraft', cat: 'fnb', desc: 'Kemasan burger eco-kraft premium untuk brand F&B modern.', image: '/printwork/products/burger box eco-kraft.webp' },
  { name: 'Food Tray', tag: 'Food Grade', cat: 'fnb', desc: 'Tray makanan food grade cocok untuk nasi dan lauk.', image: '/printwork/products/food tray eco kraft.webp' },
  { name: 'Dus Kentang Goreng', tag: 'Custom', cat: 'fnb', desc: 'Kemasan fries box custom dengan cetak full color.', image: '/printwork/products/dus kentang goreng 1.webp' },
  { name: 'Food Pail', tag: 'Premium', cat: 'premium', desc: 'Pail kemasan premium untuk rice bowl dan noodle.', image: '/printwork/products/food pail food grade.webp' },
  { name: 'Gusset Pouch', tag: 'Custom', cat: 'premium', desc: 'Gusset paper metalized untuk kopi dan snack premium.', image: '/printwork/products/gusset paper metalized.webp' },
  { name: 'Gift Wrap Paper', tag: 'Non-Food', cat: 'shipping', desc: 'Kertas kado custom premium untuk kebutuhan branding retail.', image: '/printwork/products/gift wrap (non-food).webp' },
  { name: 'Lunch Box XS', tag: 'Compact', cat: 'fnb', desc: 'Varian kotak makan ukuran kecil, cocok untuk snack box.', image: '/printwork/products/lunch box xs food grade.webp' },
  { name: 'Paperbag Medium', tag: 'Retail', cat: 'shipping', desc: 'Tas kertas kuat dengan desain elegan untuk belanja.', image: '/printwork/products/paperbag-m-1.webp' },
  { name: 'Sachet Premium', tag: 'Alu-foil', cat: 'premium', desc: 'Kemasan sachet kedap udara untuk menjaga kesegaran produk.', image: '/printwork/products/sachet-paper-metalized-1.webp' },
  { name: 'Standing Pouch', tag: 'Ziplock', cat: 'premium', desc: 'Pouch berdiri dengan ziplock untuk kemudahan konsumen.', image: '/printwork/products/standing-pouch-paper-metalized-1.webp' },
];

/** Track product inquiry click (fire & forget) */
function handleProductClick(productName: string) {
  trackLead({
    nama: 'Pengunjung Anonim',
    nomor_wa: '-',
    produk: productName,
    tipe_lead: 'wa_click',
    path: typeof window !== 'undefined' ? window.location.href : '/produk',
  });
}

export default function ProdukPage() {
  return (
    <Suspense fallback={<ProdukLoading />}>
      <ProdukContent />
    </Suspense>
  );
}

function ProdukLoading() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <span className="eyebrow">Katalog Produk</span>
          <h1>Produk <em>Kami</em></h1>
          <p>Berbagai jenis custom packaging berkualitas untuk kebutuhan bisnis Anda</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ minHeight: '60vh' }} />
        </div>
      </section>
    </>
  );
}

function ProdukContent() {
  const searchParams = useSearchParams();
  const activeCat = searchParams.get('cat') || 'all';
  const filtered = activeCat === 'all' ? products : products.filter((p) => p.cat === activeCat);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Katalog Produk</span>
            <h1>Produk <em>Kami</em></h1>
            <p>Berbagai jenis custom packaging berkualitas untuk kebutuhan bisnis Anda</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.filterWrapper}>
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
            </div>
          </Reveal>

          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    <div className={styles.cardOverlay}>
                      <a
                        href={`https://wa.me/6285777237523?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayBtn}
                        onClick={() => handleProductClick(p.name)}
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
                      href={`https://wa.me/6285777237523?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      onClick={() => handleProductClick(p.name)}
                    >
                      Detail klik disini
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
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
