import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback: "I was terrified of dentists until I found Advanced Dental Hub. The staff is incredibly gentle, and I didn't feel a thing during my root canal. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    feedback: "Professional, modern, and caring. My dental implant procedure was smooth, and the results are amazing. Dr. and team are truly experts in their field.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    feedback: "The best dental clinic I've ever visited. Clean environment, transparent pricing, and the teeth whitening results exceeded my expectations!",
    rating: 5,
  },
  {
    name: "David Thompson",
    feedback: "My kids actually look forward to their dental visits now. The pediatric care here is exceptional - patient, fun, and thorough.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real experiences from patients who trust us with their smiles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground">"{testimonial.feedback}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
