"use client";
import React from "react";
import { motion } from "framer-motion";

export const CompanyHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
        会社情報
      </h2>
      <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
        橘香堂を運営する株式会社近藤薬局の会社概要とアクセス情報をご案内いたします。
        当社についてさらに詳しく知りたい方は、お気軽にお問い合わせください。
      </p>
      <div className="flex justify-center mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
};
