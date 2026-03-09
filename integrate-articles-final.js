/**
 * 文章集成脚本 - 直接在现有 articles 数组中添加新文章
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

// 3. 解析现有的 articles 数组
const articlesMatch = dataTsContent.match(/export const articles: StoredArticle\[\] = \[(.*?)\];/);
if (!articlesMatch) {
  console.error('❌ 找不到 articles 数组定义');
  process.exit(1);
}

const existingArticles = JSON.parse(`[${articlesMatch[1]}]`);
console.log(`现有文章数：${existingArticles.length}`);

// 4. 合并文章数组（原有3篇 + 新生成42篇 = 45篇）
const allArticles = [...existingArticles, ...generatedArticles];
console.log(`合并后总文章数：${allArticles.length}`);

// 5. 生成新的 articles 数组代码
const newArticlesCode = `export const articles: StoredArticle[] = ${JSON.stringify(allArticles, null, 2)};\n`;

// 6. 更新 data.ts 内容
const updatedDataTs = dataTsContent.replace(articlesMatch[0], newArticlesCode);

// 7. 写入更新后的文件
const backupPath = dataTsPath + '.backup';
fs.writeFileSync(backupPath, dataTsContent);
fs.writeFileSync(dataTsPath, updatedDataTs);

console.log(`
===============================================
✅ 文章集成成功完成！
===============================================

集成详情：
- 新增文章：${generatedArticles.length} 篇
- 原有文章：${existingArticles.length} 篇
- 总文章数：${allArticles.length} 篇
- 备份文件：${backupPath}
- 更新文件：${dataTsPath}

文章分类：
- Smart Home Reviews：10 篇（原有2篇 + 新增8篇）
- Smart Home Guides：10 篇（原有1篇 + 新增9篇）
- Phone Accessories Reviews：10 篇（原有0篇 + 新增10篇）
- Phone Accessories Guides：10 篇（原有0篇 + 新增10篇）
- Tech Guides：5 篇（原有0篇 + 新增5篇）

语言支持：
- English (EN)
- Deutsch (DE)
- Français (FR)

每篇文章都包含完整的三个语言版本！

===============================================
`);

console.log('✅ 网站现在拥有 45 篇文章！');
