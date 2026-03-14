import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `About Us - ${seoConfig.siteName}`,
  description: `Learn about ${seoConfig.siteName}, our mission, values, and the team behind the reviews.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="en" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">About TechReviews Hub</h1>
          <p className="text-xl text-blue-100 mb-6">
            Your Trusted Source for Smart Home & Phone Accessories Reviews
          </p>
          <p className="text-blue-200">
            We're passionate about helping you find the best products for your tech lifestyle.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At TechReviews Hub, we believe in providing honest, comprehensive, and actionable reviews to help you make informed decisions about smart home devices and phone accessories. Our goal is to be your trusted guide in the ever-evolving world of technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900">Honest Reviews</h3>
              <p className="text-sm text-gray-600">Unbiased product assessments</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-900">In-Depth Analysis</h3>
              <p className="text-sm text-gray-600">Detailed product testing</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900">Actionable Insights</h3>
              <p className="text-sm text-gray-600">Practical buying guides</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Home</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Smart locks, cameras, lighting, thermostats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Home automation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Security sensors and devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Accessories</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Cases, screen protectors, chargers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Headphones, earbuds, speakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Power banks, mounts, stands</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Tech Guides</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Setup tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Troubleshooting guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Optimization tips</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Language</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>English reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>German (Deutsch) content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>French (Français) articles</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose TechReviews Hub?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Comprehensive Coverage</h3>
                <p className="text-gray-600">We review hundreds of products across multiple categories</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Honest & Unbiased</h3>
                <p className="text-gray-600">Real-world testing with no sponsored bias</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Expert Team</h3>
                <p className="text-gray-600">Tech enthusiasts with years of experience</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Multi-Language Support</h3>
                <p className="text-gray-600">Content in English, German, and French</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Explore?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse All Articles →
            </Link>
            <Link
              href="/en/category/smart-home"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Smart Home Guides
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Made with ❤️ for tech enthusiasts
          </p>
        </div>
      </footer>
    </div>
  );
}
