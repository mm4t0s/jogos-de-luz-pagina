import { ScrollReveal, TiltCard, FloatingElement } from "@/components/ui/scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Download, Sparkles, Star, Check } from "lucide-react";
import { useRef } from "react";
import bannerCheckout from "@/assets/banner-checkout.png";

const benefits = [
  "Kit completo para crianças de 4 a 12 anos",
  "+20 jogos bíblicos prontos para imprimir",
  "+600 atividades cristãs organizadas por tema",
  "+75 desenhos bíblicos para colorir",
  "Bíblia ilustrada e devocional infantil inclusos",
  "Uso vitalício em casa, igreja ou ministério infantil",
];

// Corner decoration component
const CornerDecoration = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const positions = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 rotate-90',
    bl: 'bottom-0 left-0 -rotate-90',
    br: 'bottom-0 right-0 rotate-180',
  };

  return (
    <div className={`absolute ${positions[position]} w-12 h-12 pointer-events-none`}>
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-primary">
        <path
          d="M0 0 L48 0 L48 8 L8 8 L8 48 L0 48 Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
};

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
      id="pricing-section" 
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
              {/* Premium frame container */}
              <div className="relative p-2 md:p-3">
                {/* Outer decorative border */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30" />
                
                {/* Decorative pattern overlay */}
                <div 
                  className="absolute inset-0 rounded-[2rem] opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Inner card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-card via-card to-secondary/30 shadow-3d">
                  {/* Corner decorations */}
                  <CornerDecoration position="tl" />
                  <CornerDecoration position="tr" />
                  <CornerDecoration position="bl" />
                  <CornerDecoration position="br" />

                  {/* Top ribbon */}
                  <motion.div 
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="relative bg-gradient-to-r from-primary via-accent to-primary py-3 px-4"
                  >
                    {/* Ribbon shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <p className="relative text-center text-primary-foreground font-bold text-sm md:text-base flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      OFERTA ESPECIAL POR TEMPO LIMITADO
                      <Sparkles className="w-4 h-4" />
                    </p>
                  </motion.div>

                  <div className="p-5 md:p-8">
                    {/* Best seller badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.25 }}
                      className="flex justify-center mb-4"
                    >
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-md opacity-60 animate-pulse" />
                        
                        <div className="relative flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-gold border border-white/20">
                          <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                          <span className="text-primary-foreground font-bold text-sm tracking-wide">
                            MAIS VENDIDO
                          </span>
                          <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner Image with premium frame */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative mb-6"
                    >
                      {/* Image frame border */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-2xl" />
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl" />
                      
                      <div className="relative rounded-xl overflow-hidden shadow-elevated">
                        <img
                          src={bannerCheckout}
                          alt="Kit Premium Jogos de Luz - Ensinar a Bíblia pode ser leve, divertido e inesquecível"
                          className="w-full h-auto"
                          loading="lazy"
                        />
                        {/* Overlay glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                      className="text-center mb-6"
                    >
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        Kit Premium Jogos de Luz
                      </h2>
                      <p className="text-muted-foreground mt-2 text-sm md:text-base">
                        Material pronto para ensinar a Palavra de forma leve, organizada e sem telas.
                      </p>
                    </motion.div>

                    {/* Benefits list */}
                    <div className="space-y-2.5 mb-6">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/80 to-secondary/40 border border-primary/10 hover:border-primary/30 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-3.5 h-3.5 text-primary-foreground" />
                          </div>
                          <span className="text-foreground text-sm font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Price box with premium styling */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="relative text-center p-6 md:p-8 rounded-2xl mb-6 overflow-hidden"
                    >
                      {/* Price box background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted/50 to-secondary/80" />
                      
                      {/* Decorative border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary/20" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

                      <div className="relative">
                        <p className="text-muted-foreground mb-2 text-sm">De <span className="line-through">R$97</span> por apenas</p>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-foreground">R$</span>
                          <motion.span 
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                            className="font-display text-6xl md:text-8xl font-bold text-gradient drop-shadow-sm"
                          >
                            47
                          </motion.span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-3">
                          Pagamento único • Download imediato • Uso vitalício
                        </p>
                      </div>
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
                        asChild
                        className="relative w-full gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg py-7 md:py-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 text-center whitespace-normal leading-tight group overflow-hidden"
                      >
                        <a href="https://pay.cakto.com.br/3bnyiqi_657025" target="_blank" rel="noopener noreferrer">
                          {/* Shine sweep on hover */}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span className="relative flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            Quero meu Kit Completo agora
                          </span>
                        </a>
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
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Garantia de 7 dias</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Compra 100% segura</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
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
