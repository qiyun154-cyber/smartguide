import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 使用 Vercel 的默认 SSR 模式
  // 不使用 output: 'export'，让 Vercel 自动处理
  trailingSlash: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
