import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Contactez-nous - ${seoConfig.siteName}`,
  description: `Contactez ${seoConfig.siteName}. Nous aimerions avoir de vos nouvelles!`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale="fr" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions, des suggestions ou des demandes de partenariat? Nous aimerions avoir de vos nouvelles!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600">support@smartguide-den.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Site Web</h3>
            <p className="text-gray-600">smartguide-ten.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold text-gray-900 mb-2">Entreprise</h3>
            <p className="text-gray-600">TechReviews Hub</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquemment Posées</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Comment puis-je soumettre un produit pour revue?</h3>
              <p className="text-gray-600">Nous accueillons les soumissions de produits! Veuillez nous envoyer un e-mail avec les détails du produit.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Acceptez-vous du contenu sponsorisé?</h3>
              <p className="text-gray-600">Nous maintenons notre indépendance éditoriale. Toutes les opinions exprimées sont les nôtres.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Temps de Réponse</h2>
          <p className="text-gray-700">Nous répondons généralement dans un délai de <strong>2-3 jours ouvrables</strong>.</p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Liens Rapides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fr/privacy" className="text-blue-600 hover:underline">Confidentialité</Link>
            <Link href="/fr/terms" className="text-blue-600 hover:underline">CGU</Link>
            <Link href="/fr/about" className="text-blue-600 hover:underline">À Propos</Link>
            <Link href="/fr/blog" className="text-blue-600 hover:underline">Blog</Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
