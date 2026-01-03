import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Garantia incondicional de{" "}
                  <span className="text-gradient-gold">7 dias!</span>
                </h2>

                <div className="space-y-3 text-gray-300 text-sm md:text-base">
                  <p>
                    Se por qualquer motivo você não ficar satisfeito, devolvemos{" "}
                    <strong className="text-white">100% do seu investimento</strong>.
                  </p>
                  <p className="flex items-start gap-2">
                    <span>🤝</span>
                    Sua confiança está em primeiro lugar.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-1.5 shadow-gold">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex flex-col items-center justify-center border-4 border-gold-300/50 p-4">
                      <div className="flex gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Sparkles key={star} className="w-3 h-3 text-gold-200" />
                        ))}
                      </div>
                      <span className="text-gold-900 font-bold text-xs uppercase tracking-wider">Garantia</span>
                      <span className="text-5xl md:text-6xl font-display font-bold text-gold-900">7</span>
                      <span className="text-gold-900 font-bold text-xl uppercase">DIAS</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
