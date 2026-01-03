import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { IncludesSection } from "@/components/sections/IncludesSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <TransformationSection />
      <ProductSection />
      <IncludesSection />
      <ValueSection />
      <PricingSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
