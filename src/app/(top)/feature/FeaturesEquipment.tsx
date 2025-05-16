"use client";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaDesktop,
  FaMicrophone,
  FaWheelchair,
  FaCoffee,
  FaMusic,
  FaLightbulb,
} from "react-icons/fa";
import { TiBatteryCharge } from "react-icons/ti";
import { JSX } from "react";

interface Equipment {
  name: string;
  description: string;
  icon: JSX.Element;
}

export function FeaturesEquipment() {
  const equipmentList: Equipment[] = [
    {
      name: "高速Wi-Fi",
      description:
        "ギガビット対応の高速インターネット接続。大人数での同時利用も快適。",
      icon: <FaWifi className="h-5 w-5" />,
    },
    {
      name: "大型モニター",
      description:
        "75インチ4K大型ディスプレイを完備。スポーツ観戦やプレゼンに最適。",
      icon: <FaDesktop className="h-5 w-5" />,
    },
    {
      name: "移動式充電器",
      description: "移動式充電器を完備しているのでどこでも利用可能。",
      icon: <TiBatteryCharge className="h-5 w-5" />,
    },
    {
      name: "マイク・PA設備",
      description: "ワイヤレスマイク、有線マイク、各種音響機器を完備。",
      icon: <FaMicrophone className="h-5 w-5" />,
    },
    {
      name: "バリアフリー設備",
      description:
        "車椅子対応トイレ、スロープ、手すりなど完全バリアフリー対応。",
      icon: <FaWheelchair className="h-5 w-5" />,
    },
    {
      name: "カフェコーナー",
      description: "ドリンクサーバー、電子レンジ、冷蔵庫などの設備を完備。",
      icon: <FaCoffee className="h-5 w-5" />,
    },
    {
      name: "DJブース",
      description: "ターンテーブル設置可能なDJブース完備。",
      icon: <FaMusic className="h-5 w-5" />,
    },
    {
      name: "調光照明システム",
      description: "LED調光システムで様々な雰囲気を演出可能。",
      icon: <FaLightbulb className="h-5 w-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-medium text-white mb-6">設備・アメニティ</h3>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {equipmentList.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start p-3 bg-white/5 rounded-lg"
          >
            <div className="mt-1 mr-3 p-2 rounded-full bg-white/10 text-white">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">{item.name}</h4>
              <p className="text-gray-400 text-xs mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 p-4 bg-black/20 rounded-lg">
        <h4 className="text-white font-medium mb-2">オプション設備</h4>
        <p className="text-gray-400 text-sm">
          各種備品や追加設備のレンタルも可能です。プロジェクター、ホワイトボード、
          追加音響機器、ケータリングサービスなど、お気軽にご相談ください。
        </p>
      </div>
    </motion.div>
  );
}
