"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

export const ContactInfo: React.FC = () => {
  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
      },
    }),
  };

  const infoItems = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "住所",
      content: "静岡県富士市吉原２丁目 ８番21-2号",
      link: "https://x.gd/M991i",
      linkText: "GoogleMapで見る",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "営業時間",
      content: "平日: 9:00 - 21:00\n土日祝: 9:00 - 18:00",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "電話",
      content: "0545-67-7400",
      link: "tel:0545677400",
      linkText: "電話をかける",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "メール",
      content: "info@example.com",
      link: "mailto:info@example.com",
      linkText: "メールを送る",
    },
  ];

  return (
    <div className="space-y-8">
      {/* お問い合わせ情報 */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
      >
        <h3 className="text-xl font-medium text-white mb-6">お問い合わせ先</h3>

        <div className="space-y-6">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={infoVariants}
              className="flex items-start"
            >
              <div className="mt-1 mr-4 p-2 rounded-full bg-white/5 text-white">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">
                  {item.content}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center text-white/80 hover:text-white text-xs mt-2 transition-colors"
                  >
                    {item.linkText}
                    {item.link.startsWith("http") && (
                      <ExternalLink className="ml-1 h-3 w-3" />
                    )}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 対応時間に関する注意事項 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-gray-900/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6"
      >
        <h4 className="text-sm font-medium text-white mb-3">ご連絡について</h4>
        <p className="text-gray-400 text-xs">
          お問い合わせいただいた内容については、通常2営業日以内にご返信いたします。
          お急ぎの場合は、お電話にてご連絡ください。
        </p>
        <hr className="border-white/10 my-3" />
        <p className="text-gray-400 text-xs">
          ※年末年始・GW・お盆期間中は返信が遅れる場合がございます。
          予めご了承ください。
        </p>
      </motion.div>
    </div>
  );
};
