import { AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  "Crianças passando muito tempo nas telas",
  "Birras ao tirar o celular",
  "Falta de interesse quando o assunto é Bíblia",
  "Pouco tempo para planejar atividades cristãs",
  "Métodos tradicionais que não funcionam mais",
];

export const PainPointsSection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Você se identifica com alguma dessas situações?
              </h2>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/80 border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground text-sm md:text-base">
                <strong>O Kit Jogos de Luz foi criado para resolver exatamente isso</strong>, ensinando valores bíblicos de forma leve, prática e do jeito que a criança aprende hoje: <strong>brincando</strong>.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-8">
            <Button
              size="lg"
              className="gradient-cta shadow-gold text-primary-foreground font-bold text-base px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-3000"
              onClick={() => document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              Quero transformar a rotina da minha casa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
