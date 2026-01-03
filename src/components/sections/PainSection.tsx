import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Smartphone, Clock, BookX, Heart } from "lucide-react";

const painPoints = [
  {
    icon: Smartphone,
    emoji: "📱",
    text: "As telas parecem sempre vencer a atenção dos seus filhos?",
  },
  {
    icon: Clock,
    emoji: "😓",
    text: "Os materiais de ensino que você encontra são chatos e não engajam?",
  },
  {
    icon: BookX,
    emoji: "🕐",
    text: "Falta tempo na rotina para preparar atividades criativas?",
  },
];

export const PainSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Header with accent bar */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12"
            >
              <div className="bg-destructive/90 text-white py-4 px-8 rounded-2xl text-center">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold">
                  Você reconhece algum destes sinais?
                </h2>
              </div>
            </motion.div>

            {/* Pain points */}
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <ScrollReveal key={point.text} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300">
                      <span className="text-2xl">{point.emoji}</span>
                      <p className="text-lg md:text-xl text-foreground leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                    {/* Dotted line connector */}
                    {index < painPoints.length - 1 && (
                      <div className="absolute left-8 top-full h-4 border-l-2 border-dashed border-border" />
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Solution teaser */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16 text-center">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                >
                  Agora existe uma solução completa e simples!
                </motion.h3>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Apresentamos o <span className="font-bold text-gradient">Kit Premium Jogos de Luz</span>, a solução completa e organizada...
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};