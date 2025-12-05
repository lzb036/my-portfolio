import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

// 1. 初始化字体
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "个人作品集",
  description: "林铮斌的个人作品集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. 这里的 suppressHydrationWarning 必须保留，防止黑夜模式水合报错
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.className} /* 3. 关键修改：将字体应用到 body */
          bg-white dark:bg-black 
          text-black dark:text-white 
          antialiased 
          transition-colors duration-300
        `}
      >
        {/* 4. ThemeProvider 包裹内容 */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}