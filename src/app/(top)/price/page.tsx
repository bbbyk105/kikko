"use client";
import React from "react";
import { PriceHeader } from "./PriceHeader";
import { PriceTabs } from "./PriceTabs";
import { PricePlans } from "./PricePlans";
import { PriceComparison } from "./PriceComparison";
import { PriceNotes } from "./PriceNotes";

const PricePage: React.FC = () => {
  return (
    <section className="w-full bg-black relative py-32 overflow-hidden">
      {/* 背景グラデーション効果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-70"></div>

      {/* ぼかしグロー効果 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PriceHeader />
          <PriceTabs />
          <PricePlans />
          <PriceComparison />
          <PriceNotes />
        </div>
      </div>
    </section>
  );
};

export default PricePage;
