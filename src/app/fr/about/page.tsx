import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `À Propos - ${seoConfig.siteName}`,
  description: `Découvrez ${seoConfig.siteName}, notre mission et nos valeurs derrière les avis.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale="fr" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos de TechReviews Hub</h1>
        <p className="text-xl text-gray-600 mb-6">
          Votre source de confiance pour les avis sur la Maison Connectée et Accessoires Téléphone
        </p>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
          <p className="text-gray-700 mb-4">
            Chez TechReviews Hub, nous croyons fournir des avis honnêtes, complets et pratiques pour vous aider à prendre des décisions éclairées. Notre objectif est d'être votre guide de confiance dans le monde en constante évolution de la technologie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900">Avis Honnêtes</h3>
              <p className="text-sm text-gray-600 mt-2">Évaluations impartiales</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-900">Analyse Approfondie</h3>
              <p className="text-sm text-gray-600 mt-2">Tests détaillés</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900">Conseils Pratiques</h3>
              <p className="text-sm text-gray-600 mt-2">Guides d'achat utiles</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce Que Nous Couvrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Maison Connectée</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Serrures connectées</li>
                <li>• Caméras & surveillance</li>
                <li>• Thermostats & chauffage</li>
                <li>• Éclairage intelligent</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Accessoires Téléphone</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Coques & protections</li>
                <li>• Chargeurs & batteries</li>
                <li>• Écouteurs & haut-parleurs</li>
                <li>• Supports & trépieds</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Choisir TechReviews Hub?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Couverture Complète</h3>
                <p className="text-gray-600">Nous testons des centaines de produits</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Honnête & Impartial</h3>
                <p className="text-gray-600">Aucun avis sponsorisé</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Équipe Experte</h3>
                <p className="text-gray-600">Passionnés de technologie</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Multilingue</h3>
                <p className="text-gray-600">Contenu en anglais, allemand et français</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prêt à Explorer?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fr/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Voir Tous Les Articles →
            </Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. Tous droits réservés.</p>
          <p className="text-gray-400 mt-2">
            Créé avec du contenu généré par IA
          </p>
        </div>
      </footer>
    </div>
  );
}
