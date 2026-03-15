import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 使用 Vercel 的默认 SSR 模式
  // 不使用 output: 'export'，让 Vercel 自动处理
  trailingSlash: true,

  // 性能优化配置
  compress: true, // 启用 gzip 压缩
  poweredByHeader: false, // 移除 X-Powered-By 头

  // 图片优化
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'], // 使用现代图片格式
    minimumCacheTTL: 60, // 图片缓存时间
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // React 严格模式
  reactStrictMode: true,

  // 实验性优化
  experimental: {
    optimizeCss: true, // CSS 优化
    optimizePackageImports: ['@heroicons/react'], // 优化包导入
  },

  // Turbopack 配置（Next.js 16 默认）
  turbopack: {},
};

export default nextConfig;
