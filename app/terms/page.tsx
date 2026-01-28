"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Scope of Services",
      content: `VCare Advocacy provides healthcare navigation, advocacy, and support services. Our services include:
      
• Insurance claim assistance and appeals
• Healthcare billing review and negotiation
• Provider research and appointment coordination
• Benefits explanation and coverage guidance
• Care coordination support

Our services are designed to help you understand and navigate the healthcare system more effectively.`,
    },
    {
      title: "2. Limitations of Services",
      content: `VCare Advocacy does NOT provide:

• Medical advice, diagnosis, or treatment recommendations
• Legal advice or representation
• Financial or tax advice
• Insurance sales or policy recommendations
• Replacement for licensed healthcare providers, attorneys, or financial advisors

We act as advocates and guides—not as substitutes for qualified professionals in their respective fields.`,
    },
    {
      title: "3. Your Responsibilities",
      content: `As a VCare member, you agree to:

• Provide accurate and complete information about your healthcare situation
• Authorize us in writing before we communicate with providers or insurers on your behalf
• Make your own final decisions regarding healthcare and financial matters
• Notify us of any changes to your insurance, health status, or contact information
• Review all documents and communications before signing or approving`,
    },
    {
      title: "4. Authorization & Consent",
      content: `To advocate on your behalf, we require written authorization (HIPAA release) before contacting:

• Healthcare providers and facilities
• Insurance companies and third-party administrators
• Billing departments and collection agencies

You may revoke this authorization at any time by providing written notice.`,
    },
    {
      title: "5. Fees & Payment",
      content: `Our fee structure is transparent and outlined in your membership agreement:

• Membership plans are billed monthly or annually as selected
• No hidden fees or commissions from healthcare providers or insurers
• Refund policies are specified in your individual service agreement
• We do not receive compensation from any third party for referrals`,
    },
    {
      title: "6. Confidentiality",
      content: `We treat all your personal and health information with strict confidentiality:

• Information is used solely to provide our services
• We comply with HIPAA and applicable privacy regulations
• Staff members are trained in privacy and security practices
• We do not sell or share your information for marketing purposes`,
    },
    {
      title: "7. Limitation of Liability",
      content: `While we strive for the best outcomes:

• We cannot guarantee specific results (claim approvals, savings amounts, etc.)
• We are not liable for decisions made by healthcare providers, insurers, or you
• Our liability is limited to the fees paid for our services
• We are not responsible for delays caused by third parties`,
    },
    {
      title: "8. Termination",
      content: `Either party may terminate services:

• You may cancel your membership at any time with written notice
• We may terminate services if terms are violated or if continuing is not feasible
• Upon termination, we will return any documents and cease advocacy activities
• Fees paid for the current billing period are generally non-refundable`,
    },
    {
      title: "9. Changes to Terms",
      content: `We may update these terms periodically:

• Changes will be communicated via email or through our platform
• Continued use of services after changes constitutes acceptance
• Material changes will be highlighted and may require acknowledgment`,
    },
    {
      title: "10. Contact Us",
      content: `For questions about these terms:

Email: legal@vcareadvocacy.com
Phone: (555) 123-4567
Address: 123 Healthcare Ave, Suite 100, Boston, MA 02108`,
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to VCare Advocacy. These Terms of Service govern your use of our healthcare
                advocacy and navigation services. By using our services, you agree to these terms.
                Please read them carefully.
              </p>
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
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center"
            >
              <p className="text-foreground font-medium">
                VCare Advocacy does not provide medical advice, diagnosis, or replace your doctor
                or insurance agent—our role is guidance, advocacy, and support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
