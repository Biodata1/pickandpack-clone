import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog & Artikel',
  description: 'Berita, artikel, dan wawasan terbaru seputar dunia packaging dari Printwork Indonesia.',
};

const blogPosts = [
  {
    title: '5 Tips Memilih Packaging yang Tepat untuk Bisnis FnB',
    cat: 'ARTIKEL',
    date: '15 April 2026',
    desc: 'Pemilihan kemasan untuk produk makanan dan minuman sangat krusial. Temukan tips memilih packaging yang aman, menarik, dan sesuai dengan produk Anda.',
    featured: true,
    image: '/printwork/editorial/pdf_image_541.jpeg',
  },
  {
    title: 'Tren Packaging 2026: Sustainability & Premium Feel',
    cat: 'ARTIKEL',
    date: '10 April 2026',
    desc: 'Menjelajahi tren kemasan terbaru di tahun 2026 yang lebih berfokus pada keberlanjutan lingkungan tanpa mengorbankan kesan mewah.',
    image: '/printwork/editorial/pdf_image_433.jpeg',
  },
  {
    title: 'Mengapa Custom Packaging Penting untuk Brand?',
    cat: 'ARTIKEL',
    date: '5 April 2026',
    desc: 'Custom packaging bukan sekadar wadah, melainkan alat komunikasi brand yang efektif.',
    image: '/printwork/editorial/pdf_image_528.jpeg',
  },
  {
    title: 'Pentingnya Sertifikasi Food Grade pada Kemasan Makanan',
    cat: 'EDUKASI',
    date: '28 Maret 2026',
    desc: 'Pahami pentingnya menggunakan bahan kemasan yang memiliki sertifikasi food grade demi keamanan konsumen.',
    image: '/printwork/editorial/pdf_image_316.jpeg',
  },
  {
    title: 'Cara Mengoptimalkan Desain Box Pengiriman E-commerce',
    cat: 'TIPS',
    date: '20 Maret 2026',
    desc: 'Box pengiriman adalah titik sentuh pertama pelanggan dengan produk fisik Anda.',
    image: '/printwork/editorial/pdf_image_401.jpeg',
  },
  {
    title: 'Mengenal Berbagai Jenis Bahan Kertas untuk Packaging',
    cat: 'EDUKASI',
    date: '15 Maret 2026',
    desc: 'Ivory, Duplex, Kraft, atau Corrugated? Kenali karakteristik masing-masing bahan.',
    image: '/printwork/editorial/pdf_image_424.jpeg',
  },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Insight & Tips</span>
            <h1>Blog & <em>Artikel</em></h1>
            <p>Berita, artikel, dan wawasan terbaru seputar dunia packaging</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Featured */}
          <Reveal>
            <div className={styles.featured}>
              <div className={styles.featuredImage}>
                <Image 
                  src={featured.image} 
                  alt={featured.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.cat}>{featured.cat}</span>
                <h2>{featured.title}</h2>
                <p>{featured.desc}</p>
                <div className={styles.meta}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span>{featured.date}</span>
                </div>
                <Link href="#" className={styles.readMore}>
                  Baca Selengkapnya
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          <div className={styles.grid}>
            {rest.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <article className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cat}>{post.cat}</span>
                    <h3><Link href="#">{post.title}</Link></h3>
                    <p className={styles.desc}>{post.desc}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.date}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {post.date}
                      </span>
                      <Link href="#" className={styles.readMore}>
                        Baca
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
