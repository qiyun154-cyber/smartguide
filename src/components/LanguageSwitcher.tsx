'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
        <span className="text-lg">🌍</span>
        <span className="text-sm text-gray-700">Language</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {languages.map((lang) => {
            // Get the path without locale prefix
            const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '/') || '/';
            // Create new path with selected locale
            const newPath = `/${lang.code}${pathWithoutLocale}`;

            return (
              <Link
                key={lang.code}
                href={newPath}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {lang.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {lang.code.toUpperCase()}
                  </div>
                </div>
                {pathname.startsWith(`/${lang.code}`) && (
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414l8-8a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
