// 新增10篇文章到 data.ts
const newArticles = [
  {
    id: 'best-smart-tvs-2024',
    slug: 'best-smart-tvs-2024',
    title: { en: 'Best Smart TVs 2024', de: 'Beste Smart TVs 2024', fr: 'Meilleurs Smart TVs 2024' },
    excerpt: { en: 'Complete guide for best smart TVs. Expert reviews and recommendations.', de: 'Vollständiger Leitfaden.', fr: 'Guide complet.' },
    content: { en: '# Best Smart TVs 2024\\n\\nLooking for the best smart TV?...', de: '# Beste Smart TVs 2024\\n\\nSuchen Sie...', fr: '# Meilleurs Smart TVs 2024\\n\\nCherchez-vous...' },
    category: 'smart-home',
    tags: ['guide', '2024', 'review'],
    author: 'SmartGuide Team',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    amazonAssociates: true,
  },
  {
    id: 'best-wireless-earbuds-2024',
    slug: 'best-wireless-earbuds-2024',
    title: { en: 'Best Wireless Earbuds 2024', de: 'Beste kabellose Kopfhörer 2024', fr: 'Meilleurs écouteurs sans fil 2024' },
    excerpt: { en: 'Complete guide for wireless earbuds.', de: 'Vollständiger Leitfaden.', fr: 'Guide complet.' },
    content: { en: '# Best Wireless Earbuds 2024\\n\\n...', de: '# Beste...', fr: '# Meilleurs...' },
    category: 'phone-accessories',
    tags: ['guide', '2024', 'review'],
    author: 'SmartGuide Team',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    amazonAssociates: true,
  },
  {
    id: 'best-phone-cases-guide',
    slug: 'best-phone-cases-guide',
    title: { en: 'Best Phone Cases Guide', de: 'Beste Handyhüllen Leitfaden', fr: 'Meilleures coques Leitfaden' },
    excerpt: { en: 'Complete guide for phone cases.', de: 'Vollständiger Leitfaden.', fr: 'Guide complet.' },
    content: { en: '# Best Phone Cases Guide\\n\\n...', de: '# Beste...', fr: '# Meilleures...' },
    category: 'phone-accessories',
    tags: ['guide', '2024', 'review'],
    author: 'SmartGuide Team',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    amazonAssociates: true,
  },
];

console.log('// APPEND - Add these to src/content/data.ts');
console.log('export const articles: StoredArticle[] = [...articles, ...newArticles];');
