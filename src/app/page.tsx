import Link from 'next/link';
import { getAllArticles, getAllCategories } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Header from '@/components/Header';
import { AdBanner } from '@/components/AdBanner.dynamic';

export default function Home() {
  const articles = getAllArticles();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="en" siteName={seoConfig.siteName} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Your Trusted Tech Reviews & Guides
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover the best products with our in-depth reviews and buying guides
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/en/blog" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Browse Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/en/category/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {category.name.en}
                </h4>
                <p className="text-gray-600">
                  {category.description.en}
                </p>
              </Link>
            ))}
          </div>
          {/* Homepage Ad */}
          <div className="my-8">
            <AdBanner slot="9876543212" style={{ display: 'block', textAlign: 'center' }} />
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((article) => (
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
                    <h4 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {article.title.en}
                    </h4>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description.en}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/en/blog" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Unbiased Reviews</h4>
              <p className="text-gray-600">
                We test products thoroughly and give honest opinions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-semibold mb-2">In-depth Guides</h4>
              <p className="text-gray-600">
                Comprehensive guides to help you make the right choice
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-2">Multi-language</h4>
              <p className="text-gray-600">
                Content in English, German, and French
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 {seoConfig.siteName}. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Built with AI-powered content generation
          </p>
        </div>
      </footer>
    </div>
  );
}
