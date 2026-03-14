import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Contact Us - ${seoConfig.siteName}`,
  description: `Get in touch with ${seoConfig.siteName}. We'd love to hear from you!`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale="en" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or partnership inquiries? We'd love to hear from you!
          </p>
        </section>

        {/* Contact Methods */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">support@smartguide-ten.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
            <p className="text-gray-600">smartguide-ten.vercel.app</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-semibold text-gray-900 mb-2">Business</h3>
            <p className="text-gray-600">TechReviews Hub</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How can I submit a product for review?</h3>
              <p className="text-gray-600">
                We welcome product submissions! Please email us at support@smartguide-ten.vercel.app with product details, specifications, and your contact information.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you accept sponsored content?</h3>
              <p className="text-gray-600">
                We maintain editorial independence. While we may work with brands, all opinions expressed are our own and honest.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How can I advertise on your site?</h3>
              <p className="text-gray-600">
                We display Google AdSense ads. For partnership opportunities, please contact us via email.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I republish your content?</h3>
              <p className="text-gray-600">
                Our content is protected by copyright. Please contact us for permission before republishing any content from our site.
              </p>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Response Time</h2>
          <p className="text-gray-700">
            We typically respond to inquiries within <strong>2-3 business days</strong>. Thank you for your patience!
          </p>
        </section>

        {/* Related Links */}
        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/en/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
            <Link href="/en/about" className="text-blue-600 hover:underline">About Us</Link>
            <Link href="/en/blog" className="text-blue-600 hover:underline">Blog</Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
