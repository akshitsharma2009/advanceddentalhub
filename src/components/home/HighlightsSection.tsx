import { Syringe, Cpu, UserCheck, BadgeDollarSign } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import OptimizedImage from "@/components/ui/optimized-image";
import TiltCard from "@/components/ui/tilt-card";

const highlights = [
  { icon: Syringe, title: "Painless Treatments", description: "Modern anesthesia techniques ensure comfortable, virtually pain-free dental procedures.", image: "/images/why/painless.jpg" },
  { icon: Cpu, title: "Advanced Equipment", description: "State-of-the-art dental technology for accurate diagnosis and effective treatments.", image: "/images/highlights/equipment.jpg" },
  { icon: UserCheck, title: "Experienced Dentist", description: "Over 15 years of expertise in comprehensive dental care and specialized treatments.", image: "/images/why/experienced.jpg" },
  { icon: BadgeDollarSign, title: "Transparent Pricing", description: "Clear, upfront pricing with no hidden costs. Quality care at affordable rates.", image: "/images/highlights/pricing.jpg" },
];

const HighlightsSection = () => {
  return (
    <section className="floating-section py-16 md:py-24">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Why Patients Trust Us</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Excellence in Every Detail</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We combine expertise, technology, and compassion to deliver exceptional dental care.</p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <StaggerItem key={index}>
              <div className="glass-card group cursor-default h-full overflow-hidden !p-0">
                <div className="relative h-44 overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/80 backdrop-blur-sm">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HighlightsSection;
