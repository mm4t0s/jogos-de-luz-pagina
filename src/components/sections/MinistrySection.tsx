import { Church, BookOpen, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MinistrySection = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Decorative Background */}
      <div className="absolute top-10 left-[10%] text-orange-200 opacity-30 animate-pulse delay-700">
        <Sparkles className="w-12 h-12 rotate-12" />
      </div>
      <div className="absolute bottom-10 right-[10%] text-primary/10 opacity-20 hidden md:block">
        <Church className="w-32 h-32 -rotate-12" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-md border border-orange-100 rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-orange-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-cta shadow-gold mb-8 transform hover:scale-110 transition-transform duration-500">
            <Church className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Também perfeito para <br className="hidden md:block" />
            <span className="text-primary">Ministério Infantil e EBD</span>
          </h2>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Material pronto para <strong className="text-foreground font-semibold bg-orange-100/50 px-1 rounded">eliminar o improviso</strong>.
            Ideal para líderes, professores de EBD e voluntários.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {[
              { icon: BookOpen, text: "Material pronto para usar" },
              { icon: Users, text: "Ideal para grupos e turmas" },
              { icon: Church, text: "Perfeito para igrejas e EBD" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 bg-white border border-orange-100 px-5 py-3 rounded-full shadow-sm text-sm md:text-base font-medium text-muted-foreground hover:border-orange-200 hover:text-primary transition-colors">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            size="lg"
            onClick={() => {
              document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="gradient-cta shadow-gold text-primary-foreground font-bold text-lg px-10 py-8 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto animate-none"
          >
            Quero meu Kit Jogos de Luz →
          </Button>
        </div>
      </div>
    </section>
  );
};
