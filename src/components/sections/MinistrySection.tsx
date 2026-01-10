import { Church, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MinistrySection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-cta shadow-gold mb-6">
            <Church className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Também perfeito para Ministério Infantil e EBD
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 px-2">
            Material pronto para <strong className="text-foreground">eliminar o improviso</strong>. 
            Ideal para líderes, professores de EBD e voluntários.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 px-4 sm:px-0 mb-8">
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

          {/* CTA */}
          <Button
            size="lg"
            onClick={() => {
              document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gradient-cta shadow-gold text-primary-foreground font-bold text-base px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-3000"
          >
            Quero meu Kit Jogos de Luz →
          </Button>
        </div>
      </div>
    </section>
  );
};
