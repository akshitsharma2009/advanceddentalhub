import { MessageCircle, Bot, Clock, HelpCircle } from "lucide-react";

const features = [
  { icon: MessageCircle, text: "Instant answers to dental queries" },
  { icon: Clock, text: "Available 24/7 for your convenience" },
  { icon: HelpCircle, text: "Help with costs & appointments" },
];

const ChatAssistantSection = () => {
  return (
    <section className="py-16 bg-secondary/50 md:py-24">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Bot className="h-4 w-4" />
            AI-Powered Support
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Chat with our Dental Assistant
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get instant help for tooth problems, costs, and appointments.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row sm:max-w-none sm:justify-center">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-sm"
              >
                <feature.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Click the chat bubble in the bottom-right corner to start a conversation 💬
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistantSection;
