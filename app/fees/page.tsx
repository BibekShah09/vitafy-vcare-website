"use client";
import { motion } from "framer-motion";
import { Star, Scale, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Fees = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Individual",
      description: "Perfect for individuals navigating their healthcare journey",
      monthlyPrice: 12,
      annualPrice: 10,
      image: "/plan-individual.png",
    },
    {
      name: "Couple",
      description: "Comprehensive coverage for you and your partner",
      monthlyPrice: 18,
      annualPrice: 15,
      popular: true,
      image: "/plan-couple.png",
    },
    {
      name: "Family",
      description: "Complete peace of mind for your entire family",
      monthlyPrice: 24,
      annualPrice: 20,
      image: "/plan-family.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Fees
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Affordable healthcare advocacy for everyone. Choose the plan that fits your needs.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-2 text-primary font-semibold">Save 20%</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.popular
                    ? 'border-2 border-primary shadow-xl'
                    : 'border border-border shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image 
                    src={plan.image} 
                    alt={`${plan.name} plan`}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-card">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {isAnnual 
                        ? `Billed $${plan.annualPrice * 12} annually` 
                        : `or $${plan.annualPrice}/mo billed annually`
                      }
                    </p>
                  </div>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <p className="text-muted-foreground mb-4">
              All plans include the same comprehensive advocacy services.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/what-we-do">View All Services</Link>
            </Button>
          </motion.div>

          {/* Bill Negotiation Add-on */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 md:p-10 border-2 border-accent/30 relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                Add-On Service
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Bill Negotiation</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Let us negotiate with healthcare providers and insurers to reduce your medical bills. We handle the tough conversations so you don't have to.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      Direct negotiation with providers
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      Error & overcharge detection
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      Payment plan arrangements
                    </li>
                  </ul>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="inline-block bg-card rounded-2xl p-6 shadow-soft border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Per case fee</p>
                    <p className="text-5xl font-bold text-accent mb-2">$49</p>
                    <div className="flex items-center justify-center md:justify-end gap-2 text-sm font-medium text-primary mb-4">
                      <ShieldCheck className="w-4 h-4" />
                      Money-Back Guarantee
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      If we don't save you $100 or more,<br />you pay nothing
                    </p>
                    <Button variant="cta" className="w-full">
                      Submit a Bill
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Your satisfaction, 100% guaranteed
            </h3>
            <p className="text-muted-foreground">
              With our 100% money-back guarantee, you can engage with our services with confidence, knowing that your satisfaction is our top priority.
            </p>
          </motion.div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Fees;
