import { ArrowRight, ChevronDown, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-300" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(240_10%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(240_10%_20%/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Company Name - Like Ballan */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-4 animate-fade-in-up">
            <span className="text-foreground">MAZIKA</span>
          </h1>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-primary mb-8 animate-fade-in-up animation-delay-200">
            ENGINEERING
          </h2>

          {/* Tagline */}
          <p className="font-sans text-xl md:text-2xl text-foreground mb-4 animate-fade-in-up animation-delay-300">
            where design meets innovation
          </p>

          {/* Subheadline */}
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
            Bring your construction ideas to life.
          </p>

          {/* CTA Buttons - Like Ballan */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-500">
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
          </div>

          {/* Stats - Simple row like Ballan */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 animate-fade-in-up animation-delay-700">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
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