"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
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
    href: "/features",
  },
  {
    title: "料金",
    href: "/pricing",
  },
  {
    title: "ブログ",
    href: "/blog",
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
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mr-auto">
          <Link
            href="/"
            className="relative z-[60] flex items-center space-x-2"
          >
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* ナビゲーション - 中央に配置 */}
        <nav className="hidden md:flex items-center justify-center gap-6 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium text-muted-foreground p-0"
              >
                施設情報
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {resourcesItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* 右側のボタン */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button variant="outline" className="hidden md:flex text-sm" asChild>
            <Link href="/reserve">ご予約</Link>
          </Button>
          <Button size="sm" className="hidden sm:flex" asChild>
            <Link href="/member">会員登録</Link>
          </Button>
          <Button size="sm" className="sm:hidden" asChild>
            <Link href="/member">会員登録</Link>
          </Button>

          {/* モバイルメニューボタン - Sheetを使用 */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-80">
              <SheetHeader className="pb-6">
                <SheetTitle className="text-center">メニュー</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-base font-medium text-foreground transition-colors hover:text-primary flex items-center justify-center"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
                <div className="space-y-3">
                  <p className="text-base font-medium text-foreground text-center">
                    施設情報
                  </p>
                  <div className="space-y-3">
                    {resourcesItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="text-base text-muted-foreground transition-colors hover:text-primary flex items-center justify-center"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">ログイン</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/signup">アカウント作成</Link>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
