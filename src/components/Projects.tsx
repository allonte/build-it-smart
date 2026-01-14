import { useState } from "react";
import { ArrowRight, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  const projects = [
    {
      id: 1,
      title: "Sunrise Vista Residences",
      category: "residential",
      location: "Nairobi, Kenya",
      image: projectResidential,
      value: "KES 25M",
    },
    {
      id: 2,
      title: "Metro Business Center",
      category: "commercial",
      location: "Westlands, Nairobi",
      image: projectCommercial,
      value: "KES 150M",
    },
    {
      id: 3,
      title: "Highway Overpass",
      category: "infrastructure",
      location: "Mombasa Road",
      image: projectInfrastructure,
      value: "KES 450M",
    },
    {
      id: 4,
      title: "Oakwood Family Homes",
      category: "residential",
      location: "Karen, Nairobi",
      image: projectResidential,
      value: "KES 80M",
    },
    {
      id: 5,
      title: "Tech Hub Campus",
      category: "commercial",
      location: "Konza City",
      image: projectCommercial,
      value: "KES 280M",
    },
    {
      id: 6,
      title: "Riverside Bridge Project",
      category: "infrastructure",
      location: "Kisumu",
      image: projectInfrastructure,
      value: "KES 350M",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border px-4 py-2 mb-6">
            <Folder className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Our Portfolio</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
            Featured Projects
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
              className={`px-6 py-3 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-accent text-accent-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border overflow-hidden hover:border-accent/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Button variant="accent" size="sm">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-accent">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {project.location}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    Project Value
                  </span>
                  <span className="font-serif text-xl text-accent">
                    {project.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;