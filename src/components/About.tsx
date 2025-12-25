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
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Crafting Excellence in Every Structure
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Since 1998, BuildCraft has been transforming visions into reality.
              We are a full-service construction company committed to delivering
              exceptional quality in residential, commercial, and infrastructure
              projects.
            </p>
            <p className="text-muted-foreground mb-8">
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
                  className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-primary rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground">25+</span>
                  </div>
                </div>
                <div className="h-64 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-foreground mb-2">500+</div>
                    <div className="text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-accent rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-accent-foreground mb-2">150+</div>
                    <div className="text-accent-foreground/80">Team Members</div>
                  </div>
                </div>
                <div className="h-48 bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-secondary-foreground mb-2">98%</div>
                    <div className="text-secondary-foreground/80">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
