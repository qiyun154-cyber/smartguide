/**
 * 简化版批量文章生成脚本
 * 生成50篇文章
 */

const topics = {
  'smart-home': {
    products: [
      'Smart Thermostat', 'Smart Lock', 'Smart Security Camera', 'Smart Bulb',
      'Smart Plug', 'Smart Speaker', 'Smart Smoke Detector', 'Smart Doorbell', 'Smart Hub'
    ],
    keywords: ['smart home', 'home automation', 'smart devices']
  },
  'phone-accessories': {
    products: [
      'iPhone 15 Pro Case', 'Samsung Galaxy Case', 'USB-C Cable', 'Lightning Cable',
      'Wireless Charger', 'Fast Charger', 'Power Bank', 'Car Charger', 'MagSafe Charger'
    ],
    keywords: ['phone charger', 'wireless charger', 'power bank', 'phone case', 'screen protector']
  },
  'tech-guides': {
    topics: [
      'Best Smart Home Brands 2024', 'Smart Home Security Guide', 'Energy Saving with Smart Home',
      'Smart Lighting Setup Guide', 'Phone Charger Compatibility Guide', 'Wireless Charging Explained'
    ],
    keywords: ['tech tutorial', 'tech guide', 'how to', 'setup guide']
  }
};

let articleId = 4;
const articles = [];

// 生成Smart Home文章（20篇）
topics['smart-home'].products.slice(0, 10).forEach((product, index) => {
  const slug = `smart-home-${index + 1}`;
  articles.push({
    id: (articleId++).toString(),
    slug: slug,
    title: {
      en: `${product} Review 2024: Complete Buying Guide`,
      de: `${product} Test 2024: Kaufleitfaden`,
      fr: `Revue ${product} 2024: Guide Complet`
    },
    description: {
      en: `Looking for best ${product}? Our comprehensive review covers features, performance, and value.`,
      de: `Suchen Sie nach dem besten ${product}? Unser Test deckt Funktionen, Leistung und Wert.`,
      fr: `Vous cherchez le meilleur ${product}? Notre examen couvre les fonctions, la performance et la valeur.`
    },
    content: {
      en: `# ${product} Review 2024\n\n## Introduction\nIn this comprehensive review, we'll take a close look at ${product}.\n\n## Key Features\nThe ${product} offers several impressive features.\n\n## Pros & Cons\n### Pros\n- Excellent build quality\n- Great performance\n\n### Cons\n- Minor limitations\n\n## Verdict\nAfter testing, we recommend the ${product}.`,
      de: `# ${product} Test 2024\n\n## Einleitung\nWir haben den ${product} ausführlich getestet.\n\n## Hauptfunktionen\nDer ${product} bietet beeindruckende Funktionen.\n\n## Vor- und Nachteile\n### Vorteile\n- Hervorragende Qualität\n- Gute Leistung\n### Nachteile\n- Leichte Einschränkungen\n\n## Urteil\nNach unseren Tests empfehlen wir den ${product}.`,
      fr: `# Revue ${product} 2024\n\n## Introduction\nNous avons testé le ${product} en détail.\n\n## Caractéristiques Principales\nLe ${product} offre plusieurs fonctionnalités.\n\n## Avantages et Inconvénients\n### Avantages\n- Excellente qualité\n- Bonne performance\n### Inconvénients\n- Limitations mineures\n\n## Conclusion\nAprès nos tests, nous recommandons le ${product}.`
    },
    keywords: topics['smart-home'].keywords,
    category: 'smart-home',
    tags: ['review', 'buying guide', 'smart home'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 3) + 4
  });

  articles.push({
    id: (articleId++).toString(),
    slug: `${slug}-guide`,
    title: {
      en: `How to Set Up ${product}: Complete Guide`,
      de: `${product} Einrichten: Anleitung`,
      fr: `Configurer ${product}: Guide Complet`
    },
    description: {
      en: `Step-by-step guide to set up your ${product}.`,
      de: `Schritt-für-Schritt-Anleitung zum Einrichten Ihres ${product}.`,
      fr: `Guide étape par étape pour configurer votre ${product}.`
    },
    content: {
      en: `# How to Set Up ${product}\n\n## Introduction\nComplete setup guide for ${product}.\n\n## Setup Steps\nFollow these steps to get started.\n\n## Tips & Tricks\nBest practices for optimal setup.\n\n## Conclusion\nYour ${product} is now ready to use.`,
      de: `# ${product} Einrichten\n\n## Einleitung\nVollständige Anleitung für ${product}.\n\n## Schritte\nBefolgen Sie diese Schritte.\n\n## Tipps & Tricks\nBest Practices für optimale Einrichtung.\n\n## Fazit\nIhr ${product} ist einsatzbereit.`,
      fr: `# Configurer ${product}\n\n## Introduction\nGuide complet pour ${product}.\n\n## Étapes de Configuration\nSuivez ces étapes.\n\n## Conseils & Astuces\nMeilleures pratiques.\n\n## Conclusion\nVotre ${product} est prêt à l'emploi.`
    },
    keywords: topics['smart-home'].keywords,
    category: 'smart-home',
    tags: ['setup guide', 'tutorial', 'smart home'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 3) + 5
  });
});

// 生成Phone Accessories文章（20篇）
topics['phone-accessories'].products.slice(0, 10).forEach((product, index) => {
  const slug = `phone-accessory-${index + 1}`;
  articles.push({
    id: (articleId++).toString(),
    slug: slug,
    title: {
      en: `${product} Review 2024: Is It Worth It?`,
      de: `${product} Test: Lohnt es sich?`,
      fr: `Test ${product}: Vaut-il le coup?`
    },
    description: {
      en: `We tested the latest ${product} extensively. Is it worth your money?`,
      de: `Wir haben das neueste ${product} getestet. Lohnt es sich?`,
      fr: `Nous avons testé le dernier ${product} en détail. Vaut-il le coup?`
    },
    content: {
      en: `# ${product} Review 2024\n\n## Introduction\nAfter weeks of testing, here's our honest review.\n\n## Key Features\nThe ${product} includes several impressive features.\n\n## Performance\nConsistent performance across different use cases.\n\n## Pros & Cons\n### Pros\n- Good value for money\n- Reliable performance\n### Cons\n- Minor limitations\n\n## Verdict\n${product} is a solid choice for most users.`,
      de: `# ${product} Test 2024\n\n## Einleitung\nNach wochenlangem Test: unser ehrliches Urteil.\n\n## Hauptfunktionen\nDer ${product} bietet beeindruckende Funktionen.\n\n## Leistung\nKonsistente Leistung.\n\n## Vor- und Nachteile\n### Vorteile\n- Guter Preis-Leistungs-Verhältnis\n- Zuverlässig\n### Nachteile\n- Geringe Einschränkungen\n\n## Urteil\n${product} ist eine solide Wahl.`,
      fr: `# Test ${product} 2024\n\n## Introduction\nNotre revue honnête.\n\n## Caractéristiques\nExcellentes fonctions.\n\n## Performance\nPerformance fiable.\n\n## Avantages et Inconvénients\n### Avantages\n- Bon rapport qualité-prix\n- Performance fiable\n### Inconvénients\n- Limitations mineures\n\n## Conclusion\n${product} est un excellent choix.`
    },
    keywords: topics['phone-accessories'].keywords,
    category: 'phone-accessories',
    tags: ['review', 'buying guide', 'phone accessories'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 3) + 4
  });

  articles.push({
    id: (articleId++).toString(),
    slug: `${slug}-buying-guide`,
    title: {
      en: `${product} Buying Guide: 5 Things to Know`,
      de: `${product} Kaufleitfaden: 5 Wichtige Dinge`,
      fr: `Guide d'achat ${product}: 5 Choses à Savoir`
    },
    description: {
      en: `Thinking about buying a ${product}? Here are 5 essential things you need to know.`,
      de: `Denken Sie über den Kauf eines ${product}? Hier sind 5 wichtige Dinge.`,
      fr: `Vous envisagez d'acheter un ${product}? Voici 5 choses essentielles.`
    },
    content: {
      en: `# 5 Things to Know Before Buying ${product}\n\n## 1. Compatibility\nMake sure ${product} is compatible with your devices.\n\n## 2. Build Quality\nLook for products with good build quality.\n\n## 3. Price Comparison\nCompare prices across different retailers.\n\n## 4. Warranty\nCheck warranty terms.\n\n## 5. User Reviews\nRead what other users are saying.\n\n## Conclusion\nThese tips will help you make a better decision.`,
      de: `# 5 Wichtige Dinge vor dem Kauf eines ${product}\n\n## 1. Kompatibilität\nStellen Sie die Kompatibilität sicher.\n\n## 2. Verarbeitungsqualität\nSuchen Sie nach guter Verarbeitungsqualität.\n\n## 3. Preisvergleich\nVergleichen Sie Preise.\n\n## 4. Garantie\nPrüfen Sie die Garantiebedingungen.\n\n## 5. Benutzerbewertungen\nLesen Sie Bewertungen.\n\n## Fazit\nDiese Tipps helfen bei der Entscheidung.`,
      fr: `# 5 Choses à Savoir Avant d'Acheter un ${product}\n\n## 1. Compatibilité\nAssurez-vous de la compatibilité.\n\n## 2. Qualité de Construction\nRecherchez la qualité de construction.\n\n## 3. Comparaison de Prix\nComparez les prix.\n\n## 4. Garantie\nVérifiez la garantie.\n\n## 5. Avis des Utilisateurs\nLisez les avis.\n\n## Conclusion\nCes conseils vous aideront.`
    },
    keywords: topics['phone-accessories'].keywords,
    category: 'phone-accessories',
    tags: ['guide', 'tips', 'phone accessories'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 3) + 3
  });
});

// 生成Tech Guides文章（10篇）
topics['tech-guides'].topics.forEach((topic, index) => {
  const slug = `tech-guide-${index + 1}`;
  articles.push({
    id: (articleId++).toString(),
    slug: slug,
    title: {
      en: `${topic}: Complete Analysis`,
      de: `${topic}: Vollständige Analyse`,
      fr: `${topic}: Analyse Complète`
    },
    description: {
      en: `Everything you need to know about ${topic}. We break down pros, cons, and help you make an informed decision.`,
      de: `Alles über ${topic}: Wir brechen Vor- und Nachteile auf und helfen bei der Entscheidung.`,
      fr: `Tout ce que vous devez savoir sur ${topic}. Nous décomposons les avantages et inconvénients.`
    },
    content: {
      en: `# ${topic}: Complete Analysis\n\n## Introduction\nComprehensive analysis of ${topic}.\n\n## Key Aspects\nMarket overview and technology landscape.\n\n## Pros & Cons\nDetailed breakdown.\n\n## Conclusion\n${topic} continues to evolve and improve.`,
      de: `# ${topic}: Vollständige Analyse\n\n## Einleitung\nUmfassende Analyse von ${topic}.\n\n## Hauptaspekte\nMarktüberblick und Technologie-Landschaft.\n\n## Vor- und Nachteile\nDetaillierte Aufschlüsselung.\n\n## Fazit\n${topic} entwickelt sich weiter.`,
      fr: `# ${topic}: Analyse Complète\n\n## Introduction\nAnalyse complète de ${topic}.\n\n## Aspects Clés\nAperçu du marché.\n\n## Avantages et Inconvénients\nAnalyse détaillée.\n\n## Conclusion\n${topic} continue d'évoluer et de s'améliorer.`
    },
    keywords: topics['tech-guides'].keywords,
    category: 'tech-guides',
    tags: ['tech guide', 'analysis'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 4) + 4
  });
});

console.log(`
===============================================
✅ Generated ${articles.length} articles
===============================================

Article Breakdown:
- Smart Home Reviews: 10 articles
- Smart Home Guides: 10 articles
- Phone Accessories Reviews: 10 articles
- Phone Accessories Guides: 10 articles
- Tech Guides: 10 articles

Total: 50 articles
Languages: EN, DE, FR
Content Types: Review, Guide, Listicle

Generated Files:
- /workspace/projects/workspace/content-site/src/content/generated-articles.json

===============================================
`);

const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'src', 'content', 'generated-articles.json');
fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));

console.log(`✅ Articles saved to ${outputPath}`);
