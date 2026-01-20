import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "College House, Koinange Street",
      subContent: "P.O. Box 9556 - 00200, Nairobi",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 719 757 416",
      subContent: "",
      href: "tel:+254719757416",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Us",
      content: "+254 719 757 416",
      subContent: "Click to send message",
      href: "https://wa.me/254719757416",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "mazikaengineering@gmail.com",
      subContent: "",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM",
      subContent: "Sat: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_60%/0.03)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16" direction="left">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Contact Us</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Let's Build Something <span className="text-gradient-primary">Great</span> Together
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Ready to start your project? Get in touch with us today for a free consultation and quote.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border text-center">
              <h3 className="font-display text-2xl text-foreground mb-8">
                Request a Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-center"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-center"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-center"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-foreground focus:outline-none focus:border-primary transition-colors text-center"
                    >
                      <option value="">Select a service</option>
                      <option value="architecture">Architecture</option>
                      <option value="visualization">Design Visualization</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="electrical">Electrical Engineering</option>
                      <option value="mechanical">Mechanical Engineering</option>
                      <option value="quantity">Quantity Survey</option>
                      <option value="solar">Solar Power Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none text-center"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary hover:shadow-primary-lg transition-all duration-300 rounded-xl"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Wrapper = info.href ? 'a' : 'div';
              const wrapperProps = info.href ? { href: info.href, target: info.href.startsWith('https') ? '_blank' : undefined, rel: info.href.startsWith('https') ? 'noopener noreferrer' : undefined } : {};
              
              return (
                <AnimatedSection key={info.title} direction="right" delay={0.1 + index * 0.1}>
                  <Wrapper {...wrapperProps} className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 flex gap-5 text-center cursor-pointer block">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-primary group-hover:shadow-primary-lg transition-shadow duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-sans font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="font-sans text-muted-foreground">{info.content}</p>
                      {info.subContent && (
                        <p className="font-sans text-muted-foreground text-sm">{info.subContent}</p>
                      )}
                    </div>
                  </Wrapper>
                </AnimatedSection>
              );
            })}

            {/* Map Placeholder */}
            <AnimatedSection direction="right" delay={0.5}>
              <div className="p-6 rounded-2xl bg-gradient-primary-soft border border-primary/20 h-40 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-primary mb-3 mx-auto" />
                  <p className="font-sans text-foreground">
                    College House, Koinange Street
                  </p>
                  <p className="font-sans text-muted-foreground text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;