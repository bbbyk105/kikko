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
        title="橘香堂(worx mt.fuji) - 富士市吉原の多目的レンタルスペース・コワーキングスタジオ"
        description="富士市吉原の多目的レンタルスペース橘香堂。ヨガ・ダンススタジオ、ギャラリー、マルシェ会場、コワーキングスペースとして様々な用途でご利用いただけます。"
        url="https://mtfuji-kikkou.com"
        breadcrumbItems={breadcrumbItems}
      />

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
    </>
  );
}
