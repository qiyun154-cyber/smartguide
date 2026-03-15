# PageSpeed Insights 手动检查指南

## 🚀 快速检查

### 方法 1：在线检查（推荐）

1. **打开 PageSpeed Insights**
   https://pagespeed.web.dev

2. **输入 URL**
   ```
   https://smartguide-ten.vercel.app
   ```

3. **点击 "分析" 按钮**

4. **查看结果**

---

## 📊 需要检查的页面

### 1. 首页
```
https://smartguide-ten.vercel.app
```

### 2. 文章页
```
https://smartguide-ten.vercel.app/en/blog/best-smart-home-devices-2024
```

### 3. 分类页
```
https://smartguide-ten.vercel.app/en/category/smart-home
```

---

## 📈 分数指标

### 性能分数（0-100）
| 分数 | 等级 | 颜色 |
|------|------|------|
| 90-100 | 快速 | 🟢 绿色 |
| 50-89 | 需要改进 | 🟡 黄色 |
| 0-49 | 慢 | 🔴 红色 |

### 核心网页指标（Core Web Vitals）

| 指标 | 良好 | 需要改进 | 差 |
|------|------|----------|-----|
| LCP (最大内容绘制) | < 2.5s | 2.5s-4s | > 4s |
| FID (首次输入延迟) | < 100ms | 100ms-300ms | > 300ms |
| CLS (累积布局偏移) | < 0.1 | 0.1-0.25 | > 0.25 |

### 指标解释
- **LCP**: 页面主要内容加载时间
- **FID**: 用户首次交互的响应时间
- **CLS**: 页面视觉稳定性

---

## 🎯 目标分数

对于 AdSense 和 SEO，建议达到：

- **桌面端**: 90+ 分
- **移动端**: 90+ 分
- **核心指标**: 全部绿色（良好）

---

## 🔧 常见优化建议

如果分数较低，可能的原因：

### 1. 图片优化
- 压缩图片
- 使用 WebP 格式
- 添加懒加载

### 2. JavaScript 优化
- 减少 JS 文件大小
- 移除未使用的代码
- 延迟加载非关键 JS

### 3. CSS 优化
- 压缩 CSS
- 移除未使用的样式

### 4. 缓存设置
- 启用浏览器缓存
- 配置 CDN

---

## 📝 检查清单

- [ ] 检查首页性能（桌面端）
- [ ] 检查首页性能（移动端）
- [ ] 检查文章页性能
- [ ] 检查分类页性能
- [ ] 记录分数
- [ ] 如果分数 < 90，查看优化建议

---

## 💡 快速获取结果

你也可以直接访问以下 URL（自动带参数）：

- 首页：
  https://pagespeed.web.dev?url=https://smartguide-ten.vercel.app&category=PERFORMANCE

- 文章页：
  https://pagespeed.web.dev?url=https://smartguide-ten.vercel.app/en/blog/best-smart-home-devices-2024&category=PERFORMANCE

---

**检查完成后，请告诉我分数，我来帮你分析优化方向！**
