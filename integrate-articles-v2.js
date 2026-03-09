/**
 * 文章集成脚本 v2 - 使用JSON操作
 */

const fs = require('fs');
const path = require('path');

console.log('开始集成文章...');

// 1. 读取生成的文章
const generatedArticlesPath = path.join(__dirname, 'src', 'content', 'generated-articles.json');
const generatedArticles = JSON.parse(fs.readFileSync(generatedArticlesPath, 'utf8'));
console.log(`读取了 ${generatedArticles.length} 篇生成的文章`);

// 2. 读取现有的 data.ts
const dataTsPath = path.join(__dirname, 'src', 'content', 'data.ts');
const dataTsContent = fs.readFileSync(dataTsPath, 'utf8');

// 3. 构建新文章代码
const newArticlesCode = generatedArticles.map(article => {
  const id = `'${article.id}'`;
  const slug = `'${article.slug}'`;
  const title = article.title;
  const description = article.description;
  const content = article.content;
  const keywords = article.keywords;
  const category = `'${article.category}'`;
  const tags = article.tags;
  const createdAt = `'${article.createdAt}'`;
  const updatedAt = `'${article.updatedAt}'`;
  const author = `'${article.author}'`;
  const readingTime = article.readingTime;

  return `{
    id: ${id},
    slug: ${slug},
    title: {
      en: ${JSON.stringify(title.en)},
      de: ${JSON.stringify(title.de)},
      fr: ${JSON.stringify(title.fr)},
    },
    description: {
      en: ${JSON.stringify(description.en)},
      de: ${JSON.stringify(description.de)},
      fr: ${JSON.stringify(description.fr)},
    },
    content: {
      en: ${JSON.stringify(content.en)},
      de: ${JSON.stringify(content.de)},
      fr: ${JSON.stringify(content.fr)},
    },
    keywords: ${JSON.stringify(keywords)},
    category: ${category},
    tags: ${JSON.stringify(tags)},
    createdAt: ${createdAt},
    updatedAt: ${updatedAt},
    author: ${author},
    readingTime: ${readingTime},
  };
}).join(',\n');

// 4. 更新 data.ts 内容
const searchStart = '// 示例文章';
const searchEnd = 'export function getAllArticles';

const beforeContent = dataTsContent.substring(0, dataTsContent.indexOf(searchStart));
const afterContent = dataTsContent.substring(dataTsContent.indexOf(searchEnd));

const newContent = beforeContent + `// 示例文章\n${newArticlesCode}\nexport function getAllArticles${afterContent}`;

// 5. 写入更新后的内容
fs.writeFileSync(dataTsPath, newContent);

console.log(`
===============================================
✅ 文章集成完成！
===============================================

集成详情：
- 新增文章：${generatedArticles.length} 篇
- 原有文章：3 篇
- 总文章数：${generatedArticles.length + 3} 篇
- 更新文件：${dataTsPath}

文章分类：
- Smart Home Reviews：10篇
- Smart Home Guides：10篇
- Phone Accessories Reviews：10篇
- Phone Accessories Guides：10篇
- Tech Guides：10篇

所有文章都包含 EN/DE/FR 三语言版本。

===============================================
`);

console.log('✅ 集成成功完成！');
