import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-0 md:pt-8">
      {/* Soft colorful background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      
      {/* Subtle floating shapes */}
      <div className="absolute top-32 left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-60 right-8 w-20 h-20 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container relative z-10 py-4 md:py-8 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Main hook - Impactful but clean */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-5"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2">
              <span className="text-3xl sm:text-4xl inline-block animate-bounce mr-1">👉</span>
              <span className="text-foreground">O segredo para ensinar a Bíblia às crianças</span>{" "}
              <span className="text-gradient-kids block sm:inline mt-2 sm:mt-0">
                sem briga, sem tela e com interesse real!
              </span>
              <span className="inline-block ml-1 text-2xl sm:text-3xl animate-pulse">✨</span>
            </h1>
          </motion.div>

          {/* Video CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-center mb-4"
          >
            <p className="text-foreground font-semibold text-base md:text-lg flex items-center justify-center gap-2">
              <span className="text-xl">▶️</span>
              Assista ao vídeo e descubra o método
            </p>
          </motion.div>

          {/* Video placeholder - Clean colorful design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="relative mx-auto max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-primary/30 shadow-elevated cursor-pointer group mb-5"
            onClick={() => {
              alert("Vídeo em breve!");
            }}
          >
            {/* Video thumbnail placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing ring */}
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full gradient-cta animate-ping opacity-40" />
                {/* Play button */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full gradient-cta flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-sm font-semibold text-foreground bg-card/95 px-4 py-2 rounded-full shadow-lg">
                👆 Clique para assistir
              </span>
            </div>
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

          {/* Premium CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="relative bg-card rounded-3xl p-6 sm:p-8 border-2 border-primary/20 text-center shadow-elevated overflow-hidden"
          >
            {/* Soft colorful glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            
            {/* Discount badge */}
            <div className="relative z-10 inline-flex items-center gap-2 gradient-cta text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              <span className="animate-pulse">🔥</span>
              <span>OFERTA ESPECIAL - 52% OFF</span>
            </div>

            {/* Price section */}
            <div className="relative z-10 mb-4">
              <p className="text-muted-foreground line-through text-base sm:text-lg mb-1">
                De R$ 97,00
              </p>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient mb-2">
                R$ 47
              </div>
              <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm sm:text-base">
                <span>🎉</span>
                <span>Economize R$ 50,00</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              asChild
              className="relative z-10 gradient-cta shadow-gold text-primary-foreground font-bold text-base sm:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300 w-full mb-5"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero meu Kit Jogos de Luz agora 🚀
              </a>
            </Button>

            {/* Trust badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" />
                Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-secondary" />
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
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
