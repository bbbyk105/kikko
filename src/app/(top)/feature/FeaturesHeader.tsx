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
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
        施設紹介 <span className="text-white/70">- 橘香堂</span>
      </h2>
      <p className="text-gray-400 mt-4 text-xs sm:text-base max-w-3xl mx-auto">
        多様な用途に対応する広々としたスペース「橘香堂」。ヨガ・ダンスからビジネスミーティング、
        クラブイベントまで、あらゆるニーズに応える完全バリアフリーの多目的スペースをご紹介します。
      </p>
      <div className="flex justify-center mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
}
