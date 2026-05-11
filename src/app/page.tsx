import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const stats = [
  { value: '1000+', label: 'Brands Trusted Us' },
  { value: '14+', label: 'Years Experience' },
  { value: '1M+', label: 'Boxes Produced' },
];

const whyUs = [
  { icon: 'fas fa-paint-brush', title: 'Desain & Inovasi', desc: 'Tim kami akan menciptakan pola packaging khusus yang sesuai untuk bisnis Anda.' },
  { icon: 'fas fa-award', title: 'Kualitas Terjamin', desc: 'Material berkualitas tinggi. Kami menggunakan bahan baku terbaik bersertifikasi ISO & FSSC 22000.' },
  { icon: 'fas fa-bolt', title: 'Manufaktur Presisi', desc: 'Mesin Heidelberg Terintegrasi. Proses produksi efisien dengan standar Quality Control ketat.' },
  { icon: 'fas fa-leaf', title: 'Keamanan Pangan', desc: 'Material Food Grade (Foopak) dan Eco-Kraft yang ramah lingkungan.' },
];

const products = [
  { name: 'Lunch Box & Pail', tag: 'Food Grade', cat: 'fnb', image: 'https://www.printwork.id/images/product-img1.webp' },
  { name: 'Dus Nasi & Martabak', tag: 'Custom', cat: 'fnb', image: 'https://www.printwork.id/images/product-img2.webp' },
  { name: 'Dus Fried Chicken', tag: 'Food Grade', cat: 'fnb', image: 'https://www.printwork.id/images/product-img3.webp' },
  { name: 'Kantong Kertas', tag: 'Eco Friendly', cat: 'fnb', image: 'https://www.printwork.id/images/product-img4.webp' },
  { name: 'Packaging & Hard Box', tag: 'Premium', cat: 'premium', image: 'https://www.printwork.id/images/product-img5.webp' },
  { name: 'Sachet & Standing Pouch', tag: 'Custom', cat: 'premium', image: 'https://www.printwork.id/images/product-img6.webp' },
  { name: 'Food Wrapping Paper', tag: 'Food Grade', cat: 'fnb', image: 'https://www.printwork.id/images/product-img7.webp' },
  { name: 'Kemasan Lainnya', tag: 'Custom', cat: 'premium', image: 'https://www.printwork.id/images/product-img8.webp' },
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
  { name: 'BNI', logo: 'https://www.printwork.id/images/sponsor1.png' },
  { name: 'DJI', logo: 'https://www.printwork.id/images/sponsor2.png' },
  { name: 'Kopi Kenangan', logo: 'https://www.printwork.id/images/sponsor3.png' },
  { name: 'Janji Jiwa', logo: 'https://www.printwork.id/images/sponsor4.png' },
  { name: 'Bakerman', logo: 'https://www.printwork.id/images/sponsor5.png' },
  { name: 'SOCIOLA', logo: 'https://www.printwork.id/images/sponsor6.png' },
  { name: 'BCA', logo: 'https://www.printwork.id/images/sponsor7.png' },
  { name: 'Coach', logo: 'https://www.printwork.id/images/sponsor8.png' },
];

const blogPosts = [
  { title: 'Tren Packaging 2026: Solusi Berkelanjutan untuk Masa Depan', cat: 'ARTIKEL', date: '15 April 2026', image: 'https://www.printwork.id/images/blog1.webp' },
  { title: 'Cara Membangun Brand Identity Melalui Kemasan Produk', cat: 'ARTIKEL', date: '10 April 2026', image: 'https://www.printwork.id/images/blog2.webp' },
  { title: 'Pentingnya Menggunakan Bahan Food Grade untuk Packaging', cat: 'ARTIKEL', date: '5 April 2026', image: 'https://www.printwork.id/images/blog3.webp' },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* === Company Summary === */}
      <section className={styles.fraudNotice}>
        <div className="container">
          <div className={styles.fraudContent}>
            <div className={styles.fraudIcon}>
              <i className="fas fa-building" />
            </div>
            <div>
              <h3>PT PRINTWORK INDONESIA</h3>
              <p>Perusahaan spesialis kemasan makanan custom yang telah melayani ribuan pelaku usaha F&B di seluruh Indonesia. Est. 2012.</p>
              <a
                href="https://wa.me/6281113000966"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fraudPhone}
              >
                <i className="fab fa-whatsapp" /> 0811-1300-0966 (Click here)
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
              href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
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
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
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
              <p>Keuntungan menggunakan jasa custom packaging dari Printwork Indonesia</p>
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
              <div key={c.name} className={styles.clientItem}>
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
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
              title="Printwork Indonesia Company Profile"
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
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
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
              href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
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
