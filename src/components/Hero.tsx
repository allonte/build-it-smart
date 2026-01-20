import { Building2, Users, Award } from "lucide-react";
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
        {/* Subtitle - from right */}
        <motion.p 
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Where Design Meets Innovation
        </motion.p>

        {/* Main Headline with slow-motion slide animation */}
        <div className="overflow-hidden">
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-foreground"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.3, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            MAZIKA
          </motion.h1>
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-primary mt-2"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.6, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            ENGINEERING
          </motion.h2>
        </div>

        {/* Description - from left */}
        <motion.p 
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Building the future with precision and integrity. We transform your construction dreams into exceptional realities with world-class craftsmanship.
        </motion.p>

        {/* CTA Links - from right */}
        <motion.div 
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <button 
            onClick={scrollToProjects}
            className="font-sans text-sm tracking-wider uppercase text-foreground border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
          >
            View Our Work
          </button>
          <button 
            onClick={scrollToContact}
            className="font-sans text-sm tracking-wider uppercase text-foreground border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
          >
            Get a Quote
          </button>
        </motion.div>


        {/* Stats Row - staggered from alternating sides */}
        <motion.div 
          className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15, ease: "easeOut" }}
            >
              <div className="font-display text-3xl md:text-4xl text-foreground mb-1">
                <CountingNumber value={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Image Side */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img 
          src={heroBackground} 
          alt="Construction site at sunset" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlay for blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="lg:hidden absolute inset-0 -z-10">
        <img 
          src={heroBackground} 
          alt="Construction site at sunset" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />
      </div>
    </section>
  );
};

export default Hero;
