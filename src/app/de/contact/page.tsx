import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Kontakt - ${seoConfig.siteName}`,
  description: `Kontaktieren Sie ${seoConfig.siteName}. Wir freuen uns von Ihnen zu hören!`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale="de" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen, Vorschläge oder Partnerschaftsanfragen? Wir freuen uns von Ihnen zu hören!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">E-Mail</h3>
            <p className="text-gray-600">support@smartguide-ten.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Webseite</h3>
            <p className="text-gray-600">smartguide-ten.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold text-gray-900 mb-2">Unternehmen</h3>
            <p className="text-gray-600">TechReviews Hub</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig Gestellte Fragen</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Wie kann ich ein Produkt zur Rezension einreichen?</h3>
              <p className="text-gray-600">Wir freuen uns über Produktseinreichungen! Bitte senden Sie uns eine E-Mail mit Produktdetails und Kontaktinformationen.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Akzeptieren Sie gesponserten Inhalt?</h3>
              <p className="text-gray-600">Wir wahren unsere redaktionelle Unabhängigkeit. Alle geäußerten Meinungen sind unsere eigenen.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Antwortzeit</h2>
          <p className="text-gray-700">Wir antworten in der Regel innerhalb von <strong>2-3 Werktagen</strong>.</p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Schnelllinks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/de/privacy" className="text-blue-600 hover:underline">Datenschutz</Link>
            <Link href="/de/terms" className="text-blue-600 hover:underline">AGB</Link>
            <Link href="/de/about" className="text-blue-600 hover:underline">Über Uns</Link>
            <Link href="/de/blog" className="text-blue-600 hover:underline">Blog</Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
