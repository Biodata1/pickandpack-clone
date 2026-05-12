'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import Reveal, { RevealChild } from '@/components/RevealAnimation';
import MarqueeStrip from '@/components/MarqueeStrip';
import CounterAnimation from '@/components/CounterAnimation';
import MagneticButton from '@/components/MagneticButton';

/* Dynamic imports for performance */
const CinematicHero = dynamic(() => import('@/components/CinematicHero'), { ssr: false });
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'));

/* ── Data ── */

const stats = [
  { value: 10000, suffix: '+', label: 'Pelanggan Puas' },
  { value: 15, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 50, suffix: 'Jt+', label: 'Produk Terkirim' },
  { value: 100, suffix: '%', label: 'Food Grade Certified' },
];

const products = [
  { name: 'Lunch Box', image: '/printwork/products/lunch box food grade.webp', tag: 'Food Grade' },
  { name: 'Standing Pouch', image: '/printwork/products/standing pouch paper metalized.webp', tag: 'Custom Print' },
  { name: 'Burger Box', image: '/printwork/products/burger box eco-kraft.webp', tag: 'Eco-Kraft' },
  { name: 'Dus Kentang', image: '/printwork/products/dus kentang goreng 1.webp', tag: 'F&B' },
  { name: 'Fried Chicken Box', image: '/printwork/products/dus fried chicken duplex 310 gr.webp', tag: 'Premium' },
  { name: 'Food Pail', image: '/printwork/products/food pail food grade.webp', tag: 'Premium' },
  { name: 'Food Tray', image: '/printwork/products/food tray eco kraft.webp', tag: 'Eco-Kraft' },
  { name: 'Dus Martabak', image: '/printwork/products/dus martabak food grade.webp', tag: 'Food Grade' },
  { name: 'Lunch Box XL', image: '/printwork/products/lunch box food grade xl jumbo.webp', tag: 'Jumbo' },
];

const benefits = [
  {
    icon: '🛡️',
    title: 'Food Grade Certified',
    desc: 'Material bersertifikasi FSSC 22000, aman untuk kontak langsung dengan makanan.',
  },
  {
    icon: '🎨',
    title: 'Full Custom Design',
    desc: 'Desain bebas sesuai identitas brand, didukung tim desainer profesional.',
  },
  {
    icon: '⚡',
    title: 'Produksi Cepat',
    desc: 'Proses produksi efisien dengan kapasitas besar dan timeline terjamin.',
  },
  {
    icon: '📦',
    title: 'MOQ Terjangkau',
    desc: 'Minimum order mulai dari 500 pcs, cocok untuk UMKM hingga korporasi.',
  },
];

const processSteps = [
  { num: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan kemasan via WhatsApp, email, atau meeting.' },
  { num: '02', title: 'Desain', desc: 'Tim desainer membuat mockup kemasan sesuai branding Anda.' },
  { num: '03', title: 'Produksi', desc: 'Proses cetak premium dengan kontrol kualitas ketat di setiap tahap.' },
  { num: '04', title: 'Pengiriman', desc: 'Pengiriman aman ke seluruh Indonesia dengan packaging protektif.' },
];

const services = [
  { title: 'Desain Kreatif', desc: 'Tim desainer berpengalaman mewujudkan identitas brand Anda ke dalam kemasan yang memukau.', image: '/printwork/services/service_design.png' },
  { title: 'Cetak Premium', desc: 'Teknologi cetak offset & digital modern untuk kualitas warna dan detail terbaik.', image: '/printwork/services/service_printing.png' },
  { title: 'Manufaktur', desc: 'Fasilitas produksi berstandar internasional dengan kapasitas besar dan konsisten.', image: '/printwork/services/service_manufacturing.png' },
  { title: 'Packaging Solutions', desc: 'Solusi kemasan end-to-end dari material hingga finishing premium.', image: '/printwork/services/service_packaging.png' },
  { title: 'Distribusi', desc: 'Jaringan pengiriman luas ke seluruh Indonesia dengan packaging protektif.', image: '/printwork/services/service_distribution.png' },
];

const clients = [
  '/printwork/sponsors/Astra_International-Logo.wine.png',
  '/printwork/sponsors/jotun-official.png',
  '/printwork/sponsors/Picsart_26-03-03_15-53-02-265.png',
  '/printwork/sponsors/Picsart_26-03-03_15-53-12-322.png',
  '/printwork/sponsors/Picsart_26-03-03_15-53-22-748.png',
  '/printwork/sponsors/Picsart_26-03-03_15-53-35-268.png',
];

const faqItems = [
  {
    question: 'Berapa minimum order (MOQ) untuk kemasan custom?',
    answer: 'Minimum order kami mulai dari 500 pcs untuk sebagian besar produk kemasan custom. Untuk produk tertentu seperti hard box premium, MOQ bisa berbeda. Hubungi tim kami untuk informasi detail.',
  },
  {
    question: 'Apakah kemasan Printwork aman untuk makanan (food grade)?',
    answer: 'Ya, semua material kemasan kami telah bersertifikasi food grade dan memenuhi standar FSSC 22000. Kami menggunakan tinta food safe dan material yang aman untuk kontak langsung dengan makanan.',
  },
  {
    question: 'Berapa lama proses produksi kemasan custom?',
    answer: 'Proses produksi rata-rata membutuhkan waktu 14-21 hari kerja setelah desain disetujui. Untuk pesanan urgent, kami menyediakan layanan fast track dengan timeline lebih cepat.',
  },
  {
    question: 'Apakah bisa mendapatkan sample sebelum produksi massal?',
    answer: 'Tentu! Kami menyediakan layanan sample/proof sebelum produksi massal dimulai. Sample akan dikirimkan untuk persetujuan Anda sebelum proses cetak berjalan.',
  },
  {
    question: 'Material apa saja yang tersedia?',
    answer: 'Kami menyediakan beragam material termasuk Art Carton, Duplex, Ivory, Kraft (Brown & White), Corrugated, Foopak (Food Grade), dan Paper Metalized. Setiap material cocok untuk jenis kemasan tertentu.',
  },
];

const blogPosts = [
  {
    title: 'Tren Kemasan Makanan 2025: Sustainable & Premium',
    image: '/printwork/editorial/pdf_image_325.jpeg',
    date: '12 Jan 2025',
    excerpt: 'Pelajari tren terbaru dalam industri kemasan makanan yang mengutamakan keberlanjutan.',
  },
  {
    title: 'Cara Memilih Material Kemasan yang Tepat',
    image: '/printwork/editorial/pdf_image_408.jpeg',
    date: '28 Dec 2024',
    excerpt: 'Panduan lengkap memilih material kemasan berdasarkan jenis produk makanan Anda.',
  },
  {
    title: 'Pentingnya Branding pada Kemasan Produk F&B',
    image: '/printwork/editorial/pdf_image_424.jpeg',
    date: '15 Nov 2024',
    excerpt: 'Kemasan adalah touchpoint pertama dengan konsumen. Maksimalkan impact brand Anda.',
  },
];

const industries = [
  { title: 'Food Service', image: '/printwork/industry/food-service-card.jpg', desc: 'Restoran, kafe, dan katering' },
  { title: 'Food Processing', image: '/printwork/industry/food-processing-card.jpg', desc: 'Industri pengolahan makanan' },
  { title: 'Agriculture', image: '/printwork/industry/agriculture-card.jpg', desc: 'Agrikultur dan perkebunan' },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. CINEMATIC HERO
          ═══════════════════════════════════════════════ */}
      <CinematicHero />

      {/* ═══════════════════════════════════════════════
          2. MARQUEE STRIP
          ═══════════════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ═══════════════════════════════════════════════
          3. STATISTICS BAR
          ═══════════════════════════════════════════════ */}
      <section className={`section-dark ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>
                    <CounterAnimation end={s.value} suffix={s.suffix} />
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. ABOUT / WHY PRINTWORK
          ═══════════════════════════════════════════════ */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <Reveal direction="left" className={styles.aboutVisual}>
              <div className={styles.aboutImageWrap}>
                <Image
                  src="/printwork/backgrounds/about-printwork.png"
                  alt="Printwork Manufacturing"
                  width={560}
                  height={400}
                  className={styles.aboutImage}
                />
                <div className={styles.aboutFloatCard}>
                  <span className={styles.floatCardNum}>15+</span>
                  <span className={styles.floatCardText}>Tahun<br/>Pengalaman</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className={styles.aboutContent}>
              <span className="eyebrow">Tentang Kami</span>
              <h2>Spesialis Kemasan <em>Premium</em> Indonesia</h2>
              <p>
                PT Printwork Indonesia adalah perusahaan spesialis kemasan makanan custom yang telah
                melayani ribuan pelaku usaha F&B di seluruh Indonesia sejak 2012. Kami menggabungkan
                teknologi cetak modern dengan material berkualitas tinggi untuk menghasilkan kemasan
                yang tidak hanya melindungi produk, tetapi juga memperkuat identitas brand Anda.
              </p>
              <div className={styles.aboutFeatures}>
                {benefits.map((b, i) => (
                  <div key={i} className={styles.aboutFeatureItem}>
                    <span className={styles.featureIcon}>{b.icon}</span>
                    <div>
                      <strong>{b.title}</strong>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.aboutCtas}>
                <MagneticButton>
                  <Link href="/kontak" className="btn btn-primary">
                    Hubungi Kami
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/sertifikat" className="btn btn-outline">
                    Lihat Sertifikasi
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. MARQUEE STRIP (Light)
          ═══════════════════════════════════════════════ */}
      <MarqueeStrip
        variant="light"
        items={[
          'Kualitas Terjamin',
          'Efisiensi Produksi',
          'Fokus Pelanggan',
          'Keamanan Pangan',
          'Ramah Lingkungan',
          'Inovasi',
          'Integritas',
          'Keandalan',
        ]}
        speed={40}
      />

      {/* ═══════════════════════════════════════════════
          6. PRODUCT SHOWCASE
          ═══════════════════════════════════════════════ */}
      <section className={`section section-dark ${styles.productsSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Katalog Produk</span>
              <h2>Kemasan <em>Berkualitas</em> Tinggi</h2>
              <p>
                Beragam pilihan kemasan custom untuk berbagai kebutuhan industri F&B,
                dari UMKM hingga brand nasional.
              </p>
            </div>
          </Reveal>

          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link href="/produk" className={styles.productCard}>
                  <div className={styles.productImageWrap}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={400}
                      height={400}
                      className={styles.productImage}
                    />
                    <div className={styles.productOverlay}>
                      <span className={styles.productCta}>Lihat Detail →</span>
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <span className={styles.productTag}>{p.tag}</span>
                    <h3 className={styles.productName}>{p.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.productsCta}>
              <Link href="/produk" className="btn btn-ghost">
                Lihat Semua Produk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6.5 SERVICES — Premium Editorial Grid
          ═══════════════════════════════════════════════ */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Layanan Kami</span>
              <h2>Solusi Kemasan <em>End-to-End</em></h2>
              <p>Dari konsep hingga pengiriman, kami menangani setiap tahap dengan standar premium.</p>
            </div>
          </Reveal>
          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImageWrap}>
                    <Image src={svc.image} alt={svc.title} width={600} height={400} className={styles.serviceImage} />
                    <div className={styles.serviceImageOverlay} />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6.75 INDUSTRY — Who We Serve
          ═══════════════════════════════════════════════ */}
      <section className={`section section-dark ${styles.industrySection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Industri</span>
              <h2>Siapa yang Kami <em>Layani</em></h2>
            </div>
          </Reveal>
          <div className={styles.industryGrid}>
            {industries.map((ind, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className={styles.industryCard}>
                  <Image src={ind.image} alt={ind.title} width={400} height={300} className={styles.industryImage} />
                  <div className={styles.industryOverlay}>
                    <h3>{ind.title}</h3>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. ORDER PROCESS
          ═══════════════════════════════════════════════ */}
      <section className={`section ${styles.processSection}`}>
        <div className={styles.processBg}>
          <Image src="/printwork/textures/abstract_light_bg.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.08 }} />
        </div>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Cara Order</span>
              <h2>Proses <em>Mudah</em> & Transparan</h2>
              <p>Empat langkah sederhana untuk mendapatkan kemasan custom impian Anda.</p>
            </div>
          </Reveal>

          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className={styles.processCard}>
                  <span className={styles.processNum}>{step.num}</span>
                  <div className={styles.processDivider} />
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. CLIENT TRUST / LOGOS
          ═══════════════════════════════════════════════ */}
      <section className={`section section-cream ${styles.clientsSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Dipercaya Oleh</span>
              <h2>Brand-Brand <em>Terbaik</em></h2>
              <p>Bergabung dengan ribuan pelaku usaha F&B yang telah mempercayakan kemasannya kepada kami.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.clientsGrid}>
              {clients.map((src, i) => (
                <div key={i} className={styles.clientLogo}>
                  <Image
                    src={src}
                    alt={`Client ${i + 1}`}
                    width={160}
                    height={80}
                    className={styles.clientImg}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. CUSTOM PACKAGING CTA — Atmospheric
          ═══════════════════════════════════════════════ */}
      <section className={`${styles.ctaSection}`}>
        <div className={styles.ctaBg}>
          <Image
            src="/printwork/backgrounds/premium_bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', opacity: 0.6 }}
          />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <Reveal>
            <span className="eyebrow">Custom Packaging</span>
            <h2>Siap Wujudkan <em>Kemasan Impian</em> Anda?</h2>
            <p>
              Konsultasi gratis dengan tim kami untuk mendapatkan solusi kemasan custom
              yang tepat untuk bisnis Anda. Mulai dari desain hingga pengiriman, kami siap membantu.
            </p>
            <div className={styles.ctaButtons}>
              <MagneticButton>
                <a
                  href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  Chat WhatsApp
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/kontak" className="btn btn-ghost">
                  Form Kontak
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10. FAQ
          ═══════════════════════════════════════════════ */}
      <section className={`section section-dark ${styles.faqSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">FAQ</span>
              <h2>Pertanyaan <em>Umum</em></h2>
            </div>
          </Reveal>
          <Reveal>
            <FAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          11. VIDEO — Cinematic Placeholder
          ═══════════════════════════════════════════════ */}
      <section className={`section ${styles.videoSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Company Profile</span>
              <h2>Lihat <em>Proses</em> Kami</h2>
            </div>
          </Reveal>
          <Reveal direction="scale">
            <div className={styles.videoWrap}>
              <Image
                src="/printwork/backgrounds/approach_vision.png"
                alt="Printwork Indonesia Manufacturing Process"
                width={1200}
                height={675}
                className={styles.videoThumb}
              />
              <div className={styles.videoOverlay}>
                <button className={styles.playBtn} aria-label="Play Video">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
                <span className={styles.playLabel}>Company Profile</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          12. BLOG PREVIEW
          ═══════════════════════════════════════════════ */}
      <section className={`section section-cream ${styles.blogSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="eyebrow">Insights</span>
              <h2>Artikel <em>Terbaru</em></h2>
              <p>Tips, panduan, dan insight seputar dunia kemasan dan industri F&B.</p>
            </div>
          </Reveal>

          <div className={styles.blogGrid}>
            {blogPosts.map((post, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href="/blog" className={styles.blogCard}>
                  <div className={styles.blogImageWrap}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={260}
                      className={styles.blogImage}
                    />
                  </div>
                  <div className={styles.blogContent}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          13. FINAL CTA
          ═══════════════════════════════════════════════ */}
      <section className={`section-dark ${styles.finalCta}`}>
        <div className={styles.finalCtaBg}>
          <Image
            src="/printwork/textures/abstract_premium_bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', opacity: 0.12 }}
          />
        </div>
        <div className="container">
          <Reveal>
            <div className={styles.finalCtaContent}>
              <span className="eyebrow">Mulai Sekarang</span>
              <h2>Tingkatkan <em>Brand</em> Anda dengan Kemasan Premium</h2>
              <p>
                Jadilah bagian dari ribuan pelaku usaha yang telah meningkatkan
                identitas brand mereka bersama Printwork Indonesia.
              </p>
              <div className={styles.finalCtaBtns}>
                <MagneticButton>
                  <a
                    href="https://wa.me/6281113000966?text=Halo%20Printwork,%20saya%20ingin%20konsultasi%20tentang%20kemasan%20custom."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Konsultasi Gratis
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/produk" className="btn btn-ghost">
                    Lihat Katalog
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
