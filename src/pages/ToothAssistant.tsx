import Layout from "@/components/layout/Layout";
import DentalAssistant from "@/components/dental-assistant/DentalAssistant";
import { Bot } from "lucide-react";

const ToothAssistant = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Bot className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Tooth Care Assistant
            </h1>
            <p className="mt-3 text-muted-foreground">
              Describe your dental concern and get instant guidance with safe home-care tips.
            </p>
          </div>
          <DentalAssistant />
        </div>
      </section>
    </Layout>
  );
};

export default ToothAssistant;
