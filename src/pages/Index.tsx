import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import ScrollShowcaseSection from "@/components/home/ScrollShowcaseSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import ToothAssistantSection from "@/components/home/ToothAssistantSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <ScrollShowcaseSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <ToothAssistantSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
