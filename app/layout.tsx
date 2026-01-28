import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { StructuredData } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata, siteConfig } from "@/lib/seo";

// Generate comprehensive root metadata
export const metadata: Metadata = generateSEOMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
