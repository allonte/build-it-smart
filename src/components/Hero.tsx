import { ArrowRight, ArrowLeft, Building2, Users, Award } from "lucide-react";
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
      className="relative min-h-screen flex overflow-hidden"
    >
      {/* Left Content Side */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center bg-background px-8 md:px-16 lg:px-20 py-24 z-10">
        {/* Subtitle */}
        <motion.p 
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Where Design Meets Innovation
        </motion.p>

        {/* Main Headline */}
        <motion.h1 
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          MAZIKA
        </motion.h1>

        <motion.h2 
          className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          ENGINEERING
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Building the future with precision and integrity. We transform your construction dreams into exceptional realities with world-class craftsmanship.
        </motion.p>

        {/* CTA Link */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button 
            onClick={scrollToProjects}
            className="font-sans text-sm tracking-wider uppercase text-foreground border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Arrow Buttons */}
          <div className="flex items-center gap-4">
            <button 
              className="w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToProjects}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats Indicator */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-display text-lg">01</span>
            <div className="w-24 h-[1px] bg-muted-foreground/30 relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-foreground" />
            </div>
            <span className="font-display text-lg">03</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="font-display text-3xl md:text-4xl text-foreground mb-1">
                <CountingNumber value={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img 
          src={heroBackground} 
          alt="Construction site at sunset" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0 -z-10">
        <img 
          src={heroBackground} 
          alt="Construction site at sunset" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
    </section>
  );
};

export default Hero;
