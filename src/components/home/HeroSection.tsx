import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[hsl(262,30%,18%)] via-[hsl(262,35%,22%)] to-[hsl(270,30%,26%)]">
      {/* Background dentist image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/dentist-hero.png')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(262,30%,18%)]/90 via-[hsl(262,30%,18%)]/70 to-[hsl(262,30%,18%)]/50" />

      {/* Ambient glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(262,60%,58%) 1px, transparent 1px), linear-gradient(90deg, hsl(262,60%,58%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative flex min-h-[90vh] items-center">
        <div className="relative z-10 w-full max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Advanced Dental Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your smile,{" "}
              <br className="hidden md:block" />
              our{" "}
              <span className="bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">
                precision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-md text-base leading-relaxed text-white/50 md:text-lg"
            >
              Expert dental care using cutting-edge technology and gentle hands.
              Experience painless treatments in a state-of-the-art environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-sm font-medium tracking-wide shadow-lg shadow-primary/25"
              >
                <Link to="/appointment">
                  Book Appointment
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/15 bg-white/5 px-8 text-sm font-medium tracking-wide text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <Link to="/about">Our Philosophy</Link>
              </Button>
            </motion.div>

            {/* Floating trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs text-white/50">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs text-white/50">5000+ Happy Patients</span>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
