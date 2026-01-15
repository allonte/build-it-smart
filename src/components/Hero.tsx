import { ArrowRight, ChevronDown, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMazika from "@/assets/logo-mazika.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Building2, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "5+", label: "Years Excellence" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(40_15%_18%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(40_15%_18%/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_85%_55%/0.05)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoMazika} 
              alt="Mazika Design and Build" 
              className="h-24 md:h-32 w-auto mx-auto glow-gold"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">Building </span>
            <span className="text-gradient-gold">Dreams</span>
            <br />
            <span className="text-foreground">Into </span>
            <span className="text-gradient-gold">Reality</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
            Premier design, engineering, and construction services in East Africa. 
            We transform your vision into exceptional architectural masterpieces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-500">
            <Button 
              onClick={scrollToContact}
              size="xl" 
              className="rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold hover:shadow-gold-lg transition-all duration-300 px-8"
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="xl"
              className="rounded-full border-border bg-card/80 text-foreground hover:bg-card px-8"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats Marquee */}
          <div className="overflow-hidden max-w-4xl mx-auto animate-fade-in-up animation-delay-700">
            <div className="flex animate-marquee gap-8">
              {[...stats, ...stats, ...stats].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative flex-shrink-0 p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 min-w-[200px] md:min-w-[240px]"
                >
                  <div className="absolute inset-0 bg-gradient-gold-soft opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <div className="font-display text-3xl md:text-4xl text-gradient-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in animation-delay-1000"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;