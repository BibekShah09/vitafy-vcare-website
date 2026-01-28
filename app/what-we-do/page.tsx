"use client";
import { motion } from "framer-motion";
import { Shield, Compass, Search, DollarSign, Users, FileText, Scale, Gavel, ChevronRight, CheckCircle2, TrendingDown, Award, Stethoscope, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const WhatWeDo = () => {
  const services = [
    {
      icon: Shield,
      title: "Insurance Navigation",
      description: "Help finding and understanding health insurance policies, coverage options, and the enrollment process.",
      features: ["Policy comparison & selection", "Enrollment assistance", "Coverage explanation", "Plan optimization"],
      stat: "500+",
      statLabel: "Policies reviewed annually",
    },
    {
      icon: Compass,
      title: "Benefit Navigation",
      description: "Decode policy details, clarify coverage limitations, and maximize benefits to reduce out-of-pocket costs.",
      features: ["Coverage analysis", "Benefit maximization", "Limitation clarification", "Cost reduction strategies"],
      stat: "$2,400",
      statLabel: "Average savings per client",
    },
    {
      icon: Search,
      title: "Provider Search",
      description: "Guidance in selecting healthcare providers and specialists based on your individual needs and preferences.",
      features: ["Specialist matching", "Quality assessment", "Network verification", "Treatment options review"],
      stat: "1,200+",
      statLabel: "Provider connections made",
    },
    {
      icon: DollarSign,
      title: "Procedure Cost",
      description: "Obtain transparent pricing from multiple providers to compare costs and make informed decisions.",
      features: ["Price transparency", "Multi-provider quotes", "Cost comparison tools", "Financing options"],
      stat: "40%",
      statLabel: "Average cost reduction",
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Coordinate care among multiple providers to ensure seamless communication and treatment continuity.",
      features: ["Provider communication", "Appointment scheduling", "Medical records transfer", "Treatment continuity"],
      stat: "15+",
      statLabel: "Hours saved monthly",
    },
    {
      icon: FileText,
      title: "Claims Assistance",
      description: "Help with filing claims, understanding medical bills, disputing denials, and resolving billing errors.",
      features: ["Claims filing support", "Bill analysis", "Error detection", "Dispute resolution"],
      stat: "87%",
      statLabel: "Disputes resolved successfully",
    },
    {
      icon: Scale,
      title: "Bill Negotiation",
      description: "Negotiate with healthcare providers and insurers to reduce medical bills and ensure fair pricing.",
      features: ["Direct negotiation", "Fair pricing advocacy", "Payment reduction", "Settlement arrangements"],
      stat: "$49",
      statLabel: "Per case • Money-back guarantee",
      isPremium: true,
      premiumNote: "If we don't save you $100+, you pay nothing",
    },
    {
      icon: Gavel,
      title: "Appeals & Grievances",
      description: "Support filing appeals and grievances for denied coverage or inadequate care from insurers.",
      features: ["Appeal preparation", "Documentation support", "Grievance filing", "Follow-up management"],
      stat: "70%",
      statLabel: "Appeals successfully overturned",
    },
  ];

  const impactStats = [
    { value: "$4.2M+", label: "Saved for our clients" },
    { value: "12,000+", label: "Claims resolved" },
    { value: "98%", label: "Client satisfaction" },
    { value: "5,000+", label: "Families helped" },
  ];

  const differentiators = [
    {
      icon: Award,
      title: "Certified Patient Advocates",
      description: "Our team includes board-certified patient advocates with decades of combined healthcare experience.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Expertise",
      description: "Former nurses and healthcare administrators who understand the system from the inside out.",
    },
    {
      icon: TrendingDown,
      title: "No Win, No Fee Options",
      description: "For medical bill negotiations, we offer contingency pricing—you only pay when we save you money.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Your Healthcare Ally
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We Fight the System<br />
                <span className="text-accent">So You Don't Have To</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Navigating healthcare shouldn't feel like a full-time job. From battling insurance denials to decoding confusing medical bills, we stand in your corner—handling the complexity so you can focus on what matters most: your health and your family.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/fees">See Our Plans</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-healthcare.jpg"
                  alt="Healthcare advocate helping a patient"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Average client savings</p>
                        <p className="text-2xl font-bold text-foreground">$2,400/year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-accent/5 py-16 mb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Healthcare System Is Broken.<br />
              <span className="text-muted-foreground">We're Here to Fix Your Experience.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Americans spend an average of <strong className="text-foreground">18 hours per year</strong> fighting with insurance companies. 
              Medical billing errors affect <strong className="text-foreground">80% of hospital bills</strong>. 
              And <strong className="text-foreground">1 in 5 claims</strong> are wrongly denied on first submission. 
              You deserve better—and that's exactly what we deliver.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Advocacy Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your healthcare journey, handled with expertise and compassion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`bg-card rounded-3xl p-8 border shadow-soft hover:shadow-lg transition-all duration-300 group relative overflow-hidden ${
                  service.isPremium ? 'border-accent/50 ring-1 ring-accent/20' : 'border-border'
                }`}
              >
                {/* Premium Badge */}
                {service.isPremium && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-semibold py-1.5 text-center">
                    Additional Service • Money-Back Guarantee
                  </div>
                )}

                {/* Stat Badge */}
                <div className={`absolute ${service.isPremium ? 'top-12' : 'top-6'} right-6 text-right`}>
                  <p className="text-2xl font-bold text-accent">{service.stat}</p>
                  <p className="text-xs text-muted-foreground">{service.statLabel}</p>
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.isPremium ? 'mt-4' : ''}`}>
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Premium Note */}
                {service.premiumNote && (
                  <p className="text-sm font-medium text-accent mb-4 bg-accent/10 px-3 py-2 rounded-lg">
                    ✓ {service.premiumNote}
                  </p>
                )}
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Families Trust VCare
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just advocates—we're healthcare insiders fighting on your behalf.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Real Stories Teaser */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-12 border border-border"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  "They saved us $8,200 on a single hospital bill."
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  After my husband's emergency surgery, we received a bill that nearly broke us. VCare reviewed every line item, found duplicate charges and coding errors, and negotiated on our behalf. What started as $12,000 became $3,800. They gave us our peace of mind back.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">VCare Family Member since 2023</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Original Bill</span>
                    <span className="text-foreground font-semibold line-through">$12,000</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Errors Found</span>
                    <span className="text-destructive font-semibold">$4,200</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Negotiated Discount</span>
                    <span className="text-destructive font-semibold">$4,000</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Final Amount</span>
                      <span className="text-2xl font-bold text-accent">$3,800</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Healthcare Without the Hassle?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              Join thousands of families who've reclaimed their time, money, and peace of mind with VCare Advocacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link href="/fees">View Our Plans</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
