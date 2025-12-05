"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes"; // 引入主题钩子
import { Sun, Moon } from "lucide-react"; // 引入图标
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 确保组件在客户端挂载后才渲染主题切换按钮，避免水合不匹配
  useEffect(() => {
    setMounted(true)
  }, []);

  const links = [
    { name: "首页", path: "/" },
    { name: "精选作品集", path: "/work" },
    { name: "电子简历", path: "/resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      
      {/* 左侧 Logo */}
      <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition">
        精选作品集
      </Link>

      {/* 右侧区域：导航链接 + 主题切换 */}
      <div className="flex items-center gap-8">
        
        {/* 导航链接 */}
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "text-black dark:text-white"
                  : "text-zinc-500 hover:text-black dark:hover:text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- 主题切换按钮 (只在最右边) --- */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95"
          aria-label="Toggle Theme"
        >
          {/* 这里做一个简单的判断，如果没加载完就不显示图标，防止闪烁 */}
          {mounted ? (
            theme === "dark" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )
          ) : (
            <div className="w-4 h-4" /> // 占位符
          )}
        </button>

      </div>
    </nav>
  );
}