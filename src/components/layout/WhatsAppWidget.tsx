import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const phoneNumber = "1234567890";
  const message = encodeURIComponent("Hello! I would like to book an appointment at Advanced Dental Hub.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppWidget;
