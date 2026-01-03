import { ScrollReveal, TiltCard, GlowingBorder } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Download } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const benefits = [
  "Kit cristão completo para crianças de 4 a 12 anos",
  "Jogos bíblicos pensados para aprendizado rápido e divertido",
  "Atividades prontas para ensinar valores cristãos no dia a dia",
  "Bíblia ilustrada + devocional infantil inclusos",
  "Material prático para usar em casa, igreja ou ministério infantil",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      {/* Top banner */}
      <div className="bg-primary py-3 mb-12">
        <p className="text-center text-primary-foreground font-bold text-sm md:text-base flex items-center justify-center gap-2">
          <span>🎁</span>
          OFERTA ESPECIAL POR TEMPO LIMITADO
          <span>🎁</span>
        </p>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <GlowingBorder>
              <TiltCard intensity={2}>
                <div className="relative p-6 md:p-8 rounded-3xl bg-card border border-primary/20 shadow-3d overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-400 to-accent" />

                  {/* Hero Image */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 shadow-elevated">
                    <img
                      src={heroMockup}
                      alt="Kit Premium Jogos de Luz"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Title */}
                  <div className="text-center mb-6">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Kit Premium Jogos de Luz
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Acesso completo a todo o material, sem mensalidade e sem limitações.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-foreground text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price box */}
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-secondary to-secondary/50 mb-6">
                    <p className="text-muted-foreground mb-2">Acesso completo por</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-foreground">R$</span>
                      <span className="font-display text-6xl md:text-7xl font-bold text-gradient">47</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      Pagamento único • Download imediato • Uso vitalício
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg py-7 rounded-2xl hover:scale-[1.02] transition-all duration-300 text-center whitespace-normal leading-tight"
                  >
                    Quero ensinar valores cristãos com material pronto
                  </Button>

                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>Compra 100% segura</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>Acesso imediato</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </GlowingBorder>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};