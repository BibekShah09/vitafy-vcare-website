# SEO Sync Guide: vcare-web ↔ vcare-web-next

This guide explains how to keep SEO metadata synchronized between the React.js `vcare-web` project (source of truth) and the Next.js `vcare-web-next` project.

## Overview

The SEO configuration is centralized in `vcare-web-next/lib/seo.ts`. This file serves as the single source of truth for SEO metadata that can be synced with `vcare-web`.

## File Structure

```
vcare-web-next/
├── lib/
│   ├── seo.ts                    # Centralized SEO configuration
│   └── structured-data.ts        # JSON-LD structured data utilities
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── sitemap.ts                 # Dynamic sitemap generation
│   ├── robots.ts                  # Dynamic robots.txt generation
│   └── [routes]/
│       └── layout.tsx             # Route-specific metadata
└── next.config.ts                 # Next.js SEO optimizations
```

## Syncing SEO Data with vcare-web

### Option 1: Shared Configuration File (Recommended)

1. **Create a shared config file** that both projects can import:
   ```
   shared/
   └── seo-config.ts
   ```

2. **Export from shared config**:
   ```typescript
   // shared/seo-config.ts
   export const siteConfig = {
     name: "VCare Advocacy",
     title: "VCare Advocacy | Your Voice in Healthcare Decisions",
     // ... rest of config
   };
   ```

3. **Import in both projects**:
   - `vcare-web-next/lib/seo.ts` imports from shared
   - `vcare-web/src/config/seo.ts` imports from shared

### Option 2: Manual Sync Script

Create a sync script that copies SEO config from `vcare-web-next` to `vcare-web`:

```bash
#!/bin/bash
# sync-seo.sh

# Copy SEO config to vcare-web
cp vcare-web-next/lib/seo.ts vcare-web/src/config/seo.ts

# Convert Next.js Metadata format to React meta tags
# (You'll need to create a converter script)
node scripts/convert-seo-to-react.js
```

### Option 3: Environment Variables

Use environment variables for shared SEO data:

```env
# .env.shared
NEXT_PUBLIC_SITE_NAME=VCare Advocacy
NEXT_PUBLIC_SITE_URL=https://vcareadvocacy.com
NEXT_PUBLIC_SITE_DESCRIPTION=Navigate complex healthcare systems...
```

## Key SEO Features Implemented

### 1. Centralized Metadata (`lib/seo.ts`)
- Site-wide configuration
- Page-specific metadata presets
- Dynamic metadata generation function
- Open Graph and Twitter Card support

### 2. Structured Data (`lib/structured-data.ts`)
- Organization schema
- Service schema
- Website schema with search action
- Breadcrumb schema
- FAQ schema
- LocalBusiness schema

### 3. Dynamic Sitemap (`app/sitemap.ts`)
- Automatically generates `/sitemap.xml`
- Includes all pages from `pageMetadata`
- Supports dynamic routes (ready for future expansion)

### 4. Dynamic Robots.txt (`app/robots.ts`)
- Automatically generates `/robots.txt`
- Configurable rules per user agent
- References sitemap location

### 5. Route-Specific Metadata
Each route has a `layout.tsx` that exports metadata:
- `/what-we-do/layout.tsx`
- `/how-it-works/layout.tsx`
- `/fees/layout.tsx`
- `/about-us/layout.tsx`
- `/privacy/layout.tsx`
- `/terms/layout.tsx`

## Using SEO Config in vcare-web (React)

To use the same SEO config in `vcare-web`, you can:

### 1. Import and Convert

```typescript
// vcare-web/src/config/seo.ts
import { siteConfig, pageMetadata } from '../../../vcare-web-next/lib/seo';

// Convert to React meta tag format
export function generateMetaTags(page: keyof typeof pageMetadata) {
  const config = pageMetadata[page];
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: `${siteConfig.url}${siteConfig.ogImage}`,
    twitterCard: 'summary_large_image',
    twitterTitle: config.title,
    twitterDescription: config.description,
  };
}
```

### 2. Use in index.html or React Helmet

```html
<!-- vcare-web/index.html -->
<head>
  <title><%= seo.title %></title>
  <meta name="description" content="<%= seo.description %>" />
  <meta property="og:title" content="<%= seo.ogTitle %>" />
  <!-- ... -->
</head>
```

Or with React Helmet:

```tsx
import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '@/config/seo';

function WhatWeDoPage() {
  const meta = generateMetaTags('whatWeDo');
  
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* ... */}
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

## Adding New Pages

When adding a new page:

1. **Add to `lib/seo.ts`**:
   ```typescript
   export const pageMetadata = {
     // ... existing pages
     newPage: {
       title: "New Page Title",
       description: "Page description",
       keywords: ["keyword1", "keyword2"],
       path: "/new-page",
     },
   };
   ```

2. **Create route layout** (`app/new-page/layout.tsx`):
   ```typescript
   import type { Metadata } from "next";
   import { getPageMetadata } from "@/lib/seo";

   export const metadata: Metadata = getPageMetadata("newPage");

   export default function NewPageLayout({ children }) {
     return <>{children}</>;
   }
   ```

3. **Update sitemap** (automatically picks up from `pageMetadata`)

## SEO Best Practices Checklist

- ✅ Centralized SEO configuration
- ✅ Dynamic sitemap generation
- ✅ Dynamic robots.txt
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Meta descriptions for all pages
- ✅ Keywords optimization
- ✅ Image optimization (Next.js Image component)
- ⚠️ **TODO**: Add verification codes (Google Search Console, etc.)
- ⚠️ **TODO**: Add social media links to structured data
- ⚠️ **TODO**: Add actual coordinates for LocalBusiness schema
- ⚠️ **TODO**: Set up environment variable for `NEXT_PUBLIC_SITE_URL`

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://vcareadvocacy.com
```

Update `lib/seo.ts` to use this:
```typescript
url: process.env.NEXT_PUBLIC_SITE_URL || "https://vcareadvocacy.com",
```

## Testing SEO

1. **Validate structured data**: https://search.google.com/test/rich-results
2. **Check sitemap**: `https://yoursite.com/sitemap.xml`
3. **Check robots.txt**: `https://yoursite.com/robots.txt`
4. **Test meta tags**: Use browser dev tools or tools like:
   - https://www.opengraph.xyz/
   - https://cards-dev.twitter.com/validator

## Future Enhancements

1. **Blog/Content Pages**: Add dynamic routes to sitemap
2. **Multilingual Support**: Add hreflang tags
3. **Analytics Integration**: Add Google Analytics, etc.
4. **Performance Monitoring**: Core Web Vitals tracking
5. **A/B Testing**: For meta descriptions and titles

## Questions?

If you need to sync SEO changes from `vcare-web` to `vcare-web-next`:

1. Update `lib/seo.ts` in `vcare-web-next`
2. Run sync script (if using Option 2)
3. Test changes locally
4. Deploy

For changes from `vcare-web-next` to `vcare-web`:

1. Export SEO config from `vcare-web-next/lib/seo.ts`
2. Convert to React format
3. Update `vcare-web` meta tags
