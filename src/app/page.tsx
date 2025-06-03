"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./(top)/(landing)/HeroSection";
import FeatureSection from "./(top)/(landing)/FeatureSection";
import CustomerSection from "./(top)/(landing)/CustomerSection";
import CTASection from "./(top)/(landing)/CTASection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InstagramFeed from "./(top)/(landing)/InstagramFeed";
import { PageStructuredData } from "./components/SEO/PageStructuredData";
import { MicroDataWrapper } from "./components/SEO/MicroDataWrapper";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const breadcrumbItems = [
    { name: "ホーム", url: "https://mtfuji-kikkou.com" },
  ];

  return (
    <>
      {/* ページ固有の構造化データ */}
      <PageStructuredData
        pageType="WebPage"
        title="橘香堂 - 富士市吉原の多目的レンタルスペース・コワーキングスタジオ"
        description="富士市吉原の多目的レンタルスペース橘香堂。ヨガ・ダンススタジオ、ギャラリー、マルシェ会場、コワーキングスペースとして様々な用途でご利用いただけます。"
        url="https://mtfuji-kikkou.com"
        breadcrumbItems={breadcrumbItems}
      />

      {/* セマンティックなHTML構造でSEO向上 */}
      <MicroDataWrapper itemScope itemType="https://schema.org/LocalBusiness">
        {/* マイクロデータのメタ情報 */}
        <meta itemProp="name" content="橘香堂" />
        <meta
          itemProp="description"
          content="富士市吉原の多目的レンタルスペース"
        />
        <meta itemProp="telephone" content="0545-67-7400" />
        <meta itemProp="url" content="https://mtfuji-kikkou.com" />
        <meta itemProp="priceRange" content="¥550-5500" />

        {/* 住所のマイクロデータ */}
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          style={{ display: "none" }}
        >
          <meta itemProp="addressLocality" content="富士市" />
          <meta itemProp="addressRegion" content="静岡県" />
          <meta itemProp="postalCode" content="417-0051" />
          <meta itemProp="streetAddress" content="吉原2丁目8番21-2号" />
          <meta itemProp="addressCountry" content="JP" />
        </div>

        {/* 位置情報のマイクロデータ */}
        <div
          itemProp="geo"
          itemScope
          itemType="https://schema.org/GeoCoordinates"
          style={{ display: "none" }}
        >
          <meta itemProp="latitude" content="35.1625832" />
          <meta itemProp="longitude" content="138.6874852" />
        </div>

        {/* 営業時間のマイクロデータ */}
        <div
          itemProp="openingHoursSpecification"
          itemScope
          itemType="https://schema.org/OpeningHoursSpecification"
          style={{ display: "none" }}
        >
          <meta
            itemProp="dayOfWeek"
            content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
          />
          <meta itemProp="opens" content="09:00" />
          <meta itemProp="closes" content="18:00" />
        </div>

        <main
          className="flex flex-col min-h-screen bg-espresso-background text-espresso-foreground"
          role="main"
        >
          <Header />

          <article>
            <HeroSection />
            <FeatureSection />
            <InstagramFeed />
            <CustomerSection />
            <CTASection />
          </article>

          <Footer />
        </main>
      </MicroDataWrapper>
    </>
  );
}
