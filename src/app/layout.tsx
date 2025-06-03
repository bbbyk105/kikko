import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocalBusinessData } from "./components/SEO/LocalBusinessData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | 橘香堂 - 富士市吉原のコワーキングスペース・レンタルスタジオ",
    default:
      "橘香堂 | 富士市吉原のコワーキングスペース・多目的レンタルスタジオ",
  },
  description:
    "富士市吉原の多目的レンタルスペース「橘香堂」。コワーキング、ヨガ・ダンススタジオ、ギャラリー展示、マルシェ開催など様々な用途でご利用可能。印刷設備完備、住所登録サービスあり。富士駅から車で5分、駐車場完備。",
  keywords: [
    "富士市 レンタルスペース",
    "富士市 吉原 スタジオ",
    "富士市 ヨガスタジオ",
    "富士市 ダンススタジオ",
    "富士市 ギャラリー",
    "富士市 マルシェ会場",
    "富士市 貸しスタジオ",
    "富士市 多目的スペース",
    "吉原 コワーキング",
    "富士市 住所登録",
    "富士駅 レンタルスペース",
    "富士市 イベント会場",
  ],
  authors: [{ name: "橘香堂" }],
  creator: "橘香堂",
  publisher: "橘香堂",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mtfuji-kikkou.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "橘香堂 | 富士市吉原の多目的レンタルスペース・コワーキングスタジオ",
    description:
      "富士市吉原の多目的レンタルスペース。ヨガ・ダンススタジオ、ギャラリー、マルシェ会場、コワーキングスペースとして利用可能。印刷設備・住所登録サービス完備。",
    url: "https://mtfuji-kikkou.com",
    siteName: "橘香堂 - 富士市吉原のレンタルスペース",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://mtfuji-kikkou.com/images/slide1.webp",
        width: 1200,
        height: 630,
        alt: "橘香堂 - 富士市吉原の多目的レンタルスペース内観",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "橘香堂 | 富士市吉原の多目的レンタルスペース",
    description:
      "ヨガ・ダンススタジオ、ギャラリー、マルシェ会場、コワーキングスペースとして利用可能な富士市吉原の多目的レンタルスペース。",
  },
  verification: {
    google: "your-google-verification-code", // Google Search Consoleで取得してください
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* グローバルな構造化データ（LocalBusiness, Website, FAQ） */}
        <LocalBusinessData />

        {/* Analytics - Umami */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="778abaa9-9a47-4e25-8787-3d4901179e35"
        />

        {/* Preconnect for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://cloud.umami.is" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/images/slide1.webp"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
