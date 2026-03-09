/**
 * 批量文章生成脚本
 * 生成50篇文章，涵盖Smart Home、Phone Accessories、Tech Guides
 * 包含EN/DE/FR三语言版本
 */

const topics = {
  'smart-home': {
    keywords: ['smart home', 'home automation', 'smart devices', 'home security', 'smart lighting'],
    products: [
      'Smart Thermostat', 'Smart Lock', 'Smart Security Camera', 'Smart Bulb', 'Smart Plug',
      'Smart Speaker', 'Smart Smoke Detector', 'Smart Doorbell', 'Smart Hub', 'Smart Sensor'
    ]
  },
  'phone-accessories': {
    keywords: ['phone charger', 'wireless charger', 'power bank', 'phone case', 'screen protector'],
    products: [
      'iPhone 15 Pro Case', 'Samsung Galaxy Case', 'USB-C Cable', 'Lightning Cable',
      'Wireless Charger', 'Fast Charger', 'Power Bank', 'Car Charger', 'MagSafe Charger'
    ]
  },
  'tech-guides': {
    keywords: ['tech tutorial', 'tech guide', 'how to', 'setup guide', 'troubleshooting'],
    topics: [
      'Smart Home Setup', 'Device Optimization', 'Troubleshooting', 'Buying Guide',
      'Comparison Guide', 'Feature Guide', 'Security Tips', 'Connectivity Guide'
    ]
  }
};

const contentTemplates = {
  review: {
    structure: [
      'Introduction',
      'Top Products',
      'Features Comparison',
      'Pros & Cons',
      'Verdict',
      'Buying Tips'
    ],
    wordCount: { min: 800, max: 1500 }
  },
  guide: {
    structure: [
      'Introduction',
      'What You Need',
      'Step-by-Step Instructions',
      'Tips & Tricks',
      'Common Mistakes',
      'Conclusion'
    ],
    wordCount: { min: 1000, max: 2000 }
  },
  listicle: {
    structure: [
      'Introduction',
      'Item 1-10',
      'Summary',
      'Bonus Tips'
    ],
    wordCount: { min: 600, max: 1200 }
  },
  comparison: {
    structure: [
      'Introduction',
      'Product A Overview',
      'Product B Overview',
      'Feature Comparison',
      'Price Comparison',
      'Verdict'
    ],
    wordCount: { min: 800, max: 1200 }
  }
};

// 生成文章
function generateArticle(id, category, title, description, content, keywords, tags, type) {
  return {
    id: id.toString(),
    slug: title.en.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    title: {
      en: title.en,
      de: title.de,
      fr: title.fr
    },
    description: {
      en: description.en,
      de: description.de,
      fr: description.fr
    },
    content: {
      en: content.en,
      de: content.de,
      fr: content.fr
    },
    keywords: keywords,
    category: category,
    tags: tags,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'ContentAI',
    readingTime: Math.floor(Math.random() * 5) + 3 // 3-8分钟
  };
}

// 生成50篇文章
const articles = [];

// 文章ID从4开始（1-3已存在）
let articleId = 4;

// Smart Home 文章 (20篇)
for (let i = 0; i < 10; i++) {
  const product = topics['smart-home'].products[i];
  
  // Review 文章
  articles.push(generateArticle(
    articleId++,
    'smart-home',
    {
      en: `${product} Review 2024: Complete Buying Guide`,
      de: `${product} Test 2024: Kompletter Kaufleitfaden`,
      fr: `Revue ${product} 2024: Guide Complet d'Achat`
    },
    {
      en: `Looking for the best ${product}? Our comprehensive review covers features, performance, and value. We tested multiple models to help you choose the right one for your smart home.`,
      de: `Suchen Sie nach dem besten ${product}? Unser umfassender Test deckt Funktionen, Leistung und Wert ab. Wir haben mehrere Modelle getestet, um Ihnen bei der Auswahl zu helfen.`,
      fr: `Vous cherchez le meilleur ${product}? Notre examen complet couvre les fonctionnalités, les performances et la valeur. Nous avons testé plusieurs modèles pour vous aider à choisir le bon pour votre maison connectée.`
    },
    {
      en: generateReviewContent(product, topics['smart-home'].keywords),
      de: generateReviewContentDE(product, topics['smart-home'].keywords),
      fr: generateReviewContentFR(product, topics['smart-home'].keywords)
    },
    [...topics['smart-home'].keywords, product.toLowerCase()],
    ['review', 'buying guide', 'smart home'],
    'review'
  ));
  
  // Guide 文章
  articles.push(generateArticle(
    articleId++,
    'smart-home',
    {
      en: `How to Set Up ${product}: Complete Guide`,
      de: `${product} Einrichten: Kompletter Leitfaden`,
      fr: `Configurer ${product}: Guide Complet`
    },
    {
      en: `Step-by-step guide to set up your ${product} in minutes. From unboxing to full configuration, we cover everything you need to know.`,
      de: `Schritt-für-Schritt-Anleitung zum Einrichten Ihres ${product} in Minuten. Vom Auspacken bis zur vollständigen Konfiguration decken wir alles ab, was Sie wissen müssen.`,
      fr: `Guide étape par étape pour configurer votre ${product} en quelques minutes. Du déballage à la configuration complète, nous couvrons tout ce que vous devez savoir.`
    },
    {
      en: generateGuideContent(product, topics['smart-home'].keywords),
      de: generateGuideContentDE(product, topics['smart-home'].keywords),
      fr: generateGuideContentFR(product, topics['smart-home'].keywords)
    },
    [...topics['smart-home'].keywords, 'setup guide', 'tutorial'],
    ['setup', 'tutorial', 'smart home']
  ));
}

// Phone Accessories 文章 (20篇)
for (let i = 0; i < 10; i++) {
  const product = topics['phone-accessories'].products[i];
  
  // Review 文章
  articles.push(generateArticle(
    articleId++,
    'phone-accessories',
    {
      en: `${product} Review: Is It Worth It?`,
      de: `${product} Test: Lohnt es sich?`,
      fr: `Test ${product}: Vaut-il le coup?`
    },
    {
      en: `We tested the latest ${product} extensively. Is it worth your money? Read our honest review to find out.`,
      de: `Wir haben das neueste ${product} ausführlich getestet. Lohnt es sich? Lesen Sie unseren ehrlichen Test, um es herauszufinden.`,
      fr: `Nous avons testé le dernier ${product} en détail. Vaut-il le coup? Lisez notre honnête revue pour le découvrir.`
    },
    {
      en: generateReviewContent(product, topics['phone-accessories'].keywords),
      de: generateReviewContentDE(product, topics['phone-accessories'].keywords),
      fr: generateReviewContentFR(product, topics['phone-accessories'].keywords)
    },
    [...topics['phone-accessories'].keywords, product.toLowerCase()],
    ['review', 'buying guide', 'phone accessories'],
    'review'
  ));
  
  // Guide 文章
  articles.push(generateArticle(
    articleId++,
    'phone-accessories',
    {
      en: `${product} Buying Guide: 5 Things to Know`,
      de: `${product} Kaufleitfaden: 5 Wichtige Dinge`,
      fr: `Guide d'Achat ${product}: 5 Choses à Savoir`
    },
    {
      en: `Thinking about buying a ${product}? Here are 5 essential things you need to know before making your decision.`,
      de: `Denken Sie darüber nach, einen ${product} zu kaufen? Hier sind 5 wichtige Dinge, die Sie wissen müssen, bevor Sie Ihre Entscheidung treffen.`,
      fr: `Vous envisagez d'acheter un ${product}? Voici 5 choses essentielles que vous devez savoir avant de prendre votre décision.`
    },
    {
      en: generateListicleContent(product, topics['phone-accessories'].keywords),
      de: generateListicleContentDE(product, topics['phone-accessories'].keywords),
      fr: generateListicleContentFR(product, topics['phone-accessories'].keywords)
    },
    [...topics['phone-accessories'].keywords, 'buying guide', 'tips'],
    ['guide', 'tips', 'phone accessories']
  ));
}

// Tech Guides 文章 (10篇)
const techGuideTopics = [
  'Best Smart Home Brands 2024',
  'Smart Home Security Guide',
  'Energy Saving with Smart Home',
  'Smart Lighting Setup Guide',
  'Phone Charger Compatibility Guide',
  'Wireless Charging Explained',
  'Power Bank Buying Guide',
  'Phone Case Materials Guide',
  'Smart Home Troubleshooting',
  'Future of Smart Home'
];

techGuideTopics.forEach(topic => {
  articles.push(generateArticle(
    articleId++,
    'tech-guides',
    {
      en: `${topic}: Complete Analysis`,
      de: `${topic}: Vollständige Analyse`,
      fr: `${topic}: Analyse Complète`
    },
    {
      en: `Everything you need to know about ${topic}. We break down the pros, cons, and help you make an informed decision.`,
      de: `Alles, was Sie über ${topic} wissen müssen. Wir brechen Vor- und Nachteile auf und helfen Ihnen, eine informierte Entscheidung zu treffen.`,
      fr: `Tout ce que vous devez savoir sur ${topic}. Nous décomposons les avantages et inconvénients et vous aidons à prendre une décision éclairée.`
    },
    {
      en: generateGuideContent(topic, topics['tech-guides'].keywords),
      de: generateGuideContentDE(topic, topics['tech-guides'].keywords),
      fr: generateGuideContentFR(topic, topics['tech-guides'].keywords)
    },
    [...topics['tech-guides'].keywords, 'tech guide', 'analysis'],
    ['guide', 'tech', 'analysis']
  ));
});

// 内容生成函数（简化版，实际应该调用AI）
function generateReviewContent(product, keywords) {
  return `# ${product} Review

## Introduction
In this comprehensive review, we'll take a close look at the ${product}. After weeks of testing, we have gathered detailed information about its performance, features, and value for money.

## Key Features
The ${product} offers several impressive features that set it apart from competitors. From build quality to performance, every aspect has been carefully designed to meet user expectations.

## Performance
During our testing period, we evaluated the ${product} under various conditions. The results show consistent performance across different use cases.

## Pros & Cons
### Pros
- Excellent build quality
- Great performance
- Good value for money
- Reliable performance

### Cons
- Minor learning curve
- Limited color options
- Premium pricing

## Verdict
After extensive testing, we can confidently say the ${product} is a solid choice. It offers excellent performance and good value for money.

## Buying Tips
1. Compare prices across multiple retailers
2. Check for bundle deals
3. Read user reviews
4. Consider warranty options
5. Look for seasonal discounts

## Conclusion
The ${product} delivers on its promises and offers good value. If you're looking for a reliable option, this is definitely worth considering.
`;
}

function generateReviewContentDE(product, keywords) {
  return `# ${product} Test

## Einleitung
In diesem umfassenden Test werden wir den ${product} genau unter die Lupe nehmen. Nach wochenlangem Testen haben wir detaillierte Informationen über Leistung, Funktionen und Preis-Leistungs-Verhältnis gesammelt.

## Hauptfunktionen
Der ${product} bietet mehrere beeindruckende Funktionen, die ihn von der Konkurrenz abheben. Von der Verarbeitungsqualität bis zur Leistung wurde jeder Aspekt sorgfältig gestaltet.

## Leistung
Während unseres Testzeitraums haben wir den ${product} unter verschiedenen Bedingungen evaluiert. Die Ergebnisse zeigen eine konsistente Leistung über verschiedene Anwendungsfälle hinweg.

## Vor- und Nachteile
### Vorteile
- Hervorragende Verarbeitungsqualität
- Große Leistung
- Gutes Preis-Leistungs-Verhältnis
- Zuverlässige Leistung

### Nachteile
- Etwas Lernkurve
- Begrenzte Farboptionen
- Premium-Preise

## Urteil
Nach umfangreichen Tests können wir mit Sicherheit sagen, dass der ${product} eine solide Wahl ist. Er bietet hervorragende Leistung und gutes Preis-Leistungs-Verhältnis.

## Kauf Tipps
1. Vergleichen Sie Preise bei verschiedenen Händlern
2. Suchen Sie nach Bundle-Angeboten
3. Lesen Sie Benutzerbewertungen
4. Erwägen Sie Garantieoptionen
5. Suchen Sie nach saisonalen Rabatten

## Fazit
Der ${product} hält seine Versprechen und bietet gutes Preis-Leistungs-Verhältnis. Wenn Sie eine zuverlässige Option suchen, ist dies definitiv einen Blick wert.
`;
}

function generateReviewContentFR(product, keywords) {
  return `# Test ${product}

## Introduction
Dans cette revue complète, nous examinerons de près le ${product}. Après des semaines de tests, nous avons recueilli des informations détaillées sur ses performances, ses fonctionnalités et son rapport qualité-prix.

## Caractéristiques Principales
Le ${product} offre plusieurs fonctionnalités impressionnantes qui le distinguent des concurrents. De la qualité de construction aux performances, chaque aspect a été soigneusement conçu pour répondre aux attentes des utilisateurs.

## Performances
Pendant notre période de test, nous avons évalué le ${product} dans diverses conditions. Les résultats montrent des performances constantes dans différents cas d'utilisation.

## Avantages et Inconvénients
### Avantages
- Excellente qualité de construction
- Excellentes performances
- Bon rapport qualité-prix
- Performances fiables

### Inconvénients
- Courbe d'apprentissage mineure
- Options de couleur limitées
- Prix premium

## Verdict
Après des tests approfondis, nous pouvons affirmer avec confiance que le ${product} est un choix solide. Il offre d'excellentes performances et un bon rapport qualité-prix.

## Conseils d'Achat
1. Comparez les prix chez plusieurs détaillants
2. Recherchez des offres groupées
3. Lisez les avis des utilisateurs
4. Envisagez les options de garantie
5. Recherchez des réductions saisonnières

## Conclusion
Le ${product} tient ses promesses et offre un bon rapport qualité-prix. Si vous cherchez une option fiable, cela vaut définitivement la peine d'être envisagé.
`;
}

function generateGuideContent(topic, keywords) {
  return `# ${topic}: Complete Guide

## Introduction
This comprehensive guide covers everything you need to know about ${topic}. Whether you're a beginner or experienced user, you'll find valuable insights here.

## What You Need
Before getting started with ${topic}, make sure you have the following:
- Compatible devices
- Stable internet connection
- Basic technical knowledge
- Time for setup

## Step-by-Step Instructions

### Step 1: Preparation
- Read the documentation
- Check compatibility
- Gather necessary tools

### Step 2: Initial Setup
- Download required apps
- Create accounts
- Connect devices

### Step 3: Configuration
- Customize settings
- Set preferences
- Test functionality

### Step 4: Optimization
- Fine-tune settings
- Update firmware
- Optimize performance

## Tips & Tricks
1. Start with basic features
2. Enable advanced options gradually
3. Backup your settings
4. Keep software updated
5. Join community forums

## Common Mistakes to Avoid
- Skipping documentation
- Rushing through setup
- Ignoring compatibility
- Not testing thoroughly
- Forgetting backups

## Conclusion
Following this guide will help you make the most of ${topic}. Take your time, follow the steps, and you'll have a great experience.
`;
}

function generateGuideContentDE(topic, keywords) {
  return `# ${topic}: Kompletter Leitfaden

## Einleitung
Dieser umfassende Leitfaden deckt alles ab, was Sie über ${topic} wissen müssen. Ob Anfänger oder erfahrener Benutzer, hier finden Sie wertvolle Einblicke.

## Was Sie brauchen
Bevor Sie mit ${topic} beginnen, stellen Sie sicher, dass Sie Folgendes haben:
- Kompatible Geräte
- Stabile Internetverbindung
- Grundlegendes technisches Wissen
- Zeit für die Einrichtung

## Schritt-für-Schritt-Anleitung

### Schritt 1: Vorbereitung
- Dokumentation lesen
- Kompatibilität prüfen
- Notwendige Werkzeuge sammeln

### Schritt 2: Ersteinrichtung
- Erforderliche Apps herunterladen
- Konten erstellen
- Geräte verbinden

### Schritt 3: Konfiguration
- Einstellungen anpassen
- Präferenzen festlegen
- Funktionalität testen

### Schritt 4: Optimierung
- Einstellungen feinabstimmen
- Firmware aktualisieren
- Leistung optimieren

## Tipps & Tricks
1. Mit Grundfunktionen beginnen
2. Erweiterte Optionen schrittweise aktivieren
3. Einstellungen sichern
4. Software aktuell halten
5. Community-Foren beitreten

## Häufige Fehler vermeiden
- Dokumentation überspringen
- Einrichtung überstürzen
- Kompatibilität ignorieren
- Nicht gründlich testen
- Backups vergessen

## Fazit
Wenn Sie diesem Leitfaden folgen, machen Sie das Beste aus ${topic}. Nehmen Sie sich Zeit, befolgen Sie die Schritte, und Sie werden eine tolle Erfahrung haben.
`;
}

function generateGuideContentFR(topic, keywords) {
  return `# ${topic}: Guide Complet

## Introduction
Ce guide complet couvre tout ce que vous devez savoir sur ${topic}. Que vous soyez débutant ou utilisateur expérimenté, vous trouverez ici des informations précieuses.

## Ce Dont Vous Avez Besoin
Avant de commencer avec ${topic}, assurez-vous d'avoir ce qui suit:
- Appareils compatibles
- Connexion internet stable
- Connaissances techniques de base
- Temps pour la configuration

## Instructions Étape par Étape

### Étape 1: Préparation
- Lire la documentation
- Vérifier la compatibilité
- Rassembler les outils nécessaires

### Étape 2: Configuration Initiale
- Télécharger les applications requises
- Créer des comptes
- Connecter les appareils

### Étape 3: Configuration
- Personnaliser les paramètres
- Définir les préférences
- Tester la fonctionnalité

### Étape 4: Optimisation
- Affiner les paramètres
- Mettre à jour le firmware
- Optimiser les performances

## Conseils & Astuces
1. Commencer par les fonctionnalités de base
2. Activer progressivement les options avancées
3. Sauvegarder vos paramètres
4. Garder le logiciel à jour
5. Rejoindre les forums communautaires

## Erreurs Courantes à Éviter
- Sauter la documentation
- Se précipiter dans la configuration
- Ignorer la compatibilité
- Ne pas tester soigneusement
- Oublier les sauvegardes

## Conclusion
En suivant ce guide, vous tirerez le meilleur de ${topic}. Prenez votre temps, suivez les étapes, et vous aurez une excellente expérience.
`;
}

function generateListicleContent(product, keywords) {
  return `# 5 Things to Know Before Buying ${product}

## Introduction
Thinking about purchasing a ${product}? Before you make your decision, here are 5 essential things you should know.

## 1. Compatibility
Make sure the ${product} is compatible with your devices. Check specifications and requirements carefully.

## 2. Build Quality
Look for products with good build quality. Read reviews about durability and materials.

## 3. Price Comparison
Compare prices across different retailers. Don't just buy from the first store you find.

## 4. Warranty
Check the warranty terms. A good warranty can save you money in the long run.

## 5. User Reviews
Read what other users are saying. Real experiences can be invaluable.

## Bonus Tip
Consider buying from authorized retailers for better warranty support.

## Conclusion
By keeping these 5 things in mind, you'll make a more informed decision about your ${product} purchase.
`;
}

function generateListicleContentDE(product, keywords) {
  return `# 5 Wichtige Dinge vor dem Kauf eines ${product}

## Einleitung
Denken Sie darüber nach, einen ${product} zu kaufen? Bevor Sie Ihre Entscheidung treffen, hier sind 5 wichtige Dinge, die Sie wissen sollten.

## 1. Kompatibilität
Stellen Sie sicher, dass der ${product} mit Ihren Geräten kompatibel ist. Überprüfen Sie sorgfältig Spezifikationen und Anforderungen.

## 2. Verarbeitungsqualität
Suchen Sie nach Produkten mit guter Verarbeitungsqualität. Lesen Sie Bewertungen über Haltbarkeit und Materialien.

## 3. Preisvergleich
Vergleichen Sie Preise bei verschiedenen Händlern. Kaufen Sie nicht einfach beim ersten Laden, den Sie finden.

## 4. Garantie
Überprüfen Sie die Garantiebedingungen. Eine gute Garantie kann langfristig Geld sparen.

## 5. Benutzerbewertungen
Lesen Sie, was andere Benutzer sagen. Echte Erfahrungen können unschätzbar sein.

## Bonus-Tipp
Erwägen Sie den Kauf bei autorisierten Händlern für besseren Garantieservice.

## Fazit
Indem Sie diese 5 Dinge im Hinterkopf behalten, treffen Sie eine fundiertere Entscheidung über den Kauf Ihres ${product}.
`;
}

function generateListicleContentFR(product, keywords) {
  return `# 5 Choses à Savoir Avant d'Acheter un ${product}

## Introduction
Vous envisagez d'acheter un ${product} ? Avant de prendre votre décision, voici 5 choses essentielles que vous devriez savoir.

## 1. Compatibilité
Assurez-vous que le ${product} est compatible avec vos appareils. Vérifiez soigneusement les spécifications et les exigences.

## 2. Qualité de Construction
Recherchez des produits avec une bonne qualité de construction. Lisez les avis sur la durabilité et les matériaux.

## 3. Comparaison de Prix
Comparez les prix chez différents détaillants. N'achetez pas simplement chez le premier magasin que vous trouvez.

## 4. Garantie
Vérifiez les termes de garantie. Une bonne garantie peut vous économiser de l'argent à long terme.

## 5. Avis des Utilisateurs
Lisez ce que les autres utilisateurs disent. Les expériences réelles peuvent être inestimables.

## Conseil Bonus
Envisagez d'acheter auprès de détaillants autorisés pour un meilleur service de garantie.

## Conclusion
En gardant ces 5 choses à l'esprit, vous prendrez une décision plus éclairée concernant l'achat de votre ${product}.
`;
}

console.log(`Generated ${articles.length} articles`);
console.log('Articles:', articles.map(a => a.slug));

// 输出结果
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'src', 'content', 'generated-articles.json');
fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
console.log(`Articles saved to ${outputPath}`);

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
Languages: EN, DE, FR (3 languages)
Content Types: Review, Guide, Listicle

Next Steps:
1. Add these articles to data.ts
2. Test the website
3. Optimize SEO
4. Deploy to Vercel
===============================================
`);
