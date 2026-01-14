import { Building2, Home, Wrench, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom homes, apartments, and housing developments built with precision and care. From foundation to finish, we create spaces where families thrive.",
      features: ["Custom Home Building", "Apartment Complexes", "Housing Estates", "Smart Home Integration"],
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description:
        "Modern office spaces, retail centers, and industrial facilities designed for success. We build environments that drive business growth.",
      features: ["Office Buildings", "Retail Centers", "Industrial Facilities", "Mixed-Use Developments"],
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description:
        "Transform existing spaces with expert renovations. We breathe new life into properties while preserving their character.",
      features: ["Interior Remodeling", "Structural Upgrades", "Historic Restoration", "Green Retrofitting"],
    },
    {
      icon: Hammer,
      title: "Civil Engineering",
      description:
        "Infrastructure projects that connect communities. Roads, bridges, and utilities built to last for generations.",
      features: ["Road Construction", "Bridge Engineering", "Utility Infrastructure", "Site Development"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
            Comprehensive Construction Solutions
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            From concept to completion, we offer a full range of construction
            services tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background border border-border p-8 hover:border-accent/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 font-sans text-sm text-foreground"
                  >
                    <div className="w-1 h-1 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;