"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaQuestionCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface UsageScene {
  id: string;
  title: string;
  description: string;
  images: string[];
  details: string;
}

export function FeaturesUsage() {
  const usageScenes: UsageScene[] = [
    {
      id: "yoga",
      title: "ヨガクラス",
      description:
        "自然光が差し込む明るいグリーンスペースで、リラックスしたヨガクラスやエネルギッシュなダンスレッスンが開催できます。",
      images: ["/images/features/yoga.jpg"],
      details:
        "最大20名収容可能な広々としたグリーンスペースは、ヨガやダンスを行えます。プロフェッショナルなインストラクターからビギナー向けの少人数クラスまで、様々なレッスンに対応できます。",
    },
    {
      id: "business",
      title: "ビジネスミーティング",
      description:
        "プロフェッショナルな環境で、会議やセミナー、プレゼンテーションを開催。大型ディスプレイで資料共有も簡単です。",
      images: [
        "/images/features/business-1.jpg",
        "/images/features/business-2.jpg",
        "/images/features/business-3.jpg",
      ],
      details:
        "最大60名（スクール形式）を収容可能な会議スペースは、高速Wi-Fiと大型4Kモニターを完備。ホワイトボードや会議用家具も充実しており、ビジネスミーティングやセミナーに最適な環境です。",
    },
    {
      id: "party",
      title: "イベント・パーティー",
      description:
        "誕生日パーティーから企業イベントまで、思い出に残る特別な時間を演出。音響・照明設備でさらに雰囲気を盛り上げます。",
      images: [
        "/images/features/party-1.jpg",
        "/images/features/party-2.jpg",
        "/images/features/party-3.jpg",
      ],
      details:
        "立食で150名、着席で80名を収容可能な広々としたスペースは、調光照明とプロ仕様の音響設備を完備。ケータリング対応も可能で、パーティーやイベントを盛り上げる最適な空間です。",
    },
    // {
    //   id: "club",
    //   title: "クラブイベント・DJ",
    //   description:
    //     "専用DJブースと高品質な音響システムで、クラブイベントやライブパフォーマンスを開催。特別な夜を演出します。",
    //   images: [
    //     "/images/features/club-1.jpg",
    //     "/images/features/club-2.jpg",
    //     "/images/features/club-3.jpg",
    //   ],
    //   details:
    //     "最大100名を収容可能なイベントスペースは、DJブースと高品質な音響システムを完備。調光照明システムとバーカウンターも設置されており、クラブイベントやライブパフォーマンスに最適です。",
    // },
    {
      id: "market",
      title: "展示会・マルシェ",
      description:
        "作品展示やハンドメイドマルシェ、ポップアップストアなど、様々な販売イベントに最適な開放的な空間です。",
      images: [
        "/images/features/market-1.jpg",
        "/images/features/market-2.jpg",
        "/images/features/market-3.jpg",
      ],
      details:
        "約20ブースを設置できる広々としたスペースは、電源を各所に完備。搬入口も広く、大型の展示物も安心して設置できます。様々なディスプレイ設備も用意しており、展示会やマルシェを魅力的に演出します。",
    },
    // {
    //   id: "viewing",
    //   title: "スポーツ観戦イベント",
    //   description:
    //     "大型モニターでサッカーやスポーツ観戦を大人数で楽しめます。パブリックビューイングやファン交流会に最適です。",
    //   images: [
    //     "/images/features/viewing-1.jpg",
    //     "/images/features/viewing-2.jpg",
    //     "/images/features/viewing-3.jpg",
    //   ],
    //   details:
    //     "着席で60名、立見で100名を収容可能なスペースは、75インチの大型モニターを完備。マルチチャンネル視聴も可能で、音響設備も充実しているため、スポーツ観戦やパブリックビューイングを迫力ある環境で楽しめます。",
    // },
  ];

  // 現在選択されているシーンと画像のインデックス
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 現在のシーン
  const currentScene = usageScenes[currentSceneIndex];

  // 次のシーンへ
  const nextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % usageScenes.length);
    setCurrentImageIndex(0);
  };

  // 前のシーンへ
  const prevScene = () => {
    setCurrentSceneIndex(
      (prev) => (prev - 1 + usageScenes.length) % usageScenes.length
    );
    setCurrentImageIndex(0);
  };

  // 次の画像へ
  // const nextImage = () => {
  //   setCurrentImageIndex((prev) => (prev + 1) % currentScene.images.length);
  // };

  // 前の画像へ
  // const prevImage = () => {
  //   setCurrentImageIndex(
  //     (prev) =>
  //       (prev - 1 + currentScene.images.length) % currentScene.images.length
  //   );
  // };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-medium text-white mb-6">
        実際のご利用シーン
      </h3>

      {/* スライドショー */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-800">
          {/* 画像が用意されるまでのプレースホルダー */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/50 text-sm">画像準備中</p>
          </div>

          {/* 実際の画像（画像が用意されたらコメントを外す） */}
          <Image
            src={currentScene.images[currentImageIndex]}
            alt={`${currentScene.title}のイメージ ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* シーン切り替えボタン */}
          <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
            <button
              onClick={prevScene}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="前のシーン"
            >
              <FaArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextScene}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="次のシーン"
            >
              <FaArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* 画像切り替えボタン */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {currentScene.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`画像 ${index + 1} に移動`}
              />
            ))}
          </div>

          {/* タイトルオーバーレイ */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pt-16">
            <h4 className="text-white text-xl font-bold">
              {currentScene.title}
            </h4>
            <p className="text-white/80 text-sm">{currentScene.description}</p>
          </div>
        </div>

        {/* シーンナビゲーション */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
          {usageScenes.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => {
                setCurrentSceneIndex(index);
                setCurrentImageIndex(0);
              }}
              className={`p-2 rounded-lg text-center transition-all ${
                index === currentSceneIndex
                  ? "bg-white/20 text-white"
                  : "bg-black/20 text-gray-400 hover:bg-black/40 hover:text-white"
              }`}
            >
              <span className="text-xs font-medium line-clamp-1">
                {scene.title}
              </span>
            </button>
          ))}
        </div>

        {/* 詳細テキスト */}
        <div className="mt-4 p-4 bg-black/20 rounded-lg">
          <p className="text-gray-300 text-sm">{currentScene.details}</p>
        </div>
      </div>

      {/* 問い合わせと予約（リクエストにより残す） */}
      <div className="bg-white/5 rounded-lg p-4">
        <div className="flex items-start">
          <FaQuestionCircle className="h-5 w-5 text-white mr-3 mt-1" />
          <div>
            <h4 className="text-white font-medium mb-2">
              ご予約・お問い合わせ
            </h4>
            <p className="text-gray-400 text-sm mb-3">
              空き状況の確認、詳細な料金のお見積り、オプション設備のご相談など、
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/price"
                className="inline-block bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg text-sm transition-colors"
              >
                料金詳細を見る
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-black hover:bg-white/90 text-center py-2 px-4 rounded-lg text-sm transition-colors"
              >
                お問い合わせをする
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
