import { Building2, Home, Wrench, Hammer, ArrowRight, Zap, Droplets, Sun, Calculator, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Architecture",
      description:
        "Brief Formulation, Building and Interior Design, Planning & Infrastructure including roads, water supply, sewerage and surface drainage.",
      features: ["Project Management", "Contract Administration", "Building Design", "Infrastructure Planning"],
    },
    {
      icon: Layers,
      title: "Design Visualization",
      description:
        "Bringing your vision to life through cutting-edge visualization technology and immersive presentations.",
      features: ["3D Render Imagery", "3D Animations", "Virtual Reality", "Scale Models"],
    },
    {
      icon: Home,
      title: "Landscape Architecture",
      description:
        "Creating harmonious outdoor environments that complement and enhance built structures.",
      features: ["Analysis & Feasibility", "Site Selection", "Utilization Analysis", "Design & Planning"],
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description:
        "Expert structural solutions ensuring safety, durability, and optimal performance of your buildings.",
      features: ["Building Structures", "Foundations", "Walling Systems", "Roofing Solutions"],
    },
    {
      icon: Wrench,
      title: "Metal Works & Fabrication",
      description:
        "Precision metalwork and fabrication services for structural and decorative applications.",
      features: ["Steel Work", "Fabrication Works", "Welding", "Fitting"],
    },
    {
      icon: Droplets,
      title: "Waste Water Management",
      description:
        "Sustainable wastewater solutions using advanced treatment technologies.",
      features: ["Aerobic Septic Tanks", "Johkasou Systems", "BioSeptic Works", "Treatment Plants"],
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description:
        "Complete electrical solutions for modern buildings and infrastructure.",
      features: ["Power Supply", "Building Lighting", "Automation Systems", "Communication Systems"],
    },
    {
      icon: Home,
      title: "Mechanical Engineering",
      description:
        "Comprehensive mechanical systems for comfort, safety, and efficiency.",
      features: ["Plumbing & Drainage", "Firefighting Systems", "Ventilation", "Air Conditioning"],
    },
    {
      icon: Calculator,
      title: "Quantity Survey",
      description:
        "Professional cost management and financial control throughout your construction project.",
      features: ["Cost Planning", "Expenditure Control", "Project Accounting", "Tender Documentation"],
    },
    {
      icon: Sun,
      title: "Solar Power Solutions",
      description:
        "Design, installation, and maintenance of reliable solar energy systems for sustainable power.",
      features: ["System Design", "Installation", "Maintenance", "Energy Optimization"],
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
            Comprehensive Solutions
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            From concept to completion, we offer a full range of design, engineering, and construction services tailored to meet your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background border border-border p-6 hover:border-accent/50 transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <service.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-sans text-xs text-foreground"
                  >
                    <div className="w-1 h-1 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;