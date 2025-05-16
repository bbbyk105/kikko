"use client";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/app/components/ui/sheet";
import Image from "next/image";

const navItems = [
  {
    title: "ホーム",
    href: "/",
  },
  {
    title: "施設紹介",
    href: "/feature",
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  // スクロール検出用のエフェクト
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500); // ヒーローセクション分スクロールした後に背景を表示
    };

    window.addEventListener("scroll", handleScroll);

    // 現在のパスを取得
    if (typeof window !== "undefined") {
      setActiveItem(window.location.pathname);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 
      ${
        scrolled
          ? "bg-[#121212]/95 backdrop-blur-md border-b border-amber-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container h-16 flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* ロゴエリア */}
        <div className="flex items-center">
          <Link href="/" className="relative z-[60] flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Company Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-200 relative
                ${
                  activeItem === item.href
                    ? "text-amber-400"
                    : "text-gray-200 hover:text-amber-400"
                }
                group`}
            >
              {item.title}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300
                ${activeItem === item.href ? "w-full" : "group-hover:w-full"}`}
              ></span>
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium text-gray-200 p-0 hover:text-amber-400 flex items-center gap-1 group"
              >
                施設情報
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#121212]/95 backdrop-blur-md border-amber-500/20 rounded-md shadow-lg shadow-amber-500/5 mt-2 p-1"
            >
              {resourcesItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="text-gray-200 hover:text-amber-400 focus:text-amber-400 focus:bg-[#1A1A1A] rounded-sm px-4 py-2 my-1"
                >
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* モバイルメニューボタン */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-200 hover:text-amber-400 hover:bg-[#1A1A1A]/50"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-80 bg-gradient-to-b from-[#121212] to-[#1A1A1A] border-l border-amber-500/20"
          >
            <SheetHeader className="pb-6">
              <SheetTitle className="text-center text-white">
                <Image
                  src="/images/logo.webp"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="mx-auto"
                  priority
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors flex items-center justify-center py-2
                      ${
                        activeItem === item.href
                          ? "text-amber-400 bg-[#1A1A1A]/50 rounded-md"
                          : "text-white hover:text-amber-400"
                      }`}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
              <div className="space-y-4 pt-2">
                <p className="text-base font-medium text-white text-center border-t border-[#3A3A3A] pt-6">
                  施設情報
                </p>
                <div className="space-y-4">
                  {resourcesItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 transition-colors hover:text-amber-400 flex items-center justify-center py-2"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
