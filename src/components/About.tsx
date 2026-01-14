import { Shield, Clock, Users, Award, Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    { title: "Quality", description: "Excellence in every project we deliver" },
    { title: "Safety", description: "Rigorous protocols protecting everyone" },
    { title: "Teamwork", description: "Collaborative approach to success" },
    { title: "Innovation", description: "Creative and sustainable solutions" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Overview */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
            Overview
          </span>
          <p className="font-serif text-xl md:text-2xl text-foreground mt-6 leading-relaxed">
            Beautiful, functional buildings, interiors and landscapes are achieved through a disciplined approach involving rigorous analysis of purpose, sensitive understanding of the environment, creation of coherent spaces and meticulous detailing.
          </p>
          <p className="font-sans text-muted-foreground mt-6 leading-relaxed">
            Employing a design philosophy with a focus on innovative and sustainable ideas, substantive intentions, and an understanding of the human need. We are a team of Engineers, Designers, Architects, Interior Designers, Construction Project Managers, Real Estate professionals, and Visualizers with a keen interest in helping you conceive and create buildings, interiors, and landscapes that adhere to the essential elements of successful developments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission & Vision */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 border border-accent flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Our Mission</h3>
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Our mission is to provide quality service both personally, professionally, and in practice with a non-adversarial approach. We believe in offering innovative, creative, and sustainable solutions in the design and build environment to our clients.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 border border-accent flex items-center justify-center">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Our Vision</h3>
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Our vision is to be the best company in architecture design, interior design, 3D rendering, project management, and development in East Africa.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="border border-border p-4 hover:border-accent/50 transition-colors">
                    <h4 className="font-sans font-medium text-foreground mb-1">{value.title}</h4>
                    <p className="font-sans text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Composition */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6">We Are a Professional Team</h3>
            <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
              Our diverse team brings together expertise from multiple engineering and design disciplines:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Civil Engineers",
                "Mechanical Engineers",
                "Electrical Engineers",
                "Software Engineers",
                "Surveyors",
                "Architects",
                "Quantity Surveyors",
                "Visualizers",
              ].map((role) => (
                <div key={role} className="flex items-center gap-3 py-3 border-b border-border">
                  <div className="w-1.5 h-1.5 bg-accent" />
                  <span className="font-sans text-foreground text-sm">{role}</span>
                </div>
              ))}
            </div>

            {/* Certifications Preview */}
            <div className="mt-10 bg-card border border-border p-6">
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-foreground">NCA Registered</span>
                  <span className="font-sans text-xs text-muted-foreground">Category NCA 8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-foreground">Incorporated</span>
                  <span className="font-sans text-xs text-muted-foreground">March 2021</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-foreground">KRA Registered</span>
                  <span className="font-sans text-xs text-muted-foreground">PIN: P052001159M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;