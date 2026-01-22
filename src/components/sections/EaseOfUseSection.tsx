import { Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EaseOfUseSection = () => {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-secondary/50 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                Fácil de aplicar, mesmo na rotina corrida
              </h3>
            </div>

            <p className="text-muted-foreground text-sm md:text-base mb-4">
              Você não precisa planejar nem adaptar nada.
              <br />
              <strong className="text-foreground">É só baixar, imprimir e usar.</strong>
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">
                Atividades de <strong>10 a 20 minutos</strong>
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-3000"
              onClick={() => document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Quero atividades prontas para usar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
