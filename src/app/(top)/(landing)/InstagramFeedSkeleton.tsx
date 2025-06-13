import React from "react";
import { Instagram } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

interface InstagramFeedSkeletonProps {
  postCount?: number;
}

export const InstagramFeedSkeleton: React.FC<InstagramFeedSkeletonProps> = ({
  postCount = 6,
}) => {
  return (
    <section className="py-12 bg-[#1F1F1F]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <Instagram className="h-8 w-8 mb-4 text-amber-400" />
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">
            Instagram最新投稿
          </h2>
          <p className="text-gray-300 max-w-2xl">
            橘香堂の最新の活動やイベント情報をInstagramでチェックしてください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(postCount)
            .fill(0)
            .map((_, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-[#2C2C2C] border-[#3A3A3A]"
              >
                <CardHeader className="p-0">
                  <Skeleton className="h-64 w-full bg-[#3A3A3A]" />
                </CardHeader>
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-3/4 mb-2 bg-[#3A3A3A]" />
                  <Skeleton className="h-4 w-1/2 bg-[#3A3A3A]" />
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
