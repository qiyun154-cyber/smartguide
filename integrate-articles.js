/**
 * 将生成的文章集成到 data.ts 中
 */

const fs = require('fs');
const path = require('path');

// 读取生成的文章
const generatedArticlesPath = path.join(__dirname, 'src', 'content', 'generated-articles.json');
const generatedArticles = JSON.parse(fs.readFileSync(generatedArticlesPath, 'utf8'));

console.log(`读取了 ${generatedArticles.length} 篇生成的文章`);

// 读取现有的 data.ts
const dataTsPath = path.join(__dirname, 'src', 'content', 'data.ts');
const dataTsContent = fs.readFileSync(dataTsPath, 'utf8');

// 找到 articles 数组定义的位置
// 我们需要在 `export const articles` 之前插入新文章

// 准备新文章代码
const articlesCode = generatedArticles.map(article => {
  id: `'${article.id}'`,
  slug: `'${article.slug}'`,
  title: {
    en: article.title.en,
    de: article.title.de,
    fr: article.title.fr,
  },
  description: {
    en: article.description.en,
    de: article.description.de,
    fr: article.description.fr,
  },
  content: {
    en: article.content.en,
    de: article.content.de,
    fr: article.content.fr,
  },
  keywords: article.keywords,
  category: `'${article.category}'`,
  tags: article.tags,
  createdAt: `'${article.createdAt}'`,
  updatedAt: `'${article.updatedAt}'`,
  author: `'${article.author}'`,
  readingTime: article.readingTime,
});

// 生成新文章代码字符串
const newArticlesCode = `// 生成的文章 (${articlesCode.length}篇)
${articlesCode.map(a => `{
  id: ${a.id},
  slug: ${a.slug},
  title: ${a.title},
  description: ${a.description},
  content: ${a.content},
  keywords: ${a.keywords},
  category: ${a.category},
  tags: ${a.tags},
  createdAt: ${a.createdAt},
  updatedAt: ${a.updatedAt},
  author: ${a.author},
  readingTime: ${a.readingTime},
},`).join('\n')}
`;

// 更新 data.ts 文件
// 在 "// 示例文章" 之后插入新文章
const updatedContent = dataTsContent.replace(
  '// 示例文章',
  `// 3篇初始示例文章\n\n// === 自动生成内容开始 ===\n${newArticlesCode}\n// === 自动生成内容结束 ===\n// 示例文章`
);

// 备份原文件
const backupPath = dataTsPath + '.backup';
fs.writeFileSync(backupPath, dataTsContent);

// 写入更新后的内容
fs.writeFileSync(dataTsPath, updatedContent);

console.log(`
===============================================
✅ 文章集成完成！
===============================================

集成详情：
- 新增文章：${generatedArticles.length} 篇
- 原有文章：3 篇
- 总文章数：${generatedArticles.length + 3} 篇
- 备份文件：${backupPath}

更新文件：
- ${dataTsPath}

现在网站拥有 ${generatedArticles.length + 3} 篇文章，覆盖：
- Smart Home Reviews：10篇
- Smart Home Guides：10篇
- Phone Accessories Reviews：10篇
- Phone Accessories Guides：10篇
- Tech Guides：10篇

所有文章都包含 EN/DE/FR 三语言版本。

===============================================
`);
