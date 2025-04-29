"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { activeFeatureAtom } from "./atoms";

export const PriceComparison: React.FC = () => {
  const [activeFeature, setActiveFeature] = useAtom(activeFeatureAtom);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = {
    同時入店人数: {
      visitor: "×",
      regular: "3名まで同行可能",
      corporate: "5名まで同行可能",
    },
    入会金: {
      visitor: "なし",
      regular: "5,500円",
      corporate: "主契約：5,500円\n小契約：2,750円",
    },
    基本料金: {
      visitor: "500円/3h 1000円/日",
      regular: "500円/日",
      corporate: "500円/日",
    },
    月額料金: {
      visitor: "5500円/月",
      regular: "5500円/月",
      corporate: "主契約：11000円/月\n小契約：5500円/月",
    },
    イベントスペース利用: {
      visitor: "×",
      regular: "通常の半額",
      corporate: "通常の半額（優先予約可）",
    },
    会員特典: {
      visitor: "×",
      regular: "○",
      corporate: "○",
    },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-8"
    >
      <div className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-medium text-white mb-6">プラン比較表</h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left font-medium text-gray-400 text-sm">
                    機能
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-gray-400 text-sm">
                    ビジター
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-gray-400 text-sm">
                    通常会員
                  </th>
                  <th className="py-3 px-4 text-center font-medium text-gray-400 text-sm">
                    法人会員
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(features).map(([feature, values]) => (
                  <tr
                    key={feature}
                    className={`border-b border-white/5 ${
                      activeFeature === feature ? "bg-white/5" : ""
                    }`}
                    onClick={() =>
                      setActiveFeature(
                        activeFeature === feature ? null : feature
                      )
                    }
                  >
                    <td className="py-4 px-4 text-white text-sm font-medium">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm whitespace-pre-line">
                      {values.visitor === "×" ? (
                        <span className="text-gray-500">×</span>
                      ) : values.visitor === "○" ? (
                        <span className="text-white">○</span>
                      ) : (
                        values.visitor
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm whitespace-pre-line">
                      {values.regular === "×" ? (
                        <span className="text-gray-500">×</span>
                      ) : values.regular === "○" ? (
                        <span className="text-white">○</span>
                      ) : (
                        values.regular
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm whitespace-pre-line">
                      {values.corporate === "×" ? (
                        <span className="text-gray-500">×</span>
                      ) : values.corporate === "○" ? (
                        <span className="text-white">○</span>
                      ) : (
                        values.corporate
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
