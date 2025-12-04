"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "首页", path: "/" },
    { name: "作品集", path: "/works" }, // 这里对应你之前的 Bento Grid
    { name: "简历", path: "/resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/80 backdrop-blur-md">
      {/* 左侧 Logo */}
      <Link href="/" className="text-white text-xl font-bold tracking-tight">
        Portfolio
      </Link>

      {/* 右侧 导航 */}
      <div className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`text-sm font-medium transition-colors hover:text-white ${
              pathname === link.path ? "text-white" : "text-zinc-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}