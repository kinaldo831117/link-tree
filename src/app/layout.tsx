import type { Metadata, Viewport } from "next";
import { Gowun_Dodum, Nunito } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

// 영문·숫자는 Nunito, 한글은 고운돋움 (둘 다 둥근 산세리프)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: `${profile.name} | 링크 나무`,
  description: profile.bio,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbe7dc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${nunito.variable} ${gowunDodum.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
