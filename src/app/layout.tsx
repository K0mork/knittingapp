import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // cn ユーティリティをインポート
import MainLayout from "@/components/layout/MainLayout"; // MainLayout をインポート

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knitting Chart Maker", // タイトルを変更
  description: "棒針編みの編み図を簡単に作成・編集・共有できるWebアプリケーション", // 説明を変更
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"> {/* 言語を日本語に設定 */}
      <body
        className={cn( // cn を使用してクラス名を結合
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <MainLayout>{children}</MainLayout> {/* MainLayout で children をラップ */}
      </body>
    </html>
  );
}
