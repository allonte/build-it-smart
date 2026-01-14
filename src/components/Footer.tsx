import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Residential Construction", href: "#services" },
      { label: "Commercial Buildings", href: "#services" },
      { label: "Renovations", href: "#services" },
      { label: "Civil Engineering", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Projects", href: "#projects" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "Request Quote", href: "#contact" },
      { label: "FAQs", href: "#" },
      { label: "Safety Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-purple rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">
                  M
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Mazika Engineering
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building the future with precision and integrity. Your trusted
              partner for residential, commercial, and infrastructure
              construction projects in Kenya and East Africa.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+254712345678"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 712 345 678
              </a>
              <a
                href="mailto:info@mazikaengineering.co.ke"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@mazikaengineering.co.ke
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-foreground">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mazika Engineering Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;