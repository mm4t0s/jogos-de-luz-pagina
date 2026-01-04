import { motion } from "framer-motion";
import { Check, Download, Shield, Users, Sparkles, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/ui/rating-stars";
import heroMockup from "@/assets/hero-kit-jogos-luz.png";

const proofChips = [
  { icon: Check, text: "Pagamento único" },
  { icon: Download, text: "Acesso imediato" },
  { icon: Shield, text: "Garantia de 7 dias" },
  { icon: Users, text: "Compra 100% Segura" },
];

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroSection = () => {

  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-8 md:pb-12">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10 py-6 md:py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-cta text-primary-foreground text-sm font-bold shadow-gold">
              <Sparkles className="w-4 h-4" />
              Apresentamos
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight px-2">
              Kit Jogos de Luz
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mt-2 px-2">
              Ensine Valores Cristãos às Crianças de Forma Simples
            </p>
          </motion.div>

          {/* Description - focused on parents */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 px-2"
          >
            Para <strong className="text-foreground">pais cristãos</strong> que desejam ensinar valores bíblicos em casa.
            <br />
            <span className="text-sm">(também ideal para igrejas, EBD e ministério infantil)</span>
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-3xl mx-auto mb-6"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-3d">
              <img
                src={heroMockup}
                alt="Kit Premium Jogos de Luz"
                className="w-full h-auto"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Rating below image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max">
              <div className="bg-card rounded-full px-4 md:px-6 py-2 shadow-elevated border border-border/50">
                <RatingStars rating={4.96} reviews={2464} />
              </div>
            </div>
          </motion.div>

          {/* Video CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mt-10 mb-6"
          >
            <button
              onClick={() => {
                // TODO: Open video modal
                alert("Vídeo em breve!");
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 border border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
              </div>
              <span className="font-semibold text-foreground">Ver como funciona</span>
            </button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 mb-6"
          >
            {[
              { icon: "🕐", label: "10-20 min", sub: "por atividade" },
              { icon: "🖨️", label: "PDF Pronto", sub: "só imprimir" },
              { icon: "👨‍👩‍👧", label: "4-12 anos", sub: "toda família" },
              { icon: "⚡", label: "Acesso", sub: "imediato" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-card/80 border border-border/50">
                <span className="text-xl sm:text-2xl mb-1">{item.icon}</span>
                <span className="font-bold text-foreground text-xs sm:text-sm">{item.label}</span>
                <span className="text-muted-foreground text-[10px] sm:text-xs">{item.sub}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg px-6 md:px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto text-center whitespace-normal leading-tight"
            >
              Quero meu Kit Jogos de Luz →
            </Button>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
              {proofChips.map((chip) => (
                <div key={chip.text} className="flex items-center justify-center gap-1.5">
                  <chip.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{chip.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll hint - visual cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center mt-8 text-muted-foreground"
          >
            <span className="text-sm mb-2">⬇️ Veja tudo o que você recebe no Kit</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
