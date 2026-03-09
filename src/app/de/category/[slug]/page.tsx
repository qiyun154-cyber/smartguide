import { getArticlesByCategory, getAllCategories } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Kategorie nicht gefunden',
    };
  }

  return {
    title: `${category.name.de} - ${seoConfig.siteName}`,
    description: category.description.de,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(slug, 'de');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/de" className="text-2xl font-bold text-gray-900">
            {seoConfig.siteName}
          </Link>
          <nav className="flex gap-4">
            <Link href="/de" className="text-gray-600 hover:text-gray-900">
              Startseite
            </Link>
            <Link href="/de/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{category.name.de}</h1>
          <p className="text-xl text-blue-100">
            {category.description.de}
          </p>
          <p className="mt-2 text-blue-200">
            {articles.length} Artikel
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {articles.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              Noch keine Artikel in dieser Kategorie.
            </p>
          ) : (
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
                      <span>{article.readingTime} Min. Lesezeit</span>
                    </div>
                    <Link href={`/de/blog/${article.slug}`}>
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
                        {new Date(article.createdAt).toLocaleDateString('de-DE', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 {seoConfig.siteName}. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
