"use client";
import React from "react";
import { motion } from "framer-motion";

export const ContactHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
        お問い合わせ
      </h2>
      <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
        ご質問やご予約、施設に関するお問い合わせは下記フォームよりお気軽にご連絡ください。
        通常2営業日以内にご返信いたします。
      </p>
      <div className="flex justify-center mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
};
