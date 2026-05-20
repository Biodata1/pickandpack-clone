import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Cormorant_Garamond, Inter, Syne } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';
import UTMTracker from '@/components/UTMTracker';
import './globals.css';

/* ── Premium Typography Stack ── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: {
    default: 'PT Printwork Indonesia | Premium Custom Packaging Solutions',
    template: '%s | Printwork Indonesia',
  },
  description:
    'PT Printwork Indonesia — Produsen kemasan eksklusif, food grade, dan solusi custom packaging premium untuk brand Anda. Kemasan berkualitas tinggi, bersertifikasi ISO 9001:2015 & FSSC 22000. Est. 2012.',
  keywords: [
    'kemasan custom',
    'packaging premium',
    'kemasan makanan',
    'food grade packaging',
    'custom box',
    'Printwork Indonesia',
    'kemasan eksklusif',
    'food packaging',
  ],
  authors: [{ name: 'PT Printwork Indonesia' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.printwork.id',
    siteName: 'PT Printwork Indonesia',
    title: 'PT Printwork Indonesia | Premium Custom Packaging Solutions',
    description:
      'Solusi kemasan custom berkualitas tinggi yang membangun identitas brand Anda di pasar modern.',
    images: [
      {
        url: '/logo_p_black.png',
        width: 1200,
        height: 630,
        alt: 'Printwork Indonesia Premium Packaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Printwork Indonesia | Premium Packaging',
    description:
      'Produsen kemasan eksklusif & food grade packaging premium. Est. 2012.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0D1B3E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${inter.variable} ${syne.variable}`}>
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NW9MPBZC');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0YJ0TH3B1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0YJ0TH3B1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PT Printwork Indonesia',
              url: 'https://www.printwork.id',
              logo: 'https://www.printwork.id/logo_p_black.png',
              description:
                'PT Printwork Indonesia - Produsen kemasan eksklusif, food grade, dan solusi custom packaging premium.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Kalibaru Timur Dalam No.1 no 30, RT.6/RW.6, Poncol, Bungur, Kec. Senen',
                addressLocality: 'Jakarta Pusat',
                addressRegion: 'DKI Jakarta',
                postalCode: '10460',
                addressCountry: 'ID',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+6285777237523',
                contactType: 'customer service',
              },
              sameAs: ['https://www.instagram.com/printwork.idn/'],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NW9MPBZC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <SmoothScroll>
          <Suspense fallback={null}>
            <UTMTracker />
          </Suspense>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
