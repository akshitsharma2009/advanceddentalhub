import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  { title: "General Dentistry", description: "Comprehensive check-ups, cleanings, and preventive care.", image: "/images/services/general-dentistry.jpg" },
  { title: "Root Canal Treatment", description: "Painless root canal therapy to save infected teeth.", image: "/images/services/root-canal.jpg" },
  { title: "Dental Implants", description: "Permanent tooth replacement that looks natural.", image: "/images/services/dental-implants.jpg" },
  { title: "Cosmetic Dentistry", description: "Smile makeovers with veneers, bonding & aesthetics.", image: "/images/services/cosmetic.jpg" },
  { title: "Teeth Whitening", description: "Professional whitening for a brighter smile.", image: "/images/services/whitening.jpg" },
  { title: "Pediatric Dentistry", description: "Gentle, kid-friendly dental care.", image: "/images/services/pediatric.jpg" },
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
              <div className="glass-card group h-full overflow-hidden !p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                  <Link to="/appointment" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Book Now<ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesPreview;
