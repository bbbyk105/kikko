"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, User, Clock, MapPin, Phone, Mail } from "lucide-react";

export const CompanyInfo: React.FC = () => {
  const companyData = [
    {
      label: "会社名",
      value: "株式会社 近藤薬局",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      label: "代表取締役",
      value: "近藤 弘人",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "所在地",
      value: "〒417-0051 静岡県富士市吉原2丁目 8番21-2号",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      label: "営業時間",
      value: "平日：9:00-18:00\n土日祝：9:00-18:00",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: "電話番号",
      value: "0545-52-0000",
      link: "tel:0545520000",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "メールアドレス",
      value: "info@kondo-pharmacy.co.jp",
      link: "mailto:info@kondo-pharmacy.co.jp",
      icon: <Mail className="h-5 w-5" />,
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
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-medium text-white mb-8">会社概要</h3>

      <motion.div variants={containerVariants} className="space-y-6">
        {companyData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start"
          >
            <div className="mt-1 mr-4 p-2 rounded-full bg-white/5 text-white">
              {item.icon}
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">{item.label}</h4>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-white transition-colors text-sm mt-1 block whitespace-pre-line"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm mt-1 whitespace-pre-line">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 p-4 bg-white/5 rounded-xl"
      >
        <h4 className="text-white font-medium mb-2">事業内容</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
          <li>調剤薬局の運営</li>
          <li>一般医薬品・健康食品の販売</li>
          <li>処方箋調剤サービス</li>
          <li>在宅医療サポート</li>
          <li>健康相談・栄養相談</li>
          <li>コワーキングスペース</li>
          <li>日本酒事業</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
