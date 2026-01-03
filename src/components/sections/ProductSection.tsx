import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Clock, FileText, Users, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const features = [
  { icon: Clock, label: "10–20 minutos", sub: "por atividade" },
  { icon: FileText, label: "PDFs prontos", sub: "para imprimir" },
  { icon: Users, label: "Para toda", sub: "a família" },
  { icon: Zap, label: "Acesso", sub: "imediato" },
];

export const ProductSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Conheça o Kit
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Apresentamos o{" "}
              <span className="text-gradient">Kit Premium Jogos de Luz</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O método prático para ensinar valores cristãos em casa,
              de forma leve, divertida e sem telas.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex flex-col items-center p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-bold text-foreground text-lg">{feature.label}</span>
                <span className="text-muted-foreground text-sm">{feature.sub}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Product Preview */}
        <ScrollReveal delay={0.3}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl transform scale-90" />
            <img
              src={heroMockup}
              alt="Kit Premium Jogos de Luz - Preview"
              className="relative w-full rounded-3xl shadow-elevated"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
