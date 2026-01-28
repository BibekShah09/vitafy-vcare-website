"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Layers, CircleDollarSign } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentiators = [
    {
      icon: Heart,
      title: "Patient-First, Always",
      description: "We work for you—not providers, carriers, or employers. Your needs come first, every time.",
      color: "text-terracotta",
      bgColor: "bg-terracotta/10",
    },
    {
      icon: Layers,
      title: "Insurance & Plan Agnostic",
      description: "We support members across all insurance types and healthcare systems without bias or limitation.",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: CircleDollarSign,
      title: "Free-Choice & Marketplace-Aware",
      description: "We help members outside insurance find cash-pay marketplace options that may cost less than your insurance.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-calm relative overflow-hidden">
      {/* Soft decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side with team */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                alt="VCare team of advocates"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            {/* Floating founder quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-card rounded-2xl p-6 shadow-card border border-border max-w-xs"
            >
              <p className="text-foreground italic mb-3">
                "I started VCare after watching my mother struggle alone through cancer treatment. No one should face that."
              </p>
              <p className="text-sm font-display font-bold text-primary">— Dr. Emily Chen, Founder</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              The People Behind VCare
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight"
            >
              We're not just advocates.{" "}
              <span className="text-gradient-primary">We're your champions.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground mb-10"
            >
              <p>
                Our team includes nurses, social workers, insurance experts, and patient advocates 
                who've seen the healthcare system from every angle.
              </p>
              <p>
                We've spent 15 years building relationships and learning the system inside out—
                so we know exactly how to get you the help you need.
              </p>
            </motion.div>

            {/* Differentiators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Button variant="hero" size="lg" className="group">
                Meet Our Team
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
