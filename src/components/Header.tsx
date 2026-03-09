'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  locale: string;
  siteName: string;
}

const navLabels: Record<string, { home: string; blog: string }> = {
  en: { home: 'Home', blog: 'Blog' },
  de: { home: 'Startseite', blog: 'Blog' },
  fr: { home: 'Accueil', blog: 'Blog' },
};

export default function Header({ locale, siteName }: HeaderProps) {
  const pathname = usePathname();
  const basePath = `/${locale}`;
  const labels = navLabels[locale] || navLabels.en;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={basePath} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              TR
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={basePath}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                pathname === basePath
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {labels.home}
            </Link>
            <Link
              href={`${basePath}/blog`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                pathname?.includes('/blog')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {labels.blog}
            </Link>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
