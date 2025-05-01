"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const TimeSchedule: React.FC = () => {
  const scheduleData = [
    {
      id: "weekday",
      title: "平日",
      hours: "9:00 - 18:00",
      notes: "最終入館は17:30まで",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      id: "weekend",
      title: "土日祝",
      hours: "9:00 - 18:00",
      notes: "最終入館は17:30まで",
      icon: <Calendar className="h-5 w-5" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-8"
    >
      <h3 className="text-xl font-medium text-white mb-6">通常営業時間</h3>

      <div className="space-y-6">
        {scheduleData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center mb-3 sm:mb-0">
              <div className="p-2 rounded-full bg-white/10 text-white mr-4">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.notes}</p>
              </div>
            </div>
            <div className="flex items-center ml-10 sm:ml-0">
              <ArrowRight className="h-4 w-4 text-gray-500 hidden sm:block mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-white">
                {item.hours}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white/5 rounded-xl p-4">
        <h4 className="text-white font-medium mb-2 flex items-center">
          <Clock className="h-4 w-4 mr-2 text-gray-400" />
          延長営業について
        </h4>
        <p className="text-gray-400 text-sm">
          会員の方は事前予約により、22:00までの延長営業をご利用いただけます。
          延長営業は3日前までの予約が必要です。予約状況により承れない場合もございますので、お早めにお問い合わせください。
        </p>
      </div>
    </motion.div>
  );
};
