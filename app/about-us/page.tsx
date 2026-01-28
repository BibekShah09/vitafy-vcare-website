"use client";
import { motion } from "framer-motion";
import { Heart, Layers, CircleDollarSign, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const AboutUs = () => {
  const differentiators = [
    {
      icon: Heart,
      title: "Patient-First, Always",
      tagline: "Your advocate, not theirs.",
      description:
        "We work exclusively for you—never for insurance companies, hospitals, or employers. When interests conflict, we always side with you. No kickbacks, no referral fees, no hidden agendas. Your health and financial wellbeing are our only priorities.",
      scenario: {
        quote:
          "When my insurer wanted me to switch to a cheaper medication that didn't work for me, VCare fought back—and won. My doctor agreed, but only they had the time to make it happen.",
        name: "Maria T., Member since 2022",
      },
      evidence: ["100% Independent", "Zero Industry Ties", "No Carrier Incentives"],
      color: "terracotta",
      bgColor: "bg-terracotta/5",
      iconBg: "bg-terracotta/10",
      iconColor: "text-terracotta",
      borderColor: "border-terracotta/20",
    },
    {
      icon: Layers,
      title: "Carrier Neutral",
      tagline: "Every plan. Every insurer. No favorites.",
      description:
        "We support members across all insurance types—PPO, HMO, Medicare, Medicaid, ACA marketplace, employer plans, or no insurance at all. We don't favor any carrier or healthcare system, giving you unbiased guidance based solely on what's best for your situation.",
      scenario: {
        quote:
          "When I switched jobs and lost my Blue Cross plan, VCare seamlessly transitioned me to an ACA plan that actually saved me $200/month—something my old insurer would never have suggested.",
        name: "James L., Member since 2021",
      },
      evidence: ["Works with 50+ Carriers", "All Plan Types", "Medicare to Marketplace"],
      color: "teal",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      borderColor: "border-teal/20",
    },
    {
      icon: CircleDollarSign,
      title: "Free Choice & Marketplace-Aware",
      tagline: "Sometimes the best price is outside your plan.",
      description:
        "We help you discover cash-pay and marketplace options that may cost significantly less than using your insurance. Our transparency tools and provider network mean you're never overpaying—even when your insurance says you should.",
      scenario: {
        quote:
          "My MRI was quoted at $2,400 with my insurance deductible. VCare found the same scan at an imaging center for $380 cash-pay. I kept the $2,000 difference.",
        name: "Susan K., Member since 2023",
      },
      evidence: ["Average Savings: 40-70%", "1,200+ Provider Connections", "Transparent Pricing"],
      color: "primary",
      bgColor: "bg-primary/5",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Families Helped" },
    { number: "70%", label: "Claims Overturned" },
    { number: "$2M+", label: "Bills Reduced" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              What Makes Us Different
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              We Stand for You.{" "}
              <span className="text-gradient-primary">Not Insurance Companies.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three principles that guide everything we do—and set us apart from everyone else.
            </p>
          </motion.div>
        </section>

        {/* Differentiators Section */}
        <section className="mb-24">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${diff.bgColor} py-16 lg:py-24`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className={`w-14 h-14 ${diff.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <diff.icon className={`w-7 h-7 ${diff.iconColor}`} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      {diff.title}
                    </h2>
                    <p className={`text-lg font-medium ${diff.iconColor} mb-6`}>{diff.tagline}</p>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {diff.description}
                    </p>

                    {/* Evidence Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {diff.evidence.map((item) => (
                        <span
                          key={item}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${diff.iconBg} ${diff.iconColor}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Scenario Card */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div
                      className={`bg-card rounded-3xl p-8 md:p-10 border ${diff.borderColor} shadow-soft relative`}
                    >
                      <Quote className={`w-10 h-10 ${diff.iconColor} opacity-30 mb-4`} />
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                        "{diff.scenario.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${diff.iconBg} flex items-center justify-center`}
                        >
                          <span className={`text-sm font-bold ${diff.iconColor}`}>
                            {diff.scenario.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {diff.scenario.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Origin Story Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-calm rounded-3xl p-8 md:p-12 border border-border">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 mx-auto md:mx-0 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">Dr. Emily Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder, VCare Advocacy</p>
                </div>
                <div>
                  <Quote className="w-8 h-8 text-primary opacity-40 mb-4" />
                  <blockquote className="text-xl text-foreground leading-relaxed mb-6 italic">
                    "I started VCare after watching my mother struggle alone through cancer
                    treatment. No one should face the healthcare system without someone in their
                    corner."
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team includes nurses, social workers, insurance experts, and patient
                    advocates who've spent 15 years building relationships and learning the system
                    inside out—so we know exactly how to get you the help you need.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-soft"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What VCare Is NOT Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                What VCare Advocacy Is <span className="text-muted-foreground">Not</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "We don't provide medical advice or diagnosis",
                "We don't replace your doctor or insurance agent",
                "We don't force decisions—we explain options",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <p className="text-foreground font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl p-8"
            >
              <p className="text-xl font-display font-semibold text-foreground">
                Our role is <span className="text-primary">guidance</span>,{" "}
                <span className="text-accent">advocacy</span>, and{" "}
                <span className="text-secondary">support</span>.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Team Image & CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden mb-12">
              <img
                src="/about-team.jpg"
                alt="VCare Advocacy Team"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of families who've found clarity, reduced costs, and reclaimed peace
                of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="group" asChild>
                  <Link href="/fees">
                    Free Consultation
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/fees">View Our Plans</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
