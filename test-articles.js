
import { getAllArticles } from './src/content/data.ts';

console.log('Total articles:', getAllArticles().length);
console.log('Slugs:', getAllArticles().map(a => a.slug));
