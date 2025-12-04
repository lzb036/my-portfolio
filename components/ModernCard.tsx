"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

export default function ModernCard({ project, index }: { project: Project, index: number }) {
  // 计算跨列类名：如果是 col-span-2，我们只在 md (平板/桌面) 以上生效
  // 手机端强制 col-span-1
  const spanClass = project.span ? `md:${project.span}` : 'md:col-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // 改为滚动触发动画
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col ${spanClass}`}
    >
      {/* 修改点：链接指向内部详情页 /projects/id */}
      <Link href={`/projects/${project.id}`} className="block h-full flex flex-col">
        
        {/* 1. 媒体区域 (保持原样) */}
        <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
          {project.mediaType === 'video' ? (
            <video
              src={project.mediaUrl}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              autoPlay muted loop playsInline
            />
          ) : (
            <Image
              src={project.mediaUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
          
          {/* 悬停图标 */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
        </div>

        {/* 2. 内容区域 (保持原样) */}
        <div className="p-6 relative z-10 flex-1 flex flex-col bg-zinc-900">
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/50">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}