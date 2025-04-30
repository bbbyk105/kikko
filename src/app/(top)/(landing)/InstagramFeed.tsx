// components/InstagramFeed.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// コンポーネントのプロパティ型定義
interface InstagramFeedProps {
  postCount?: number;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ postCount = 6 }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async (): Promise<void> => {
      try {
        setLoading(true);

        // 内部APIルートを使用してデータを取得
        const response = await fetch(`/api/instagram?postCount=${postCount}`);

        if (!response.ok) {
          throw new Error("Instagram APIからのデータ取得に失敗しました");
        }

        const data: InstagramApiResponse = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Instagram投稿の取得エラー:", err);
        setError(
          err instanceof Error ? err.message : "未知のエラーが発生しました"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [postCount]);

  // キャプションを省略して表示する関数
  const truncateCaption = (
    caption: string | undefined,
    length = 100
  ): string => {
    if (!caption) return "";
    return caption.length > length
      ? `${caption.substring(0, length)}...`
      : caption;
  };

  // 日付をフォーマットする関数
  const formatDate = (timestamp: string | undefined): string => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  if (error) {
    return (
      <div className="text-center py-10 bg-[#1F1F1F] text-white">
        <p className="text-red-400 mb-4">
          Instagram投稿の読み込みに失敗しました
        </p>
        <Button
          onClick={() => window.location.reload()}
          className="bg-slate-500 hover:bg-slate-400"
        >
          再試行
        </Button>
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#1F1F1F]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <Instagram className="h-8 w-8 mb-4 text-amber-400" />
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">
            Instagram最新投稿
          </h2>
          <p className="text-gray-300 max-w-2xl">
            最新の活動やイベント情報をInstagramでチェックしてください
          </p>
        </div>

        {loading ? (
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
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden bg-[#2C2C2C] border-[#3A3A3A]"
                >
                  <CardHeader className="p-0">
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden relative aspect-square"
                    >
                      <Image
                        src={
                          post.media_type === "VIDEO"
                            ? post.thumbnail_url || post.media_url
                            : post.media_url
                        }
                        alt={post.caption || "Instagram投稿"}
                        className="object-cover transition-transform hover:scale-105"
                        fill
                      />
                    </a>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardDescription className="text-xs text-gray-400 mb-2">
                      {formatDate(post.timestamp)}
                    </CardDescription>
                    <p className="text-sm text-gray-300">
                      {truncateCaption(post.caption)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-400 hover:text-amber-300 font-medium"
                    >
                      Instagramで見る →
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="https://www.instagram.com/kikkou2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-slate-500 hover:bg-slate-400 text-white">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagramをフォロー
                </Button>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
