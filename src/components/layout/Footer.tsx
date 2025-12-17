import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight text-foreground">Advanced</span>
                <span className="text-sm leading-tight text-primary">Dental Hub</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Caring for your smile with precision and trust. Advanced dental care using modern technology and expert hands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Our Services</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sm text-muted-foreground hover:text-primary">Book Appointment</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">General Dentistry</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Root Canal Treatment</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Dental Implants</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Teeth Whitening</Link>
              </li>
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

      <div className="border-t">
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
