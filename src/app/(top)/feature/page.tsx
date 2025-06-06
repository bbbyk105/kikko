// src/app/(top)/feature/page.tsx
import { Metadata } from "next";
import { StructuredDataScript } from "@/app/components/StructuredData";
import { FeaturesHeader } from "./FeaturesHeader";
import { FeaturesOverview } from "./FeaturesOverView";
import { FeaturesSpaces } from "./FeaturesSpaces";
import { FeaturesGallery } from "./FeaturesGallery";
import { FeaturesEquipment } from "./FeaturesEquipment";
import { FeaturesUsage } from "./FeaturesUsage";

export const metadata: Metadata = {
  title: "コワーキングスペース・多目的レンタルスペース",
  description:
    "富士市吉原のコワーキングスペース・多目的レンタルスペース橘香堂。印刷設備完備、住所登録サービス、高速Wi-Fi環境で起業家・フリーランスをサポート。ヨガ・ダンススタジオ、ギャラリー、マルシェ会場としても利用可能。",
  keywords: [
    "富士市 コワーキング",
    "富士市 コワーキングスペース",
    "吉原 コワーキング",
    "富士市 レンタルスペース",
    "富士市 多目的スペース",
    "富士市 ヨガスタジオ",
    "富士市 ダンススタジオ",
    "富士市 ギャラリー",
    "富士市 マルシェ会場",
    "富士市 住所登録",
    "富士市 起業支援",
    "富士駅 コワーキング",
  ],
  openGraph: {
    title: "富士市吉原のコワーキングスペース・多目的レンタルスペース | 橘香堂",
    description:
      "起業家・フリーランス向けコワーキングスペースから、ヨガ・ダンススタジオ、ギャラリー、マルシェ会場まで多目的に利用可能。印刷設備・住所登録サービス完備。",
    url: "https://mtfuji-kikkou.com/feature",
  },
};

export default function FeaturesPage() {
  // コワーキングスペース専用の構造化データ
  const coworkingServiceData = {
    "@context": "https://schema.org",
    "@type": ["CoworkingSpace", "LocalBusiness"],
    name: "橘香堂コワーキングスペース",
    description:
      "富士市吉原の多目的コワーキングスペース。起業家・フリーランスから多目的利用まで対応",
    provider: {
      "@type": "LocalBusiness",
      name: "橘香堂",
      "@id": "https://mtfuji-kikkou.com/#organization",
    },
    serviceType: [
      "コワーキングスペース",
      "多目的レンタルスペース",
      "ヨガスタジオ",
      "ダンススタジオ",
      "ギャラリー",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "富士市",
      },
      {
        "@type": "City",
        name: "富士宮市",
      },
      {
        "@type": "City",
        name: "沼津市",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "コワーキングスペース利用",
        price: "550",
        priceCurrency: "JPY",
        description: "時間単位でのコワーキングスペース利用",
      },
      {
        "@type": "Offer",
        name: "住所登録サービス",
        description: "法人登記・各種届出用の住所登録サービス",
        category: "ビジネスサポート",
      },
      {
        "@type": "Offer",
        name: "多目的スペースレンタル",
        description:
          "ヨガ・ダンス・ギャラリー・マルシェなど様々な用途で利用可能",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "高速Wi-Fi",
        value: true,
      },
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
        name: "音響設備",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "大型モニター",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "バリアフリー対応",
        value: true,
      },
    ],
    maximumAttendeeCapacity: 150,
    smokingAllowed: false,
    isAccessibleForFree: false,
  };

  return (
    <>
      <StructuredDataScript
        data={coworkingServiceData}
        id="coworking-features"
      />

      <section className="w-full bg-black relative py-32 overflow-hidden">
        {/* 背景グラデーション効果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-70"></div>

        {/* ぼかしグロー効果 */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FeaturesHeader />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <FeaturesOverview />
              <FeaturesGallery />
            </div>

            <FeaturesSpaces />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
              <FeaturesEquipment />
              <FeaturesUsage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
