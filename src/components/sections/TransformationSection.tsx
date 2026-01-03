import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight, Frown, Smile } from "lucide-react";
import familyMoment from "@/assets/family-moment.jpg";

const beforeItems = [
  "Celulares na mão",
  "Crianças desinteressadas",
  "Falta de conexão",
  "Rotina espiritual inconsistente",
];

const afterItems = [
  "Risadas e participação ativa",
  "Crianças aprendendo brincando",
  "Momentos que viram tradição",
  "Fé vivida de forma natural",
];

export const TransformationSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            A transformação que você vai viver
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <ScrollReveal direction="left">
            <div className="relative p-8 rounded-3xl bg-card border border-destructive/20 shadow-soft overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/50 to-destructive/20" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Frown className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Antes</h3>
              </div>

              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-destructive/50" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* After Card */}
          <ScrollReveal direction="right">
            <div className="relative p-8 rounded-3xl bg-card border border-primary/20 shadow-elevated overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smile className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Depois</h3>
              </div>

              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-foreground font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Family Image */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={familyMoment}
                alt="Família feliz brincando juntos"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
