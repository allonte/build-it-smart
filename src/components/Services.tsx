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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we offer a full range of construction
            services tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
