import HeroSlider from '@/components/HeroSlider';
import MarqueeStrip from '@/components/MarqueeStrip';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const stats = [
  { value: 1000, suffix: '+', label: 'Brand Terpercaya' },
  { value: 14, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 1, suffix: 'M+', label: 'Box Diproduksi' },
  { value: 500, suffix: '+', label: 'Min. Order (pcs)' },
];

const newProducts = [
  { name: 'Lunch Box Selip Eco-Kraft (XL-Jumbo)', price: 'Rp 960/pcs', cat: 'Lunch Box', image: '/printwork/lunchbox-ek-jumbo-1.webp' },
  { name: 'Lunch Box Selip Food Grade (XL-Jumbo)', price: 'Rp 1.830/pcs', cat: 'Lunch Box', image: '/printwork/lunchbox-fg-jumbo-1.webp' },
  { name: 'Standing Pouch Paper Metalized', price: 'Rp 2.725/pcs', cat: 'Kantong Kertas', image: '/printwork/standing-pouch-paper-metalized-1.webp' },
  { name: 'Sachet Paper Metalized', price: 'Rp 1.600/pcs', cat: 'Kantong Kertas', image: '/printwork/sachet-paper-metalized-1.webp' },
  { name: 'Gusset Paper Metalized', price: 'Rp 1.200/pcs', cat: 'Kantong Kertas', image: '/printwork/gusset-paper-metalized-1.webp' },
];

const whyUs = [
  { icon: '🎨', title: 'Desain & Inovasi', desc: 'Tim kami menciptakan pola packaging khusus yang sesuai untuk bisnis Anda dengan kreativitas visual terdepan.' },
  { icon: '🏆', title: 'Kualitas Terjamin', desc: 'Material berkualitas tinggi bersertifikasi ISO 9001:2015 & FSSC 22000 untuk standar internasional.' },
  { icon: '⚡', title: 'Manufaktur Presisi', desc: 'Mesin Heidelberg terintegrasi dengan proses produksi efisien dan Quality Control ketat.' },
  { icon: '🌿', title: 'Keamanan Pangan', desc: 'Material Food Grade (Foopak) dan Eco-Kraft yang ramah lingkungan dan aman untuk makanan.' },
];

const products = [
  { name: 'Lunch Box & Pail', tag: 'Food Grade', cat: 'fnb', image: '/printwork/lunchbox-ek-jumbo-1.webp' },
  { name: 'Dus Nasi & Martabak', tag: 'Custom', cat: 'fnb', image: '/printwork/lunchbox-fg-jumbo-1.webp' },
  { name: 'Dus Fried Chicken', tag: 'Food Grade', cat: 'fnb', image: '/printwork/fc-box-l-1.webp' },
  { name: 'Kantong Kertas', tag: 'Eco Friendly', cat: 'fnb', image: '/printwork/paperbag-m-1.webp' },
  { name: 'Packaging & Hard Box', tag: 'Premium', cat: 'premium', image: '/printwork/standing-pouch-paper-metalized-1.webp' },
  { name: 'Sachet & Standing Pouch', tag: 'Custom', cat: 'premium', image: '/printwork/sachet-paper-metalized-1.webp' },
  { name: 'Food Wrapping Paper', tag: 'Food Grade', cat: 'fnb', image: '/printwork/gusset-paper-metalized-1.webp' },
  { name: 'Kemasan Lainnya', tag: 'Custom', cat: 'premium', image: '/printwork/food-pail-m-1.webp' },
];

const orderSteps = [
  { num: '01', title: 'Konsultasi', desc: 'Hubungi admin sales kami untuk diskusi kebutuhan packaging Anda.', icon: '💬' },
  { num: '02', title: 'Penawaran', desc: 'Kami menghitung dan memberikan penawaran harga terbaik untuk Anda.', icon: '📋' },
  { num: '03', title: 'Produksi', desc: 'Setelah sampel disetujui, masuk ke tahap produksi massal presisi.', icon: '🏭' },
  { num: '04', title: 'Pengiriman', desc: 'Packaging dikirim ke alamat Anda dengan aman dan tepat waktu.', icon: '📦' },
];

const benefits = [
  { icon: '📐', title: 'Pola khusus untuk Anda', desc: 'Tim kami akan menciptakan pola packaging khusus yang sesuai untuk bisnis Anda.' },
  { icon: '💰', title: 'Efisiensi biaya', desc: 'Membantu menentukan ukuran, bahan dan finishing packaging yang paling efisien.' },
  { icon: '🖨️', title: 'Cetak sesuai kebutuhan', desc: 'Minimum Order Quantity (MOQ) kompetitif mulai dari 500 pcs untuk semua skala bisnis.' },
];

const clients = [
  { name: 'Astra', logo: '/printwork/sponsor4.png' },
  { name: 'DJI', logo: '/printwork/sponsor3.png' },
  { name: 'Kopi Kenangan', logo: '/printwork/sponsor2.png' },
  { name: 'Janji Jiwa', logo: '/printwork/sponsor1.png' },
  { name: 'Bakerman', logo: '/printwork/sponsor5.png' },
  { name: 'SOCIOLA', logo: '/printwork/sponsor6.png' },
  { name: 'BCA', logo: '/printwork/sponsor7.png' },
  { name: 'Jotun', logo: '/printwork/sponsor8.png' },
];

const faqItems = [
  { question: 'Jenis kemasan apa saja yang tersedia?', answer: 'Kami menyediakan berbagai jenis kemasan termasuk Lunch Box, Food Pail, Dus Fried Chicken, Dus Nasi, Kantong Kertas, Standing Pouch, Sachet, Hard Box Premium, dan kemasan custom lainnya. Semua tersedia dalam material Food Grade dan Eco-Kraft.' },
  { question: 'Berapa minimum order?', answer: 'Minimum order kami mulai dari 500 pcs untuk semua jenis produk. Kami melayani dari skala UMKM hingga korporasi besar dengan harga yang kompetitif di setiap tier kuantitas.' },
  { question: 'Apakah bisa custom branding?', answer: 'Tentu! Kami spesialis dalam custom branding pada kemasan. Tim desain kami akan membantu mewujudkan identitas visual brand Anda pada kemasan dengan kualitas cetak premium menggunakan mesin Heidelberg.' },
  { question: 'Material apa yang digunakan?', answer: 'Kami menggunakan material Food Grade bersertifikat BPOM (Foopak) dan Eco-Kraft yang ramah lingkungan. Seluruh material telah memenuhi standar keamanan pangan internasional dengan sertifikasi ISO 9001:2015 & FSSC 22000.' },
  { question: 'Bagaimana proses pemesanan?', answer: 'Proses pemesanan kami sederhana: (1) Konsultasi via WhatsApp, (2) Penawaran harga, (3) Approval desain & sampel, (4) Produksi massal, (5) Pengiriman. Tim kami akan mendampingi Anda di setiap tahap.' },
  { question: 'Apakah melayani pengiriman ke seluruh Indonesia?', answer: 'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia. Kami bekerja sama dengan ekspedisi terpercaya untuk memastikan kemasan Anda tiba dengan aman dan tepat waktu.' },
];

const blogPosts = [
  { title: 'Tren Packaging 2026: Solusi Berkelanjutan untuk Masa Depan', cat: 'ARTIKEL', date: '15 April 2026', image: '/printwork/pdf_image_401.jpeg' },
  { title: 'Cara Membangun Brand Identity Melalui Kemasan Produk', cat: 'ARTIKEL', date: '10 April 2026', image: '/printwork/pdf_image_424.jpeg' },
  { title: 'Pentingnya Menggunakan Bahan Food Grade untuk Packaging', cat: 'EDUKASI', date: '5 April 2026', image: '/printwork/pdf_image_316.jpeg' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSlider />

      {/* ===== MARQUEE STRIP ===== */}
      <MarqueeStrip />

      {/* ===== STATS ===== */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>
                  <CounterAnimation end={s.value} suffix={s.suffix} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW PRODUCTS ===== */}
      <section className={`section ${styles.newProductsSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Baru Hadir</span>
              <h2>Produk <em>Terbaru</em></h2>
              <p>Kemasan terbaru kami dengan material premium dan harga kompetitif</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.newProductsScroll}>
              {newProducts.map((p) => (
                <div key={p.name} className={styles.newProductCard}>
                  <div className={styles.newProductImage}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    <span className={styles.newBadge}>New</span>
                  </div>
                  <div className={styles.newProductInfo}>
                    <span className={styles.newProductCat}>{p.cat}</span>
                    <h3>{p.name}</h3>
                    <span className={styles.newProductPrice}>{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section section-dark ${styles.whySection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Berkomitmen pada Kualitas</span>
              <h2>Selalu <em>Berinovasi</em></h2>
              <p>Kami menggabungkan presisi teknis dengan kreativitas visual untuk membangun brand Anda</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} stagger>
            <div className={styles.whyGrid}>
              {whyUs.map((item) => (
                <div key={item.title} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MARQUEE 2 ===== */}
      <MarqueeStrip variant="light" />

      {/* ===== PRODUCTS ===== */}
      <section className={`section ${styles.productSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Katalog</span>
              <h2>Produk <em>Kami</em></h2>
              <p>Berbagai jenis custom packaging untuk kebutuhan bisnis Anda</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.helpBtn}>
              <a
                href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                Kami Siap Membantu Anda
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} stagger>
            <div className={styles.productsGrid}>
              {products.map((p) => (
                <div key={p.name} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                    <div className={styles.productOverlay}>
                      <Link href={`/produk?cat=${p.cat}`} className={styles.productOverlayBtn}>
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <span className={styles.productTag}>{p.tag}</span>
                    <h3>{p.name}</h3>
                    <Link href={`/produk?cat=${p.cat}`} className={styles.productLink}>
                      Detail klik disini
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className={styles.viewAll}>
              <Link href="/produk" className="btn btn-outline">
                Lihat Semua Produk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section className={`section section-dark ${styles.orderSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Mudah & Transparan</span>
              <h2>Cara <em>Order</em></h2>
              <p>Proses pemesanan yang sederhana dari konsultasi hingga pengiriman</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} stagger>
            <div className={styles.stepsGrid}>
              {orderSteps.map((step) => (
                <div key={step.num} className={styles.stepCard}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepNum}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <div className={styles.benefitsLayout}>
            <ScrollReveal direction="left">
              <div className={styles.benefitsText}>
                <span className="subtitle-badge">Keunggulan</span>
                <h2>Lebih Banyak <em>Manfaat</em></h2>
                <p>Keuntungan menggunakan jasa custom packaging dari Printwork Indonesia untuk bisnis Anda</p>
                <a
                  href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: 24 }}
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className={styles.benefitsCards}>
                {benefits.map((b) => (
                  <div key={b.title} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{b.icon}</div>
                    <div>
                      <h3>{b.title}</h3>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className={`section ${styles.clientsSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Dipercaya Oleh</span>
              <h2>Klien <em>Kami</em></h2>
              <p>Brand-brand ternama yang telah mempercayakan kebutuhan packaging mereka</p>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.clientsMarquee}>
          <div className={styles.clientsTrack}>
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div key={`${c.name}-${i}`} className={styles.clientItem}>
                <Image src={c.logo} alt={c.name} width={120} height={60} style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOM PACKAGING CTA ===== */}
      <section className={styles.packagingCta}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.packagingCtaContent}>
              <div className={styles.packagingCtaText}>
                <span className="subtitle-badge">Custom Packaging Solutions</span>
                <h2>Brand yang berkembang berinvestasi pada kemasan custom <em>berkualitas.</em></h2>
                <p>Kami bantu wujudkan visi Anda dengan kemasan yang memperkuat identitas brand dan meningkatkan pengalaman pelanggan.</p>
                <a
                  href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`section section-dark ${styles.faqSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Punya Pertanyaan?</span>
              <h2>Pertanyaan <em>Umum</em></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className={`section ${styles.videoSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Kenali Kami</span>
              <h2>Company <em>Profile</em></h2>
              <p>Kenali lebih dekat tentang Printwork Indonesia</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="scale">
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Printwork Indonesia Company Profile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className={`section section-gradient ${styles.blogSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <span className="subtitle-badge">Insight</span>
              <h2>Posting <em>Terbaru</em></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} stagger>
            <div className={styles.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.title} className={styles.blogCard}>
                  <div className={styles.blogImage}>
                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.blogContent}>
                    <span className={styles.blogCat}>{post.cat}</span>
                    <h3>{post.title}</h3>
                    <span className={styles.blogDate}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {post.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <span className={styles.ctaBadge}>Hubungi Kami</span>
              <h2>Siap Membuat Custom <em>Packaging?</em></h2>
              <p>Mari bekerjasama. Konsultasikan kebutuhan kemasan Anda dengan tim kami secara gratis.</p>
              <a
                href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: '14px', padding: '18px 42px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                Konsultasikan Sekarang
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
