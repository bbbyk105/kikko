"use client";
import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Checkbox } from "@/app/components/ui/checkbox";

// フォームのバリデーションスキーマ
const formSchema = z.object({
  name: z.string().min(2, {
    message: "お名前は2文字以上入力してください",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください",
  }),
  phone: z.string().optional(),
  inquiryType: z.enum(["general", "reservation", "corporate", "other"], {
    required_error: "お問い合わせ種別を選択してください",
  }),
  membership: z.enum(["visitor", "regular", "corporate", "none"], {
    required_error: "会員種別を選択してください",
  }),
  message: z.string().min(10, {
    message: "メッセージは10文字以上入力してください",
  }),
  newsletter: z.boolean().default(false),
});

// スキーマから型を生成
type FormValues = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  // useFormフックの設定
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      membership: "none",
      message: "",
      newsletter: false,
    },
  });

  // フォーム送信処理
  function onSubmit(values: FormValues) {
    // ここにフォーム送信のロジックを実装
    console.log(values);
    // API呼び出しなどはこちらに
  }

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* お名前 */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">お名前</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="山田 太郎"
                      {...field}
                      className="bg-gray-800/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* メールアドレス */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">メールアドレス</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                      className="bg-gray-800/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* 電話番号 */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">電話番号（任意）</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="090-1234-5678"
                      {...field}
                      className="bg-gray-800/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500 text-xs">
                    緊急の場合のみお使いいたします
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* お問い合わせ種別 */}
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">お問い合わせ種別</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-800/50 border-white/10 text-white focus:ring-white/20">
                        <SelectValue placeholder="お問い合わせ種別を選択" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-800 border-white/10 text-white">
                      <SelectItem value="general">
                        一般的なお問い合わせ
                      </SelectItem>
                      <SelectItem value="reservation">予約について</SelectItem>
                      <SelectItem value="corporate">
                        法人利用について
                      </SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* 会員種別 */}
            <FormField
              control={form.control}
              name="membership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">会員種別</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-800/50 border-white/10 text-white focus:ring-white/20">
                        <SelectValue placeholder="会員種別を選択" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-800 border-white/10 text-white">
                      <SelectItem value="none">会員ではない</SelectItem>
                      <SelectItem value="visitor">ビジター</SelectItem>
                      <SelectItem value="regular">通常会員</SelectItem>
                      <SelectItem value="corporate">法人会員</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* メッセージ */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">メッセージ</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容をご記入ください"
                      className="min-h-[120px] bg-gray-800/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* ニュースレター */}
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-white data-[state=checked]:text-black border-white/30"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-300">
                      施設からのお知らせやイベント情報を受け取る
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </motion.div>

          {/* 送信ボタン */}
          <motion.div variants={itemVariants} className="pt-4">
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90 hover:text-black"
            >
              送信する
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};
