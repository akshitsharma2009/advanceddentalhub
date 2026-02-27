import { Award, ShieldCheck, Zap, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced & Certified",
    description: "Qualified dentist with years of specialized training",
  },
  {
    icon: ShieldCheck,
    title: "Sterilized Environment",
    description: "Highest standards of hygiene and infection control",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "Advanced equipment for precise, effective treatments",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Your comfort and care is our top priority",
  },
  {
    icon: Sparkles,
    title: "Painless Treatments",
    description: "Modern techniques for comfortable procedures",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(210,25%,10%)] via-[hsl(210,25%,14%)] to-[hsl(200,30%,16%)] py-16 md:py-24">
      {/* Ambient glow */}
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />

      <div className="container relative z-10">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Promise
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Why Choose Advanced Dental Hub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Experience dental care that puts your comfort and health first.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex w-[200px] flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 font-semibold text-white">{reason.title}</h3>
              <p className="text-sm text-white/60">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
