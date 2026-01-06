import { ShieldCheck, Zap, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-0 md:pt-8">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-background" />

      <div className="container relative z-10 py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          {/* Main hook - Compact & Impactful */}
          <div className="text-center mb-6">
            {/* Headline container with warm background for impact */}
            <div className="bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-amber-100/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-lg">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                <span className="text-3xl sm:text-4xl inline-block mr-2">👉</span>
                <span className="text-foreground">O segredo para ensinar a Bíblia às crianças</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient mt-3 leading-snug">
                sem briga, sem tela e com interesse real!
                <span className="inline-block ml-2 animate-pulse">✨</span>
              </p>
              
              {/* Video CTA - integrated */}
              <div className="mt-4 pt-4 border-t border-primary/15">
                <p className="text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                  <span className="text-lg">▶️</span>
                  Assista ao vídeo e descubra o método
                </p>
              </div>
            </div>
          </div>

          {/* Vimeo Video - IMPACTFUL DESIGN */}
          <div className="relative mx-auto max-w-sm mb-6">
            {/* Animated glow ring around video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-md opacity-75 animate-pulse" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-90" />
            
            {/* Top urgency banner */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap">
                <span className="animate-bounce">🔥</span>
                <span>ASSISTA AGORA</span>
                <span className="animate-bounce">🔥</span>
              </div>
            </div>
            
            {/* Vimeo Video container */}
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-foreground/90">
              <iframe
                src="https://player.vimeo.com/video/1152038449?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="VSL Video"
              />
            </div>
            
            {/* Side floating arrows pointing to video */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-2xl animate-bounce hidden sm:block">👉</div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-2xl animate-bounce hidden sm:block">👈</div>
          </div>

          {/* Product info below video */}
          <div className="text-center mb-5">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
              🌈 Kit Jogos de Luz ✨
            </h2>
            <p className="text-base md:text-lg text-foreground font-medium mb-2">
              Ensine valores cristãos às crianças de forma simples e sem telas
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Para <strong className="text-primary">pais cristãos</strong> que desejam ensinar valores bíblicos em casa
              <br />
              <span className="text-xs">(também ideal para igrejas, EBD e ministério infantil)</span>
            </p>
          </div>

          {/* Premium CTA Block - Warm background */}
          <div className="relative bg-gradient-to-br from-amber-50 via-card to-orange-50/50 rounded-3xl p-6 sm:p-8 border-2 border-primary/25 text-center shadow-elevated overflow-hidden">
            {/* Warm decorative glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
            
            {/* Discount badge */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              <span className="animate-pulse">🔥</span>
              <span>OFERTA ESPECIAL - 76% OFF</span>
            </div>

            {/* Price section */}
            <div className="relative z-10 mb-4">
              <p className="text-muted-foreground line-through text-base sm:text-lg mb-1">
                De R$ 197,00
              </p>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient mb-2">
                R$ 47
              </div>
              <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm sm:text-base bg-primary/10 px-3 py-1 rounded-full">
                <span>🎉</span>
                <span>Economize R$ 150,00</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              asChild
              className="relative z-10 bg-primary hover:bg-primary/90 shadow-gold text-primary-foreground font-bold text-base sm:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300 w-full mb-5"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero meu Kit Jogos de Luz agora 🚀
              </a>
            </Button>

            {/* Trust badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Seguro
              </span>
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                Imediato
              </span>
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                Garantia 7 dias
              </span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center mt-6 text-muted-foreground">
            <span className="text-xs mb-1">Veja o que está incluso 👇</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
