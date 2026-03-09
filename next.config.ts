import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 禁用 turbopack，使用传统构建
  turbopack: false,
  // 确保静态生成正确
  trailingSlash: true,
};

export default nextConfig;
