import { Phone, Mail, MapPin } from "lucide-react";

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

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-[0.1em] text-foreground">
                Mazika
              </span>
            </a>
            <p className="font-sans text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Design & Build . Estate Managers. Your trusted partner for architecture, engineering, and construction services in Kenya and East Africa since 2021.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+254719757416"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 719 757 416
              </a>
              <a
                href="mailto:info@mazikaengineering.co.ke"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@mazikaengineering.co.ke
              </a>
              <div className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
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
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-foreground mb-4">Registered With</h4>
              <div className="space-y-2">
                <span className="block font-sans text-xs text-muted-foreground">NCA Certified Contractor</span>
                <span className="block font-sans text-xs text-muted-foreground">KRA Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-muted-foreground text-sm">
            © {currentYear} Mazika Engineering Limited. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
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