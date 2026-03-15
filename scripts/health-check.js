#!/usr/bin/env node

/**
 * SmartGuide 网站健康检查脚本
 * 检查所有页面的 HTTP 状态码、响应时间、404 错误
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';

const BASE_URL = 'https://smartguide-ten.vercel.app';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// 检查结果统计
const stats = {
  total: 0,
  success: 0,
  failed: 0,
  timeout: 0,
  totalResponseTime: 0,
  errors: [],
};

// 获取页面状态
function checkUrl(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      headers: {
        'User-Agent': 'SmartGuide-HealthCheck/1.0',
      },
      timeout: 10000, // 10秒超时
    };

    const req = protocol.request(options, (res) => {
      const responseTime = Date.now() - startTime;
      stats.totalResponseTime += responseTime;

      resolve({
        url,
        status: res.statusCode,
        responseTime,
        success: res.statusCode >= 200 && res.statusCode < 400,
      });
    });

    req.on('error', (error) => {
      const responseTime = Date.now() - startTime;
      stats.totalResponseTime += responseTime;

      resolve({
        url,
        status: 'ERROR',
        responseTime,
        success: false,
        error: error.message,
      });
    });

    req.on('timeout', () => {
      stats.timeout++;
      resolve({
        url,
        status: 'TIMEOUT',
        responseTime: 10000,
        success: false,
        error: 'Request timeout',
      });
    });

    req.end();
  });
}

// 获取 sitemap 中的所有 URL
async function getSitemapUrls() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // 解析 XML 获取所有 <loc> 标签
        const urlRegex = /<loc>(.*?)<\/loc>/g;
        const urls = [];
        let match;

        while ((match = urlRegex.exec(data)) !== null) {
          urls.push(match[1]);
        }

        resolve(urls);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// 批量检查 URL
async function checkUrls(urls, concurrency = 10) {
  const results = [];

  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);

    // 显示进度
    const progress = ((i + batch.length) / urls.length * 100).toFixed(1);
    process.stdout.write(`\r${colors.cyan}检查进度: ${progress}% (${i + batch.length}/${urls.length})${colors.reset}`);
  }

  console.log(); // 换行
  return results;
}

// 打印结果
function printResults(results) {
  console.log(`\n${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}         SmartGuide 网站健康检查报告${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════════════════${colors.reset}\n`);

  // 统计信息
  stats.total = results.length;
  stats.success = results.filter(r => r.success).length;
  stats.failed = results.filter(r => !r.success).length;

  console.log(`${colors.cyan}📊 总体统计${colors.reset}`);
  console.log(`   总页面数: ${stats.total}`);
  console.log(`   ${colors.green}✓ 正常: ${stats.success}${colors.reset}`);
  console.log(`   ${colors.red}✗ 失败: ${stats.failed}${colors.reset}`);
  console.log(`   ⏱ 超时: ${stats.timeout}`);
  console.log(`   📈 平均响应时间: ${(stats.totalResponseTime / stats.total).toFixed(0)}ms\n`);

  // 分类显示
  const successResults = results.filter(r => r.success);
  const failedResults = results.filter(r => !r.success);

  // 显示失败页面
  if (failedResults.length > 0) {
    console.log(`${colors.red}❌ 失败页面 (${failedResults.length})${colors.reset}\n`);

    failedResults.forEach((result) => {
      console.log(`   ${colors.red}${result.status}${colors.reset} - ${result.url}`);
      if (result.error) {
        console.log(`       ${colors.yellow}错误: ${result.error}${colors.reset}`);
      }
    });
    console.log('');
  }

  // 显示响应最慢的页面
  const sortedByResponse = [...results].sort((a, b) => b.responseTime - a.responseTime);
  console.log(`${colors.yellow}🐢 响应最慢的页面 (Top 10)${colors.reset}\n`);

  sortedByResponse.slice(0, 10).forEach((result, index) => {
    const statusColor = result.success ? colors.green : colors.red;
    console.log(`   ${index + 1}. ${statusColor}${result.responseTime}ms${colors.reset} - ${result.url}`);
  });

  // 最终结论
  console.log(`\n${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);

  if (stats.failed === 0) {
    console.log(`${colors.green}✅ 检查完成！所有页面都正常运行${colors.reset}\n`);
  } else {
    console.log(`${colors.red}⚠️  检查完成！发现 ${stats.failed} 个问题页面${colors.reset}\n`);
  }

  console.log(`${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);
}

// 主函数
async function main() {
  console.log(`${colors.cyan}🔍 开始检查 SmartGuide 网站...${colors.reset}\n`);
  console.log(`${colors.cyan}📥 获取 sitemap.xml...${colors.reset}`);

  try {
    const urls = await getSitemapUrls();

    console.log(`${colors.green}✓ 找到 ${urls.length} 个页面${colors.reset}\n`);
    console.log(`${colors.cyan}🔎 开始检查页面状态...${colors.reset}\n`);

    const results = await checkUrls(urls, 20); // 并发20

    printResults(results);

    // 保存结果到文件
    const report = {
      timestamp: new Date().toISOString(),
      stats,
      failedPages: results.filter(r => !r.success),
      slowPages: [...results].sort((a, b) => b.responseTime - a.responseTime).slice(0, 10),
    };

    await Bun.write('./health-check-report.json', JSON.stringify(report, null, 2));
    console.log(`${colors.green}📄 报告已保存到: ./health-check-report.json${colors.reset}\n`);

  } catch (error) {
    console.error(`${colors.red}❌ 检查失败: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// 运行
main();
