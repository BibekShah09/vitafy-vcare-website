"use client";
import { MessageCircle, Search, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Start the Conversation",
      description: "Submit your request online, by phone, or email.",
      emotion: "Hope",
      emotionColor: "text-primary",
    },
    {
      icon: Search,
      number: "02",
      title: "Get Clear on Options",
      description: "We break things down and help you understand what's possible.",
      emotion: "Relief",
      emotionColor: "text-secondary",
    },
    {
      icon: Smile,
      number: "03",
      title: "Take Action & Save",
      description: "We support the process—resolution, savings, and peace of mind.",
      emotion: "Joy",
      emotionColor: "text-accent",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-calm relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
          >
            Your Journey With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            From overwhelmed to{" "}
            <span className="text-gradient-teal">empowered</span>
          </motion.h2>
        </div>

        {/* Journey Path */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block absolute top-24 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full origin-left"
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="relative text-center"
              >
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 w-28 h-28 mx-auto mb-8 rounded-full bg-card border-4 border-background shadow-elevated flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground text-sm font-bold rounded-full flex items-center justify-center shadow-soft">
                    {step.number}
                  </span>
                </motion.div>

                {/* Emotion label */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className={`text-sm font-medium ${step.emotionColor} mb-2 block`}
                >
                  {step.emotion}
                </motion.span>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
