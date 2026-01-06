import { HelpCircle, ArrowRight } from "lucide-react";

const objections = [
  {
    question: "Meu filho vai gostar?",
    answer: "Sim. As atividades são lúdicas, visuais e participativas.",
  },
  {
    question: "Preciso ter experiência para aplicar?",
    answer: "Não. Todo o material já vem pronto.",
  },
  {
    question: "Funciona para várias idades?",
    answer: "Sim. Indicado para crianças de 4 a 12 anos.",
  },
  {
    question: "É só para pais?",
    answer: "Não. Também ideal para igrejas, EBD e ministério infantil.",
  },
];

export const ObjectionsSection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Talvez você esteja se perguntando…
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {objections.map((obj) => (
              <div
                key={obj.question}
                className="p-4 rounded-xl bg-card border border-border/50"
              >
                <p className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {obj.question}
                </p>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{obj.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
