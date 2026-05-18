import { Metadata } from 'next';
import Reveal from '@/components/RevealAnimation';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi PT Printwork Indonesia mengenai pengumpulan dan penggunaan data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Legal</span>
            <h1>Kebijakan <em>Privasi</em></h1>
            <p>Terakhir diperbarui: Mei 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <Reveal>
              <h2>1. Informasi yang Kami Kumpulkan</h2>
              <p>
                PT Printwork Indonesia mengumpulkan informasi yang Anda berikan secara langsung
                kepada kami melalui formulir kontak, komunikasi WhatsApp, email, atau interaksi
                lainnya. Informasi ini dapat mencakup nama, alamat email, nomor telepon,
                nama perusahaan, dan detail kebutuhan kemasan Anda.
              </p>

              <h2>2. Penggunaan Informasi</h2>
              <p>
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul>
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Menyediakan layanan custom packaging sesuai kebutuhan</li>
                <li>Mengirimkan informasi terkait produk dan layanan kami</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pelanggan</li>
              </ul>

              <h2>3. Perlindungan Data</h2>
              <p>
                Kami berkomitmen melindungi data pribadi Anda. Kami menerapkan langkah-langkah
                keamanan teknis dan organisasional yang sesuai untuk mencegah akses tidak sah,
                pengungkapan, perubahan, atau pemusnahan data pribadi Anda.
              </p>

              <h2>4. Pembagian Informasi</h2>
              <p>
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda
                kepada pihak ketiga. Informasi hanya dibagikan kepada pihak ketiga yang diperlukan
                untuk memenuhi layanan kami (seperti jasa pengiriman) dan mereka terikat kewajiban
                kerahasiaan.
              </p>

              <h2>5. Cookie dan Analitik</h2>
              <p>
                Website kami menggunakan Google Analytics untuk memahami bagaimana pengunjung
                berinteraksi dengan situs kami. Data ini dikumpulkan secara anonim dan digunakan
                untuk meningkatkan pengalaman pengguna. Anda dapat menonaktifkan cookie melalui
                pengaturan browser Anda.
              </p>

              <h2>6. Hak Anda</h2>
              <p>
                Anda berhak untuk mengakses, memperbaiki, atau menghapus data pribadi Anda yang
                kami simpan. Untuk mengajukan permintaan terkait data pribadi Anda, silakan
                hubungi kami melalui email di printworkmultigraph@gmail.com.
              </p>

              <h2>7. Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan
                akan dipublikasikan di halaman ini dengan tanggal pembaruan terbaru.
              </p>

              <h2>8. Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami:
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
