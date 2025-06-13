// app/(top)/(landing)/InstagramFeed.tsx (Server Component - API Route使用)
import React from "react";
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
  error?: string;
  details?: string;
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

interface InstagramFeedProps {
  postCount?: number;
}

// Instagram APIからデータを取得する関数（内部APIルートを使用）
async function fetchInstagramPosts(
  postCount: number = 6
): Promise<InstagramPost[]> {
  try {
    // 内部APIルートの完全なURLを構築
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const apiUrl = `${baseUrl}/api/instagram?postCount=${postCount}`;

    console.log("Fetching Instagram data from API route:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // 1時間でキャッシュを更新
      cache: "force-cache",
    });

    console.log("API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API route error: ${response.status} - ${errorText}`);
      return [];
    }

    const data: InstagramApiResponse = await response.json();

    console.log("API response data:", {
      hasData: !!data.data,
      postsCount: data.data?.length || 0,
      hasError: !!data.error,
    });

    if (data.error) {
      console.error(
        "Instagram API error from route:",
        data.error,
        data.details
      );
      return [];
    }

    return data.data || [];
  } catch (error) {
    console.error("Error fetching from Instagram API route:", error);
    return [];
  }
}

// キャプションを省略する関数
function truncateCaption(caption: string | undefined, length = 100): string {
  if (!caption) return "";
  return caption.length > length
    ? `${caption.substring(0, length)}...`
    : caption;
}

// 日付をフォーマットする関数
function formatDate(timestamp: string | undefined): string {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// フォールバック表示コンポーネント（Server Component）
function InstagramFeedFallback() {
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

        <div className="text-center py-10">
          <p className="text-gray-400 mb-4">Instagram投稿を準備中です...</p>
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
        </div>
      </div>
    </section>
  );
}

// メインのServer Component
const InstagramFeed: React.FC<InstagramFeedProps> = async ({
  postCount = 6,
}) => {
  try {
    const posts = await fetchInstagramPosts(postCount);

    // データが取得できない場合はフォールバック表示
    if (posts.length === 0) {
      return <InstagramFeedFallback />;
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
              橘香堂の最新の活動やイベント情報をInstagramでチェックしてください
            </p>
          </div>

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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
      </section>
    );
  } catch (error) {
    console.error("Instagram Feed rendering error:", error);
    return <InstagramFeedFallback />;
  }
};

export default InstagramFeed;
