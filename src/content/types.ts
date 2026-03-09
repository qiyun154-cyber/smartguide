/**
 * 内容类型定义
 */

export interface Article {
  id: string;
  slug: string;
  title: string;  // 单语言版本：直接是字符串
  description: string;
  content: string;
  keywords: string[];
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  author: string;
  featuredImage?: string;
  readingTime: number; // 分钟
}

// 内部存储类型（多语言）
export interface ArticleMultilingual {
  id: string;
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  content: Record<string, string>;
  keywords: string[];
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  author: string;
  featuredImage?: string;
  readingTime: number;
}

export interface Category {
  id: string;
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
}

export interface NicheConfig {
  id: string;
  name: string;
  niches: string[];
  targetCountries: string[];
  languages: string[];
  monetization: string[]; // ['adsense', 'affiliate', 'digital_products']
}
