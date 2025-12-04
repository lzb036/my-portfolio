import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 或者你用的字体
import "./globals.css";
import Navbar from "@/components/Navbar"; // 引入刚才写的组件

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* 把 Navbar 放在这里，所有页面都会有 */}
        <Navbar /> 
        
        {children}
      </body>
    </html>
  );
}