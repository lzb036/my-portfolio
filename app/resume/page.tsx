export default function ResumePage() {
    return (
      <div className="min-h-screen bg-black text-white px-6 pt-32 pb-20 max-w-3xl mx-auto">
        
        {/* 头部信息 */}
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-zinc-400 text-xl">Full Stack Developer & Creative Coder</p>
        </header>
  
        {/* 经历列表 */}
        <div className="space-y-12">
          
          {/* 模块：工作经历 */}
          <section>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Experience</h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">Senior Developer</h3>
                  <span className="text-zinc-500 font-mono">2023 - Present</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  负责鸿图智链核心架构设计，使用 Vue3 和 HarmonyOS 进行跨平台开发...
                </p>
              </div>
  
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">Frontend Engineer</h3>
                  <span className="text-zinc-500 font-mono">2021 - 2023</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  主导开发心晴记 App，实现了基于 CBT 的情绪分析算法...
                </p>
              </div>
            </div>
          </section>
  
          {/* 模块：技能 */}
          <section>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
               {["Vue", "React", "Next.js", "Flutter", "Python", "ROS", "TypeScript"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                   {skill}
                 </span>
               ))}
            </div>
          </section>
  
        </div>
      </div>
    );
  }