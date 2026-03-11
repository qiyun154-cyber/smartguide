import { getArticleBySlug, getAllArticles } from '@/content/data';
import { seoConfig } from '@/content/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import AdBanner from '@/components/AdBanner';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, 'de');

  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.createdAt,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, 'de');

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Language Switcher */}
      <Header locale="de" siteName={seoConfig.siteName} />

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
          <span>{new Date(article.createdAt).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <span>{article.readingTime} Min. Lesezeit</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Top Ad */}
          <div className="my-6">
            <AdBanner slot="9876543210" style={{ display: 'block', textAlign: 'center' }} />
          </div>
          <ReactMarkdown>{article.content}</ReactMarkdown>
          {/* Bottom Ad */}
          <div className="my-6">
            <AdBanner slot="9876543211" style={{ display: 'block', textAlign: 'center' }} />
          </div>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-gray-500">Content Creator</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Verwandte Artikel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getAllArticles()
              .filter((a) => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/de/blog/${related.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold">{related.title.de}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {related.readingTime} Min. Lesezeit
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 {seoConfig.siteName}. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
