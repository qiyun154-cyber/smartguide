import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Über Uns - ${seoConfig.siteName}`,
  description: `Erfahren Sie mehr über ${seoConfig.siteName}, unsere Mission und Werte hinter den Reviews.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale="de" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Über TechReviews Hub</h1>
        <p className="text-xl text-gray-600 mb-6">
          Ihre vertrauenswürdige Quelle für Smart Home & Handy-Zubehör Reviews
        </p>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsere Mission</h2>
          <p className="text-gray-700 mb-4">
            Bei TechReviews Hub glauben wir daran, Ihnen ehrliche, umfassende und handlungsorientierte Reviews zu liefern, um Ihnen bei fundierten Entscheidungen zu helfen. Unser Ziel ist es, Ihr vertrauenswürdiger Guide in der sich schnell entwickelnden Welt der Technologie zu sein.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900">Ehrliche Reviews</h3>
              <p className="text-sm text-gray-600 mt-2">Unvoreingenommene Bewertungen</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-900">Tiefgründige Analyse</h3>
              <p className="text-sm text-gray-600 mt-2">Detaillierte Tests</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900">Handlungsorientiert</h3>
              <p className="text-sm text-gray-600 mt-2">Praktische Kaufanleitungen</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Was Wir Abdecken</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Home</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Intelligente Schlösser</li>
                <li>• Kameras & Überwachung</li>
                <li>• Thermostate & Heizung</li>
                <li>• Smart Beleuchtung</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Handy-Zubehör</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Handyhüllen & Schoner</li>
                <li>• Ladekabel & Powerbanks</li>
                <li>• Kopfhörer & Lautsprecher</li>
                <li>• Halterungen & Ständer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum TechReviews Hub?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Umfassende Abdeckung</h3>
                <p className="text-gray-600">Wir testen Hunderte von Produkten</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Ehrlich & Unvoreingenommen</h3>
                <p className="text-gray-600">Keine gesponserten Bewertungen</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Expertenteam</h3>
                <p className="text-gray-600">Technik-Enthusiasten mit Erfahrung</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Mehrsprachig</h3>
                <p className="text-gray-600">Inhalt auf Englisch, Deutsch und Französisch</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bereit zum Erkunden?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/de/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Alle Artikel ansehen →
            </Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. Alle Rechte vorbehalten.</p>
          <p className="text-gray-400 mt-2">
            Erstellt mit KI-generierten Inhalten
          </p>
        </div>
      </footer>
    </div>
  );
}
