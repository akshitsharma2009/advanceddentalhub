import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MetalButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight, CheckCircle } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";

const services = [
  { title: "General Dentistry", image: "/images/services/general-dentistry.jpg", description: "Comprehensive oral health care including routine check-ups, cleanings, fillings, and preventive treatments to maintain your dental health.", benefits: ["Regular check-ups & cleanings", "Cavity fillings", "Preventive care", "Oral health education"] },
  { title: "Root Canal Treatment", image: "/images/services/root-canal.jpg", description: "Advanced endodontic therapy to save infected or damaged teeth. Our painless approach ensures comfortable treatment and successful outcomes.", benefits: ["Pain relief", "Save natural teeth", "Modern techniques", "Single-visit options"] },
  { title: "Dental Implants", image: "/images/services/dental-implants.jpg", description: "Permanent tooth replacement solutions using titanium implants that look, feel, and function like natural teeth for a lifetime of confident smiles.", benefits: ["Permanent solution", "Natural appearance", "Improved function", "Bone preservation"] },
  { title: "Braces & Aligners", image: "/images/services/braces.jpg", description: "Traditional braces and modern clear aligners to straighten teeth, correct bite issues, and create the perfect smile for patients of all ages.", benefits: ["Invisible options available", "All ages welcome", "Customized treatment", "Faster results"] },
  { title: "Cosmetic Dentistry", image: "/images/services/cosmetic.jpg", description: "Transform your smile with veneers, bonding, smile makeovers, and aesthetic treatments designed to enhance your natural beauty.", benefits: ["Veneers & bonding", "Smile makeovers", "Gum contouring", "Natural-looking results"] },
  { title: "Teeth Whitening", image: "/images/services/whitening.jpg", description: "Professional whitening treatments for a brighter, more radiant smile. Safe, effective, and long-lasting results in just one visit.", benefits: ["In-office whitening", "Take-home kits", "Safe & effective", "Dramatic results"] },
  { title: "Gum Treatment", image: "/images/services/gum-treatment.jpg", description: "Comprehensive periodontal care including deep cleaning, gum disease treatment, and regenerative procedures for healthy gums.", benefits: ["Deep cleaning", "Gum disease treatment", "Regenerative therapy", "Maintenance programs"] },
  { title: "Pediatric Dentistry", image: "/images/services/pediatric.jpg", description: "Gentle, child-friendly dental care in a fun, welcoming environment. Building positive dental experiences from an early age.", benefits: ["Kid-friendly environment", "Preventive focus", "Gentle approach", "Education & fun"] },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="floating-section bg-gradient-to-br from-secondary/50 via-background to-accent/20 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">What We Offer</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Our <span className="text-primary">Dental Services</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive dental care for the whole family. From routine check-ups to advanced treatments, 
              we've got your smile covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="glass-card group overflow-hidden !p-0">
                <div className="relative h-56 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/appointment">
                    <MetalButton variant="primary">Book Appointment</MetalButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(262,30%,12%)] via-[hsl(262,25%,16%)] to-[hsl(270,30%,18%)] py-16 md:py-20">
        <div className="absolute left-1/3 top-0 h-60 w-60 rounded-full bg-primary/10 blur-[100px]" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Book a consultation and our expert dentist will recommend the best treatment plan for your needs.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="gap-2 rounded-full shadow-lg shadow-primary/25">
              <Link to="/appointment">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
