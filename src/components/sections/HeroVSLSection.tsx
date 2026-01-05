import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, Clock, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-0 md:pt-8">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      
      {/* Floating colorful shapes */}
      <div className="absolute top-20 left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-8 w-16 h-16 bg-secondary/30 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="container relative z-10 py-4 md:py-8 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Main hook - SUPER IMPACTFUL with colors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-5"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2">
              {/* Animated emoji */}
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-3xl sm:text-4xl bg-gradient-to-br from-accent to-primary rounded-full animate-bounce shadow-lg mr-2">
                👉
              </span>
              <br className="sm:hidden" />
              <span className="text-foreground">O segredo para ensinar a Bíblia às crianças</span>{" "}
              <span className="text-gradient-rainbow block sm:inline mt-2 sm:mt-0">
                sem briga, sem tela e com interesse real!
              </span>
              <span className="inline-block ml-2 text-3xl sm:text-4xl animate-pulse">🌟</span>
            </h1>
          </motion.div>

          {/* Video CTA - More prominent with colors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-center mb-4"
          >
            <p className="text-foreground font-bold text-lg md:text-xl flex items-center justify-center gap-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-2 px-4 rounded-full inline-flex">
              <span className="text-2xl animate-pulse">▶️</span>
              <span className="text-gradient">Assista ao vídeo e descubra o método</span>
              <span className="text-2xl animate-bounce">🎬</span>
            </p>
          </motion.div>

          {/* Video placeholder - colorful and inviting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="relative mx-auto max-w-sm aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 border-4 border-primary/40 shadow-rainbow cursor-pointer group mb-5"
            onClick={() => {
              alert("Vídeo em breve!");
            }}
          >
            {/* Colorful decorations */}
            <div className="absolute top-4 left-4">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-2xl animate-bounce">⭐</span>
            </div>
            
            {/* Video thumbnail placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing rings - colorful */}
                <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-30" />
                <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-secondary to-primary animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
                
                {/* Play button - rainbow gradient */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-rainbow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            {/* Overlay text - colorful */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-sm font-bold text-foreground bg-card/95 px-5 py-2.5 rounded-full shadow-lg border-2 border-primary/30">
                <span className="text-lg mr-1">👆</span> Clique para assistir <span className="text-lg ml-1">🎉</span>
              </span>
            </div>
          </motion.div>

          {/* Product info below video - colorful */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center mb-5"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-rainbow mb-3 flex items-center justify-center gap-2">
              <span className="text-2xl sm:text-3xl">🌈</span>
              Kit Jogos de Luz
              <span className="text-2xl sm:text-3xl">✨</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground font-semibold mb-2">
              Ensine valores cristãos às crianças de forma <span className="text-primary">simples</span> e <span className="text-secondary">sem telas</span> 🎮❌
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Para <strong className="text-primary">pais cristãos</strong> que desejam ensinar valores bíblicos em casa 🏠
              <br />
              <span className="text-xs bg-secondary/20 px-2 py-1 rounded-full inline-block mt-1">(também ideal para igrejas, EBD e ministério infantil) ⛪</span>
            </p>
          </motion.div>

          {/* Premium CTA Block - Super colorful */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="relative bg-card rounded-3xl p-6 sm:p-8 border-4 border-primary/30 text-center shadow-rainbow overflow-hidden"
          >
            {/* Colorful glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            
            {/* Discount badge - rainbow */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground px-5 py-2 rounded-full text-sm sm:text-base font-bold mb-4 shadow-lg animate-bounce">
              <span className="text-xl">🔥</span>
              <span>OFERTA ESPECIAL - 52% OFF</span>
              <span className="text-xl">🎁</span>
            </div>

            {/* Price section */}
            <div className="relative z-10 mb-4">
              <p className="text-muted-foreground line-through text-lg sm:text-xl mb-1">
                De R$ 97,00
              </p>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-rainbow mb-2">
                R$ 47
              </div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-foreground font-bold text-base sm:text-lg px-4 py-2 rounded-full">
                <span className="text-xl">🎉</span>
                <span>Economize R$ 50,00</span>
                <span className="text-xl">💰</span>
              </div>
            </div>

            {/* CTA Button - Rainbow gradient */}
            <Button
              size="lg"
              asChild
              className="relative z-10 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-rainbow text-primary-foreground font-bold text-base sm:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300 w-full mb-5"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <span className="mr-2">🚀</span>
                Quero meu Kit Jogos de Luz agora
                <span className="ml-2">✨</span>
              </a>
            </Button>

            {/* Trust badges - colorful */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
              <span className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Seguro</span>
              </span>
              <span className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Imediato</span>
              </span>
              <span className="flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-full">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">Garantia 7 dias</span>
              </span>
            </div>
          </motion.div>

          {/* Scroll hint - colorful */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col items-center mt-6 text-foreground"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 px-4 py-1 rounded-full mb-2">
              <span className="mr-1">👇</span> Veja o que está incluso <span className="ml-1">🎁</span>
            </span>
            <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
