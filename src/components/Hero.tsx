import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-construction.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev % totalSlides) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#2a3a5a]"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent z-10" />
      
      {/* Hero Image - Right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-1/2">
        <img 
          src={heroBackground} 
          alt="Construction excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/50 to-transparent" />
      </div>

      {/* Content - Left side */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 pt-24">
        <div className="max-w-xl">
          {/* Small Label */}
          <p className="text-primary font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Our Vision
          </p>

          {/* Large Heading */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 animate-fade-in-up animation-delay-200">
            <span className="text-white">BUILD</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-base md:text-lg text-white/70 max-w-md mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
            Building the future with precision and integrity. 
            We transform your construction dreams into 
            exceptional realities with world-class craftsmanship.
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToProjects}
            className="group flex items-center gap-3 text-white font-sans text-sm tracking-wider uppercase animate-fade-in-up animation-delay-400"
          >
            <span className="relative">
              Take A Look
              <span className="absolute bottom-0 left-0 w-full h-px bg-white origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex items-center justify-between">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicator */}
          <div className="flex items-center gap-4 text-white font-sans text-sm">
            <span>0{currentSlide}</span>
            <div className="w-24 md:w-40 h-px bg-white/30 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              />
            </div>
            <span>0{totalSlides}</span>
          </div>

          {/* Next Arrow */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;