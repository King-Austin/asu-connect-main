# Akpu Students Union (ASU) - Next.js Website

A production-ready Next.js 15 App Router website for Akpu Students Union, migrated from a Vite React application with enhanced SEO and server-side rendering capabilities.

## Features

- ✅ **Next.js 15 App Router** - Modern React framework with file-based routing
- ✅ **Server Components** - Default server-side rendering for optimal performance
- ✅ **SEO Optimized** - Comprehensive metadata, Open Graph, and Twitter Cards
- ✅ **Static Generation (SSG)** - Pre-rendered pages for fast loading
- ✅ **Dynamic Routes** - Example implementation for events pages
- ✅ **Tailwind CSS** - Utility-first styling with custom ASU theme
- ✅ **Radix UI Components** - Accessible, customizable UI primitives
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Sitemap & Robots.txt** - Auto-generated for search engines
- ✅ **Security Headers** - Production-ready security configuration
- ✅ **Vercel Optimized** - Ready for deployment on Vercel

## Project Structure

```
app/                        # Next.js App Router pages
├── layout.tsx             # Root layout with Navbar/Footer
├── page.tsx               # Home page
├── not-found.tsx          # 404 page
├── sitemap.ts             # Dynamic sitemap generation
├── robots.ts              # Robots.txt configuration
├── about/page.tsx         # About page
├── programs/page.tsx      # Programs page
├── contact/page.tsx       # Contact page
├── events/
│   ├── page.tsx           # Events listing
│   └── [slug]/page.tsx    # Dynamic event detail pages
└── globals.css            # Global styles

components/
├── navbar.tsx             # Navigation component
├── footer.tsx             # Footer component
├── sections/              # Page sections
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   └── programs-section.tsx
└── ui/                    # Reusable UI components
    ├── button.tsx
    ├── card.tsx
    └── separator.tsx

_revamp/                    # Original Vite app (reference only - DO NOT IMPORT)
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

## SEO Configuration

The site includes comprehensive SEO:

- **Metadata API** - Page-level metadata with Open Graph and Twitter Cards
- **Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - Configured at `/robots.txt`
- **Security Headers** - HSTS, CSP, and other security headers

## Customization

### Colors

Update ASU brand colors in `app/globals.css`:

```css
:root {
  --primary: 215 50% 23%;        /* ASU Blue */
  --primary-foreground: 0 0% 100%;
}
```

### Navigation

Update links in `components/navbar.tsx`:

```typescript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  // Add more...
];
```

## Dynamic Routes

Example dynamic route at `app/events/[slug]/page.tsx` demonstrates:

- Dynamic route parameters
- `generateStaticParams()` for SSG
- `generateMetadata()` for SEO
- Type-safe params handling

## Migration Notes

Migrated from Vite React app (`_revamp` folder) to Next.js App Router:

- ✅ React Router → App Router file-based routing
- ✅ Client-side rendering → Server Components
- ✅ Manual SEO → Next.js Metadata API
- ✅ Hash routing → Smooth scroll navigation

**Important:** The `_revamp` folder is for reference only. Do NOT import from it at runtime.

## License

© 2024 Akpu Students Union. All rights reserved.

## Support

Contact: info@asuconnect.org

