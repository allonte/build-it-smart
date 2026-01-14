import { Users, Award, Clock } from "lucide-react";
import teamIsaiah from "@/assets/team-isaiah.jpg";
import teamMark from "@/assets/team-mark.jpg";
import teamKevin from "@/assets/team-kevin.jpg";
import teamGrace from "@/assets/team-grace.jpg";
import teamBrian from "@/assets/team-brian.jpg";
import teamDavid from "@/assets/team-david.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Eng. Isaiah Ondiba Bitange",
      role: "Civil & Structural Engineer",
      experience: "12 years",
      description: "Registered Civil & Structural Engineer with experience in Kenya, Rwanda, and Zambia.",
      image: teamIsaiah,
    },
    {
      name: "Eng. Mark Onyango Kaoga",
      role: "Civil & Structural Engineer",
      experience: "5+ years",
      description: "BSc Civil and Structural Engineering from Masinde Muliro University. Registered member of EBK.",
      image: teamMark,
    },
    {
      name: "Arch. Kevin Mathenge Githinji",
      role: "Architect & Project Manager",
      experience: "12 years",
      description: "Experienced Architect and Project Manager leading projects through their complete lifecycle.",
      image: teamKevin,
    },
    {
      name: "QS Brian Ochieng",
      role: "Quantity Surveyor",
      experience: "10+ years",
      description: "Seasoned Quantity Surveyor with experience in housing, infrastructure, and commercial development.",
      image: teamBrian,
    },
    {
      name: "Surv. Grace Mundia",
      role: "Land Surveyor",
      experience: "4+ years",
      description: "Dedicated Land Surveyor skilled in modern survey techniques and digital mapping.",
      image: teamGrace,
    },
    {
      name: "Eng. David Machasio",
      role: "Mechanical Engineer",
      experience: "12+ years",
      description: "Professional with experience as Quality Control Engineer, Design Engineer, and Mechanical Engineer.",
      image: teamDavid,
    },
  ];

  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(42_85%_55%/0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Our Team</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Meet the <span className="text-gradient-gold">Experts</span>
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Our diverse team of engineers, architects, surveyors, and specialists brings together 
            decades of combined experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground">
                    <Clock className="w-3 h-3" />
                    <span className="font-sans text-xs font-medium">{member.experience}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 -mt-16 relative">
                <div className="mb-4">
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
                
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-gold-soft border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <p className="font-sans text-foreground text-sm">
              Plus 4 more specialists ensuring seamless project delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;