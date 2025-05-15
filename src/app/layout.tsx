import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 橘香堂 - 富士市のコワーキングスペース",
    default: "橘香堂 | 富士市のコワーキングスペース",
  },
  description:
    "富士市のコワーキングスペース「橘香堂」。印刷設備完備、住所登録サービス、多目的スペース、コミュニティイベントなど充実した設備とサービスを提供。起業家や中小企業に最適な環境をご用意。",
  keywords: [
    "富士市 コワーキング",
    "静岡 コワーキングスペース",
    "橘香堂",
    "格安コワーキング",
    "住所登録サービス",
    "富士山 ワークスペース",
    "多目的スペース 富士市",
    "起業家 コミュニティ",
    "コワーキング 印刷設備",
    "静岡県 コワーキング",
    "富士市 レンタルスペース",
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
    },
  },
  openGraph: {
    title: "橘香堂 | 富士市のコワーキングスペース",
    description:
      "富士市で印刷設備完備、住所登録サービス、多目的スペースあり。起業家や中小企業に最適な環境をご提供。",
    url: "https://mtfuji-kikkou.com",
    siteName: "橘香堂 - 富士市のコワーキングスペース",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://mtfuji-kikkou.com/images/slide1.webp",
        width: 1200,
        height: 630,
        alt: "橘香堂 - 富士市のコワーキングスペース",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "橘香堂 | 富士市のコワーキングスペース",
    description:
      "印刷設備完備、住所登録サービス、多目的スペースなど充実した設備とサービスを提供する富士市のコワーキングスペース。",
  },

  // JSON-LD構造化データを追加
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "橘香堂",
        description:
          "富士市のコワーキングスペース。印刷設備完備、住所登録サービス、多目的スペース、コミュニティイベントなど充実したサービスを提供。",
        url: "https://mtfuji-kikkou.com",
        telephone: "0545-67-7400",
        email: "", // メールアドレスがあれば追加
        address: {
          "@type": "PostalAddress",
          addressLocality: "富士市",
          addressRegion: "静岡県",
          postalCode: "417-0051",
          streetAddress: "吉原2丁目8番21-2号",
          addressCountry: "JP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "35.17303718602143",
          longitude: "138.68203490723135",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        priceRange: "¥550-5500",
        image: "https://mtfuji-kikkou.com/images/slide1.webp",
        sameAs: [
          // SNSやその他のプロフィールURLがあれば追加
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "印刷設備",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "住所登録サービス",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "多目的スペース",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Wi-Fi",
            value: true,
          },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "コワーキングスペース利用",
            description: "快適に利用できるコワーキングスペース",
          },
          {
            "@type": "Offer",
            name: "住所登録サービス",
            description: "事業所として公式に使える住所登録サービス",
          },
          {
            "@type": "Offer",
            name: "多目的スペースレンタル",
            description:
              "会議やイベント、ワークショップに利用できる多目的スペース",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "橘香堂のコワーキングスペースの営業時間は？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "平日・土日祝の9時〜18時の営業時間内でご利用いただけます。",
            },
          },
          {
            "@type": "Question",
            name: "どのようなサービスが利用できますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "印刷設備、住所登録サービス、多目的スペース、コミュニティイベントなど様々なサービスをご提供しています。",
            },
          },
        ],
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
