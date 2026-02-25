import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import ChatAssistantSection from "@/components/home/ChatAssistantSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <ChatAssistantSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
