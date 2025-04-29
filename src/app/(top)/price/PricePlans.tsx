"use client";
import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useAtom } from "jotai";
import { planTabAtom } from "./atoms";

export const PricePlans: React.FC = () => {
  const [selectedTab] = useAtom(planTabAtom);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
    >
      {/* ビジター */}
      <motion.div
        variants={fadeInUpVariants}
        custom={0}
        className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                ビジター
              </h3>
              <p className="text-gray-400 text-sm">気軽に利用したい方向け</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {selectedTab === "monthly" ? "5,500" : "550"}
              </span>
              <span className="text-gray-400 ml-1 text-sm">
                円/{selectedTab === "monthly" ? "月" : "日"}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">入会金不要</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              Wi-Fi・電源利用可能
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              当日予約可能
            </li>
            <li className="flex items-center text-gray-300 text-sm opacity-50 line-through">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✕
              </span>
              会員特典
            </li>
          </ul>
        </div>
      </motion.div>

      {/* 通常会員 */}
      <motion.div
        variants={fadeInUpVariants}
        custom={1}
        className="bg-gray-900/60 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg relative group hover:border-white/30 transition-all"
      >
        <div className="absolute top-0 right-0 bg-white/10 text-white px-3 py-1 text-xs backdrop-blur-sm rounded-bl-lg">
          人気
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                通常会員
              </h3>
              <p className="text-gray-400 text-sm">定期的な利用に最適</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Plus className="w-5 h-5 text-white group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {selectedTab === "monthly" ? "5,500" : "500"}
              </span>
              <span className="text-gray-400 ml-1 text-sm">
                円/{selectedTab === "monthly" ? "月" : "日"}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">入会金：5,500円</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              Wi-Fi・電源利用可能
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              3名まで同行可能
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              イベントスペース半額
            </li>
          </ul>
        </div>
      </motion.div>

      {/* 法人会員 */}
      <motion.div
        variants={fadeInUpVariants}
        custom={2}
        className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                法人会員
              </h3>
              <p className="text-gray-400 text-sm">ビジネス利用に最適</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-all" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">
                {selectedTab === "monthly" ? "11,000" : "500"}
              </span>
              <span className="text-gray-400 ml-1 text-sm">
                円/{selectedTab === "monthly" ? "月" : "日"}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">入会金：5,500円〜</p>
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              5名まで同行可能
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              小契約も締結可能
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mr-2 text-xs">
                ✓
              </span>
              イベントスペース優先予約
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
