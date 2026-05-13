import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "爪爪云洗护 | 宠物洗护预约",
  description: "中国高端宠物洗护店单页，提供宠物洗护、造型修剪、空间展示与预约表单。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
