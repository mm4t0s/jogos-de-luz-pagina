import { motion } from "framer-motion";
import { Check, Download, Shield, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/ui/rating-stars";
import heroMockup from "@/assets/hero-mockup.jpg";

const proofChips = [
  { icon: Check, text: "Pagamento único" },
  { icon: Download, text: "Acesso imediato" },
  { icon: Shield, text: "Garantia de 7 dias" },
  { icon: Users, text: "Compra 100% Segura" },
];

export const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10 py-12">
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
              Kit Jogos de Luz
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mt-2">
              O Método Completo Para Famílias Cristãs
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Imagine ter em mãos <strong className="text-foreground">mais de 20 jogos prontos</strong> para transformar qualquer momento em uma oportunidade de{" "}
            <span className="text-primary font-semibold">conexão familiar</span> e{" "}
            <span className="text-primary font-semibold">ensino da Palavra</span> — sem complicação, sem telas, sem estresse.
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-3xl mx-auto mb-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-3d">
              <img
                src={heroMockup}
                alt="Kit Premium Jogos de Luz"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Rating below image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="bg-card rounded-full px-6 py-2 shadow-elevated border border-border/50">
                <RatingStars rating={4.96} reviews={2464} />
              </div>
            </div>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 mt-12"
          >
            {[
              { icon: "🕐", label: "10-20 min", sub: "por partida" },
              { icon: "🖨️", label: "PDF Pronto", sub: "só imprimir" },
              { icon: "👨‍👩‍👧", label: "4-12 anos", sub: "toda família" },
              { icon: "⚡", label: "Acesso", sub: "imediato" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center px-4 py-3 rounded-2xl bg-card/80 border border-border/50 min-w-[100px]">
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="font-bold text-foreground text-sm">{item.label}</span>
                <span className="text-muted-foreground text-xs">{item.sub}</span>
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
              onClick={scrollToPrice}
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-lg px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Ver oferta especial →
            </Button>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {proofChips.map((chip) => (
                <div key={chip.text} className="flex items-center gap-1.5">
                  <chip.icon className="w-4 h-4 text-primary" />
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
