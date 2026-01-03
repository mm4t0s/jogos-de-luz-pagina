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

// Activity images
import aprendendo from "@/assets/activities/aprendendo-a-orar.png";
import antigoTestamento from "@/assets/activities/antigo-testamento.png";
import passatempos from "@/assets/activities/passatempos-biblicos.png";
import alfabeto from "@/assets/activities/alfabeto-biblico.png";
import aventuras from "@/assets/activities/aventuras-biblicas.png";

const gamesImages = [
  { src: game3Pistas, alt: "Jogo das 3 Pistas Bíblicas" },
  { src: gameMemoria, alt: "Jogo da Memória Bíblico" },
  { src: gameSigaCristo, alt: "Jogo Siga a Cristo" },
  { src: gameLivroBiblia, alt: "Que Livro da Bíblia é Este?" },
  { src: gameUno, alt: "UNO Cristão Gerações" },
  { src: gameMico, alt: "Jogo do Mico Bíblico" },
];

const activitiesImages = [
  { src: aprendendo, alt: "Aprendendo a Orar" },
  { src: antigoTestamento, alt: "Antigo Testamento" },
  { src: passatempos, alt: "Passatempos Bíblicos" },
  { src: alfabeto, alt: "Alfabeto Bíblico" },
  { src: aventuras, alt: "Aventuras Bíblicas" },
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
        images={activitiesImages}
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
