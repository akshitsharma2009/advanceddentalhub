import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone, MapPin, Sun, Moon } from "lucide-react";
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
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isHeroPage
          ? "border-b border-white/10 bg-[hsl(0,0%,8%)]/80 backdrop-blur-xl"
          : "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
            <span className="text-lg font-bold text-primary">A</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display text-lg font-bold leading-tight ${
                isHeroPage ? "text-white" : "text-foreground"
              }`}
            >
              Advanced
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
                isHeroPage ? "text-white/40" : "text-muted-foreground"
              }`}
            >
              Dental Hub
            </span>
          </div>
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
                    ? "text-white/60"
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
            className={`rounded-xl ${isHeroPage ? "text-white/60 hover:text-white hover:bg-white/10" : ""}`}
          >
            <Link to="/appointment" aria-label="Book appointment">
              <Calendar className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={`rounded-xl ${isHeroPage ? "text-white/60 hover:text-white hover:bg-white/10" : ""}`}
          >
            <a href="tel:+1234567890" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className={`rounded-xl ${isHeroPage ? "text-white/60 hover:text-white hover:bg-white/10" : ""}`}
          >
            <Link to="/contact" aria-label="Find us">
              <MapPin className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className={`rounded-xl ${isHeroPage ? "text-white/60 hover:text-white hover:bg-white/10" : ""}`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
            isHeroPage ? "border-white/10 bg-[hsl(0,0%,8%)]/95 backdrop-blur-xl" : "border-border/50 bg-background/95 backdrop-blur-xl"
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
                      ? "text-white/60"
                      : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
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
