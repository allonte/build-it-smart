import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Uncompromising Quality", description: "We use only premium materials and employ rigorous quality control processes." },
    { title: "Safety Excellence", description: "Our zero-incident safety culture protects our workers and your property." },
    { title: "Expert Workforce", description: "Our team of certified professionals brings decades of combined experience." },
    { title: "On-Time Delivery", description: "Our efficient processes ensure projects are completed on schedule." },
    { title: "Transparent Pricing", description: "No hidden costs or surprise fees. We provide detailed quotes." },
    { title: "Sustainable Practices", description: "We incorporate eco-friendly materials and methods." },
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-8 text-left">Building Trust Through Excellence</h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10 text-left">With years of experience, we've built our reputation on delivering exceptional construction services.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans font-medium text-foreground mb-1">{reason.title}</h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed text-left">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-card/50 backdrop-blur-sm p-8 border border-border rounded-2xl">
              <h3 className="font-display text-2xl text-foreground mb-8 text-left">Certifications & Accreditations</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "NCA Certified", desc: "National Construction Authority" },
                  { name: "ISO 9001:2015", desc: "Quality Management" },
                  { name: "OSHA Certified", desc: "Safety Standards" },
                  { name: "KEBS Approved", desc: "Kenya Bureau of Standards" },
                ].map((cert) => (
                  <div key={cert.name} className="bg-background/50 p-5 rounded-xl border border-border/50">
                    <div className="w-12 h-12 border border-primary/30 mx-auto mb-4 flex items-center justify-center rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-sans font-medium text-foreground text-sm text-center">{cert.name}</h4>
                    <p className="font-sans text-muted-foreground text-xs mt-1 text-center">{cert.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4">
                  <div><div className="font-display text-4xl text-foreground text-left">A+</div><div className="font-sans text-muted-foreground text-xs mt-1 uppercase text-left">Client Rating</div></div>
                  <div><div className="font-display text-4xl text-foreground text-left">4.9</div><div className="font-sans text-muted-foreground text-xs mt-1 uppercase text-left">Reviews</div></div>
                  <div><div className="font-display text-4xl text-foreground text-left">100%</div><div className="font-sans text-muted-foreground text-xs mt-1 uppercase text-left">Insured</div></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;