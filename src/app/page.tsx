"use client";
import { useEffect, useState } from "react";
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

// 全画面ローダーコンポーネント
const SiteLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="text-center space-y-6">
        {/* ロゴ・ブランド表示 */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            橘香堂
          </h1>
          <p className="text-gray-300 text-sm md:text-base">worx mt.fuji</p>
        </div>

        {/* アニメーション付きローダー */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        </div>

        {/* 読み込みメッセージ */}
        <p className="text-gray-400 text-sm animate-pulse">
          サイトを読み込み中...
        </p>
      </div>

      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-y-12 translate-y-32" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform -skew-y-12 -translate-y-16" />
      </div>
    </div>
  );
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [componentsReady, setComponentsReady] = useState(false);

  useEffect(() => {
    // AOS初期化
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Amplify環境での最適化されたローディング戦略
    const initializePage = async () => {
      try {
        // 最小表示時間を設定（UX向上）
        const minLoadTime = new Promise((resolve) => setTimeout(resolve, 1500));

        // 重要なリソースのプリロード
        const preloadCriticalResources = () => {
          return new Promise<void>((resolve) => {
            // 画像プリロード
            const criticalImages = ["/images/slide1.webp"];
            let loadedCount = 0;

            const checkComplete = () => {
              loadedCount++;
              if (loadedCount >= criticalImages.length) {
                resolve();
              }
            };

            criticalImages.forEach((src) => {
              const img = new Image();
              img.onload = checkComplete;
              img.onerror = checkComplete; // エラーでも続行
              img.src = src;
            });

            // 3秒でタイムアウト（Amplifyの遅延対策）
            setTimeout(resolve, 3000);
          });
        };

        // 並行してロード処理実行
        await Promise.all([minLoadTime, preloadCriticalResources()]);

        setComponentsReady(true);

        // さらに短い遅延でローダーを非表示
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } catch (error) {
        console.warn("ページ初期化エラー:", error);
        // エラーが発生してもページを表示
        setComponentsReady(true);
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    initializePage();
  }, []);

  const breadcrumbItems = [
    { name: "ホーム", url: "https://mtfuji-kikkou.com" },
  ];

  // ローディング画面表示
  if (isLoading) {
    return <SiteLoader />;
  }

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
        style={{
          opacity: componentsReady ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
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
