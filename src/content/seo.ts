import { Article, Category } from './types';
import { getAllArticles, getAllCategories } from './data';

// 动态内容生成器 - 使用AI生成更多文章
// 这个模块会在实际运行时调用AI生成内容

interface ContentGenerationRequest {
  topic: string;
  keywords: string[];
  language: string;
  wordCount: number;
  tone: 'professional' | 'friendly' | 'technical';
}

interface GeneratedContent {
  title: string;
  description: string;
  content: string;
  keywords: string[];
  readingTime: number;
}

// 内容模板 - 用于批量生成
const contentTemplates = {
  'review': {
    structure: [
      'Introduction - Product overview',
      'Key Features',
      'Pros & Cons',
      'Performance',
      'Comparison with competitors',
      'Verdict',
    ],
    wordCount: { min: 800, max: 1500 },
  },
  'guide': {
    structure: [
      'Introduction',
      'What you need',
      'Step-by-step instructions',
      'Tips & Tricks',
      'Common mistakes to avoid',
      'Conclusion',
    ],
    wordCount: { min: 1000, max: 2000 },
  },
  'comparison': {
    structure: [
      'Introduction',
      'Product A overview',
      'Product B overview',
      'Feature comparison',
      'Price comparison',
      'Which should you choose',
    ],
    wordCount: { min: 800, max: 1200 },
  },
  'listicle': {
    structure: [
      'Introduction',
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Conclusion',
    ],
    wordCount: { min: 600, max: 1500 },
  },
};

// SEO优化配置
export const seoConfig = {
  siteName: 'TechReviews Hub',
  siteDescription: {
    en: 'Your trusted source for tech reviews, buying guides, and smart home tips',
    de: 'Ihre vertrauenswürdige Quelle für Technik-Testberichte, Kaufanleitungen und Smart-Home-Tipps',
    fr: 'Votre source de confiance pour les revues tech, guides d\'achat et conseils maison connectée',
  },
  twitterHandle: '@techreviewshub',
  defaultImage: '/og-image.jpg',
};

// 生成文章元数据
export function generateArticleMetadata(article: Article, locale: string) {
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    ogImage: article.featuredImage || seoConfig.defaultImage,
    article: {
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      author: article.author,
      section: article.category,
      tags: article.tags,
    },
  };
}

// 生成站点地图数据
export function generateSitemapData(locale: string) {
  const articles = getAllArticles();
  const categories = getAllCategories();
  
  const urls: { url: string; lastmod: string; changefreq: string; priority: number }[] = [];
  
  // 首页
  urls.push({
    url: `/${locale}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1.0,
  });
  
  // 分类页
  categories.forEach(cat => {
    urls.push({
      url: `/${locale}/category/${cat.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    });
  });
  
  // 文章页
  articles.forEach(article => {
    urls.push({
      url: `/${locale}/blog/${article.slug}`,
      lastmod: article.updatedAt,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });
  
  return urls;
}

// 批量内容生成配置
export const bulkGenerationConfig = {
  // 每日生成目标
  dailyTarget: {
    en: 5,  // 英文5篇
    de: 3,  // 德语3篇
    fr: 2,  // 法语2篇
  },
  
  // 内容类型分布
  typeDistribution: {
    review: 0.3,
    guide: 0.3,
    comparison: 0.2,
    listicle: 0.2,
  },
  
  // Niche关键词池
  nicheKeywords: {
    'smart-home': [
      'smart home devices', 'home automation', 'smart speaker', 
      'smart lighting', 'smart security', 'smart thermostat',
      'Google Home', 'Amazon Alexa', 'Apple HomeKit'
    ],
    'phone-accessories': [
      'phone charger', 'wireless charger', 'phone case',
      'screen protector', 'power bank', 'data cable',
      'fast charging', 'MagSafe', 'USB-C'
    ],
    'tech-guides': [
      'how to', 'tutorial', 'setup guide', 'beginner',
      'troubleshooting', 'tips and tricks', 'best practices'
    ],
  },
};
