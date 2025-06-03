// lib/structured-data.ts - 構造化データの型定義とデータ管理

export interface BusinessInfo {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  image: string[];
  sameAs: string[];
  hasMap: string;
}

// 橘香堂の基本情報
export const KIKKOU_BUSINESS_INFO: BusinessInfo = {
  name: "橘香堂",
  alternateName: "worx mt.fuji",
  description:
    "富士市吉原の多目的レンタルスペース。ヨガ・ダンススタジオ、ギャラリー展示、マルシェ開催、コワーキングスペースなど様々な用途でご利用いただけます。",
  url: "https://mtfuji-kikkou.com",
  telephone: "0545-67-7400",
  address: {
    streetAddress: "吉原2丁目8番21-2号",
    addressLocality: "富士市",
    addressRegion: "静岡県",
    postalCode: "417-0051",
    addressCountry: "JP",
  },
  geo: {
    latitude: 35.1625832,
    longitude: 138.6874852,
  },
  openingHours: ["Mo-Su 09:00-18:00"],
  priceRange: "¥550-5500",
  image: ["https://mtfuji-kikkou.com/images/slide1.webp"],
  sameAs: [
    "https://www.instagram.com/kikkou2022/",
    "https://www.google.com/maps/place/%E6%A9%98%E9%A6%99%E5%A0%82%E8%BF%91%E8%97%A4%E8%96%AC%E5%B1%80%EF%BC%88worx+mt.fuji%EF%BC%89/@35.1625832,138.6849103,17z/data=!3m1!4b1!4m6!3m5!1s0x601a2b3b80616499:0x6c57d4d775647025!8m2!3d35.1625832!4d138.6874852!16s%2Fg%2F11k50k467y",
  ],
  hasMap:
    "https://www.google.com/maps/place/%E6%A9%98%E9%A6%99%E5%A0%82%E8%BF%91%E8%97%A4%E8%96%AC%E5%B1%80%EF%BC%88worx+mt.fuji%EF%BC%89/@35.1625832,138.6849103,17z/data=!3m1!4b1!4m6!3m5!1s0x601a2b3b80616499:0x6c57d4d775647025!8m2!3d35.1625832!4d138.6874852!16s%2Fg%2F11k50k467y",
};

// FAQデータ
export const KIKKOU_FAQ = [
  {
    question: "橘香堂の営業時間と定休日を教えてください",
    answer:
      "営業時間は9時〜18時、年中無休で営業しております。ただし、貸切イベント等により一般利用をお断りする場合がございますので、事前にお問い合わせください。",
  },
  {
    question: "どのような用途で利用できますか？",
    answer:
      "ヨガ・ダンススタジオ、ギャラリー展示、マルシェ・フリーマーケット開催、コワーキングスペース、会議室、セミナー会場など多目的にご利用いただけます。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい、駐車場をご用意しております。富士駅から車で約5分、アクセスも良好です。",
  },
  {
    question: "料金体系を教えてください",
    answer:
      "利用時間や用途により550円〜5,500円の範囲で設定しております。詳しい料金については直接お問い合わせください。",
  },
];

// ===== 構造化データ生成関数 =====

export function generateLocalBusinessData(businessInfo: BusinessInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    hasMap: businessInfo.hasMap,
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
    priceRange: businessInfo.priceRange,
    image: businessInfo.image,
    sameAs: businessInfo.sameAs,
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
        name: "Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "音響設備",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "橘香堂サービス一覧",
      itemListElement: [
        {
          "@type": "Offer",
          name: "多目的レンタルスペース",
          description: "ヨガ、ダンス、会議、イベントなど様々な用途で利用可能",
          category: "レンタルスペース",
        },
        {
          "@type": "Offer",
          name: "コワーキングスペース",
          description: "快適に仕事ができる環境を提供",
          category: "コワーキング",
        },
        {
          "@type": "Offer",
          name: "ギャラリースペース",
          description: "作品展示やアート展示に最適なスペース",
          category: "ギャラリー",
        },
        {
          "@type": "Offer",
          name: "住所登録サービス",
          description: "事業所として利用可能な住所登録サービス",
          category: "ビジネスサポート",
        },
      ],
    },
  };
}

export function generateFAQData(faqList: typeof KIKKOU_FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://mtfuji-kikkou.com/#faq",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteData(businessInfo: BusinessInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}/#website`,
    url: businessInfo.url,
    name: `${businessInfo.name} - 富士市吉原の多目的レンタルスペース`,
    description: `富士市吉原の多目的レンタルスペース${businessInfo.name}の公式サイト`,
    publisher: {
      "@id": `${businessInfo.url}/#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${businessInfo.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };
}

export function generateBreadcrumbData(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageData(
  pageType: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage",
  title: string,
  description: string,
  url: string,
  breadcrumbItems?: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": "https://mtfuji-kikkou.com/#website",
    },
    about: {
      "@id": "https://mtfuji-kikkou.com/#organization",
    },
    ...(breadcrumbItems &&
      breadcrumbItems.length > 0 && {
        breadcrumb: generateBreadcrumbData(breadcrumbItems),
      }),
    mainEntity: {
      "@id": "https://mtfuji-kikkou.com/#organization",
    },
  };
}
