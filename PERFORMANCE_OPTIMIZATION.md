/**
 * 性能优化：首页优化建议
 *
 * 问题：LCP 6.6 秒太慢
 * 原因：可能因为 Hero section 加载了大图片或 JavaScript
 */

// ===== 优化方案 1: 动态导入非关键组件 =====

// 在 src/app/page.tsx 中修改：

// 原代码：
// import AdBanner from '@/components/AdBanner';

// 优化后：
// import { AdBanner } from '@/components/AdBanner.dynamic';

// 这样 AdBanner 会在其他内容加载完成后才加载，不会阻塞 LCP


// ===== 优化方案 2: 优化 Hero Section =====

// 检查 Hero section 是否有大图片
// 如果有，使用 Next.js Image 组件并添加优先加载：

import Image from 'next/image';

// 示例：
// <Image
//   src="/hero-image.jpg"
//   alt="Hero"
//   width={1200}
//   height={600}
//   priority  // 优先加载，优化 LCP
// />


// ===== 优化方案 3: 减少不必要的客户端组件 =====

// Header 组件使用 'use client'，如果可能的话：
// 1. 将导航部分拆分为服务端组件
// 2. 只让语言切换器使用客户端渲染

// src/components/Header.tsx 优化建议：

// 方案 A: 拆分组件
// - Header.server.tsx（服务端，包含大部分内容）
// - Header.client.tsx（客户端，只包含语言切换器）

// 方案 B: 减少客户端逻辑
// 如果 usePathname 只用于高亮当前页面，可以考虑使用服务器端检测


// ===== 优化方案 4: 懒加载非关键内容 =====

// 底部的文章列表可以懒加载：

import dynamic from 'next/dynamic';

const FeaturedArticles = dynamic(
  () => import('./FeaturedArticles'),
  { loading: () => <div className="h-64 animate-pulse bg-gray-100" /> }
);


// ===== 优化方案 5: 配置 Next.js 缓存 =====

// 在 next.config.js 中添加优化配置：

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 压缩配置
  compress: true,

  // 图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // 实验性功能
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;


// ===== 优化方案 6: 添加 Preconnect =====

// 在 src/app/layout.tsx 中添加 DNS 预连接：

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 预连接到外部域名 */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}


// ===== 预期效果 =====

// 实施这些优化后，预期：
// - LCP: 6.6s → 3.0-4.0s
// - FCP: 4.1s → 2.0-2.5s
// - 性能得分: 64 → 75-85

// 目标分数：90+（需要图片优化和更多调整）
