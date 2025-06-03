"use client";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaUsers,
  FaCoffee,
  FaPrayingHands,
  FaStore,
  FaPrint,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { JSX } from "react";

interface SpaceInfo {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  useCases: string[];
  isMain?: boolean; // コワーキング関連を強調
}

export function FeaturesSpaces() {
  const spaces: SpaceInfo[] = [
    {
      id: "coworking",
      name: "コワーキングスペース",
      description:
        "富士市で最も充実した設備のコワーキング環境。起業家・フリーランス・リモートワーカーに最適な集中できる空間。",
      icon: <FaCoffee className="h-6 w-6" />,
      useCases: [
        "リモートワーク",
        "起業家支援",
        "フリーランス作業",
        "スタートアップ",
        "チームミーティング",
        "オンライン会議",
      ],
      isMain: true,
    },
    {
      id: "business-support",
      name: "ビジネスサポートサービス",
      description:
        "印刷設備完備＋住所登録サービスで起業家を全面サポート。法人登記から日常業務まで安心のサービス。",
      icon: <FaPrint className="h-6 w-6" />,
      useCases: [
        "法人登記用住所",
        "印刷・スキャン",
        "名刺作成",
        "資料印刷",
        "郵便物受取",
        "起業相談",
      ],
      isMain: true,
    },
    {
      id: "meeting-space",
      name: "会議・セミナールーム",
      description:
        "プロフェッショナルな環境で、会議やセミナー、プレゼンテーションを開催。大型ディスプレイで資料共有も簡単。",
      icon: <FaUsers className="h-6 w-6" />,
      useCases: [
        "企業セミナー",
        "ビジネス会議",
        "プレゼンテーション",
        "研修会",
        "商談会",
        "起業家交流会",
      ],
    },
    {
      id: "green-space",
      name: "ヨガ・ダンススタジオ",
      description:
        "自然光が差し込む明るい空間で、ヨガやダンスなどの運動に最適なエリア。音響設備完備。",
      icon: <FaPrayingHands className="h-6 w-6" />,
      useCases: [
        "ヨガ教室",
        "ダンスレッスン",
        "フィットネスクラス",
        "太極拳",
        "ピラティス",
        "瞑想会",
      ],
    },
    {
      id: "gallery-space",
      name: "ギャラリー・展示スペース",
      description:
        "作品展示やアート展示に最適な開放的な空間。照明設備も充実しており、様々な展示に対応。",
      icon: <FaStore className="h-6 w-6" />,
      useCases: [
        "アート展示",
        "写真展",
        "ハンドメイド展示",
        "ポップアップストア",
        "作品発表会",
        "企業展示",
      ],
    },
    {
      id: "event-space",
      name: "マルシェ・イベント会場",
      description:
        "フリーマーケットからマルシェ、各種イベントまで対応。出店ブース設置可能な広々とした空間。",
      icon: <FaMusic className="h-6 w-6" />,
      useCases: [
        "マルシェ開催",
        "フリーマーケット",
        "物販イベント",
        "ワークショップ",
        "地域イベント",
        "企業イベント",
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
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
        富士市で最も多様な
        <span className="text-amber-400 block mt-2">利用可能スペース</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        コワーキングスペースを中心に、ビジネスからクリエイティブ活動まで
        あらゆるニーズに対応する多目的レンタルスペース
      </p>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {spaces.map((space) => (
          <motion.div
            key={space.id}
            variants={itemVariants}
            className={`${
              space.isMain
                ? "bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-400/30"
                : "bg-gray-900/30 border-white/10"
            } backdrop-blur-sm border rounded-2xl p-6 hover:border-white/20 transition-all group relative`}
          >
            {space.isMain && (
              <div className="absolute -top-3 -right-3 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                人気
              </div>
            )}

            <div className="flex items-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  space.isMain
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-white/10 text-white"
                } group-hover:bg-white/15 transition-colors`}
              >
                {space.icon}
              </div>
              <h3 className="ml-3 text-xl font-medium text-white">
                {space.name}
              </h3>
            </div>

            <p className="text-gray-400 text-sm mb-4">{space.description}</p>

            <div className="bg-black/20 rounded-lg p-3">
              <p className="text-white text-xs font-medium mb-2">主な利用例:</p>
              <div className="flex flex-wrap gap-2">
                {space.useCases.map((useCase, index) => (
                  <span
                    key={index}
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      space.isMain
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-white/10 text-gray-300"
                    }`}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* コワーキング・ビジネスサポートの特別情報 */}
            {space.isMain && (
              <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-amber-300 text-xs font-medium flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  {space.id === "coworking"
                    ? "550円/時間〜 格安料金"
                    : "法人登記対応 住所登録"}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA セクション */}
      <div className="mt-12 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          富士市でのビジネス・クリエイティブ活動は
          <span className="text-amber-400 block mt-1">
            橘香堂におまかせください
          </span>
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          見学は随時受付中。あなたの用途に最適なスペースかどうか、
          ぜひ一度ご自身の目でお確かめください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            見学予約・お問い合わせ
          </a>
          <a
            href="tel:0545-67-7400"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            0545-67-7400
          </a>
        </div>
      </div>
    </motion.div>
  );
}
