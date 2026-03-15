#!/usr/bin/env node

/**
 * SmartGuide 快速状态检查
 * 每次检查关键指标，适合定时运行
 */

import https from 'https';

const BASE_URL = 'https://smartguide-ten.vercel.app';
const ENDPOINTS = [
  '/',
  '/en',
  '/de',
  '/fr',
  '/en/about',
  '/en/contact',
  '/sitemap.xml',
  '/robots.txt',
];

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

async function checkEndpoint(path) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const url = `${BASE_URL}${path}`;

    https.get(url, (res) => {
      const responseTime = Date.now() - startTime;

      resolve({
        path,
        url,
        status: res.statusCode,
        responseTime,
        success: res.statusCode >= 200 && res.statusCode < 400,
      });
    }).on('error', (error) => {
      resolve({
        path,
        url,
        status: 'ERROR',
        responseTime: -1,
        success: false,
        error: error.message,
      });
    });
  });
}

async function main() {
  console.log(`${colors.cyan}🔍 SmartGuide 快速状态检查${colors.reset}`);
  console.log(`${colors.cyan}📅 ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}${colors.reset}\n`);

  let successCount = 0;
  let totalCount = ENDPOINTS.length;
  let totalResponseTime = 0;

  for (const endpoint of ENDPOINTS) {
    const result = await checkEndpoint(endpoint);

    if (result.success) {
      successCount++;
      totalResponseTime += result.responseTime;
      console.log(`${colors.green}✓${colors.reset} ${result.path.padEnd(20)} ${result.status} ${result.responseTime}ms`);
    } else {
      console.log(`${colors.red}✗${colors.reset} ${result.path.padEnd(20)} ${result.status} ${result.error || ''}`);
    }
  }

  console.log(`\n${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}📊 检查结果${colors.reset}`);
  console.log(`   成功: ${successCount}/${totalCount}`);
  console.log(`   平均响应时间: ${successCount > 0 ? (totalResponseTime / successCount).toFixed(0) : 0}ms`);

  if (successCount === totalCount) {
    console.log(`${colors.green}✅ 所有端点正常！${colors.reset}\n`);
  } else {
    console.log(`${colors.red}⚠️  发现 ${totalCount - successCount} 个问题端点！${colors.reset}\n`);
  }

  console.log(`${colors.blue}═══════════════════════════════════════════════════${colors.reset}\n`);

  process.exit(successCount === totalCount ? 0 : 1);
}

main();
