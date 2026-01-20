import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from "lucide-react";
import logoMazika from "@/assets/logo-mazika.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Architecture", href: "#services" },
      { label: "Structural Engineering", href: "#services" },
      { label: "Design Visualization", href: "#services" },
      { label: "Quantity Survey", href: "#services" },
      { label: "Solar Solutions", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Our Projects", href: "#projects" },
      { label: "Certifications", href: "#about" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "Request Quote", href: "#contact" },
      { label: "FAQs", href: "#" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img src={logoMazika} alt="Mazika Design and Build" className="h-16 w-auto" />
            </a>
            <p className="font-sans text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Your trusted partner for architecture, engineering, and construction services in Kenya and East Africa since 2021.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+254719757416"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +254 719 757 416
              </a>
              <a
                href="https://wa.me/254719757416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MessageSquare className="w-4 h-4 text-accent" />
                </div>
                WhatsApp Us
              </a>
              <a
                href="mailto:info@mazikaengineering.co.ke"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                info@mazikaengineering.co.ke
              </a>
              <div className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>
                  College House, Koinange Street
                  <br />
                  P.O. Box 9556 - 00200, Nairobi
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-gold-soft border border-primary/20">
              <h5 className="font-sans text-xs font-semibold text-primary mb-2">Registered With</h5>
              <p className="font-sans text-xs text-muted-foreground">NCA Certified Contractor</p>
              <p className="font-sans text-xs text-muted-foreground">KRA Registered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-muted-foreground text-sm">
            © {currentYear} Mazika Engineering Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold hover:shadow-gold-lg transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;