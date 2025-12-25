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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-xl">
                  B
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-primary-foreground">
                BuildCraft
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Building the future with precision and integrity since 1998. Your
              trusted partner for residential, commercial, and infrastructure
              construction projects.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@buildcraft.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@buildcraft.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                123 Construction Ave, Los Angeles, CA 90001
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
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
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} BuildCraft Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
