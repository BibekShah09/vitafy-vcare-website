"use client";

import { Shield, Compass, Search, DollarSign, Users, FileText, Scale, Gavel, ArrowRight, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  const innerServices = [
    {
      icon: Shield,
      title: "Insurance Navigation",
      description: "We help you understand your coverage and find the right plan for your needs.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Compass,
      title: "Benefit Navigation",
      description: "Maximize your benefits and discover services you didn't know were covered.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Search,
      title: "Provider Search",
      description: "Find in-network doctors and specialists that match your healthcare needs.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: DollarSign,
      title: "Procedure Cost",
      description: "Get transparent pricing estimates before your medical procedures.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  const outerServices = [
    {
      icon: Users,
      title: "Care Coordination",
      description: "We coordinate between your providers to ensure seamless care transitions.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: FileText,
      title: "Claims Assistance",
      description: "Navigate the claims process with expert guidance and follow-up support.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Scale,
      title: "Bill Negotiation",
      description: "We negotiate on your behalf to reduce your medical bills significantly.",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Gavel,
      title: "Appeals & Grievances",
      description: "Fight denied claims with our expert appeals and grievance support.",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ];

  const OrbitIcon = ({ 
    service, 
    angle, 
    radius, 
    isInner 
  }: { 
    service: typeof innerServices[0]; 
    angle: number; 
    radius: number;
    isInner: boolean;
  }) => {
    const Icon = service.icon;
    
    return (
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
          marginLeft: '-24px',
          marginTop: '-24px',
        }}
      >
        <div className={isInner ? "counter-rotate-cw" : "counter-rotate-ccw"}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center shadow-soft cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-card`}
              >
                <Icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[200px] text-center">
              <p className="font-semibold">{service.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  };

  // Mobile fallback - static radial layout
  const MobileLayout = () => (
    <div className="relative w-72 h-72 mx-auto">
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-teal flex items-center justify-center shadow-glow z-10">
        <Heart className="w-7 h-7 text-primary-foreground fill-primary-foreground/30" />
      </div>
      
      {/* Services in a circle */}
      {[...innerServices, ...outerServices].map((service, index) => {
        const angle = (index * 45) - 90; // Start from top
        const radius = 110;
        const Icon = service.icon;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <Tooltip key={service.title}>
            <TooltipTrigger asChild>
              <div
                className={`absolute left-1/2 top-1/2 w-11 h-11 rounded-full ${service.color} flex items-center justify-center shadow-soft cursor-pointer transition-all duration-300 hover:scale-110`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <Icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[180px] text-center">
              <p className="font-semibold text-xs">{service.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );

  // Desktop orbit animation
  const OrbitLayout = () => (
    <div className="orbit-container relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] mx-auto">
      {/* Center "You" element */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-teal flex flex-col items-center justify-center z-10"
        style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
      >
        <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground fill-primary-foreground/30" />
        <span className="text-primary-foreground text-xs font-semibold mt-0.5">You</span>
      </motion.div>

      {/* Decorative rings */}
      <div className="absolute inset-[60px] sm:inset-[70px] lg:inset-[85px] rounded-full border border-primary/10" />
      <div className="absolute inset-[25px] sm:inset-[30px] lg:inset-[35px] rounded-full border border-accent/10" />

      {/* Inner Ring */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="orbit-ring animate-orbit-cw"
      >
        {innerServices.map((service, index) => (
          <OrbitIcon
            key={service.title}
            service={service}
            angle={index * 90}
            radius={100}
            isInner={true}
          />
        ))}
      </motion.div>

      {/* Outer Ring */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="orbit-ring animate-orbit-ccw"
      >
        {outerServices.map((service, index) => (
          <OrbitIcon
            key={service.title}
            service={service}
            angle={index * 90 + 45}
            radius={170}
            isInner={false}
          />
        ))}
      </motion.div>
    </div>
  );

  return (
    <TooltipProvider delayDuration={100}>
      <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute inset-0 bg-gradient-calm opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              How We Care For You
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            >
              Your healthcare,{" "}
              <span className="text-gradient-teal">simplified</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              From insurance to billing, we guide you through every healthcare challenge.
            </motion.p>
          </div>

          {/* Orbit Visualization */}
          <div className="mb-12 lg:mb-16">
            {isMobile ? <MobileLayout /> : <OrbitLayout />}
          </div>

          {/* Hover instruction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            {isMobile ? "Tap icons to see services" : "Hover over icons to see services"}
          </motion.p>

          {/* CTA to What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/what-we-do">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Services;
