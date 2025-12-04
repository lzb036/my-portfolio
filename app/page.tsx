import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* 1. 核心文字区 */}
      <main className="text-center z-10 mt-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
          Portfolio.
        </h1>
        <p className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-600">
          Simple, bold.
        </p>
      </main>

      {/* 2. 中间的大图 (Point Cloud 风格) */}
      <div className="relative w-full max-w-4xl mt-16 aspect-[16/9] md:aspect-[21/9] fade-in-up">
        {/* 请把你截图里的那个“点云森林”图片保存为 `home-bg.jpg` 放在 public 文件夹里。
           如果没有，这里用个深色占位图代替。
        */}
        <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
           <Image 
             src="/images/forest-cloud.jpg" // 替换为你的图片路径
             alt="Nature Point Cloud"
             fill
             className="object-cover opacity-80"
           />
           {/* 给图片加一个四周的黑色渐变，让它融合进背景 */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>
      </div>

      {/* 底部版权 */}
      <footer className="absolute bottom-8 text-zinc-700 text-xs">
         © 2025 Design & Code.
      </footer>
    </div>
  );
}