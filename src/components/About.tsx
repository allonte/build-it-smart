import { Eye, Shield, Lightbulb, Users, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import missionIcon from "@/assets/mission-icon.png";
import visionIcon from "@/assets/vision-icon.png";

const About = () => {
  const values = [
    { icon: Shield, title: "Quality", description: "Excellence in every project" },
    { icon: Shield, title: "Safety", description: "Rigorous protocols always" },
    { icon: Users, title: "Teamwork", description: "Collaborative approach" },
    { icon: Lightbulb, title: "Innovation", description: "Creative solutions" },
  ];

  const roles = [
    "Civil Engineers",
    "Mechanical Engineers",
    "Electrical Engineers",
    "Software Engineers",
    "Surveyors",
    "Architects",
    "Quantity Surveyors",
    "Visualizers",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(270_15%_18%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_15%_18%/0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Overview */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-20" direction="left">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">About Us</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
            Crafting <span className="text-gradient-primary">Excellence</span> Through
            <br />Disciplined Design
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Beautiful, functional buildings, interiors and landscapes are achieved through a disciplined approach 
            involving rigorous analysis of purpose, sensitive understanding of the environment, creation of 
            coherent spaces and meticulous detailing.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Mission & Vision */}
          <div className="space-y-8">
            {/* Mission */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 text-center">
                <div className="flex flex-col items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary p-2">
                    <img src={missionIcon} alt="Mission" className="w-full h-full object-contain invert" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  To provide quality service both personally, professionally, and in practice with a non-adversarial 
                  approach. We believe in offering innovative, creative, and sustainable solutions in the design 
                  and build environment to our clients.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 text-center">
                <div className="flex flex-col items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary p-2">
                    <img src={visionIcon} alt="Vision" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Our Vision</h3>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  To be the best company in architecture design, interior design, 3D rendering, project management, 
                  and development in East Africa.
                </p>
              </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection direction="left" delay={0.3}>
              <div className="text-center">
                <h3 className="font-display text-xl text-foreground mb-5">Our Core Values</h3>
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, index) => (
                    <div 
                      key={value.title} 
                      className="group p-4 rounded-2xl bg-card/30 border border-border hover:border-primary/30 hover:bg-card/50 transition-all duration-300 text-center"
                    >
                      <div className="flex flex-col items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <value.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-sans font-semibold text-foreground">{value.title}</h4>
                      </div>
                      <p className="font-sans text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Team Composition */}
          <div className="space-y-8">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border text-center">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  We Are a <span className="text-gradient-primary">Professional</span> Team
                </h3>
                <p className="font-sans text-muted-foreground mb-8 leading-relaxed">
                  Our diverse team brings together expertise from multiple engineering and design disciplines:
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role, index) => (
                    <div 
                      key={role} 
                      className="flex items-center justify-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                      <span className="font-sans text-sm text-foreground">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="p-8 rounded-3xl bg-gradient-primary-soft border border-primary/20 text-center">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-6 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Certifications & Registration
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "NCA Registered", value: "Category NCA 8" },
                    { label: "Incorporated", value: "March 2021" },
                    { label: "KRA Registered", value: "PIN: P052001159M" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0">
                      <span className="font-sans text-foreground">{item.label}</span>
                      <span className="font-sans text-sm text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;