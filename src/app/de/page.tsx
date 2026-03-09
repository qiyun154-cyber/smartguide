import Link from 'next/link';
import { getArticlesByLocale, getAllCategories } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Header from '@/components/Header';

export const metadata = {
  title: `Startseite - ${seoConfig.siteName}`,
  description: seoConfig.siteDescription.de,
};

export default function Home() {
  const articles = getArticlesByLocale('de');
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="de" siteName={seoConfig.siteName} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ihre vertrauenswürdigen Tech-Bewertungen & Guides
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entdecken Sie die besten Produkte mit unseren ausführlichen Testberichten und Kaufanleitungen
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/de/blog" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Artikel durchsuchen
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Kategorien</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/de/category/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {category.name.de}
                </h4>
                <p className="text-gray-600">
                  {category.description.de}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Neueste Artikel</h3>
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
                    <span>{article.readingTime} Min. Lesezeit</span>
                  </div>
                  <Link href={`/de/blog/${article.slug}`}>
                    <h4 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {article.title}
                    </h4>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/de/blog" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Alle Artikel ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Warum Uns Wählen</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Unparteiische Bewertungen</h4>
              <p className="text-gray-600">
                Wir testen Produkte gründlich und geben ehrliche Meinungen
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-semibold mb-2">Ausführliche Guides</h4>
              <p className="text-gray-600">
                Umfassende Anleitungen, die Ihnen bei der Wahl helfen
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-2">Mehrsprachig</h4>
              <p className="text-gray-600">
                Inhalte auf Deutsch, Englisch und Französisch
              </p>
            </div>
          </div>
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
