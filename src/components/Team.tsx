import { Users, Award, Clock } from "lucide-react";
import teamMark from "@/assets/team-mark.jpg";

const Team = () => {
  const founder = {
    name: "Eng. Mark Onyango Kaoga",
    role: "Founder & Civil Engineer",
    experience: "5+ years",
    bio: "A Civil & Structural Engineer with over 5 years of experience in the Construction industry. A holder of Bachelor of Science, BSc Civil and Structural Engineering (2011-2016) from the Masinde Muliro University of Science & Technology.",
    competencies: [
      "Topographical Survey",
      "Civil and Structural design and use of CAD applications",
      "Health and Safety"
    ],
    responsibilities: [
      "Structural Design & Detailing",
      "Scheduling and Cost management",
      "Tender Document preparation"
    ],
    memberships: [
      "Engineers of Kenya (EBK)"
    ],
    image: teamMark,
  };

  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_85%_55%/0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Leadership</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Meet the <span className="text-gradient-gold">Founder</span>
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Visionary leadership driving excellence in construction and design.
          </p>
        </div>

        {/* Founder Card - Centered */}
        <div className="max-w-xl mx-auto">
          <div className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-500">
            {/* Photo */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground">
                  <Clock className="w-3 h-3" />
                  <span className="font-sans text-xs font-medium">{founder.experience}</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 -mt-16 relative">
              <div className="mb-6 text-center">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="font-sans text-sm text-primary font-medium">
                  {founder.role}
                </p>
              </div>
              
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Competencies */}
              <div className="mb-4">
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-2">Core Competencies</h4>
                <ul className="space-y-1">
                  {founder.competencies.map((item, idx) => (
                    <li key={idx} className="font-sans text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-2">Responsible For</h4>
                <ul className="space-y-1">
                  {founder.responsibilities.map((item, idx) => (
                    <li key={idx} className="font-sans text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-2">Registered Member Of</h4>
                <ul className="space-y-1">
                  {founder.memberships.map((item, idx) => (
                    <li key={idx} className="font-sans text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Team Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-gold-soft border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <p className="font-sans text-foreground text-sm">
              Supported by a dedicated team of engineers, architects & specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
