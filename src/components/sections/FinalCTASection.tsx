import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const FinalCTASection = () => {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground text-base md:text-lg mb-4 leading-relaxed">
              Hoje, por menos do que o valor de um brinquedo,
              <br />
              você pode investir em um material que ajuda a{" "}
              <strong className="text-gradient">formar valores eternos</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Tudo em um único kit
              </span>
              <span>•</span>
              <span>Acesso imediato</span>
              <span>•</span>
              <span>Garantia de 7 dias</span>
            </div>

            <Button
              size="lg"
              asChild
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero meu Kit Jogos de Luz agora
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
