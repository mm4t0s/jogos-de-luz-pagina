import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Church, BookOpen, Users } from "lucide-react";

export const MinistrySection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-cta shadow-gold mb-6"
            >
              <Church className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
              Perfeito para Ministério Infantil e EBD
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 px-2">
              Desenvolvido para <strong className="text-foreground">eliminar o improviso e economizar tempo</strong> de quem ensina. Material bíblico pronto, didático e envolvente para que líderes, professores de EBD e voluntários foquem no que importa: ensinar a Palavra com excelência.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 px-4 sm:px-0">
              {[
                { icon: BookOpen, text: "Material pronto para usar" },
                { icon: Users, text: "Ideal para grupos e turmas" },
                { icon: Church, text: "Perfeito para igrejas e EBD" },
              ].map((item) => (
                <div key={item.text} className="flex items-center justify-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};