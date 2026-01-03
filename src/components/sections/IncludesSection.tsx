import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Check, Gamepad2, Palette, Book, Heart, FileText, Sparkles } from "lucide-react";

const includes = [
  { icon: Gamepad2, text: "+20 jogos bíblicos interativos" },
  { icon: Sparkles, text: "+600 atividades cristãs prontas" },
  { icon: Palette, text: "+75 desenhos bíblicos para colorir" },
  { icon: Book, text: "Bíblia ilustrada (Antigo e Novo Testamento)" },
  { icon: Heart, text: "Devocional infantil simples e profundo" },
  { icon: FileText, text: "Material 100% digital para baixar e imprimir" },
];

export const IncludesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O que você recebe
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo em um só kit, pronto para usar
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <ScrollReveal key={item.text} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-cta flex items-center justify-center shadow-gold">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground">{item.text}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <p className="text-center text-muted-foreground mt-8 italic">
              As imagens exibidas representam apenas uma parte do conteúdo completo disponível no kit.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
