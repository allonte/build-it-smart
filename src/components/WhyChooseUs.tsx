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
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              For over 25 years, we've built our reputation on delivering
              exceptional construction services. Here's what sets us apart from
              the competition.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <h3 className="text-xl font-bold text-primary-foreground mb-6">
              Certifications & Accreditations
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "ISO 9001:2015", desc: "Quality Management" },
                { name: "ISO 14001:2015", desc: "Environmental Management" },
                { name: "OSHA Certified", desc: "Safety Standards" },
                { name: "LEED Certified", desc: "Green Building" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="bg-primary-foreground/10 rounded-lg p-4 text-center"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-primary-foreground text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-primary-foreground/60 text-xs mt-1">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">A+</div>
                  <div className="text-primary-foreground/60 text-xs mt-1">BBB Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9</div>
                  <div className="text-primary-foreground/60 text-xs mt-1">Google Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-primary-foreground/60 text-xs mt-1">Licensed & Insured</div>
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
