import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ScrollReveal } from "@/components/ui/motion";

const testimonials = [
  {
    quote: "I was terrified of dentists until I found Advanced Dental Hub. The staff is incredibly gentle, and I didn't feel a thing during my root canal. Highly recommend!",
    name: "Sarah Johnson",
    designation: "Patient since 2021",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "Professional, modern, and caring. My dental implant procedure was smooth, and the results are amazing. Dr. and team are truly experts in their field.",
    name: "Michael Chen",
    designation: "Patient since 2022",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "The best dental clinic I've ever visited. Clean environment, transparent pricing, and the teeth whitening results exceeded my expectations!",
    name: "Emily Rodriguez",
    designation: "Patient since 2023",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "My kids actually look forward to their dental visits now. The pediatric care here is exceptional - patient, fun, and thorough.",
    name: "David Thompson",
    designation: "Patient since 2020",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="floating-section py-16 md:py-24">
      <div className="container relative z-10">
        <ScrollReveal className="mb-4 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What Our Patients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Real experiences from patients who trust us with their smiles.</p>
        </ScrollReveal>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
};

export default TestimonialsSection;
