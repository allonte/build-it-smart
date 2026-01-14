import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      role: "CEO, Mwangi Properties",
      content:
        "Mazika Engineering transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. The commercial complex they built for us exceeded all expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      role: "Homeowner",
      content:
        "Building our dream home was a seamless experience thanks to Mazika Engineering. From the initial design to the final walkthrough, they kept us informed and involved every step of the way.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Ochieng",
      role: "Director, County Infrastructure",
      content:
        "We've partnered with Mazika Engineering on multiple infrastructure projects. Their expertise, safety record, and ability to deliver on time and within budget makes them our contractor of choice.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
            What Our Clients Say
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience working with Mazika Engineering.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background border border-border p-10 md:p-14">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 border border-accent/30 flex items-center justify-center">
              <Quote className="w-7 h-7 text-accent" />
            </div>

            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-10 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-accent flex items-center justify-center">
                  <span className="font-serif text-2xl text-accent-foreground">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-sans font-medium text-foreground tracking-wide">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="font-sans text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted hover:border-accent/50 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-muted hover:border-accent/50 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-px transition-all ${
                    index === activeIndex
                      ? "w-10 bg-accent"
                      : "w-6 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;