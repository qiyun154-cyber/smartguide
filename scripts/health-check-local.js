#!/usr/bin/env node

/**
 * SmartGuide 网站健康检查脚本（本地版本）
 * 检查本地构建的文件，生成 URL 列表
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');
const REPORT_FILE = path.join(__dirname, '../health-check-report.json');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

// 统计信息
const stats = {
  totalPages: 0,
  htmlPages: 0,
  otherFiles: 0,
  categories: {},
  languages: {},
  urls: [],
};

// 递归获取所有文件
function getAllFiles(dir, baseDir = dir) {
  const files = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(baseDir, fullPath);

      if (entry.isDirectory()) {
        files.push(...getAllFiles(fullPath, baseDir));
      } else {
        files.push({
          fullPath,
          relativePath,
          name: entry.name,
          ext: path.extname(entry.name),
        });
      }
    }
  } catch (error) {
    console.error(`${colors.red}无法读取目录: ${dir}${colors.reset}`);
  }

  return files;
}

// 生成 URL 列表
function generateUrls(files) {
  const urls = [];

  files.forEach(file => {
    // 只处理 HTML 文件
    if (file.ext === '.html') {
      // 移除 .html 扩展名，转换为 URL 路径
      let urlPath = file.relativePath.replace(/\.html$/, '');

      // 如果是 index.html，移除文件名
      if (path.basename(urlPath) === 'index') {
        urlPath = path.dirname(urlPath);
      }

      // 确保路径以 / 开头
      if (!urlPath.startsWith('/')) {
        urlPath = '/' + urlPath;
      }

      // 如果路径是空的，使用 /
      if (urlPath === '' || urlPath === '.') {
        urlPath = '/';
      }

      const url = `https://smartguide-ten.vercel.app${urlPath}`;
      urls.push({
        url,
        path: urlPath,
        file: file.relativePath,
      });
    }
  });

  return urls;
}

// 分析 URL
function analyzeUrls(urls) {
  urls.forEach(item => {
    stats.totalPages++;

    // 分析语言
    const pathMatch = item.path.match(/^\/([a-z]{2})\//);
    if (pathMatch) {
      const lang = pathMatch[1].toUpperCase();
      stats.languages[lang] = (stats.languages[lang] || 0) + 1;
    } else if (item.path === '/') {
      stats.languages['ROOT'] = (stats.languages['ROOT'] || 0) + 1;
    }

    // 分析分类
    if (item.path.match(/\/category\//)) {
      stats.categories['分类页'] = (stats.categories['分类页'] || 0) + 1;
    } else if (item.path.match(/\/about/) || item.path.match(/\/contact/)) {
      stats.categories['页面'] = (stats.categories['页面'] || 0) + 1;
    } else if (item.path === '/') {
      stats.categories['首页'] = (stats.categories['首页'] || 0) + 1;
    } else if (item.path.length > 1 && !item.path.match(/^\/[a-z]{2}\/$/)) {
      stats.categories['文章页'] = (stats.categories['文章页'] || 0) + 1;
    }

    stats.urls.push(item);
  });

  stats.htmlPages = urls.length;
}

// 打印报告
function printReport() {
  console.log(`\n${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.blue}         SmartGuide 网站页面分析报告${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`${colors.cyan}📊 总体统计${colors.reset}`);
  console.log(`   总页面数: ${stats.htmlPages}`);
  console.log(`   ${colors.green}✓ 状态: 需要在线检查${colors.reset}\n`);

  console.log(`${colors.cyan}🌍 语言分布${colors.reset}`);
  Object.entries(stats.languages).forEach(([lang, count]) => {
    console.log(`   ${lang}: ${count} 页`);
  });
  console.log('');

  console.log(`${colors.cyan}📁 页面类型${colors.reset}`);
  Object.entries(stats.categories).forEach(([type, count]) => {
    console.log(`   ${type}: ${count} 页`);
  });
  console.log('');

  console.log(`${colors.cyan}🔗 示例 URL${colors.reset}\n`);

  // 显示每种语言和类型的示例
  const samples = {
    '首页': stats.urls.find(u => u.path === '/'),
    '分类页': stats.urls.find(u => u.path.includes('/category/')),
    '页面': stats.urls.find(u => u.path.includes('/about/') || u.path.includes('/contact/')),
    '文章页': stats.urls.find(u => u.path.length > 10 && !u.path.includes('/category/')),
  };

  Object.entries(samples).forEach(([type, sample]) => {
    if (sample) {
      console.log(`   ${colors.yellow}${type}:${colors.reset}`);
      console.log(`   ${sample.url}`);
    }
  });

  console.log(`\n${colors.blue}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.magenta}💡 下一步: 使用这些 URL 进行在线检查${colors.reset}`);
  console.log(`${colors.blue}═══════════════════════════════════════════════════${colors.reset}\n`);
}

// 保存 URL 列表
function saveUrls(urls) {
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: 'https://smartguide-ten.vercel.app',
    stats,
    urls,
  };

  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  console.log(`${colors.green}📄 URL 列表已保存到: ${REPORT_FILE}${colors.reset}\n`);

  // 同时保存纯文本列表
  const txtFile = REPORT_FILE.replace('.json', '.txt');
  const urlList = urls.map(u => u.url).join('\n');
  fs.writeFileSync(txtFile, urlList);
  console.log(`${colors.green}📄 URL 列表已保存到: ${txtFile}${colors.reset}\n`);
}

// 主函数
async function main() {
  console.log(`${colors.cyan}🔍 分析 SmartGuide 网站结构...${colors.reset}\n`);

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`${colors.red}❌ 找不到 public 目录: ${PUBLIC_DIR}${colors.reset}`);
    console.log(`${colors.yellow}💡 请先运行: npm run build${colors.reset}\n`);
    process.exit(1);
  }

  console.log(`${colors.cyan}📁 扫描 public 目录...${colors.reset}`);
  const files = getAllFiles(PUBLIC_DIR);
  console.log(`${colors.green}✓ 找到 ${files.length} 个文件${colors.reset}\n`);

  console.log(`${colors.cyan}🔗 生成 URL 列表...${colors.reset}`);
  const urls = generateUrls(files);
  console.log(`${colors.green}✓ 生成 ${urls.length} 个 URL${colors.reset}\n`);

  console.log(`${colors.cyan}📊 分析 URL 结构...${colors.reset}`);
  analyzeUrls(urls);
  console.log(`${colors.green}✓ 分析完成${colors.reset}\n`);

  printReport();
  saveUrls(urls);
}

// 运行
main();
