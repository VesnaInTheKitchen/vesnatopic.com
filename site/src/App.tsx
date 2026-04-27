import CustomCursor from "./components/CustomCursor";
import GrainOverlay from "./components/GrainOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CateringSection from "./components/CateringSection";
import StudioSection from "./components/StudioSection";
import KitchenSection from "./components/KitchenSection";
import MenuBuilderSection from "./components/MenuBuilderSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground">
      <CustomCursor />
      <GrainOverlay />
      <Nav />
      <Hero />
      <Marquee />
      <CateringSection />
      <StudioSection />
      <KitchenSection />
      <MenuBuilderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
