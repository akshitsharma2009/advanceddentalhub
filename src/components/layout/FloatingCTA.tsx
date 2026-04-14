import { Link } from "react-router-dom";
import { MetalButton } from "@/components/ui/liquid-glass-button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-6 z-40 hidden md:block">
      <Link to="/appointment">
        <MetalButton variant="primary">Book Free Consultation</MetalButton>
      </Link>
    </div>
  );
};

export default FloatingCTA;
