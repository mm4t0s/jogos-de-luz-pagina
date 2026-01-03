import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Download, Shield, Star } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-card">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Oferta Especial
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Acesso completo ao Kit Premium
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-card to-secondary/30 border-2 border-primary/30 shadow-elevated overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Star className="w-3 h-3" />
                Mais vendido
              </div>

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Kit Premium Jogos de Luz
                </h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-muted-foreground line-through text-lg">De R$97</span>
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground">Por apenas</span>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-lg text-foreground">R$</span>
                      <span className="font-display text-6xl font-bold text-gradient">47</span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Pagamento único</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    <span>Download imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Acesso vitalício</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full gradient-cta shadow-gold text-primary-foreground font-bold text-lg py-7 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                Quero ensinar valores cristãos em casa
              </Button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Compra segura</span>
                </div>
                <span>•</span>
                <span>Garantia de 7 dias</span>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
