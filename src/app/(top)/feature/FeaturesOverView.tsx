"use client";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaExpand,
  FaUsers,
  FaWheelchair,
  FaLeaf,
} from "react-icons/fa";
import { JSX } from "react";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function FeaturesOverview() {
  const features: Feature[] = [
    {
      title: "広々スペース",
      description:
        "200平方メートルの広々としたメインスペースで、大人数のイベントも快適に開催できます。",
      icon: <FaExpand className="h-6 w-6" />,
    },
    {
      title: "多目的利用",
      description:
        "ヨガ、ダンス、会議、コワーキング、展示会など様々な用途に対応する柔軟なレイアウト。",
      icon: <FaCheck className="h-6 w-6" />,
    },
    {
      title: "バリアフリー設計",
      description:
        "車椅子対応トイレや段差のないデザインで、すべての方に安心してご利用いただけます。",
      icon: <FaWheelchair className="h-6 w-6" />,
    },
    {
      title: "環境に配慮",
      description:
        "自然光を取り入れた設計と緑あふれるグリーンスペースで、環境に優しい空間づくりを実現。",
      icon: <FaLeaf className="h-6 w-6" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-medium text-white mb-8">施設の特徴</h3>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/10 text-white">
                {feature.icon}
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-white">
                {feature.title}
              </h4>
              <p className="mt-2 text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-white/5">
        <h4 className="text-white font-medium flex items-center">
          <FaUsers className="h-5 w-5 mr-2 text-gray-400" />
          収容人数
        </h4>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="bg-black/20 p-3 rounded-lg">
            <p className="text-gray-400 text-xs">スタンディング</p>
            <p className="text-white text-xl font-semibold">最大150名</p>
          </div>
          <div className="bg-black/20 p-3 rounded-lg">
            <p className="text-gray-400 text-xs">着席</p>
            <p className="text-white text-xl font-semibold">最大80名</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
