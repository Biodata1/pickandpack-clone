import Link from 'next/link';
import styles from './page.module.css';

const blogPosts = [
  {
    title: '5 Tips Memilih Packaging yang Tepat untuk Bisnis FnB',
    cat: 'ARTIKEL',
    date: '15 April 2026',
    desc: 'Pemilihan kemasan untuk produk makanan dan minuman sangat krusial. Temukan tips memilih packaging yang aman, menarik, dan sesuai dengan produk Anda.',
  },
  {
    title: 'Tren Packaging 2026: Sustainability & Premium Feel',
    cat: 'ARTIKEL',
    date: '10 April 2026',
    desc: 'Menjelajahi tren kemasan terbaru di tahun 2026 yang lebih berfokus pada keberlanjutan lingkungan tanpa mengorbankan kesan mewah.',
  },
  {
    title: 'Mengapa Custom Packaging Penting untuk Brand?',
    cat: 'ARTIKEL',
    date: '5 April 2026',
    desc: 'Custom packaging bukan sekadar wadah, melainkan alat komunikasi brand yang efektif. Pelajari mengapa brand Anda perlu mulai menggunakan kemasan custom.',
  },
  {
    title: 'Pentingnya Sertifikasi Food Grade pada Kemasan Makanan',
    cat: 'EDUKASI',
    date: '28 Maret 2026',
    desc: 'Pahami pentingnya menggunakan bahan kemasan yang memiliki sertifikasi food grade demi keamanan dan kesehatan konsumen Anda.',
  },
  {
    title: 'Cara Mengoptimalkan Desain Box Pengiriman E-commerce',
    cat: 'TIPS',
    date: '20 Maret 2026',
    desc: 'Box pengiriman adalah titik sentuh pertama pelanggan dengan produk fisik Anda. Berikut cara membuatnya lebih berkesan.',
  },
  {
    title: 'Mengenal Berbagai Jenis Bahan Kertas untuk Packaging',
    cat: 'EDUKASI',
    date: '15 Maret 2026',
    desc: 'Ivory, Duplex, Kraft, atau Corrugated? Kenali karakteristik masing-masing bahan agar tidak salah pilih untuk produk Anda.',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Posting</h1>
          <p>Berita, artikel, dan wawasan terbaru seputar dunia packaging</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.title} className={styles.card}>
                <div className={styles.cardImage}>
                  <i className="fas fa-newspaper" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cat}>{post.cat}</span>
                  <h3>
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <div className={styles.meta}>
                    <span><i className="far fa-calendar-alt" /> {post.date}</span>
                  </div>
                  <p className={styles.desc}>{post.desc}</p>
                  <Link href="#" className={styles.readMore}>
                    Baca Selengkapnya <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={styles.pageBtn} disabled><i className="fas fa-chevron-left" /></button>
            <button className={`${styles.pageBtn} ${styles.pageActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}><i className="fas fa-chevron-right" /></button>
          </div>
        </div>
      </section>
    </>
  );
}
