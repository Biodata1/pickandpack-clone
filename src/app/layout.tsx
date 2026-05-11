import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PT Printwork Indonesia | Premium Custom Packaging Solutions",
  description:
    "PT Printwork Indonesia — Produsen kemasan eksklusif, food grade, dan solusi custom packaging premium untuk brand Anda. Bersertifikasi ISO 9001:2015 & FSSC 22000. Est. 2012.",
  keywords:
    "Packaging box makanan custom, Printwork, PT Printwork Indonesia, Custom kemasan produk, Cetak packaging, food grade packaging, custom box, kemasan makanan",
  openGraph: {
    title: "PT Printwork Indonesia | Premium Custom Packaging",
    description: "Solusi kemasan custom berkualitas tinggi untuk brand Anda. Bersertifikasi ISO 9001:2015 & FSSC 22000.",
    type: "website",
    locale: "id_ID",
    siteName: "Printwork Indonesia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Printwork Indonesia",
  url: "https://www.printwork.id",
  logo: "https://www.printwork.id/printwork/new_logo.png",
  description:
    "PT Printwork Indonesia adalah perusahaan spesialis kemasan makanan custom yang telah melayani ribuan pelaku usaha F&B di seluruh Indonesia sejak 2012.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grand Puri Laras, Jl. Pisangan Raya, Cireundeu, Ciputat Timur",
    addressLocality: "Tangerang Selatan",
    addressRegion: "Banten",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-811-1300-0966",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: ["https://instagram.com/printwork.id"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0YJ0TH3B1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0YJ0TH3B1');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
