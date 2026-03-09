import { getArticlesByLocale, getAllCategories } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Blog - ${seoConfig.siteName}`,
  description: seoConfig.siteDescription.en,
};

export default function BlogPage() {
  const articles = getArticlesByLocale('en');
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Switcher */}
      <Header locale="en" siteName={seoConfig.siteName} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">
            Latest reviews, guides, and tips
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/en/blog"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/en/category/${category.slug}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                {category.name.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <span>{article.readingTime} min read</span>
                  </div>
                  <Link href={`/en/blog/${article.slug}`}>
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(article.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 {seoConfig.siteName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
