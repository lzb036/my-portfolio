import ModernCard from "@/components/ModernCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20"> {/* max-w-6xl 改为 5xl 可能更聚拢好看，看你喜好 */}
        
        <header className="mb-24 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Future of Web.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
            你好，我是开发者。这里展示了我基于 Vue, React, Flutter 以及 ROS 构建的各类项目。
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition">
              电子简历
            </button>
            <a href="https://github.com" target="_blank" className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-800 transition flex items-center gap-2">
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </header>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-zinc-200">精选项目</h2>
          </div>

          {/* 关键修改：md:grid-cols-2 
             配合你的数据：
             - 鸿图智链 (col-span-2) -> 现在会占满整行（因为总共只有2列）
             - 心晴记 (col-span-1) -> 占一半
             - 麒麟调优 (col-span-1) -> 占一半
             - 注塑云 (col-span-2) -> 占满整行
          */}
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
      
      <footer className="text-center py-12 text-zinc-600 text-sm relative z-10">
        <p>© 2024 Design & Code by You.</p>
      </footer>
    </div>
  );
}