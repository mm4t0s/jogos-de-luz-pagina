import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "Planejamento cansativo e improvisado",
    after: "Aulas prontas e organizadas",
  },
  {
    before: "Crianças dispersas e desinteressadas",
    after: "Crianças participativas e engajadas",
  },
  {
    before: "Ensino bíblico repetitivo e monótono",
    after: "Ensino bíblico leve e divertido",
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

        <div className="max-w-3xl mx-auto space-y-4">
          {transformations.map((item, index) => (
            <ScrollReveal key={item.before} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-soft"
              >
                <span className="flex-1 text-muted-foreground line-through text-right text-sm md:text-base">
                  {item.before}
                </span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-cta flex items-center justify-center shadow-gold">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="flex-1 text-foreground font-medium text-sm md:text-base">
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