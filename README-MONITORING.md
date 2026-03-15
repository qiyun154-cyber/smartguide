# SmartGuide - 智能家居和技术指南网站

> 多语言 Niche 内容站，支持 EN/DE/FR 三语言，715+ 页面

## 📊 网站状态

- **网址**: https://smartguide-ten.vercel.app
- **GitHub**: https://github.com/qiyun154-cyber/smartguide
- **总页面数**: 715+
- **支持语言**: EN (245页), DE (235页), FR (235页)
- **栏目数**: 7 个
- **文章数**: 669+ 篇

## 🚀 快速开始

### 安装依赖
```bash
cd /workspace/projects/workspace/content-site
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

---

## 🛠️ 健康检查工具

### 快速状态检查
```bash
npm run health:check
```
检查关键端点的在线状态（8个页面）

### 完整页面分析
```bash
npm run health:full
```
分析所有生成的页面结构和 URL

### 在线状态检查
```bash
npm run health:online
```
检查所有页面的 HTTP 状态码（需要网络）

---

## 📡 监控配置

### 生成监控配置指南
```bash
npm run monitoring:setup
```

### 需要配置的服务

1. **UptimeRobot** (免费)
   - 用途: 5分钟间隔监控网站可用性
   - 访问: https://uptimerobot.com
   - 监控: https://smartguide-ten.vercel.app

2. **Google Search Console** (免费)
   - 用途: SEO 和搜索引擎索引监控
   - 访问: https://search.google.com/search-console
   - Sitemap: https://smartguide-ten.vercel.app/sitemap.xml

3. **PageSpeed Insights** (免费)
   - 用途: 性能分析和优化建议
   - 访问: https://pagespeed.web.dev

### 详细配置指南
请查看 [MONITORING_SETUP.md](./MONITORING_SETUP.md)

---

## 📁 文件结构

```
content-site/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React 组件
│   ├── content/       # 内容文件（Markdown）
│   └── lib/           # 工具函数
├── scripts/           # 脚本工具
│   ├── quick-check.js          # 快速状态检查
│   ├── health-check-build.js   # 构建分析
│   ├── health-check.js         # 在线检查
│   └── setup-monitoring.js     # 监控配置
├── public/             # 静态文件
├── HEALTH_CHECK.md     # 健康检查指南
├── MONITORING_SETUP.md # 监控配置指南
└── package.json
```

---

## 📝 内容结构

### 栏目（7个）
1. Smart Home（智能家居）
2. Phone Accessories（手机配件）
3. Tech Guides（技术指南）
4. Smart Wearables（智能穿戴）
5. Smart Security（智能安防）
6. Power Banks（移动电源）
7. Audio（音频）

### 页面类型
- **文章页**: 669 页 (93.6%)
- **分类页**: 21 页 (2.9%)
- **静态页**: 16 页 (2.2%)
- **其他**: 9 页 (1.3%)

---

## 💰 变现

- ✅ Google AdSense（已审核通过）
- ⏳ Amazon Associates（待申请）

---

## 🎯 下一步

### 高优先级
- [ ] 配置 UptimeRobot 监控
- [ ] 提交 sitemap 到 Google Search Console
- [ ] 检查索引状态

### 中优先级
- [ ] 申请 Amazon Associates
- [ ] 开始网站推广
- [ ] 继续扩展内容（目标 500+ 篇/语言）

### 低优先级
- [ ] 配置 Bing Webmaster Tools
- [ ] 优化页面性能

---

## 📞 支持

如有问题，请查看：
- [HEALTH_CHECK.md](./HEALTH_CHECK.md) - 健康检查指南
- [MONITORING_SETUP.md](./MONITORING_SETUP.md) - 监控配置指南
- Vercel Dashboard: https://vercel.com/dashboard

---

**最后更新**: 2026-03-15
**版本**: 0.1.0
