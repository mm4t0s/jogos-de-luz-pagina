import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const summaryItems = [
  "Mais de 20 jogos bíblicos prontos para imprimir",
  "Mais de 600 atividades cristãs organizadas por tema",
  "Mais de 75 desenhos bíblicos para colorir",
  "Bíblia ilustrada e devocional infantil inclusos",
  "Uso imediato, sem telas e sem improviso",
];

export const ContentSummarySection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-secondary/50 border border-border/50"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Quero meu Kit Jogos de Luz →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
