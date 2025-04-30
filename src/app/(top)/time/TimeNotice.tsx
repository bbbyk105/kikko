"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Info, ExternalLink } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export const TimeNotice: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* 臨時休業情報 */}
      <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 mb-8">
        <div className="flex items-start">
          <div className="mr-4 p-2 rounded-full bg-red-500/20 text-red-400">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              臨時休業のお知らせ
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              施設メンテナンスのため、下記の日程で臨時休業いたします。
              ご不便をおかけしますが、ご理解のほどよろしくお願いいたします。
            </p>
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <p className="text-white font-medium">
                2025年5月14日（水）〜 5月15日（木）
              </p>
              <p className="text-gray-400 text-xs mt-1">
                ※5月16日（金）は通常通り営業いたします
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent border-red-500/30 text-red-300 hover:bg-red-900/20 hover:text-red-300"
            >
              <Link href="/contact" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>詳細を問い合わせる</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 年末年始の営業時間 */}
      <div className="bg-gray-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-medium text-white mb-4">
          年末年始の営業時間
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <p className="text-gray-300">2024年12月29日(日)</p>
            <p className="text-white font-medium">9:00 - 15:00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">
              2024年12月30日(月) - 2025年1月3日(金)
            </p>
            <p className="text-white font-medium">休業</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">2025年1月4日(土)</p>
            <p className="text-white font-medium">11:00 - 18:00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">2025年1月5日(日)</p>
            <p className="text-white font-medium">通常営業</p>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 text-sm text-gray-400">
          <p>
            年末年始の営業時間は変更になる場合がございます。詳細はお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-white/80 hover:text-white text-xs mt-3 transition-colors"
          >
            お問い合わせはこちら
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
