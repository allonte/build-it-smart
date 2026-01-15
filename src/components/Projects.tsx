import { useState } from "react";
import { ArrowRight, Folder, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectDrainage from "@/assets/project-drainage.jpg";
import projectExcavation from "@/assets/project-excavation.jpg";
import projectSlab from "@/assets/project-slab.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "construction", label: "Construction" },
    { id: "interior", label: "Interior" },
  ];

  const projects = [
    {
      id: 1,
      title: "Drainage System Installation",
      category: "infrastructure",
      location: "Mombasa County",
      image: projectDrainage,
      value: "KES 45M",
    },
    {
      id: 2,
      title: "Road Excavation Works",
      category: "infrastructure",
      location: "Kilifi County",
      image: projectExcavation,
      value: "KES 120M",
    },
    {
      id: 3,
      title: "Reinforced Concrete Slab",
      category: "construction",
      location: "Nairobi, Kenya",
      image: projectSlab,
      value: "KES 85M",
    },
    {
      id: 4,
      title: "Premium Interior Design",
      category: "interior",
      location: "Karen, Nairobi",
      image: projectInterior,
      value: "KES 35M",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(240_10%_20%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(240_10%_20%/0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Folder className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Our Portfolio</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Explore our portfolio of successful projects and innovative solutions we've delivered to clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-primary text-primary-foreground shadow-primary"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-sans text-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* View Button */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Button size="sm" className="bg-gradient-primary text-primary-foreground shadow-primary rounded-full">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-sans text-xs">{project.location}</span>
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-4">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    Project Value
                  </span>
                  <span className="font-display text-xl text-gradient-primary">
                    {project.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;