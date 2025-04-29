"use client";
import React from "react";
import { motion } from "framer-motion";

export const PriceNotes: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const notes = [
    "料金は全て税込表示です",
    "法人会員の小契約は、主契約に付随する形でのみご契約いただけます",
    "イベントスペースは別途利用料金が発生します",
    "営業時間は平日9:00-21:00 土日祝9:00-18:00です",
    "営業時間外のご利用は事前申請が必要です",
  ];

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gray-900/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8"
    >
      <h4 className="text-sm font-medium text-white mb-4">注意事項：</h4>
      <ul className="space-y-2 text-xs text-gray-400">
        {notes.map((note, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1">•</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
