import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import WhatsAppWidget from "./WhatsAppWidget";

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
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
