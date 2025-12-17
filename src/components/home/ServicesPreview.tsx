import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, CircleDot, Puzzle, Smile, Sparkles, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, and preventive care for optimal oral health.",
  },
  {
    icon: CircleDot,
    title: "Root Canal Treatment",
    description: "Painless root canal therapy to save infected teeth and relieve pain.",
  },
  {
    icon: Puzzle,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel natural.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Smile makeovers with veneers, bonding, and aesthetic treatments.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, more confident smile.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, kid-friendly dental care in a comfortable environment.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Dental Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Comprehensive dental care for the whole family.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Book Now
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
