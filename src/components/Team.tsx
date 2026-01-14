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
    <section id="team" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
            Meet the Experts
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Our diverse team of engineers, architects, surveyors, and specialists brings together decades of combined experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 -mt-12 relative">
                <h3 className="font-display text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-xs tracking-wider uppercase text-primary mb-3">
                  {member.role}
                </p>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Experience Badge */}
                <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1">
                  <span className="font-sans text-xs text-primary">{member.experience} Experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Note */}
        <div className="mt-12 text-center">
          <p className="font-sans text-muted-foreground text-sm">
            Plus 4 more specialists including Surveyors, Quantity Surveyors, and ICT professionals ensuring seamless project delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;