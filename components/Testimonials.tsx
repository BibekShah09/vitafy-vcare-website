"use client";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heroTestimonial = {
    name: "Sarah Mitchell",
    role: "Cancer Survivor",
    content: "When I got my diagnosis, I felt like I was drowning. Medical bills piling up, insurance denying claims, doctors using words I didn't understand. VCare didn't just help me navigate—they held my hand through the darkest time of my life. They fought for me when I couldn't fight for myself.",
    result: "Saved $23,000 in medical bills",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  };

  const otherTestimonials = [
    {
      name: "Robert Chen",
      role: "Family Caregiver",
      content: "When my mother needed complex care coordination, VCare stepped in with such warmth and expertise. They made the impossible feel manageable.",
      result: "Coordinated 5 specialists seamlessly",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Maria Garcia",
      role: "Heart Patient",
      content: "The team explained every option with patience and fought for the best specialists. They truly changed my entire health journey.",
      result: "Insurance claim approved after 3 denials",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "James Williams",
      role: "Chronic Pain Patient",
      content: "After years of feeling dismissed, VCare connected me with doctors who actually listened. For the first time, I felt hope.",
      result: "Found the right treatment plan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-cream-light relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            Real Stories, Real Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Hear from people{" "}
            <span className="text-gradient-primary">we've helped</span>
          </motion.h2>
        </div>

        {/* Hero Testimonial - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={heroTestimonial.image}
                  alt={heroTestimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                
                {/* Result badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  {heroTestimonial.result}
                </motion.div>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Large quote mark */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary/20" fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(heroTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-highlight fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl font-display text-foreground leading-relaxed mb-8">
                  "{heroTestimonial.content}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-display font-bold text-lg text-foreground">{heroTestimonial.name}</div>
                  <div className="text-muted-foreground">{heroTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-highlight fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>

              {/* Result */}
              <p className="text-sm text-accent font-medium mb-4">
                ✓ {testimonial.result}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <div className="font-display font-bold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
