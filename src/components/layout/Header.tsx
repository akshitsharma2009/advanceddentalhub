import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Tooth Assistant", path: "/tooth-assistant" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        isHeroPage
          ? "bg-[hsl(210,25%,12%)]/90 backdrop-blur-md border-b border-white/10"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span
            className={`font-display text-xl font-bold tracking-wide uppercase ${
              isHeroPage ? "text-white" : "text-foreground"
            }`}
          >
            Advanced
          </span>
          <span
            className={`hidden text-[10px] font-medium uppercase tracking-[0.2em] sm:inline ${
              isHeroPage ? "text-white/50" : "text-muted-foreground"
            }`}
          >
            Dental Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : isHeroPage
                    ? "text-white/70"
                    : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop action icons */}
        <div className="hidden items-center gap-1 md:flex">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={isHeroPage ? "text-white/70 hover:text-white hover:bg-white/10" : ""}
          >
            <Link to="/appointment" aria-label="Book appointment">
              <Calendar className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={isHeroPage ? "text-white/70 hover:text-white hover:bg-white/10" : ""}
          >
            <a href="tel:+1234567890" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={isHeroPage ? "text-white/70 hover:text-white hover:bg-white/10" : ""}
          >
            <Link to="/contact" aria-label="Find us">
              <MapPin className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden ${isHeroPage ? "text-white" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`border-t lg:hidden ${
            isHeroPage ? "border-white/10 bg-[hsl(210,25%,12%)]" : "border-border bg-background"
          }`}
        >
          <nav className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : isHeroPage
                      ? "text-white/70"
                      : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
