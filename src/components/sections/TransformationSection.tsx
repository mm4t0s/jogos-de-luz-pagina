import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "Falta de tempo para planejar aulas",
    after: "Material pronto para uso imediato",
  },
  {
    before: "Improviso e estresse toda semana",
    after: "Rotina estruturada e organizada",
  },
  {
    before: "Crianças dispersas e desatentas",
    after: "Crianças participativas e engajadas",
  },
  {
    before: "Ensino repetitivo e cansativo",
    after: "Ensino bíblico leve e memorável",
  },
];

export const TransformationSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10">
            A Transformação Que Vai Acontecer
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 px-4 md:px-0">
          {transformations.map((item, index) => (
            <ScrollReveal key={item.before} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border/50 shadow-soft"
              >
                <span className="sm:flex-1 text-muted-foreground line-through text-center sm:text-right text-sm">
                  {item.before}
                </span>
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-cta flex items-center justify-center shadow-gold">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <span className="sm:flex-1 text-foreground font-medium text-center sm:text-left text-sm">
                  {item.after}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};