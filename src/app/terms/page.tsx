import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan layanan PT Printwork Indonesia.',
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Legal</span>
            <h1>Syarat & <em>Ketentuan</em></h1>
            <p>Terakhir diperbarui: Mei 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <Reveal>
              <h2>1. Ketentuan Umum</h2>
              <p>
                Dengan mengakses dan menggunakan website PT Printwork Indonesia, Anda menyetujui
                untuk terikat dengan syarat dan ketentuan ini. Jika Anda tidak menyetujui
                ketentuan ini, mohon untuk tidak menggunakan layanan kami.
              </p>

              <h2>2. Layanan</h2>
              <p>
                PT Printwork Indonesia menyediakan layanan custom packaging termasuk desain,
                produksi, dan pengiriman kemasan makanan. Spesifikasi produk, harga, dan
                timeline produksi akan dikomunikasikan secara terpisah sesuai kebutuhan
                masing-masing klien.
              </p>

              <h2>3. Pesanan dan Pembayaran</h2>
              <p>
                Pesanan dianggap valid setelah konfirmasi tertulis dari kedua belah pihak
                mengenai spesifikasi produk, jumlah, harga, dan timeline. Ketentuan pembayaran
                akan diatur dalam invoice atau perjanjian terpisah yang disepakati bersama.
              </p>

              <h2>4. Minimum Order (MOQ)</h2>
              <p>
                Minimum order quantity (MOQ) bervariasi tergantung jenis produk. Informasi
                MOQ spesifik akan dikomunikasikan pada saat konsultasi. MOQ standar untuk
                sebagian besar produk kemasan custom dimulai dari 500 pcs.
              </p>

              <h2>5. Desain dan Hak Cipta</h2>
              <p>
                Klien bertanggung jawab atas keaslian dan legalitas desain yang diserahkan
                untuk dicetak. PT Printwork Indonesia tidak bertanggung jawab atas pelanggaran
                hak cipta, merek dagang, atau hak kekayaan intelektual lainnya yang timbul
                dari desain yang disediakan oleh klien.
              </p>

              <h2>6. Produksi dan Pengiriman</h2>
              <p>
                Timeline produksi standar adalah 14–21 hari kerja setelah desain final
                disetujui. Timeline dapat bervariasi tergantung kompleksitas pesanan dan
                ketersediaan material. Pengiriman dilakukan ke seluruh Indonesia dengan
                packaging protektif.
              </p>

              <h2>7. Klaim dan Garansi</h2>
              <p>
                Klaim atas produk yang cacat atau tidak sesuai spesifikasi harus diajukan
                dalam waktu 7 hari kerja setelah penerimaan barang. Klaim harus disertai
                dokumentasi foto dan deskripsi masalah yang jelas.
              </p>

              <h2>8. Batasan Tanggung Jawab</h2>
              <p>
                PT Printwork Indonesia tidak bertanggung jawab atas kerugian tidak langsung,
                insidental, atau konsekuensial yang timbul dari penggunaan produk atau layanan
                kami di luar cakupan yang disepakati dalam perjanjian.
              </p>

              <h2>9. Perubahan Ketentuan</h2>
              <p>
                PT Printwork Indonesia berhak mengubah syarat dan ketentuan ini kapan saja.
                Perubahan akan berlaku efektif setelah dipublikasikan di halaman ini.
              </p>

              <h2>10. Kontak</h2>
              <p>
                Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami:
              </p>
              <ul>
                <li>Email: printworkmultigraph@gmail.com</li>
                <li>Telepon: +62 857-7723-7523</li>
                <li>Alamat: Jl. Kalibaru Timur Dalam No.1 no 30, RT.6/RW.6, Poncol, Bungur, Kec. Senen, DKI Jakarta 10460</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
