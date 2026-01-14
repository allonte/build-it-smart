const Team = () => {
  const teamMembers = [
    {
      name: "Eng. Isaiah Ondiba Bitange",
      role: "Civil & Structural Engineer",
      experience: "12 years",
      description: "Registered Civil & Structural Engineer with experience in Kenya, Rwanda, and Zambia.",
      responsibilities: ["Civil Structural Engineering", "Concept Formulation", "FEED Team Coordination", "Construction Supervision"],
    },
    {
      name: "Eng. Mark Onyango Kaoga",
      role: "Civil & Structural Engineer",
      experience: "5+ years",
      description: "BSc Civil and Structural Engineering from Masinde Muliro University. Registered member of Engineers of Kenya (EBK).",
      responsibilities: ["Structural Design & Detailing", "Scheduling & Cost Management", "Tender Document Preparation"],
    },
    {
      name: "Eng. Cornelius Muendo Wambua",
      role: "Civil & Structural Engineer",
      experience: "6+ years",
      description: "BSc Civil and Structural Engineering from Masinde Muliro University of Science & Technology.",
      responsibilities: ["Structural Design & Detailing", "Scheduling & Cost Management", "Tender Documentation"],
    },
    {
      name: "Arch. Kevin Mathenge Githinji",
      role: "Architect & Project Manager",
      experience: "12 years",
      description: "Experienced Architect and Project Manager leading projects through their complete lifecycle.",
      responsibilities: ["Project Design & Drawing", "Statutory Approvals", "Client Relationships", "Resource Coordination"],
    },
    {
      name: "QS Brian Ochieng",
      role: "Quantity Surveyor",
      experience: "10+ years",
      description: "Seasoned Quantity Surveyor with experience in housing, infrastructure, banking, and commercial development.",
      responsibilities: ["Cost Management", "Contract Administration", "Financial Appraisals", "Stakeholder Reporting"],
    },
    {
      name: "QS Calvince O. Ochieng",
      role: "Quantity Surveyor",
      experience: "7+ years",
      description: "Registered Quantity Surveyor specializing in construction consultancy and end-to-end project delivery.",
      responsibilities: ["Cost Planning & Budgeting", "Bills of Quantities", "Financial Reporting", "Final Accounts"],
    },
    {
      name: "Surv. Grace Mundia",
      role: "Land Surveyor",
      experience: "4+ years",
      description: "Dedicated Land Surveyor skilled in modern survey techniques and digital mapping.",
      responsibilities: ["Cadastral & Topographical Survey", "RTK GNSS & Total Station", "AutoCAD Civil 3D", "Setting Out"],
    },
    {
      name: "Surv. Brian Warari",
      role: "Geospatial Engineer",
      experience: "6+ years",
      description: "Licensed drone pilot with KCAA, specializing in aerial and terrestrial surveys.",
      responsibilities: ["Drone Aerial Surveys", "Infrastructure Surveys", "Earthworks Calculations", "Survey Drawings"],
    },
    {
      name: "Eng. David Machasio",
      role: "Mechanical Engineer",
      experience: "12+ years",
      description: "Professional with experience as Quality Control Engineer, Design Engineer, and Mechanical Engineer.",
      responsibilities: ["Mechanical Building Services", "Specifications & BoQs", "Installation Supervision", "Project Compliance"],
    },
    {
      name: "Ibrahim M. Mburu",
      role: "Architect / Visualizer",
      experience: "10+ years",
      description: "Aerospace Engineer turned Architectural Visualizer with passion for 3D rendering.",
      responsibilities: ["Architectural 3D Rendering", "3D Animations", "Visual Presentations", "Design Visualization"],
    },
  ];

  return (
    <section id="team" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
            Meet the Experts
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Our diverse team of engineers, architects, surveyors, and specialists brings together decades of combined experience to deliver excellence in every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-background border border-border p-6 hover:border-accent/50 transition-all duration-500"
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                <span className="font-serif text-2xl text-accent">
                  {member.name.split(' ').pop()?.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-xs tracking-wider uppercase text-accent mb-3">
                {member.role}
              </p>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Experience Badge */}
              <div className="inline-block border border-border px-3 py-1">
                <span className="font-sans text-xs text-muted-foreground">{member.experience} Experience</span>
              </div>
            </div>
          ))}
        </div>

        {/* ICT Team Note */}
        <div className="mt-12 text-center">
          <p className="font-sans text-muted-foreground text-sm">
            Supported by our ICT team including Frank Okoth and Allan Kaoga, ensuring seamless technology integration across all projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;