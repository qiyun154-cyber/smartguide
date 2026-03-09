import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 确保 static generation 正常工作
  output: 'export',
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
