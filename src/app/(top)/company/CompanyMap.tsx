"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const CompanyMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-white mr-2" />
        <h3 className="text-xl font-medium text-white">店舗地図</h3>
      </div>

      <div className="rounded-xl overflow-hidden h-[300px] sm:h-[400px] relative">
        {/* Googleマップ埋め込み */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.5638452684296!2d138.67498761560693!3d35.1061078803228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a3b734be9ff75%3A0xf44b5a33a5de1233!2z44CSNDE3LTAwNTEg6Z2Z5bKh55yM5a-M5aOr5biC5ZCJ5Y6f77yS5LiB55uu77yYIQ!5e0!3m2!1sja!2sjp!4v1714430452115!5m2!1sja!2sjp"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-4 flex justify-end">
        <a
          href="https://x.gd/M991i"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-sm flex items-center transition-colors"
        >
          <span>Google Mapで見る</span>
          <MapPin className="h-4 w-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};
