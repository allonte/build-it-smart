import { Building2, Home, Wrench, Hammer, Zap, Droplets, Sun, Calculator, Layers, Cog, ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-construction.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Architecture",
      description: "Brief Formulation, Building and Interior Design, Planning & Infrastructure.",
      features: ["Project Management", "Contract Administration", "Building Design", "Infrastructure Planning"],
    },
    {
      icon: Layers,
      title: "Design Visualization",
      description: "Bringing your vision to life through cutting-edge visualization technology.",
      features: ["3D Render Imagery", "3D Animations", "Virtual Reality", "Scale Models"],
    },
    {
      icon: Home,
      title: "Landscape Architecture",
      description: "Creating harmonious outdoor environments that complement built structures.",
      features: ["Analysis & Feasibility", "Site Selection", "Utilization Analysis", "Design & Planning"],
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description: "Expert structural solutions ensuring safety, durability, and optimal performance.",
      features: ["Building Structures", "Foundations", "Walling Systems", "Roofing Solutions"],
    },
    {
      icon: Wrench,
      title: "Metal Works & Fabrication",
      description: "Precision metalwork and fabrication for structural and decorative applications.",
      features: ["Steel Work", "Fabrication Works", "Welding", "Fitting"],
    },
    {
      icon: Droplets,
      title: "Waste Water Management",
      description: "Sustainable wastewater solutions using advanced treatment technologies.",
      features: ["Aerobic Septic Tanks", "Johkasou Systems", "BioSeptic Works", "Treatment Plants"],
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Complete electrical solutions for modern buildings and infrastructure.",
      features: ["Power Supply", "Building Lighting", "Automation Systems", "Communication"],
    },
    {
      icon: Cog,
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems for comfort, safety, and efficiency.",
      features: ["Plumbing & Drainage", "Firefighting Systems", "Ventilation", "Air Conditioning"],
    },
    {
      icon: Calculator,
      title: "Quantity Survey",
      description: "Professional cost management and financial control for your project.",
      features: ["Cost Planning", "Expenditure Control", "Project Accounting", "Tender Documentation"],
    },
    {
      icon: Sun,
      title: "Solar Power Solutions",
      description: "Design, installation, and maintenance of reliable solar energy systems.",
      features: ["System Design", "Installation", "Maintenance", "Energy Optimization"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_85%_55%/0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Cog className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Our Services</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Comprehensive <span className="text-gradient-gold">Solutions</span>
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            From concept to completion, we offer a full range of design, engineering, and construction 
            services tailored to meet your unique needs.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 rounded-3xl overflow-hidden">
          <img 
            src={servicesImage} 
            alt="Construction site in progress" 
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-500">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-sans text-xs text-foreground/80">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                  <span className="font-sans text-xs">Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;