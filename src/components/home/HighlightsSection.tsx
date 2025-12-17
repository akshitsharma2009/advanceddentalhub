import { Syringe, Cpu, UserCheck, BadgeDollarSign } from "lucide-react";

const highlights = [
  {
    icon: Syringe,
    title: "Painless Treatments",
    description: "Modern anesthesia techniques ensure comfortable, virtually pain-free dental procedures.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    description: "State-of-the-art dental technology for accurate diagnosis and effective treatments.",
  },
  {
    icon: UserCheck,
    title: "Experienced Dentist",
    description: "Over 15 years of expertise in comprehensive dental care and specialized treatments.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs. Quality care at affordable rates.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Patients Trust Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We combine expertise, technology, and compassion to deliver exceptional dental care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
