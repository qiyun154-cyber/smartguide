# SmartGuide 网站健康检查工具

## 📊 当前网站状态

### 总体统计
- **总页面数**: 715 个
- **支持语言**: EN (245页), DE (235页), FR (235页)
- **页面类型**:
  - 📝 文章页: 669 页 (93.6%)
  - 📁 分类页: 21 页 (2.9%)
  - 📄 静态页: 16 页 (2.2%)
  - 🔧 其他: 9 页 (1.3%)

### 分类分布
- audio（音频）
- phone-accessories（手机配件）
- power-banks（移动电源）
- smart-home（智能家居）
- smart-security（智能安防）
- smart-wearables（智能穿戴）
- tech-guides（技术指南）

## 🛠️ 检查工具

### 1. 本地构建检查
```bash
# 从 .next 构建目录分析页面结构
node scripts/health-check-build.js
```

**功能**:
- 扫描所有生成的 HTML 文件
- 统计语言分布
- 分析页面类型
- 生成完整 URL 列表

**输出文件**:
- `health-check-report.json` - 详细报告
- `health-check-report.txt` - URL 列表

### 2. 在线状态检查（需要网络）
```bash
# 检查所有页面的在线状态
node scripts/health-check.js
```

**功能**:
- 检查所有页面的 HTTP 状态码
- 测量响应时间
- 检测 404 错误
- 生成健康报告

## 📋 定期检查清单

### 每天
- [ ] 检查网站是否在线（Uptime监控）
- [ ] 查看 Vercel 部署日志

### 每周
- [ ] 检查 Google Search Console 状态
- [ ] 查看索引页面数量
- [ ] 检查核心网页指标（Core Web Vitals）

### 每月
- [ ] 完整的 404 检查
- [ ] 运行 health-check.js 检查所有页面
- [ ] 分析性能报告

## 🔧 推荐监控工具

### 1. UptimeRobot（免费）
- **功能**: 5分钟间隔监控网站可用性
- **设置**: https://uptimerobot.com
- **监控**: https://smartguide-ten.vercel.app

### 2. Google Search Console（免费）
- **功能**: 监控搜索引擎索引状态
- **设置**: https://search.google.com/search-console
- **提交 sitemap**: https://smartguide-ten.vercel.app/sitemap.xml

### 3. PageSpeed Insights（免费）
- **功能**: 性能分析和优化建议
- **地址**: https://pagespeed.web.dev
- **检查**: 首页 + 随机文章页

### 4. GTmetrix（免费）
- **功能**: 详细性能报告
- **地址**: https://gtmetrix.com

## 📈 SEO 监控

### 关键指标
- **索引页面数**: 目标 > 700
- **核心网页指标**:
  - LCP (最大内容绘制) < 2.5s
  - FID (首次输入延迟) < 100ms
  - CLS (累积布局偏移) < 0.1

### 定期优化
- 压缩图片
- 优化 CSS/JS
- 使用缓存
- 启用 Gzip

## 🚨 常见问题排查

### 404 错误
```bash
# 检查所有 URL
node scripts/health-check.js

# 查看报告
cat health-check-report.json
```

### 构建失败
```bash
# 清理缓存
rm -rf .next

# 重新构建
npm run build
```

### 性能问题
- 使用 PageSpeed Insights 分析
- 检查图片大小
- 优化代码分割

## 📞 联系与支持

如有问题，请检查：
1. Vercel Dashboard 构建日志
2. Google Search Console 错误报告
3. 运行健康检查脚本

---

**最后更新**: 2026-03-15
**网站**: https://smartguide-ten.vercel.app
**GitHub**: https://github.com/qiyun154-cyber/smartguide
