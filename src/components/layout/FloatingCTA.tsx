import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <Link
      to="/appointment"
      className="fixed bottom-24 right-6 z-40 hidden md:block"
    >
      <Button size="lg" className="gap-2 shadow-lg animate-pulse-soft">
        <Calendar className="h-5 w-5" />
        Book Appointment
      </Button>
    </Link>
  );
};

export default FloatingCTA;
