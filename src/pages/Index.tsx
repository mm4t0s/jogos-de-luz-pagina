import { HeroSection } from "@/components/sections/HeroSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { ProductCarouselSection } from "@/components/sections/ProductCarouselSection";
import { ContentSummarySection } from "@/components/sections/ContentSummarySection";
import { MinistrySection } from "@/components/sections/MinistrySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection />

      {/* Transformation - Before/After */}
      <TransformationSection />

      {/* Products Carousel - Jogos */}
      <ProductCarouselSection
        id="jogos"
        title="Alguns dos conteúdos incluídos no Kit Premium Jogos de Luz"
        subtitle="As imagens abaixo representam apenas uma parte do material disponível no acesso completo."
        accentColor="primary"
        placeholderCount={6}
        placeholderLabels={[
          "Jogo das 3 Pistas",
          "UNO Cristão Gerações",
          "Jogo da Memória Bíblica",
          "Quiz Bíblico",
          "Caça ao Tesouro",
          "Dominó dos Heróis",
        ]}
      />

      {/* Content Summary */}
      <ContentSummarySection />

      {/* Products Carousel - Atividades */}
      <ProductCarouselSection
        id="atividades"
        title="+600 Atividades Cristãs Prontas"
        subtitle="Material organizado e pronto para imprimir"
        accentColor="gold"
        placeholderCount={5}
        placeholderLabels={[
          "Atividade 1",
          "Atividade 2",
          "Atividade 3",
          "Atividade 4",
          "Atividade 5",
        ]}
      />

      {/* Products Carousel - Desenhos */}
      <ProductCarouselSection
        id="desenhos"
        title="+75 Desenhos Bíblicos para Colorir"
        subtitle="Ilustrações exclusivas para estimular a criatividade"
        accentColor="accent"
        placeholderCount={5}
        placeholderLabels={[
          "Desenho 1",
          "Desenho 2",
          "Desenho 3",
          "Desenho 4",
          "Desenho 5",
        ]}
      />

      {/* Ministry Section */}
      <MinistrySection />

      {/* Pricing */}
      <PricingSection />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Closing */}
      <ClosingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;