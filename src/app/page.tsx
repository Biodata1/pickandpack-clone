import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import styles from './page.module.css';

const stats = [
  { value: '350+', label: 'Brands Trusted Us' },
  { value: '10+', label: 'Years Experience' },
  { value: '1M+', label: 'Boxes Produced' },
];

const whyUs = [
  { icon: 'fas fa-paint-brush', title: 'Custom Design', desc: 'Pola khusus untuk Anda. Tim kami akan menciptakan pola packaging khusus yang sesuai untuk bisnis Anda.' },
  { icon: 'fas fa-award', title: 'Best Quality', desc: 'Material berkualitas tinggi. Kami menggunakan bahan baku terbaik untuk menghasilkan kemasan premium.' },
  { icon: 'fas fa-bolt', title: 'Fast Production', desc: 'Produksi tepat waktu. Proses produksi efisien dengan standar Quality Control yang ketat.' },
  { icon: 'fas fa-leaf', title: 'Eco Friendly', desc: 'Ramah lingkungan. Bahan baku kami bersertifikasi FSC dan mendukung pengelolaan hutan berkelanjutan.' },
];

const products = [
  { name: 'Food Pail', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Lunch Box', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Kotak Burger', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Kantong Makanan', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Paper Bowl', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Wrapper', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Sleeve', tag: 'Food Grade', cat: 'fnb' },
  { name: 'Kotak Pizza', tag: 'Food Grade', cat: 'fnb' },
];

const orderSteps = [
  { num: '01', title: 'Konsultasi', desc: 'Hubungi admin sales kami untuk diskusi kebutuhan packaging Anda.' },
  { num: '02', title: 'Penawaran', desc: 'Kami akan menghitung dan menginformasikan penawaran harga terbaik.' },
  { num: '03', title: 'Produksi', desc: 'Setelah sampel disetujui, masuk ke tahap produksi massal.' },
  { num: '04', title: 'Pengiriman', desc: 'Packaging dikirim ke alamat Anda dengan aman dan tepat waktu.' },
];

const benefits = [
  { icon: 'fas fa-drafting-compass', title: 'Pola khusus untuk Anda', desc: 'Tim kami akan menciptakan pola packaging khusus yang sesuai untuk bisnis Anda.' },
  { icon: 'fas fa-coins', title: 'Efisiensi biaya', desc: 'Membantu menentukan ukuran, bahan dan finishing packaging yang paling efisien untuk bisnis Anda.' },
  { icon: 'fas fa-print', title: 'Cetak kemasan sesuai kebutuhan', desc: 'Batas pemesanan minimum (MOQ) yang kompetitif untuk semua skala bisnis.' },
];

const clients = [
  'Coach', 'SOCIOLLA', 'BCA Solitaire', 'Kopi Kenangan', 'Janji Jiwa',
  'Fred Perry', 'Bakerman', 'Dear Butter', 'Facetology', 'Eatlah',
  'HOWEL N CO', 'Naked Papa', 'Ramen Yuk', 'Scarletts', 'Sec Bowl',
  'Social Affair', 'RUCAS', 'BAUTY HAUL', 'TEMU', 'EVOLENE',
  'GRILL BOX', 'SAYAP SUCI', 'LILLA BABY', 'YUMMY CHOICE',
];

const blogPosts = [
  { title: '5 Tips Memilih Packaging yang Tepat untuk Bisnis FnB', cat: 'ARTIKEL', date: '15 April 2026' },
  { title: 'Tren Packaging 2026: Sustainability & Premium Feel', cat: 'ARTIKEL', date: '10 April 2026' },
  { title: 'Mengapa Custom Packaging Penting untuk Brand?', cat: 'ARTIKEL', date: '5 April 2026' },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* === Anti-Fraud Notice === */}
      <section className={styles.fraudNotice}>
        <div className="container">
          <div className={styles.fraudContent}>
            <div className={styles.fraudIcon}>
              <i className="fas fa-exclamation-triangle" />
            </div>
            <div>
              <h3>WASPADALAH TERHADAP UPAYA PENIPUAN!</h3>
              <p>Pickandpack adalah perusahaan CUSTOM PAPER PACKAGING yang hanya memiliki nomor team sales RESMI sebagai berikut:</p>
              <a
                href="https://wa.me/6285169577447"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fraudPhone}
              >
                <i className="fab fa-whatsapp" /> 0851-6957-7447 (Click here)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === Stats === */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Mengapa Memilih Kami === */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Mengapa Memilih Kami</h2>
            <p>Solusi packaging terbaik dengan standar kualitas internasional</p>
          </div>
          <div className={styles.whyGrid}>
            {whyUs.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyIcon}>
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Produk Kami === */}
      <section className={`section ${styles.productSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Produk Kami</h2>
            <p>Berbagai jenis custom packaging untuk kebutuhan bisnis Anda</p>
          </div>
          <div className={styles.helpBtn}>
            <a
              href="https://wa.me/6285169577447?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20produk%20packaging"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-whatsapp" /> Kami Siap Membantu Anda
            </a>
          </div>
          <div className={styles.productsGrid}>
            {products.map((p) => (
              <div key={p.name} className={styles.productCard}>
                <div className={styles.productImage}>
                  <i className="fas fa-box-open" />
                </div>
                <div className={styles.productInfo}>
                  <h3>{p.name}</h3>
                  <span className={styles.productTag}>{p.tag}</span>
                  <Link href={`/produk?cat=${p.cat}`} className={styles.productLink}>
                    Detail klik disini <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/produk" className="btn btn-outline">
              LIHAT SEMUA PRODUK
            </Link>
          </div>
        </div>
      </section>

      {/* === Cara Order === */}
      <section className={`section ${styles.orderSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Cara Order</h2>
            <p>Proses pemesanan yang mudah dan transparan</p>
          </div>
          <div className={styles.stepsGrid}>
            {orderSteps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Lebih Banyak Manfaat === */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <div className={styles.benefitsLayout}>
            <div className={styles.benefitsText}>
              <h2>Lebih Banyak Manfaat</h2>
              <p>Keuntungan menggunakan jasa custom packaging dari Pick and Pack</p>
            </div>
            <div className={styles.benefitsCards}>
              {benefits.map((b) => (
                <div key={b.title} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className={b.icon} />
                  </div>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Portofolio / Clients === */}
      <section className={`section ${styles.clientsSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Klien Kami</h2>
            <p>Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka</p>
          </div>
          <div className={styles.clientsGrid}>
            {clients.map((c) => (
              <div key={c} className={styles.clientItem}>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Video Section === */}
      <section className={`section ${styles.videoSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Our Video</h2>
            <p>Kenali lebih dekat tentang Pick and Pack Packaging Company</p>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Pick and Pack Company Profile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* === Blog / Posting === */}
      <section className={`section ${styles.blogSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Posting Terbaru</h2>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.title} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <i className="fas fa-newspaper" />
                </div>
                <div className={styles.blogContent}>
                  <span className={styles.blogCat}>{post.cat}</span>
                  <h3>{post.title}</h3>
                  <span className={styles.blogDate}>
                    <i className="far fa-calendar-alt" /> {post.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA / Konsultasi === */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Siap Membuat Custom Packaging?</h2>
            <p>Konsultasikan kebutuhan kemasan Anda dengan tim kami secara gratis</p>
            <a
              href="https://wa.me/6285169577447?text=Halo,%20Saya%20tertarik%20untuk%20custom%20packaging.%20bisa%20tolong%20dibantu%20?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp" /> KONSULTASIKAN SEKARANG
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
