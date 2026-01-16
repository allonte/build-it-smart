import { ArrowRight, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountingNumber from "@/components/CountingNumber";
import heroBackground from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Building2, value: 150, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
    { icon: Award, value: 5, suffix: "+", label: "Years Excellence" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Construction site at sunset" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(215_15%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(215_15%_20%/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-5xl">
          {/* Company Name */}
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-4 text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-foreground">MAZIKA</span>
          </motion.h1>
          <motion.h2 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-primary mb-8 text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ENGINEERING
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="font-sans text-xl md:text-2xl text-foreground mb-4 text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            where design meets innovation
          </motion.p>

          {/* Subheadline */}
          <motion.p 
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-left leading-relaxed"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Bring your construction ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-start mb-16"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button 
              onClick={scrollToProjects}
              size="xl" 
              className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary hover:shadow-primary-lg transition-all duration-300 px-8"
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="xl"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-card px-8"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-start gap-12 md:gap-20"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  <CountingNumber value={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View Our Work Marquee */}
        <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8 font-display text-lg tracking-[0.3em] uppercase text-muted-foreground/60">
                View Our Work • Explore Projects • View Our Work • Explore Projects •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;