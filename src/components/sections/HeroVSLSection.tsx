import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-0 md:pt-8">
      {/* Warm gradient background - more alive */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-background" />
      
      {/* Subtle warm floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-5 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />

      <div className="container relative z-10 py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          {/* Main hook - Compact & Impactful */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-6"
          >
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
          </motion.div>

          {/* Video placeholder - IMPACTFUL DESIGN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative mx-auto max-w-sm mb-6"
          >
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
            
            {/* Video container */}
            <div 
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/90 cursor-pointer group"
              onClick={() => {
                alert("Vídeo em breve!");
              }}
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Center play button - BIG and attention-grabbing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Multiple pulsing rings */}
                  <div className="absolute inset-0 w-28 h-28 md:w-32 md:h-32 -m-4 rounded-full bg-primary/30 animate-ping" />
                  <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 -m-2 rounded-full bg-primary/50 animate-pulse" />
                  
                  {/* Play button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/30">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                <div className="text-center">
                  <p className="text-white font-bold text-base sm:text-lg mb-1">
                    👆 Clique para assistir
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Vídeo curto de 2 minutos
                  </p>
                </div>
              </div>
            </div>
            
            {/* Side floating arrows pointing to video */}
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-2xl animate-bounce hidden sm:block">👉</div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-2xl animate-bounce hidden sm:block">👈</div>
          </motion.div>

          {/* Product info below video */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center mb-5"
          >
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
          </motion.div>

          {/* Premium CTA Block - Warm background */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="relative bg-gradient-to-br from-amber-50 via-card to-orange-50/50 rounded-3xl p-6 sm:p-8 border-2 border-primary/25 text-center shadow-elevated overflow-hidden"
          >
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
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col items-center mt-6 text-muted-foreground"
          >
            <span className="text-xs mb-1">Veja o que está incluso 👇</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
