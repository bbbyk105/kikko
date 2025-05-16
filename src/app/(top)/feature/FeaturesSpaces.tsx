"use client";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaUsers,
  FaCoffee,
  FaPrayingHands,
  FaStore,
  FaTv,
} from "react-icons/fa";
import { JSX } from "react";

interface SpaceInfo {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  useCases: string[];
}

export function FeaturesSpaces() {
  const spaces: SpaceInfo[] = [
    {
      id: "green-space",
      name: "グリーンスペース",
      description:
        "自然光が差し込む明るい空間で、ヨガやダンスなどの運動に最適なエリア。",
      icon: <FaPrayingHands className="h-6 w-6" />,
      useCases: [
        "ヨガ教室",
        "ダンスレッスン",
        "フィットネスクラス",
        "太極拳",
        "ピラティス",
      ],
    },
    {
      id: "main-hall",
      name: "メインホール",
      description:
        "多目的に利用できる広々とした空間。様々なイベントやビジネスシーンに対応。",
      icon: <FaUsers className="h-6 w-6" />,
      useCases: [
        "企業セミナー",
        "展示会",
        "ワークショップ",
        "プレゼンテーション",
        "商談会",
      ],
    },
    {
      id: "coworking",
      name: "コワーキングエリア",
      description:
        "集中して作業できる快適な環境と、交流を生み出す開放的なスペース。",
      icon: <FaCoffee className="h-6 w-6" />,
      useCases: [
        "リモートワーク",
        "ノマドワーカー",
        "スタートアップ",
        "フリーランス",
        "チームミーティング",
      ],
    },
    {
      id: "event-space",
      name: "イベントスペース",
      description:
        "防音設備完備で、クラブイベントやライブパフォーマンスが開催可能。",
      icon: <FaMusic className="h-6 w-6" />,
      useCases: [
        "DJイベント",
        "ライブ配信",
        "パーティー",
        "ミュージックセッション",
        "オンラインイベント",
      ],
    },
    {
      id: "market-area",
      name: "マルシェ利用",
      description:
        "出店ブースを設置できる広々とした空間。マルシェや展示販売も可能です。",
      icon: <FaStore className="h-6 w-6" />,
      useCases: [
        "物販イベント",
        "ポップアップストア",
        "フリーマーケット",
        "展示販売",
        "ワークショップ",
      ],
    },
    {
      id: "viewing-area",
      name: "観戦エリア",
      description:
        "大型モニターを完備し、スポーツ観戦やパブリックビューイングを楽しめる空間。",
      icon: <FaTv className="h-6 w-6" />,
      useCases: [
        "スポーツ観戦",
        "映画上映会",
        "ゲーム大会",
        "プレゼンテーション",
        "講演会",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-8"
    >
      <h3 className="text-2xl font-medium text-white mb-8 text-center">
        利用可能スペース
      </h3>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {spaces.map((space) => (
          <motion.div
            key={space.id}
            variants={itemVariants}
            className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white/15 transition-colors">
                {space.icon}
              </div>
              <h4 className="ml-3 text-xl font-medium text-white">
                {space.name}
              </h4>
            </div>

            <p className="text-gray-400 text-sm mb-4">{space.description}</p>

            <div className="bg-black/20 rounded-lg p-3">
              <p className="text-white text-xs font-medium mb-2">主な利用例:</p>
              <div className="flex flex-wrap gap-2">
                {space.useCases.map((useCase, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
