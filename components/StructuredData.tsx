import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

/**
 * StructuredData Component
 * Adds JSON-LD structured data to the page for SEO
 * This is a server component that outputs script tags
 */
export function StructuredData() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
