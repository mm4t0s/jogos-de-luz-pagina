import { ScrollReveal, TiltCard, FloatingElement } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Clock, FileText, Users, Zap, Sparkles } from "lucide-react";
import { Product3DMockup } from "@/components/ui/product-3d-mockup";
import heroMockup from "@/assets/hero-mockup.jpg";

const features = [
  { icon: Clock, label: "10–20 min", sub: "por atividade" },
  { icon: FileText, label: "PDFs prontos", sub: "para imprimir" },
  { icon: Users, label: "Para toda", sub: "a família" },
  { icon: Zap, label: "Acesso", sub: "imediato" },
];

export const ProductSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow effects */}
      <FloatingElement delay={0} duration={12} y={30} className="absolute top-0 left-1/4">
        <div className="w-[500px] h-[500px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl" />
      </FloatingElement>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Conheça o Kit
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Apresentamos o{" "}
              <span className="text-gradient">Kit Premium Jogos de Luz</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O método prático para ensinar valores cristãos em casa,
              de forma leve, divertida e sem telas.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <TiltCard intensity={8}>
                  <div className="flex flex-col items-center p-6 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-elevated transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mb-4 shadow-gold">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-foreground text-lg">{feature.label}</span>
                    <span className="text-muted-foreground text-sm">{feature.sub}</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Preview */}
        <ScrollReveal delay={0.3} scale>
          <div className="max-w-5xl mx-auto">
            <Product3DMockup
              image={heroMockup}
              alt="Kit Premium Jogos de Luz - Preview"
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};