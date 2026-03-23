import { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { MarqueeStrip } from "../components/MarqueeStrip";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { PricingSection } from "../components/PricingSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <div className="mt-16">
        <MarqueeStrip />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="pricing">
        <PricingSection onSelectPackage={setSelectedPackage} />
      </div>

      <div id="work">
        <PortfolioSection />
      </div>

      <ContactSection
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />
    </>
  );
}
