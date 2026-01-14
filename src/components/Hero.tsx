import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Decorative top element */}
        <div className="flex flex-col items-center mb-12 animate-fade-in">
          <div className="w-24 h-px bg-accent mb-3" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-[0.15em] mb-8 animate-fade-in-up animation-delay-200">
          Mazika
        </h1>

        {/* Tagline */}
        <p className="font-sans text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
          Design & Build . Estate Managers
        </p>

        {/* Decorative bottom element */}
        <div className="flex justify-center mb-20 animate-fade-in animation-delay-500">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer animate-fade-in animation-delay-700"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;