import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: `Terms of Service - ${seoConfig.siteName}`,
  description: `Terms of Service for ${seoConfig.siteName}. By using our website, you agree to these terms.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Language Switcher */}
      <Header locale="en" siteName={seoConfig.siteName} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Terms of Service</li>
          </ol>
        </nav>

        {/* Content */}
        <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <h1>Terms of Service</h1>
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <section className="mb-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using {seoConfig.siteName}, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2>3. User Accounts</h2>
            <ul>
              <li><strong>Account Creation:</strong> You may be required to create an account to access certain features of our website.</li>
              <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              <li><strong>Account Termination:</strong> We may terminate or suspend your account at any time for violation of these terms or for any other reason at our sole discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. Website Content</h2>
            <ul>
              <li><strong>Content Ownership:</strong> All content on {seoConfig.siteName}, including text, graphics, logos, and images, is owned by us or our licensors.</li>
              <li><strong>Content License:</strong> All content is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</li>
              <li><strong>User-Generated Content:</strong> By posting content to our website, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>5. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Using our website for any illegal or unauthorized purpose</li>
              <li>Attempting to gain unauthorized access to our website or any related systems</li>
              <li>Interfering with or disrupting the website or any servers or networks connected to the website</li>
              <li>Violating any applicable local, state, national, or international law</li>
              <li>Harassing, abusing, or harming other users</li>
              <li>Posting or transmitting any content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
              <li>Posting or transmitting any content that infringes upon the intellectual property rights of any third party</li>
              <li>Clicking on your own advertisements or encouraging others to do so</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>6. Google AdSense</h2>
            <ul>
              <li><strong>Advertisement Display:</strong> We display advertisements through Google AdSense on our website.</li>
              <li><strong>AdSense Policy:</strong> Use of our website is subject to Google AdSense policies. By using our website, you agree to comply with these policies.</li>
              <li><strong>No Click Fraud:</strong> You agree not to click on advertisements solely for the purpose of generating revenue for us or the advertiser. This includes clicking on your own advertisements.</li>
              <li><strong>No Artificial Traffic:</strong> You agree not to use any artificial, fraudulent, or deceptive means to generate traffic to our website or to click on advertisements.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>7. Disclaimers and Warranties</h2>
            <ul>
              <li><strong>Content Accuracy:</strong> We strive to provide accurate and up-to-date information, but we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information contained on our website.</li>
              <li><strong>No Endorsement:</strong> Links to third-party websites are provided as a convenience and do not constitute endorsement of those websites or their content.</li>
              <li><strong>Technical Issues:</strong> We are not responsible for any technical issues, errors, or interruptions that may occur while using our website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {seoConfig.siteName}, its affiliates, and their respective officers, directors, employees, agents, contractors, licensors, suppliers, successors, and assigns shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use or inability to use the website.
            </p>
          </section>

          <section className="mb-8">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {seoConfig.siteName}, its affiliates, and their respective officers, directors, employees, agents, contractors, licensors, suppliers, successors, and assigns from any and all claims, damages, losses, costs, and expenses arising from or related to your use or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2>10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., "the United States" or "your country/state"], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2>11. Severability</h2>
            <p>
              If any provision of these terms is found to be unlawful, void, or unenforceable, such provision shall be severed from the remaining provisions, which shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> support@smartguide-ten.vercel.app</p>
              <p className="mb-2"><strong>Website:</strong> {seoConfig.siteName}</p>
              <p><strong>Company:</strong> TechReviews Hub</p>
            </div>
          </section>

          <section className="bg-blue-50 p-4 rounded-lg">
            <h3 className="mt-0">Important Notice</h3>
            <p>
              Please review these Terms of Service carefully. Your continued use of {seoConfig.siteName} after any changes to these terms constitutes acceptance of the modified terms.
            </p>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {seoConfig.siteName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
