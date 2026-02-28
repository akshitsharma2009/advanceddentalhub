import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const testimonials = [
  { name: "Sarah Johnson", feedback: "I was terrified of dentists until I found Advanced Dental Hub. The staff is incredibly gentle, and I didn't feel a thing during my root canal. Highly recommend!", rating: 5 },
  { name: "Michael Chen", feedback: "Professional, modern, and caring. My dental implant procedure was smooth, and the results are amazing. Dr. and team are truly experts in their field.", rating: 5 },
  { name: "Emily Rodriguez", feedback: "The best dental clinic I've ever visited. Clean environment, transparent pricing, and the teeth whitening results exceeded my expectations!", rating: 5 },
  { name: "David Thompson", feedback: "My kids actually look forward to their dental visits now. The pediatric care here is exceptional - patient, fun, and thorough.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="floating-section py-16 md:py-24">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What Our Patients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Real experiences from patients who trust us with their smiles.</p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="glass-card group cursor-default h-full">
                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">"{testimonial.feedback}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
