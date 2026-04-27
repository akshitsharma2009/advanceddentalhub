import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
      {/* Vapi widget wrapper: bottom-left on mobile (avoids form CTAs), bottom-right on desktop */}
      <div className="vapi-widget-wrapper fixed bottom-4 left-4 z-30 md:bottom-8 md:left-auto md:right-24">
        <vapi-widget
          public-key="7fec7065-5cbf-4ef1-8f9d-6b7248788805"
          assistant-id="2a2b328e-326d-4164-9494-08b731f33539"
          mode="chat"
          size="compact"
          theme="light"
        />
      </div>
    </div>
  );
};

export default Layout;
