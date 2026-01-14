import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      content: "College House, Koinange Street, Nairobi",
      subContent: "P.O. Box 9556 - 00200, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 719 757 416",
      subContent: "",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@mazikaengineering.co.ke",
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-8">
            Let's Build Something Great Together
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            Ready to start your project? Get in touch with us today for a free
            consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-border bg-background font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
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
                    className="w-full px-4 py-3 border border-border bg-background font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
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
                    className="w-full px-4 py-3 border border-border bg-background font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
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
                    className="w-full px-4 py-3 border border-border bg-background font-sans text-foreground focus:outline-none focus:border-accent transition-colors"
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
                  className="w-full px-4 py-3 border border-border bg-background font-sans text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card border border-border p-6 flex gap-4"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground mb-1 tracking-wide">
                    {info.title}
                  </h4>
                  <p className="font-sans text-muted-foreground text-sm">{info.content}</p>
                  {info.subContent && (
                    <p className="font-sans text-muted-foreground text-sm">{info.subContent}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-card border border-border h-48 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="font-sans text-muted-foreground text-sm">
                  College House, Koinange Street
                  <br />
                  <span className="text-xs">Nairobi, Kenya</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;