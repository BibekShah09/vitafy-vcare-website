import type { Metadata } from "next";

/**
 * SEO Configuration for VCare Advocacy
 * 
 * This file serves as the source of truth for SEO metadata.
 * To sync with vcare-web (React), export this config and use it in index.html meta tags.
 */

// Base site configuration
export const siteConfig = {
  name: "VCare Advocacy",
  title: "VCare Advocacy | Your Voice in Healthcare Decisions",
  description: "Navigate complex healthcare systems with confidence. VCare Advocacy fights for your rights, coordinates your care, and ensures you receive the treatment you deserve.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vcareadvocacy.com",
  ogImage: "/hero-healthcare.jpg",
  twitterHandle: "@VCareAdvocacy",
  author: "VCare Advocacy",
  keywords: [
    "healthcare advocacy",
    "patient advocacy",
    "insurance navigation",
    "healthcare navigation",
    "medical billing assistance",
    "insurance claims",
    "healthcare coordination",
    "patient rights",
    "healthcare support",
    "medical advocacy services"
  ],
  contact: {
    phone: "(555) 123-4567",
    email: "hello@vcareadvocacy.com",
    address: "123 Healthcare Ave, Suite 100, Boston, MA 02108"
  }
};

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description,
  path = "",
  keywords,
  image,
  noindex = false,
  nofollow = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const pageTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image 
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  
  const allKeywords = keywords 
    ? [...siteConfig.keywords, ...keywords]
    : siteConfig.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    icons: {
      icon: "/vcare.svg",
      shortcut: "/vcare.svg",
      apple: "/vcare.svg",
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: pageUrl,
    },
    metadataBase: new URL(siteConfig.url),
    verification: {
      // Add verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },
  };
}

/**
 * Page-specific metadata configurations
 * These can be imported and used in individual page files
 */
export const pageMetadata = {
  home: {
    title: "VCare Advocacy | Your Voice in Healthcare Decisions",
    description: "Navigate complex healthcare systems with confidence. VCare Advocacy fights for your rights, coordinates your care, and ensures you receive the treatment you deserve.",
    keywords: ["healthcare advocacy", "patient advocacy", "healthcare navigation"],
    path: "/",
  },
  whatWeDo: {
    title: "What We Do | Healthcare Advocacy Services",
    description: "Comprehensive healthcare advocacy services including insurance navigation, benefit navigation, provider search, care coordination, claims assistance, bill negotiation, and appeals support.",
    keywords: ["healthcare services", "insurance navigation", "benefit navigation", "care coordination"],
    path: "/what-we-do",
  },
  howItWorks: {
    title: "How It Works | Our Process",
    description: "Learn how VCare Advocacy helps you navigate healthcare challenges. Simple three-step process: submit your request, understand your options, and connect & save.",
    keywords: ["healthcare process", "how healthcare advocacy works", "patient advocacy process"],
    path: "/how-it-works",
  },
  fees: {
    title: "Pricing & Plans | Affordable Healthcare Advocacy",
    description: "Transparent pricing for healthcare advocacy services. Choose from Individual, Couple, or Family plans. Start with a free consultation.",
    keywords: ["healthcare advocacy pricing", "advocacy services cost", "healthcare plans"],
    path: "/fees",
  },
  aboutUs: {
    title: "About Us | Our Mission & Values",
    description: "Learn about VCare Advocacy's mission to provide patient-first healthcare advocacy. Independent, experienced, and always on your side.",
    keywords: ["about healthcare advocacy", "patient advocacy mission", "healthcare advocates"],
    path: "/about-us",
  },
  privacy: {
    title: "Privacy Policy | Your Data Protection",
    description: "VCare Advocacy's privacy policy. Learn how we collect, use, and protect your personal and health information.",
    keywords: ["privacy policy", "data protection", "healthcare privacy"],
    path: "/privacy",
    noindex: false, // Legal pages should be indexed
  },
  terms: {
    title: "Terms of Service | Legal Information",
    description: "VCare Advocacy's terms of service. Understand the scope of our services and your rights as a client.",
    keywords: ["terms of service", "legal terms", "service agreement"],
    path: "/terms",
    noindex: false, // Legal pages should be indexed
  },
};

/**
 * Export function to get metadata for a specific page
 */
export function getPageMetadata(page: keyof typeof pageMetadata) {
  const config = pageMetadata[page];
  const configWithOptional = config as typeof config & { noindex?: boolean; nofollow?: boolean };
  return generateMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
    keywords: config.keywords,
    noindex: configWithOptional.noindex,
    nofollow: configWithOptional.nofollow,
  });
}
