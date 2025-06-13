import React from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#2C2C2C] to-[#1F1F1F] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ワークスタイルを革新する
                <span className="text-amber-400 block mt-2">新しい選択肢</span>
              </h2>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto">
                プロフェッショナル集団との出会いで、あなたの可能性は無限に広がります。
                今こそ一歩踏み出す時です。
              </p>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button className="px-8 py-6 bg-slate-500 text-white hover:bg-slate-400 transition-all duration-300 rounded-md text-base font-medium">
                  お問い合わせはこちら <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
