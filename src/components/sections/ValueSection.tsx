import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Award, CheckCircle2 } from "lucide-react";

export const ValueSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-cta shadow-gold mb-6">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Tudo foi criado para <strong>facilitar a vida de pais, líderes e educadores cristãos</strong>,
              com material organizado, testado e pronto para uso imediato.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                "Material organizado",
                "Testado e aprovado",
                "Pronto para usar",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};