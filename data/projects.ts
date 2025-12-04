// src/data/projects.ts

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    mediaType: "image" | "video";
    mediaUrl: string; // 确保你的图片/视频放在 public 文件夹对应路径下
    span?: "col-span-1" | "col-span-2"; // 控制卡片宽度
  }
  
  export const projects: Project[] = [
    {
      id: "smart-chain",
      title: "鸿图智链",
      description: "自主可控工业互连网操作系统平台",
      tags: ["HarmonyOS", "Vue"],
      mediaType: "image",
      mediaUrl: "/images/smart-chain.jpg",
      span: "col-span-2"
    },
    {
      id: "kylin-tuning-ai",
      title: "麒麟操作系统智能调优平台",
      description: "自主可控工业互连网操作系统平台",
      tags: ["HarmonyOS", "Vue"],
      mediaType: "image",
      mediaUrl: "/images/smart-chain.jpg",
      span: "col-span-2"
    },
    {
      id: "mood-note",
      title: "心晴记",
      description: "一款基于CBT原理的情绪日记应用，通过精准的情绪分析与温暖的AI引导，陪伴用户自我治愈与成长。",
      tags: ["Flutter", "Dart", "Python", "Django"],
      mediaType: "image",
      mediaUrl: "/images/mood-note.jpg",
      span: "col-span-1"
    },
    {
      id: "injection-cloud",
      title: "注塑云平台",
      description: "自主可控工业互连网操作系统平台",
      tags: ["HarmonyOS", "Vue"],
      mediaType: "image",
      mediaUrl: "/images/smart-chain.jpg",
      span: "col-span-1"
    },
  ];