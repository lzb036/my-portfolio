"use client";

import Link from "next/link";

export default function ResumePage() {
  // 你的 PDF 文件路径
  const resumeUrl = "/resume.pdf";

  return (
    // 1. 外层容器：添加 transition-colors 实现丝滑切换
    // bg-white (亮) / dark:bg-black (暗)
    // text-zinc-900 (亮) / dark:text-white (暗)
    <div className="min-h-screen w-full bg-white dark:bg-black text-zinc-900 dark:text-white flex flex-col items-center pt-24 pb-20 px-4 md:px-8 transition-colors duration-500">
      
      {/* --- 顶部控制栏 --- */}
      <div className="w-full max-w-5xl flex justify-between items-end mb-8 animate-enter">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Resume</h1>
          <p className="text-zinc-500 dark:text-zinc-400">我的职业生涯缩影</p>
        </div>
        
        {/* 下载按钮：反色设计 */}
        {/* 亮色模式：bg-zinc-900 (黑底) text-white */}
        {/* 暗色模式：dark:bg-white (白底) dark:text-black */}
        <a 
          href={resumeUrl} 
          download="My_Resume.pdf"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all font-medium text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download PDF</span>
        </a>
      </div>

      {/* --- PDF 展示容器 --- */}
      {/* 边框适配：border-zinc-200 (亮) / dark:border-zinc-800 (暗) */}
      {/* 背景适配：bg-white (亮) / dark:bg-zinc-900 (暗) */}
      <div className="w-full max-w-5xl h-[75vh] md:h-[85vh] bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden relative animate-enter delay-1 transition-colors duration-500">
        
        {/* 使用 embed + FitV 保持无滚动条效果 */}
        <embed
          src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitV`} 
          type="application/pdf"
          className="w-full h-full"
          style={{ 
            border: 'none',
            overflow: 'hidden' 
          }} 
        />

        {/* --- 移动端遮罩 --- */}
        {/* 背景色适配：bg-white/95 (亮) / dark:bg-zinc-900/90 (暗) */}
        <div className="absolute inset-0 bg-white/95 dark:bg-zinc-900/90 flex-col items-center justify-center text-center p-8 hidden max-md:flex">
           <p className="text-zinc-600 dark:text-zinc-400 mb-4">
             在移动设备上，为了获得最佳阅读体验，<br/>建议直接下载文件查看。
           </p>
           <a 
            href={resumeUrl} 
            download
            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 underline underline-offset-4"
           >
             点击下载简历
           </a>
        </div>

      </div>

      {/* 底部返回导航 */}
      <div className="mt-12 animate-enter delay-2">
         <Link href="/" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-sm uppercase tracking-widest">
            ← Back to Home
         </Link>
      </div>

      <style jsx>{`
        .animate-enter {
          animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}