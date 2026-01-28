"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const links = {
    services: [
      { name: "Insurance Navigation", href: "/what-we-do" },
      { name: "Benefit Navigation", href: "/what-we-do" },
      { name: "Claims Assistance", href: "/what-we-do" },
      { name: "Bill Negotiation", href: "/what-we-do" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Stories", href: "#testimonials" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Wellness Guides", href: "#" },
      { name: "Insurance Tips", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Soft decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/vcare-logo.png"
                  alt="VCare Advocacy"
                  width={120}
                  height={51}
                  quality={95}
                  className="h-12 w-auto brightness-0 invert"
                />
              </motion.div>
            </Link>
            <p className="text-primary-foreground/60 mb-8 max-w-sm text-lg leading-relaxed">
              Your trusted voice in healthcare. Guiding you with compassion, 
              coordinating your care, and ensuring you never feel alone.
            </p>
            <div className="space-y-4">
              <a href="tel:5551234567" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:hello@vcareadvocacy.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@vcareadvocacy.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>123 Healthcare Ave, Suite 100<br />Boston, MA 02108</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 text-xs text-center max-w-4xl mx-auto">
            VCare Advocacy does not provide medical advice, diagnosis, or replace your doctor or insurance agent—our role is guidance, advocacy, and support.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} VCare Advocacy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms</Link>
            <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
