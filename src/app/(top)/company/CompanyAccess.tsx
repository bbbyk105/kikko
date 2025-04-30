"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bus, Train, Car, Footprints } from "lucide-react";

export const CompanyAccess: React.FC = () => {
  const accessData = [
    {
      method: "電車",
      description: "JR東海道本線「富士駅」より徒歩15分",
      icon: <Train className="h-5 w-5" />,
    },
    {
      method: "バス",
      description:
        "富士駅より「吉原中央」行きバス「吉原商店街」停留所下車 徒歩3分",
      icon: <Bus className="h-5 w-5" />,
    },
    {
      method: "車",
      description: "東名高速道路「富士IC」より約15分 ※駐車場6台完備",
      icon: <Car className="h-5 w-5" />,
    },
    {
      method: "徒歩",
      description: "吉原商店街アーケード内、吉原中央図書館から徒歩2分",
      icon: <Footprints className="h-5 w-5" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-medium text-white mb-6">アクセス情報</h3>

      <div className="space-y-4">
        {accessData.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="p-2 rounded-full bg-white/10 text-white mr-3">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-medium">{item.method}</h4>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white/5 p-4 rounded-lg">
        <h4 className="text-white font-medium mb-2">周辺施設</h4>
        <ul className="list-disc pl-5 text-gray-300 text-sm">
          <li>吉原中央図書館（徒歩2分）</li>
          <li>富士市役所吉原支所（徒歩5分）</li>
          <li>吉原商店街（目の前）</li>
          <li>富士中央病院（徒歩10分）</li>
        </ul>
      </div>
    </motion.div>
  );
};
