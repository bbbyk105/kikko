"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション効果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-70"></div>

      {/* ぼかしグロー効果 */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="text-white text-9xl font-bold opacity-10 absolute inset-0 flex items-center justify-center">
              404
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10"
            >
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
                ページが見つかりません
              </h1>
              <div className="h-1 w-20 bg-white/20 mx-auto my-6"></div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 mb-8"
          >
            お探しのページは移動したか、削除された可能性があります。
            URLが正しいことをご確認ください。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                ホームに戻る
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                前のページに戻る
              </button>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
          >
            <p className="text-gray-400 text-sm">
              お探しのページに関するご質問や問題がある場合は、
              <Link href="/contact" className="text-white hover:underline">
                こちら
              </Link>
              からお問い合わせください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
