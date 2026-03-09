import Link from 'next/link';
import { getArticlesByLocale, getAllCategories } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Header from '@/components/Header';

export const metadata = {
  title: `Accueil - ${seoConfig.siteName}`,
  description: seoConfig.siteDescription.fr,
};

export default function Home() {
  const articles = getArticlesByLocale('fr');
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="fr" siteName={seoConfig.siteName} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Vos Guides Tech & Tests Approuvés
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez les meilleurs produits avec nos tests approfondis et guides d'achat
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/fr/blog" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Voir Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Catégories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/fr/category/${category.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold mb-2">
                  {category.name.fr}
                </h4>
                <p className="text-gray-600">
                  {category.description.fr}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Articles Récents</h3>
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
                    <span>{article.readingTime} min de lecture</span>
                  </div>
                  <Link href={`/fr/blog/${article.slug}`}>
                    <h4 className="text-xl font-semibold mb-2 hover:text-blue-600">
                      {article.title}
                    </h4>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
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
                    <span className="text-sm text-gray-500">
                      {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/fr/blog" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Voir Tous Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Pourquoi Nous Choisir</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Tests Impartiaux</h4>
              <p className="text-gray-600">
                Nous testons les produits à fond et donnons des opinions honnêtes
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-xl font-semibold mb-2">Guides Complets</h4>
              <p className="text-gray-600">
                Des guides complets pour vous aider à faire le bon choix
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-2">Multilingue</h4>
              <p className="text-gray-600">
                Contenu en anglais, allemand et français
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 {seoConfig.siteName}. Tous droits réservés.</p>
          <p className="text-gray-400 mt-2">
            Construit avec génération de contenu IA
          </p>
        </div>
      </footer>
    </div>
  );
}
