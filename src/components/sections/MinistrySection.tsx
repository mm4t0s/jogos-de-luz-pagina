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

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Perfeito para Ministério Infantil e EBD
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Kit Jogos de Luz foi criado para <strong className="text-foreground">eliminar o improviso no ensino infantil</strong>, oferecendo material bíblico pronto, didático e envolvente, para que líderes e professores foquem no ensino da Palavra com excelência.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: BookOpen, text: "Material didático pronto" },
                { icon: Users, text: "Fácil de aplicar em grupo" },
                { icon: Church, text: "Ideal para igrejas" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
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