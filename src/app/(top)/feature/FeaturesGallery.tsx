"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export function FeaturesGallery() {
  // 仮の画像データ。実際の画像に置き換える必要あり
  const galleryImages: GalleryImage[] = [
    {
      src: "/images/features/space-1.jpg",
      alt: "メインホールの様子",
    },
    {
      src: "/images/features/space-2.jpg",
      alt: "グリーンスペースでのヨガの様子",
    },
    {
      src: "/images/features/space-3.jpg",
      alt: "イベントスペースでのマルシェの様子",
    },
    {
      src: "/images/features/space-4.jpg",
      alt: "コワーキングエリアの様子",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8"
    >
      <h3 className="text-xl font-medium text-white mb-6">施設ギャラリー</h3>

      {/* 画像スライダー */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-gray-800">
        {/* 画像が用意されるまでのプレースホルダー */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <p className="text-white/50 text-sm">画像準備中</p>
        </div>

        {/* 実際の画像（画像が用意されたらコメントアウトを外す） */}
        <Image
          src={galleryImages[currentImageIndex].src}
          alt={galleryImages[currentImageIndex].alt}
          fill
          className="object-cover"
        />

        {/* ナビゲーションボタン */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* 画像インジケーター */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`画像 ${index + 1} に移動`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white/5 p-4 rounded-lg">
        <h4 className="text-white font-medium mb-2">
          インタラクティブフロアマップ
        </h4>
        <p className="text-gray-400 text-sm">
          施設の間取りや各スペースの位置関係がわかるインタラクティブマップをご用意。
          各エリアをクリックすると詳細情報が表示されます。
        </p>
        <button className="mt-3 text-white bg-white/10 hover:bg-white/20 rounded-lg py-2 px-4 text-sm transition-colors">
          フロアマップを見る
        </button>
      </div>
    </motion.div>
  );
}
