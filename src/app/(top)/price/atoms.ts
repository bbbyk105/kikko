import { atom } from "jotai";

// 月額プランか日額プランかを選択するためのアトム
export const planTabAtom = atom<"monthly" | "daily">("monthly");

// アクティブな料金表の行を管理するためのアトム
export const activeFeatureAtom = atom<string | null>(null);
