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

// Drawing images
import desenhosCover from "@/assets/drawings/desenhos-cover.png";
import aQueda from "@/assets/drawings/a-queda.png";
import caimAbel from "@/assets/drawings/caim-e-abel.png";
import promessaAbraao from "@/assets/drawings/promessa-abraao.png";
import sarcaArdente from "@/assets/drawings/sarca-ardente.png";
import pragasEgito from "@/assets/drawings/pragas-egito.png";
import multiplicacaoPaes from "@/assets/drawings/multiplicacao-paes.png";
import conversaoPaulo from "@/assets/drawings/conversao-paulo.png";

const gamesImages = [
  { src: game3Pistas, alt: "Jogo das 3 Pistas Bíblicas" },
  { src: gameMemoria, alt: "Jogo da Memória Bíblico" },
  { src: gameSigaCristo, alt: "Jogo Siga a Cristo" },
  { src: gameLivroBiblia, alt: "Que Livro da Bíblia é Este?" },
  { src: gameUno, alt: "UNO Cristão Gerações" },
  { src: gameMico, alt: "Jogo do Mico Bíblico" },
];

const drawingsImages = [
  { src: desenhosCover, alt: "75 Desenhos Bíblicos para Colorir" },
  { src: aQueda, alt: "A Queda - Gênesis 3:6" },
  { src: caimAbel, alt: "Caim e Abel - Gênesis 4:8" },
  { src: promessaAbraao, alt: "A Promessa a Abraão - Gênesis 12:2-3" },
  { src: sarcaArdente, alt: "A Sarça Ardente - Êxodo 3:2-4" },
  { src: pragasEgito, alt: "As 10 Pragas do Egito - Êxodo 7-12" },
  { src: multiplicacaoPaes, alt: "A Multiplicação dos Pães e Peixes - João 6:11" },
  { src: conversaoPaulo, alt: "A Conversão de Paulo - Atos 9:4-5" },
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
        images={drawingsImages}
        layout="horizontal"
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
