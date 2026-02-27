import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-secondary/80 to-accent/40 p-8 shadow-[0_16px_48px_-12px_hsl(210_20%_20%/0.15)] backdrop-blur-xl md:p-12 lg:p-16">
          {/* Ambient glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/15 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-[80px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Get Started Today
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Transform Your Smile?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Take the first step towards healthier teeth and a brighter smile. 
              Book your appointment today and experience the difference.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 rounded-full shadow-lg shadow-primary/25">
                <Link to="/appointment">
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
                <a href="tel:+1234567890">
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
