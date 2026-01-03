import { ScrollReveal, TiltCard, FloatingElement } from "@/components/ui/scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Download, Sparkles, Star } from "lucide-react";
import { useRef } from "react";
import bannerCheckout from "@/assets/banner-checkout.png";

export const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} y={20} className="absolute top-20 left-[10%]">
          <Sparkles className="w-6 h-6 text-primary/30" />
        </FloatingElement>
        <FloatingElement delay={1} y={15} className="absolute top-40 right-[15%]">
          <Star className="w-5 h-5 text-accent/40 fill-accent/20" />
        </FloatingElement>
        <FloatingElement delay={2} y={25} className="absolute bottom-32 left-[20%]">
          <Sparkles className="w-4 h-4 text-primary/20" />
        </FloatingElement>
        <FloatingElement delay={0.5} y={18} className="absolute bottom-48 right-[10%]">
          <Star className="w-6 h-6 text-accent/30 fill-accent/10" />
        </FloatingElement>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          style={{ scale, opacity, y }}
          className="max-w-2xl mx-auto"
        >
          <ScrollReveal>
            <TiltCard intensity={3}>
              <div className="relative rounded-3xl overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-75 blur-sm animate-pulse" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50" />
                
                <div className="relative bg-card rounded-3xl overflow-hidden">
                  {/* Top ribbon */}
                  <motion.div 
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="bg-gradient-to-r from-primary via-accent to-primary py-3 px-4"
                  >
                    <p className="text-center text-primary-foreground font-bold text-sm md:text-base flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      OFERTA ESPECIAL POR TEMPO LIMITADO
                      <Sparkles className="w-4 h-4" />
                    </p>
                  </motion.div>

                  <div className="p-5 md:p-8">
                    {/* Banner Image with shine effect */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative rounded-2xl overflow-hidden mb-6 shadow-3d shine"
                    >
                      <img
                        src={bannerCheckout}
                        alt="Kit Premium Jogos de Luz - Ensinar a Bíblia pode ser leve, divertido e inesquecível"
                        className="w-full h-auto"
                      />
                      {/* Overlay glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Price box with premium styling */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="relative text-center p-6 md:p-8 rounded-2xl bg-gradient-to-b from-secondary via-secondary/80 to-secondary/50 border border-primary/20 mb-6"
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />

                      <p className="text-muted-foreground mb-2 text-sm">De <span className="line-through">R$97</span> por apenas</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl md:text-3xl font-bold text-foreground">R$</span>
                        <motion.span 
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                          className="font-display text-6xl md:text-8xl font-bold text-gradient"
                        >
                          47
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-3">
                        Pagamento único • Download imediato • Uso vitalício
                      </p>
                    </motion.div>

                    {/* CTA Button with pulse effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, type: "spring" }}
                      className="relative"
                    >
                      {/* Pulsing glow behind button */}
                      <div className="absolute inset-0 gradient-cta rounded-2xl blur-xl opacity-50 animate-pulse" />
                      
                      <Button
                        size="lg"
                        className="relative w-full gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg py-7 md:py-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 text-center whitespace-normal leading-tight group overflow-hidden"
                      >
                        {/* Shine sweep on hover */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative flex items-center justify-center gap-2">
                          <Download className="w-5 h-5" />
                          Quero meu Kit Premium agora!
                        </span>
                      </Button>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-xs md:text-sm text-muted-foreground"
                    >
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Garantia de 7 dias</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full">
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Compra 100% segura</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full">
                        <Download className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Acesso imediato</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};
