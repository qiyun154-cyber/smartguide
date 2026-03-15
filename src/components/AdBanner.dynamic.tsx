/**
 * 性能优化：动态导入 AdBanner
 * 原因：AdSense 广告脚本可能会阻塞页面渲染
 * 优化：延迟加载，减少 TBT（Total Blocking Time）
 */

import dynamic from 'next/dynamic';

// 动态导入 AdBanner，避免阻塞页面渲染
export const AdBanner = dynamic(
  () => import('./AdBanner').then(mod => mod.default),
  {
    loading: () => <div className="w-full h-24 bg-gray-100 animate-pulse" />, // 加载占位符
  }
);

// 导出原始组件（如果需要）
export { default } from './AdBanner';
