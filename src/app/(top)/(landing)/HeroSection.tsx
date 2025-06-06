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

  // 段階的な画像ロード
  useEffect(() => {
    // 最初の画像が読み込まれたらすぐにコンテンツを表示
    const firstImageTimer = setTimeout(() => {
      setShowContent(true);
    }, 500); // 500msで表示開始

    // 残りの画像を非同期でプリロード
    const preloadRemainingImages = () => {
      images.slice(1).forEach((image, index) => {
        const img = new window.Image();
        img.onload = () => {
          setImagesLoaded((prev) => ({ ...prev, [index + 1]: true }));
        };
        img.src = image.src;
      });
    };

    const preloadTimer = setTimeout(preloadRemainingImages, 1000);

    return () => {
      clearTimeout(firstImageTimer);
      clearTimeout(preloadTimer);
    };
  }, []);

  // 画像切り替えのタイマー
  useEffect(() => {
    if (!showContent) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 6秒に延長してロード時間を確保

    return () => clearInterval(interval);
  }, [showContent]);

  const handleImageClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  // 最小限のローディング画面
  if (!showContent) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* 即座に表示される背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

        {/* 最初の画像を優先ロード */}
        <div className="absolute inset-0 opacity-0">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={75}
            onLoad={() => setShowContent(true)}
          />
        </div>

        {/* シンプルなローディング表示 */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-white/50 border-t-white rounded-full animate-spin mx-auto"></div>
            <p className="text-white/70 text-sm">読み込み中...</p>
          </div>
        </div>

        {/* 早期表示用のコンテンツ */}
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white/80">
                あなたの仕事に最適な空間
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Smart Loading */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              priority={currentImage === 0}
              sizes="100vw"
              className="object-cover transition-transform duration-[10000ms] hover:scale-105"
              quality={currentImage === 0 ? 85 : 75} // 最初の画像のみ高品質
              loading={currentImage === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />

            {/* フォールバック背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 -z-10" />
          </div>

          {/* 改良されたオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content with Better Performance */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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

      {/* Optimized Navigation Dots */}
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

      {/* Progress indicator for slow connections */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                imagesLoaded[index] || index === 0
                  ? "bg-green-400"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
