import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-muted/20">
      {/* Ambient glow */}
      <div className="absolute -bottom-40 left-1/3 h-60 w-60 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <span className="text-xl font-bold text-primary">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight text-foreground">Advanced</span>
                <span className="text-xs leading-tight text-primary uppercase tracking-wider">Dental Hub</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Caring for your smile with precision and trust. Advanced dental care using modern technology and expert hands.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Book Appointment", path: "/appointment" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {["General Dentistry", "Root Canal Treatment", "Dental Implants", "Cosmetic Dentistry", "Teeth Whitening"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">123 Dental Street, Healthcare District, City 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">+1 234 567 890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@advanceddentalhub.com" className="text-sm text-muted-foreground hover:text-primary">info@advanceddentalhub.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Advanced Dental Hub. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
