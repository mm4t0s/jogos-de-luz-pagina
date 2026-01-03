import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const ClosingSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
            >
              <Heart className="w-6 h-6 text-primary" />
            </motion.div>

            <p className="font-display text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
              "Ensinar a Palavra às crianças não precisa ser difícil. Com o material certo, pode ser leve, organizado e inesquecível."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};