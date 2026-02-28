import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, CircleDot, Puzzle, Smile, Sparkles, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  { icon: Stethoscope, title: "General Dentistry", description: "Comprehensive check-ups, cleanings, and preventive care for optimal oral health." },
  { icon: CircleDot, title: "Root Canal Treatment", description: "Painless root canal therapy to save infected teeth and relieve pain." },
  { icon: Puzzle, title: "Dental Implants", description: "Permanent tooth replacement solutions that look and feel natural." },
  { icon: Smile, title: "Cosmetic Dentistry", description: "Smile makeovers with veneers, bonding, and aesthetic treatments." },
  { icon: Sparkles, title: "Teeth Whitening", description: "Professional whitening for a brighter, more confident smile." },
  { icon: Baby, title: "Pediatric Dentistry", description: "Gentle, kid-friendly dental care in a comfortable environment." },
];

const ServicesPreview = () => {
  return (
    <section className="floating-section bg-muted/30 py-16 md:py-24">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">What We Offer</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Dental Services</h2>
            <p className="mt-2 text-muted-foreground">Comprehensive dental care for the whole family.</p>
          </div>
          <Button asChild variant="outline" className="gap-2 rounded-full">
            <Link to="/services">View All Services<ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="glass-card group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                <Link to="/appointment" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Book Now<ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesPreview;
