import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const SimplePricingBlock = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm md:text-base mb-4"
          >
            Tudo isso em um único kit, com acesso imediato.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xl md:text-2xl font-bold text-foreground">R$</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
                47
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              pagamento único
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              asChild
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Quero meu Kit Jogos de Luz
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
