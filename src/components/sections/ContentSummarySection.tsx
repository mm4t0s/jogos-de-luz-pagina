import { Check, Package } from "lucide-react";

const summaryItems = [
  "Tudo o que está incluso no Kit Básico",
  "Mais de 600 atividades bíblicas prontas",
  "Mais de 20 jogos bíblicos interativos",
  "Material pronto para casa, igreja ou ministério infantil",
  "Ensino tradicional, sem telas",
];

export const ContentSummarySection = () => {
  return (
    <section id="conteudo" className="pt-4 pb-8 md:pt-6 md:pb-12 relative overflow-hidden bg-card">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-secondary/50 border border-border/50">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Package className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-center">
                O que você recebe no Kit Jogos de Luz
              </h3>
            </div>

            <div className="space-y-3">
              {summaryItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
