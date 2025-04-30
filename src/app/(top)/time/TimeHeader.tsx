"use client";
import React from "react";
import { motion } from "framer-motion";

export const TimeHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
        営業時間
      </h2>
      <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
        当施設をご利用いただける時間帯と特別営業日についてご案内いたします。
        各種イベントやメンテナンスにより変更になる場合もございますので、最新情報をご確認ください。
      </p>
      <div className="flex justify-center mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
};
