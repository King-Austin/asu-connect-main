# Changelog

All notable changes to the ASU Connect website will be documented in this file.

## [2.0.0] - 2024-12-25

### Added
- Migrated from Vite React app to Next.js 15 App Router
- Server-side rendering (SSR) for improved performance
- Static site generation (SSG) for all pages
- Dynamic routing for events (`/events/[slug]`)
- Comprehensive SEO with Next.js Metadata API
- Auto-generated sitemap.xml and robots.txt
- Open Graph and Twitter Card metadata
- Security headers (HSTS, CSP, X-Frame-Options)
- Vercel deployment configuration
- Loading and error states
- 404 custom page
- Contact page with form
- Gallery page
- Events listing and detail pages
- PWA manifest.json
- Comprehensive documentation (README, DEPLOYMENT guide)

### Changed
- Replaced React Router with App Router file-based routing
- Converted hash-based navigation to smooth scroll
- Upgraded from client-side to server-first architecture
- Updated Tailwind CSS configuration for Next.js
- Improved accessibility with Radix UI components

### Technical Stack
- Next.js 15 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- Radix UI
- Lucide Icons

## [1.0.0] - 2024

### Initial Release (Vite)
- Vite React application
- Client-side routing
- Basic SEO
- Landing page with sections
- Executive profiles
- Programs showcase
- Events calendar
- Image gallery
