"use client";
import { motion } from "framer-motion";

export function FeaturesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
        富士市吉原の
        <span className="text-amber-400 block mt-2">
          コワーキングスペース・多目的レンタルスペース
        </span>
      </h1>
      <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
        起業家・フリーランス・リモートワーカーのためのコワーキングスペースから、
        ヨガ・ダンスレッスン、ギャラリー展示、マルシェ開催まで。
        <br />
        <span className="text-amber-300">
          印刷設備完備・住所登録サービス・高速Wi-Fi環境
        </span>
        で、 あらゆるビジネス・クリエイティブ活動をサポートします。
      </p>

      {/* キーワード強調エリア */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl mx-auto">
        {[
          "富士市 コワーキング",
          "住所登録サービス",
          "印刷設備完備",
          "ヨガスタジオ",
          "ダンススタジオ",
          "ギャラリー",
          "マルシェ会場",
          "起業支援",
        ].map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full border border-amber-500/30"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* アクセス・連絡先情報 */}
      <div className="mt-8 text-center">
        <p className="text-gray-300 text-sm mb-4">
          📍 富士市吉原2丁目8番21-2号 | 🚗 富士駅から車で5分・駐車場完備 | 📞
          0545-67-7400
        </p>
        <div className="flex justify-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>
        </div>
      </div>
    </motion.div>
  );
}
