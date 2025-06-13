"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export const PriceHeader: React.FC = () => {
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUpVariants}
      className="text-center mb-16"
    >
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-white">
        料金プラン
      </h2>
      <p className="text-gray-400 mt-4 text-sm sm:text-base">
        あなたに最適なプランをお選びください
      </p>
      <div className="flex justify-center mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
};
