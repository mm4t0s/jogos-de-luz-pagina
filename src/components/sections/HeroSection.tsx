import { motion } from "framer-motion";
import { Check, Download, Users, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/ui/rating-stars";
import { Product3DMockup } from "@/components/ui/product-3d-mockup";
import { FloatingElement } from "@/components/ui/scroll-reveal";
import heroMockup from "@/assets/hero-mockup.jpg";

const proofChips = [
  { icon: Check, text: "Pagamento único" },
  { icon: Download, text: "Acesso imediato" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
  { icon: Users, text: "Compra 100% Segura" },
];

export const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={8} y={30}>
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2} duration={10} y={40}>
          <div className="absolute bottom-10 right-[5%] w-[600px] h-[600px] bg-gradient-radial from-gold-400/10 via-gold-400/5 to-transparent rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={4} duration={12} y={20}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      <div className="container relative z-10 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Logo/Brand Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-2">
                Kit Premium Digital
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                <span className="text-gradient">Jogos de Luz</span>
              </h2>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 text-balance"
            >
              Transforme o estudo da Bíblia em momentos{" "}
              <span className="text-gradient">inesquecíveis de alegria!</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Com o kit de atividades para impressão, suas crianças aprendem valores cristãos enquanto se divertem! E você ganha mais tempo em família.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <Button
                size="lg"
                onClick={scrollToPrice}
                className="relative gradient-cta shadow-gold text-primary-foreground font-bold text-lg px-10 py-7 rounded-2xl hover:scale-105 transition-all duration-300 shine overflow-hidden group"
              >
                <span className="relative z-10">QUERO MEU KIT DE ATIVIDADES!</span>
              </Button>
            </motion.div>

            {/* Proof chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              {proofChips.map((chip, index) => (
                <motion.div
                  key={chip.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <chip.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{chip.text}</span>
                  {index < proofChips.length - 1 && (
                    <span className="text-border ml-2">•</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-xl lg:max-w-2xl"
          >
            {/* Rating above image */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <RatingStars rating={4.96} reviews={2464} />
            </motion.div>

            <Product3DMockup
              image={heroMockup}
              alt="Kit Premium Jogos de Luz - Material cristão para crianças"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};