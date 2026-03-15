# 监控服务配置指南

## 🎯 目标
为 SmartGuide 网站配置自动化监控，确保网站正常运行并及时发现问题。

## ✅ 已完成
- ✅ 网站健康检查脚本
- ✅ URL 列表生成
- ✅ Google Search Console 验证（已配置）
- ✅ AdSense 部署（已通过审核）

---

## 📋 配置清单

### 1. UptimeRobot（免费）- 网站可用性监控

**用途**: 5分钟间隔监控网站是否在线，网站故障时发送通知

**配置步骤**:
1. 访问: https://uptimerobot.com
2. 注册账号（免费）
3. 点击 "Add New Monitor"
4. 填写:
   - **Monitor Type**: HTTP(s)
   - **URL**: `https://smartguide-ten.vercel.app`
   - **Monitor Interval**: 5 minutes
   - **Monitor Friendly Name**: `SmartGuide 主页`
   - **Alert Contacts**: 添加你的邮箱/手机
5. 点击 "Create Monitor"

**额外监控项**（可选）:
- `https://smartguide-ten.vercel.app/en/about` - 关于页面
- `https://smartguide-ten.vercel.app/en/contact` - 联系页面

**预期结果**: 每5分钟自动检查网站状态，故障时收到通知

---

### 2. Google Search Console - SEO 监控

**用途**: 监控搜索引擎索引状态、搜索流量、技术问题

**当前状态**: ✅ 已配置

**检查项**:
- [ ] 验证域名所有权
- [ ] 提交 sitemap.xml
- [ ] 检查索引页面数

**配置步骤**（如果还没完成）:
1. 访问: https://search.google.com/search-console
2. 选择 "URL 前缀" 类型
3. 输入: `https://smartguide-ten.vercel.app`
4. 验证域名（HTML 文件验证：已上传 verification.html）
5. 验证成功后，左侧菜单 → 站点地图
6. 添加站点地图: `/sitemap.xml`
7. 提交并等待索引

**查看报告**:
- **索引**: 索引页面数（目标: 700+）
- **体验**: 核心网页指标（LCP, FID, CLS）
- **增强**: 问题和警告

**预期结果**:
- Sitemap 提交成功
- Google 开始索引页面（可能需要几天到几周）

---

### 3. PageSpeed Insights - 性能监控

**用途**: 检查页面加载速度和优化建议

**定期检查**（每月一次）:
1. 访问: https://pagespeed.web.dev
2. 输入 URL: `https://smartguide-ten.vercel.app`
3. 点击 "分析"
4. 查看报告：
   - **桌面端性能分数**（目标: 90+）
   - **移动端性能分数**（目标: 90+）
   - **机会**: 优化建议
   - **诊断**: 性能问题

**需要检查的页面**:
- 首页: `https://smartguide-ten.vercel.app`
- 随机文章: `https://smartguide-ten.vercel.app/en/blog/best-smart-home-devices-2024`
- 分类页: `https://smartguide-ten.vercel.app/en/category/smart-home`

---

### 4. Bing Webmaster Tools（可选）

**用途**: Bing 搜索引擎索引监控

**配置步骤**:
1. 访问: https://www.bing.com/webmasters
2. 添加网站: `https://smartguide-ten.vercel.app`
3. 验证域名（与 Google Search Console 类似）
4. 提交 sitemap.xml

---

## 📊 监控仪表板

### 每日检查（自动）
- [ ] UptimeRobot 状态（自动检查，无需人工）
- [ ] Vercel 部署状态（查看 GitHub Actions）

### 每周检查
- [ ] Google Search Console - 查看索引增长
- [ ] Google Search Console - 检查是否有错误
- [ ] Vercel Analytics - 查看访问量

### 每月检查
- [ ] PageSpeed Insights - 性能分析
- [ ] 运行 `npm run health:check` - 快速状态检查
- [ ] 查看健康检查报告

---

## 🚨 告警设置

### 需要立即处理的问题
- 网站宕机（UptimeRobot 告警）
- 大量 404 错误（Search Console）
- 性能大幅下降（PageSpeed Insights）

### 可以稍后处理的问题
- 少量索引错误
- 非核心页面性能问题
- SEO 优化建议

---

## 📈 预期结果

### 第 1 周
- ✅ UptimeRobot 开始监控
- ✅ Sitemap 提交完成
- ⏳ Google 开始索引（可能需要几天）

### 第 2-4 周
- 📊 索引页面数逐步增加
- 📊 开始获得搜索流量
- 📊 AdSense 广告开始展示

### 第 2-3 个月
- 📈 流量稳步增长
- 📈 收入开始产生
- 📈 SEO 排名提升

---

## 🔧 快速命令

```bash
# 检查网站构建状态
cd /workspace/projects/workspace/content-site
npm run health:check

# 完整页面分析
npm run health:full

# 重新构建并检查
npm run build
npm run health:full
```

---

## 📞 获取帮助

如果遇到问题：
1. 检查 Vercel Dashboard: https://vercel.com/dashboard
2. 查看 GitHub Actions 构建日志
3. 运行健康检查脚本诊断问题

---

**配置状态**: ⏳ 待配置（UptimeRobot）
**下一步**: 配置 UptimeRobot 监控
