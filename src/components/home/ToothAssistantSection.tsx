import { Bot, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import DentalAssistant from "@/components/dental-assistant/DentalAssistant";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const highlights = [
  { icon: MessageCircle, text: "Identify your dental concern" },
  { icon: ShieldCheck, text: "Get safe home-care tips" },
  { icon: Clock, text: "Instant guidance, 24/7" },
];

const ToothAssistantSection = () => {
  return (
    <section className="floating-section bg-muted/20 py-16 md:py-24">
      <div className="container relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Bot className="h-4 w-4" />
            AI-Powered Guidance
          </div>
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Tooth Care Assistant</h2>
          <p className="text-lg text-muted-foreground">Describe your dental concern and get instant guidance with safe home-care tips.</p>
          <StaggerContainer className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {highlights.map((h) => (
              <StaggerItem key={h.text}>
                <div className="glass-card-static flex items-center gap-2 !rounded-xl !p-3">
                  <h.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{h.text}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <DentalAssistant />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ToothAssistantSection;
