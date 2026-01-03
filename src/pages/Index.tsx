import { HeroSection } from "@/components/sections/HeroSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { ProductCarouselSection } from "@/components/sections/ProductCarouselSection";
import { ContentSummarySection } from "@/components/sections/ContentSummarySection";
import { MinistrySection } from "@/components/sections/MinistrySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { Footer } from "@/components/sections/Footer";

// Game images
import game3Pistas from "@/assets/games/3-pistas.png";
import gameMemoria from "@/assets/games/jogo-da-memoria.png";
import gameSigaCristo from "@/assets/games/siga-a-cristo.png";
import gameLivroBiblia from "@/assets/games/que-livro-da-biblia.png";
import gameUno from "@/assets/games/uno-cristao.png";
import gameMico from "@/assets/games/mico-biblico.png";

const gamesImages = [
  { src: game3Pistas, alt: "Jogo das 3 Pistas Bíblicas" },
  { src: gameMemoria, alt: "Jogo da Memória Bíblico" },
  { src: gameSigaCristo, alt: "Jogo Siga a Cristo" },
  { src: gameLivroBiblia, alt: "Que Livro da Bíblia é Este?" },
  { src: gameUno, alt: "UNO Cristão Gerações" },
  { src: gameMico, alt: "Jogo do Mico Bíblico" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TransformationSection />
      
      {/* Product Carousels */}
      <ProductCarouselSection
        id="jogos"
        title="+ de 20 Jogos Bíblicos"
        subtitle="As imagens abaixo representam apenas uma pequena parte do material disponível no acesso completo ao Kit Premium Jogos de Luz."
        accentColor="primary"
        images={gamesImages}
      />
      
      <ProductCarouselSection
        id="atividades"
        title="+ de 600 Atividades Cristãs"
        subtitle="As imagens abaixo representam apenas uma pequena parte do material disponível no acesso completo ao Kit Premium Jogos de Luz."
        accentColor="gold"
        placeholderCount={6}
        placeholderLabels={["Atividade 1", "Atividade 2", "Atividade 3", "Atividade 4", "Atividade 5", "Atividade 6"]}
      />
      
      <ProductCarouselSection
        id="desenhos"
        title="+ de 75 Desenhos Bíblicos para Colorir"
        subtitle="As imagens abaixo representam apenas uma pequena parte do material disponível no acesso completo ao Kit Premium Jogos de Luz."
        accentColor="accent"
        placeholderCount={6}
        placeholderLabels={["Desenho 1", "Desenho 2", "Desenho 3", "Desenho 4", "Desenho 5", "Desenho 6"]}
      />

      {/* Summary Box - after all carousels */}
      <ContentSummarySection />
      
      <MinistrySection />
      <PricingSection />
      <GuaranteeSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
