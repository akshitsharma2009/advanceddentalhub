import { MetalButton } from "@/components/ui/liquid-glass-button";
import { openCalendly } from "@/lib/calendly";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-6 z-40 hidden md:block">
      <div onClick={openCalendly} className="cursor-pointer">
        <MetalButton variant="primary">Book Free Consultation</MetalButton>
      </div>
    </div>
  );
};

export default FloatingCTA;
