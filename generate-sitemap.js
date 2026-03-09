// 生成完整的 sitemap.xml
const fs = require('fs');

const baseUrl = 'https://smartguide-ten.vercel.app';

// 分类
const categories = [
  { slug: 'smart-home', name: 'Smart Home' },
  { slug: 'phone-accessories', name: 'Phone Accessories' },
  { slug: 'tech-guides', name: 'Tech Guides' },
];

// 从 additional-articles.ts 读取文章 slug
const additionalData = require('./src/content/additional-articles.ts');
const generatedData = require('./src/content/generated-articles.ts');

// 合并所有文章
const allArticles = [
  ...generatedData.generatedArticles,
  ...additionalData.additionalArticles,
];

// 去重
const uniqueSlugs = [...new Set(allArticles.map(a => a.slug))];

console.log(`Found ${uniqueSlugs.length} unique article slugs`);

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 添加首页和主要页面
const mainPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/en', priority: '1.0', changefreq: 'daily' },
  { url: '/en/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/de', priority: '1.0', changefreq: 'daily' },
  { url: '/de/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/fr', priority: '1.0', changefreq: 'daily' },
  { url: '/fr/blog', priority: '0.9', changefreq: 'daily' },
];

mainPages.forEach(page => {
  xml += `  <url>
    <loc>${baseUrl}${page.url}/</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// 添加分类页面
categories.forEach(cat => {
  ['en', 'de', 'fr'].forEach(lang => {
    xml += `  <url>
    <loc>${baseUrl}/${lang}/category/${cat.slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

// 添加文章页面 - 英语
uniqueSlugs.slice(0, 60).forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/en/blog/${slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

// 添加文章页面 - 德语
uniqueSlugs.slice(0, 60).forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/de/blog/${slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

// 添加文章页面 - 法语
uniqueSlugs.slice(0, 60).forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/fr/blog/${slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

xml += `</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Sitemap generated with main URLs');
console.log('Total URLs:', mainPages.length + categories.length * 3 + uniqueSlugs.slice(0, 60).length * 3);
