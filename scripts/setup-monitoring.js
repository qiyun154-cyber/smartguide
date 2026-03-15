#!/usr/bin/env node

/**
 * SmartGuide 监控配置助手
 * 生成监控配置和检查清单
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://smartguide-ten.vercel.app';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  bold: '\x1b[1m',
};

// 监控配置
const monitoringConfig = {
  uptimeRobot: {
    url: 'https://uptimerobot.com',
    monitors: [
      {
        name: 'SmartGuide 主页',
        url: BASE_URL,
        interval: '5 minutes',
      },
      {
        name: 'SmartGuide 关于页面',
        url: `${BASE_URL}/en/about`,
        interval: '5 minutes',
      },
      {
        name: 'SmartGuide Sitemap',
        url: SITEMAP_URL,
        interval: '30 minutes',
      },
    ],
  },
  googleSearchConsole: {
    url: 'https://search.google.com/search-console',
    domain: BASE_URL,
    sitemap: SITEMAP_URL,
    verificationFile: '/verification.html',
  },
  pageSpeedInsights: {
    url: 'https://pagespeed.web.dev',
    pages: [
      BASE_URL,
      `${BASE_URL}/en/blog/best-smart-home-devices-2024`,
      `${BASE_URL}/en/category/smart-home`,
    ],
  },
};

// 打印配置指南
function printSetupGuide() {
  console.log(`\n${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}        SmartGuide 监控配置指南${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`${colors.magenta}📋 配置清单${colors.reset}\n`);

  console.log(`${colors.bold}1️⃣  UptimeRobot - 网站可用性监控${colors.reset}`);
  console.log(`${colors.cyan}   访问: ${monitoringConfig.uptimeRobot.url}${colors.reset}`);
  console.log(`\n   ${colors.bold}需要监控的页面:${colors.reset}`);
  monitoringConfig.uptimeRobot.monitors.forEach((monitor, index) => {
    console.log(`   ${index + 1}. ${monitor.name}`);
    console.log(`      URL: ${monitor.url}`);
    console.log(`      间隔: ${monitor.interval}\n`);
  });
  console.log(`   ${colors.green}✓ 建议配置告警通知（邮箱/手机）${colors.reset}\n`);

  console.log(`${colors.bold}2️⃣  Google Search Console - SEO 监控${colors.reset}`);
  console.log(`${colors.cyan}   访问: ${monitoringConfig.googleSearchConsole.url}${colors.reset}`);
  console.log(`   域名: ${monitoringConfig.googleSearchConsole.domain}`);
  console.log(`   Sitemap: ${monitoringConfig.googleSearchConsole.sitemap}\n`);
  console.log(`   ${colors.green}✓ 站点地图需要手动提交${colors.reset}`);
  console.log(`   ${colors.yellow}⚠  等待 Google 索引可能需要几天到几周${colors.reset}\n`);

  console.log(`${colors.bold}3️⃣  PageSpeed Insights - 性能监控${colors.reset}`);
  console.log(`${colors.cyan}   访问: ${monitoringConfig.pageSpeedInsights.url}${colors.reset}`);
  console.log(`\n   ${colors.bold}需要检查的页面:${colors.reset}`);
  monitoringConfig.pageSpeedInsights.pages.forEach((page, index) => {
    console.log(`   ${index + 1}. ${page}`);
  });
  console.log(`\n   ${colors.green}✓ 建议每月检查一次${colors.reset}\n`);

  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.magenta}🔗 快速链接${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`   网站首页: ${BASE_URL}`);
  console.log(`   Sitemap:   ${SITEMAP_URL}`);
  console.log(`   Robots:    ${BASE_URL}/robots.txt\n`);

  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.magenta}📊 检查清单${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}\n`);

  const checklist = [
    '配置 UptimeRobot 监控',
    '提交 Sitemap 到 Google Search Console',
    '检查 Google Search Console 索引状态',
    '运行 PageSpeed Insights 性能检查',
    '查看 Vercel 部署状态',
  ];

  checklist.forEach((item, index) => {
    console.log(`   ${colors.yellow}○${colors.reset} ${item}`);
  });
  console.log('');

  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.magenta}📁 生成的文件${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`   ${colors.green}✓${colors.reset} HEALTH_CHECK.md          - 健康检查指南`);
  console.log(`   ${colors.green}✓${colors.reset} MONITORING_SETUP.md     - 监控配置指南`);
  console.log(`   ${colors.green}✓${colors.reset} health-check-report.json - 网站结构报告`);
  console.log(`   ${colors.green}✓${colors.reset} health-check-report.txt  - URL 列表\n`);

  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════════════════${colors.reset}`);
}

// 保存配置文件
function saveConfig() {
  const configPath = path.join(__dirname, '../monitoring-config.json');

  const config = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    sitemapUrl: SITEMAP_URL,
    monitoring: monitoringConfig,
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`${colors.green}📄 配置已保存到: ${configPath}${colors.reset}\n`);
}

// 主函数
function main() {
  printSetupGuide();
  saveConfig();

  console.log(`${colors.green}${colors.bold}✅ 配置准备完成！${colors.reset}`);
  console.log(`${colors.yellow}${colors.bold}👉 请按照上方指南配置监控服务${colors.reset}\n`);
}

// 运行
main();
