import { motion } from "framer-motion";
import { Play } from "lucide-react";
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

          {/* CTA Block with anchoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-card/80 rounded-2xl p-5 sm:p-6 border border-border/50 text-center"
          >
            <p className="text-muted-foreground text-sm md:text-base mb-3">
              Tudo o que você precisa para ensinar a Bíblia de forma leve, em um único kit.
            </p>
            
            {/* Price with anchoring */}
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-lg text-muted-foreground line-through">R$97</span>
              <span className="text-muted-foreground">por apenas</span>
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient">R$47</span>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground mb-4">
              Acesso imediato • Uso vitalício • Material pronto para imprimir
            </p>

            <Button
              size="lg"
              asChild
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero meu Kit Jogos de Luz agora
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
