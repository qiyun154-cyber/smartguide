# 🏠 SmartHome & Tech Reviews - Next.js Template

A professional multi-language content website template for Smart Home and Tech product reviews. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Preview](https://via.placeholder.com/800x400?text=SmartHome+Template)

## ✨ Features

- **Multi-language Support** (English, German, French)
- **SEO Optimized** - Full meta tags, OpenGraph, Schema.org
- **Fast Performance** - Static Site Generation (SSG)
- **Responsive Design** - Mobile-first
- **Blog System** - Categories, tags, reading time
- **Markdown Support** - Easy content writing
- **Amazon Associates Ready** - Built-in affiliate links
- **AdSense Ready** - Ad placement slots

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
content-site/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── content/       # Articles and data
│   └── i18n/          # Internationalization
├── public/            # Static assets
└── package.json
```

## 🎨 Customization

### Add New Article

Edit `src/content/data.ts`:

```typescript
{
  slug: 'your-article-slug',
  title: {
    en: 'Your Title',
    de: 'German Title',
    fr: 'French Title'
  },
  content: {
    en: 'Your content in Markdown...',
    de: 'German content...',
    fr: 'French content...'
  },
  category: 'smart-home',
  // ... more fields
}
```

### Change Colors

Edit `tailwind.config.ts` to customize colors.

### Add Analytics

Add your Google Analytics ID in the layout file.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Netlify
Simply connect your GitHub repository.

## 📋 Requirements

- Node.js 18+
- npm or yarn

## 📄 License

MIT License - Use freely for personal and commercial projects.

## 🛠️ Support

For questions or issues, please open an issue on the project page.

---

**Price**: $19 (Template Only)
**Support**: Email included

---

*Built with Next.js 14 + TypeScript + Tailwind CSS*
