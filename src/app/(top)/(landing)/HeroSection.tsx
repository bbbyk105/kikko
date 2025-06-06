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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 画像のプリロード
  useEffect(() => {
    let loadedCount = 0;

    const preloadImages = () => {
      images.forEach((image) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          console.warn(`画像の読み込みに失敗: ${image.src}`);
          loadedCount++; // エラーでもカウントして進める
          if (loadedCount === images.length) {
            setImagesLoaded(true);
          }
        };
        img.src = image.src;
      });
    };

    preloadImages();
  }, []);

  // 画像切り替えのタイマー
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const handleImageClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  // ローディング画面
  if (!imagesLoaded) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-white/80 text-sm">読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            priority={currentImage === 0}
            sizes="100vw"
            className="object-cover"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto md:mx-0 space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                あなたの仕事に最適な空間
              </h1>
              <p className="text-lg text-white/90 md:text-xl drop-shadow-md">
                生産性、創造性、そしてコミュニティのために設計された
                モダンなコワーキングスペース。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              currentImage === index
                ? "bg-white scale-110 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Navigate to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
