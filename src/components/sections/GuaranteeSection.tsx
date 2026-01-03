import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Garantia incondicional de 7 dias
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Use o material com sua família. Se não fizer sentido para você,{" "}
              <strong className="text-foreground">devolvemos 100% do valor</strong>. Sem perguntas.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
              <p className="text-muted-foreground italic">
                "Sua satisfação é nossa prioridade. Queremos que você tenha total segurança ao investir na educação cristã da sua família."
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
