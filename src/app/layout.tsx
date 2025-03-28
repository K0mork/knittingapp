import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MainLayout from "@/components/layout/MainLayout";
import { SelectedSymbolProvider } from "@/context/SelectedSymbolContext"; // Provider をインポート

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knitting Chart Maker",
  description: "棒針編みの編み図を簡単に作成・編集・共有できるWebアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {/* SelectedSymbolProvider でラップ */}
        <SelectedSymbolProvider>
          <MainLayout>{children}</MainLayout>
        </SelectedSymbolProvider>
      </body>
    </html>
  );
}
