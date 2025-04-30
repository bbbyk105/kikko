"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const TimeHolidays: React.FC = () => {
  const holidays2025 = [
    { date: "1月1日", day: "水", name: "元日" },
    { date: "1月13日", day: "月", name: "成人の日" },
    { date: "2月11日", day: "火", name: "建国記念日" },
    { date: "2月23日", day: "日", name: "天皇誕生日" },
    { date: "2月24日", day: "月", name: "振替休日" },
    { date: "3月20日", day: "木", name: "春分の日" },
    { date: "4月29日", day: "火", name: "昭和の日" },
    { date: "5月3日", day: "土", name: "憲法記念日" },
    { date: "5月4日", day: "日", name: "みどりの日" },
    { date: "5月5日", day: "月", name: "こどもの日" },
    { date: "5月6日", day: "火", name: "振替休日" },
    { date: "7月21日", day: "月", name: "海の日" },
    { date: "8月11日", day: "月", name: "山の日" },
    { date: "9月15日", day: "月", name: "敬老の日" },
    { date: "9月23日", day: "火", name: "秋分の日" },
    { date: "10月13日", day: "月", name: "スポーツの日" },
    { date: "11月3日", day: "月", name: "文化の日" },
    { date: "11月23日", day: "日", name: "勤労感謝の日" },
    { date: "11月24日", day: "月", name: "振替休日" },
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
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center mb-6">
        <Calendar className="h-5 w-5 text-white mr-3" />
        <h3 className="text-xl font-medium text-white">
          2025年 祝日カレンダー
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
      >
        <div className="space-y-1">
          {holidays2025.map((holiday, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-between py-2 border-b border-white/5 last:border-none"
            >
              <div className="flex items-center">
                <span className="text-gray-400 text-sm w-16">
                  {holiday.date}
                </span>
                <span className="text-white/80 text-sm">{holiday.name}</span>
              </div>
              <span className="text-gray-500 text-sm">{holiday.day}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-6 p-3 bg-white/5 rounded-lg text-xs text-gray-400">
        <p>※祝日は土日営業時間（9:00-18:00）となります。</p>
        <p className="mt-2">
          ※カレンダーは予告なく変更になる場合がございます。
        </p>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </motion.div>
  );
};
