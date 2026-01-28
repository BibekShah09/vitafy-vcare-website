"use client";
import { motion } from "framer-motion";
import { MessageCircle, Search, Smile, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Submit Your Request",
      description: "Reach out to us with your healthcare concerns via phone, email or our online and mobile platform.",
      isActive: true,
    },
    {
      number: "2",
      icon: Search,
      title: "Understand Your Options",
      description: "Our advocates delve into your situation, researching options tailored to your needs and keeping you informed every step of the way.",
      isActive: false,
    },
    {
      number: "3",
      icon: Smile,
      title: "Connect & Save",
      description: "We connect you with resources, schedule appointments, and streamline your healthcare experience, saving you time, money, and stress.",
      isActive: false,
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "Most clients are matched with an advocate within 24 hours of signing up. For urgent matters, we offer same-day consultations.",
    },
    {
      question: "What if my insurance claim is denied?",
      answer: "We specialize in claim appeals. Our success rate for overturned denials is over 70%. We know the system and fight for your coverage.",
    },
    {
      question: "Can you help with elderly family members?",
      answer: "Absolutely. Our Family plan includes elder care support, helping coordinate care, navigate Medicare, and ensure your loved ones receive proper treatment.",
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes. We take privacy seriously. All your health information is protected and encrypted. We only share information with your explicit consent.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Two Column Layout */}
        <section className="pt-32 pb-20 lg:pb-28 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
          {/* Background decorations */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Simple Process
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Your journey with{" "}
                <span className="text-gradient-primary">VCare</span> begins here
              </h1>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Left - Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative">
                  {/* Main illustration card */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center relative overflow-hidden"
                  >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.3),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.2),transparent_50%)]" />
                    
                    {/* Central icon composition */}
                    <div className="relative z-10 flex flex-col items-center gap-6">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-card shadow-elevated flex items-center justify-center border border-border"
                      >
                        <MessageCircle className="w-16 h-16 lg:w-20 lg:h-20 text-accent" />
                      </motion.div>
                      
                      {/* Floating mini cards */}
                      <motion.div
                        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 lg:top-0 lg:right-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Search className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-4 -left-4 lg:bottom-0 lg:left-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Smile className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                      </motion.div>

                      <p className="text-lg lg:text-xl font-display font-semibold text-foreground text-center">
                        We're here to help
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - Vertical Step Cards */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4 order-1 lg:order-2"
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`relative rounded-2xl p-6 transition-all duration-300 ${
                      step.isActive
                        ? "bg-accent text-accent-foreground shadow-elevated"
                        : "bg-card border border-border hover:border-accent/30 hover:shadow-soft"
                    }`}
                  >
                    <div className="flex gap-5">
                      {/* Number circle */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                          step.isActive
                            ? "bg-white/20 text-accent-foreground"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-display font-bold mb-2 ${
                            step.isActive ? "text-accent-foreground" : "text-foreground"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            step.isActive ? "text-accent-foreground/90" : "text-muted-foreground"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {step.isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white/50 rounded-r-full"
                      />
                    )}
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  className="pt-4"
                >
                  <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/fees" className="inline-flex items-center gap-2">
                      Get Started Today
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section - Reduces Anxiety */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                  No Surprises
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  What to Expect After You Reach Out
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { text: "A real person reviews your request", icon: "👤" },
                  { text: "We may ask a few follow-up questions", icon: "💬" },
                  { text: "You'll receive clear guidance on next steps", icon: "📋" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Reassurance statements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-8 text-center"
              >
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {[
                    "No pressure",
                    "No upselling",
                    "No insurance sales",
                  ].map((text, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm font-medium text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {text}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-display font-semibold text-foreground">
                  You stay in control at every step.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Your Information Is Respected
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your information is handled with care and used only to support your request.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card rounded-full border border-border text-sm font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  We never sell your data
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card rounded-full border border-border text-sm font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Never shared without consent
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-gradient-calm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
                Common Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-accent/20 transition-colors"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
          {/* Background decoration */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                You don't need to have everything figured out.
              </p>
              <p className="text-xl font-medium text-foreground mb-10">
                Start with a conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/fees" className="inline-flex items-center gap-2">
                    Get Help Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-2">
                  <Link href="/about-us" className="inline-flex items-center gap-2">
                    Talk to an Advocate
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Free Consultation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Confidential
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Available 24/7
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
