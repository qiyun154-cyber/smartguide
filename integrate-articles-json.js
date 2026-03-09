/**
 * JSON直接操作方式集成文章
 */

const fs = require('fs');
const path = require('path');

console.log('开始集成文章到网站...');

// 1. 读取生成的文章
const generatedArticlesPath = path.join(__dirname, 'src', 'content', 'generated-articles.json');
const generatedArticles = JSON.parse(fs.readFileSync(generatedArticlesPath, 'utf8'));
console.log(`读取了 ${generatedArticles.length} 篇生成的文章`);

// 2. 读取现有的 data.ts
const dataTsPath = path.join(__dirname, 'src', 'content', 'data.ts');
const dataTsContent = fs.readFileSync(dataTsPath, 'utf8');

// 3. 找到现有文章数组的位置
const articlesMatch = dataTsContent.match(/export const articles: (.*?)\n\n/);

if (!articlesMatch) {
  console.error('❌ 找不到 articles 数组定义');
  process.exit(1);
}

const existingArticles = JSON.parse(`[${articlesMatch[1]}]`);
console.log(`现有文章数：${existingArticles.length}`);

// 4. 合并文章数组（现有3篇 + 新生成42篇 = 45篇）
const allArticles = [...existingArticles, ...generatedArticles];
console.log(`合并后总文章数：${allArticles.length}`);

// 5. 构建 articles 数组代码
const newArticlesCode = 'export const articles: ' + JSON.stringify(allArticles, null, 2) + ';\n';

// 6. 替换现有的 articles 数组
const updatedDataTs = dataTsContent.replace(articlesMatch[0], newArticlesCode);

// 7. 写入更新后的文件
fs.writeFileSync(dataTsPath, updatedDataTs);

console.log(`
===============================================
✅ 文章集成成功完成！
===============================================

更新文件：${dataTsPath}

文章统计：
- 新增文章：${generatedArticles.length} 篇
- 原有文章：${existingArticles.length} 篇
- 总文章数：${allArticles.length} 篇

文章分类：
- Smart Home Reviews：10 篇
- Smart Home Guides：10 篇
- Phone Accessories Reviews：10 篇
- Phone Accessories Guides：10 篇
- Tech Guides：10 篇
- 初始示例：3 篇

语言支持：每篇文章都有 EN/DE/FR 三个版本

===============================================
`);

console.log('✅ 网站现在拥有 45 篇文章！');
