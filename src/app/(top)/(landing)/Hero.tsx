"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // スライド用の画像データ
  const slides = [
    {
      id: 1,
      image: "/images/slide1.webp",
      alt: "モダンなコワーキングスペースの共有エリア",
    },
    {
      id: 2,
      image: "/images/slide2.webp",
      alt: "集中できるワークスペース環境",
    },
    {
      id: 3,
      image: "/images/slide3.webp",
      alt: "コラボレーションエリアでの打ち合わせ風景",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ------------------------------ 背景スライダー ------------------------------ */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          speed={1500}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                  priority={slide.id === 1}
                />
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ------------------------------ キャッチコピー ------------------------------ */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-bold tracking-wide leading-tight text-white text-4xl md:text-6xl lg:text-7xl drop-shadow-lg mb-6">
            <span className="block">Work Together,</span>
            <span className="block">Grow Together</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wide drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            クリエイティブなアイデアが生まれる、
            <br className="hidden md:block" />
            新しいワークスタイルの拠点
          </p>
        </div>
      </div>

      {/* ------------------------------ Scroll Indicator ------------------------------ */}
      <div
        className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1500 ${
          isLoaded ? "translate-y-0 opacity-70" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center text-white animate-bounce">
          <div className="w-0.5 h-8 md:h-12 bg-gradient-to-b from-white to-transparent mb-2" />
          <p className="text-xs tracking-wider rotate-90 origin-center translate-y-3 md:translate-y-4">
            SCROLL
          </p>
        </div>
      </div>

      {/* ------------------------------ Styles ------------------------------ */}
      <style jsx>{`
        @keyframes slideProgress {
          0%,
          33.33% {
            transform: translateY(100%);
          }
          33.33%,
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
}
