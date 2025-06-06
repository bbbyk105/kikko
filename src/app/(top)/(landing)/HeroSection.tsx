import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/slide1.webp",
    alt: "モダンなコワーキングスペースと快適なワークステーション",
  },
  {
    src: "/images/slide2.webp",
    alt: "ミーティングスペースとコラボレーションエリア",
  },
  {
    src: "/images/slide3.webp",
    alt: "カフェエリアとリラクゼーションゾーン",
  },
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [showContent, setShowContent] = useState(false);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // Amplifyの遅延対策: 即座にコンテンツを表示開始
  useEffect(() => {
    // 200ms後に最低限のコンテンツを表示
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    // 画像の非同期プリロード（バックグラウンドで実行）
    const preloadImages = () => {
      images.forEach((image, index) => {
        const img = new window.Image();
        img.onload = () => {
          setImagesLoaded((prev) => ({ ...prev, [index]: true }));
          if (index === 0) {
            setFirstImageLoaded(true);
          }
        };
        img.onerror = () => {
          console.warn(`画像読み込み失敗: ${image.src}`);
          // エラーでもローディング完了として扱う
          setImagesLoaded((prev) => ({ ...prev, [index]: true }));
          if (index === 0) {
            setFirstImageLoaded(true);
          }
        };
        img.src = image.src;
      });
    };

    // 即座にプリロード開始
    preloadImages();

    return () => clearTimeout(showTimer);
  }, []);

  // 画像切り替えタイマー（最初の画像ロード後に開始）
  useEffect(() => {
    if (!showContent) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showContent]);

  const handleImageClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 即座に表示される美しい背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

      {/* 動的パターン背景（画像がない場合の視覚的補完） */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-y-12 translate-y-32" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform -skew-y-12 -translate-y-16" />
      </div>

      {/* Background Images - Amplify最適化版 */}
      {showContent && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: firstImageLoaded ? 1 : 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                priority={currentImage === 0}
                sizes="100vw"
                className="object-cover"
                quality={currentImage === 0 ? 80 : 70}
                loading={currentImage === 0 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onLoad={() => {
                  if (currentImage === 0) setFirstImageLoaded(true);
                }}
                onError={() => {
                  console.warn(`画像表示エラー: ${images[currentImage].src}`);
                }}
              />
            </div>

            {/* 適応的オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* メインコンテンツ - 即座に表示 */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl mx-auto md:mx-0 space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
                あなたの仕事に
                <br className="hidden sm:block" />
                最適な空間
              </h1>
              <p className="text-lg text-white/95 md:text-xl lg:text-2xl drop-shadow-xl max-w-2xl mx-auto md:mx-0">
                生産性、創造性、そしてコミュニティのために設計された
                <br className="hidden sm:block" />
                モダンなコワーキングスペース。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ナビゲーションドット */}
      {showContent && (
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentImage === index
                  ? "bg-white scale-110 shadow-xl"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`スライド ${index + 1} に移動`}
            />
          ))}
        </div>
      )}

      {/* 読み込み状況インジケーター（開発時のデバッグ用） */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded text-xs">
          <div>Content: {showContent ? "✓" : "⏳"}</div>
          <div>First Image: {firstImageLoaded ? "✓" : "⏳"}</div>
          <div>
            Images: {Object.keys(imagesLoaded).length}/{images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
