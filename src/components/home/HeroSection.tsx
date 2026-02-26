import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeethModel = lazy(() => import("@/components/3d/TeethModel"));

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[hsl(210,25%,12%)] via-[hsl(210,25%,16%)] to-[hsl(200,30%,18%)]">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(174,62%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(174,62%,50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative flex min-h-[90vh] items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2">
          {/* Left — Copy */}
          <div className="relative z-10 space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Advanced Dental Hub
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Modern precision{" "}
              <br className="hidden md:block" />
              dentistry today.
              <br />
              <span className="text-primary">A healthier tomorrow.</span>
            </h1>
            <p className="max-w-md text-base text-white/60 md:text-lg">
              Expert dental care using cutting-edge technology and gentle hands.
              Experience painless treatments in a state-of-the-art environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-sm font-medium tracking-wide"
              >
                <Link to="/about">Our philosophy</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-transparent px-8 text-sm font-medium tracking-wide text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/appointment">Book appointment</Link>
              </Button>
            </div>
          </div>

          {/* Right — 3D Model */}
          <div className="relative flex h-[400px] items-center justify-center md:h-[500px] lg:h-[600px]">
            {/* Glow behind model */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="h-16 w-16 animate-pulse rounded-full border-2 border-primary/40" />
                </div>
              }
            >
              <TeethModel />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
