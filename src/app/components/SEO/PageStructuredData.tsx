/* eslint-disable @typescript-eslint/no-explicit-any */
import { StructuredDataScript } from "../StructuredData";
import {
  generateWebPageData,
  generateBreadcrumbData,
} from "../../lib/structured-data";

// 構造化データの型を定義
type StructuredDataItem =
  | ReturnType<typeof generateWebPageData>
  | ReturnType<typeof generateBreadcrumbData>
  | any; // 追加データ用

interface PageStructuredDataProps {
  pageType: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  title: string;
  description: string;
  url: string;
  breadcrumbItems?: Array<{ name: string; url: string }>;
}

export function PageStructuredData({
  pageType,
  title,
  description,
  url,
  breadcrumbItems = [],
}: PageStructuredDataProps) {
  const pageData = generateWebPageData(
    pageType,
    title,
    description,
    url,
    breadcrumbItems
  );

  const structuredDataArray: StructuredDataItem[] = [pageData];

  if (breadcrumbItems.length > 0) {
    structuredDataArray.push(generateBreadcrumbData(breadcrumbItems));
  }

  // 地域検索とサービス情報を強化
  if (pageType === "WebPage" && url === "https://mtfuji-kikkou.com") {
    structuredDataArray.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "橘香堂",
      description: "富士市吉原の多目的レンタルスペース",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "35.1625832",
        longitude: "138.6874852",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://mtfuji-kikkou.com#offers",
        name: "レンタルスペースサービス",
        itemListElement: [
          {
            "@type": "Offer",
            "@id": "https://mtfuji-kikkou.com#coworking-offer",
            name: "コワーキングスペース",
            description: "時間利用・月額利用可能なコワーキングスペース",
            price: "550",
            priceCurrency: "JPY",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "@id": "https://mtfuji-kikkou.com#studio-offer",
            name: "ヨガ・ダンススタジオ",
            description: "多目的スタジオレンタル",
            price: "2200",
            priceCurrency: "JPY",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "@id": "https://mtfuji-kikkou.com#address-offer",
            name: "住所登録サービス",
            description: "法人・個人事業主向け住所利用サービス",
            price: "5500",
            priceCurrency: "JPY",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      areaServed: {
        "@type": "City",
        name: "富士市",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "静岡県",
        },
      },
    });
  }

  return <StructuredDataScript data={structuredDataArray} id="page-data" />;
}
