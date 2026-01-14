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
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Crafting Excellence in Every Structure
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Mazika Engineering Limited has been transforming visions into reality.
              We are a full-service construction company committed to delivering
              exceptional quality in residential, commercial, and infrastructure
              projects across Kenya and East Africa.
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
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
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
                <div className="h-48 bg-gradient-purple rounded-2xl overflow-hidden flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-foreground">5+</span>
                </div>
                <div className="h-64 bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                    <div className="text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-foreground mb-2">20+</div>
                    <div className="text-muted-foreground">Team Members</div>
                  </div>
                </div>
                <div className="h-48 bg-muted rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;