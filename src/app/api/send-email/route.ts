// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// AWS SESクライアントの設定
const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-northeast-1", // AWSリージョンを設定
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, membership, message, newsletter } =
      body;

    // お問い合わせ種別の日本語マッピング
    const inquiryTypeMap: Record<string, string> = {
      general: "一般的なお問い合わせ",
      reservation: "予約について",
      corporate: "法人利用について",
      other: "その他",
    };

    // 会員種別の日本語マッピング
    const membershipMap: Record<string, string> = {
      none: "会員ではない",
      visitor: "ビジター",
      regular: "通常会員",
      corporate: "法人会員",
    };

    // メール本文の作成
    const emailContent = `
お問い合わせがありました。

【お名前】: ${name}
【メールアドレス】: ${email}
【電話番号】: ${phone || "なし"}
【お問い合わせ種別】: ${inquiryTypeMap[inquiryType] || inquiryType}
【会員種別】: ${membershipMap[membership] || membership}
【メッセージ】:
${message}

【ニュースレター登録】: ${newsletter ? "希望する" : "希望しない"}
    `;

    // SESパラメータの設定
    const params = {
      Source: process.env.SES_SENDER_EMAIL || "no-reply@example.com", // 送信元メールアドレス
      Destination: {
        ToAddresses: [process.env.SES_ADMIN_EMAIL || "admin@example.com"], // 管理者向けメールアドレス
      },
      Message: {
        Subject: {
          Data: `【お問い合わせ】${name}様より`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: emailContent,
            Charset: "UTF-8",
          },
        },
      },
    };

    // 自動返信メールの設定（オプション）
    if (email) {
      const autoReplyParams = {
        Source: process.env.SES_SENDER_EMAIL || "no-reply@example.com",
        Destination: {
          ToAddresses: [email],
        },
        Message: {
          Subject: {
            Data: "お問い合わせありがとうございます",
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `${name}様

お問い合わせいただきありがとうございます。
以下の内容でお問い合わせを受け付けました。

【お問い合わせ種別】: ${inquiryTypeMap[inquiryType] || inquiryType}
【お問い合わせ内容】:
${message}

担当者より順次ご連絡いたしますので、今しばらくお待ちください。

※このメールは自動送信されています。このメールに返信いただいても回答できない場合がございます。
`,
              Charset: "UTF-8",
            },
          },
        },
      };

      // 自動返信メールの送信
      try {
        await sesClient.send(new SendEmailCommand(autoReplyParams));
      } catch (error) {
        console.error("自動返信メール送信エラー:", error);
        // 自動返信の失敗は全体のプロセスを中断しない
      }
    }

    // 管理者向けメールの送信
    await sesClient.send(new SendEmailCommand(params));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
