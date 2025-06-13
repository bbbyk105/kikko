// app/api/instagram/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postCount = searchParams.get("postCount") || "3"; // デフォルトを3件に変更

  const INSTAGRAM_ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_USER_ID = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

  // 環境変数のチェック
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.error("Instagram環境変数が設定されていません");
    return NextResponse.json(
      { error: "Instagram設定が正しくありません" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${postCount}`,
      {
        next: { revalidate: 3600 }, // 1時間ごとにキャッシュを更新
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Instagram API Error:", errorText);
      throw new Error(`Instagram APIエラー: ${response.status}`);
    }

    const data = await response.json();

    // データの検証
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Instagram APIから正しいデータ形式が返されませんでした");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Instagram APIエラー:", error);
    return NextResponse.json(
      {
        error: "Instagram投稿の取得に失敗しました",
        details: error instanceof Error ? error.message : "未知のエラー",
      },
      { status: 500 }
    );
  }
}
