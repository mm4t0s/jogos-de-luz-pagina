import { ScrollReveal, TiltCard, GlowingBorder } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Download, Shield, Star, Sparkles } from "lucide-react";

const valueItems = [
  { text: "25 Livros de Colorir Cristão", value: "R$49,90" },
  { text: "5 Divertidos Jogos Bíblicos", value: "R$24,90" },
  { text: "BÔNUS 1: Novos Livros Mensais Durante 1 Ano", value: "R$59,90" },
  { text: "BÔNUS 2: Meu Primeiro Guia De Orações", value: "R$29,90" },
  { text: "BÔNUS 3: Cartões Bíblicos Para Memorização", value: "R$19,90" },
  { text: "BÔNUS 4: Desafio Bíblico De 7 Dias", value: "R$19,90" },
  { text: "BÔNUS 5: +100 Adesivos Cristãos", value: "R$8,90" },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-warm" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <GlowingBorder>
              <TiltCard intensity={3}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative p-8 md:p-10 rounded-3xl bg-card border border-primary/20 shadow-3d overflow-hidden"
                >
                  {/* Top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-400 to-accent" />
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Logo placeholder */}
                    <div className="text-center mb-6">
                      <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Kit Premium</span>
                      <h3 className="font-display text-2xl font-bold text-gradient">Jogos de Luz</h3>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                      Tudo o Que Você Receberá De Conteúdo:
                    </h2>

                    {/* Value items list */}
                    <div className="space-y-4 mb-8">
                      {valueItems.map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center justify-between gap-4 py-3 border-b border-border/50 last:border-0"
                        >
                          <div className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{item.text}</span>
                          </div>
                          <span className="text-destructive font-bold line-through whitespace-nowrap">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Total value */}
                    <div className="text-center mb-8 p-4 rounded-2xl bg-secondary/50">
                      <p className="text-lg text-foreground italic font-medium mb-1">
                        Valor total de tudo que você recebe:
                      </p>
                      <span className="text-2xl md:text-3xl font-bold text-destructive line-through">
                        R$213,30
                      </span>
                    </div>

                    {/* Promotional price */}
                    <div className="text-center mb-8">
                      <p className="text-lg text-muted-foreground mb-2">Valor promocional:</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-bold text-foreground">R$</span>
                        <span className="font-display text-6xl md:text-7xl font-bold text-gradient">47</span>
                      </div>
                      <p className="text-muted-foreground mt-2">ou 3x de R$16,79</p>
                    </div>

                    {/* Payment info */}
                    <div className="text-center mb-6">
                      <p className="font-bold text-foreground uppercase tracking-wide">Pagamento Único</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Pague uma única vez e receba atualizações mensais!
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className="w-full gradient-cta shadow-gold text-primary-foreground font-bold text-lg py-7 rounded-2xl hover:scale-[1.02] transition-all duration-300 shine overflow-hidden"
                    >
                      QUERO MEU ACESSO IMEDIATO
                    </Button>

                    {/* Trust badges */}
                    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Compra segura</span>
                      </div>
                      <span className="text-border">•</span>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>Garantia de 7 dias</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </GlowingBorder>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};