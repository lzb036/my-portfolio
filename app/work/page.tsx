import ModernCard from "@/components/ModernCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function WorksPage() {
  return (
    // 1. 背景色和文字色改为动态切换
    // bg-white dark:bg-black: 浅色白底，深色黑底
    // text-black dark:text-white: 浅色黑字，深色白字
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30 font-sans transition-colors duration-300">
      
      {/* 背景层 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 网格背景优化：
           浅色模式下，网格线需要深一点才能看清 (#00000008)
           深色模式下，网格线需要浅一点 (#80808012)
        */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* 顶部蓝色光晕：浅色模式下隐藏 (opacity-0)，深色模式下显示 (dark:opacity-20) */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-0 dark:opacity-20 blur-[100px] transition-opacity duration-300"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        <header className="mb-24 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              只写行之有效的代码
            </span>
          </h1>
          {/* 副标题颜色适配：浅色用深灰 (zinc-600)，深色用浅灰 (zinc-400) */}
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
            你好，我是开发者。这里展示了我基于 Vue, React, Flutter 以及 ROS 构建的各类项目。
          </p>
          
          <div className="flex gap-4">
            {/* 浅色模式：白底灰边；深色模式：黑底灰边 */}
            <a 
              href="https://github.com" 
              target="_blank" 
              className="px-6 py-3 bg-gray-100 border border-gray-200 text-black dark:bg-zinc-900 dark:border-zinc-800 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition flex items-center gap-2"
            >
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <section>
          <div className="flex items-center justify-between mb-8">
            {/* 标题颜色适配 */}
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">精选项目</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ModernCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </section>

      </main>
      
      <footer className="text-center py-12 text-zinc-400 dark:text-zinc-600 text-sm relative z-10">
        <p>© 2024 Design & Code by You.</p>
      </footer>
    </div>
  );
}