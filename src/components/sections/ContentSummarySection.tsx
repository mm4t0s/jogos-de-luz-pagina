import { ScrollReveal, TiltCard } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const summaryItems = [
  { text: "Mais de 20 jogos bíblicos (físicos e digitais)", count: "20+" },
  { text: "Mais de 600 atividades cristãs prontas", count: "600+" },
  { text: "Mais de 75 desenhos bíblicos para colorir", count: "75+" },
];

export const ContentSummarySection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <TiltCard intensity={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-gold-400 to-accent rounded-[2rem] opacity-60 blur-sm animate-pulse-soft" />
                
                {/* Main card */}
                <div className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-card via-card to-secondary/50 border border-primary/10 shadow-3d overflow-hidden">
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-gold-400/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-primary/15 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                  
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center mb-6"
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        <Sparkles className="w-4 h-4" />
                        Acesso Completo
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
                      No Kit Premium <span className="text-gradient">Jogos de Luz</span> você recebe:
                    </h3>

                    {/* Items with animated numbers */}
                    <div className="space-y-6 mb-10">
                      {summaryItems.map((item, index) => (
                        <motion.div
                          key={item.text}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.15 }}
                          className="flex items-center gap-4 group"
                        >
                          {/* Animated check circle */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative flex-shrink-0"
                          >
                            <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:blur-lg transition-all" />
                            <div className="relative w-12 h-12 rounded-full gradient-cta flex items-center justify-center shadow-gold">
                              <Check className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
                            </div>
                          </motion.div>
                          
                          {/* Text with count highlight */}
                          <div className="flex-1">
                            <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.text}
                            </span>
                          </div>
                          
                          {/* Count badge */}
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="hidden md:flex items-center justify-center min-w-[60px] h-10 px-3 rounded-xl bg-gradient-to-r from-gold-400/20 to-primary/20 text-foreground font-bold text-lg border border-primary/20"
                          >
                            {item.count}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer text */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="text-center"
                    >
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                        Tudo organizado para uso ao longo do ano, em casa, na igreja ou no ministério infantil.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
