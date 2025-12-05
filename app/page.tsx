"use client";

import Image from "next/image";
import { Ma_Shan_Zheng } from "next/font/google";
import Link from "next/link";

// 字体配置
const calligraphy = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export default function Home() {
  // 定义标题文字，方便拆分
  const titleText = "精选作品集";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      
      {/* --- 样式与动画定义 --- */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* 基础动画类 */
        .animate-enter {
          opacity: 0; /* 初始不可见 */
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* 计算逻辑：
           标题有5个字，每个字间隔 0.15s。
           第1个字: 0s
           第5个字: 0.6s 开始动 + 0.8s 动画时长 = 1.4s 结束
           所以副标题至少要在 1.2s ~ 1.4s 左右开始
        */
        .delay-subtitle { animation-delay: 1.2s; } /* 等标题差不多完了再出 */
        .delay-button { animation-delay: 1.5s; }   /* 按钮最后出 */
      `}</style>

      {/* --- 顶部导航栏 --- */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 text-zinc-800 dark:text-white/80 transition-colors duration-300">
         <div className="font-bold text-xl tracking-tight">Portfolio</div>
         <div className="flex gap-6 text-sm font-medium">
             <span>首页</span>
             <span>精选作品集</span>
             <span>电子简历</span>
         </div>
      </nav>

      {/* --- 背景图层 --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 dark:hidden">
            <Image 
              src="/images/light-forest.png" 
              alt="Light Mode Background"
              fill
              className="object-cover" 
              priority
            />
        </div>
        <div className="absolute inset-0 hidden dark:block">
            <Image 
              src="/images/forest-cloud.png"
              alt="Dark Mode Background"
              fill
              className="object-cover" 
              priority
            />
        </div>
        <div className="absolute inset-0 bg-white/60 dark:bg-black/60 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      {/* --- 核心文字区 --- */}
      <main className="relative z-10 text-center flex flex-col items-center gap-4 transition-colors duration-300">
        
        {/* 【修改点 1】标题逐字动画 
            - 使用 map 遍历文字
            - inline-block: 必须加，否则 translateY 对 span 无效
            - animationDelay: 动态计算，index * 0.15s (0s, 0.15s, 0.3s...)
        */}
        <h1 className={`${calligraphy.className} text-7xl md:text-9xl font-bold tracking-widest text-zinc-900 dark:text-white drop-shadow-xl`}>
          {titleText.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-enter"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        
        {/* 【修改点 2】副标题推迟出现 (delay-subtitle) */}
        <p className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-600 dark:text-white/70 drop-shadow-md mt-6 animate-enter delay-subtitle">
          求职意向：前端开发工程师
        </p>
        
        {/* --- 关键修改部分 --- */}
        {/* 1. 将 button 换成 Link 组件 */}
        {/* 2. href="/portfolio" 指定跳转路径 (你需要确保有 app/portfolio/page.tsx 这个文件) */}
        {/* 3. 添加 cursor-pointer 类名确保鼠标悬浮是手指形状 */}
        <Link 
          href="/work" 
          className="mt-10 px-8 py-3 rounded-full border border-black/10 dark:border-white/30 bg-black/5 dark:bg-white/10 backdrop-blur-sm text-zinc-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 animate-enter delay-button cursor-pointer inline-block"
        >
            作品集查看
        </Link>
      </main>

      {/* 底部版权 */}
      <footer className="absolute bottom-8 z-10 text-zinc-500 dark:text-white/30 text-xs tracking-widest uppercase transition-colors duration-300">
          © 2025 Design & Code.
      </footer>
    </div>
  );
}