"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { planTabAtom } from "./atoms";

export const PriceTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useAtom(planTabAtom);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex justify-center mb-12"
    >
      <div className="bg-gray-900/70 p-1 rounded-lg inline-flex">
        <button
          onClick={() => setSelectedTab("monthly")}
          className={`py-2 px-6 text-sm font-medium rounded-md transition-all ${
            selectedTab === "monthly"
              ? "bg-white/10 text-white shadow-sm"
              : "text-gray-400 hover:text-white"
          }`}
        >
          月額プラン
        </button>
        <button
          onClick={() => setSelectedTab("daily")}
          className={`py-2 px-6 text-sm font-medium rounded-md transition-all ${
            selectedTab === "daily"
              ? "bg-white/10 text-white shadow-sm"
              : "text-gray-400 hover:text-white"
          }`}
        >
          日額プラン
        </button>
      </div>
    </motion.div>
  );
};
