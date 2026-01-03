import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const summaryItems = [
  "Mais de 20 jogos bíblicos prontos para imprimir",
  "Mais de 600 atividades cristãs organizadas por tema",
  "Mais de 75 desenhos bíblicos para colorir",
  "Bíblia ilustrada e devocional infantil inclusos",
];

export const ContentSummarySection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-secondary/50 border border-border/50">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
                O que você recebe no Kit Completo:
              </h3>

              <div className="space-y-4">
                {summaryItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm mt-6">
                Material organizado para uso contínuo ao longo do ano. Pronto para aplicar em casa, na igreja ou no ministério infantil — elimina improviso e economiza tempo.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
