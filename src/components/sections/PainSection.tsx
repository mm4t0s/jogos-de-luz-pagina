import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Smartphone, Clock, BookX, Heart } from "lucide-react";

const painPoints = [
  {
    icon: Smartphone,
    text: "Seu filho passa mais tempo nas telas do que em momentos de fé",
  },
  {
    icon: Clock,
    text: "Falta tempo para preparar atividades cristãs",
  },
  {
    icon: BookX,
    text: "Ensinar a Bíblia virou algo cansativo ou repetitivo",
  },
  {
    icon: Heart,
    text: "Você sente que poderia viver mais momentos com significado em família",
  },
];

export const PainSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Isso parece com a sua realidade hoje?
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <ScrollReveal key={point.text} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-elevated transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed pt-2">
                    {point.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                Você não está sozinho.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-foreground mt-2">
                E existe uma solução simples.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
