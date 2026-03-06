import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Award, ShieldCheck, Zap, Heart, Sparkles } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";

const reasons = [
  { icon: Award, title: "Experienced & Certified", description: "Qualified dentist with years of specialized training", image: "/images/why/experienced.jpg" },
  { icon: ShieldCheck, title: "Sterilized Environment", description: "Highest standards of hygiene and infection control", image: "/images/why/sterilized.jpg" },
  { icon: Zap, title: "Latest Technology", description: "Advanced equipment for precise, effective treatments", image: "/images/why/technology.jpg" },
  { icon: Heart, title: "Patient-First Approach", description: "Your comfort and care is our top priority", image: "/images/why/patient-care.jpg" },
  { icon: Sparkles, title: "Painless Treatments", description: "Modern techniques for comfortable procedures", image: "/images/why/painless.jpg" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(262,30%,12%)] via-[hsl(262,25%,16%)] to-[hsl(270,30%,18%)] py-16 md:py-24">
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />

      <div className="container relative z-10">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Our Promise</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Why Choose Advanced Dental Hub</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">Experience dental care that puts your comfort and health first.</p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" staggerDelay={0.1}>
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/80 backdrop-blur-sm">
                    <reason.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-white">{reason.title}</h3>
                  <p className="text-sm text-white/60">{reason.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
