// app/api/instagram/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postCount = searchParams.get("postCount") || "6";

  const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${postCount}`
    );

    if (!response.ok) {
      throw new Error("Instagram APIからのデータ取得に失敗しました");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Instagram APIエラー:", error);
    return NextResponse.json(
      { error: "Instagram投稿の取得に失敗しました" },
      { status: 500 }
    );
  }
}
