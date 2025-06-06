import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const newImages = [
  {
    src: "/images/slide1.webp",
    alt: "革新的なテクノロジーで未来を創る",
  },
  {
    src: "/images/slide2.webp",
    alt: "サステナブルなオフィス空間",
  },
  {
    src: "/images/slide3.webp",
    alt: "共創のためのコラボレーションエリア",
  },
];

const NewHeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // 画像切り替えタイマー
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % newImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" />

      {/* 背景画像 */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={newImages[currentImage].src}
              alt={newImages[currentImage].alt}
              fill
              priority={currentImage === 0}
              sizes="100vw"
              className="object-cover"
              quality={currentImage === 0 ? 80 : 70}
              loading={currentImage === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              onError={() => {
                console.warn(`画像表示エラー: ${newImages[currentImage].src}`);
              }}
            />
          </div>
          {/* 適応的オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto md:mx-0 space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
                革新と共創の
                <br className="hidden sm:block" />
                最適な場所
              </h1>
              <p className="text-lg text-white/95 md:text-xl lg:text-2xl drop-shadow-xl max-w-2xl mx-auto md:mx-0">
                持続可能でインスピレーションを与える
                <br className="hidden sm:block" />
                空間で新たな可能性を切り開こう。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ナビゲーションドット */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
        {newImages.map((_, index) => (
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
    </div>
  );
};

export default NewHeroSection;
