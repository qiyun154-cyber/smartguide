/**
 * 内容数据 - Niche: Smart Home / 3C Accessories
 * 这个文件包含网站的初始内容
 * 后续会通过AI自动生成更多内容
 */

// 直接require JSON文件和类型
const fs = require('fs');
const path = require('path');
const generatedArticlesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'generated-articles.json'), 'utf8')
);

const {
  Article,
  ArticleMultilingual,
  Category
}: typeof types;

// 内部存储类型（多语言）
type StoredArticle = ArticleMultilingual;

// 分类
export const categories: Category[] = [
  {
    id: 'smart-home',
    slug: 'smart-home',
    name: {
      en: 'Smart Home',
      de: 'Smart Home',
      fr: 'Maison Connectée',
    },
    description: {
      en: 'Latest smart home technology reviews and guides',
      de: 'Neueste Smart-Home-Technologie Tests und Anleitungen',
      fr: 'Dernières revues et guides technologie maison connectée',
    },
  },
  {
    id: 'phone-accessories',
    slug: 'phone-accessories',
    name: {
      en: 'Phone Accessories',
      de: 'Handyzubehör',
      fr: 'Accessoires Téléphone',
    },
    description: {
      en: 'Best phone accessories reviews and buying guides',
      de: 'Bestes Handyzubehör Tests und Kaufanleitungen',
      fr: 'Meilleurs accessoires téléphone revues et guides',
    },
  },
  {
    id: 'tech-guides',
    slug: 'tech-guides',
    name: {
      en: 'Tech Guides',
      de: 'Technik Anleitungen',
      fr: 'Guides Tech',
    },
    description: {
      en: 'Technical tutorials and how-to guides',
      de: 'Technische Tutorials und Anleitungen',
      fr: 'Tutoriels techniques et guides pratiques',
    },
  },
];

// 示例文章 - 英文
export const articles: StoredArticle[] = [
  {
    id: '1',
    slug: 'best-smart-home-devices-2024',
    title: {
      en: 'Best Smart Home Devices 2024: Complete Buying Guide',
      de: 'Beste Smart Home Geräte 2024: Kompletter Kaufleitfaden',
      fr: 'Meilleurs Appareils Maison Connectée 2024: Guide Complet',
    },
    description: {
      en: 'Discover best smart home devices for 2024. Our comprehensive guide covers everything from smart speakers to security systems.',
      de: 'Entdecken Sie die besten Smart Home Geräte für 2024. Unser umfassender Leitfaden behandelt alles von intelligenten Lautsprechern bis zu Sicherheitssystemen.',
      fr: 'Découvrez les meilleurs appareils maison connectée pour 2024. Notre guide complet couvre tout des enceintes intelligentes aux systèmes de sécurité.',
    },
    content: {
      en: `# Best Smart Home Devices 2024

## Introduction

Smart home technology has evolved dramatically in recent years. Whether you're looking to automate your lighting, secure your home, or create a completely connected living space, this guide will help you make informed decisions.

## Top Smart Home Devices

### 1. Smart Speakers
- **Amazon Echo (4th Gen)**: Best overall
- **Google Nest Audio**: Best for Google ecosystem
- **Apple HomePod mini**: Best for Apple users

### 2. Smart Lighting
- **Philips Hue**: Best overall
- **LIFX**: Best brightness
- **Nanoleaf**: Best for RGB enthusiasts

### 3. Smart Security
- **Ring Video Doorbell**: Best doorbell camera
- **Arlo Pro 5**: Best security camera system
- **Nest Protect**: Best smart smoke detector

## Buying Tips

1. **Check compatibility**: Ensure devices work with your preferred ecosystem
2. **Start small**: Begin with one category and expand
3. **Consider future needs**: Choose expandable

Investing in smart home devices can significantly improve your quality of life. Start with basics and expand as you become more comfortable with technology.`,
      de: `# Beste Smart Home Geräte 2024

## Einleitung

Die Smart-Home-Technologie hat sich in den letzten Jahren dramatisch weiterentwickelt. Ob Sie Ihre Beleuchtung automatisieren, Ihr Haus sichern oder einen vollständig verbundenen Wohnraum schaffen möchten – dieser Leitfaden hilft Ihnen, informierte Entscheidungen zu treffen.

## Top Smart Home Geräte

### 1. Intelligente Lautsprecher
- **Amazon Echo (4. Gen)**: Am besten insgesamt
- **Google Nest Audio**: Am besten für Google-Ökosystem
- **Apple HomePod mini**: Am besten für Apple-Nutzer

### 2. Intelligente Beleuchtung
- **Philips Hue**: Am besten insgesamt
- **LIFX**: Beste Helligkeit
- **Nanoleaf**: Am besten für RGB-Enthusiasten

## Kauftipps

1. **Kompatibilität prüfen**: Stellen Sie sicher, dass Geräte mit Ihrem bevorzugten Ökosystem funktionieren
2. **Klein anfangen**: Beginnen Sie mit einer Kategorie und erweitern Sie
3. **Zukünftige Bedürfnisse berücksichtigen**: Wählen Sie erweiterbare Systeme`,
      fr: `# Meilleurs Appareils Maison Connectée 2024

## Introduction

La technologie maison connectée a considérablement évolué ces dernières années. Que vous cherchiez à automatiser votre éclairage, sécuriser votre maison ou créer un espace de vie entièrement connecté, ce guide vous aidera à prendre des décisions éclairées.

## Top Appareils Maison Connectée

### 1. Enceintes Intelligentes
- **Amazon Echo (4e gén)**: Meilleur dans l'ensemble
- **Google Nest Audio**: Meilleur pour l'écosystème Google
- **Apple HomePod mini**: Meilleur pour les utilisateurs Apple

### 2. Éclairage Intelligent
- **Philips Hue**: Meilleur dans l'ensemble
- **LIFX**: Meilleure luminosité
- **Nanoleaf**: Meilleur pour les passionnés RGB

## Conseils d'Achat

1. **Vérifiez la compatibilité**: Assurez-vous que les appareils fonctionnent avec votre écosystème préféré
2. **Commencez petit**: Commencez par une catégorie et expandez
3. **Considérez les besoins futurs**: Choisissez des systèmes extensibles`,
    },
    keywords: ['smart home', 'smart devices', 'home automation', '2024'],
    category: 'smart-home',
    tags: ['smart home', 'buying guide', 'reviews'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    author: 'ContentAI',
    readingTime: 5,
  },
  {
    id: '2',
    slug: 'best-phone-chargers-2024',
    title: {
      en: 'Best Phone Chargers 2024: Fast Charging Guide',
      de: 'Beste Handyladegeräte 2024: Schnellladeanleitung',
      fr: 'Meilleurs Chargeurs Téléphone 2024: Guide Charge Rapide',
    },
    description: {
      en: 'Find best phone chargers for fast and efficient charging. We review wall chargers, wireless chargers, and car chargers.',
      de: 'Finden Sie die besten Handyladegeräte für schnelles und effizientes Laden. Wir testen Wandladegeräte, kabellose Ladegeräte und Autoladegeräte.',
      fr: 'Trouvez les meilleurs chargeurs téléphone pour une charge rapide et efficace. Nous testons les chargeurs secteur, sans fil et voiture.',
    },
    content: {
      en: `# Best Phone Chargers 2024

## Why Fast Charging Matters

In today's fast-paced world, having a reliable charger is essential. Whether you're at home, in office, or on the go, => right charger can make a big difference.

## Types of Chargers

### Wall Chargers
Best for: Home and office use
- **Anker PowerPort III**: Best overall
- **Samsung 45W**: Best for Samsung users
- **Apple 35W**: Best for Apple users

### Wireless Chargers
Best for: Desk and nightstand
- **Belkin Boost Charge**: Best overall
- **Samsung Wireless Charger**: Best for Samsung
- **Mophie Wireless**: Best build quality

### Car Chargers
Best for: On-the-go charging
- **Anker Road Warrior**: Best overall
- **Scosche PowerVolt**: Best value

## Fast Charging Standards

- **USB-PD**: Universal standard
- **Quick Charge**: Qualcomm standard
- **MagSafe**: Apple wireless standard

## Buying Tips

1. Check your phone's supported standards
2. Consider wattage needs
3. Look for certified products`,
      de: `# Beste Handyladegeräte 2024

## Warum Schnellladen Wichtig Ist

In der heutigen schnelllebigen Welt ist ein zuverlässiges Ladegerät unerlässlich.

## Arten von Ladegeräten

### Wandladegeräte
Am besten für: Zuhause und Büro
- **Anker PowerPort III**: Am besten insgesamt
- **Samsung 45W**: Am besten für Samsung-Nutzer

### Kabellose Ladegeräte
Am besten für: Schreibtisch und Nachttisch
- **Belkin Boost Charge**: Am besten insgesamt`,
      fr: `# Meilleurs Chargeurs Téléphone 2024

## Pourquoi la Charge Rapide Est Importante

Dans le monde rapide d'aujourd'hui, avoir un chargeur fiable est essentiel.

## Types de Chargeurs

### Chargeurs Secteur
Idéal pour: Maison et bureau
- **Anker PowerPort III**: Meilleur dans l'ensemble

### Chargeurs Sans Fil
Idéal pour: Bureau et table de nuit
- **Belkin Boost Charge**: Meilleur dans l'ensemble`,
    },
    keywords: ['phone charger', 'fast charger', 'wireless charger', '2024'],
    category: 'phone-accessories',
    tags: ['charger', 'fast charging', 'review'],
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
    author: 'ContentAI',
    readingTime: 4,
  },
  {
    id: '3',
    slug: 'setup-smart-home-beginner-guide',
    title: {
      en: 'Smart Home Beginner Guide: Getting Started',
      de: 'Smart Home Anfängerleitfaden: Erste Schritte',
      fr: 'Guide Débutant Maison Connectée: Pour Commencer',
    },
    description: {
      en: 'New to smart home? This comprehensive beginner guide will walk you through everything you need to know to get started.',
      de: 'Neu bei Smart Home? Dieser umfassende Anfängerleitfaden führt Sie durch alles, was Sie wissen müssen.',
      fr: 'Nouveau dans la maison connectée? Ce guide complet vous accompagnera dans tout ce que vous devez savoir.',
    },
    content: {
      en: `# Smart Home Beginner Guide

## What is a Smart Home?

A smart home uses internet-connected devices to enable remote management of appliances, lighting, heating, and other systems.

## Getting Started

### Step 1: Choose Your Ecosystem
- Amazon Alexa
- Google Home
- Apple HomeKit

### Step 2: Start with Basics
1. Smart speaker or display
2. Smart bulbs or plugs
3. Smart thermostat

### Step 3: Expand Gradually
- Add security devices
- Install smart sensors
- Create automations

## Essential Devices for Beginners

| Device | Purpose | Budget |
|--------|---------|--------|
| Smart Speaker | Control center | $30-100 |
| Smart Bulb | Lighting | $10-30 |
| Smart Plug | Automation | $10-20 |

## Tips for Success

1. **Start simple**: Don't overcomplicate initially
2. **Think about compatibility**: Choose devices that work together
3. **Plan for future**: Buy expandable systems`,
      de: `# Smart Home Anfängerleitfaden

## Was ist ein Smart Home?

Ein Smart Home nutzt internetverbundene Geräte zur Fernverwaltung.

## Erste Schritte

### Schritt 1: Wählen Sie Ihr Ökosystem
- Amazon Alexa
- Google Home
- Apple HomeKit

### Schritt 2: Beginnen Sie mit den Grundlagen
1. Intelligenter Lautsprecher
2. Intelligente Glühbirnen
3. Intelligenter Thermostat`,
      fr: `# Guide Débutant Maison Connectée

## Qu'est-ce qu'une Maison Connectée?

Une maison connectée utilise des appareils connectés à Internet.

## Pour Commencer

### Étape 1: Choisissez Votre Écosystème
- Amazon Alexa
- Google Home
- Apple HomeKit

### Étape 2: Commencez par les Bases
1. Enceintes intelligentes
2. Ampoules connectées
3. Thermostat intelligent`,
    },
    keywords: ['smart home', 'beginner guide', 'getting started', 'setup'],
    category: 'smart-home',
    tags: ['beginner', 'tutorial', 'getting started'],
    createdAt: '2024-01-17T10:00:00Z',
    updatedAt: '2024-01-17T10:00:00Z',
    author: 'ContentAI',
    readingTime: 6,
  },
];

// 获取所有文章 - 返回原始多语言数据
export function getAllArticles(): StoredArticle[] {
  return [...articles, ...generatedArticlesData as StoredArticle[]];
}

// 按语言获取文章 - 返回单语言版本
export function getArticlesByLocale(locale: string): Article[] {
  return articles.map((article): Article => ({
    id: article.id,
    slug: article.slug,
    title: article.title[locale] || article.title.en,
    description: article.description[locale] || article.description.en,
    content: article.content[locale] || article.content.en,
    keywords: article.keywords,
    category: article.category,
    tags: article.tags,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: article.author,
    featuredImage: article.featuredImage,
    readingTime: article.readingTime,
  }));
}

// 按分类获取文章
export function getArticlesByCategory(categorySlug: string, locale: string = 'en'): Article[] {
  return articles
    .filter(article => article.category === categorySlug)
    .map((article): Article => ({
      id: article.id,
      slug: article.slug,
      title: article.title[locale] || article.title.en,
      description: article.description[locale] || article.description.en,
      content: article.content[locale] || article.content.en,
      keywords: article.keyword,
      category: article.category,
      tags: article.tags,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      author: article.author,
      featuredImage: article.featuredImage,
      readingTime: article.readingTime,
    }));
}

// 按slug获取单篇文章
export function getArticleBySlug(slug: string, locale: string = 'en'): Article | undefined {
  const article = articles.find(a => a.slug === slug);
  if (!article) return undefined;
  
  return {
    id: article.id,
    slug: article.slug,
    title: article.title[locale] || article.title.en,
    description: article.description[locale] || article.description.en,
    content: article.content[locale] || article.content.en,
    keywords: article.keywords,
    category: article.category,
    tags: article.tags,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: article.author,
    featuredImage: article.featuredImage,
    readingTime: article.readingTime,
  };
}

// 获取所有分类
export function getAllCategories(): Category[] {
  return categories;
}
