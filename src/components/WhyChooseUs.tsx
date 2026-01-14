import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Uncompromising Quality",
      description:
        "We use only premium materials and employ rigorous quality control processes to ensure every project meets the highest standards.",
    },
    {
      title: "Safety Excellence",
      description:
        "Our zero-incident safety culture protects our workers, your property, and ensures smooth project execution.",
    },
    {
      title: "Expert Workforce",
      description:
        "Our team of certified professionals brings decades of combined experience to every project we undertake.",
    },
    {
      title: "On-Time Delivery",
      description:
        "We understand that time is money. Our efficient processes ensure projects are completed on schedule.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden costs or surprise fees. We provide detailed quotes and keep you informed every step of the way.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We incorporate eco-friendly materials and methods to minimize environmental impact without compromising quality.",
    },
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-foreground/80">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent-foreground mt-4 mb-8">
              Building Trust Through Excellence
            </h2>
            <p className="font-sans text-accent-foreground/80 text-lg leading-relaxed mb-10">
              With years of experience, we've built our reputation on delivering
              exceptional construction services. Here's what sets us apart from
              the competition.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans font-medium text-accent-foreground mb-1 tracking-wide">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-accent-foreground/70 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="bg-accent-foreground/10 backdrop-blur-sm p-8 border border-accent-foreground/20">
            <h3 className="font-serif text-2xl text-accent-foreground mb-8">
              Certifications & Accreditations
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "NCA Certified", desc: "National Construction Authority" },
                { name: "ISO 9001:2015", desc: "Quality Management" },
                { name: "OSHA Certified", desc: "Safety Standards" },
                { name: "KEBS Approved", desc: "Kenya Bureau of Standards" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="bg-accent-foreground/10 p-5 text-center border border-accent-foreground/10"
                >
                  <div className="w-12 h-12 border border-accent-foreground/30 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-sans font-medium text-accent-foreground text-sm tracking-wide">
                    {cert.name}
                  </h4>
                  <p className="font-sans text-accent-foreground/60 text-xs mt-1">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-accent-foreground/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-serif text-4xl text-accent-foreground">A+</div>
                  <div className="font-sans text-accent-foreground/60 text-xs mt-1 tracking-wider uppercase">Client Rating</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-accent-foreground">4.9</div>
                  <div className="font-sans text-accent-foreground/60 text-xs mt-1 tracking-wider uppercase">Reviews</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-accent-foreground">100%</div>
                  <div className="font-sans text-accent-foreground/60 text-xs mt-1 tracking-wider uppercase">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;