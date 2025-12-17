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
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Why Choose Advanced Dental Hub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Experience dental care that puts your comfort and health first.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                <reason.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-1 font-semibold text-primary-foreground">{reason.title}</h3>
              <p className="max-w-[180px] text-sm text-primary-foreground/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
