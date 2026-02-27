import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-6 z-40 hidden md:block">
      <Button asChild size="lg" className="gap-2 rounded-full shadow-lg shadow-primary/25 animate-pulse-soft">
        <Link to="/appointment">
          <Calendar className="h-5 w-5" />
          Book Appointment
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCTA;
