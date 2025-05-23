import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // 导入 CSS
import SessionProvider from "@/components/providers/SessionProvider";
import BrowserDetection from "@/components/utils/BrowserDetection";
import CacheClearer from "@/components/utils/CacheClearer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "成都美步科技有限公司 - 创新存储、监控和网络解决方案",
  description: "成都美步科技有限公司提供高性能NAS存储设备、监控系统和网络设备，为家庭和企业用户提供创新的解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <BrowserDetection />
          <CacheClearer />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
