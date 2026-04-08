import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { ProductWhySection } from "@/components/ProductWhySection";

import { FaqSection } from "@/components/FaqSection";

import { SiteFooter } from "@/components/SiteFooter";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { PricingSection } from "@/components/PricingSection";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header context="home" />
      <main className="pt-24 overflow-x-hidden pb-24 md:pb-0">
        <HeroSection />
        <HowItWorksSection />
        <ExamplesSection />
        <ProductWhySection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
      <MobileBottomNav />
    </>
  );
}
