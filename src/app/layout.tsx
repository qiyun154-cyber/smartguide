import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechReviews Hub - Smart Home & Phone Accessories Reviews",
  description: "Latest reviews, guides, and tips for smart home devices and phone accessories. Discover the best products in 2024.",
  keywords: "smart home, phone accessories, tech reviews, buying guides",
  authors: [{ name: "TechReviews Hub" }],
  creator: "TechReviews Hub",
  publisher: "TechReviews Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TechReviews Hub - Smart Home & Phone Accessories Reviews",
    description: "Latest reviews, guides, and tips for smart home devices and phone accessories.",
    type: "website",
    locale: "en_US",
    siteName: "TechReviews Hub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="5Ag60hA9dsb23_sj_MqjDYRETTjbduJqwPETQ2_Z6FU" />
        
        {/* AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9879728423164198"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
