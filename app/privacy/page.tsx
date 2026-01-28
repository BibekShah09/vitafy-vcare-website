"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information necessary to provide our advocacy services:

**Personal Information:**
• Name, email address, phone number, and mailing address
• Date of birth and demographic information
• Emergency contact information

**Health-Related Information:**
• Insurance policy details and member IDs
• Medical records and healthcare provider information (with your authorization)
• Billing statements and claims information
• Health conditions relevant to your advocacy needs

**Usage Information:**
• How you interact with our website and platform
• Device information and browser type
• Communication preferences`,
    },
    {
      title: "2. How We Use Your Information",
      content: `Your information is used exclusively to support your healthcare advocacy needs:

• Communicate with healthcare providers and insurers on your behalf
• Research and compare healthcare options for you
• Process and appeal insurance claims
• Negotiate medical bills and payment arrangements
• Coordinate appointments and care transitions
• Send you updates about your cases and our services
• Improve our services and user experience

We never use your information for purposes unrelated to your advocacy services.`,
    },
    {
      title: "3. Information Sharing",
      content: `We share your information only when necessary and authorized:

**With Your Consent:**
• Healthcare providers, hospitals, and clinics
• Insurance companies and claims administrators
• Billing departments and collection agencies

**Service Providers:**
• Secure technology platforms that help us deliver services
• Professional advisors (attorneys, accountants) as needed

**Legal Requirements:**
• When required by law, court order, or government request
• To protect our rights, safety, or property

**We Never:**
• Sell your personal or health information
• Share your data for marketing purposes
• Provide information to advertisers`,
    },
    {
      title: "4. HIPAA Compliance",
      content: `As a healthcare advocacy service, we take HIPAA seriously:

• We maintain administrative, physical, and technical safeguards
• All staff complete HIPAA training and sign confidentiality agreements
• We use encrypted communications and secure data storage
• Business Associate Agreements are in place with all vendors handling PHI
• We conduct regular security assessments and audits

You have the right to request restrictions on how we use or disclose your health information.`,
    },
    {
      title: "5. Data Security",
      content: `We protect your information with industry-standard security measures:

• 256-bit SSL/TLS encryption for all data transmission
• Encrypted storage for sensitive personal and health data
• Multi-factor authentication for system access
• Regular security audits and penetration testing
• Employee background checks and access controls
• Secure data centers with physical security measures

While no system is 100% secure, we continuously work to protect your information.`,
    },
    {
      title: "6. Your Rights",
      content: `You have control over your personal information:

**Access:** Request a copy of the information we hold about you
**Correction:** Ask us to correct inaccurate or incomplete information
**Deletion:** Request deletion of your information (subject to legal requirements)
**Portability:** Receive your data in a structured, commonly used format
**Restriction:** Ask us to limit how we use your information
**Objection:** Object to certain types of processing
**Withdraw Consent:** Revoke authorization at any time

To exercise these rights, contact us at privacy@vcareadvocacy.com.`,
    },
    {
      title: "7. Data Retention",
      content: `We retain your information only as long as necessary:

• Active member records: Duration of membership plus 7 years
• Health records: As required by state and federal regulations
• Billing records: 7 years for tax and legal compliance
• Communication logs: 3 years after last interaction

After retention periods expire, data is securely deleted or anonymized.`,
    },
    {
      title: "8. Cookies & Tracking",
      content: `Our website uses cookies to improve your experience:

**Essential Cookies:** Required for website functionality
**Analytics Cookies:** Help us understand how visitors use our site
**Preference Cookies:** Remember your settings and choices

You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.

We do not use cookies to track your health information or for advertising purposes.`,
    },
    {
      title: "9. Children's Privacy",
      content: `Our services are designed for adults:

• We do not knowingly collect information from children under 18
• Parents or guardians must authorize services for minors
• If we learn we've collected a child's information without proper authorization, we will delete it promptly

Contact us if you believe we have inadvertently collected information from a minor.`,
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this privacy policy periodically:

• Material changes will be communicated via email
• The "Last Updated" date will reflect the most recent revision
• Continued use of services after changes constitutes acceptance
• Previous versions are available upon request`,
    },
    {
      title: "11. Contact Us",
      content: `For privacy-related questions or to exercise your rights:

**Privacy Officer**
Email: privacy@vcareadvocacy.com
Phone: (555) 123-4567
Address: 123 Healthcare Ave, Suite 100, Boston, MA 02108

For HIPAA-related concerns, you may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At VCare Advocacy, your privacy is paramount. This policy explains how we collect,
                use, protect, and share your personal and health information. We are committed to
                maintaining the trust you place in us.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  HIPAA Compliant
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Data Encrypted
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Never Sold
                </span>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <h2 className="text-xl font-display font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line prose-strong:text-foreground prose-strong:font-semibold">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8 text-center"
            >
              <p className="text-xl font-display font-semibold text-foreground mb-2">
                Your Information Is Respected
              </p>
              <p className="text-muted-foreground">
                We never sell your data and never share it without your consent.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
