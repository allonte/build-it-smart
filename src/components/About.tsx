import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous safety protocols protecting our workers and your investment.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects as promised, every time.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with decades of combined experience.",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO certified processes ensuring the highest construction standards.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
              Crafting Excellence in Every Structure
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-6">
              Mazika Engineering Limited has been transforming visions into reality.
              We are a full-service construction company committed to delivering
              exceptional quality in residential, commercial, and infrastructure
              projects across Kenya and East Africa.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Our team of experienced architects, engineers, and craftsmen work
              together to ensure every project meets the highest standards of
              safety, quality, and sustainability. We believe in building not
              just structures, but lasting relationships with our clients.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-5 border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 border border-accent/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-foreground mb-1 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-48 border border-accent bg-card flex flex-col items-center justify-center">
                  <span className="font-serif text-6xl text-accent">5+</span>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Years</span>
                </div>
                <div className="h-56 border border-border bg-card flex flex-col items-center justify-center">
                  <span className="font-serif text-6xl text-foreground">50+</span>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Projects</span>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-56 border border-border bg-card flex flex-col items-center justify-center">
                  <span className="font-serif text-6xl text-foreground">20+</span>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Team Members</span>
                </div>
                <div className="h-48 border border-border bg-muted flex flex-col items-center justify-center">
                  <span className="font-serif text-6xl text-foreground">100%</span>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Satisfaction</span>
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