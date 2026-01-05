import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-8 md:pb-12">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10 py-4 md:py-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Main hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight px-2">
              👉 O segredo para ensinar a Bíblia às crianças{" "}
              <span className="text-gradient">sem briga, sem tela e com interesse real.</span>
            </h1>
          </motion.div>

          {/* Video CTA */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center text-muted-foreground text-sm md:text-base mb-4"
          >
            ▶️ Assista ao vídeo e veja como crianças aprendem a Bíblia brincando.
          </motion.p>

          {/* Video placeholder - vertical format */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mx-auto max-w-sm aspect-[9/16] rounded-2xl overflow-hidden bg-secondary/50 border border-border/50 shadow-elevated cursor-pointer group mb-6"
            onClick={() => {
              // TODO: Open video modal or embed
              alert("Vídeo em breve!");
            }}
          >
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-cta flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs md:text-sm text-muted-foreground bg-card/80 px-3 py-1.5 rounded-full">
                Clique para assistir
              </span>
            </div>
          </motion.div>

          {/* Product info below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
              Kit Jogos de Luz
            </h2>
            <p className="text-base md:text-lg text-foreground font-medium mb-3">
              Ensine valores cristãos às crianças de forma simples e sem telas
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Para <strong className="text-foreground">pais cristãos</strong> que desejam ensinar valores bíblicos em casa.
              <br />
              <span className="text-xs">(também ideal para igrejas, EBD e ministério infantil)</span>
            </p>
          </motion.div>

          {/* Premium CTA Block with anchoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative bg-gradient-to-br from-card via-card to-secondary/30 rounded-3xl p-6 sm:p-8 border border-primary/20 text-center shadow-elevated overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            
            {/* Discount badge */}
            <div className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-gold text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
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
                Quero meu Kit Jogos de Luz agora
              </a>
            </Button>

            {/* Trust badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold" />
                Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                Garantia 7 dias
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
