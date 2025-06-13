"use client";

import React from "react";
import { Instagram, RefreshCw } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const InstagramFeedError: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <section className="py-12 bg-[#1F1F1F]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <Instagram className="h-8 w-8 mb-4 text-amber-400" />
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">
            Instagram最新投稿
          </h2>
          <p className="text-gray-300 max-w-2xl">
            最新の活動やイベント情報をInstagramでチェックしてください
          </p>
        </div>

        <div className="text-center py-10">
          <p className="text-red-400 mb-4">
            Instagram投稿の読み込みに失敗しました
          </p>
          <Button
            onClick={handleRetry}
            className="bg-slate-500 hover:bg-slate-400"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            再試行
          </Button>
        </div>
      </div>
    </section>
  );
};
