import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "CEO, Johnson Properties",
      content:
        "BuildCraft transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. The commercial complex they built for us exceeded all expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Homeowner",
      content:
        "Building our dream home was a seamless experience thanks to BuildCraft. From the initial design to the final walkthrough, they kept us informed and involved every step of the way.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      role: "Director, City Infrastructure",
      content:
        "We've partnered with BuildCraft on multiple infrastructure projects. Their expertise, safety record, and ability to deliver on time and within budget makes them our contractor of choice.",
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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience working with BuildCraft.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-accent" />
            </div>

            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "bg-muted-foreground/30"
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
