import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 确保静态生成正确
  trailingSlash: true,
};

export default nextConfig;
