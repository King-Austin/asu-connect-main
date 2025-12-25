# Deployment Guide - Akpu Students Union Website

This guide covers deploying your Next.js App Router application to production.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Vercel Deployment](#vercel-deployment)
3. [Environment Variables](#environment-variables)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Post-Deployment](#post-deployment)

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are installed: `npm install`
- [ ] Build passes locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Environment variables are configured
- [ ] Update `NEXT_PUBLIC_SITE_URL` in production env
- [ ] Update Google verification code in `app/layout.tsx`
- [ ] Review and update contact information

## Vercel Deployment

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Next.js migration"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Configure Build Settings**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

### Required for Production

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://asuconnect.org
NEXT_PUBLIC_SITE_NAME=Akpu Students Union

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@asuconnect.org
NEXT_PUBLIC_CONTACT_PHONE=+234 801 234 5678
```

### Optional Variables

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/asuconnect
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/asuconnect
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/asuconnect
```

## Custom Domain Setup

### 1. Add Domain in Vercel

1. Go to Project Settings → Domains
2. Enter your domain: `asuconnect.org`
3. Click "Add"

### 2. Configure DNS

Add these DNS records in your domain registrar:

**For apex domain (asuconnect.org):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Verify Domain

- Wait for DNS propagation (5-60 minutes)
- Vercel will automatically issue SSL certificate
- Your site will be live at your custom domain

## Post-Deployment

### 1. Test Your Deployment

- [ ] Visit your production URL
- [ ] Test all navigation links
- [ ] Verify dynamic routes work: `/events/orientation-week-2024`
- [ ] Check sitemap: `https://asuconnect.org/sitemap.xml`
- [ ] Check robots.txt: `https://asuconnect.org/robots.txt`
- [ ] Test on mobile devices
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

### 2. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Search Console ownership
- [ ] Submit to Bing Webmaster Tools
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)

### 3. Monitor Performance

Access Vercel Analytics:
- Go to your project dashboard
- Navigate to Analytics tab
- Monitor:
  - Page views
  - Core Web Vitals
  - Real User Monitoring (RUM)

### 4. Set Up Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically builds and deploys
```

## Optimizations

### Image Optimization

When adding images, use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

### Performance Best Practices

1. **Use Server Components by default**
   - Only add `"use client"` when needed
   
2. **Enable caching**
   ```tsx
   export const revalidate = 3600; // Revalidate every hour
   ```

3. **Optimize fonts**
   - Already configured with `next/font` in `app/layout.tsx`

4. **Lazy load components**
   ```tsx
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./HeavyComponent'));
   ```

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables
- Redeploy on Vercel after changing production variables

### Domain Not Working

- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)
- Verify DNS records match Vercel's requirements
- Wait up to 48 hours for full DNS propagation

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
- Project Maintainer: info@asuconnect.org

## Rollback

To rollback to a previous deployment:
1. Go to Vercel Dashboard → Deployments
2. Find the previous successful deployment
3. Click "⋯" → "Promote to Production"
