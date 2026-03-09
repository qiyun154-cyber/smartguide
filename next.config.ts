import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 确保 static generation 正常工作
  output: 'export',
  trailingSlash: true, // 启用尾部斜杠，生成 index.html 文件
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
