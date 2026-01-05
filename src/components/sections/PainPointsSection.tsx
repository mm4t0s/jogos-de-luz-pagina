import { motion } from "framer-motion";
import { AlertCircle, Check } from "lucide-react";

const painPoints = [
  "Crianças passando muito tempo nas telas",
  "Birras ao tirar o celular",
  "Falta de interesse quando o assunto é Bíblia",
  "Pouco tempo para planejar atividades cristãs",
  "Métodos tradicionais que não funcionam mais",
];

export const PainPointsSection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Você se identifica com alguma dessas situações?
              </h2>
            </div>
          </motion.div>

          <div className="space-y-3 mb-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/80 border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-5 rounded-2xl bg-primary/10 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground text-sm md:text-base">
                <strong>O Kit Jogos de Luz foi criado para resolver exatamente isso</strong>, ensinando valores bíblicos de forma leve, prática e do jeito que a criança aprende hoje: <strong>brincando</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
