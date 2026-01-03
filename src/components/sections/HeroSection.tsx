import { motion } from "framer-motion";
import { Check, Download, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const proofChips = [
  { icon: Download, text: "PDF pronto para imprimir" },
  { icon: Users, text: "Crianças de 4 a 12 anos" },
  { icon: Zap, text: "Acesso imediato" },
  { icon: Check, text: "Uso em casa ou na igreja" },
];

export const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
            >
              ✨ Kit Premium Digital
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Ensinar valores cristãos pode ser{" "}
              <span className="text-gradient">leve, divertido</span> e inesquecível.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Um kit completo de jogos, atividades e desenhos bíblicos prontos para usar,
              que ajudam sua família a se conectar com Deus — sem telas, sem estresse.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                onClick={scrollToPrice}
                className="gradient-cta shadow-gold text-primary-foreground font-semibold text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                Quero transformar meus momentos em família
              </Button>
            </motion.div>

            {/* Proof chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
            >
              {proofChips.map((chip, index) => (
                <motion.div
                  key={chip.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border/50"
                >
                  <chip.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{chip.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform scale-95" />
              <img
                src={heroMockup}
                alt="Kit Premium Jogos de Luz - Material cristão para crianças"
                className="relative w-full rounded-3xl shadow-elevated animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
