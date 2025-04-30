"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

// Headerと同じナビゲーション項目を使用
const navItems = [
  {
    title: "ホーム",
    href: "/",
  },
  {
    title: "施設紹介",
    href: "/features",
  },
  {
    title: "料金",
    href: "/price",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
  },
];

// Headerと同じリソース項目を使用
const resourcesItems = [
  {
    title: "営業時間",
    href: "/time",
  },
  {
    title: "会社情報・アクセス",
    href: "/company",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ロゴと説明 */}
          <div className="space-y-4">
            <p className="max-w-xs">
              快適な空間で創造性を引き出す、静岡県富士市のコワーキングスペース。
              プロフェッショナルのためのワークプレイスです。
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/kikkou2022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* ナビゲーションメニュー - Headerと合わせる */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              サイトマップ
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <p className="text-white font-medium mt-4 mb-2">施設情報</p>
                <ul className="space-y-2 pl-2">
                  {resourcesItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* コンタクト情報 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              お問い合わせ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-amber-400 flex-shrink-0" />
                <p>
                  〒417-0051 <br />
                  静岡県富士市吉原２丁目 ８番21-2号
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-amber-400 flex-shrink-0" />
                <p>0545-67-7400</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Kikkoudo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
