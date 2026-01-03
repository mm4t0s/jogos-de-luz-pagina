import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles, CheckCircle2 } from "lucide-react";

const benefits = [
  { emoji: "❤️", text: "Valores Cristãos Sólidos – ensino bíblico seguro e divertido" },
  { emoji: "🧠", text: "Desenvolvimento Completo – habilidades cognitivas, motoras e criativas" },
  { emoji: "⏰", text: "Tempo de Qualidade – atividades que aproximam crianças e educadores" },
  { emoji: "🎨", text: "Qualidade Premium – ilustrações detalhadas e prontas para imprimir" },
  { emoji: "⚡", text: "Acesso Vitalício & Entrega Imediata – material sempre disponível" },
  { emoji: "🔒", text: "Garantia de 7 dias – total segurança na compra" },
  { emoji: "📞", text: "Suporte via WhatsApp – ajuda completa para download e utilização" },
];

export const FinalCTASection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Benefícios do Kit Premium Jogos de Luz
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 py-4 border-b border-border/50 last:border-0"
                  >
                    <span className="text-xl flex-shrink-0">{benefit.emoji}</span>
                    <span className="text-lg text-foreground">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToPrice}
                  className="gradient-cta shadow-gold text-primary-foreground font-bold text-xl px-12 py-8 rounded-2xl group shine overflow-hidden"
                >
                  <span>ACESSAR AGORA!</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};