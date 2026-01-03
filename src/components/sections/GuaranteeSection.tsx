import { ScrollReveal, FloatingElement } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      
      {/* Glow effects */}
      <FloatingElement delay={0} duration={10} y={20} className="absolute top-20 right-20">
        <div className="w-64 h-64 bg-gradient-radial from-gold-500/20 to-transparent rounded-full blur-3xl" />
      </FloatingElement>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Garantia incondicional de{" "}
                  <span className="text-gradient-gold">7 dias!</span>
                </motion.h2>

                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Nós acreditamos tanto na qualidade do <span className="font-bold text-white">Kit Premium Jogos de Luz</span> que você terá{" "}
                    <span className="font-bold text-white">7 dias completos para testar sem riscos</span>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Se por qualquer motivo você não ficar satisfeito com seu material, devolvemos{" "}
                    <span className="font-bold text-white">100% do seu investimento</span>, sem perguntas ou burocracias.
                  </p>
                  <p className="text-lg leading-relaxed flex items-start gap-2">
                    <span className="text-xl">🤝</span>
                    É a nossa forma de mostrar que sua confiança e tranquilidade estão em primeiro lugar.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Guarantee Badge */}
            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-xl opacity-50 scale-110" />
                  
                  {/* Badge */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-2 shadow-gold">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex flex-col items-center justify-center border-4 border-gold-300/50 p-6">
                      {/* Stars */}
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Sparkles key={star} className="w-4 h-4 text-gold-200" />
                        ))}
                      </div>
                      
                      {/* Text */}
                      <span className="text-gold-900 font-bold text-sm uppercase tracking-wider">Garantia</span>
                      <span className="text-6xl md:text-7xl font-display font-bold text-gold-900">7</span>
                      <span className="text-gold-900 font-bold text-2xl uppercase">DIAS</span>
                      <span className="text-gold-800 text-sm uppercase tracking-wider mt-1">Garantia</span>
                      
                      {/* Bottom stars */}
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Sparkles key={star} className="w-4 h-4 text-gold-200" />
                        ))}
                      </div>
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