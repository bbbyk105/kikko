"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

// フォームの型定義
type FormData = {
  name: string;
  email: string;
  phone: string;
  inquiryType: "general" | "reservation" | "corporate" | "other";
  membership: "visitor" | "regular" | "corporate" | "none";
  message: string;
  newsletter: boolean;
};

// エラーの型定義
type FormErrors = {
  [key in keyof FormData]?: string;
};

export const ContactForm = () => {
  // フォームの状態
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    membership: "none",
    message: "",
    newsletter: false,
  });

  // エラーの状態
  const [errors, setErrors] = useState<FormErrors>({});

  // 送信状態
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // 入力変更ハンドラー
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 入力時にエラーをクリア
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // バリデーション関数
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 名前のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "お名前は2文字以上入力してください";
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    // メッセージのバリデーション
    if (!formData.message.trim()) {
      newErrors.message = "メッセージを入力してください";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "メッセージは10文字以上入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // フォーム送信ハンドラー
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // APIエンドポイントへの送信
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 成功時の処理
        setSubmitResult({
          success: true,
          message: "お問い合わせが送信されました。ありがとうございます。",
        });

        // フォームをリセット
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "general",
          membership: "none",
          message: "",
          newsletter: false,
        });
      } else {
        // エラー時の処理
        setSubmitResult({
          success: false,
          message: "送信に失敗しました。後ほど再度お試しください。",
        });
      }
    } catch (error) {
      console.error("送信エラー:", error);
      setSubmitResult({
        success: false,
        message:
          "送信エラーが発生しました。ネットワーク接続を確認してください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
      {submitResult && (
        <div
          className={`mb-6 ${
            submitResult.success
              ? "bg-green-500/20 border-green-500/30 text-green-200"
              : "bg-red-500/20 border-red-500/30 text-red-200"
          } border p-4 rounded-lg`}
        >
          {submitResult.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* お名前 */}
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              お名前
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="山田 太郎"
              className={`bg-gray-800/50 border ${
                errors.name ? "border-red-500" : "border-white/10"
              } text-white placeholder:text-gray-500 focus-visible:ring-white/20`}
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              メールアドレス
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@example.com"
              className={`bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-white/10"
              } text-white placeholder:text-gray-500 focus-visible:ring-white/20`}
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        {/* 電話番号 */}
        <div>
          <label htmlFor="phone" className="block text-white mb-2">
            電話番号（任意）
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="090-1234-5678"
            className="bg-gray-800/50 border border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20"
          />
          <p className="mt-1 text-gray-500 text-xs">
            緊急の場合のみお使いいたします
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* お問い合わせ種別 */}
          <div>
            <label htmlFor="inquiryType" className="block text-white mb-2">
              お問い合わせ種別
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-white/10 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="general">一般的なお問い合わせ</option>
              <option value="reservation">予約について</option>
              <option value="corporate">法人利用について</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* 会員種別 */}
          <div>
            <label htmlFor="membership" className="block text-white mb-2">
              会員種別
            </label>
            <select
              id="membership"
              name="membership"
              value={formData.membership}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-white/10 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="none">会員ではない</option>
              <option value="visitor">ビジター</option>
              <option value="regular">通常会員</option>
              <option value="corporate">法人会員</option>
            </select>
          </div>
        </div>
        {/* メッセージ */}
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            メッセージ
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="お問い合わせ内容をご記入ください"
            rows={5}
            className={`min-h-[120px] bg-gray-800/50 border ${
              errors.message ? "border-red-500" : "border-white/10"
            } text-white placeholder:text-gray-500 focus-visible:ring-white/20`}
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
          )}
        </div>
        {/* 送信ボタン */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-white/90 hover:text-black disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </Button>
        </div>
      </form>
    </div>
  );
};
