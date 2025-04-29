import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto md:mx-0 space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                あなたの仕事に最適な空間
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
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
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === index ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Navigate to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
