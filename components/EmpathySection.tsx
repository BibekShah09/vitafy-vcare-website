"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EmpathySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scenarios = [
    "Drowning in medical bills you don't understand?",
    "Insurance denied your claim... again?",
    "Caring for a loved one and feeling lost?",
    "Lost in insurance plans and benefits?",
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream-light relative overflow-hidden" ref={ref}>
      {/* Subtle organic background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Scenarios - Each fades in on scroll */}
          <div className="space-y-8 mb-16">
            {scenarios.map((scenario, index) => (
              <motion.p
                key={scenario}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground/80 text-center leading-relaxed"
              >
                {scenario}
              </motion.p>
            ))}
          </div>

          {/* The turning point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              We've been there.
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-primary">
              And we're here to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
