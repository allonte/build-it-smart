import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    { id: 1, name: "James Mwangi", role: "CEO, Mwangi Properties", content: "Mazika Engineering transformed our vision into reality. Their attention to detail and commitment to quality is unmatched.", rating: 5 },
    { id: 2, name: "Grace Wanjiku", role: "Homeowner", content: "Building our dream home was a seamless experience thanks to Mazika Engineering. They kept us informed every step of the way.", rating: 5 },
    { id: 3, name: "David Ochieng", role: "Director, County Infrastructure", content: "We've partnered with Mazika Engineering on multiple infrastructure projects. Their expertise makes them our contractor of choice.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mb-16" direction="left">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6 text-left">What Our Clients Say</h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed text-left">Here's what our valued clients have to say about their experience working with us.</p>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.2}>
          <div className="max-w-4xl">
            <div className="relative bg-background border border-border p-10 md:p-14 rounded-2xl">
              <div className="absolute top-8 right-8 w-16 h-16 border border-primary/30 flex items-center justify-center rounded-xl">
                <Quote className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-10 italic">"{testimonials[activeIndex].content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-gold flex items-center justify-center rounded-xl">
                    <span className="font-display text-2xl text-primary-foreground">{testimonials[activeIndex].name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-foreground">{testimonials[activeIndex].name}</h4>
                    <p className="font-sans text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <button onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-all rounded-xl"><ChevronLeft className="w-5 h-5 text-foreground" /></button>
                <button onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-all rounded-xl"><ChevronRight className="w-5 h-5 text-foreground" /></button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;